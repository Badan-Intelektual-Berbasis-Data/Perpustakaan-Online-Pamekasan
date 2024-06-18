from django.db import models


class Authors(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name
    

class Categories(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class Books(models.Model):
    title = models.CharField(max_length=200, unique=True)
    author_id = models.ForeignKey(Authors, on_delete=models.CASCADE)
    category_id = models.ManyToManyField(Categories)
    publisher = models.CharField(max_length=255, null=True, blank=True)
    isbn = models.IntegerField(unique=True, null=True, blank=True)  # 13 Digits
    edition = models.IntegerField(default=1)
    date_published = models.DateField()
    date_registered = models.DateTimeField(auto_now_add=True, editable=False)

    def __str__(self):
        return self.title




