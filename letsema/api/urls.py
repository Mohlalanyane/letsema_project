from django.urls import path
from . import views

urlpatterns = [
    path('loanOfficers/', views.LoanOfficerListCreateAPIView.as_view()),
    path('mfi/', views.MFIListCreateAPIView.as_view()),
    path('borrower/', views.BorrowerListCreateAPIView.as_view()),
]