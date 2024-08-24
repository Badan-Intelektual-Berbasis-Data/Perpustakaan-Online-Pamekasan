from rest_framework.serializers import ModelSerializer
from .models import Loan
from books.serializers import BooksSerializer
from users.serializers import UserSerializer


class LoanSerializer(ModelSerializer):
    book = BooksSerializer()
    user = UserSerializer()

    class Meta:
        fields = '__all__'
        model = Loan