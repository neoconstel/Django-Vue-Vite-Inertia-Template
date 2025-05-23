# Django-Vue-Vite-Inertia-Template

## Choose a branch: basic or advanced (YOU ARE ON THE BASIC BRANCH)

This repository has two branches: basic and advanced. The 'basic' branch shows a basic working django+vueJs project using vite as a frontend build tool, and InertiaJs as an interface between the Vue frontend and the Django backend. The 'advanced' branch takes it a step further by showing a ready-to-use, scalable project structure for the Django backend and comes with core functionalities like custom User model, commands, and more to be included. At the frontend, it includes additional core packages/setups like pinia for state management, tailwindCSS, etc.

## Overall project structure (applicable to both branches)

The backend and frontend are completely separate, for easy organization of configuration files especially in the likelihood of future need to separate both into different repositories. This also keeps the workspace completely free of clutter as the project expands, especially if the workload is split into dedicated frontend/backend developers. The vueJs frontend uses the default vite project structure created using <npm create vue@latest> , with only a few configurations needed to make the inertiaJs interface functional. Also, the frontend uses its own base template (App.vue) to handle overall layouts/styles. This enables us to have all of our site layout at the frontend via App.vue (just like how Vue.Js works by default), instead of having to do it via base.html which is at the backend. The goal is to keep everything design-related at the frontend, as it should be. Also, note that although the frontend was intentionally created with a typescript configuration for scalability considerations, every configuration in vite.config.ts and main.ts applies the same in the respective javascript counterparts (i.e vite.config.js/main.js), if using a javascript-configured vite vue project.

## Core Technologies

1. Inertia - powered by the official [Inertia.js Django Adapter](https://github.com/inertiajs/inertia-django)
2. Django latest
3. Vite latest - powered by [Django Vite](https://github.com/MrBin99/django-vite)
4. Vue 3 latest
5. [WhiteNoise](https://whitenoise.evans.io/en/stable/index.html) - to serve static files in production (debug = False)

## How to install & run

1. Download the repository. You can either:

   Download the zip (without the git history),

   OR run:

   ```sh
   git clone git@github.com:neoconstel/Django-Vue-Vite-Inertia-Template.git
   ```

2. Install required Python packages.

   Navigate to the backend directory via terminal, then run:

   ```sh
   # first install pipenv if not already installed

   # linux and mac install
   pip3 install pipenv

   # windows install
   pip install pipenv


   # Create and activate a virtual environment
   pipenv shell

   # Install required Python packages
   pipenv install
   ```

3. Install required Node.js packages.

   Navigate to the frontend directory via terminal, then run:

   ```sh
   npm install
   ```

4. Run the Vite dev server:

   ```sh
   npm run dev
   ```

5. Run Django's default migrations:

   ```sh
   python manage.py migrate
   ```

   Skip number 6 if you're using the template from the **_basic_** branch (although in a real project you must use a .env file to store your project's secret key, instead of leaving it in settings.py)

6. Setup and configure a **_.env_** file (advanced branch) in the backend directory. It should look like this (any random key will do):

   ```sh
   # django project keys
   SECRET_KEY=Zsdggsgjhfghhguhpwhepr982jh8j28qj8jgmgomg2y27hhsaijjiriaqpwqcvrtr
   ```

7. Run the Django dev server (in a separate terminal):

   ```sh
   python manage.py runserver
   ```

## How to build for production

1. Set `DEBUG=False` in [settings.py](./inertia_django_vite_vue_minimal/settings.py).

   ```py
   # In settings.py
   ...
   DEBUG=False
   ...
   ```

2. Build the static assets (javascript, css, icons, etc) for production:

   ```sh
   npm run build
   ```

3. Run `collectstatic`:

   ```sh
   # first delete existing staticfiles (optional but recommended)
   rm -rf staticfiles/

   # collect all static files into staticfiles directory
   python manage.py collectstatic
   ```

4. Run the Django server:

   ```sh
   python manage.py runserver
   ```

## Guide on using this template for a new project

These are the files you will need to change in order to get inertiaJs setup and
ready to use when adapting this template for any project:

DJANGO:

- install the required Django packages
- setup and configure the base template (base.html) where inertiaJs will be injected during render
- configure settings.py (third-party apps, middleware, static url, templates dirs, staticfiles_dirs, inertia template, etc)
- views.py: setup the inertia views
- urls.py (app): setup the urlpatterns pointing to inertia views
- urls.py (project): include app's urls

VITE:

- install the required Node.js packages
- configure main.ts to use inertiaJs (this will make main.ts to be the entry point, no longer index.html. Hence index.html is no longer needed and can be deleted)
- setup .vue pages (views) with paths matching the resolve path of createInertiaApp
- because we've configured createInertiaApp in main.ts to use a template (App.vue) for all pages, setup App.vue as a page template. This enables us to have all our site layout at the frontend via App.vue, instead of having to do it via base.html which is at the backend.
- configure vite.config.ts to point to the location of main.ts and also set a few other important configurations.
- include all relevant assets (e.g images) in their respective directories.
