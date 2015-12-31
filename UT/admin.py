from django.contrib import admin
from UT.models import Service, Record, Labor_type, Article, Record_article, Work_date_exception

# Register your models here.

class ServiceAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "relative_path")

class RecordAdmin(admin.ModelAdmin):
    list_display = ("id", "creater", "submit_time", "UT_time", "duration", "labor_type", "comments")

class Labor_typeAdmin(admin.ModelAdmin):
    list_display = ("id", "type_name", "deliverability")

class ArticleAdmin(admin.ModelAdmin):
    list_display = ("id", "service", "filename", "status")

class Record_articleAdmin(admin.ModelAdmin):
    list_display = ("id", "record", "article")

class Work_date_exceptionAdmin(admin.ModelAdmin):
    list_display = ("id", "date", "holiday")

admin.site.register(Service, ServiceAdmin)
admin.site.register(Record, RecordAdmin)
admin.site.register(Labor_type, Labor_typeAdmin)
admin.site.register(Article, ArticleAdmin)
admin.site.register(Record_article, Record_articleAdmin)
admin.site.register(Work_date_exception, Work_date_exceptionAdmin)