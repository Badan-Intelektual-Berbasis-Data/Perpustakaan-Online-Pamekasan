
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenVerifyView,
    TokenRefreshView,
    TokenObtainPairView
)

urlpatterns = [
    path('api/books/', include('books.urls')),
    path('api/users/', include('users.urls')),
    path('api/loans/', include('loans.urls')),
    path('api/token/verify/', TokenVerifyView.as_view()),
    path('api/token/refresh/', TokenRefreshView.as_view()),
    path('api/token/auth/', TokenObtainPairView.as_view()),
]
