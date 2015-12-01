# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Landing_page',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('navigationJson', models.TextField()),
                ('subtitle', models.CharField(max_length=255)),
                ('tutorial_message', models.TextField()),
                ('update_search_link', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Meta_data',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('meta_keywords', models.TextField()),
                ('meta_description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Navigation',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('html_id', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Navigation_article',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('title', models.CharField(max_length=255)),
                ('link', models.TextField()),
                ('html_id', models.CharField(max_length=255)),
                ('order', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Navigation_group',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('group', models.CharField(max_length=255)),
                ('html_id', models.CharField(max_length=255)),
                ('order', models.IntegerField()),
                ('navigation', models.ForeignKey(to='landingPage.Navigation')),
            ],
        ),
        migrations.CreateModel(
            name='Recent_update',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('order', models.IntegerField()),
                ('title', models.CharField(max_length=255)),
                ('date', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('detail', models.TextField()),
                ('landing_page', models.ForeignKey(to='landingPage.Landing_page')),
            ],
        ),
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('service_id', models.CharField(max_length=255)),
                ('service_name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Tutorial_option',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('order', models.IntegerField()),
                ('title', models.CharField(max_length=255)),
                ('link', models.TextField()),
                ('landing_page', models.ForeignKey(to='landingPage.Landing_page')),
            ],
        ),
        migrations.CreateModel(
            name='Video_link',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('order', models.IntegerField()),
                ('video_url', models.TextField()),
                ('image_title', models.CharField(default='', max_length=100)),
                ('title', models.CharField(max_length=255)),
                ('publish_time', models.CharField(max_length=30)),
                ('duration', models.CharField(max_length=30)),
                ('description', models.TextField()),
                ('landing_page', models.ForeignKey(to='landingPage.Landing_page')),
            ],
        ),
        migrations.AlterUniqueTogether(
            name='service',
            unique_together=set([('service_id',)]),
        ),
        migrations.AddField(
            model_name='navigation_article',
            name='navigation_group',
            field=models.ForeignKey(to='landingPage.Navigation_group'),
        ),
        migrations.AddField(
            model_name='navigation',
            name='service',
            field=models.ForeignKey(to='landingPage.Service'),
        ),
        migrations.AddField(
            model_name='meta_data',
            name='service',
            field=models.ForeignKey(to='landingPage.Service'),
        ),
        migrations.AddField(
            model_name='landing_page',
            name='service',
            field=models.ForeignKey(to='landingPage.Service'),
        ),
        migrations.AlterUniqueTogether(
            name='tutorial_option',
            unique_together=set([('title', 'landing_page')]),
        ),
        migrations.AlterUniqueTogether(
            name='navigation',
            unique_together=set([('service',)]),
        ),
        migrations.AlterUniqueTogether(
            name='meta_data',
            unique_together=set([('service',)]),
        ),
    ]
