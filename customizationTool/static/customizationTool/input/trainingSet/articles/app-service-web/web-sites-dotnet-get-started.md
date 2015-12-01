deletion:

deleted:

		* [Activate MSDN subscriber benefits](/pricing/member-offers/msdn-benefits-details/?WT.mc_id=A261C142F). Your MSDN subscription gives you credits every month that you can use for paid Azure services.

reason: (MSDN subscriber)

deleted:

		If you want to get started with Azure App Service before you sign up for an Azure account, go to [Try App Service](http://go.microsoft.com/fwlink/?LinkId=523751). There, you can immediately create a short-lived starter web app in App Service—no credit card required, and no commitments.

reason: (“Try it now”)

deleted:

		In the following video, Scott Hanselman shows how easy it is to sign up for a free trial of Microsoft Azure. (Duration: 1:58)
		
		> [AZURE.VIDEO sign-up-for-microsoft-azure]

reason: (video)

deleted:

		4.  [Azure Application Insights](app-insights-overview.md) monitors your web app for availability, performance, and usage. Clear the **Add Application Insights to Project** check box if you don't want to try it.

reason: ({application insights})

deleted:

		* [How to choose or create a resource group](../azure-preview-portal-using-resource-groups.md)

reason: (the new Ibiza portal)

deleted:

		## What's changed
		* For a guide to the change from Websites to App Service, see [Azure App Service and existing Azure services](http://go.microsoft.com/fwlink/?LinkId=529714).
		* For a guide to the change from the Azure portal to the preview portal, see [Reference for navigating the Azure portal](http://go.microsoft.com/fwlink/?LinkId=529715).

reason: (terminology: Azure App Service Web, the new Ibiza portal)

replacement:

deleted:

		3. In the **Configure Microsoft Azure Web App Settings** dialog box, enter a **Web App name** that is unique in the *azurewebsites.net* domain. For example, you can name it MyExample with numbers to the right to make it unique, such as MyExample810. If a default web name is created for you, it will be unique and you can use that.
		
			If someone else has already used the name that you enter, you'll see a red exclamation mark to the right instead of a green check mark, and you'll need to enter a different name.
		
			Azure will use this name as the prefix for your application's URL. The complete URL will consist of this name plus *.azurewebsites.net* (as shown next to the **Web App name** text box). For example, if the name is `MyExample810`, the URL will be `MyExample810.azurewebsites.net`. The URL has to be unique.
		
		4. In the **App Service plan** drop-down, select **Create new App Service plan**.
		
			The [Next steps](#next-steps) section has links to information about App Service plans.
		
		5. Enter **MyExamplePlan**, or another name if you prefer, for the plan name.
		
		6. In the **Resource group** drop-down, select **Create new resource group**.
		
			The [Next steps](#next-steps) section has links to information about resource groups.

		5. Enter **MyExampleGroup**, or another name if you prefer, for the resource group name.

replaced by:

		6. In the **Sign in to Azure** dialog box, enter the ID and password of the account that you use to manage your Azure subscription.
			
			When you're signed in, the **Configure Azure Site Settings** dialog box asks you what resources you want to create.
		
			![Signed in to Azure](./media/web-sites-dotnet-get-started/configuresitesettings.png)
		
		3. Visual Studio provides a default **Site name**, which Azure will use as the prefix for your application's URL. If you prefer, enter a different site name.
		
			The complete URL will consist of what you enter here plus *chinacloudsites.cn* (as shown next to the **Site name** text box). For example, if the site name is `MyExample6442`, the URL will be `MyExample6442.chinacloudsites.cn`. The URL has to be unique. If someone else has already used the one you entered, you'll see a red exclamation mark to the right instead of a green check mark, and you'll need to enter a different site name.

reason: (the new Ibiza portal)

deleted:

		1. In **Solution Explorer**, right-click the project, and choose **Publish**.
		
			![Choose Publish](./media/web-sites-dotnet-get-started/choosepublish.png)
		
			In a few seconds, the **Publish Web** wizard appears. The wizard opens to a *publish profile* that has settings for deploying the web project to the new web app. If you wanted to deploy to a different web app, you could click the **Profile** tab to create a different profile. For this tutorial, you'll accept the settings that deploy to the web app that you created earlier.

replaced by:

		7. In the **Azure Websites Activity** window, click **Publish MyExample to this Web App now**.
		
			![Web app created](./media/web-sites-dotnet-get-started/GS13sitecreated.png)
		
			In a few seconds, the **Publish Web** wizard appears.
		
			Settings that Visual Studio needs to deploy your project to Azure have been saved in a *publish profile*. You can use the wizard to review and change those settings.

reason: (the new Ibiza portal)

deleted:

		1. In your browser, go to [https://portal.azure.com](https://portal.azure.com), and sign in with your Azure credentials.
		
		2. Click **Web Apps**, and then click the name of your web app.
		
			The **Web app** blade displays an overview of settings and usage statistics for your web app.
		
			![Web app blade](./media/web-sites-dotnet-get-started/portaldashboard.png)
		
			At this point, your web app hasn't had much traffic and may not show anything in the graph. If you browse to your application, refresh the page a few times, and then refresh the portal page, you'll see some statistics show up.
		
		3. Click **Settings** to see more options for configuring your web app.
		
			![Click Settings](./media/web-sites-dotnet-get-started/portaldashboard2.png)
		
			You see a list of types of settings.
		
			![](./media/web-sites-dotnet-get-started/portalconfigure1.png)

		4. Click **Application settings** to see an example of the kinds of settings that you can configure in the portal.
		
			For example, you can control the .NET version that's used for the web app, enable features such as [WebSockets](/blog/2013/11/14/introduction-to-websockets-on-windows-azure-web-sites/), and set [connection string values](/blog/2013/07/17/windows-azure-web-sites-how-application-strings-and-connection-strings-work/).
		
			![Portal web app configure tab](./media/web-sites-dotnet-get-started/portalconfigure2.png)

replaced by:

		1. In your browser, go to [https://manage.windowsazure.cn](https://manage.windowsazure.cn), and sign in with your Azure credentials.
			
			The portal displays a list of your Azure services.
		
		2. Click the name of your website.
		
			![Portal home page with new web site called out](./media/web-sites-dotnet-get-started-vs2013/portalhome.png)
		  
		3. Click the **Dashboard** tab.
		
			The **Dashboard** tab displays an overview of usage statistics and link for a number of commonly used site management functions. Under **Quick Glance** you'll also find a link to your application's home page.
		
			![Portal web site dashboard tab](./media/web-sites-dotnet-get-started-vs2013/portaldashboard.png)
		  
			At this point your site hasn't had much traffic and may not show anything in the graph. If you browse to your application, refresh the page a few times, and then refresh the portal **Dashboard** page, you'll see some statistics show up. You can click the **Monitor** tab for more details.
		
		4. Click the **Configure** tab.
		
			The [Configure](/documentation/articles/web-sites-configure//) tab enables you to control the .NET version used for the site, enable features such as [WebSockets](/blog/2013/11/14/introduction-to-websockets-on-windows-azure-web-sites/) and [diagnostic logging](/documentation/articles/web-sites-enable-diagnostic-log), set [connection string values](http://azure.microsoft.com/blog/2013/07/17/windows-azure-web-sites-how-application-strings-and-connection-strings-work/), and more. 
		
			![Portal web site configure tab](./media/web-sites-dotnet-get-started-vs2013/portalconfigure.png)
		  
		5. Click the **Scale** tab.
		
			For the paid tiers of the  Websites service, the [Scale](/documentation/articles/web-sites-scale) tab enables you to control the size and number of machines that service your web application in order to handle variations in traffic.
		
			You can scale manually or configure criteria or schedules for automatic scaling.
		
			![Portal website scale tab](./media/web-sites-dotnet-get-started-vs2013/portalscale.png)

reason: (the new Ibiza portal)

