deletion:

deleted:

		[activate your MSDN subscriber benefits][] or

reason: (MSDN subscriber)

deleted:

		The Azure preview portal is a web interface that you can use to manage Azure resources.

reason: (the new Ibiza portal)

deleted:

		1. Use a template from the Azure Marketplace.
		
			The Azure Marketplace includes templates that automatically create and configure Java web apps with Tomcat or Jetty web containers. The web containers that the templates set up are configurable. For more information, see the [Use a Java template from the Azure Marketplace](#marketplace) section of this tutorial.

reason: (website gallery and market place)

deleted:

		> If you want to get started with Azure App Service before you sign up for an Azure account, go to [Try App Service][]. There, you can immediately create a short-lived starter web app in App Service—no credit card required, and no commitments.

reason: (“Try it now”)

deleted:

		## <a name="marketplace"></a> Use a Java template from the Azure Marketplace
		
		This section shows how to use the Azure Marketplace to create a Java web app.  The same general flow can also be used to create a Java-based mobile or API app.  
		
		1. Sign in to the [Azure preview portal](https://portal.azure.com/).
		
		2. Click **New > Marketplace**.
		
			![](./media/web-sites-java-get-started/newmarketplace.png)
		
		3. Click **Web + Mobile**.
		
			You might have to scroll left to see the **Marketplace** blade where you can select **Web + Mobile**.
		
		4. In the search text box, enter the name of a Java application server, such as **Apache Tomcat** or **Jetty**, and then press Enter.
		
		5. In the search results, click the Java application server.
		
			![](./media/web-sites-java-get-started/webmobilejetty.png)
		
		6. In the first **Apache Tomcat** or **Jetty** blade, click **Create**.
		
			![](./media/web-sites-java-get-started/jettyblade.png)
		
		7. In the next **Apache Tomcat** or **Jetty** blade, enter a name for the web app in the **Web app** box.
		
			This name must be unique in the azurewebsites.net domain because the URL of the web app will be {name}.azurewebsites.net. If the name you enter isn't unique, a red exclamation mark appears in the text box.
		
		8. Select a **Resource Group** or create a new one.
		
			For more information about resource groups, see [Using the Azure Preview Portal to manage your Azure resources](../resource-group-portal.md).
		
		9. Select an **App Service plan/Location** or create a new one.
		
			For more information about App Service plans, see [Azure App Service plans overview](../azure-web-sites-web-hosting-plans-in-depth-overview.md)
		
		10. Click **Create**.
		
			![](./media/web-sites-java-get-started/jettyportalcreate2.png)
		
			In a short time, typically less than a minute, Azure finishes creating the new web app.
		
		11. Click **Web apps > {your new web app}**.
		
		12. Click the **URL** to browse to the new site.
		
			![](./media/web-sites-java-get-started/jettyurl.png)
		
			Tomcat ships with a default set of pages so if you chose Tomcat, you see a page similar to the following example.
		
			![Web app using Apache Tomcat](./media/web-sites-java-get-started/tomcat.png)
		
			If you chose Jetty, you see a page similar to the following example. Jetty doesn’t have a default page set, so the same JSP that is used for an empty Java site is reused here.
		
			![Web app using Jetty](./media/web-sites-java-get-started/jetty.png)
		
		Now that you've created the web app with an app container, see the [Next steps](#next-steps) section for information about how to  upload your application to the web app.

reason: (website gallery and market place)

replacement:

deleted:

		## <a name="portal"></a> Create and configure a Java web app
		
		This section shows how to create a web app and configure it for Java using the **Application settings** blade of the portal.
		
		1. Sign in to the [Azure preview portal](https://portal.azure.com/).
		
		2. Click **New > Web + Mobile > Web App**.
		
			![](./media/web-sites-java-get-started/newwebapp.png)
		
		4. Enter a name for the web app in the **Web app** box.
		
			This name must be unique in the azurewebsites.net domain because the URL of the web app will be {name}.azurewebsites.net. If the name you enter isn't unique, a red exclamation mark appears in the text box.
		
		5. Select a **Resource Group** or create a new one.
		
			For more information about resource groups, see [Using the Azure Preview Portal to manage your Azure resources](../resource-group-portal.md).
		
		6. Select an **App Service plan/Location** or create a new one.
		
			For more information about App Service plans, see [Azure App Service plans overview](../azure-web-sites-web-hosting-plans-in-depth-overview.md)
		
		7. Click **Create**.
		
			![](./media/web-sites-java-get-started/newwebapp2.png)
		 
		8. When the web app has been created, click **Web Apps > {your web app}**.
		 
			![](./media/web-sites-java-get-started/selectwebapp.png)

		9. In the **Web app** blade, click **Settings**.
		
		10. Click **Application settings**.
		
		11. Choose the desired **Java version**. 
		
		12. Choose the desired **Java minor version**.  If you select **Newest**, your app will use the newest minor version that is available in App Service for that Java major version.
		
		12. Choose the desired **Web container**. If you select a container name that starts with **Newest**, your app will be kept at the latest version of that web container major version that is available in App Service. 
		
			![](./media/web-sites-java-get-started/versions.png)
		
		13. Click **Save**.
		
			Within a few moments, your web app will become Java-based and configured to use the web container you selected.
		
		14. Click **Web apps > {your new web app}**.
		
		15. Click the **URL** to browse to the new site.
		
			The web page confirms that you have created a Java-based web app.

replaced by:

		## Create a Java web app by using the Azure configuration UI
		
		This information shows how to use the Azure configuration UI to select a Java application container, either Apache Tomcat or Jetty, for your web app.
		
		1. Log in to the Windows Azure Management Portal.
		2. Click **New**, click **Compute**, click **Website**, and then click **Quick Create**.
		3. Specify the URL name.
		4. Select a region. For example, **China East**.
		5. Click **Complete**. Within a few moments, your website will be created. To view the website, within the Azure Management Portal, in the **Websites** view, wait for the status to show as **Running** and then click the URL for the website.
		6. Still within the Azure Management Portal, in the **Websites** view, click the name of your website to open the 
		dashboard.
		7. Click **Configure**.
		8. In the **General** section, enable **Java** by clicking the available version.
		9. The options for the web container are displayed, for example, Tomcat and Jetty. Select the web container that you want to use. 
		10. Click **Save**. 
		
		Within a few moments, your web app will become Java-based. To confirm that it is Java-based, click its URL. Note that the page will provide text stating that the new web app is a Java-based web app.
		
		Now that you've created the web app with an app container, see the **Next steps** section for information about uploading your application to the web app.

reason: (the new Ibiza portal)

