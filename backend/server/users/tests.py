from django.test import TestCase
from django.contrib.auth import get_user_model


"""
0x => Because is throw syntax error, zero leading is not permitted
"""

class UserTest(TestCase):
    def setUp(self):
        self.password = "hello worlds"

        model = get_user_model().objects.create(
            name="Alvin Setya Pranata",
            age=12,
            email="comand.alvin@gmail.com",
            phone=0x085334277450,
            address="Jalan. Jalan",
            is_admin=True
        )

        model.set_password(self.password)


    def check_pasword_hashed(self):
        self.assertTrue(get_user_model().objects.get(name="Alvin Setya Pranata").check_password(self.password))


    def check_user_exists(self):
        self.assertTrue(get_user_model().objects.get(name="Alvin Setya Pranata"))


