from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, 'index.html')
def accueil(request):
    return render(request, 'chat/hearder.html')