# Generated by Django 5.0.6 on 2024-08-26 21:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0026_remove_book_stock'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='stock',
            field=models.IntegerField(default=0),
        ),
    ]