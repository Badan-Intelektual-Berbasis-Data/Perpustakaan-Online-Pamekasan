# Generated by Django 5.0.6 on 2024-07-24 13:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0009_delete_loans'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='image_url',
            field=models.CharField(default='UNSET', max_length=255),
        ),
    ]