from django.shortcuts import render
from django.http import HttpResponse
from django.http import Http404

from inertia import render

# Create your views here.
def index(request):
    return render(request,"Index",
                  props={
                      "message": "This message was sent from Django via \
                      Inertia. If you're seeing this, then Inertia works!"
                      })


def about(request):
    return render(request, "About",
                  props={
                      "message": "This is the about page. Inertia routing works!"
                      })
