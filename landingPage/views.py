# Create your views here.
from django.http import Http404, HttpResponse
from django.shortcuts import render_to_response, get_object_or_404
from landingPage.models import Landing_page, Navigation, Navigation_article, Navigation_group, Recent_update, Service, Tutorial_option, Video_link, Meta_data
from django.template import loader, Template, Context
from django.template.loader_tags import BlockNode, TextNode
import json
from django.views.decorators.csrf import csrf_exempt
import re

RELATIVE_PATH = "/static/landingPage/"
BLOB_PATH = "http://wacndevelop.blob.core.chinacloudapi.cn/tech-content/"


def landingPage(request, service_id):
    service = get_object_or_404(Service, service_id=service_id)
    metaData = service.meta_data_set.all()[0]
    landingpage = service.landing_page_set.all()[0]
    tutorial_options = landingpage.tutorial_option_set.all().order_by("order")
    first_option_title = tutorial_options[0].title
    first_option_link = tutorial_options[0].link
    if "edit" in request.GET:
        template_file = 'landingPage/frame_edit.html'
    else:
        template_file = 'landingPage/frame.html'
    navigationJson = re.sub(r"(\"https?://azure.microsoft.com(/zh\-cn)?/)|(\"(/zh\-cn)?/)","\"https://www.windowsazure.cn/",landingpage.navigationJson).replace("'", "\\'").replace("\n", "")
    return render_to_response(template_file, {"service_name":service.service_name,
                                                                     "subtitle":landingpage.subtitle, 
                                                                     "tutorial_message":landingpage.tutorial_message,
                                                                     "update_search_link":landingpage.update_search_link,
                                                                     "navigationJson":navigationJson,
                                                                     "first_option_title":first_option_title,
                                                                     "first_option_link":first_option_link,
                                                                     "options":tutorial_options,
                                                                     "videoLinks":landingpage.video_link_set.all().order_by("order")[:3],
                                                                     "recentUpdates":landingpage.recent_update_set.all().order_by("order"),
                                                                     "cssLink":RELATIVE_PATH+"style/frame2.css",
                                                                     "jqueryLink":RELATIVE_PATH+"script/jquery-2.1.4.js",
                                                                     "jsLink":RELATIVE_PATH+"script/responsive.js",
                                                                     "imgLink":RELATIVE_PATH+"img/",
                                                                     "azure":True,
                                                                     "metaKeywords":metaData.meta_keywords,
                                                                     "metaDescription":metaData.meta_description})

def index(request):
    services = Service.objects.all()
    return render_to_response('landingPage/index.html', {"services":services})

def xmlpagegenerator(request, service_id):
    service = get_object_or_404(Service, service_id=service_id)
    metaData = service.meta_data_set.all()[0]
    landingpage = service.landing_page_set.all()[0]
    tutorial_options = landingpage.tutorial_option_set.all().order_by("order")
    first_option_title = tutorial_options[0].title
    first_option_link = tutorial_options[0].link
    template = loader.get_template('landingPage/xmlTemplate.xml')
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
    html_header = header.render(Context({"cssLink":"http://wacnstorage.blob.core.chinacloudapi.cn/tech-content/css/landingpageazuremediaplayer.min.css","jqueryLink":"http://wacnstorage.blob.core.chinacloudapi.cn/tech-content/js/landingpagejquery-2.1.4.js","jsLink":"http://wacnstorage.blob.core.chinacloudapi.cn/tech-content/js/landingpageresponsive.js"}))
    navigationJson = re.sub(r"(\"https?://azure.microsoft.com(/zh\-cn)?/)|(\"(/zh\-cn)?/)","\"/",landingpage.navigationJson).replace("'", "\\'").replace("\n", "")
    html_body = body.render(Context({"service_name":service.service_name,
                                "subtitle":landingpage.subtitle, 
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

def newRecentUpdate(request, counter):
    return render_to_response('landingPage/updateEditTemplate.html', {'counter':counter})

@csrf_exempt
def editTutorialSelectList(request, service_id):
    optionsJson = request.META["HTTP_OPTIONS"].encode('latin_1').decode("utf-8")
    tutorial_options = json.loads(optionsJson)
    return render_to_response('landingPage/selectListTemplate.html',{"options":tutorial_options})

def newTutorialOption(request, counter):
    return render_to_response("landingPage/newTutorialOptionTemplate.html",{"counter":counter});

def editVideo(request, service_id):
    optionsJson = request.META["HTTP_OPTIONS"].encode('latin_1').decode("utf-8")
    tutorial_options = json.loads(optionsJson)
    return render_to_response('landingPage/selectListTemplate.html',{"options":tutorial_options})

def regenJson(request):
    for service in Service.objects.all():
        landingpage = service.landing_page_set.all()[0]
        file = open("./landingPage/static/landingPage/json/navigationJson/"+service.service_id+".json", "w", encoding= "utf8")
        file.writelines(landingpage.navigationJson.encode("utf-8").decode('unicode-escape'))
        file.close()
    return HttpResponse("done")

def updateEncoding(request):
    for landingpage in Landing_page.objects.all():
        landingpage.navigationJson = landingpage.navigationJson.encode('utf-8').decode("unicode-escape")
        landingpage.save()
    return HttpResponse("done")