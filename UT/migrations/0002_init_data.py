from django.db import models, migrations
import os
import glob
from collections import OrderedDict

folders = OrderedDict()
folders["App Service Web"] = "articles/app-service-web/"
folders["Automation"] = "articles/automation/"
folders["HDInsight"] = "articles/hdinsight/"
folders["Media Service"] = "articles/media-services/"
folders["Redis Cache"] = "articles/redis-cache/"
folders["Traffic Manager"] = "articles/traffic-manager/"
folders["Virtual Network"] = "articles/virtual-network/"
folders["Active Directory"] = "articles/active-directory/"
folders["Batch"] = "articles/batch/"
folders["Cache"] = "articles/cache/"
folders["CDN"] = "articles/cdn/"
folders["Cloud Service"] = "articles/cloud-services/"
folders["Event Hubs"] = "articles/event-hubs/"
folders["ExpressRoute"] = "articles/expressroute/"
folders["Mobile Services"] = "articles/mobile-services/"
folders["Scheduler"] = "articles/scheduler/"
folders["Service Bus"] = "articles/service-bus/"
folders["Site Recovery"] = "articles/site-recovery/"
folders["SQL Database"] = "articles/sql-database/"
folders["Storage"] = "articles/storage/"
folders["Virtual Machine"] = "articles/virtual-machines/"
folders["Application Gateway"] = "articles/application-gateway/"
folders["Backup"] = "articles/backup/"
folders["Notification Hubs"] = "articles/notification-hubs/"
folders["Key Vault"] = "articles/Key-Vault"
folders["Multi Factor Authentication"] = "articles/multi-factor-authentication"
folders["Stream Analytics"] = "articles/stream-analytics"
folders["VPN Gateway"] = "articles/vpn-gateway"
folders["Others"] = "articles/"
folders["Includes"] = "includes/"

labor_types = OrderedDict()
labor_types["Customization"] = True
labor_types["Bugfix"] = True
labor_types["Mooncake Portal"] = True
labor_types["Meeting"] = False
labor_types["Training"] = False

path_mooncake = "C:/Users/Administrator/Documents/GitHub/azure-content-mooncake-pr/"
path_global = "C:/Users/Administrator/Documents/GitHub/azure-content-pr/"

def addDataToTable(apps, schema_editor):
    Labor_type = apps.get_model("UT", "Labor_type")
    Record = apps.get_model("UT", "Record")
    Service = apps.get_model("UT", "Service")
    Article = apps.get_model("UT", "Article")
    Record_article = apps.get_model("UT", "Record_article")
    for k, v in folders.items():
        service_name = k
        service = Service(name = service_name)
        service.save()
        mooncakeFileList = [os.path.splitext(os.path.split(file)[1])[0] for file in glob.glob(path_mooncake+v+"/*.md")]
        globalFileList = [os.path.splitext(os.path.split(file)[1])[0] for file in glob.glob(path_global+v+"/*.md")]
        fileList = sorted(list(set(globalFileList) | set(mooncakeFileList)))
        for file in fileList:
            print("processing: "+file)
            article = Article(service=service, status="unknown", filename=file)
            article.save()

    for k, v in labor_types.items():
        labor_type = Labor_type(type_name=k, deliverability=v)
        labor_type.save()

class Migration(migrations.Migration):

    dependencies = [
        ('UT', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(addDataToTable),
    ]