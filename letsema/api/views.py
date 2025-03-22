from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

class CreateUserView(generics.CreateAPIView):#CREATE A NEW USER  CreateAPIView
    queryset = User.objects.all()#all available users  tuples so that we can avoid duplicatio
    serializer_class = UserSerializer#format of the data that is to be expected
    permission_classes = [AllowAny]#any one can perform the task

class ListUserView(generics.ListAPIView):#List All USERs
    queryset = User.objects.all() #all available users  tuples 
    serializer_class = UserSerializer#format of the data that is to be expected
    permission_classes = [IsAuthenticated]#any one can perform the task