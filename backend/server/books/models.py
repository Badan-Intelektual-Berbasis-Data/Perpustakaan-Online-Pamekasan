from django.db import models


class Author(models.Model):
    name = models.CharField(max_length=255, unique=True)

class Book(models.Model):
    title = models.CharField(max_length=200, unique=True)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    date_published = models.DateField()
    date_registered = models.DateTimeField(auto_now_add=True, editable=False)

