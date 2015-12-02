replacement:

deleted:

		### Using the Azure preview portal
		
		When creating an HDInsight cluster from the preview portal, you have the options to use an existing storage account or create a new storage account:
		
		![hdinsight hadoop creation data source](./media/hdinsight-hadoop-use-blob-storage/hdinsight.provision.data.source.png)

replaced by:

		### Using the Azure Management Portal
		
		When provisioning an HDInsight cluster from the Azure Management Portal, there are two options: **Quick Create** and **Custom Create**. The Quick Create option requires that the Azure Storage account is created beforehand. For instructions, see [How to Create a Storage Account][azure-storage-create].
		
		By using the Quick Create option, you can choose an existing storage account. The provision process creates a new container with the same name as the HDInsight cluster name. If a container with the same name already exists, <clusterName>-<x> will be used. For example, *myHDIcluster-1*. This container is used as the default file system.
		
		![Using Quick Create for a new Hadoop cluster in HDInsight in the Azure Management Portal.][img-hdi-quick-create]
		
		By using Custom Create, you have one of the following options for the default storage account:
		
		- Use existing storage
		- Create new storage
		- Use storage from another subscription
		
		You also have the option to create your own container or use an existing one.
		
		![Option to use an existing storage account for your HDInsight cluster.][img-hdi-custom-create-storage-account]

reason: (the new Ibiza portal)

