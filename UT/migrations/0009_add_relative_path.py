from django.db import models, migrations

folders = {}
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
folders["SQL Data Warehouse"] = "articles/sql-data-warehouse/"
folders["Multi-Factor Authentication"] = "articles/multi-factor-authentication/"

def addDataToTable(apps, schema_editor):
    Service = apps.get_model("UT", "Service")
    services = Service.objects.all()
    for service in services:
        service.relative_path = folders[service.name]
        service.save()

class Migration(migrations.Migration):

    dependencies = [
        ('UT', '0008_service_relative_path'),
    ]

    operations = [
        migrations.RunPython(addDataToTable),
    ]