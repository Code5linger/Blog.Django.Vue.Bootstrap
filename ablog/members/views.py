from django.shortcuts import render
from django.views import generic
from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from django.urls import reverse_lazy

# Create your views here.


class UserRegisterView(generic.CreateView):
    form_class = UserCreationForm
    template_name = 'registration/register.html'
    success_url = reverse_lazy('login')

# registration.html
