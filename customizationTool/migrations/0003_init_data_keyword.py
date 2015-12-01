# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models, migrations
from customizationTool.mdFileStructure import structuralize, Block, Code, ListItem, Paragraph, Sentence, Steps, UnorderList, Table, BlockQuote
from django.core.exceptions import ObjectDoesNotExist
from bs4 import BeautifulSoup
from markdown import markdown
import re

inputPath = "./customizationTool/static/customizationTool/input/"

def addDataToTable(apps, schema_editor):
    Service = apps.get_model("customizationTool","Service")
    Rule = apps.get_model("customizationTool","Rule")
    Rule_instance = apps.get_model("customizationTool","Rule_instance")
    Instance_pair = apps.get_model("customizationTool","Instance_pair")
    Keyword = apps.get_model("customizationTool","Keyword")
    Rule_keyword_pair = apps.get_model("customizationTool","Rule_keyword_pair")
    Instance_keyword_pair = apps.get_model("customizationTool","Instance_keyword_pair")
    for instance in Rule_instance.objects.all():
        html = markdown(instance.instance_content)
        try:
            print(html)
        except:
            print("Not printable")
        nodes = structuralize(None, html)
        if len(nodes) == 1:
            print(type(nodes[0]))
            if type(nodes[0]) == Block:
                instance.instance_type = "block"
            if type(nodes[0]) == Sentence:
                instance.instance_type = "sentence"
            elif type(nodes[0]) == Table:
                instance.instance_type = "table"
            elif type(nodes[0]) == Code:
                instance.instance_type = "code"
            elif type(nodes[0]) == Paragraph:
                instance.instance_type = "paragraph"
            elif type(nodes[0]) == ListItem:
                instance.instance_type = "li"
            elif type(nodes[0]) == UnorderList:
                instance.instance_type = "ul"
            elif type(nodes[0]) == Steps:
                instance.instance_type = "steps"
            elif type(nodes[0]) == BlockQuote:
                instance.instance_type = "blockquote"
        else:
            instance.instance_type = "combined"
        instance.save()
        keywordsList = [node.getKeywords() for node in nodes]
        keywords = {}
        for li in keywordsList:
            for k,v in li.items():
                try:
                    keywords[k] += v
                except KeyError:
                    keywords[k] = v
        for word, score in keywords.items():
            try:
                keyword = Keyword.objects.get(keyword_content = word)
            except ObjectDoesNotExist:    
                keyword = Keyword(keyword_content = word)
                keyword.save()
            instance_keyword_pair = Instance_keyword_pair(rule_instance = instance, keyword = keyword, score = score)
            instance_keyword_pair.save()
    return

class Migration(migrations.Migration):

    dependencies = [
        ('customizationTool', '0002_init_data'),
    ]

    operations = [
        migrations.RunPython(addDataToTable),
    ]