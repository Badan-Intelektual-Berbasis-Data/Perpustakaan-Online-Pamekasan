from django.contrib.auth import get_user_model, authenticate
from django.middleware.csrf import get_token
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST,
    HTTP_403_FORBIDDEN,
    HTTP_404_NOT_FOUND,
    HTTP_401_UNAUTHORIZED,
    HTTP_205_RESET_CONTENT
)
from rest_framework.response import Response
from rest_framework_simplejwt.exceptions import TokenError
from rest_framework.viewsets import (
    ModelViewSet,
    ViewSet
)
from rest_framework.decorators import (
    action,
    permission_classes
)
from rest_framework_simplejwt.tokens import (
    RefreshToken, 
    AccessToken
)
from rest_framework.permissions import IsAuthenticated
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


    @action(methods=["post"], detail=False, url_path='login')
    def login(self, req):
        
        data = req.POST

        user = get_user_model().objects.filter(email=data.get("email"))

        if not user:
            return Response(status=HTTP_404_NOT_FOUND)
        
        # Authenticate request with it's credentials

        auth = authenticate(req, email=data["email"], password=data["password"])

        if not auth:
            return Response(status=HTTP_401_UNAUTHORIZED)
        
        refresh_token = RefreshToken.for_user(auth)

        payload = {
            "refresh_token" : str(refresh_token),
            "access_token" : str(refresh_token.access_token)
        }

        return Response(payload)


    @action(methods=["post"], detail=False, url_path="logout")
    @permission_classes([IsAuthenticated])
    def logout(self, req):

        refresh_token = req.POST
        print(refresh_token)

        refresh_token = refresh_token["refresh"]

        token = RefreshToken(refresh_token)
        token.blacklist()
        return Response(status=HTTP_205_RESET_CONTENT)

            # return Response(status=HTTP_400_BAD_REQUEST)



    @action(methods=["post"], detail=False, url_path="get_user")
    @permission_classes([IsAuthenticated])
    def get_user(self, req):

        data = req.POST

        try:

            access_token = AccessToken(data["access_token"])
            user_id = access_token["user_id"]

        except TokenError:
            return Response(status=HTTP_401_UNAUTHORIZED)


        user = UserSerializer(get_user_model().objects.filter(id=int(user_id))[0])

        return Response(user.data)


    # Register
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
    permission_classes = (IsAuthenticated,)


    def list(self, _):
        return Response(status=HTTP_403_FORBIDDEN)
    


class GetCsrfView(ViewSet):

    @action(methods=["get"], detail=False)
    def get_token(self, req):
        token = get_token(req)

        return Response({"csrftoken" : token})
    
