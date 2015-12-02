deletion:

deleted:

		, or **Premium**

reason: (Premium mode)

deleted:

		> [AZURE.NOTE] Although this article refers to web apps, it also applies to API apps and mobile apps.


reason: (terminology: Azure App Service Web)

deleted:

		and **Premium**

reason: (Premium mode)

deleted:

		or Premium

reason: (Premium mode)

deleted:

		or **Premium**

reason: (Premium mode)

deleted:

		, and **Premium**

reason: (Premium mode)

deleted:

		and **Premium**

reason: (Premium mode)

deleted:

		, and **Premium**

reason: (Premium mode)

deleted:

		>[AZURE.NOTE] If you want to get started with Azure App Service before signing up for an Azure account, go to [Try App Service](http://go.microsoft.com/fwlink/?LinkId=523751), where you can immediately create a short-lived starter web app in App Service. No credit cards required; no commitments.

reason: (“Try it now”)

deleted:

		[Data Transfers Pricing Details](/pricing/details/data-transfers/)

reason: ({data transfers})

deleted:

		- Videos on scaling Web Apps:
			
			- [When to Scale Azure Websites - with Stefan Schackow](/documentation/videos/azure-web-sites-free-vs-standard-scaling/)
			- [Auto Scaling Azure Websites, CPU or Scheduled - with Stefan Schackow](/documentation/videos/auto-scaling-azure-web-sites/)
			- [How Azure Websites Scale - with Stefan Schackow](/documentation/videos/how-azure-web-sites-scale/)

reason: (video)

deleted:

		## What's changed
		* For a guide to the change from Websites to App Service see: [Azure App Service and Its Impact on Existing Azure Services](http://go.microsoft.com/fwlink/?LinkId=529714)
		* For a guide to the change of the old portal to the new portal see: [Reference for navigating the preview portal](http://go.microsoft.com/fwlink/?LinkId=529715)

reason: (terminology: Azure App Service Web, the new Ibiza portal)

deleted:

		> [AZURE.NOTE] Before switching a web app from the **Free** mode to **Basic**, **Standard**, or **Premium** mode, you must first remove the spending caps in place for your Azure App Service subscription. To view or change options for your Microsoft Azure App Service subscription, see [Microsoft Azure Subscriptions][azuresubscriptions].

reason: (terminology: Azure App Service Web)

replacement:

deleted:

		1. In your browser, open the [Azure Portal][portal].
			
		2. In your web app's blade, click **All settings**, then click **Scale**, then click **Upgrade from a Free plan to add instances and get better performance**.
			
			![Choose Plan][ChooseWHP]
			
		4. In the **Choose your pricing tier** blade, choose either **Shared** or a **Basic** mode, then click **Select**.
			
			The **Notifications** tab will flash a green **SUCCESS** once the operation is complete. 
			
		5. Slide the **Instance** bar from left to right to increase the number of instances, then click **Save** in the command bar. The instance size option is not available in **Shared** mode. For more information about these instance sizes, see [Virtual Machine and Cloud Service Sizes for Microsoft Azure][vmsizes].
			
			![Instance size for Basic mode][ChooseBasicInstances]
			
			The **Notifications** tab will flash a green **SUCCESS** once the operation is complete.

replaced by:

		1. In your browser, open the [Management Portal][portal].
			
		2. In the ** Websites** tab, select your  Website.
			
			![Selecting a  Website][Select Website]
			
		3. Click the **Scale** tab.
			
			![The scale tab][SelectScaleTab]
			
		4. In the **App Service Plan tier** section, choose either **SHARED** or **BASIC**. The example in the image chooses Basic.
			
			![Choose App Service Plan][ChooseWHP]
			
			The **App Service Plan Sites** section shows a short list of sites in the current plan. All sites in the current plan will be changed to the App Service plan tier that you select.
			
		5. In the **Capacity** section, choose the **Instance Size**. The available options are **Small**, **Medium** or **Large**. The instance size option is not available in Shared mode. For more information about these instance sizes, see [Virtual Machine and Cloud Service Sizes for Windows Azure][vmsizes].
			
			![Instance size for Basic mode][ChooseBasicInstanceSize]
			
		6. Use the slider to choose the **Instance Count** that you want.
			
			![Instance count for Basic mode][ChooseBasicInstanceCount]
			
		7. In the command bar, choose **Save**. 
			
			![Save button][SaveButton]
		 	
			> [AZURE.NOTE] You can configure and save the **App Service Plan**, **Instance Size**, and **Instance Count** settings separately if you wish.
			
		8. A confirmation message reminds you that sites in the same App Service Plan as the current  Website will also change to the new mode. Choose **Yes** to complete the change. 
			
			In the example, the plan mode has been changed to **Basic**:
			
			![Plan change complete][BasicComplete]

reason: (the new Ibiza portal)

deleted:

		1. To scale to **Standard** or **Premium** mode, follow the same initial steps as when scaling to **Shared** or **Basic**, and then choose a **Standard** or **Premium** mode in **Choose your pricing tier**, then click **Select**. 
			
			The **Notifications** tab will flash a green **SUCCESS** once the operation is complete, and **Autoscale Mode** will be enabled.
			
			![Scale in Standard or Premium Mode][ScaleStandard]
			
			You can still slide the **Instance** bar to manually scale to more instances, just like in **Basic** mode as shown above. However, here you will learn how to use **Autoscale Mode**. 
			
		2. In **Autoscale Mode**, select **Performance** to autoscale based on performance metrics.
			
			![Autoscale Mode set to Performance][Autoscale]
			
		3. In **Instance Range**, move the two sliders to define the minimum and maximum number of instances to scale automatically for the App Service plan. For this tutorial, move the maximum slider to **6** instances.
			
		4. Click **Save** in the command bar.
			
		4. Under **Target Metrics**, click **>** to configure autoscaling rules for the default metric.  
			
			![Set Target Metrics][SetTargetMetrics]
			
			You can configure autoscaling rules for different performance metrics, including CPU, memory, disk queue, HTTP queue, and data flow. Here, you will configure autoscaling for CPU percentage that does the following:
			
			- Scale up by 1 instance if CPU is above 70% in the last 10 minutes
			- Scale up by 3 instances if CPU is above 90% in the last 5 minutes
			- Scale down by 1 instance if CPU is below 50% in the last 30 minutes 
			
			
		4. Leave **Metric** dropdown as **CPU Percentage**.
			
		5. In **Scale up rules**, configure the first rule by setting **Condition** to **Greater**, **Threshold** to **70** (%), **Over past** to **10** (minutes), **Scale up by** to **1** (instance), and **Cool down** to **10** (minutes). 
			
			![Set First Autoscale Rule][SetFirstRule]
			
			>[AZURE.NOTE] The **Cool down** setting specifies how long this rule should wait after the previous scale action to scale again.
			
		6. Click **Add Scale Up Rule**, then configure the second rule by setting **Condition** to **Greater**, **Threshold** to **90** (%), **Over past** to **1** (minutes), **Scale up by** to **3** (instance), and **Cool down** to **1** (minutes).
			
			![Set Second Autoscale Rule][SetSecondRule]
			
		5. In **Scale down rules**, configure the third rule by setting **Condition** to **Less**, **Threshold** to **50** (%), **Over past** to **30** (minutes), **Scale down by** to **1** (instance), and **Cool down** to **60** (minutes). 
			
			![Set Third Autoscale Rule][SetThirdRule]
			
		7. Click **Save** in the command bar. Your autoscale rule should now be reflected in the **Scale** blade. 
			
			![Set Autoscale Rule Result][SetRulesFinal]

replaced by:

		1. To scale to Standard, follow the same initial steps as when scaling to Shared or Basic, and then choose **Standard** for **App Service plan tier**. 
			
			![Choose Standard Plan][ChooseStandard]
			
			As before, the **App Service Plan Sites** section shows a short list of sites in the current plan. In this case, all sites in the current plan will be changed to Standard mode.
			
		2. Selecting **Standard** expands the **Capacity** section to reveal the **Instance Size** and **Instance Count** options, which are also available in Basic mode. The **Edit Scale Settings for Schedule** and **Scale by Metric** options are available only in Standard mode.
			
			![Capacity section in Standard][CapacitySectionStandard]
			
		3. Configure the **Instance Size**. The available options are **Small**, **Medium** or **Large**.
			
			![Choose instance size][ChooseInstanceSize]
			
			For more information about these instance sizes, see [Virtual Machine and Cloud Service Sizes for Windows Azure][vmsizes].
			
		4. If you want to automatically scale (autoscale) resources based on daytime versus nighttime,  weekday versus weekend, and/or specific dates and times, choose **Set up schedule times** in the **Edit Scale Settings for Schedule** option.
			
			![Set up schedule times][SetUpScheduleTimesButton]
			
		5. The **Set up schedule times** dialog provides a number of useful configuration choices.
			
			![SetUpScheduleTimesDialog][SetUpScheduleTimesDialog]
			
		6. Under **Recurring Schedules**, select **Differing scale between Day and Night** and/or **Differing Scale between Weekday and Weekend** to scale resources based on separate daytime and nighttime schedules and/or separate weekday and weekend schedules.
			
			> [AZURE.NOTE] For the purposes of this feature, the weekend starts at the end of day Friday (8:00 PM by default), and ends at the beginning of the day on Monday (8:00 AM by default). The weekend profile uses the same day start and end that you will define in the **Time** setting.
			
		7. Under **Time**, choose a start and end time for the day in half-hour increments, and a time zone. By default, the day starts at 8:00 AM and ends at 8:00 PM. Daylight Savings Time is respected for the time zone that you select. 
			
		8. Under **Specific Dates**, you can create one or more named time frames for which you want to scale resources. For example, you may want to provide additional resources for a sales or launch event during which you might have large peaks in web traffic.
			
		9. After you have made your choices, click **OK** to close the **Schedule Times** dialog box.
			
		10.   The **Edit Scale Settings for Schedule** box now displays configurable schedules or events based on the changes you made. Select one of the recurring schedules or specific dates to configure it. 
			
			![Edit scale settings for schedule][EditScaleSettingsForSchedule]
			
			You can now use the **Scale by Metric** and the **Instance Count** features to fine tune the scaling of resources for each schedule that you choose. 
			
		11.  To dynamically adjust the number of instances that your  Website uses if its load changes, enable the **Scale by Metric** option by choosing **CPU**.
			
			![Scale By Metric][ScaleByMetric]
			
			The graph shows the number of instances that have been used over the past week. You can use the graph to monitor scaling activity.
			
		12. **Scale by Metric** modifies the **Instance Count** feature so that you can set the minimum and maximum number of virtual machines to be used for automatic scaling. Azure will never go above or below the limits that you set.
			
			![Instance count][InstanceCount]
			
		13. **Scale by Metric** also enables the **Target CPU** option so that you can specify a target range for CPU usage. This range represents average CPU usage for your  Website. Windows Azure will add or remove Standard instances to keep your  Website in this range.
			
			![Target CPU][TargetCPU]
			
			**Note**: When **Scale by Metric** is enabled, Windows Azure checks the CPU of your  Website once every five minutes and adds instances as needed at that point in time. If CPU usage is low, Windows Azure will remove instances once every two hours to ensure that your  Website remains performant. Generally, putting the minimum instance count at 1 is appropriate. However, if you have sudden usage spikes on your  Website, be sure that you have a sufficient minimum number of instances to handle the load. For example, if you have a sudden spike of traffic during the 5 minute interval before Windows Azure checks your CPU usage, your site might not be responsive during that time. If you expect sudden, large amounts of traffic, set the minimum instance count higher to anticipate these bursts. 
			
		14. After you have finished making changes to the items in the **Edit Scale Settings for Schedule** list, click the **Save** icon in the command bar at the bottom of the page to save all schedule settings at once (you do not have to save each schedule individually).

reason: (the new Ibiza portal)

deleted:

		1. To scale one of the linked databases, open your web app's blade in the [Azure portal][portal]. In the **Essentials** collapsible dropdown, click the **Resource group** link. Then, in the **Summary** part of the resource group blade, clicked one of the linked databases.
		
			![Linked database][ResourceGroup]
			
		2. In your linked SQL Database blade, click the **Pricing tier** part, select one of the tiers based on your performance requirement, and click **Select**. 
			
			![Scale your SQL Database][ScaleDatabase]
			
		3. You can also set up geo-replication to increase the high availability and disaster recovery capabilities of your SQL Database. To do this, click the **Geo Replication** part.
			
			![Set up geo-replication for SQL Database][GeoReplication]

replaced by:

		1. To scale one of the databases, in the **Linked Resources** section, click the **Manage scale for this database** link next to the name of the database.
			
			![Linked database][LinkedResources]
			
		2. The link takes you to the SQL Server tab of the Azure Management Portal, where you can configure the **Edition** and **Maximum Size** of the database:
			
			![Scale your SQL Server database][ScaleDatabase]
			
			For **Edition**, choose **BASIC** or **STANDARD** depending on the storage capacity that you require. For the future of the **Web** and **BUSINESS** editions, see [Web and Business Edition Sunset FAQ](http://msdn.microsoft.com/zh-cn/library/azure/dn741330.aspx).
			
			The value you choose for **Max Size** specifies an upper limit for the database. Database charges are based on the amount of data that you actually store, so changing the **Max Size** property does not by itself affect your database charges. For more information, see [Accounts and Billing in Windows Azure SQL Database][SQLaccountsbilling].

reason: (the new Ibiza portal)

