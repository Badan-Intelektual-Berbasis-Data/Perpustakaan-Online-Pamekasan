from rest_framework.serializers import ModelSerializer
from .models import Loan
from books.serializers import BookCodeSerializer
from users.serializers import UserSerializer


class LoanSerializer(ModelSerializer):
    book = BookCodeSerializer()
    user = UserSerializer()

    class Meta:
        fields = ['book', 'user']
        model = Loan


    # def create(self, validated_data):
    #     print(validated_data)

    #     return Loan.objects.create(**validated_data)