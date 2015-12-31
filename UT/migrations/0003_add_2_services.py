from django.db import models, migrations
import os
import glob
from collections import OrderedDict

folders = OrderedDict()
folders["SQL Data Warehouse"] = "articles/sql-data-warehouse/"
folders["Multi-Factor Authentication"] = "articles/multi-factor-authentication/"

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

class Migration(migrations.Migration):

    dependencies = [
        ('UT', '0002_init_data'),
    ]

    operations = [
        migrations.RunPython(addDataToTable),
    ]