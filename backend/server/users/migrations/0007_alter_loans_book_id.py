# Generated by Django 5.0.6 on 2024-07-23 12:40

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0007_remove_books_author_id_remove_books_category_id_and_more'),
        ('users', '0006_loans_return_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='loans',
            name='book_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='books.book'),
        ),
    ]
