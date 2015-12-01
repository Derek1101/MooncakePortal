#Test environment for landing page

This is the test environment for landing page. The page can be achieved on:

		http://firstwebapp.chinacloudsites.cn/landingpage/

Since it is a free websites from an Azure 1rmb trial subscription, the loading of the pages is quite slow. So it's better to have it run locally.

### Local setting

1. Again please install python 3.4. And and the path to python and the python scripts to the system path. In this case they would be:

		C:\Python34
		C:\Python34\Scripts

2. Install django with pip.
		
		pip install django

3. cd to the directory of the project and run the server:

		python manage.py runserver

	then, you will get the page on:
		
		http://localhost:8000/landingpage/

### Access to my local pages

If you don't want to run your own environment, follow the steps below, then you can access my local pages.

1. Add the following line to your host file.

		10.168.174.195		test.com

	the host file of your system can be achived here.
		
		C:\Windows\System32\drivers\etc
	
	Administrator permision is needed for editing this file, so you may run the notepad as Administrator and edit the file, or edit the file and save it somewhere else and copy it back to this location.

2. Now, you can access the pages on:

		http://test.com:8080/landingpage/

	If and only if I am running the server. Server will be running from 9:00am to 6:00pm at work days.

3. If you still think the environment is slow, you should run your own database locally. Some basic data is set in the project, hardcoded, so after your database is set, make the migrations and sync the database, you will get a running site.

4. Futher information can be found on the django official site.