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
        exclude = ['password', 'groups', 'is_superuser', 'last_login', 'user_permissions']
        model = User


    def create(self, validated_data):
        
        password = validated_data.pop("password")

        _, _ = validated_data.pop("groups"), validated_data.pop("user_permissions")


        user = User.objects.create(**validated_data)

        user.set_password(password)
        user.save()

        return user





class BookmarkSerializer(ModelSerializer):

    # books = BookDisplaySerializer(many=True)
    class Meta:
        fields = '__all__'
        model = Bookmark
