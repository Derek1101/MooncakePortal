from django.shortcuts import render, redirect
from django.http import Http404, HttpResponse, HttpResponseBadRequest
from django.template import RequestContext
from django.core.exceptions import ObjectDoesNotExist
from datetime import datetime, timezone, timedelta
from .models import Service, Article, Labor_type, Record, Record_article, Work_date_exception
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User, Group
from django.db.models import Sum
from django.views.decorators.cache import never_cache
from math import floor, ceil
from MooncakePortal.clearCache import expire_cache
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

@login_required
def mainpage(request):
    user_id = request.user.id
    if Group.objects.get(name="Administrator") in request.user.groups.all():
        disabled = False
    else:
        disabled = True
    users = Group.objects.get(name="User").user_set.all()
    services = Service.objects.order_by("id")
    articles = Article.objects.filter(service_id = services[0].id).order_by("filename")
    labor_types = Labor_type.objects.order_by("id")
    today = datetime.now(timezone(timedelta(0, 28800)))
    start_day = today - timedelta(0, 86400*(today.day-1))
    return render(
        request,
        'UT/mainpage.html',
        context_instance = RequestContext(request,
        {
            'title':'UT',
            'year':datetime.now().year,
            "services":services,
            "articles":articles,
            "labor_types":labor_types,
            "users":users,
            "today":datetime.strftime(today, "%Y-%m-%d"),
            "start_day":datetime.strftime(start_day, "%Y-%m-%d"),
            "user_id":user_id,
            "disabled":disabled,
        })
    )

@login_required
def updatearticles(request, service_id):
    articles = Article.objects.filter(service_id = int(service_id)).order_by("filename")
    return render(
        request,
        'UT/articleList.html',
        context_instance = RequestContext(request,
        {
            "articles":articles,
        })
    )

@login_required
def submitReport(request):
    print(request.POST["submitDate"])
    record = Record(comments=request.POST["comments"], creater=request.user, submit_time=datetime.now(timezone(timedelta(0, 28800))), UT_time=datetime.strptime(request.POST["submitDate"] + " +0800", "%Y-%m-%d %z"), duration=int(request.POST["duration"]), labor_type_id=int(request.POST["labor_type"]))
    record.save()
    article_ids = [int(id) for id in request.POST["article_ids"].split(",") if id!=""]
    for id in article_ids:
        record_article = Record_article(record=record, article_id=id)
        print("article: "+str(id))
        record_article.save()
    return redirect("/ut/")

@never_cache
@login_required
def recordSearch(request, labor_id, start_date, end_date, labor_type):
    currentUser = request.user
    user = User.objects.get(id=int(labor_id))
    if not(Group.objects.get(name="Administrator") in currentUser.groups.all() or user.id == currentUser.id):
        return HttpResponse("Sorry, you don't have permission to view %s's report"%user.username)
    start = datetime.strptime(start_date + " +0800", "%Y-%m-%d %z")
    end = datetime.strptime(end_date + " +0800", "%Y-%m-%d %z")
    delta = end - start
    days = delta.days
    holiday = 0
    startWeekday = start.weekday()
    endWeekday = end.weekday()
    if startWeekday==5:
        holiday+=2
        days-=2
        startWeekday=0
    elif startWeekday==6:
        holiday+=1
        days-=1
        startWeekday=0
    if endWeekday==5:
        holiday+=1
        days-=1
        endWeekday=4
    elif endWeekday==6:
        holiday+=2
        days-=2
        endWeekday=4
    weeks = floor(days/7.0)
    if startWeekday>endWeekday:
        weeks+=1
    holiday+= weeks*2
    print(holiday)
    end = end + timedelta(0, 86399)
    exceptions = Work_date_exception.objects.filter(date__gte=start, date__lte=end)
    for exception in exceptions:
        if exception.holiday:
            holiday+= 1
        else:
            holiday-= 1
    workdays = delta.days+1-holiday
    query = user.record_set.filter(UT_time__gte=start,
                                   UT_time__lte=end)
    if labor_type != "all":
        query = query.filter(labor_type=int(labor_type))
    
    query2 = query.filter(labor_type=7)
    totalminutes = query.aggregate(Sum("duration"))['duration__sum']
    stackoverflowminutes = query2.aggregate(Sum("duration"))['duration__sum']
    if stackoverflowminutes==None:
        stackoverflowminutes = 0
    if totalminutes==None:
        totalminutes = 0
    totalhours = totalminutes/60.0
    contenthours = (totalminutes - stackoverflowminutes)/60.0
    username = user.username
    if workdays<=0:
        percentage = "N/A"
        contentpercentage = "N/A"
    else:
        percentage = "{:10.2f}".format(totalhours*100/(workdays*8.0))
        contentpercentage = "{:10.2f}".format(contenthours*100/(workdays*8.0))
    return render(
        request,
        'UT/reportTable.html',
        context_instance = RequestContext(request,
        {
            "totalminutes":totalminutes,
            "totalhours":"{:10.2f}".format(totalhours),
            "username":username,
            "workdays":workdays,
            "percentage":percentage,
            "contenthours":"{:10.2f}".format(contenthours),
            "contentpercentage":contentpercentage,
        })
    )

@login_required
def getLog(request, user_id, record_num):
    currentUser = request.user
    user = User.objects.get(id=int(user_id))
    if not(Group.objects.get(name="Administrator") in currentUser.groups.all() or user.id == currentUser.id):
        return HttpResponse("Sorry, you don't have permission to view %s's records"%user.username)
    records = Record.objects.filter(creater=user).order_by("-id")[:int(record_num)]
    for record in records:
        record.UT_time = datetime.strftime(record.UT_time.astimezone(timezone(timedelta(0, 28800))), "%b. %d, %Y")
    if Group.objects.get(name="Administrator") in currentUser.groups.all():
        isAdmin = True
        users = Group.objects.get(name="User").user_set.all()
    else:
        isAdmin = False
        users = []
    return render(
        request,
        'UT/records.html',
        context_instance = RequestContext(request,
        {
            "records":records,
            "isAdmin":isAdmin,
            "users":users,
            "start":0,
            "end":10,
        })
    )

