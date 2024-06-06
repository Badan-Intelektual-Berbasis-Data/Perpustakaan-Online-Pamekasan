from django.urls import path
from .views import (
    AuthorsView,
    BooksView
)

urlpatterns = [
    path('', BooksView.as_view(), name="books_view"),
    path('authors/', AuthorsView.as_view()),
]
