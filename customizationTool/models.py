from django.db import models

class Service(models.Model):
    service_id = models.CharField(max_length=255)
    service_name = models.CharField(max_length=255)
    
    class Meta:
        unique_together = (("service_id"),)


class Rule(models.Model):
    service = models.ForeignKey(Service)
    rule_name = models.CharField(max_length=255)
    rule_description = models.CharField(max_length=1000)
    
    class Meta:
        unique_together = (("service", "rule_name"),)


class Rule_instance(models.Model):
    instance_content = models.TextField()
    replacement = models.TextField(default="")
    instance_type = models.CharField(max_length=10)
    last_referred = models.DateTimeField()


class Instance_pair(models.Model):
    rule = models.ForeignKey(Rule)
    rule_instance = models.ForeignKey(Rule_instance)

    class Meta:
        unique_together = (("rule", "rule_instance"),)


class Keyword(models.Model):
    keyword_content = models.CharField(max_length=255)

    class Meta:
        unique_together = (("keyword_content"),)


class Rule_keyword_pair(models.Model):
    rule = models.ForeignKey(Rule)
    keyword = models.ForeignKey(Keyword)

    class Meta:
        unique_together = (("rule", "keyword"),)


class Instance_keyword_pair(models.Model):
    rule_instance = models.ForeignKey(Rule_instance)
    keyword = models.ForeignKey(Keyword)
    score = models.FloatField(default=0)

    class Meta:
        unique_together = (("rule_instance", "keyword"),)

class Article(models.Model):
    service = models.ForeignKey(Service)
    name = models.CharField(max_length=255)
    status = models.CharField(max_length=30)