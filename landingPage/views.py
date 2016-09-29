# Create your views here.
from django.http import Http404, HttpResponse
from django.shortcuts import render_to_response, get_object_or_404, redirect, RequestContext
from landingPage.models import Landing_page, Navigation, Navigation_article, Navigation_group, Recent_update, Service, Tutorial_option, Video_link, Meta_data
from django.template import loader, Template, Context
from django.template.loader_tags import BlockNode, TextNode
import json
from django.views.decorators.csrf import csrf_exempt
import re
from django.contrib.auth.decorators import login_required
from landingPage.xmlModel import parseJsonToXml
from django.views.decorators.cache import never_cache
from MooncakePortal.clearCache import expire_cache
from landingPage.htmlToJsonParser import navigationParse
from translate import Translator
from landingPage.forms import PNGForm
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
import os
from azure.storage.blob.blockblobservice import BlockBlobService
from os import environ
from azure.storage.blob import ContentSettings

default_storage_account = environ.get("STORAGE_ACCOUNT")
if default_storage_account == None:
    default_storage_account = "devstoreaccount1"
    default_storage_key = ""
    BLOB_URL = "//127.0.0.1:10000/devstoreaccount1/"
    blob_service = BlockBlobService(connection_string="UseDevelopmentStorage=true")
else:
    default_storage_key = environ.get("STORAGE_KEY")
    BLOB_URL = "//acncontentteam.blob.core.windows.net/"
    blob_service = BlockBlobService(account_name=default_storage_account, account_key=default_storage_key)

RELATIVE_PATH = "/static/landingPage/"
BLOB_PATH = "//resource.cdn.azure.cn/tech-content/"


@login_required
def landingPage(request, service_id):
    if service_id == "virtual-machines":
        return render_to_response('landingPage/VM.html', {"service_name":"虚拟机",
                                                          "service_id":"virtual-machines",
                                                                     "cssLink":RELATIVE_PATH+"style/frame2.css",
                                                                     "jqueryLink":RELATIVE_PATH+"script/jquery-2.1.4.js",
                                                                     "jsLink":RELATIVE_PATH+"script/responsive.js",
                                                                     "imgLink":RELATIVE_PATH+"img/"})

    service = get_object_or_404(Service, service_id=service_id)
    metaData = service.meta_data_set.all()[0]
    landingpage = service.landing_page_set.all()[0]
    tutorial_options = landingpage.tutorial_option_set.all().order_by("order")
    first_option_title = tutorial_options[0].title
    first_option_link = tutorial_options[0].link
    template_file = 'landingPage/frame.html'
    navigationJson = re.sub(r"(\"https?://azure.microsoft.com(/zh\-cn)?/)|(\"(/zh\-cn)?/)","\"https://www.windowsazure.cn/",landingpage.navigationJson).replace("'", "\\'").replace("\n", "")
    #navigationJson = re.sub(r"/home/features/([^/|^#|^\"|^\'|^\)|^\s]+)/pricing/?", r"/pricing/details/\1/", navigationJson)
    #navigationJson = re.sub(r"/home/features/([^/|^#|^\"|^\'|^\)|^\s]+)/calculator/?", r"/pricing/calculator/\1/", navigationJson)
    recentUpdates = list(landingpage.recent_update_set.all().order_by("order"))
    #for i in range(len(recentUpdates)):
    #    recentUpdates[i].detail = re.sub(r"/home/features/([^/|^#|^\"|^\'|^\)|^\s]+)/pricing/?", r"/pricing/details/\1/", recentUpdates[i].detail)
    #    recentUpdates[i].detail = re.sub(r"/home/features/([^/|^#|^\"|^\'|^\)|^\s]+)/calculator/?", r"/pricing/calculator/\1/", recentUpdates[i].detail)
    return render_to_response(template_file, {"service_name":service.service_name,
                                              "service_id":service.service_id,
                                                                     "subtitle":landingpage.subtitle, 
                                                                     "tutorial_message":landingpage.tutorial_message,
                                                                     "update_search_link":landingpage.update_search_link,
                                                                     "navigationJson":navigationJson,
                                                                     "first_option_title":first_option_title,
                                                                     "first_option_link":first_option_link,
                                                                     "options":tutorial_options,
                                                                     "videoLinks":landingpage.video_link_set.all().order_by("order")[:3],
                                                                     "recentUpdates":recentUpdates,
                                                                     "cssLink":RELATIVE_PATH+"style/frame2.css",
                                                                     "jqueryLink":RELATIVE_PATH+"script/jquery-2.1.4.js",
                                                                     "jsLink":RELATIVE_PATH+"script/responsive.js",
                                                                     "imgLink2":BLOB_URL+"img/",
                                                                     "imgLink":RELATIVE_PATH+"img/",
                                                                     "azure":True,
                                                                     "metaKeywords":metaData.meta_keywords,
                                                                     "metaDescription":metaData.meta_description,
                                                                     "newLinkCount":landingpage.newLinkCount,
                                                                     "newGroupCount":landingpage.newGroupCount})

