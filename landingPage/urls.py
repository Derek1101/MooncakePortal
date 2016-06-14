from django.conf.urls import url

from . import views

app_name = 'Landingpage'
urlpatterns = [
    url(r'^$', views.index, name='landingPageIndex'),
    url(r'^xmlpagegenerator/(?P<service_id>[^/]+)/$', views.xmlpagegenerator, name='xmlpagegenerator'),
    url(r'^xmlpagegenerator_old/(?P<service_id>[^/]+)/$', views.xmlpagegenerator_old, name='xmlpagegenerator_old'),
    url(r'^xmlnavgenerator/(?P<service_id>[^/]+)/$', views.xmlnavgenerator, name='xmlnavgenerator'),
    url(r'^jsonnavgenerator/(?P<service_id>[^/]+)/$', views.jsonnavgenerator, name='jsonnavgenerator'),
    url(r'^submitpage/(?P<service_id>[^/]+)/$', views.submitpage, name='submitpage'),
    url(r'^editVideo/(?P<service_id>[^/]+)/$', views.editVideo, name='editVideo'),
    url(r'^regenJson/$', views.regenJson, name='regenJson'),
    url(r'^updateEncoding/$', views.updateEncoding, name='updateEncoding'),
    url(r'^new/$', views.new_landingpage, name='new_landingpage'),
    url(r'^addlandingpage/$', views.addlandingpage, name='addlandingpage'),
    url(r'^(?P<service_id>[^/]+)/$', views.landingPage, name='landingPage'),
    url(r'^(?P<service_id>[^/]+)/edit/$', views.landingPageEdit, name='landingPageEdit'),
]