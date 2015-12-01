deletion:

deleted:

		from the Azure Marketplace

reason: (website gallery and market place)

deleted:

		## What's changed
		* For a guide to the change from Websites to App Service see: [Azure App Service and Its Impact on Existing Azure Services](http://go.microsoft.com/fwlink/?LinkId=529714)
		* For a guide to the change of the old portal to the new portal see: [Reference for navigating the preview portal](http://go.microsoft.com/fwlink/?LinkId=529715)

reason: (terminology: Azure App Service Web, the new Ibiza portal)

deleted:

		>[AZURE.NOTE] If you want to get started with Azure App Service before signing up for an Azure account, go to [Try App Service](http://go.microsoft.com/fwlink/?LinkId=523751), where you can immediately create a short-lived starter web app in App Service. No credit cards required; no commitments.

reason: (“Try it now”)

replacement:

deleted:

		## Web App Creation on Portal
		
		The first step in creating your app is to create the web app via the [Azure Portal](https://portal.azure.com).
		
		1. Log into the Azure Portal and click the **NEW** button in the bottom left corner.
		2. Click **Web + Mobile** > **Azure Marketplace** > **Web Apps**.
		3. In the search box, type "python".
		4. In the search results, select **Django**, then click **Create**.
		5. Configure the new Django app, such as creating a new App Service plan and a new resource group for it. Then, click **Create**.
		6. Configure Git publishing for your newly created web app by following the instructions at [Continuous deployment using GIT in Azure App Service](web-sites-publish-source-control.md).

replaced by:

		## Web App Creation on Portal
		
		The first step in creating your app is to create the web site via the Azure Management Portal.  To do this, you will need to login to the portal and click the NEW button in the bottom left corner. A window will appear. Click **Quick Create**, enter a URL, and select **Create Web Site**.
		
		![](./media/web-sites-python-create-deploy-django-app/django-ws-003.png)
		
		The site will be quickly set up.  Next, you will add support for publishing via Git.  This can be done by choosing **Set up deployment from source control**.
		
		![](./media/web-sites-python-create-deploy-django-app/django-ws-004.png)
		
		From the **Set up deployment** dialog, scroll down and select the **Local Git** option. Click the right arrow to continue.
		
		![](./media/web-sites-python-create-deploy-django-app/django-ws-005.png)
		
		After setting up Git publishing, you will momentarily see a page informing you the repo is being created. When the repo is ready, you will be taken to the deployments tab. The deployments tab includes instructions on how to connect.  
		
		![](./media/web-sites-python-create-deploy-django-app/django-ws-006.png)

reason: (the new Ibiza portal)

deleted:

		the **Application Settings** blade of your web app in the Azure Portal

replaced by:

		the site configuration page

reason: (the new Ibiza portal)

deleted:

		the Application Settings blade of your web app in the Azure Portal

replaced by:

		the site configuration page

reason: (the new Ibiza portal)

deleted:

		the Application Settings blade of your web app in the Azure Portal

replaced by:

		the site configuration page

reason: (the new Ibiza portal)

