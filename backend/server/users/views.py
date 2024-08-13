from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST,
    HTTP_403_FORBIDDEN
)
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import (
    UserSerializer,
    BookmarkSerializer
)
from .models import (
    User, Bookmark
)



class UserView(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer



    def create(self, req):


        form = self.get_serializer(data=req.POST)


        if not form.is_valid():
            return Response(status=HTTP_400_BAD_REQUEST)

        form.save()

        refresh_token = RefreshToken.for_user(req.user)
        token_data = {
            "refresh_token": str(refresh_token),
            "access_token": str(refresh_token.access_token)
        }

        return Response(token_data, status=HTTP_201_CREATED)



class BookmarkView(ModelViewSet):
    queryset = Bookmark.objects.all()
    serializer_class = BookmarkSerializer


    def list(self, _):
        return Response(status=HTTP_403_FORBIDDEN)