from django.db import models, migrations
from django.db.models import Q

def addDataToTable(apps, schema_editor):
    Article = apps.get_model("UT", "Article")
    Service = apps.get_model("UT", "Service")
    others = Service.objects.get(name="Others")
    includes = Service.objects.get(name="Includes")
    articles = others.article_set.all()
    for article in articles:
        another = Article.objects.filter(filename=article.filename).filter(~Q(service=others)).filter(~Q(service=includes))
        if len(another)>0:
            article.delete()

class Migration(migrations.Migration):

    dependencies = [
        ('UT', '0005_update_ut_time'),
    ]

    operations = [
        migrations.RunPython(addDataToTable),
    ]