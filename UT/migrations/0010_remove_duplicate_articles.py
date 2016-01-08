from django.db import models, migrations
from django.db.models import Q

def addDataToTable(apps, schema_editor):
    Article = apps.get_model("UT", "Article")
    Service = apps.get_model("UT", "Service")
    services = Service.objects.filter(~Q(name="Others")).filter(~Q(name="Includes"))
    others = Service.objects.get(name="Others")
    includes = Service.objects.get(name="Includes")
    for service in services:
        for article in service.article_set.all():
            articlesSameName = Article.objects.filter(filename=article.filename).filter(~Q(service=others)).filter(~Q(service=includes))
            if len(articlesSameName)>1:
                for sameName in articlesSameName:
                    print(sameName.service.name+": "+sameName.filename)
                print("choose:")
                chosen = int(input())
                for i in range(0, len(articlesSameName)):
                    if i != chosen:
                        articlesSameName[i].delete()


class Migration(migrations.Migration):

    dependencies = [
        ('UT', '0009_add_relative_path'),
    ]

    operations = [
        migrations.RunPython(addDataToTable),
    ]