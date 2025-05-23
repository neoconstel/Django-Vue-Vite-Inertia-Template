from django.urls import path
from . import views

urlpatterns = [
    # Add your URL patterns here
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
]