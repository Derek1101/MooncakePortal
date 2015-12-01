deletion:

deleted:

		>[AZURE.NOTE] If you want to get started with Azure App Service before signing up for an Azure account, go to [Try App Service](http://go.microsoft.com/fwlink/?LinkId=523751), where you can immediately create a short-lived starter web app in App Service. No credit cards required; no commitments.

reason: (“Try it now”)

deleted:

		## What's changed
		* For a guide to the change from Websites to App Service see: [Azure App Service and Its Impact on Existing Azure Services](http://go.microsoft.com/fwlink/?LinkId=529714)
		* For a guide to the change of the old portal to the new portal see: [Reference for navigating the preview portal](http://go.microsoft.com/fwlink/?LinkId=529715)

reason: (terminology: Azure App Service Web, the new Ibiza portal)

replacement:

deleted:

		1. Login to the [Azure Portal][management-portal].
		2. Click the **New** icon.
		
		3. Click **Web + Mobile**, then **Azure Marketplace**. 
		
		4. Click **Web Apps**, then **Web app + MySQL**. Then, click **Create**.
		
		4. Enter a valid name for your resource group.
		
		    ![Set resource group name][resource-group]
		
		5. Enter values for your new web app.
		
		    ![Create web app][new-web-app]
		
		6. Enter values for your new database, including agreeing to the legal terms.
		
			![Create new MySQL database][new-mysql-db]
		
		7. When the web app has been created, you will see the new resource group. Click the name of the web app to configure its settings.
		
		7. Click **Set up continuous deployment**.
		
			![Set up Git publishing][setup-publishing]
		
		8. Select **Local Git Repository** for the source.
		
		    ![Set up Git repository][setup-repository]
		
		
		9. To enable Git publishing, you must provide a user name and password. Make a note of the user name and password you create. (If you have set up a Git repository before, this step will be skipped.)
		
			![Create publishing credentials][credentials]

replaced by:

		1. Login to the [Azure Management Portal][management-portal].
		2. Click the **New** icon on the bottom left of the portal.
		
			![Create New Azure  Website][new- Website]
		
		3. Click ** Website**, then **Custom Create**.
		
			![Custom Create a new  Website][custom-create]
			
			Enter a value for **URL**, select **Create a New MySQL Database** from the **Database** dropdown,  and select the data center for your  Website in the **Region** dropdown. Click the arrow at the bottom of the dialog.
		
			![Fill in  Website details][ Website-details]
		
		4. Enter a value for the **Name** of your database, select the data center for your database in the **Region** dropdown, and check the box that indicates you agree with the legal terms. Click the checkmark at the bottom of the dialog.
		
			![Create new MySQL database][new-mysql-db]
		
			When the  Website has been created you will see the text **Creation of  Website "[SITENAME]" completed successfully**. Now, you can enable Git publishing.
		
		6. Click the name of the  Website displayed in the list of  Websites to open the  Website's **QuickStart** dashboard.
		
			![Open  Website dashboard][go-to-dashboard]
		
		
		7. At the bottom of the **QuickStart** page, click **Set up Git publishing**. 
		
			![Set up Git publishing][setup-git-publishing]
		
		8. To enable Git publishing, you must provide a user name and password. Make a note of the user name and password you create. (If you have set up a Git repository before, this step will be skipped.)
		
			![Create publishing credentials][credentials]
		
			It will take a few seconds to set up your repository.
		
		9. When your repository is ready, you will see instructions for pushing your application files to the repository. Make note of these instructions - they will be needed later.
		
			![Git instructions][git-instructions]

reason: (the new Ibiza portal)

