from django.contrib import admin

from .models import Service, Meta_data, Landing_page, Navigation, Navigation_group, Navigation_article, Tutorial_option, Video_link, Recent_update

class ServiceAdmin(admin.ModelAdmin):
    fields = ['service_id', 'service_name']

admin.site.register(Service)
admin.site.register(Meta_data)
admin.site.register(Landing_page)
admin.site.register(Navigation)
admin.site.register(Navigation_group)
admin.site.register(Navigation_article)
admin.site.register(Tutorial_option)
admin.site.register(Video_link)
admin.site.register(Recent_update)