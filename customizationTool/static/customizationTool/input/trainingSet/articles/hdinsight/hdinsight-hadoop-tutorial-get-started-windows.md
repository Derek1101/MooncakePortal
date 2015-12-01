deletion:

deleted:

		> [AZURE.SELECTOR]
		- [Windows](../hdinsight-hadoop-tutorial-get-started-windows.md)
		- [Linux](../hdinsight-hadoop-linux-tutorial-get-started.md)

reason: (Linux Support)

deleted:

		Watch a demo video of this tutorial to learn Hadoop on HDInsight:
		
		![Video of a first Hadoop tutorial: Submit a Hive query on a Hadoop cluster, and analyze results in Excel.][img-hdi-getstarted-video]
		
		**[Watch the Hadoop tutorial for HDInsight on YouTube](https://www.youtube.com/watch?v=Y4aNjnoeaHA&list=PLDrz-Fkcb9WWdY-Yp6D4fTC1ll_3lU-QS)**

reason: (video)

deleted:

		[Twitter trend analysis](hdinsight-analyze-twitter-data.md) | Learn how to use HDInsight to analyze trends in Twitter.

reason: (google facebook twitter)

replacement:

deleted:

		1. Sign in to the [Azure Preview Portal](https://ms.portal.azure.com/).
		2. Click **NEW**, Click **Data Analytics**, and then click **HDInsight**.
		
		    ![Creating a new cluster in the Azure Preview Portal](./media/hdinsight-hadoop-tutorial-get-started-windows/HDI.CreateCluster.1.png "Creating a new cluster in the Azure Preview Portal")
		
		3. Enter a **Cluster Name**, select **Hadoop** for the **Cluster Type**, and from the **Cluster Operating System** drop-down, select **Windows Server 2012 R2 Datacenter**. A green check will appear beside the cluster name if it is available.
		
			![Enter cluster name and type](./media/hdinsight-hadoop-tutorial-get-started-windows/HDI.CreateCluster.2.png "Enter cluster name and type")
		
		4. If you have more than one subscription, click the **Subscription** entry to select the Azure subscription that will be used for the cluster.
		
		5. Click **Resource Group** to see a list of existing resource groups and then select the one to create the cluster in. Or, you can click **Create New** and then enter the name of the new resource group. A green check will appear to indicate if the new group name is available.
		
			> [AZURE.NOTE] This entry will default to one of your existing resource groups, if any are available.
		
		6. Click **Credentials**, then enter a **Cluster Login Username** and **Cluster Login Password**. If you want to enable remote desktop on the cluster node, for **Enable Remote Desktop**, click **Yes**, and then specify the required values. This tutorial does not require remote desktop so you can skip this. Click **Select** at the bottom to save the credentials configuration.
		
			![Provide cluster credentials](./media/hdinsight-hadoop-tutorial-get-started-windows/HDI.CreateCluster.3.png "Provide cluster credentials")
		
		7. Click **Data Source** to choose an existing data source for the cluster, or create a new one. When you provision a Hadoop cluster in HDInsight, you specify an Azure Storage account. A specific Blob storage container from that account is designated as the default file system, like in the Hadoop distributed file system (HDFS). By default, the HDInsight cluster is provisioned in the same data center as the storage account you specify. For more information, see [Use Azure Blob storage with HDInsight][hdinsight-storage]
		
			![Data source blade](./media/hdinsight-hadoop-tutorial-get-started-windows/HDI.CreateCluster.4.png "Provide data source configuration")
			
			Currently you can select an Azure Storage Account as the data source for an HDInsight cluster. Use the following to understand the entries on the **Data Source** blade.
			
			- **Selection Method**: Set this to **From all subscriptions** to enable browsing of storage accounts from all your subscriptions. Set this to **Access Key** if you want to enter the **Storage Name** and **Access Key** of an existing storage account.
			
			- **Select storage account / Create New**: Click **Select storage account** to browse and select an existing storage account you want to associate with the cluster. Or, click **Create New** to create a new storage account. Use the field that appears to enter the name of the storage account. A green check will appear if the name is available.
			
			- **Choose Default Container**: Use this to enter the name of the default container to use for the cluster. While you can enter any name here, we recommend using the same name as the cluster so that you can easily recognize that the container is used for this specific cluster. 
			
			- **Location**: The geographic region that the storage account is in, or will be created in.
			
				> [AZURE.IMPORTANT] Selecting the location for the default data source will also set the location of the HDInsight cluster. The cluster and default data source must be located in the same region.
				
			Click **Select** to save the data source configuration.
		
		8. Click **Node Pricing Tiers** to display information about the nodes that will be created for this cluster. Set the number of worker nodes that you need for the cluster. The estimated cost of the cluster will be shown within the blade.
		
			![Node pricing tiers blade](./media/hdinsight-hadoop-tutorial-get-started-windows/HDI.CreateCluster.5.png "Specify number of cluster nodes")
			
			Click **Select** to save the node pricing configuration.
		
		9. On the **New HDInsight Cluster** blade, ensure that **Pin to Startboard** is selected, and then click **Create**. This will create the cluster and add a tile for it to the Startboard of your Azure Portal. The icon will indicate that the cluster is provisioning, and will change to display the HDInsight icon once provisioning has completed.
		
			| While provisioning | Provisioning complete |
			| ------------------ | --------------------- |
			| ![Provisioning indicator on startboard](./media/hdinsight-hadoop-tutorial-get-started-windows/provisioning.png) | ![Provisioned cluster tile](./media/hdinsight-hadoop-tutorial-get-started-windows/provisioned.png) |
		
			> [AZURE.NOTE] It will take some time for the cluster to be created, usually around 15 minutes. Use the tile on the Startboard, or the **Notifications** entry on the left of the page to check on the provisioning process.
		
		10. Once the provisioning completes, click the tile for the cluster from the Startboard to launch the cluster blade.

replaced by:

		1. Sign in to the [Azure Management Portal][azure-management-portal].
		
		2. Click **HDInsight** in the left pane to list the status of the clusters in your account. In the following screenshot, there are no existing HDInsight clusters.
		
			![Status of HDInsight clusters in the Azure Management Portal.][image-hdi-clusterstatus]
		
		3. Click **NEW** in the lower-left corner, click **Data Services**, click **HDInsight**, and then click **Hadoop**.
		
			![Creation of a Hadoop cluster in HDInsight.][image-hdi-quickcreatecluster]
		
		4. Enter or select the following values:
		
			<table border="1">
			<tr><th>Name</th><th>Value</th></tr>
			<tr><td>Cluster Name</td><td>Name of the cluster.</td></tr>
			<tr><td>Cluster Size</td><td>Number of data nodes you want to deploy. The default value is 4. But the option to use 1 or 2 data nodes is also available from the drop-down list. Any number of cluster nodes can be specified by using the <strong>Custom Create</strong> option. Pricing details about the billing rates for various cluster sizes are available. Click the <strong>?</strong> symbol above the drop-down list and follow the link that appears.</td></tr>
			<tr><td>Password</td><td>The password for the <i>admin</i> account. The cluster user name "admin" is specified when you are not using the <strong>Custom Create</strong> option. Note that this is NOT the Windows Administrator account for the VMs on which the clusters are provisioned. The account name can be changed by using the <strong>Custom Create</strong> wizard.</td></tr>
			<tr><td>Storage Account</td><td>Click the drop-down list, and select the storage account that you created. <br/>
		
			When a storage account is chosen, it cannot be changed. If the storage account is removed, the cluster will no longer be available for use.
		
			The HDInsight cluster is located in the same datacenter as the storage account.
			</td></tr>
			</table>
		
			Keep a copy of the cluster name. You will need it later in the tutorial.
		
		
		5. Click **Create HDInsight Cluster**. When the provisioning completes, the  status column shows **Running**.
		
			>[AZURE.NOTE] The previous procedure creates a Hadoop cluster by using HDInsight version 3.1. To create cluster with other versions, use the **Custom Create** method from the portal or use Azure PowerShell. For information about what's different between each version, see [What's new in the cluster versions provided by HDInsight?][hdinsight-versions]. For information about using the **CUSTOM CREATE** option, see [Provision HDInsight clusters using custom options][hdinsight-provision].

reason: (the new Ibiza portal)

deleted:

		preview portal

replaced by:

		Management Portal

reason: (the new Ibiza portal)

deleted:

		1. Sign in to the [Azure Preview Portal](https://ms.portal.azure.com/).
		2. Click **BROWSE ALL** and then click **HDInsight Clusters** to see a list of clusters, including the cluster you just created in the previous section.
		3. Click the name of the cluster that you want to use to run the Hive job, and then click **Dashboard** at the top of the blade.
		4. A webpage opens in a different browser tab. Enter the Hadoop user account and password. The default user name is **admin**; the password is what you entered while provisioning the cluster.
		5. From the dashboard, click the **Hive Editor** tab. The following web page opens.

replaced by:

		1. Sign in to the [Azure Management Portal][azure-management-portal].
		2. Click **HDINSIGHT** from the left pane. You will see a list of clusters, including the cluster you just created in the previous section.
		3. Click the name of the cluster that you want to use to run the Hive job, and then click **QUERY CONSOLE** at the bottom of the page.
		4. A webpage opens in a different browser tab. Enter the Hadoop user account and password. The default user name is **admin**; the password is what you entered while provisioning the cluster. The dashboard looks like this:

reason: (the new Ibiza portal)

