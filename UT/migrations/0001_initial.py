# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, verbose_name='ID', auto_created=True)),
                ('status', models.CharField(max_length=50)),
                ('filename', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Labor_type',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, verbose_name='ID', auto_created=True)),
                ('type_name', models.CharField(max_length=50)),
                ('deliverability', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Record',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, verbose_name='ID', auto_created=True)),
                ('comments', models.TextField()),
                ('submit_time', models.DateTimeField()),
                ('duration', models.IntegerField()),
                ('creater', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
                ('labor_type', models.ForeignKey(to='UT.Labor_type')),
            ],
        ),
        migrations.CreateModel(
            name='Record_article',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, verbose_name='ID', auto_created=True)),
                ('article', models.ForeignKey(to='UT.Article')),
                ('record', models.ForeignKey(to='UT.Record')),
            ],
        ),
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, verbose_name='ID', auto_created=True)),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.AddField(
            model_name='article',
            name='service',
            field=models.ForeignKey(to='UT.Service'),
        ),
        migrations.AlterUniqueTogether(
            name='record_article',
            unique_together=set([('record', 'article')]),
        ),
    ]
