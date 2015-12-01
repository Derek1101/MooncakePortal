deletion:

deleted:

		> [AZURE.NOTE] Although this article refers to web apps, it also applies to API apps and mobile apps.


reason: (terminology: Azure App Service Web)

deleted:

		* [WebJobs Debugging (video)](https://www.youtube.com/watch?v=ncQm9q5ZFZs&list=UU_SjTh-ZltPmTYzAybypB-g&index=1)

reason: (video)

deleted:

		## What's changed
		* For a guide to the change from Websites to App Service see: [Azure App Service and Its Impact on Existing Azure Services](http://go.microsoft.com/fwlink/?LinkId=529714)
		* For a guide to the change of the Azure portal to the Azure preview portal see: [Reference for navigating the preview portal](http://go.microsoft.com/fwlink/?LinkId=529715)

reason: (terminology: Azure App Service Web, the new Ibiza portal)

replacement:

deleted:

		preview portal

replaced by:

		Management Portal

reason: (the new Ibiza portal)

deleted:

		* In the Azure Management Portal, go to **Settings > Application settings** for your web app, and then scroll down to the **Debugging** section.

replaced by:

		* In the Azure Management Portal, go to the **Configure** tab for your website, and then scroll down to the **Site Diagnostics** section.

reason: (the new Ibiza portal)

deleted:

		3. In the Azure preview portal blade for your web app, click **Settings > Deployment credentials**, and then enter a new user name and password.
		
			![New FTP user name and password](./media/web-sites-dotnet-troubleshoot-visual-studio/tws-enterftpcredentials.png)
		
			**When you log in, you have to use the full user name with the web app name prefixed to it. For example, if you enter "myid" as a user name and the site is "myexample", you log in as "myexample\myid".
		
		5. In a new browser window, go to the URL that is shown under **FTP hostname** or **FTPS hostname** in the **Web App** portal blade for your web app. 

replaced by:

		3. In the management portal, click **Dashboard**, and then click **Reset your deployment credentials** in the **Quick Glance** section.
		
			![Reset FTP credentials link in Dashboard](./media/web-sites-dotnet-troubleshoot-visual-studio/tws-resetftpcredentials.png)
		
		4. Enter a new user name and password.
		
			![New FTP user name and password](./media/web-sites-dotnet-troubleshoot-visual-studio/tws-enterftpcredentials.png)
		
		5. In the management portal **Dashboard** tab press F5 to refresh the page, and then scroll down to where you see **Deployment / FTP User**. Notice that the user name has the web app name prefixed to it. **When you log in, you have to use this full user name with the web app name prefixed to it as shown here.**
		
		5. In a new browser window, go to the URL that is shown under **FTP Host Name** in the **Dashboard** tab of the management portal page for your web app. **FTP Host Name** is located near **Deployment / FTP User** in the **Quick Glance** section.

reason: (the new Ibiza portal)

