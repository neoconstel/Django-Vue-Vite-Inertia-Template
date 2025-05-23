from django.urls import path

from . import views

# set app_name here for name-spacing the urls
app_name = 'home'

urlpatterns = [
    path("", views.index, name="index"),
    path("about", views.about, name="about"),
    # path('/', views.ClassView.as_view(), name='example_list'),
]