def landingPageEdit(request, service_id):
    service = get_object_or_404(Service, service_id=service_id)
    metaData = service.meta_data_set.all()[0]
    landingpage = service.landing_page_set.all()[0]
    tutorial_options = landingpage.tutorial_option_set.all().order_by("order")
    first_option_title = tutorial_options[0].title
    first_option_link = tutorial_options[0].link
    template_file = 'landingPage/frame_edit.html'
    navigationJson = re.sub(r"(\"https?://azure.microsoft.com(/zh\-cn)?/)|(\"(/zh\-cn)?/)","\"https://www.windowsazure.cn/",landingpage.navigationJson).replace("'", "\\'").replace("\n", "")
    #navigationJson = re.sub(r"/home/features/([^/|^#|^\"|^\'|^\)|^\s]+)/pricing/?", r"/pricing/details/\1/", navigationJson)
    #navigationJson = re.sub(r"/home/features/([^/|^#|^\"|^\'|^\)|^\s]+)/calculator/?", r"/pricing/calculator/\1/", navigationJson)
    recentUpdates = list(landingpage.recent_update_set.all().order_by("order"))
    #for i in range(len(recentUpdates)):
    #    recentUpdates[i].detail = re.sub(r"/home/features/([^/|^#|^\"|^\'|^\)|^\s]+)/pricing/?", r"/pricing/details/\1/", recentUpdates[i].detail)
    #    recentUpdates[i].detail = re.sub(r"/home/features/([^/|^#|^\"|^\'|^\)|^\s]+)/calculator/?", r"/pricing/calculator/\1/", recentUpdates[i].detail)
    images = [f.name for f in blob_service.list_blobs('img')]
    form = PNGForm()
    return render_to_response(template_file, {"service_name":service.service_name,
                                              "service_id":service.service_id,
                                              'images':images,
                                              'form': form,
                                                                     "subtitle":landingpage.subtitle, 
                                                                     "tutorial_message":landingpage.tutorial_message,
                                                                     "update_search_link":landingpage.update_search_link,
                                                                     "navigationJson":navigationJson,
                                                                     "first_option_title":first_option_title,
                                                                     "first_option_link":first_option_link,
                                                                     "options":tutorial_options,
                                                                     "videoLinks":landingpage.video_link_set.all().order_by("order")[:3],
                                                                     "recentUpdates":recentUpdates,
                                                                     "cssLink":RELATIVE_PATH+"style/frame2.css",
                                                                     "jqueryLink":RELATIVE_PATH+"script/jquery-2.1.4.js",
                                                                     "jsLink":RELATIVE_PATH+"script/responsive.js",
                                                                     "imgLink2":BLOB_URL+"img/",
                                                                     "imgLink":RELATIVE_PATH+"img/",
                                                                     "azure":True,
                                                                     "metaKeywords":metaData.meta_keywords,
                                                                     "metaDescription":metaData.meta_description,
                                                                     "newLinkCount":landingpage.newLinkCount,
                                                                     "newGroupCount":landingpage.newGroupCount})

@login_required
def index(request):
    services = Service.objects.all()
    return render_to_response('landingPage/index.html', {"services":services})

