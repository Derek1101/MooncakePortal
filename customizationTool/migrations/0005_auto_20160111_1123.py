# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customizationTool', '0004_auto_20151209_1517'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='globalStructure',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='article',
            name='mooncakeStructure',
            field=models.TextField(default=''),
        ),
    ]
