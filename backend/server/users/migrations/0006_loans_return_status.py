# Generated by Django 5.0.6 on 2024-06-13 07:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_rename_orders_loans_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='loans',
            name='return_status',
            field=models.BooleanField(default=True),
        ),
    ]
