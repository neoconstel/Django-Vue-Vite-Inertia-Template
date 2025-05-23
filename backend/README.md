# Simplified setup tailored for the backend

## Initial Setup

### Set up the environment

First create a .env file in the backend base directory with these properties:

- SECRET_KEY

Then run these commands (ensure that pipenv is already installed):

> pipenv shell

> pipenv install

### Initialize the database

> python manage.py migrate

> python manage.py createsuperuser

### Run the server

> python manage.py runserver

---

### Create a new app:

> make app

A prompt will allow you put the app name, then an app will be created using the
app template from the project folder.