@login_required
def xmlnavgenerator(request, service_id):
    service = get_object_or_404(Service, service_id=service_id)
    landingpage = service.landing_page_set.all()[0]
    navigationJson = re.sub(r"(\"https?://(azure.microsoft.com|www.windowsazure.cn|acncontentteam.azurewebsites.net|127.0.0.1:8000|10.168.177.43:8000)(/zh\-cn)?/)|(\"(/zh\-cn)?/)","\"/",landingpage.navigationJson)
    navxml = parseJsonToXml(navigationJson)
    return render_to_response('landingPage/xmlNavGenerator.html',{"xmlContent":navxml.strip()})

@login_required
def jsonnavgenerator(request, service_id):
    service = get_object_or_404(Service, service_id=service_id)
    landingpage = service.landing_page_set.all()[0]
    navigationJson = re.sub(r"(\"https?://(azure.microsoft.com|www.windowsazure.cn|acncontentteam.azurewebsites.net|127.0.0.1:8000|10.168.177.43:8000)(/zh\-cn)?/)|(\"(/zh\-cn)?/)","\"/",landingpage.navigationJson)
    navigationJson = re.sub(r"/home/features/([^/|^#|^\"|^\'|^\)|^\s]+)/pricing/?", r"/pricing/details/\1/", navigationJson)
    navigationJson = re.sub(r"/home/features/([^/|^#|^\"|^\'|^\)|^\s]+)/calculator/?", r"/pricing/calculator/\1/", navigationJson)
    return render_to_response('landingPage/jsonNavGenerator.html',{"jsonContent":navigationJson.strip()})

@login_required
def xmlpagegenerator(request, service_id):
    service = get_object_or_404(Service, service_id=service_id)
    metaData = service.meta_data_set.all()[0]
    landingpage = service.landing_page_set.all()[0]
    tutorial_options = landingpage.tutorial_option_set.all().order_by("order")
    first_option_title = tutorial_options[0].title
    first_option_link = tutorial_options[0].link
    template = loader.get_template('landingPage/xmlTemplate.xml')
    if service_id == "virtual-machines":
        frame = loader.get_template('landingPage/VM.html')
    else:
        frame = loader.get_template('landingPage/frame2.html')
    for node in frame.template.nodelist:
        for child_node in node.nodelist:
            if type(child_node) == BlockNode:
                if child_node.name == 'header':
                    html_header = child_node
                elif child_node.name == 'content':
                    html_body = child_node
    header = Template("")
    body = Template("")
    header.nodelist = html_header
    body.nodelist = html_body
    html_header = header.render(Context({"cssLink":"//wacndevelop.blob.core.chinacloudapi.cn/tech-content/css/landingpageframe.css","jqueryLink":"//wacndevelop.blob.core.chinacloudapi.cn/tech-content/js/landingpagejquery-2.1.4.js","jsLink":"//wacndevelop.blob.core.chinacloudapi.cn/tech-content/js/landingpageresponsive.js"}))
    if service_id == "virtual-machines":
        html_body = body.render(Context({"service_name":"虚拟机",
                                "cssLink":BLOB_PATH+"css/landingpageframe.css",
                                "jqueryLink":BLOB_PATH+"js/landingpagejquery-2.1.4.js",
                                "jsLink":BLOB_PATH+"js/landingpageresponsive.js",
                                "imgLink":BLOB_PATH+"media/"}))
    else:
        navigationJson = re.sub(r"(\"https?://(azure.microsoft.com|www.windowsazure.cn|acncontentteam.azurewebsites.net|127.0.0.1:8000|10.168.177.43:8000)(/zh\-cn)?/)|(\"(/zh\-cn)?/)","\"/",landingpage.navigationJson).replace("'", "\\'").replace("\n", "")
        html_body = body.render(Context({"service_name":service.service_name,
                                "subtitle":landingpage.subtitle, 
                                "service_id":service.service_id,
                                "ms_service":landingpage.ms_service,
                                "tutorial_message":landingpage.tutorial_message,
                                "update_search_link":landingpage.update_search_link,
                                "navigationJson":navigationJson,
                                "first_option_title":first_option_title,
                                "first_option_link":first_option_link,
                                "options":tutorial_options,
                                "videoLinks":landingpage.video_link_set.all().order_by("order"),
                                "recentUpdates":landingpage.recent_update_set.all().order_by("order"),
                                "cssLink":BLOB_PATH+"css/landingpageframe.css",
                                "jqueryLink":BLOB_PATH+"js/landingpagejquery-2.1.4.js",
                                "jsLink":BLOB_PATH+"js/landingpageresponsive.js",
                                "imgLink":BLOB_PATH+"media/"}))
    
    xml_text = template.render({"html_header":html_header, "html_body":html_body, "html_title":service.service_name, "metaKeywords":metaData.meta_keywords, "metaDescription":metaData.meta_description})
    #xml_text = re.sub(r"/home/features/([^/|^#|^\"|^\'|^\)|^\s]+)/pricing/?", r"/pricing/details/\1/", xml_text)
    #xml_text = re.sub(r"/home/features/([^/|^#|^\"|^\'|^\)|^\s]+)/calculator/?", r"/pricing/calculator/\1/", xml_text)
    #print(html_body)
    return render_to_response('landingPage/xmlPageGenerator.html',{"xmlContent":xml_text})

