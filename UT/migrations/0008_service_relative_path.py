# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('UT', '0007_auto_20151230_1146'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='relative_path',
            field=models.CharField(max_length=100, default='articles/'),
        ),
    ]
