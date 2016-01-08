from django.conf.urls import url

from . import views

app_name = 'UT'
urlpatterns = [
    url(r'^$', views.index, name='landingPageIndex'),
    url(r'^(?P<service_id>[^/]+)/$', views.landingPage, name='landingPage'),
    url(r'^(?P<service_id>[^/]+)/edit/$', views.landingPageEdit, name='landingPageEdit'),
    url(r'^xmlpagegenerator/(?P<service_id>[^/]+)/$', views.xmlpagegenerator, name='xmlpagegenerator'),
    url(r'^xmlnavgenerator/(?P<service_id>[^/]+)/$', views.xmlnavgenerator, name='xmlnavgenerator'),
    url(r'^submitpage/(?P<service_id>[^/]+)/$', views.submitpage, name='submitpage'),
    url(r'^editVideo/(?P<service_id>[^/]+)/$', views.editVideo, name='editVideo'),
    url(r'^regenJson/$', views.regenJson, name='regenJson'),
    url(r'^updateEncoding/$', views.updateEncoding, name='updateEncoding'),
]