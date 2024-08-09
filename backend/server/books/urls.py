from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import (
    AuthorsView,
    DisplayView,
    DetailView,
    CategoriesView,
    PublisherView,
    LanguangeView,
    GenreView
)


routers = DefaultRouter()
routers.register("book", DisplayView, basename="book_view")
routers.register("genre", GenreView, basename="genre_view")
routers.register("detail", DetailView, basename="detail_view")
routers.register("author", AuthorsView, basename="authors_view")
routers.register("category", CategoriesView, basename="categories_view")
routers.register("publisher", PublisherView, basename="publishers_view")
routers.register("languange", LanguangeView, basename="languanges_view")

urlpatterns = routers.urls
