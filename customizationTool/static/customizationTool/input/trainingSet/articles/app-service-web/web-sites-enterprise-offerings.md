deletion:

deleted:

		An alternative approach is to make use of your existing investment on premise. In the example scenario, an employee expense system, you may wish to maintain your data store within your own internal infrastructure. This could be for integration with internal systems (reporting, payroll, billing etc.) or to satisfy an IT governance requirement.  Web Apps provides two methods of enabling you to connect to your on premises infrastructure:

		- [Hybrid Connections](../integration-hybrid-connection-overview.md) – Hybrid Connections are a feature of Microsoft Azure BizTalk Services and enable Web Apps to connect to on premises resources securely, for example SQL Server, MySQL, Web APIs and custom web services. 
		- [Virtual Network Integration](http://azure.microsoft.com/blog/2014/09/15/azure-websites-virtual-network-integration/) – Web Apps integrtaion with Azure Virtual Network allows you to connect your web app to an Azure Virtual Network which in turn can be connected to your on premises infrastructure through a site-to-site VPN. 

reason: (hybrid-connection, Integrated with Vnet)

deleted:

		For more information on RBAC in Azure, see [http://aka.ms/azurerbac](../role-based-access-control-configure/).

reason: (broken link)

deleted:

		Additionally, Web Apps is also able to make full use of your on premises investments by offering the ability to connect back to your internal resources, such as your data warehouse or SharePoint environment. As discussed in [High Level solution] you can make use of Hybrid Connections and Virtual Network Connectivity to establish connections to on premises infrastructure and services.

reason: (hybrid-connection, Integrated with Vnet)

deleted:

		### Global Scale ###
		
		App Service Web Apps is a global and scalable platform, enabling your web applications to grow and adapt to the needs of a growing business quickly and with minimal long term planning and cost. In typical on premises infrastructure scenarios, expansion and increase in demand both locally and geographically would require a large amount of management, planning and expenditure to provision and manage additional infrastructure. Web Apps offers the ability to scale your web applications with the ebb and flow of your requirements. For example using the expenses application as an example, for the majority of the month your users are light users of the application but as the deadline each month for expense submissions to be entered and usage increases on your application, Web Apps has the capability to automatically provision more infrastructure for your application and then once the usage has subsided again it can scale back to the baseline infrastructure you define.
		
		Web Apps is available globally in 17 datacenters worldwide, and growing. For the most updated list of regions and location, see [http://aka.ms/azlocations](http://aka.ms/azlocations). With Web Apps, your business can easily achieve global reach and scale. As your company grows into new regions, the reporting application dashboards that you use and host on Web Apps can easily be deployed into additional datacenters and serve local users far more quickly through the combination of Web Apps and Azure Traffic Manager, all with the added benefit of the scalable infrastructure underneath being able to contract and expand as the needs of the regional offices change.

reason: (region diff)

deleted:

		In this migration the solution uses Azure SQL Database but that is not the only database that is supported on Azure. Companies can also make use of MySQL, MongoDB, Azure DocumentDB and many more via add-ons which can be purchased at the [Azure Store](/marketplace/partner-program/).

reason: (website gallery and market place)

deleted:

		#### Connectivity to On Premises Resources ####
		App Service Web Apps offers two methods of connecting to on premises resources, such as databases, enabling reuse of existing high value infrastructure. The two methods are Web Apps Virtual Network Integration and Hybrid Connections:
		
		- Web Apps Virtual Network Integration supports integration between Web Apps and an Azure Virtual Network, allowing you access to resources running in your Virtual Network which, if connected to your on premises network with site-to-site VPN, allows connectivity direct to your on premises systems.
		- Hybrid Connections are a feature of Azure BizTalk Services and provide an easy way to connect to individual on-premises resources such as SQL Server, MySQL, HTTP Web APIs and most custom Web Services.

reason: (Integrated with Vnet, hybrid-connection)

deleted:

		## What's changed
		* For a guide to the change from Websites to App Service see: [Azure App Service and Its Impact on Existing Azure Services](http://go.microsoft.com/fwlink/?LinkId=529714)
		* For a guide to the change of the Azure portal to the Azure preview portal see: [Reference for navigating the preview portal](http://go.microsoft.com/fwlink/?LinkId=529715)


reason: (terminology: Azure App Service Web)

deleted:

		>[AZURE.NOTE] If you want to get started with Azure App Service before signing up for an Azure account, go to [Try App Service](http://go.microsoft.com/fwlink/?LinkId=523751), where you can immediately create a short-lived starter web app in App Service. No credit cards required; no commitments.


reason: (“Try it now”)

