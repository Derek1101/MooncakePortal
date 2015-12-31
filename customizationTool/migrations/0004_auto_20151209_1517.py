# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customizationTool', '0003_init_data_keyword'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='globalText',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='article',
            name='mooncakeText',
            field=models.TextField(default=''),
        ),
    ]
