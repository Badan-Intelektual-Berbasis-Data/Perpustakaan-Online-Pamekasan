from django.db import models


class Authors(models.Model):
    name = models.CharField(max_length=255, unique=True)
    date_created = models.DateTimeField(auto_now_add=True, editable=False, null=True, blank=True)

    def __str__(self):
        return self.name
    

class Categories(models.Model):
    name = models.CharField(max_length=50, unique=True)
    date_created = models.DateTimeField(auto_now_add=True, editable=False, null=True, blank=True)

    def __str__(self):
        return self.name


class Publisher(models.Model):
    name = models.CharField(max_length=100, unique=True)
    date_created = models.DateTimeField(auto_now_add=True, editable=False, null=True, blank=True)

    def __str__(self):
        return self.name

class Languange(models.Model):
    name = models.CharField(max_length=10, unique=True)
    date_created = models.DateTimeField(auto_now_add=True, editable=False, null=True, blank=True)

    def __str__(self):
        return self.name


class BookDisplay(models.Model):
    title = models.CharField(max_length=200, unique=True)
    author_id = models.ForeignKey(Authors, on_delete=models.CASCADE)
    category_id = models.ForeignKey(Categories, on_delete=models.CASCADE)
    date_published = models.DateField()
    date_registered = models.DateTimeField(auto_now_add=True, editable=False)

    def __str__(self):
        return self.title

class Book(models.Model):
    title_id = models.ForeignKey(BookDisplay, on_delete=models.CASCADE)
    publisher_id = models.ForeignKey(Publisher, on_delete=models.CASCADE)
    languange_id = models.ForeignKey(Languange, on_delete=models.CASCADE)
    classification_number = models.PositiveBigIntegerField()
    call_number = models.CharField(max_length=30, default='')
    width = models.IntegerField()
    height = models.IntegerField()
    pages = models.IntegerField()
    isbn = models.PositiveBigIntegerField(unique=True, null=True, blank=True)  # 13 Digits
    edition = models.IntegerField(default=1)
    date_published = models.DateField()
    date_registered = models.DateTimeField(auto_now_add=True, editable=False)

    def __str__(self):
        return self.title


class bookShelf(models.Model):
    name = models.CharField(max_length=50, unique=True)
    book_id = models.ForeignKey(Book, on_delete=models.CASCADE)
    date_registered = models.DateTimeField(auto_now_add=True, editable=False)
