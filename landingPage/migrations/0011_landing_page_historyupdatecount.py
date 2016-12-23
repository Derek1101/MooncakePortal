# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landingPage', '0010_update_ms_service'),
    ]

    operations = [
        migrations.AddField(
            model_name='landing_page',
            name='historyUpdateCount',
            field=models.IntegerField(default=3),
        ),
    ]
