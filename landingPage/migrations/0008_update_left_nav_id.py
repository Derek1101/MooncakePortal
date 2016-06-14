from django.db import models, migrations
from django.db.models import Q
import json

def addDataToTable(apps, schema_editor):
    Landing_page = apps.get_model("landingPage", "Landing_page")
    landing_pages = Landing_page.objects.all()
    
    for page in landing_pages:
        nav_json = page.navigationJson
        nav = json.loads(nav_json)
        nav["id"] = "left_nav_top_level_"+page.service.service_id

        for i in range(len(nav["navigation"])):
            nav["navigation"][i]["id"] = "left_nav_first_level_"+page.service.service_id+"_"+str(i)
            for j in range(len(nav["navigation"][i]["articles"])):
                nav["navigation"][i]["articles"][j]["id"] = "left_nav_second_level_"+page.service.service_id+"_"+str(i)+"_"+str(j)

        page.navigationJson = json.dumps(nav).encode('utf-8').decode("unicode-escape")

        page.save()

class Migration(migrations.Migration):

    dependencies = [
        ('landingPage', '0008_auto_20151207_1348'),
    ]

    operations = [
        migrations.RunPython(addDataToTable),
    ]