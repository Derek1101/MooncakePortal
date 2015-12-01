deletion:

deleted:

		>[AZURE.NOTE] If you want to get started with Azure App Service before signing up for an Azure account, go to [Try App Service](http://go.microsoft.com/fwlink/?LinkId=523751), where you can immediately create a short-lived starter web app in App Service. No credit cards required; no commitments.

reason: (“Try it now”)

deleted:

		## What's changed
		* For a guide to the change from Websites to App Service see: [Azure App Service and Its Impact on Existing Azure Services](http://go.microsoft.com/fwlink/?LinkId=529714)
		* For a guide to the change of the old portal to the new portal see: [Reference for navigating the portal](http://go.microsoft.com/fwlink/?LinkId=529715)

reason: (terminology: Azure App Service Web, the new Ibiza portal)

replacement:

deleted:

		1. Login to the [Azure Portal][management-portal].
		
		2. Click the **New** icon on the bottom left of the portal, then click **Data + Storage** > **Storage**. Give the storage account a unique name and create a new [resource group](../resource-group-overview.md) for it.
		
			![Create a new storage account][storage-quick-create]
			
			When the storage account has been created, the **Notifications** button will flash a green **SUCCESS** and the storage account's blade is open to show that it belongs to the new resource group you created.
		
		5. Click the **Settings** part in the storage account's blade. Take note of the account name and the primary key.
		
			![Select Manage Keys][storage-access-keys]
		
		7. Open **init.php** and replace `[YOUR_STORAGE_ACCOUNT_NAME]` and `[YOUR_STORAGE_ACCOUNT_KEY]` with the account name and key you took note of in the last step. Save the file.

replaced by:

		1. Login to the [Azure Management Portal][management-portal].
		
		2. Click the **+ New** icon on the bottom left of the portal.
		
			![Create New Azure  Website][new- Website]
		
		3. Click **Data Services**, **Storage**, then **Quick Create**.
		
			![Custom Create a new  Website][storage-quick-create]
			
			Enter a value for **URL** and select the data center for your  Website in the **REGION** dropdown. Click the **Create Storage Account** button at the bottom of the dialog.
		
			![Fill in  Website details][storage-quick-create-details]
		
			When the storage account has been created you will see the text **Creation of Storage Account '[NAME]' completed successfully**.
		
		4. Ensure the **Storage** tab is selected and then select the storage account you just created from the list.
		
		5. Click on **Manage Access Keys** from the app bar on the bottom.
		
			![Select Manage Keys][storage-manage-keys]
		
		6. Take note of the name of the storage account you created and of the primary key.
		
			![Select Manage Keys][storage-access-keys]
		
		7. Open **init.php** and replace `[YOUR_STORAGE_ACCOUNT_NAME]` and `[YOUR_STORAGE_ACCOUNT_KEY]` with the account name and key you took note of in the last step. Save the file.

reason: (the new Ibiza portal)

deleted:

		1. Login to the [Azure Portal][management-portal].
		
		2. Create an empty web app with the instructions at [How to: Create a web app Using the Azure Portal](../web-sites-create-deploy.md#createawebsiteportal). Be sure to create a new [App Service plan](azure-web-sites-web-hosting-plans-in-depth-overview) and select the resource group you created previously for the storage account.
		
			When the web app has been created, the **Notifications** button will flash a green **SUCCESS** and the web app's blade is open to show that it belongs to the new resource group you created.
		
		6. In the web app's blade, click **Set up continuous deployment**, and choose **Local Git Repository**. Click **OK**.
		
			![Set up Git publishing][setup-git-publishing]
		
		7. Before you can deploy your local Git repository to Azure, you must also set up deployment credentials. In the web app's blade, click **All Settings** > **Deployment credentials** to configure the credentials. Click **Save** when you're done.
		
			![Create publishing credentials][credentials]
		
			It will take a few seconds to set up your repository.
		
		8. Once the Git repository is ready, you now push your changes to it. You can find the repo URL by clicking the same deployment part in the web app's blade. 
		
			![Git deployment instructions returned after creating a repository for the web app.][git-instructions]
		
			Note the instructions, as these will be used in the next section to publish the application.

replaced by:

		1. Login to the [Azure Management Portal][management-portal].
		2. Click the **+ New** icon on the bottom left of the portal.
		
			![Create New Azure  Website][new- Website]
		
		3. Click **Compute**, ** Website**, then **Quick Create**.
		
			![Custom Create a new  Website][ Website-quick-create]
			
			Enter a value for **URL** and select the data center for your  Website in the **REGION** dropdown. Click the **Create New  Website** button at the bottom of the dialog.
		
			![Fill in  Website details][ Website-quick-create-details]
		
			When the  Website has been created you will see the text **Creation of  Website '[SITENAME]' completed successfully**. Now, you can enable Git publishing.
		
		5. Click the name of the  Website displayed in the list of  Websites to open the  Website's **QUICKSTART** dashboard.
		
			![Open  Website dashboard][go-to-dashboard]
		
		
		6. At the bottom right of the Quickstart page, select **Set up a deployment from source control**.
		
			![Set up Git publishing][setup-git-publishing]
		
		6. When asked "Where is your source code?" select **Local Git repository**, and then click the arrow.
		
			![where is your source code][where-is-code]
		
		7. To enable Git publishing, you must provide a user name and password. Make a note of the user name and password you create. (If you have set up a Git repository before, this step will be skipped.)
		
			![Create publishing credentials][credentials]
		
			It will take a few seconds to set up your repository.
		
		8. Once the Git repository is ready, you will be presented with instructions on the Git commands to use in order to setup a local repository and then push the files to Azure.
		
			![Git deployment instructions returned after creating a repository for the  Website.][git-instructions]
			Note the instructions, as these will be used in the next section to publish the application.

reason: (the new Ibiza portal)

