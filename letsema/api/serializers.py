from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import User, MFI, Borrower, LoanOfficer

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email','first_name', 'last_name', 'phone_number', 'password', 'date_of_birth', 'address']
        extra_kwargs = {
            "password": {"write_only": True},
            "id":{'read_only':True}
                         }

    def create(self, validated_data):
        print(validated_data)
        email = validated_data.pop('email')
        password = validated_data.pop('password')
        user = User.objects.create_user(email=email, password=password, **validated_data )
        return user  

class BorrowerSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    
    class Meta:
        model = Borrower
        fields = '__all__' 

    def create(self, validated_data):

        user = UserSerializer()
        user_data = validated_data.pop('user')
        user_data['user_type'] = 'borrower'
        valid_user_data = user.create(user_data)

        validated_data['user'] = valid_user_data 
        borrower = Borrower.objects.create( **validated_data)
        return borrower

class LoanOfficerSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = LoanOfficer
        fields = '__all__'
    
    def create(self, validated_data):

        user = UserSerializer()
        user_data = validated_data.pop('user')
        user_data['user_type'] = 'Loan Officer'
        valid_user_data = user.create(user_data)

        validated_data['user'] = valid_user_data 
        borrower = LoanOfficer.objects.create( **validated_data)
        return borrower
        

class MFISerializer(serializers.ModelSerializer):
    class Meta:
        model = MFI
        fields = '__all__'


    
        