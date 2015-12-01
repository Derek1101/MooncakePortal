# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, verbose_name='ID', auto_created=True)),
                ('name', models.CharField(max_length=255)),
                ('status', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Instance_keyword_pair',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, verbose_name='ID', auto_created=True)),
                ('score', models.FloatField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Instance_pair',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, verbose_name='ID', auto_created=True)),
            ],
        ),
        migrations.CreateModel(
            name='Keyword',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, verbose_name='ID', auto_created=True)),
                ('keyword_content', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Rule',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, verbose_name='ID', auto_created=True)),
                ('rule_name', models.CharField(max_length=255)),
                ('rule_description', models.CharField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='Rule_instance',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, verbose_name='ID', auto_created=True)),
                ('instance_content', models.TextField()),
                ('replacement', models.TextField(default='')),
                ('instance_type', models.CharField(max_length=10)),
                ('last_referred', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Rule_keyword_pair',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, verbose_name='ID', auto_created=True)),
                ('keyword', models.ForeignKey(to='customizationTool.Keyword')),
                ('rule', models.ForeignKey(to='customizationTool.Rule')),
            ],
        ),
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, verbose_name='ID', auto_created=True)),
                ('service_id', models.CharField(max_length=255)),
                ('service_name', models.CharField(max_length=255)),
            ],
        ),
        migrations.AlterUniqueTogether(
            name='service',
            unique_together=set([('service_id',)]),
        ),
        migrations.AddField(
            model_name='rule',
            name='service',
            field=models.ForeignKey(to='customizationTool.Service'),
        ),
        migrations.AlterUniqueTogether(
            name='keyword',
            unique_together=set([('keyword_content',)]),
        ),
        migrations.AddField(
            model_name='instance_pair',
            name='rule',
            field=models.ForeignKey(to='customizationTool.Rule'),
        ),
        migrations.AddField(
            model_name='instance_pair',
            name='rule_instance',
            field=models.ForeignKey(to='customizationTool.Rule_instance'),
        ),
        migrations.AddField(
            model_name='instance_keyword_pair',
            name='keyword',
            field=models.ForeignKey(to='customizationTool.Keyword'),
        ),
        migrations.AddField(
            model_name='instance_keyword_pair',
            name='rule_instance',
            field=models.ForeignKey(to='customizationTool.Rule_instance'),
        ),
        migrations.AddField(
            model_name='article',
            name='service',
            field=models.ForeignKey(to='customizationTool.Service'),
        ),
        migrations.AlterUniqueTogether(
            name='rule_keyword_pair',
            unique_together=set([('rule', 'keyword')]),
        ),
        migrations.AlterUniqueTogether(
            name='rule',
            unique_together=set([('service', 'rule_name')]),
        ),
        migrations.AlterUniqueTogether(
            name='instance_pair',
            unique_together=set([('rule', 'rule_instance')]),
        ),
        migrations.AlterUniqueTogether(
            name='instance_keyword_pair',
            unique_together=set([('rule_instance', 'keyword')]),
        ),
    ]
