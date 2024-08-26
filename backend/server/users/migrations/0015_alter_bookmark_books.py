# Generated by Django 5.0.6 on 2024-08-26 21:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0027_book_stock'),
        ('users', '0014_alter_user_image_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookmark',
            name='books',
            field=models.ManyToManyField(to='books.bookcode'),
        ),
    ]
