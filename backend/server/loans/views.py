from django.db import transaction
from rest_framework.viewsets import ModelViewSet
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_404_NOT_FOUND,
    HTTP_400_BAD_REQUEST,
    HTTP_201_CREATED
)
from .models import Loan
from .serializers import LoanSerializer

from books.models import Book
from users.models import (
    User,
    Bookmark
)


class LoanView(ModelViewSet):
    queryset = Loan.objects.all()
    serializer_class = LoanSerializer
    permission_classes = [IsAuthenticated]


    def get_queryset(self):
        user =self.request.query_params.get("user")

        res = self.queryset

        if user:
            res = res.filter(user_id=user)


        if not res:
            raise NotFound()


        return res



    def create(self, req):

        data = req.data

        if not all(("user" in data, "book" in data)):
            return Response(status=HTTP_400_BAD_REQUEST)
        
        book = Book.objects.filter(pk=data["book"])
        user = User.objects.filter(pk=data["user"])

        if not book or not user:
            return Response(status=HTTP_404_NOT_FOUND)

        
        loan = Loan.objects.create(book=book[0], user=user[0])
        loan.save()

        with transaction.atomic():
            book = Book.objects.filter(title=data["book"])[0]
            book.status = True

            bookmark = Bookmark.objects.get_or_create(user=user[0])
            bookmark[0].books.add(book.id)

            return Response(status=HTTP_201_CREATED)


