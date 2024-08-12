from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .models import User
from .serializers import UserSerializer



class UserView(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer



    def create(self, req):

        form = self.get_serializer(data=req.POST)

        print(form.is_valid(raise_exception=True))


        return Response()

