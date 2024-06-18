from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField
from .models import (
    Authors,
    Books,
    Categories
)

class AuthorSerializer(ModelSerializer):
    
    class Meta:
        model = Authors
        fields = '__all__'
        

class CategoriesSerializer(ModelSerializer):

    class Meta:
        model = Categories
        fields = '__all__'


class BooksSerializer(ModelSerializer):

    author = PrimaryKeyRelatedField(queryset=Authors.objects.all())
    
    class Meta:
        model = Books
        fields = '__all__'
        depth = 1
        partial = True