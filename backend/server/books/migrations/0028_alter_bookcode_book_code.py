# Generated by Django 5.0.6 on 2024-08-27 00:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0027_book_stock'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookcode',
            name='book_code',
            field=models.CharField(max_length=14, unique=True),
        ),
    ]
