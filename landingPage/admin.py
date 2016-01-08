from django.contrib import admin

from .models import Service, Meta_data, Landing_page, Navigation, Navigation_group, Navigation_article, Tutorial_option, Video_link, Recent_update

class ServiceAdmin(admin.ModelAdmin):
    list_display = ('id', 'service_id', 'service_name')

class Meta_dataAdmin(admin.ModelAdmin):
    list_display = ('id', 'service', 'meta_keywords', 'meta_description')

class Landing_pageAdmin(admin.ModelAdmin):
    list_display = ('id', 'service', 'navigationJson', 'subtitle', 'tutorial_message', 'update_search_link')

class NavigationAdmin(admin.ModelAdmin):
    list_display = ('id', 'service', 'html_id')

class Navigation_groupAdmin(admin.ModelAdmin):
    list_display = ('id', 'navigation', 'group', 'html_id', 'order')

class Navigation_articleAdmin(admin.ModelAdmin):
    list_display = ('id', 'navigation_group', 'title', 'link', 'html_id', 'order')

class Tutorial_optionAdmin(admin.ModelAdmin):
    list_display = ('id', 'landing_page', 'title', 'link', 'order')

class Video_linkAdmin(admin.ModelAdmin):
    list_display = ('id', 'landing_page', 'title', 'video_url', 'image_title', 'publish_time', 'duration', 'description', 'order')

class Recent_updateAdmin(admin.ModelAdmin):
    list_display = ('id', 'landing_page', 'title', 'date', 'description', 'detail', 'order')

admin.site.register(Service, ServiceAdmin)
admin.site.register(Meta_data, Meta_dataAdmin)
admin.site.register(Landing_page, Landing_pageAdmin)
admin.site.register(Navigation, NavigationAdmin)
admin.site.register(Navigation_group, Navigation_groupAdmin)
admin.site.register(Navigation_article, Navigation_articleAdmin)
admin.site.register(Tutorial_option, Tutorial_optionAdmin)
admin.site.register(Video_link, Video_linkAdmin)
admin.site.register(Recent_update, Recent_updateAdmin)