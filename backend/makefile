APP_TEMPLATE=apps/core/skeletons/app_template

.PHONY: app

# Create a new Django app with a custom template, move it to the apps directory,
# and update the app name in apps.py
app:
	@read -p "Enter app name: " app_name; \
	python manage.py startapp $$app_name --template=$(APP_TEMPLATE); \
	mv $$app_name apps; \
	sed -i "s/name = 'app_name'/name = 'apps.$$app_name'/g" apps/$$app_name/apps.py; \
	echo "App $$app_name created with custom template.";
