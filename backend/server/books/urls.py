from django.urls import path
from .views import (
    AuthorsView,
    BooksView,
    BookDetail,
    CategoriesView
)

urlpatterns = [
    path('', BooksView.as_view(), name="books_view"),
    path('<int:book_id>', BookDetail.as_view()),
    path('authors/', AuthorsView.as_view()),
    path('categories/', CategoriesView.as_view()),
]
