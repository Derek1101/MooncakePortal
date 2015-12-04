from django.shortcuts import render, redirect
from django.http import Http404, HttpResponse
from django.template import RequestContext
from datetime import datetime
from .models import Service, Article, Labor_type, Record, Record_article
from django.contrib.auth.decorators import login_required
# Create your views here.

@login_required
def mainpage(request):
    username = request.user.username
    services = Service.objects.order_by("id")
    articles = Article.objects.filter(service_id = services[0].id).order_by("filename")
    labor_types = Labor_type.objects.order_by("id")
    records = Record.objects.filter(creater=request.user)[:10]
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
            "username":username,
            "records":records,
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
    record = Record(comments=request.POST["comments"], creater=request.user, submit_time=request.POST["submitDate"], duration=int(request.POST["duration"]), labor_type_id=int(request.POST["labor_type"]))
    record.save()
    article_ids = [int(id) for id in request.POST["article_ids"].split(",") if id!=""]
    for id in article_ids:
        record_article = Record_article(record=record, article_id=id)
        print("article: "+str(id))
        record_article.save()
    return redirect("/ut/")