# Generated by Django 5.0.6 on 2024-06-13 07:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0002_categories_remove_book_author_rename_author_authors_and_more'),
        ('users', '0004_alter_orders_book_id'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Book',
        ),
    ]
