from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework import generics
from .serializers import UserSerializer, LoanOfficerSerializer, MFISerializer, BorrowerSerializer
from .models import User, MFI, Borrower, LoanOfficer
from rest_framework.permissions import IsAuthenticated, AllowAny

User = get_user_model()

class CreateUserView(generics.CreateAPIView):#CREATE A NEW USER  CreateAPIView
    queryset = User.objects.all()#all available users  tuples so that we can avoid duplicatio
    serializer_class = UserSerializer#format of the data that is to be expected
    permission_classes = [AllowAny]#any one can perform the task

class ListUserView(generics.ListAPIView):#List All USERs
    queryset = User.objects.all() #all available users  tuples 
    serializer_class = UserSerializer#format of the data that is to be expected
    permission_classes = [AllowAny]#any one can perform the task

class LoanOfficerListCreateAPIView(generics.ListCreateAPIView):
    queryset = LoanOfficer.objects.all()
    serializer_class = LoanOfficerSerializer
    permission_classes = [AllowAny]

class MFIListCreateAPIView(generics.ListCreateAPIView):
    queryset = MFI.objects.all()
    serializer_class = MFISerializer
    permission_classes = [AllowAny]

class BorrowerListCreateAPIView(generics.ListCreateAPIView):
    queryset = Borrower.objects.all()
    serializer_class = BorrowerSerializer
    permission_classes = [AllowAny]