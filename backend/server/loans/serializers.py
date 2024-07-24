from rest_framework.serializers import ModelSerializer
from .models import Loan


class LoanSerializer(ModelSerializer):

    class Meta:
        fields = '__all__'
        model = Loan