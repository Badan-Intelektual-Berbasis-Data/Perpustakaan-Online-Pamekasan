# Generated by Django 5.0.6 on 2024-08-24 01:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0022_bookdisplay_backdrop_url_bookdisplay_desc_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='status',
            field=models.BooleanField(default=True),
        ),
    ]
