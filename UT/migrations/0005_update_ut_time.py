from django.db import models, migrations

def addDataToTable(apps, schema_editor):
    Record = apps.get_model("UT", "Record")
    for record in Record.objects.all():
        record.UT_time = record.submit_time
        record.save()

class Migration(migrations.Migration):

    dependencies = [
        ('UT', '0004_record_ut_time'),
    ]

    operations = [
        migrations.RunPython(addDataToTable),
    ]