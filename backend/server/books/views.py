# from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.views import APIView
from .models import (
    Authors,
    Books,
    Categories
)
from .serializers import (
    AuthorSerializer,
    BooksSerializer,
    CategoriesSerializer
)


class AuthorsView(GenericAPIView):
    queryset = Authors.objects.all()
    serializer_class = AuthorSerializer

    def get(self, _):

        query_data = AuthorSerializer(Authors.objects.all(), many=True)

        return Response(query_data.data)


    def post(self, req):

        data = AuthorSerializer(data=req.POST)

        if data.is_valid(raise_exception=True):

            data.save()

            return Response({'messege' : 'Pengarang baru telah ditambahkan'})


class CategoriesView(GenericAPIView):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer


    def get(self, _):

        query_data = CategoriesSerializer(Categories.objects.all(), many=True)

        return Response(query_data.data)
    

    def post(self, req):
        
        data = CategoriesSerializer(data=req.POST)

        if data.is_valid(raise_exception=True):
            data.save()

            return Response({'messege' : 'Kategori baru telah ditambahkan'})
        

class BooksView(GenericAPIView):
    queryset = Books.objects.all()
    serializer_class = BooksSerializer


    def post(self, req):

        data = BooksSerializer(data=req.POST)

        if data.is_valid(raise_exception=True):

            data.save()
            
            return Response({'messege' : 'Buku baru telah ditambahkan'})
        

    def get(self, _):
        query_data = BooksSerializer(Books.objects.all().order_by('title'), many=True)

        return Response(query_data.data)
    

class BookDetail(GenericAPIView):
    queryset = Books.objects.all()
    serializer_class = BooksSerializer


    def get(self, _, book_id):

        query_data = BooksSerializer(Books.objects.filter(id=book_id), many=True)

        if len(query_data.data) == 0:
            return Response({}, status=status.HTTP_404_NOT_FOUND)

        return Response(query_data.data[0])



    def put(self, request, book_id):

        instance = Books.objects.filter(id=book_id)
        
        # Cleaning data


        clean_data = BooksSerializer(data=request.data, partial=True)

        if clean_data.is_valid(raise_exception=True):
            clean_data.save()
            return Response({"messege" : f"Book dengan id {book_id}, berhasil di update"}, status=status.HTTP_204_NO_CONTENT)

