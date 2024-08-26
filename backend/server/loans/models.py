from django.db import models
from books.models import BookCode
from users.models import User


class Loan(models.Model):
    book = models.ForeignKey(BookCode, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    fine_ammount = models.BigIntegerField(default=0)
    return_status = models.BooleanField(default=False)
    borrow_date = models.DateTimeField(editable=False, auto_now_add=True)
    return_date = models.DateTimeField(editable=False, auto_now_add=True)
