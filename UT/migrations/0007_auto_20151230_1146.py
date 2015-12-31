# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('UT', '0006_remove_duplicate_articles'),
    ]

    operations = [
        migrations.CreateModel(
            name='Work_date_exception',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, verbose_name='ID', serialize=False)),
                ('date', models.DateTimeField()),
                ('holiday', models.BooleanField()),
            ],
        ),
        migrations.AlterUniqueTogether(
            name='work_date_exception',
            unique_together=set([('date',)]),
        ),
    ]
