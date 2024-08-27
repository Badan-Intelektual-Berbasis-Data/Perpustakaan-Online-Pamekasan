from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField, StringRelatedField
from .models import (
    Authors,
    Book,
    BookDisplay,
    Categories,
    Languange,
    Publisher,
    Genre,
    BookCode
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
        
class GenreSerializer(ModelSerializer):

    class Meta:
        model = Genre
        fields = '__all__'


class BookDisplaySerializer(ModelSerializer):
    author_name = StringRelatedField(source='author')
    category_name = StringRelatedField(source='category', many=True)
    genre_name = StringRelatedField(source='genre', many=True)

    class Meta:
        model = BookDisplay
        fields = '__all__'


class BooksSerializer(ModelSerializer):

    title = PrimaryKeyRelatedField(queryset=BookDisplay.objects.all())
    publisher = PrimaryKeyRelatedField(queryset=Publisher.objects.all())
    languange = PrimaryKeyRelatedField(queryset=Languange.objects.all())
    # title = BookDisplaySerializer()
    # publisher = PublisherSerializer()
    # languange = LanguangeSerializer()
    
    class Meta:
        model = Book
        fields = '__all__'
        depth = 1
        partial = True


class BookCodeSerializer(ModelSerializer):

    detail = BooksSerializer()
    # detail = PrimaryKeyRelatedField(queryset=BookCode.objects.all())

    class Meta:
        model = BookCode
        fields = '__all__'
        depth = 1
        partial = True