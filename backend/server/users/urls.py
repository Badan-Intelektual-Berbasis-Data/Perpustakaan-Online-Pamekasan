from rest_framework.routers import DefaultRouter
from .views import (
    UserView,
    BookmarkView,
    GetCsrfView
)

routers = DefaultRouter()

routers.register("user", UserView, basename="user")
routers.register("bookmark", BookmarkView, basename="bookmark")
routers.register("get_csrf", GetCsrfView, basename="get_csrf")

urlpatterns = routers.urls