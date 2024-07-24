# Generated by Django 5.0.6 on 2024-06-13 07:18

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0001_initial'),
        ('users', '0002_remove_user_is_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='Orders',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('return_time', models.DateTimeField()),
                ('order_created', models.DateTimeField(auto_now_add=True)),
                ('book_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='books.book')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]