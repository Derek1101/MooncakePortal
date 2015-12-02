replacement:

deleted:

		## Create a web app in the Azure preview portal
		
		The following steps will guide you through creating a web app in the Azure preview portal.
		
		1. Log in to the [Azure preview portal](https://portal.azure.com).
		
		2. Click **NEW** at the top left of the portal.
		
		3. Click **Web Apps > Web App**.
		
			![Azure new web app](./media/web-sites-create-web-app-using-vscode/09-azure-newwebapp.png)
		
		4. Enter a value for **Name**, such as **SampleWebAppDemo**. Note that this name needs to be unique, and the portal will enforce that when you attempt to enter the name. Therefore, if you select a enter a different value, you'll need to substitute that value for each occurrence of **SampleWebAppDemo** that you see in this tutorial. 
		
		5. Select an existing **App Service Plan** or create a new one. If you create a new plan, select the pricing tier, location, and other options. For more information on App Service plans, see the article, [Azure App Service plans in-depth overview](../app-service/azure-web-sites-web-hosting-plans-in-depth-overview.md).
		
			![Azure new web app blade](./media/web-sites-create-web-app-using-vscode/10-azure-newappblade.png)
		
		6. Click **Create**.
		
			![web app blade](./media/web-sites-create-web-app-using-vscode/11-azure-webappblade.png)

		## Enable Git publishing for the new web app
		
		Git is a distributed version control system that you can use to deploy your Azure App Service web app. You'll store the code you write for your web app in a local Git repository, and you'll deploy your code to Azure by pushing to a remote repository.   
		
		1. Log into the [Azure preview portal](https://portal.azure.com).
		
		2. Click **Browse**.
		
		3. Click **Web Apps** to view a list of the web apps associated with your Azure subscription.
		
		4. Select the web app you created in this tutorial.
		
		5. In the web app blade, scroll down to locate the **Deployment** section, and click **Set up continuous deployment**. 
		
			![Azure web app host](./media/web-sites-create-web-app-using-vscode/14-azure-deployment.png)
		
		6. Click **Choose Source > Local Git Repository**.
		
		7. Click **OK**.
		
			![Azure Local Git Respository](./media/web-sites-create-web-app-using-vscode/15-azure-localrepository.png)
		
		8. If you have not previously set up deployment credentials for publishing a web app or other App Service app, set them up now:
		
			* Click **Settings** > **Deployment credentials**. The **Set deployment credentials** blade will be displayed.
		
			* Create a user name and password.  You'll need this password later when setting up Git.
		
			* Click **Save**.

		9. In your web app's blade, click **Settings > Properties**. The URL of the remote Git repository that you'll deploy to is shown under **GIT URL**.
		
		10. Copy the **GIT URL** value for later use in the tutorial.
		
			![Azure Git URL](./media/web-sites-create-web-app-using-vscode/17-azure-giturl.png)

replaced by:

		## Create a web app in the Azure Management Portal
		
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

		* In the Azure preview portal, locate the web app blade for your web app, and click **Browse** to view your app

replaced by:

		* In the Azure Management Portal, locate the web app blade for your web app, and click **Browse** to view your app

reason: (the new Ibiza portal)

