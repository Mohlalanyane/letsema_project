from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin, BaseUserManager

from uuid import uuid4

class UserManager(BaseUserManager):

    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError()
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self, email, password):
        user = self.create_user(email= email, password=password)
        user.is_superuser = True
        user.is_staff = True
        user.save()
        return user

class User(AbstractUser, PermissionsMixin):
    class UserTypeChoices(models.TextChoices):
        LOAN_OFFICER = 'Loan Officer'
        BORROWER     = 'Borrower'
        ADMIN        = 'Admin'

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    username = models.CharField(max_length=50, null=True, blank=True)
    created_at = models.DateField(auto_now_add=True)
    email = models.EmailField(unique=True)
    user_type = models.CharField(max_length=20, choices=UserTypeChoices.choices, default=UserTypeChoices.BORROWER )
    phone_number = models.CharField(max_length=15, null=True, blank=True)
    is_staff = models.BooleanField(default=False)
    date_of_birth = models.DateField( null=True, blank=True)
    address = models.TextField( null=True, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = UserManager()

    def __str__(self):
        return self.email
    
class LoanOfficer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='loan_officer_profile')
    
    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name} "
    
class Borrower(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='borrower_profile')
    employment_status = models.CharField(max_length=50)
    monthly_income = models.DecimalField(max_digits=10, decimal_places=2)
    
    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"

class MFI(models.Model):
    mfi_name = models.CharField(max_length=100)
    mfi_address = models.TextField()
    license_number = models.CharField(max_length=50)
    date_registered = models.DateField(auto_now_add=True)

    loanOfficer = models.ForeignKey(LoanOfficer, on_delete=models.CASCADE, related_name='loan_officer_profile')
    
    def __str__(self):
        return self.mfi_name
    
