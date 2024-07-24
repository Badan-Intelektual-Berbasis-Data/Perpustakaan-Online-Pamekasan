# Generated by Django 5.0.6 on 2024-06-13 08:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0004_remove_books_category_id_books_category_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='books',
            name='edition',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='books',
            name='isbn',
            field=models.IntegerField(blank=True, null=True, unique=True),
        ),
    ]