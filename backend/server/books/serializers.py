from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField
from .models import (
    Author,
    Book
)

class AuthorSerializer(ModelSerializer):
    
    class Meta:
        model = Author
        fields = '__all__'
        
    

class BooksSerializer(ModelSerializer):

    author = PrimaryKeyRelatedField(queryset=Author.objects.all())
    
    class Meta:
        model = Book
        fields = '__all__'
        depth = 1

    