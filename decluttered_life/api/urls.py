from django.urls import path
from .views import main

urlpatterns = [
    path('', main, name='home'),
    path('home', main, name='home')
]