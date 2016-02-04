"""
Definition of urls for MooncakePortal.
"""

from datetime import datetime
from django.conf.urls import patterns, url
from app.forms import BootstrapAuthenticationForm

# Uncomment the next lines to enable the admin:
from django.conf.urls import include
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'app.views.home', name='home'),
    url(r'^contact$', 'app.views.contact', name='contact'),
    url(r'^about', 'app.views.about', name='about'),
    url(r'^accounts/profile/', 'app.views.profile', name='profile'),
    url(r'^login/$',
        'django.contrib.auth.views.login',
        {
            'template_name': 'app/login.html',
            'authentication_form': BootstrapAuthenticationForm,
            'extra_context':
            {
                'title':'Log in',
                'year':datetime.now().year,
            }
        },
        name='login'),
    url(r'^logout$',
        'django.contrib.auth.views.logout',
        {
            'next_page': '/',
        },
        name='logout'),

    url(r'^customizationtool/$', 'customizationTool.views.mainpage', name='customizationToolmainpage'),
    url(r'^documentation/', 'customizationTool.views.documentation', name='documentationRedirect'),
    url(r'^home/features/', 'customizationTool.views.documentation', name='homeFeatureRedirect'),
    url(r'^reports/$', 'reports.views.mainpage', name='reportsmainpage'),
    url(r'^QA/$', 'QA.views.mainpage', name='QAmainpage'),
    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^ut/', include('UT.urls')),
    url(r'^landingpage/', include('landingPage.urls')),
    url(r'^admin/', include(admin.site.urls)),
)
