# Generated by Django 5.0.6 on 2024-06-13 07:23

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0002_categories_remove_book_author_rename_author_authors_and_more'),
        ('users', '0003_orders'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orders',
            name='book_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='books.books'),
        ),
    ]