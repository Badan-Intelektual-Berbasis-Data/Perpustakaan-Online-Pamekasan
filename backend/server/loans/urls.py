from rest_framework.routers import DefaultRouter
from .views import LoanView

routers = DefaultRouter()
routers.register("loan", LoanView, basename="loan_view")


urlpatterns = routers.urls