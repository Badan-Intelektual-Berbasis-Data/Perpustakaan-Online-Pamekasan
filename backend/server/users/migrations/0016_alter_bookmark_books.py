# Generated by Django 5.0.6 on 2024-08-27 00:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0029_rename_book_bookcode_detail'),
        ('users', '0015_alter_bookmark_books'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookmark',
            name='books',
            field=models.ManyToManyField(to='books.book'),
        ),
    ]