@login_required
def xmlpagegenerator_old(request, service_id):
    service = get_object_or_404(Service, service_id=service_id)
    metaData = service.meta_data_set.all()[0]
    landingpage = service.landing_page_set.all()[0]
    tutorial_options = landingpage.tutorial_option_set.all().order_by("order")
    first_option_title = tutorial_options[0].title
    first_option_link = tutorial_options[0].link
    template = loader.get_template('landingPage/xmlTemplate_old.xml')
    if service_id == "virtual-machines":
        frame = loader.get_template('landingPage/VM.html')
    else:
        frame = loader.get_template('landingPage/frame.html')
    for node in frame.template.nodelist:
        for child_node in node.nodelist:
            if type(child_node) == BlockNode:
                if child_node.name == 'header':
                    html_header = child_node
                elif child_node.name == 'content':
                    html_body = child_node
    header = Template("")
    body = Template("")
    header.nodelist = html_header
    body.nodelist = html_body
    html_header = header.render(Context({"cssLink":"//wacndevelop.blob.core.chinacloudapi.cn/tech-content/css/landingpageframe.css","jqueryLink":"//wacndevelop.blob.core.chinacloudapi.cn/tech-content/js/landingpagejquery-2.1.4.js","jsLink":"//wacndevelop.blob.core.chinacloudapi.cn/tech-content/js/landingpageresponsive.js"}))
    if service_id == "virtual-machines":
        html_body = body.render(Context({"service_name":"虚拟机",
                                "cssLink":BLOB_PATH+"css/landingpageframe.css",
                                "jqueryLink":BLOB_PATH+"js/landingpagejquery-2.1.4.js",
                                "jsLink":BLOB_PATH+"js/landingpageresponsive.js",
                                "imgLink":BLOB_PATH+"media/"}))
    else:
        navigationJson = re.sub(r"(\"https?://(azure.microsoft.com|www.windowsazure.cn|acncontentteam.azurewebsites.net|127.0.0.1:8000|10.168.177.43:8000)(/zh\-cn)?/)|(\"(/zh\-cn)?/)","\"/",landingpage.navigationJson).replace("'", "\\'").replace("\n", "")
        html_body = body.render(Context({"service_name":service.service_name,
                                "subtitle":landingpage.subtitle, 
                                "service_id":service.service_id,
                                "ms_service":landingpage.ms_service,
                                "tutorial_message":landingpage.tutorial_message,
                                "update_search_link":landingpage.update_search_link,
                                "navigationJson":navigationJson,
                                "first_option_title":first_option_title,
                                "first_option_link":first_option_link,
                                "options":tutorial_options,
                                "videoLinks":landingpage.video_link_set.all().order_by("order"),
                                "recentUpdates":landingpage.recent_update_set.all().order_by("order"),
                                "cssLink":BLOB_PATH+"css/landingpageframe.css",
                                "jqueryLink":BLOB_PATH+"js/landingpagejquery-2.1.4.js",
                                "jsLink":BLOB_PATH+"js/landingpageresponsive.js",
                                "imgLink":BLOB_PATH+"media/"}))
    
    return render_to_response('landingPage/xmlPageGenerator.html',{"xmlContent":template.render({"html_header":html_header, "html_body":html_body, "html_title":service.service_name, "metaKeywords":metaData.meta_keywords, "metaDescription":metaData.meta_description})})

