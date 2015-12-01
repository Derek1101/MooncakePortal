# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models, migrations
import json
from datetime import datetime
from django.core.exceptions import ObjectDoesNotExist
import glob
import re
import os 

inputPath = "./customizationTool/static/customizationTool/input/"

def addDataToTable(apps, schema_editor):
    Service = apps.get_model("customizationTool","Service")
    Rule = apps.get_model("customizationTool","Rule")
    Rule_instance = apps.get_model("customizationTool","Rule_instance")
    Instance_pair = apps.get_model("customizationTool","Instance_pair")
    Keyword = apps.get_model("customizationTool","Keyword")
    Rule_keyword_pair = apps.get_model("customizationTool","Rule_keyword_pair")
    Instance_keyword_pair = apps.get_model("customizationTool","Instance_keyword_pair")
    setting = getSetting()
    processedIncludeFiles = []
    for service_dict in setting["sevices"]:
        service_name = service_dict["service_name"]
        folder = service_dict["folder"]
        print("processing: "+service_name)
        service_id = service_name.lower().replace(" ", "-")
        try:
            service = Service.objects.get(service_id = service_id, service_name = service_name)
        except ObjectDoesNotExist:
            service = Service(service_id = service_id, service_name = service_name)
            service.save()
        print(service_name)
        fileList = glob.glob(inputPath+"trainingSet/"+folder+"*.md")
        for key in setting["includes_search_keys"][service_name]:
            includeFileList = glob.glob(inputPath+"trainingSet/"+"includes/*"+key+"*.md")
            for includeFile in includeFileList:
                if includeFile not in processedIncludeFiles:
                    processedIncludeFiles.append(includeFile)
                    fileList.append(includeFile)
        for filename in fileList:
            print("file: "+filename)
            file = open(filename, "r", encoding="utf8")
            lines = file.readlines()
            i = 0
            l = len(lines)
            while i < l:
                if lines[i].strip() == "deletion:":
                    i+=1
                    while i < l:
                        if lines[i].strip() == "deleted:":
                            i+=1
                            while i < l and lines[i].strip() == "":
                                i+=1
                            instance_content = ""
                            while i < l and lines[i].strip()[:7] != "reason:":
                                instance_content += lines[i]
                                i+=1
                            reasons = [reason.strip() for reason in lines[i].strip()[7:].split(",")]
                            reasons[0] = reasons[0][1:]
                            reasons[len(reasons)-1] = reasons[len(reasons)-1][:len(reasons[len(reasons)-1])-1]
                            instance_content = instance_content.replace("\n\t\t","\n").strip().lower()
                            rule_instances = Rule_instance.objects.filter(instance_content__startswith = instance_content)
                            rule_instance = None
                            for instance in rule_instances:
                                if instance.instance_content == instance_content and instance.replacement == "":
                                    rule_instance = instance
                                    break
                            if rule_instance == None:
                                rule_instance = Rule_instance(instance_content=instance_content, replacement="", instance_type="N/A", last_referred=datetime.utcnow())
                                rule_instance.save()
                            for reason in reasons:
                                try:
                                    rule = Rule.objects.get(service=service, rule_name=reason)
                                except ObjectDoesNotExist:
                                    rule = Rule(service=service, rule_name=reason, rule_description="N/A")
                                    rule.save()
                                try:
                                    instance_pair = Instance_pair.objects.get(rule=rule, rule_instance=rule_instance)
                                except ObjectDoesNotExist:
                                    instance_pair = Instance_pair(rule=rule, rule_instance=rule_instance)
                                    instance_pair.save()
                        elif lines[i].strip() == "replacement:":
                            i-=1
                            break
                        i+=1
                elif lines[i].strip() == "replacement:":
                    i+=1
                    while i < l:
                        if lines[i].strip() == "deleted:":
                            i+=1
                            while i < l and lines[i].strip() == "":
                                i+=1
                            instance_content = ""
                            while i < l and lines[i].strip() != "replaced by:":
                                instance_content += lines[i]
                                i+=1
                            replacement = ""
                            i+=1
                            while i < l and lines[i].strip()[:7] != "reason:":
                                replacement += lines[i]
                                i+=1
                            reasons = [reason.strip() for reason in lines[i].strip()[7:].split(",")]
                            reasons[0] = reasons[0][1:]
                            reasons[len(reasons)-1] = reasons[len(reasons)-1][:len(reasons[len(reasons)-1])-1]
                            instance_content = getUrlReplaced(instance_content, filename)
                            instance_content = instance_content.replace("\n\t\t","\n").strip().lower()
                            replacement = replacement.replace("\n\t\t","\n").strip()
                            rule_instances = Rule_instance.objects.filter(instance_content__startswith = instance_content, replacement__startswith = replacement)
                            rule_instance = None
                            for instance in rule_instances:
                                if instance.instance_content == instance_content and instance.replacement == replacement:
                                    rule_instance = instance
                                    break
                            if rule_instance == None:
                                rule_instance = Rule_instance(instance_content=instance_content, replacement=replacement, instance_type="N/A", last_referred=datetime.utcnow())
                                rule_instance.save()
                            for reason in reasons:
                                try:
                                    rule = Rule.objects.get(service=service, rule_name=reason)
                                except ObjectDoesNotExist:
                                    rule = Rule(service=service, rule_name=reason, rule_description="N/A")
                                    rule.save()
                                try:
                                    instance_pair = Instance_pair.objects.get(rule=rule, rule_instance=rule_instance)
                                except ObjectDoesNotExist:
                                    instance_pair = Instance_pair(rule=rule, rule_instance=rule_instance)
                                    instance_pair.save()
                        i+=1
                i+=1
    return

def getUrlReplaced(instance_content, filename):
    # [preview portal][preview-portal]
    link_reg = r"\[([^\]]*)\]\[([^\]]*)\]"
    ref_reg = r'\[%s\]:\s*(.+)\s*("[^"]*")?'
    links = re.findall(link_reg, instance_content)
    print(links)
    inputIndex = filename.find("trainingSet")
    filename = filename[inputIndex+12:]
    mooncakePath = "C:/Users/Administrator/Documents/GitHub/azure-content-mooncake-pr/"
    file = open(mooncakePath+filename, "r", encoding="utf8")
    fileText = file.read()
    file.close()
    for link in links:
        if link[1] == "":
            alias = link[0]
        else:
            alias = link[1]
        urls = re.findall(ref_reg%alias, fileText)
        print(urls)
        if len(urls) == 0:
            print("can not find link [%s] in file %s"%(alias, filename))
        else:
            instance_content = instance_content.replace("[%s][%s]"%(link[0], link[1]), "[%s](%s)"%(link[0], urls[0][0]))
    return instance_content
    

def getSetting():
    settingfile = open(inputPath+"setting.json", "r")
    setting = json.loads(settingfile.read())
    settingfile.close()
    return setting


class Migration(migrations.Migration):

    dependencies = [
        ('customizationTool', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(addDataToTable),
    ]