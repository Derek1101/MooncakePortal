from django.db import models, migrations
from django.db.models import Q
import json

services = {"web-sites":"web-sites","cloud-services":"cloud-services","sql-databases":"sql-databases","scheduler":"scheduler","redis-cache":"cache",
            "traffic-manager":"traffic-manager","networking":"virtual-network","virtual-machines":"virtual-machines","expressroute":"expressroute",
            "media-services":"media-services","site-recovery":"site-recovery","application-gateway":"application-gateway","identity":"active-directory",
            "multi-factor-authentication":"multi-factor-authentication","automation":"automation","notification-hubs":"notification-hubs",
            "cdn":"cdn","event-hubs":"event-hubs","backup":"backup","mobile-services":"mobile-services","storage":"storage","stream-analytics":"stream-analytics",
            "service-bus":"service-bus","hdinsight":"hdinsight","batch":"batch","mysql":"mysql","virtual-machines-linux":"virtual-machines-linux",
            "virtual-machines-windows":"virtual-machines-windows","iot-hub":"iot-hub","key-vault":"key-vault","sql-data-warehouse":"sql-data-warehouse",
            "sql-server-stretch-database":"sql-server-stretch-database","vpn-gateway":"vpn-gateway"}

def addDataToTable(apps, schema_editor):
    Landing_page = apps.get_model("landingPage", "Landing_page")
    landing_pages = Landing_page.objects.all()
    
    for page in landing_pages:
        page.ms_service = services[page.service.service_id]
        page.save()

class Migration(migrations.Migration):

    dependencies = [
        ('landingPage', '0009_landing_page_ms_service'),
    ]

    operations = [
        migrations.RunPython(addDataToTable),
    ]