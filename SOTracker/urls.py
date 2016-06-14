from django.conf.urls import url

from . import views

app_name = 'UT'
urlpatterns = [
    url(r'^$', views.tracker, name='tracker'),
]