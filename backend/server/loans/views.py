from rest_framework.viewsets import ModelViewSet
from .models import Loan
from .serializers import LoanSerializer


class LoanView(ModelViewSet):
    queryset = Loan.objects.all()
    serializer_class = LoanSerializer
