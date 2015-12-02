from django.shortcuts import render
from django.http import Http404, HttpResponse
# Create your views here.

def mainpage(request):

    return HttpResponse("Currently under maintainance.")