@never_cache
@login_required
def editVideo(request, service_id):
    optionsJson = request.META["HTTP_OPTIONS"].encode('latin_1').decode("utf-8")
    tutorial_options = json.loads(optionsJson)
    return render_to_response('landingPage/selectListTemplate.html',{"options":tutorial_options})

@login_required
def regenJson(request):
    for service in Service.objects.all():
        landingpage = service.landing_page_set.all()[0]
        file = open("./landingPage/static/landingPage/json/navigationJson/"+service.service_id+".json", "w", encoding= "utf8")
        file.writelines(landingpage.navigationJson.encode("utf-8").decode('unicode-escape'))
        file.close()
    return HttpResponse("done")

@login_required
def updateEncoding(request):
    for landingpage in Landing_page.objects.all():
        landingpage.navigationJson = landingpage.navigationJson.encode('utf-8').decode("unicode-escape")
        landingpage.save()
    return HttpResponse("done")

@login_required
@csrf_exempt
def submitpage(request, service_id):
    sending = json.loads(request.POST["wholeJson"])
    navigationJson = json.dumps(sending["navigation"]).encode('utf-8').decode("unicode-escape")
    #print(navigationJson)
    nav = json.loads(navigationJson)
    translator = Translator(to_lang="en",from_lang="zh")
    for i in range(len(nav["navigation"])):
        group_name = None
        if nav["navigation"][i]["id"][:9] == "new_group":
            try:
                group_name = re.sub("[^a-z|A-Z|0-9]+","-",translator.translate(nav["navigation"][i]["group"]))
            except:
                group_name = nav["navigation"][i]["id"][:9]
            #print(group_name)
            nav["navigation"][i]["id"] = "left_nav_first_level_"+service_id+"_"+group_name
        for j in range(len(nav["navigation"][i]["articles"])):
            if nav["navigation"][i]["articles"][j]["id"][:7] == "newLink":
                if group_name == None:
                    group_name = nav["navigation"][i]["id"].split("_")[5]
                    try:
                        int(group_name)
                        group_name = re.sub("[^a-z|A-Z|0-9]+","-",translator.translate(nav["navigation"][i]["group"]))
                    except:
                        print("")
                try:
                    article_name = re.sub("[^a-z|A-Z|0-9]+","-",translator.translate(nav["navigation"][i]["articles"][j]["title"]))
                except:
                    article_name = nav["navigation"][i]["articles"][j]["id"]
                #print(group_name)
                #print(article_name)
                nav["navigation"][i]["articles"][j]["id"] = "left_nav_second_level_"+service_id+"_"+group_name+"_"+article_name
    #for i in range(len(nav["navigation"])):
    #        nav["navigation"][i]["id"] = "left_nav_first_level_"+service_id+"_"+str(i)
    #        for j in range(len(nav["navigation"][i]["articles"])):
    #            nav["navigation"][i]["articles"][j]["id"] = "left_nav_second_level_"+service_id+"_"+str(i)+"_"+str(j)
    navigationJson = json.dumps(nav).encode('utf-8').decode("unicode-escape")

    content = sending["content"]
    recentUpdates = sending["recentUpdate"]
    meta = sending["meta"]
    options = sending["tutorialOptions"]
    videoLinks = sending["videoLink"]
    service = Service.objects.get(service_id=service_id)
    landing_page = service.landing_page_set.all()[0]
    landing_page.navigationJson = navigationJson
    landing_page.subtitle=content["subtitle"]
    landing_page.tutorial_message=content["tutorial_message"]
    landing_page.update_search_link=content["update_search_links"]
    landing_page.newLinkCount = request.POST["newLinkCount"]
    landing_page.newGroupCount = request.POST["newGroupCount"]
    landing_page.save()
    meta_data = service.meta_data_set.all()[0]
    meta_data.meta_keywords = meta["metat_keywords"]
    meta_data.meta_description=meta["meta_description"]
    meta_data.save()
    old_options = landing_page.tutorial_option_set.order_by("order")
    if(len(old_options)>=len(options)):
        for i in range(len(options),len(old_options)):
            old_options[i].delete()
        for i in range(0, len(options)):
            old_options[i].title=options[i]["title"]
            old_options[i].link=options[i]["link"]
            old_options[i].save()
    else:
        for i in range(0, len(old_options)):
            old_options[i].title=options[i]["title"]
            old_options[i].link=options[i]["link"]
            old_options[i].save()
        if len(old_options) == 0:
            order_count = 0
        else:
            order_count = old_options[len(old_options)-1].order+1
        for i in range(len(old_options),len(options)):
            option = Tutorial_option(landing_page=landing_page, order=order_count, title=options[i]["title"], link=options[i]["link"])
            option.save()
            order_count+=1
    old_videos = landing_page.video_link_set.order_by("order")
    if(len(old_videos)>=len(videoLinks)):
        for i in range(len(videoLinks),len(old_videos)):
            old_videos[i].delete()
        for i in range(0, len(videoLinks)):
            old_videos[i].video_url = videoLinks[i]["VideoUrl"]
            old_videos[i].image_title = videoLinks[i]["ImageUrl"]
            old_videos[i].title = videoLinks[i]["Title"]
            old_videos[i].publish_time = videoLinks[i]["PublishTime"]
            old_videos[i].duration = videoLinks[i]["Duration"]
            old_videos[i].description = videoLinks[i]["Description"]
            old_videos[i].save()
    else:
        for i in range(0, len(old_videos)):
            old_videos[i].video_url = videoLinks[i]["VideoUrl"]
            old_videos[i].image_title = videoLinks[i]["ImageUrl"]
            old_videos[i].title = videoLinks[i]["Title"]
            old_videos[i].publish_time = videoLinks[i]["PublishTime"]
            old_videos[i].duration = videoLinks[i]["Duration"]
            old_videos[i].description = videoLinks[i]["Description"]
            old_videos[i].save()
        if len(old_videos) == 0:
            order_count = 0
        else:
            order_count = old_videos[len(old_videos)-1].order+1
        for i in range(len(old_videos),len(videoLinks)):
            video = Video_link(landing_page=landing_page, order=order_count, video_url=videoLinks[i]["VideoUrl"], title=videoLinks[i]["Title"], publish_time=videoLinks[i]["PublishTime"], duration=videoLinks[i]["Duration"], description=videoLinks[i]["Description"])
            video.save()
            order_count+=1
    old_updates = landing_page.recent_update_set.order_by("order")
    if(len(old_updates)>=len(recentUpdates)):
        for i in range(len(recentUpdates),len(old_updates)):
            old_updates[i].delete()
        recentUpdates = [update for update in reversed(recentUpdates)]
        for i in range(0, len(recentUpdates)):
            old_updates[i].title = recentUpdates[i]["update_title"]
            old_updates[i].date = recentUpdates[i]["update_date"]
            old_updates[i].description = recentUpdates[i]["update_description"]
            old_updates[i].detail = recentUpdates[i]["update_detail"]
            old_updates[i].save()
    else:
        updatedUpdates = [update for update in reversed(recentUpdates[:len(old_updates)])]
        for i in range(0, len(old_updates)):
            old_updates[i].title = updatedUpdates[i]["update_title"]
            old_updates[i].date = updatedUpdates[i]["update_date"]
            old_updates[i].description = updatedUpdates[i]["update_description"]
            old_updates[i].detail = updatedUpdates[i]["update_detail"]
            old_updates[i].order = old_updates[i].order+len(recentUpdates)-len(old_updates)
            old_updates[i].save()
        order_count = len(recentUpdates)-len(old_updates)-1
        for i in range(len(old_updates),len(recentUpdates)):
            update = Recent_update(landing_page=landing_page, order=order_count, title=recentUpdates[i]["update_title"], date=recentUpdates[i]["update_date"], description=recentUpdates[i]["update_description"], detail=recentUpdates[i]["update_detail"])
            update.save()
            order_count-=1
    expire_cache('landingPage.views.landingPage', args=[service_id], HOSTNAME=request.META['HTTP_HOST'])
    expire_cache('landingPage.views.landingPageEdit', args=[service_id], HOSTNAME=request.META['HTTP_HOST'])
    expire_cache('landingPage.views.xmlnavgenerator', args=[service_id], HOSTNAME=request.META['HTTP_HOST'])
    expire_cache('landingPage.views.jsonnavgenerator', args=[service_id], HOSTNAME=request.META['HTTP_HOST'])
    expire_cache('landingPage.views.xmlpagegenerator', args=[service_id], HOSTNAME=request.META['HTTP_HOST'])
    return redirect("/landingpage/"+service_id)

