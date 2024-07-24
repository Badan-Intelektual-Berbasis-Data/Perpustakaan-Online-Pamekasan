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
        title = BookDisplay.objects.create(title="Belajar Ryoiki Tenkai - Part 2", date_published=datetime(2020, 5, 17))
        publisher = Publisher.objects.create(name="PT. Usaha Jaya, Ltd.")
        languange = Languange.objects.create(name="EN")
        author = Authors.objects.create(name="Helen Svacovich")
        category = Categories.objects.create(name="Sains")

        title.author_id.add(author)

        book = Book.objects.create(
            pages=20,
            width=30,
            height=40,
            edition=1,
            classification_number=123123,
            call_number="W123asdpw2",
            isbn=1234567891234,
            date_published=datetime(2020, 5, 17)
        )

        book.category_id.add(category)
        book.title_id.add(title)
        book.publisher_id.add(publisher)
        book.languange_id.add(languange)
        book.author_id.add(author)


    def test_relation_data_integrity(self):
        self.assertEqual(Book.objects.get(title="Belajar Ryoiki Tenkai - Part 2").title, "Belajar Ryoiki Tenkai - Part 2")
        self.assertEqual(Authors.objects.get(name="Helen Svacovich").name, "Helen Svacovich")
        self.assertEqual(Languange.objects.get(name="EN").name, "EN")
        self.assertEqual(Categories.objects.get(name="Sains").name, "Sains")
        self.assertEqual(Publisher.objects.get(name="PT. Usaha Jaya, Ltd.").name, "PT. Usaha Jaya, Ltd.")
