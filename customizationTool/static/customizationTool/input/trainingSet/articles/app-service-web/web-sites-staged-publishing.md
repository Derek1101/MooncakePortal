deletion:

deleted:

		or **Premium**

reason: (Premium mode)

deleted:

		> [AZURE.NOTE] Although this article refers to web apps, it also applies to API apps and mobile apps.


reason: (terminology: Azure App Service Web)

deleted:

		or **Premium**

reason: (Premium mode)

deleted:

		## Configure Auto Swap for your web app ##
		
		Auto Swap streamlines DevOps scenarios where you want to continuously deploy your web app with zero cold start and zero downtime for end customers of the web app. When a deployment slot is configured for Auto Swap into production, every time you push your code update to that slot, App Service will automatically swap the web app into production after it has already warmed up in the slot.
		
		>[AZURE.IMPORTANT] When you enable Auto Swap for a slot, make sure the slot configuration is exactly the configuration intended for the target slot (usually the production slot).
		
		Configuring Auto Swap for a slot is easy. Follow the steps below:
		
		1. In the **Deployment Slots** blade, select a non-production slot, click **All Settings** for that slot's blade.  
		
			![][Autoswap1]
		
		2. Click **Application Settings**. Select **On** for **Auto Swap**, select the desired target slot in **Auto Swap Slot**, and click **Save** in the command bar. Make sure configuration for the slot is exactly the configuration intended for the target slot.
		
			The **Notifications** tab will flash a green **SUCCESS** once the operation is complete.
		
			![][Autoswap2]
		
			>[AZURE.NOTE] To test Auto Swap for your web app, you can first select a non-production target slot in **Auto Swap Slot** to become familiar with the feature.  
		
		3. Execute a code push to that deployment slot. Auto Swap will happen after a short time and the update will be reflected at your target slot's URL.

reason: (auto swap)

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

		preview portal

replaced by:

		Management Portal

reason: (the new Ibiza portal)

deleted:

		1. In the [Azure Preview Portal](https://portal.azure.com/), open your web app's blade.
		2. Click **Deployment slots**. Then, in the **Deployment slots** blade, click **Add Slot**.
		
			![Add a new deployment slot][QGAddNewDeploymentSlot]
		
			> [AZURE.NOTE]
			> If the web app is not already in the **Standard** or **Premium** mode, you will receive a message indicating the supported modes for enabling staged publishing. At this point, you have the option to select **Upgrade** and navigate to the **Scale** tab of your web app before continuing.
		
		2. In the **Add a slot** blade, give the slot a name, and select whether to clone web app configuration from another existing deployment slot. Click the check mark to continue.
		
			![Configuration Source][ConfigurationSource1]
		
			The first time you add a slot, you will only have two choices: clone configuration from the default slot in production or not at all.
		
			After you have created several slots, you will be able to clone configuration from a slot other than the one in production:
		
			![Configuration sources][MultipleConfigurationSources]
		
		5. In the **Deployment slots** blade, click the deployment slot to open a blade for the slot, with a set of metrics and configuration just like any other web app. **your-web-app-name-deployment-slot-name** will appear at the top of blade to remind you that you are viewing the deployment slot.
		
			![Deployment Slot Title][StagingTitle]
		
		5. Click the app URL in the slot's blade. Notice the the deployment slot has its own hostname and is also a live app. To limit public access to the deployment slot, see [App Service Web App – block web access to non-production deployment slots](http://ruslany.net/2014/04/azure-web-sites-block-web-access-to-non-production-deployment-slots/).

replaced by:

		1. On the Quick Start page, or in the Quick Glance section of the Dashboard page for your website, click **Add a new deployment slot**. 
			
			![Add a new deployment slot][QGAddNewDeploymentSlot]
			
			> [AZURE.NOTE]
			> If the website is not already in **Standard** mode, you will receive the message **You must be in the standard mode to enable staged publishing**. At this point, you have the option to select **Upgrade** and navigate to the **Scale** tab of your website before continuing.
			
		2. In the **Add New Deployment Slot** dialog, give the slot a name, and select whether to clone website configuration from another existing deployment slot. Click the check mark to continue. 
			
			![Configuration Source][ConfigurationSource1]
			
			The first time you create a slot, you will only have two choices: clone configuration from the default slot in production or not at all. 
			
			After you have created several slots, you will be able to clone configuration from a slot other than the one in production:
			
			![Configuration sources][MultipleConfigurationSources]
		
		3. In the list of websites, expand the mark to the left of your website name to reveal the deployment slot. It will have the website name followed by the deployment slot name. 
			
			![Site List with Deployment Slot][SiteListWithStagedSite]
			
		4. When you click the name of the deployment site slot, a page will open with a set of tabs just like any other website. <strong><i>your-website-name</i>(<i>deployment-slot-name</i>)</strong> will appear at the top of the portal page to remind you that you are viewing the deployment site slot.
			
			![Deployment Slot Title][StagingTitle]
			
		5. Click the site URL in the dashboard view. Notice the the deployment slot has its own hostname and is also a live site. To limit public access to the deployment slot, see [Azure Web Sites – block web access to non-production deployment slots](http://ruslany.net/2014/04/azure-web-sites-block-web-access-to-non-production-deployment-slots/).

reason: (the new Ibiza portal)

