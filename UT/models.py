from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Labor_type(models.Model):
    type_name = models.CharField(max_length=50)
    deliverability = models.BooleanField()

class Record(models.Model):
    comments = models.TextField()
    creater = models.ForeignKey(User)
    submit_time = models.DateTimeField()
    duration = models.IntegerField()
    labor_type = models.ForeignKey(Labor_type)

class Service(models.Model):
    name = models.CharField(max_length=50)

class Article(models.Model):
    service = models.ForeignKey(Service)
    status = models.CharField(max_length=50)
    filename = models.CharField(max_length=255)

class Record_article(models.Model):
    record = models.ForeignKey(Record)
    article = models.ForeignKey(Article)

    class Meta:
        unique_together = (("record", "article"),)
