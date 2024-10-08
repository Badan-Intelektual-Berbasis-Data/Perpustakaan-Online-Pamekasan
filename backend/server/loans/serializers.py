from rest_framework.serializers import ModelSerializer
from .models import Loan
from books.serializers import BookCodeSerializer
from users.serializers import UserSerializer


class LoanSerializer(ModelSerializer):
    book = BookCodeSerializer()
    user = UserSerializer()

    class Meta:
        fields = '__all__'
        model = Loan
