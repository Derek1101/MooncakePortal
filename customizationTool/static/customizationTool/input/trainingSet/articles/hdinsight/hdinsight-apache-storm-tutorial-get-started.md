deletion:

deleted:

		##Azure portal and Azure preview portal
		
		> [AZURE.IMPORTANT] The steps in this document use the Azure preview portal. Microsoft recommends using the Azure preview portal when creating new services. For an explanation of the advantages of the preview portal, see [DevOps just got a whole lot more awesome](http://azure.microsoft.com/overview/preview-portal/). 
		> 
		> Services and resources created in the Azure preview portal are not visible in the Azure portal, as they use a new resource model.
		
		For a version of this document that uses the Azure portal, see the following link:

reason: (the new Ibiza portal)

deleted:

		> [AZURE.NOTE] The steps in this article create a Windows-based HDInsight cluster. For steps to create a Linux-based Storm on HDInsight cluster, see [Apache Storm tutorial: Get started with the Storm Starter sample using data analytics on HDInsight](hdinsight-apache-storm-tutorial-get-started-linux.md)

reason: (Linux Support)

replacement:

deleted:

		1. Sign in to the [Azure preview portal][preview-portal].
		
		2. Select **NEW**, select __Data Analytics__, and then select __HDInsight__.
		
			![Create a new cluster in the Azure preview portal](./media/hdinsight-apache-storm-tutorial-get-started/new-cluster.png)
		
		3. Enter a __Cluster Name__, and then select __Storm__ for the __Cluster Type__. A green check appears beside the __Cluster Name__ if it is available.
		
			![Cluster name, cluster type, and OS Type](./media/hdinsight-apache-storm-tutorial-get-started/clustername.png)
		
		4. If you have more than one subscription, select the __Subscription__ entry to select the Azure subscription that will be used for the cluster.
		
		5. For __Resource Group__, you can select the entry to see a list of existing resource groups and then select the one to create the cluster in. Or you can select __Create New__ and then enter the name of the new resource group. A green check appears to indicate if the new group name is available.
		
			> [AZURE.NOTE] This entry defaults to one of your existing resource groups, if any are available.
		
		6. Select __Credentials__, and then enter a __Cluster Login Username__ and __Cluster Login Password__. Finally, use  __Select__ to set the credentials. Remote desktop will not be used in this document, so you can leave it disabled.
		
			![Cluster credentials blade](./media/hdinsight-apache-storm-tutorial-get-started/clustercredentials.png)
		
		6. For __Data Source__, you can select the entry to choose an existing data source, or create a new one.
		
			![Data source blade](./media/hdinsight-apache-storm-tutorial-get-started/datasource.png)
		
			Currently you can select an Azure storage account as the data source for an HDInsight cluster. Use the following to understand the entries on the __Data Source__ blade.
		
			- __Selection Method__: Set this to __From all subscriptions__ to enable browsing of storage accounts on your subscriptions. Set to __Access Key__ if you want to enter the __Storage Name__ and __Access Key__ of an existing storage account.
		
			- __Create New__: Use this to create a new storage account. Use the field that appears to enter the name of the storage account. A green check appears if the name is available.
		
			- __Choose Default Container__: Use this to enter the name of the default container to use for the cluster. While you can enter any name here, we recommend using the same name as the cluster so that you can easily recognize that the container is used for this specific cluster.
		
			- __Location__: The geographic region that the storage account will be is in, or will be created in.
		
				> [AZURE.IMPORTANT] Selecting the location for the default data source also sets the location of the HDInsight cluster. The cluster and default data source must be located in the same region.
		
			- __Select__: Use this to save the data source configuration.

		7. Select __Node Pricing Tiers__ to display information about the nodes that will be created for this cluster. By default, the number of worker nodes is set to __4__. Set this to __1__, as this is sufficient for this tutorial and reduces the cost of the cluster. The estimated cost of the cluster is shown at the bottom of this blade.
		
			![Node pricing tiers blade](./media/hdinsight-apache-storm-tutorial-get-started/nodepricingtiers.png)
		
			Use  __Select__ to save the __Node Pricing Tiers__ information.

		8. Select __Optional Configuration__. This blade allows you to select the cluster version, as well as configure other optional settings such as joining a __Virtual Network__ or setting up an __External Metastore__ to hold data for Hive and Oozie.
		
			![Optional configuration blade](./media/hdinsight-apache-storm-tutorial-get-started/optionalconfiguration.png)
		
		9. Ensure that __Pin to Startboard__ is selected, and then select __Create__. This creates the cluster and adds a tile for it to the Startboard of your Azure portal. The icon indicates that the cluster is provisioning, and changes to display the HDInsight icon once provisioning has completed.
		
			| While provisioning | Provisioning complete |
			| ------------------ | --------------------- |
			| ![Provisioning indicator on Startboard](./media/hdinsight-apache-storm-tutorial-get-started/provisioning.png) | ![Provisioned cluster tile](./media/hdinsight-apache-storm-tutorial-get-started/provisioned.png) |
		
			> [AZURE.NOTE] It takes some time for the cluster to be created, usually around 15 minutes. Use the tile on the Startboard, or the __Notifications__ entry on the left of the page, to check on the provisioning process.

replaced by:

		1. Sign in to the [Azure Management Portal](http://manage.windowsazure.cn/).
		
		2. Click **NEW** in the lower-left corner, point to **DATA SERVICES**, point to **STORAGE**, and then click **QUICK CREATE**.
		
			![Azure Management Portal where you can use Quick Create to set up a new Storage account.](./media/hdinsight-apache-storm-tutorial-get-started/HDI.StorageAccount.QuickCreate.png)
		
		3. Enter information for **URL**, **LOCATION** and **REPLICATION**, and then click **CREATE STORAGE ACCOUNT**. Do not select an affinity group when creating storage for HDInsight. You will see the new Storage account in the storage list.
		
			>[AZURE.NOTE] The quick-create option to provision an HDInsight cluster, like the one we use in this tutorial, does not ask for a location while provisioning the cluster. Instead, it by default co-locates the cluster in the same data center as the Storage account. So, make sure you create your Storage account in the locations supported for the cluster, which are: **China East**, **China North**.
		
		4. Wait until **STATUS** for the new Storage account is changed to **Online**.
		
		For more information on creating Storage accounts, see
		<a href="/documentation/articles/storage-create-storage-account/" target="_blank">How to Create a Storage Account</a>.
		
		##Provision a Storm cluster on the Azure Management Portal
		
		When you provision an HDInsight cluster, you provision Azure compute resources that contain Apache Storm and related applications. You can also create Hadoop clusters for other versions by using the Azure Management Portal, Azure PowerShell cmdlets for HDInsight, or the HDInsight .NET SDK. For instructions, see [Provision HDInsight clusters using custom options][hdinsight-provision]. For information about different HDInsight versions and their service level agreements (SLAs), see the [HDInsight component versioning](/documentation/articles/hdinsight-component-versioning) page.
		
		
		> [AZURE.NOTE] The steps in this article create an HDInsight cluster by using basic configuration settings. For information about other cluster configuration settings (such as using Azure virtual network or a metastore for Hive and Oozie), see [Provision Hadoop clusters in HDInsight](hdinsight-provision-clusters.md).
		
		
		
		1. Sign in to the [Azure Management Portal][azureportal].
		
		2. Click **HDInsight** on the left, and then **+NEW** in the lower-left corner of the page.
		
		3. Click the HDInsight icon in the second column, and then select **STORM**.
		
			![quick create](./media/hdinsight-apache-storm-tutorial-get-started/quickcreate.png)
		
		4. Enter a unique cluster name, and enter a unique password for the admin account. For **STORAGE ACCOUNT**, select the Storage account created previously.
		
			For **CLUSTER SIZE**, select a size of **1 data node** to use for this cluster. This is to minimize the cost associated with the cluster. For production use, you would create a larger cluster.
		
			> [AZURE.NOTE] The administrator account for the cluster is named **admin**. The password you enter is the password for this account. You will require this information to perform actions with the cluster, such as submitting or managing Storm topologies.
		
		5. Finally, select the checkmark beside **CREATE HDINSIGHT CLUSTER** to create the cluster.

reason: (the new Ibiza portal)

deleted:

		The dashboard is located at **https://&lt;clustername>.azurehdinsight.net//**, where **clustername** is the name of the cluster. You can also find a link to the dashboard by selecting the cluster from the Startboard and selecting the __Dashboard__ link at the top of the blade.

		![Azure portal with Storm Dashboard link](./media/hdinsight-apache-storm-tutorial-get-started/dashboard.png)

replaced by:

		The dashboard is located at **https://&lt;clustername>.azurehdinsight.cn//**, where **clustername** is the name of the cluster. You can also find a link to the dashboard at the bottom of the Azure Management Portal page for your cluster.
		
		![Azure Management Portal with Storm Dashboard link](./media/hdinsight-apache-storm-tutorial-get-started/dashboard-link.png)

reason: (the new Ibiza portal)

