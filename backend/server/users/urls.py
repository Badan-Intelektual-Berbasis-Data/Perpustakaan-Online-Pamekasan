from rest_framework.routers import DefaultRouter
from .views import (
    UserView,
    BookmarkView
)

routers = DefaultRouter()

routers.register("user", UserView, basename="user")
routers.register("bookmark", BookmarkView, basename="bookmark")

urlpatterns = routers.urls