import random
# from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.viewsets import ModelViewSet
from .models import (
    Authors,
    Book,
    BookDisplay,
    Categories,
    Publisher,
    Languange,
    Genre
)
from .serializers import (
    AuthorSerializer,
    BooksSerializer,
    BookDisplaySerializer,
    CategoriesSerializer,
    PublisherSerializer,
    LanguangeSerializer,
    GenreSerializer
)



class PublisherView(ModelViewSet):
    queryset = Publisher.objects.all()
    serializer_class = PublisherSerializer


class LanguangeView(ModelViewSet):
    queryset = Languange.objects.all()
    serializer_class = LanguangeSerializer


class AuthorsView(ModelViewSet):
    queryset = Authors.objects.all()
    serializer_class = AuthorSerializer

    def retrieve(self, _):

        query_data = AuthorSerializer(Authors.objects.all(), many=True)

        return Response(query_data.data)


    def create(self, req):

        data = AuthorSerializer(data=req.POST)

        if data.is_valid(raise_exception=True):

            data.save()

            return Response({'messege' : 'Pengarang baru telah ditambahkan'})


class CategoriesView(ModelViewSet):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer


    def get_queryset(self):

        mixed = self.request.query_params.get("mixed")

        if mixed:
            return sorted(self.queryset.all().order_by('name'), key=lambda x: random.random())[:3]


        return self.queryset.all()


    def retrieve(self, _):

        query_data = CategoriesSerializer(Categories.objects.all(), many=True)

        return Response(query_data.data)
    

    def create(self, req):
        
        data = CategoriesSerializer(data=req.POST)

        if data.is_valid(raise_exception=True):
            data.save()

            return Response({'messege' : 'Kategori baru telah ditambahkan'})
        

class DetailView(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BooksSerializer

    def retrieve(self, _, pk):

        

        return Response({}, status=status.HTTP_400_BAD_REQUEST)

    def create(self, req):

        data = BooksSerializer(data=req.POST)

        if data.is_valid(raise_exception=True):

            data.save()
            
            return Response({'messege' : 'Buku baru telah ditambahkan'})


class DisplayView(ModelViewSet):
    queryset = BookDisplay.objects.all()
    serializer_class = BookDisplaySerializer

    def get_queryset(self):        
        category_request = self.request.query_params.get("category")
        id_request = self.request.query_params.get("id")
        mixed = self.request.query_params.get("mixed")
        
        if category_request:
            return self.queryset.filter(category=category_request)
        
        elif id_request:
            return self.queryset.filter(id=category_request)

        elif mixed:
            return sorted(self.queryset.all().order_by('title'), key=lambda x: random.random())[:3]

        return self.queryset.all()


    def create(self, req):
        data = BookDisplaySerializer(data=req.POST)

        if data.is_valid(raise_exception=True):

            data.save()
            
            return Response({'messege' : 'Buku baru telah ditambahkan'})
        

class GenreView(ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer


    def create(self, req):

        data = GenreSerializer(data=req.POST)

        if data.is_valid(raise_exception=True):

            data.save()
            
            return Response({'messege' : 'Genre baru telah ditambahkan'})