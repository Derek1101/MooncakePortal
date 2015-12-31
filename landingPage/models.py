from django.db import models

# Create your models here.

class Service(models.Model):
    service_id = models.CharField(max_length=255)
    service_name = models.CharField(max_length=255)
    
    class Meta:
        unique_together = (("service_id"),)


class Meta_data(models.Model):
    service = models.ForeignKey(Service)
    meta_keywords = models.TextField()
    meta_description = models.TextField()

    class Meta:
        unique_together = (("service"),)


class Landing_page(models.Model):
    service = models.ForeignKey(Service)
    navigationJson = models.TextField()
    subtitle = models.CharField(max_length=255)
    tutorial_message = models.TextField()
    update_search_link = models.CharField(max_length=255)
    newLinkCount = models.IntegerField(default=1)
    newGroupCount = models.IntegerField(default=0)


class Navigation(models.Model):
    service = models.ForeignKey(Service)
    html_id = models.CharField(max_length=255)

    class Meta:
        unique_together = (("service"),)


class Navigation_group(models.Model):
    navigation = models.ForeignKey(Navigation)
    group = models.CharField(max_length=255)
    html_id = models.CharField(max_length=255)
    order = models.IntegerField()


class Navigation_article(models.Model):
    navigation_group = models.ForeignKey(Navigation_group)
    title = models.CharField(max_length=255)
    link = models.TextField()
    html_id = models.CharField(max_length=255)
    order = models.IntegerField()


class Tutorial_option(models.Model):
    landing_page = models.ForeignKey(Landing_page)
    order = models.IntegerField()
    title = models.CharField(max_length=255)
    link = models.TextField()

    class Meta:
        unique_together = (("title", "landing_page"),)


class Video_link(models.Model):
    landing_page = models.ForeignKey(Landing_page)
    order = models.IntegerField()
    video_url = models.TextField()
    image_title = models.CharField(max_length=100, default="")
    title = models.CharField(max_length=255)
    publish_time = models.CharField(max_length=30)
    duration = models.CharField(max_length=30)
    description = models.TextField()


class Recent_update(models.Model):
    landing_page = models.ForeignKey(Landing_page)
    order = models.IntegerField()
    title = models.CharField(max_length=255)
    date = models.CharField(max_length=255)
    description = models.TextField()
    detail = models.TextField()