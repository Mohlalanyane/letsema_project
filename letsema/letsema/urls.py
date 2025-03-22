from django.contrib import admin
from django.urls import path, include
from api.views import CreateUserView,ListUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/users/", ListUserView.as_view(), name="list"),#list all users / TEST
    path("api/user/register/", CreateUserView.as_view(), name="register"),#create new user
    path("api/token/", TokenObtainPairView.as_view(), name="get_token"),#generates tokes
    path("api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),#refreshes a token
    path("api-auth/", include("rest_framework.urls")),#prebuilt urls
]
