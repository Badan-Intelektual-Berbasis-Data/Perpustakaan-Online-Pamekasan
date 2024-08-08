# Generated by Django 5.0.6 on 2024-08-08 00:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0021_genre_bookdisplay_genre'),
    ]

    operations = [
        migrations.AddField(
            model_name='bookdisplay',
            name='backdrop_url',
            field=models.CharField(default='', max_length=300),
        ),
        migrations.AddField(
            model_name='bookdisplay',
            name='desc',
            field=models.CharField(default='', max_length=1000),
        ),
        migrations.RemoveField(
            model_name='bookdisplay',
            name='category',
        ),
        migrations.AddField(
            model_name='bookdisplay',
            name='category',
            field=models.ManyToManyField(to='books.categories'),
        ),
    ]
