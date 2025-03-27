# Generated by Django 5.1.7 on 2025-03-26 18:36

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="mfi",
            name="loanOfficer",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="loan_officer_profile",
                to="api.loanofficer",
            ),
        ),
    ]
