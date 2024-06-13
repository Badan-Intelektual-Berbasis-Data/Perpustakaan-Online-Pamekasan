# Generated by Django 5.0.6 on 2024-06-13 07:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0003_delete_book'),
        ('users', '0004_alter_orders_book_id'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Orders',
            new_name='Loans',
        ),
        migrations.RenameField(
            model_name='loans',
            old_name='order_created',
            new_name='loan_created',
        ),
        migrations.RenameField(
            model_name='loans',
            old_name='return_time',
            new_name='return_date',
        ),
    ]
