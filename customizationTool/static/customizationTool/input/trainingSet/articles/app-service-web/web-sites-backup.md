deletion:

deleted:

		Note that Premium mode allows a greater number of daily backups to be performed over the Standard mode.

reason: (Premium mode)

deleted:

		>[AZURE.NOTE] If you want to get started with Azure App Service before signing up for an Azure account, go to [Try App Service](http://go.microsoft.com/fwlink/?LinkId=523751), where you can immediately create a short-lived starter web app in App Service. No credit cards required; no commitments.

reason: (“Try it now”)

deleted:

		## What's changed
		* For a guide to the change from Websites to App Service see: [Azure App Service and Its Impact on Existing Azure Services](http://go.microsoft.com/fwlink/?LinkId=529714)
		* For a guide to the change of the old portal to the new portal see: [Reference for navigating the preview portal](http://go.microsoft.com/fwlink/?LinkId=529715)

reason: (terminology: Azure App Service Web, the new Ibiza portal)

deleted:

		> [AZURE.NOTE] Although this article refers to web apps, it also applies to API apps and mobile apps.


reason: (terminology: Azure App Service Web)

replacement:

deleted:

		* The Backup and Restore feature requires an Azure storage account and container that must belong to the same subscription as the web app that you are going to back up. If you do not yet have a storage account, you can create one by clicking the **Storage Account** in the **Backups** blade of the [Azure preview portal](http://portal.azure.com), and then choosing the **Storage Account** and the **Container** from the **Destination** blade. For more information on Azure storage accounts, see the [links](#moreaboutstorage) at the end of this article.

replaced by:

		* The Backup and Restore feature requires an Azure storage account and container that must belong to the same subscription as the web app that you are going to back up. If you do not yet have a storage account, you can create one by clicking the **Storage** button (grid icon) in the left pane of the Azure Management Portal, and then choosing **New** in the command bar at the bottom. For more information on Azure storage accounts, see the [links](#moreaboutstorage) at the end of this article.

reason: (the new Ibiza portal)

deleted:

		1. In the Azure portal, choose your web app from the Web Apps blade. This will display the details of your web app in a new blade.
		2. Select **Settings** option. The **Settings** blade will be displayed allowing you to modify your web app.
			
			![Backups page][ChooseBackupsPage]

		3. Choose the **Backups** option in the **Settings** blade. The **Backups** blade will be displayed.
			
		4. From the **Backups** blade, choose your backup destination by selecting a **Storage Account** and **Container**. The storage account must belong to the same subscription as the web app that you are going to back up.
			
			![Choose storage account][ChooseStorageAccount]
			
		5. In the **Included databases** option in the **Backups** blade, select the databases that are connected to your web app (SQL Server or MySQL) that you want to back up. 
		
			> [AZURE.NOTE] 	For a database to appear in this list, its connection string must exist in the **Connection strings** section of the **Web app settings** blade in the portal.
			
		6. In the **Backups** blade, select the **Backup destination**. You must choose an existing storage account and container.
		7. In the command bar, click **Backup Now**.
			
			![BackUpNow button][BackUpNow]
			
			You will see a progress message during the backup process.

replaced by:

		1. In the Azure Management Portal for your website, choose the **Backups** tab.
			
			![Backups page][ChooseBackupsPage]
			
		2. Select the storage account to which you want to back up your website. The storage account must belong to the same subscription as the website that you are going to back up.
			
			![Choose storage account][ChooseStorageAccount]
			
		3. In the **Included Databases** option, select the databases that are connected to your website (SQL Server or MySQL) that you want to back up. 
			
			![Choose databases to include][IncludedDatabases]
		
			> [AZURE.NOTE] 	For a database to appear in this list, its connection string must exist in the **Connection Strings** section of the Configure tab in the portal.
			
		4. In the command bar, click **Backup Now**.
			
			![BackUpNow button][BackUpNow]
			
			You will see a progress message during the backup process:
			
			![Backup progress message][BackupProgress]

reason: (the new Ibiza portal)

deleted:

		1. On the **Backups** blade, set **Scheduled Backup** to ON.
			
			![Enable automated backups][SetAutomatedBackupOn]
			
		2. Select the storage account to which you want to back up your web app. The storage account must belong to the same subscription as the web app that you are going to back up.
			
			![Choose storage account][ChooseStorageAccount]
			
		3. In the **Frequency** box, specify how often you want automated backups to be made. 
			The number of days must be between 1 and 90, inclusive (from once a day to once every 90 days).
			
		4. Use the **Begin** option to specify a date and time when you want the automated backups to begin. 
			
			> [AZURE.NOTE] Azure stores backup times in UTC format, but displays them in accordance with the system time on the computer that you are using to display the portal.
			
		5. In the **Included Databases** section, select the databases that are connected to your web app (SQL Server or MySQL) that you want to back up. For a database to appear in the list, its connection string must exist in the **Connection strings** section of the **Web app settings** blade in the portal.
			
			> [AZURE.NOTE] If you choose to include one or more databases in the backup and have specified a Frequency of less than 7 days, you will be warned that frequent backups can increase your database costs.
			
		6. Additionally, set the **Retention (Days)** value to the number of days you wish to retain the backup.
		7. In the command bar, click the **Save** button to save your configuration changes (or choose **Discard** if you decide not to save them).
			
			![Save button][SaveIcon]

replaced by:

		1. On the Backups page, set **Automated Backup** to ON.
			
			![Enable automated backups][SetAutomatedBackupOn]
			
		2. Select the storage account to which you want to back up your website. The storage account must belong to the same subscription as the website that you are going to back up.
			
			![Choose storage account][ChooseStorageAccount]
			
		3. In the **Frequency** box, specify how often you want automated backups to be made. (During Preview, the number of days is the only time unit available.)
			
			![Choose backup frequency][Frequency]
			
			The number of days must be between 1 and 90, inclusive (from once a day to once every 90 days).
			
		4. Use the **Start Date** option to specify a date and time when you want the automated backups to begin. 
			
			![Choose start date][StartDate]
			
			Times are available in half-hour increments.
			
			![Choose start time][StartTime]
			
			> [AZURE.NOTE] Azure stores backup times in UTC format, but displays them in accordance with the system time on the computer that you are using to display the portal.
			
		5. In the **Included Databases** section, select the databases that are connected to your website (SQL Server or MySQL) that you want to back up. For a database to appear in the list, its connection string must exist in the **Connection Strings** section of the Configure tab in the portal.
			
			![Choose databases to include][IncludedDatabases]
			
			> [AZURE.NOTE] If you choose to include one or more databases in the backup and have specified a Frequency of less than 7 days, you will be warned that frequent backups can increase your database costs.
			
		6. In the command bar, click the **Save** button to save your configuration changes (or choose **Discard** if you decide not to save them).
			
			![Save button][SaveIcon]

reason: (the new Ibiza portal)

