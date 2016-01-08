from django.conf.urls import url

from . import views

app_name = 'UT'
urlpatterns = [
    url(r'^$', views.mainpage, name='UTmainpage'),
    url(r'^getlogs/(?P<user_id>[0-9]+)/(?P<record_num>[0-9]+)/$', views.getLog, name='getlogs'),
    url(r'^getlogs/(?P<user_id>[0-9]+)/from(?P<start>[0-9|\-]+)to(?P<end>[0-9|\-]+)/(?P<page>[0-9]+)/$', views.getLogByDuration, name='getLogByDuration'),
    url(r'^updatearticles/(?P<service_id>[0-9]+)/$', views.updatearticles, name='UTupdatearticles'),
    url(r'^submitreport$', views.submitReport, name='submitReport'),
    url(r'^recordsearch/(?P<labor_id>[0-9]+)/from(?P<start_date>[0-9|\-]+)to(?P<end_date>[0-9|\-]+)/(?P<labor_type>\w+)/$', views.recordSearch, name='recordSearch'),
    url(r'^addarticles/$', views.addArticles, name='addArticles'),
    url(r'^selectarticleswithtext/$', views.selectArticlesWithText, name='selectArticlesWithText'),
]