@login_required
@csrf_exempt
def new_landingpage(request):
    return render_to_response('landingPage/newlandingpage.html',{})

@login_required
@csrf_exempt
def addlandingpage(request):
    service_name = request.POST["service_name"]
    service_id = request.POST["service_id"]
    left_navigation = request.POST["left_navigation"]
    meta_keywords = request.POST["meta_keywords"]
    meta_description = request.POST["meta_description"]
    subtitle = request.POST["subtitle"]
    tutorial_message = request.POST["tutorial_message"]
    what_is_new = request.POST["what_is_new"]
    tutorial_count = int(request.POST["tutorial_count"])
    titles = []
    orders = []
    links = []
    for i in range(1, tutorial_count+1):
        try:
            title = request.POST["tutorial_title"+str(i)]
            order = request.POST["tutorial_order"+str(i)]
            link = request.POST["tutorial_link"+str(i)]
            titles.append(title)
            orders.append(int(order))
            links.append(link)
        except:
            continue
    service = Service(service_name=service_name, service_id=service_id)
    service.save()
    navigationJson = navigationParse(left_navigation, service_name, service_id)
    landingpage = Landing_page(service=service, ms_service=service_id, navigationJson=navigationJson, subtitle=subtitle, tutorial_message=tutorial_message, update_search_link=what_is_new)
    landingpage.save()
    meta_data = Meta_data(service=service, meta_keywords=meta_keywords, meta_description=meta_description)
    meta_data.save()
    #print(titles)
    for i in range(0, len(titles)):
        tutorial = Tutorial_option(landing_page=landingpage, title=titles[i], order=orders[i], link=links[i])
        tutorial.save()
    return redirect("/landingpage/"+service.service_id)

@login_required
@csrf_exempt
def uploadimage(request, service_id, count):
    # Handle file upload
    images = [f.name for f in blob_service.list_blobs('img')]
    if request.method == 'POST':
        form = PNGForm(request.POST, request.FILES)
        if form.is_valid():
            docfile=request.FILES['docfile']
            path = default_storage.save(str(docfile), ContentFile(docfile.read()))
            file_name=str(docfile)
            i = 0
            while file_name in images:
                i+=1
                file_name=str(i)+"_"+str(docfile)
            blob_service.create_blob_from_path(
                'img',
                file_name,
                file_name,
                content_settings=ContentSettings(content_type='image/png')
            )
            expire_cache('landingPage.views.landingPageEdit', args=[service_id], HOSTNAME=request.META['HTTP_HOST'])
            # Redirect to the document list after POST
            return redirect("/landingpage/"+service_id+"/edit/")
    else:
        form = PNGForm()  # A empty, unbound form

    return render_to_response(
        'landingPage/uploadImage.html',
        {'images':images,
         'form': form,
         'count': count,
         'service_id': service_id,
         'imgLink': '/static/landingPage/img/'
         }
    )