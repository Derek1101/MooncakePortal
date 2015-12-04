from django.contrib import admin
from UT.models import Service, Record, Labor_type, Article, Record_article

# Register your models here.

admin.site.register(Service)
admin.site.register(Record)
admin.site.register(Labor_type)
admin.site.register(Article)
admin.site.register(Record_article)