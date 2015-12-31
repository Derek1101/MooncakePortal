# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landingPage', '0007_update_mysql_page'),
    ]

    operations = [
        migrations.AddField(
            model_name='landing_page',
            name='newGroupCount',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='landing_page',
            name='newLinkCount',
            field=models.IntegerField(default=1),
        ),
    ]
