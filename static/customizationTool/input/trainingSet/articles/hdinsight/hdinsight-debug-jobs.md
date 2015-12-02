deletion:

deleted:

		Some of these error messages could also be seen in the Azure preview portal when it is used to manage HDInsight clusters. But other error messages you might encounter there are less granular due to the constraints on the remedial actions possible in this context. Other error messages are provided in the contexts where the mitigation is obvious. If the constraints on parameters are violated, for example, the message pops-up in on the right side of the box where the value was entered. Here is a case where too many data nodes have been requested. The remedy is to reduce the number to an allowed value that is 33 or less.
		
		![HDInsight preview portal error message][image-hdi-debugging-error-messages-portal]
		
		In situations where the error is specific to Azure HDInsight, it might be a good idea to understand what the error is about. Refer to [HDInsight error codes](#hdi-error-codes) to understand the different error codes, and how to fix those. In some situations, you might want to access the Hadoop logs itself. You can do so directly from the Azure preview portal.

reason: (the new Ibiza portal)

deleted:

		## View cluster health and job logs
		
		* **Access the Hadoop UI**. From the Azure preview portal, click an HDInsight cluster name to open the cluster blade. From the cluster blade, click **Dashboard**.
		
			![Launch cluster dashboard](./media/hdinsight-debug-jobs/hdi-debug-launch-dashboard.png)
		  
			When prompted, enter the cluster administrator credentials. In the Query Console that opens, click **Hadoop UI**.
		
			![Start Hadoop UI](./media/hdinsight-debug-jobs/hdi-debug-launch-dashboard-hadoop-ui.png)

		* **Access the Yarn UI**. From the Azure preview portal, click an HDInsight cluster name to open the cluster blade. From the cluster blade, click **Dashboard**. When prompted, enter the cluster administrator credentials. In the Query Console that opens, click **YARN UI**.
		
			You can use the YARN UI to do the following:
		
			* **Get cluster status**. From the left pane, expand **Cluster**, and click **About**. This present cluster status details like total allocated memory, cores used, state of the cluster resource manager, cluster version etc.
		
				![Launch cluster dashboard](./media/hdinsight-debug-jobs/hdi-debug-yarn-cluster-state.png)
		
			* **Get node status**. From the left pane, expand **Cluster**, and click **Nodes**. This lists all the nodes in the cluster, HTTP address of each node, resources allocated to each node, etc.
		
			* **Monitor job status**. From the left pane, expand **Cluster**, and then click **Applications** to list all the jobs in the cluster. If you want to look at jobs in a specific state (such as new, submitted, running, etc.), click the appropriate link under **Applications**. You can further click the job name to find out more about the job such including the output, logs, etc.
		
		* **Access the HBase UI**. From the Azure preview portal, click an HDInsight HBase cluster name to open the cluster blade. From the cluster blade, click **Dashboard**. When prompted, enter the cluster administrator credentials. In the Query Console that opens, click **HBase UI**

reason: (the new Ibiza portal)

deleted:

		If you are using the preview portal, the UI will notify them of this issue in advance.

reason: (the new Ibiza portal)

replacement:

deleted:

		preview portal

replaced by:

		Management Portal

reason: (the new Ibiza portal)

deleted:

		Southeast Asia, West Europe, North Europe, East US, or West US

replaced by:

		China North, China East

reason: (region diff)

