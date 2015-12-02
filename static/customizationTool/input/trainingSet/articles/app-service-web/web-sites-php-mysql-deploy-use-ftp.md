deletion:

deleted:

		>[AZURE.NOTE] If you want to get started with Azure App Service before signing up for an account, go to [Try App Service](http://go.microsoft.com/fwlink/?LinkId=523751), where you can immediately create a short-lived starter web app in App Service. No credit cards required, no commitments. 

reason: (“Try it now”)

replacement:

deleted:

		1. Login to the [Azure Portal][management-portal].
		2. Click the **+ New** icon on the bottom left of the portal.
		
			![Create New Azure Web Site][new-website]
		
		3. Click **Web + Mobile**, then **Web app + MySQL**.
		
			![Custom Create a new Web Site][custom-create]
		
		4. Enter a valid name for your resource group.
		
		    ![Set resource group name][resource-group]
		
		5. Enter values for your new web app.
		
		     ![Create web app][new-web-app]
		
		6. Enter values for your new database, including agreeing to the legal terms.
		
			![Create new MySQL database][new-mysql-db]
			
		7. When the web app has been created, you will see the new resource group. Click the name of the web app to configure its settings.
		
			![Open web app][go-to-webapp]
		
		6. Scroll down until you find **Set deployment credentials**. 
		
			![Set deployment credentials][set-deployment-credentials]
		
		7. To enable FTP publishing, you must provide a user name and password. Save the credentials and make a note of the user name and password you create.
		
			![Create publishing credentials][portal-ftp-username-password]

replaced by:

		1. Login to the [Azure Portal][management-portal].
		2. Click the **+ New** icon on the bottom left of the portal.
		
			![Create New Azure Web Site][new-website]
		
		3. Click ** Website**, then **CUSTOM CREATE**.
		
			![Custom Create a new  Website][custom-create]
			
			Enter a value for **URL**, select **Create a New MySQL Database** from the **DATABASE** dropdown,  and select the data center for your  Website in the **REGION** dropdown. Click the arrow at the bottom of the dialog.
		
			![Fill in  Website details][ Website-details]
		
		4. Enter a value for the **NAME** of your database, select the data center for your database in the **REGION** dropdown, and check the box that indicates you agree with the legal terms. Click the checkmark at the bottom of the dialog.
		
			![Create new MySQL database][new-mysql-db]
		
			When the  Website has been created you will see the text **Creation of  Website ‘[SITENAME]’ completed successfully**. Now, you can enable FTP publishing.
		
		5. Click the name of the  Website displayed in the list of  Websites to open the  Website’s **QUICKSTART** dashboard.
		
			![Open  Website dashboard][go-to-dashboard]
		
		
		6. At the bottom of the **QUICKSTART** page, click **Reset deployment credentials**. 
		
			![Reset deployment credentials][reset-deployment-credentials]
		
		7. To enable FTP publishing, you must provide a user name and password. Make a note of the user name and password you create.
		
			![Create publishing credentials][portal-git-username-password]

reason: (the new Ibiza portal)

