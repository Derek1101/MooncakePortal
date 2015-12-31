# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('UT', '0003_add_2_services'),
    ]

    operations = [
        migrations.AddField(
            model_name='record',
            name='UT_time',
            field=models.DateTimeField(default='2015-12-01'),
        ),
    ]
