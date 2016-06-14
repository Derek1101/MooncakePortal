from django.shortcuts import render
from django.template import RequestContext
from urllib.request import urlopen
# Create your views here.

def tracker(request):
    response = urlopen("http://stackoverflow.com/questions/tagged/azure")
    content = response.read()
    return render(
        request,
        'SOTracker/index.html',
        context_instance = RequestContext(request,
        {
            'content':content,
        })
    )