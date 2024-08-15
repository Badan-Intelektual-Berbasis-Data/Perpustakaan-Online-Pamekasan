from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser, 
    PermissionsMixin, 
    BaseUserManager
)
from django.utils.translation import gettext_lazy as _
from books.models import BookDisplay


class UserManager(BaseUserManager):
    
    def create_user(self, name, age, email, phone, address, password, **extra_fields):
        if not name:
            raise ValueError(f"Invalid {name} as a Name!")
        
        if not password:
            raise ValueError(f"Password must be used!")


        extra_fields.setdefault("is_admin", False)
        email = self.normalize_email(_(email))
        user = self.model(name=name, age=age, email=email, phone=phone, address=address, **extra_fields)
        user.set_password(password)
        user.save()

        return user


    def create_adminuser(self, name, age, email, phone, address, password):

        return self.create_user(name, age, email, phone, address, password, is_admin=True)



class User(AbstractBaseUser, PermissionsMixin):
    nik = models.PositiveBigIntegerField(unique=True)
    name = models.CharField(max_length=255, unique=True)
    age = models.IntegerField()
    email = models.EmailField(unique=True)
    phone = models.BigIntegerField()
    address = models.CharField(max_length=300)
    image_url = models.CharField(max_length=255, default="UNSET")
    is_admin = models.BooleanField(default=False)
    date_registered = models.DateTimeField(auto_now_add=True, editable=False)

    objects = UserManager()



    def __str__(self):
        return self.name


    USERNAME_FIELD = "email"
 
    REQUIRED_FIELDS = ["age", "name", "phone", "address", "nik"]


class Bookmark(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    books = models.ManyToManyField(BookDisplay)
