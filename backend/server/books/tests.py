from django.test import TestCase
from .models import (
    Book,
    Authors,
    Categories,
    Publisher,
    Languange,
    BookDisplay
)
from datetime import datetime


class BookTest(TestCase):

    def setUp(self):
        author = Authors.objects.create(name="Helen Svacovich")
        category = Categories.objects.create(name="Sains")
        title = BookDisplay.objects.create(title="Belajar Ryoiki Tenkai - Part 2", date_published=datetime(2020, 5, 17), author=author, category=category)
        publisher = Publisher.objects.create(name="PT. Usaha Jaya, Ltd.")
        languange = Languange.objects.create(name="EN")


        Book.objects.create(
            title=title,
            publisher=publisher,
            languange=languange,
            pages=20,
            width=30,
            height=40,
            edition=1,
            classification_number=123123,
            call_number="W123asdpw2",
            isbn=1234567891234,
            date_published=datetime(2020, 5, 17)
        )

    def test_relation_data_integrity(self):
        self.assertEqual(Book.objects.get(title="Belajar Ryoiki Tenkai - Part 2").title, "Belajar Ryoiki Tenkai - Part 2")
        self.assertEqual(Authors.objects.get(name="Helen Svacovich").name, "Helen Svacovich")
        self.assertEqual(Languange.objects.get(name="EN").name, "EN")
        self.assertEqual(Categories.objects.get(name="Sains").name, "Sains")
        self.assertEqual(Publisher.objects.get(name="PT. Usaha Jaya, Ltd.").name, "PT. Usaha Jaya, Ltd.")
