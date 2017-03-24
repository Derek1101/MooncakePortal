from django.shortcuts import render, redirect
from django.http import Http404, HttpResponse
# Create your views here.


def mainpage(request):

    return HttpResponse("Currently under maintainance.")

def documentation(request):
    return redirect("http://www.azure.cn"+request.path)