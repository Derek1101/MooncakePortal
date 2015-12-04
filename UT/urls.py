from django.conf.urls import url

from . import views

app_name = 'UT'
urlpatterns = [
    url(r'^$', views.mainpage, name='UTmainpage'),
    url(r'^updatearticles/(?P<service_id>[0-9]+)/$', views.updatearticles, name='UTupdatearticles'),
    url(r'^submitreport$', views.submitReport, name='submitReport'),
]