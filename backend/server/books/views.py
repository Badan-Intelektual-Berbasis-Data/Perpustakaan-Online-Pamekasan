# from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from .models import (
    Author,
    Book
)
from .serializers import (
    AuthorSerializer,
    BooksSerializer
)


class AuthorsView(GenericAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

    def get(self, _):

        query_data = AuthorSerializer(Author.objects.all(), many=True)

        return Response(query_data.data)


    def post(self, req):

        data = AuthorSerializer(data=req.POST)

        if data.is_valid(raise_exception=True):

            data.save()

            return Response({'messege' : 'Pengarang baru telah ditambahkan'})


class BooksView(GenericAPIView):
    queryset = Book.objects.all()
    serializer_class = BooksSerializer


    def post(self, req):

        data = BooksSerializer(data=req.POST)

        if data.is_valid(raise_exception=True):

            data.save()
            
            return Response({'messege' : 'Buku baru telah ditambahkan'})
        

    def get(self, _):
        query_data = BooksSerializer(Book.objects.all().order_by('title'), many=True)

        return Response(query_data.data)
    

