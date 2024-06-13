from django.test import TestCase
from .models import (
    Books,
    Authors,
    Categories
)
from datetime import datetime


class BookTest(TestCase):

    def setUp(self):
        author = Authors.objects.create(name="Alvin Setya Pranata")
        category = Categories.objects.create(name="Sains")
        book = Books.objects.create(
            title="Belajar Ryoiki Tenkai",
            author_id=author,
            publisher="",
            isbn=1234567891234,
            date_published=datetime(2020, 5, 17)
        )

        book.category_id.add(category)


    def test_data_integrity(self):
        self.assertEqual(Books.objects.get(title="Belajar Ryoiki Tenkai").title, "Belajar Ryoiki Tenkai")
        self.assertEqual(Authors.objects.get(name="Alvin Setya Pranata").name, "Alvin Setya Pranata")
        self.assertEqual(Categories.objects.get(name="Sains").name, "Sains")
