from django.contrib import admin

from .models import Service, Rule, Rule_instance, Instance_pair, Keyword, Rule_keyword_pair, Instance_keyword_pair, Article

admin.site.register(Service)
admin.site.register(Rule)
admin.site.register(Rule_instance)
admin.site.register(Instance_pair)
admin.site.register(Keyword)
admin.site.register(Rule_keyword_pair)
admin.site.register(Instance_keyword_pair)
admin.site.register(Article)