import random
from django.db.models import ForeignKey
from rest_framework.exceptions import NotFound
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
    Genre,
    BookCode
)
from .serializers import (
    AuthorSerializer,
    BooksSerializer,
    BookDisplaySerializer,
    CategoriesSerializer,
    PublisherSerializer,
    LanguangeSerializer,
    GenreSerializer,
    BookCodeSerializer
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

        query_data = CategoriesSerializer(Categories.objects.all()[:5], many=True)

        return Response(query_data.data)
    

    def create(self, req):
        
        data = CategoriesSerializer(data=req.POST)

        if data.is_valid(raise_exception=True):
            data.save()

            return Response({'messege' : 'Kategori baru telah ditambahkan'})
        

class DetailView(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BooksSerializer



    def create(self, req):

        data = BooksSerializer(data=req.POST)

        if data.is_valid(raise_exception=True):

            data.save()
            
            return Response({'messege' : 'Buku baru telah ditambahkan'})
        

class BookCodeView(ModelViewSet):
    queryset = BookCode.objects.all()
    serializer_class = BookCodeSerializer


class DisplayView(ModelViewSet):
    queryset = BookDisplay.objects.all()
    serializer_class = BookDisplaySerializer

    def get_queryset(self):        
        category_request = self.request.query_params.get("category")
        id_request = self.request.query_params.get("id")
        search = self.request.query_params.get("search")
        filter_ = self.request.query_params.get("by")

        res = self.queryset
        
        if category_request:
            res = res.filter(category=category_request)

        if id_request:
            res = res.filter(id=category_request)


        if search:
            filters = {}

            if filter_:
                if self.is_foreign_key(filter_):
                    filters[f"{filter_}__name__icontains"] = search
                else:
                    filters[f"{filter_}__icontains"] = search
            else:
                filters["title__contains"] = search
            
            res = res.filter(**filters)

            if not res:
                raise NotFound()


        else:
            return res.all()

        return res
    
    def is_foreign_key(self, field_name):
        
        model_class = self.queryset.model
        
        try:
            field = model_class._meta.get_field(field_name)
            return isinstance(field, ForeignKey)
        except:
            return False


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