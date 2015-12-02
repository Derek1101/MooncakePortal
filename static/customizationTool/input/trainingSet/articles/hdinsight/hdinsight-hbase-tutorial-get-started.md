deletion:

deleted:

		##Azure portal and Azure preview portal
		
		> [AZURE.IMPORTANT] The steps in this document use the Azure preview portal. Microsoft recommends using the Azure preview portal when creating new services. For an explanation of the advantages of the preview portal, see [DevOps just got a whole lot more awesome](http://azure.microsoft.com/overview/preview-portal/). 
		> 
		> Services and resources created in the Azure preview portal are not visible in the Azure portal, as they use a new resource model.
		
		For a version of this document that uses the Azure portal, see the following link:

reason: (the new Ibiza portal)

deleted:

		The information in this document is specific to Windows-based HDInsight clusters. For information on using Linux-based clusters, see [hdinsight-hbase-tutorial-get-started-linux.md).

reason: (Linux Support)

deleted:

		- [Analyze Twitter sentiment with HBase in HDInsight][hbase-twitter-sentiment].
		Learn how to do real-time [sentiment analysis](http://en.wikipedia.org/wiki/Sentiment_analysis) of big data by using HBase in a Hadoop cluster in HDInsight.

reason: (google facebook twitter)

replacement:

deleted:

		1. Sign in to the [Azure Preview portal][azure-management-portal].
		2. Click **New** in the upper left corner, and then click **Data + Analytics**, **HDInsight**.
		3. Enter the following values:
		
			- **Cluster Name** - enter a name to identify this cluster
			- **Cluster Type** - HBase
			- **Cluster Operating System** - the HDInsight HBase cluster currently only available on Windows operating system
			- **Subscription** - select your Azure subscription used for creating this cluster
			- **Resource Group** - add or select an Azure resource group. For more information, see [Azure Resource Manager Overview](resource-group-overview.md)
			- **Configure the credentials** - for Windows based cluster, you can create a cluster user (a.k.a HTTP user, HTTP web service user) and a Remote Desktop user
			- **Data Source** - create a new Azure storage account or select an existing Azure storage account to be used as the default file system for the cluster. This Azure Storage account must be in the same location as the HDInsight HBase cluster
			- **Note Pricing Tiers** - select the number of region servers for the HBase cluster
		
				> [AZURE.WARNING] For high availability of HBase services, you must create a cluster that contains at least **three** nodes. This ensures that, if one node goes down, the HBase data regions are available on other nodes.
		
				> If you are learning HBase, always choose 1 for the cluster size, and delete the cluster after each use to reduce the cost.
		
			- **Optional Configuration** - select the cluster version, configure Azure virtual network, configure Hive/Oozie metastore, configure Script actions, and add additional storage accounts.
		
		4. Click **Create**.

replaced by:

		1. Sign in to the [Azure Management Portal][azure-management-portal].
		2. Click **NEW** in the lower left, and then click **DATA SERVICES** > **HDINSIGHT** > **HBASE**.
		
			You can also use the CUSTOM CREATE option.
		3. Enter **CLUSTER NAME**, **CLUSTER SIZE**, CLUSTER USER PASSWORD, and **STORAGE ACCOUNT**.
		
			![Choosing an HBase cluster type and entering cluster login credentials.][img-hdinsight-hbase-cluster-quick-create]
		
			The default HTTP USER NAME is admin. You can customize the name by using the CUSTOM CREATION option.
		
			An Azure storage account is required using the default HBase provision process. For instructions, see [How To Create a Storage Account][azure-create-storageaccount]. The custom create option gives the option to create a storage account with the cluster provision process.  
		
				> [AZURE.WARNING] For high availability of HBase services, you must provision a cluster that contains at least **three** nodes. This ensures that, if one node goes down, the HBase data regions are available on other nodes.
		
		4. Click the checkmark icon in the lower right to create the HBase cluster.

reason: (the new Ibiza portal)

deleted:

		## Use the HBase shell
		Currently, there are two way to access HBase. This section covers using the HBase shell. The next section covers using the .NET SDK.
		
		For most people, data appears in the tabular format:
		
		![hdinsight hbase tabular data][img-hbase-sample-data-tabular]
		
		In HBase which is an implementation of BigTable, the same data looks like:
		
		![hdinsight hbase bigtable data][img-hbase-sample-data-bigtable]
		
		It'll make more sense after you finish the next procedure.

replaced by:

		## Use the HBase shell
		This section describes how to use the HBase shell to create HBase tables, add rows, and list rows. Here is the data you will use:
		
		![hdinsight hbase table data][img-hbase-sample-data-tabular]
		
		To access the HBase shell, you must first enable Remote Desktop Protocol (RDP), and then make an RDP connection to the HBase cluster. For instructions, see [Manage Hadoop clusters in HDInsight using the Azure Management Portal][hdinsight-manage-portal].

reason: (the new Ibiza portal)

deleted:

		1. Browse to **https://<HDInsightClusterName>.azurehdinsight.net/**.

replaced by:

		1. Sign in to the [Azure Management Portal][azure-management-portal].
		2. Click **HDINSIGHT** in the left pane. You will see a list of clusters, including the one you created earlier in this tutorial.
		3. Click the cluster name where you want to run the Hive job.
		4. Click **QUERY CONSOLE** at the bottom of the page to open the cluster dashboard. It opens a webpage in a different browser tab.

reason: (the new Ibiza portal)

