from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms
from personal_website.models import todo, CustomerDetails

class CreateUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username','email','password1','password2']

class TodoFOrm(forms.ModelForm):
    class Meta:
        model = todo
        fields = ['task']

class ContactForm(forms.ModelForm):


    firstname = forms.CharField(required=True) 
    lastname = forms.CharField(required=True)
    streetaddress = forms.CharField(required=True)
    streetaddress2 = forms.CharField(required=True)
    city = forms.CharField(required=True)
    stateprovince = forms.CharField(required=True)
    zipcode = forms.CharField(required=True)
    phonenumber = forms.CharField(required=True)
    email = forms.EmailField(required=True)
    
    twofullname1 = forms.CharField(required=False)
    twofullname2 = forms.CharField(required=False)
    twoaddress1 = forms.CharField(required=False)
    twoaddress2 = forms.CharField(required=False)
    twocontact1 = forms.CharField(required=False)
    twocontact2 = forms.CharField(required=False)

    hearchoices = (
        ('from social media', 'From social media'),
        ('recommended by someone', 'Recommended by someone'),
        ('just happened to find it', 'Just happened to find it'),
    )
    hearaboutus = forms.ChoiceField(widget=forms.Select, choices=hearchoices)

    CHOICES = (
        ('yes', 'Yes'),
        ('no', 'No'),
        ('maybe', 'Maybe'),
    )
    recommend = forms.ChoiceField(widget=forms.RadioSelect, choices=CHOICES, required=True)


    # Override feedback and suggestion fields to use Textarea widget
    feedback = forms.CharField(widget=forms.Textarea, required=False)
    suggestion = forms.CharField(widget=forms.Textarea, required=False)

    class Meta:
        model = CustomerDetails
        fields = ['firstname','lastname','streetaddress','streetaddress2','city','stateprovince','zipcode','phonenumber','email','hearaboutus','feedback','suggestion','recommend','twofullname1','twofullname2','twoaddress1','twoaddress2','twocontact1','twocontact2']