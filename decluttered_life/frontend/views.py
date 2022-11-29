from django.shortcuts import render

# Create your views here.
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html') #this frontend is inside template folder
# this will allow us to render the index template and react will take care of it and render things inside of the html

