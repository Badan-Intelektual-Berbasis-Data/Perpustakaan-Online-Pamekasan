# Generated by Django 5.0.6 on 2024-08-24 02:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0013_user_gender'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='image_url',
            field=models.CharField(default='https://loremflickr.com/200/200?random=2', max_length=255),
        ),
    ]
