from django.test import TestCase
from django.contrib.auth import get_user_model


"""
0x => Because is throw syntax error, zero leading is not permitted
"""

class UserTest(TestCase):
    def setUp(self):
        self.password = "hello worlds"

        model = get_user_model().objects.create(
            name="Sakura Haruka",
            age=12,
            nik=123012302130123012,
            email="harukasa@gmail.com",
            phone=62346263636126,
            address="Jalan. Jalan",
            is_admin=True
        )

        model.set_password(self.password)
        model.save()


    def test_password_check(self):
        self.assertTrue(get_user_model().objects.get(name="Sakura Haruka").check_password(self.password))


    def test_hashed_correctly(self):
        self.assertNotEqual(get_user_model().objects.get(name="Sakura Haruka").password, self.password)


    def test_user_exists(self):
        self.assertTrue(get_user_model().objects.get(name="Sakura Haruka"))