@login_required
@never_cache
def getLogByDuration(request, user_id, start, end, page):
    currentUser = request.user
    user = User.objects.get(id=int(user_id))
    page=int(page)
    if not(Group.objects.get(name="Administrator") in currentUser.groups.all() or user.id == currentUser.id):
        return HttpResponse("Sorry, you don't have permission to view %s's records"%user.username)
    start_date = datetime.strptime(start + " +0800", "%Y-%m-%d %z")
    end_date = datetime.strptime(end + " +0800", "%Y-%m-%d %z") + timedelta(0, 86399)
    records = Record.objects.filter(creater=user, UT_time__gte=start_date, UT_time__lte=end_date).order_by("-id")
    pageCount = ceil(len(records)/10.0)
    records = records[page*10:(page+1)*10]
    for record in records:
        record.UT_time = datetime.strftime(record.UT_time.astimezone(timezone(timedelta(0, 28800))), "%b. %d, %Y")
    return render(
        request,
        'UT/records.html',
        context_instance = RequestContext(request,
        {
            "records":records,
            "user_id":user_id,
            "start":start,
            "end":end,
            "range":range(1,pageCount+1),
            "currentpage":page+1,
        })
    )

def _add(article):
    path = article.split("/")
    if len(path)==3:
        relative_path = path[0]+"/"+path[1]+"/"
        filename = path[2]
    elif len(path)==2:
        relative_path = path[0]+"/"
        filename = path[1]
    else:
        return article+": relative path error", -1
    if filename[len(filename)-3:]==".md" or filename[len(filename)-3:]==".MD":
        filename = filename[:len(filename)-3]
    if relative_path == "articles/HDInsight/":
        relative_path = "articles/hdinsight/"
    articles = Article.objects.filter(filename=filename)
    try:
        service = Service.objects.get(relative_path=relative_path)
    except ObjectDoesNotExist:
        return article+": no service with this relative path", -1
    if len(articles)>0:
        for exist_article in articles:
            if exist_article.service.name != "Includes":
                return article+": is already in "+exist_article.service.name, -1
    new_article = Article(service=service, status="unknown", filename=filename)
    new_article.save()
    return article+": added", service.id

@never_cache
@login_required
def addArticles(request):
    try:
        article_list = request.POST["article_list"]
    except KeyError:
        return render(
            request,
            'UT/addArticles.html',
            context_instance = RequestContext(request,
            {
            })
        )
    articles = list(set([article.strip() for article in article_list.split("\n")]));
    messages = []
    updated_service_ids = []
    for article in articles:
        message, service_id = _add(article)
        messages.append(message)
        if service_id!=-1:
            updated_service_ids.append(service_id)
    updated_service_ids = list(set(updated_service_ids))
    for service_id in updated_service_ids:
        print(expire_cache("UT.views.updatearticles", args=[service_id], HOSTNAME=request.META['HTTP_HOST']))
    return render(
            request,
            'UT/addArticles.html',
            context_instance = RequestContext(request,
            {
                "logs":messages,
            })
        )

def _getArticle(article):
    print(article)
    path = article.split("/")
    if len(path)==3:
        relative_path = path[0]+"/"+path[1]+"/"
        filename = path[2]
    elif len(path)==2:
        relative_path = path[0]+"/"
        filename = path[1]
    else:
        return None, -1
    if filename[len(filename)-3:]==".md" or filename[len(filename)-3:]==".MD":
        filename = filename[:len(filename)-3]
    type = path[0]
    if type == "articles":
        articles = Article.objects.filter(filename=filename)
        if len(articles) > 0:
            for exitArticle in articles:
                if exitArticle.service.name != "Includes":
                    return exitArticle, -1
        _add(article)
        try:
            articleObject = Article.objects.get(filename=filename)
        except ObjectDoesNotExist:
            return None, -1
        return articleObject, articleObject.service.id
    elif type == "includes":
        articles = Article.objects.filter(filename=filename)
        if len(articles) > 0:
            for exitArticle in articles:
                if exitArticle.service.name == "Includes":
                    return exitArticle, -1
        _add(article)
        try:
            articleObject = Article.objects.get(filename=filename)
        except ObjectDoesNotExist:
            return None, -1
        return articleObject, articleObject.service.id
    else:
        return None, -1

@csrf_exempt
@login_required
@never_cache
def selectArticlesWithText(request):
    try:
        article_list = request.META["HTTP_TEXT"]
    except KeyError:
        return HttpResponseBadRequest()
    articles = list(set([article.strip() for article in article_list.split("%%n%%")]));
    print()
    messages = []
    updated_service_ids = []
    articlesObjects = []
    for article in articles:
        articleObject, service_id = _getArticle(article)
        if articleObject != None:
            articlesObjects.append(articleObject)
        if service_id!=-1:
            updated_service_ids.append(service_id)
    updated_service_ids = list(set(updated_service_ids))
    for service_id in updated_service_ids:
        print(expire_cache("UT.views.updatearticles", args=[service_id], HOSTNAME=request.META['HTTP_HOST']))
    print(len(articlesObjects))
    return render(
            request,
            'UT/selectArticles.html',
            context_instance = RequestContext(request,
            {
                "articles":list(set(articlesObjects)),
            })
        )