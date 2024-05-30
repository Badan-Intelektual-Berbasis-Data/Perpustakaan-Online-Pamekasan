from django.db import models

class Author(models.Model):
    AUTHORITY_TYPE_CHOICES = (
        ('P', 'P'),
        ('O', 'O'),
        ('C', 'C'),
    )

    author_id = models.IntegerField(primary_key=True, unique=True)
    author_name = models.CharField(100)
    author_year = models.CharField(20, null=True, blank=True)
    authority_type = models.CharField(max_length=1, choices=AUTHORITY_TYPE_CHOICES, null=True, blank=True, default=AUTHORITY_TYPE_CHOICES["p"])
    auth_list = models.CharField(max_length=20, null=True, blank=True)
    input_date = models.DateField()
    last_udpate = models.DateField(null=True, blank=True)