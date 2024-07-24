from django.utils.timezone import datetime
from django.test import TestCase
from .models import Loan

class CreateLoanTest(TestCase):
    def setUp(self):
        loan = Loan.objects.create(
            fine_ammount=12000,
            return_date=datetime(2024, 8, 12, 13)
        )
