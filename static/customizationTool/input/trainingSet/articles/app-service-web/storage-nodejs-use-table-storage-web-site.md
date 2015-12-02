deletion:

deleted:

		>[AZURE.NOTE] If you want to get started with Azure App Service before signing up for an Azure account, go to [Try App Service](http://go.microsoft.com/fwlink/?LinkId=523751), where you can immediately create a short-lived starter web app in App Service. No credit cards required; no commitments.

reason: (“Try it now”)

deleted:

		## What's changed
		* For a guide to the change from Websites to App Service see: [Azure App Service and Its Impact on Existing Azure Services](http://go.microsoft.com/fwlink/?LinkId=529714)
		* For a guide to the change of the Azure portal to the Azure preview portal see: [Reference for navigating the preview portal](http://go.microsoft.com/fwlink/?LinkId=529715)

reason: (terminology: Azure App Service Web, the new Ibiza portal)

replacement:

deleted:

		1.  Log into the [Azure Portal](https://portal.azure.com).

		2. Click the **New** icon on the bottom left of the portal, then click **Data + Storage** > **Storage**. Give the storage account a unique name and create a new [resource group](../resource-group-overview.md) for it.

  			![New Button](./media/storage-nodejs-use-table-storage-web-site/configure-storage.png)

			When the storage account has been created, the **Notifications** button will flash a green **SUCCESS** and the storage account's blade is open to show that it belongs to the new resource group you created.

		5. In the storage account's blade, click **Settings** > **Keys**. Copy the primary access key to the clipboard.

    		![Access key][portal-storage-access-keys]

replaced by:

		1. Open your web browser and go to the [Azure Management Portal]. If prompted, login with your Azure subscription information.
		
		2. At the bottom of the portal, click **+ NEW** and then select **Storage Account**.
		
			![+new][portal-new]
		
			![storage account][portal-storage-account]
		
		3. Select **Quick Create**, and then enter the URL and Region/Affinity for this storage account. Since this is a tutorial and does not need to be replicated globally, uncheck **Enable Geo-Replication**. Finally, click "Create Storage Account".
		
			![quick create][portal-quick-create-storage]
		
			Make note of the URL you enter, as this will be referenced as the account name by later steps.
		
		4. Once the storage account has been created, click **Manage Keys** at the bottom of the page. This will display the primary and secondary access keys for this storage account. Copy and save the primary access key, then click the checkmark.
		
			![access keys][portal-storage-access-keys]

reason: (the new Ibiza portal)

deleted:

		### Set environment variables
		
		In this step, you will add environment variables to your web app configuration on Azure.
		From the command line, enter the following:
		
			azure site appsetting add
				STORAGE_NAME=<storage account name>;STORAGE_KEY=<storage access key>;PARTITION_KEY=mytasks;TABLE_NAME=tasks
		
		
		Replace **<storage account name>** with the name of the storage account you created earlier, and replace **<storage access key>** with the primary access key for your storage account. (Use the same values as the config.json file that you created earlier.)
		
		Alternatively, you can set environment variables in the [Azure Portal](https://portal.azure.com):
		
		1.  Open the web app's blade by clicking **Browse** > **Web Apps** > your web app name.
		
		1.  In your web app's blade, click **All Settings** > **Application Settings**.
		
  			<!-- ![Top Menu](./media/storage-nodejs-use-table-storage-web-site/PollsCommonWebSiteTopMenu.png) -->
		
		1.  Scroll down to the **App settings** section and add the key/value pairs.
		
  			![App Settings](./media/storage-nodejs-use-table-storage-web-site/storage-tasks-appsettings.png)

		1. Click **SAVE**.

replaced by:

		### Switch to an environment variable
		
		Earlier we implemented code that looks for a environment variables or loads the value from the **config.json** file. In the following steps you will create key/value pairs in your website configuration that the application real access through an environment variable.
		
		1. From the Management Portal, click **Websites** and then select your website.
		
			![Open website dashboard][go-to-dashboard]
		
		2. Click **CONFIGURE** and then find the **app settings** section of the page. 
		
			![configure link][web-configure]
		
		3. In the **app settings** section, enter **STORAGE_NAME** in the **KEY** field, and the name of your storage account in the **VALUE** field. Click the checkmark to move to the next field. Repeat this process for the following keys and values:
		
			* **STORAGE_KEY** - the access key for your storage account
			
			* **PARTITION_KEY** - 'mytasks'
		
			* **TABLE_NAME** - 'tasks'
		
			![app settings][app-settings]
		
		4. Finally, click the **SAVE** icon at the bottom of the page to commit this change to the run-time environment.
		
			![app settings save][app-settings-save]
		
		5. From the command-line, change directories to the **tasklist** directory and enter the following command to remove the **config.json** file:
		
				git rm config.json
				git commit -m "Removing config file"
		
		6. Perform the following command to deploy the changes to Azure:
		
				git push azure master
		
		Once the changes have been deployed to Azure, your web application should continue to work as it is now reading the connection string from the **app settings** entry. To verify this, change the value for the **STORAGE_KEY** entry in **app settings** to an invalid value. Once you have saved this value, the website should fail due to the invalid storage access key setting.

reason: (the new Ibiza portal)

