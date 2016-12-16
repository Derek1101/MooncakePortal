# Mooncake Content Team Portal

This is the Mooncake Content Team Portal. The page can be achieved on:

		http://acncontentteam.azurewebsites.net/

The site includes the UT system for the Content Team, ACN Documentation Landing Page Generator.

### Local setting

1. Again please install python 3.4. And and the path to python and the python scripts to the system path. In this case they would be:

		C:\Python34
		C:\Python34\Scripts

2. Install django with pip.
		
		pip install django

3. cd to the directory of the project and run the server:

		python manage.py runserver

	then, you will get the page on:
		
		http://localhost:8000/

### Access to my local site

If you don't want to run your own environment, follow the steps below, then you can access my local pages.

1. Add the following line to your host file.

		10.168.176.1		test.com

	the host file of your system can be achived here.
		
		C:\Windows\System32\drivers\etc
	
	Administrator permision is needed for editing this file, so you may run the notepad as Administrator and edit the file, or edit the file and save it somewhere else and copy it back to this location.

2. Now, you can access the pages on:

		http://test.com:8080/

4. Futher information can be found on the django official site.

Note: My local site will be available only if the Azure site is down.