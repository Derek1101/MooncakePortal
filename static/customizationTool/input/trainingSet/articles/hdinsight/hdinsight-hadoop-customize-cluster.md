deletion:

deleted:

		##Azure portal and Azure preview portal
		
		> [AZURE.IMPORTANT] The steps in this document use the Azure preview portal. Microsoft recommends using the Azure preview portal when creating new services. For an explanation of the advantages of the preview portal, see [DevOps just got a whole lot more awesome](http://azure.microsoft.com/overview/preview-portal/). 
		> 
		> Services and resources created in the Azure preview portal are not visible in the Azure portal, as they use a new resource model.
		
		For a version of this document that uses the Azure portal, see the following link:

reason: (the new Ibiza portal)

deleted:

		> [AZURE.NOTE] The information in this article is specific to Windows-based HDInsight clusters. For a version of this article that is specific to Linux-based clusters, see [Customize HDInsight clusters using Script Action (Linux)](hdinsight-hadoop-customize-cluster-linux.md)

reason: (Linux Support)

replacement:

deleted:

		Preview portal

replaced by:

		Management Portal

reason: (the new Ibiza portal)

deleted:

		## Call scripts using the Azure Preview Portal
		
		**From the Azure Preview portal**
		
		1. Start creating a cluster as described at [Create Hadoop clusters in HDInsight](hdinsight-provision-clusters.md#portal).
		2. Under Optional Configuration, for the **Script Actions** blade, click **add script action** to provide details about the script action, as shown below:
		
			![Use Script Action to customize a cluster](./media/hdinsight-hadoop-customize-cluster/HDI.CreateCluster.8.png "Use Script Action to customize a cluster")
		
			<table border='1'>
				<tr><th>Property</th><th>Value</th></tr>
				<tr><td>Name</td>
					<td>Specify a name for the script action.</td></tr>
				<tr><td>Script URI</td>
					<td>Specify the URI to the script that is invoked to customize the cluster. s</td></tr>
				<tr><td>Head/Worker</td>
					<td>Specify the nodes (**Head** or **Worker**) on which the customization script is run.</b>.
				<tr><td>Parameters</td>
					<td>Specify the parameters, if required by the script.</td></tr>
			</table>
		
			Press ENTER to add more than one script action to install multiple components on the cluster.
		
		3. Click **Select** to save the script action configuration and continue with cluster creation.

replaced by:

		## Call scripts using the Azure Management Portal
		
		**From the Azure Management Portal**
		1. Start provisioning a cluster using the **CUSTOM CREATE** option, as described at [Provisioning a cluster using custom options](/documentation/articles/hdinsight-provision-clusters#portal). 
		2. On the **Script Actions** page of the wizard, click **add script action** to provide details about the script action, as shown below:
		
			![Use Script Action to customize a cluster](./media/hdinsight-hadoop-customize-cluster/HDI.CustomProvision.Page6.png "Use Script Action to customize a cluster")
		
			<table border='1'>
				<tr><th>Property</th><th>Value</th></tr>
				<tr><td>Name</td>
					<td>Specify a name for the script action.</td></tr>
				<tr><td>Script URI</td>
					<td>Specify the URI to the script that is invoked to customize the cluster. s</td></tr>
				<tr><td>Head/Worker</td>
					<td>Specify the nodes (**Head** or **Worker**) on which the customization script is run.</b>.
				<tr><td>Parameters</td>
					<td>Specify the parameters, if required by the script.</td></tr>
			</table>
		
			Press ENTER to add more than one script action to install multiple components on the cluster.
		
		3. Click **Select** to save the script action configuration and continue with cluster creation.

reason: (the new Ibiza portal)

