from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField
from .models import (
    Authors,
    Book,
    BookDisplay,
    Categories,
    Languange,
    Publisher
)

class AuthorSerializer(ModelSerializer):
    
    class Meta:
        model = Authors
        fields = '__all__'
        

class CategoriesSerializer(ModelSerializer):

    class Meta:
        model = Categories
        fields = '__all__'


class LanguangeSerializer(ModelSerializer):

    class Meta:
        model = Languange
        fields = '__all__'

class PublisherSerializer(ModelSerializer):

    class Meta:
        model = Publisher
        fields = '__all__'


class BookDisplaySerializer(ModelSerializer):

    class Meta:
        model = BookDisplay
        fields = '__all__'


class BooksSerializer(ModelSerializer):

    title_id = PrimaryKeyRelatedField(queryset=BookDisplay.objects.all())
    author_id = PrimaryKeyRelatedField(queryset=Authors.objects.all())
    publisher_id = PrimaryKeyRelatedField(queryset=Publisher.objects.all())
    languange_id = PrimaryKeyRelatedField(queryset=Languange.objects.all())
    
    class Meta:
        model = Book
        fields = '__all__'
        depth = 1
        partial = True