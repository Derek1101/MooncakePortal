# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations

def addDataToTable(apps, schema_editor):
    Landing_page = apps.get_model("landingPage", "Landing_page")
    for landingpage in Landing_page.objects.all():
        landingpage.navigationJson = landingpage.navigationJson.encode("unicode-escape").decode('utf-8')
        landingpage.save()

class Migration(migrations.Migration):

    dependencies = [
        ('landingPage', '0003_update_image_titles'),
    ]

    operations = [
        migrations.RunPython(addDataToTable),
    ]
