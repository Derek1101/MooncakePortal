# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landingPage', '0008_update_left_nav_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='landing_page',
            name='ms_service',
            field=models.CharField(max_length=255, default='1'),
        ),
    ]
