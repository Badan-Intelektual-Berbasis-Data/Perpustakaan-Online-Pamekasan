from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserView

routers = DefaultRouter()

routers.register("user", UserView, basename="user")

urlpatterns = routers.urls