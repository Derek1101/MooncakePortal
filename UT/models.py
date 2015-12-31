from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Labor_type(models.Model):
    type_name = models.CharField(max_length=50)
    deliverability = models.BooleanField()

    def __str__(self):
        return self.type_name

class Record(models.Model):
    comments = models.TextField()
    creater = models.ForeignKey(User)
    submit_time = models.DateTimeField()
    duration = models.IntegerField()
    labor_type = models.ForeignKey(Labor_type)
    UT_time = models.DateTimeField(default="2015-12-01")

    def __str__(self):
        return self.creater.username+", "+str(self.submit_time)+", "+str(self.labor_type)

class Service(models.Model):
    name = models.CharField(max_length=50)
    relative_path = models.CharField(max_length=100, default="articles/")
    def __str__(self):
        return self.name

class Article(models.Model):
    service = models.ForeignKey(Service)
    status = models.CharField(max_length=50)
    filename = models.CharField(max_length=255)
    def __str__(self):
        return self.filename

class Record_article(models.Model):
    record = models.ForeignKey(Record)
    article = models.ForeignKey(Article)

    class Meta:
        unique_together = (("record", "article"),)

class Work_date_exception(models.Model):
    date = models.DateTimeField()
    holiday = models.BooleanField()

    class Meta:
        unique_together = (("date"),)