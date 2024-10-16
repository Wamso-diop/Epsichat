# nom_de_l_application/urls.py
from django.urls import path
from .views import *

urlpatterns = [
    path('', accueil, name='accueil'),
]
