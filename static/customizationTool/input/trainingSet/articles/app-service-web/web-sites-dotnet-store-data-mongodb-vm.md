deletion:

deleted:

		* To create a Windows virtual machine and install MongoDB, see [Install MongoDB on a virtual machine running Windows Server in Azure][InstallMongoOnWindowsVM].
		* Alternatively, to create a Linux virtual machine and install MongoDB, see [Install MongoDB on a virtual machine running CentOS Linux in Azure][InstallMongoOnCentOSLinuxVM].

reason: (broken link)

deleted:

		## What's changed
		* For a guide to the change from Websites to App Service see: [Azure App Service and Its Impact on Existing Azure Services](http://go.microsoft.com/fwlink/?LinkId=529714)
		* For a guide to the change of the Azure portal to the Azure preview portal see: [Reference for navigating the preview portal](http://go.microsoft.com/fwlink/?LinkId=529715)


reason: (terminology: Azure App Service Web)

deleted:

		>[AZURE.NOTE] If you want to get started with Azure App Service before signing up for an Azure account, go to [Try App Service](http://go.microsoft.com/fwlink/?LinkId=523751), where you can immediately create a short-lived starter web app in App Service. No credit cards required; no commitments.

reason: (“Try it now”)

replacement:

deleted:

		## Publish to Azure App Service Web Apps
		
		In this section you will publish your changes to Azure App Service Web Apps.
		
		1. In Solution Explorer, right-click **MyTaskListApp** again and click **Publish**.
		2. Click **Publish**.
		
			You should now see your web app running in Azure App Service and accessing the MongoDB database in Azure Virtual Machines.

replaced by:

		<h2>Deploy the ASP.NET application to an Azure website</h2>
		
		In this section you will create a website and deploy the My Task List ASP.NET application using Git.
		
		<a id="createwebsite"></a> 
		###Create an Azure website###
		In this section you will create an Azure website.
		
		1. Open a web browser and browse to the [Azure Management Portal][AzurePortal]. Sign in with your Azure account. 
		2. At the bottom of the page, click **+New**, then **Website**, and finally **Quick Create**.
		3. Enter a unique prefix for the application's URL.
		4. Select a region.
		5. Click **Create Website**.
		
		![Create a new web site][WAWSCreateWebSite]
		
		6. Your website will be created quickly and will be listed in **Websites**.
		
		![WAWSDashboardMyTaskListApp][WAWSDashboardMyTaskListApp]
		
		<a id="deployapp"></a> 
		###Deploy the ASP.NET application to the website using Git
		In this section you will deploy the My Task List application using Git.
		
		1. Click your website name in **Websites**, then click **Dashboard**.  On the right side, under Quick Glance, click **Set up deployment from source control**.
		2. On the **Where is your source code?** page, choose **Local Git repository**, and the click the **Next** arrow. 
		3. The Git repository should be created quickly. Make note of the instructions on the resulting page as they will be used in the next section.
		
			![Git Repository is Ready][Image9]
		
		4. Under **Push my local files to Azure** there are instructions for pushing your code to Azure. The instructions will look similar to the following:
		
			![Push local files to Azure][Image10]
			
		5. If you do not have Git installed, install it using the **Get it here** link in step 1.
		6. Following the instructions in step 2, commit your local files.  
		7. Add the remote Azure repository and push your files to the Azure website by following the instructions in step 3.
		8. When the deployment has completed you will see the following confirmation:
		
			![Deployment Complete][Image11]
		
		9. Your Azure website is now available.  Check the **Dashboard** page for your site and the **Site URL** field to find the URL for your site. Following the procedures in this tutorial, your site would be available at this URL: http://mytasklistapp.chinacloudsites.cn.

reason: (the new Ibiza portal)

