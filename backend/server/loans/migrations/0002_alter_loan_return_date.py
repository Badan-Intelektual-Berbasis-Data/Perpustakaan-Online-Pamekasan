# Generated by Django 5.0.6 on 2024-07-24 12:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('loans', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='loan',
            name='return_date',
            field=models.DateTimeField(),
        ),
    ]