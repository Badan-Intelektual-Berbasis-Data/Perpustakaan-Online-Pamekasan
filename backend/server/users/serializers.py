from rest_framework.status import HTTP_409_CONFLICT
from rest_framework.exceptions import ValidationError
from rest_framework.serializers import ModelSerializer
from .models import User



class UserSerializer(ModelSerializer):
    class Meta:
        fields = '__all__'
        model = User
