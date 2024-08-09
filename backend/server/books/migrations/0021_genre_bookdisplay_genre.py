# Generated by Django 5.0.6 on 2024-08-02 13:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0020_remove_book_book_image_url_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, unique=True)),
                ('date_created', models.DateTimeField(auto_now_add=True, null=True)),
            ],
        ),
        migrations.AddField(
            model_name='bookdisplay',
            name='genre',
            field=models.ManyToManyField(to='books.genre'),
        ),
    ]
