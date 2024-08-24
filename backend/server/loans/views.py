from rest_framework.viewsets import ModelViewSet
from rest_framework.exceptions import NotFound
from .models import Loan
from .serializers import LoanSerializer


class LoanView(ModelViewSet):
    queryset = Loan.objects.all()
    serializer_class = LoanSerializer


    def get_queryset(self):
        user =self.request.query_params.get("user")

        res = self.queryset

        if user:
            res = res.filter(user_id=user)


        if not res:
            raise NotFound()


        return res


