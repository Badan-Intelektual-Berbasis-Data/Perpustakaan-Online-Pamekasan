from rest_framework.status import HTTP_409_CONFLICT
from rest_framework.serializers import (
    ModelSerializer,
    StringRelatedField,
)
from books.serializers import BookDisplaySerializer
from .models import (
    User,
    Bookmark
)



class UserSerializer(ModelSerializer):
    class Meta:
        fields = '__all__'
        model = User


class BookmarkSerializer(ModelSerializer):

    books = BookDisplaySerializer(many=True)
    class Meta:
        fields = '__all__'
        model = Bookmark
