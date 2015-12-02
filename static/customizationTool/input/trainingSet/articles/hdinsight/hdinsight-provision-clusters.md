deletion:

deleted:

		##Azure portal and Azure preview portal
		
		> [AZURE.IMPORTANT] The steps in this document use the Azure preview portal. Microsoft recommends using the Azure preview portal when creating new services. For an explanation of the advantages of the preview portal, see [DevOps just got a whole lot more awesome](http://azure.microsoft.com/overview/preview-portal/). 
		> 
		> Services and resources created in the Azure preview portal are not visible in the Azure portal, as they use a new resource model.
		
		For a version of this document that uses the Azure portal, see the following link:

reason: (the new Ibiza portal)

deleted:

		- **HDInsight on Linux (Ubuntu 12.04 LTS for Linux) (Preview)**: HDInsight provides the option of configuring Linux clusters on Azure. Configure a Linux cluster if you are familiar with Linux or Unix, migrating from an existing Linux-based Hadoop solution, or want easy integration with Hadoop ecosystem components built for Linux. For more information, see [Get started with Hadoop on Linux in HDInsight](hdinsight-hadoop-linux-get-started.md).

reason: (Linux Support)

deleted:

		, and machines learning workloads.

reason: ({Machines Learning})

deleted:

		- SSH User (Linux clusters): Is used to connect to the cluster using SSH. You can create additional SSH user accounts after the cluster is created by following the steps in [Use SSH with Linux-based Hadoop on HDInsight from Linux, Unix, or OS X](hdinsight-hadoop-linux-use-ssh-unix.md).

reason: (Linux Support)

deleted:

		## Create using ARM template
		
		Azure Resource Manager (ARM) template makes it easier to deploy and redeploy cluster. The following procedure creates Linux-based HDInsight cluster.
		
		**To deploy a cluster using ARM template**
		
		1. Save the json file in [Appendix A](#appendix-a---arm-template) to your workstation.
		2. Make the parameters if needed.
		3. Run the template using the following PowerShell script:
		
				$subscriptionId = "<Azure Subscription ID"
				
				$newResourceGroupName = "<Azure Resource Group Name>"
				$Location = "EAST US 2" # for creating ARM group
						
				$armDeploymentName = "New-HDInsigt-Cluster-" + (Get-Date -Format MMdd)
				$newClusterName = "<HDInsight Cluster Name>"
				$clusterStorageAccountName = "<Default Storage Account Name>"
						
				# Connect to Azure
				#Login-AzureRmAccount
				#Select-AzureRmSubscription -SubscriptionId $subscriptionId
						
				# Create a resource group
				New-AzureRmResourceGroup -Name $newResourceGroupName -Location $Location
						
				# Create cluster and the dependent storage accounge
				$parameters = @{clusterName="$newClusterName";clusterStorageAccountName="$clusterStorageAccountName"}
						
				New-AzureRmResourceGroupDeployment `
					-Name $armDeploymentName `
					-ResourceGroupName $newResourceGroupName `
					-TemplateFile E:\HDITutorials-ARM\Create-clusters\hdinsight-arm-template.json `
					-TemplateParameterObject $parameters
						
				# List cluster
				Get-AzureRmHDInsightCluster -ResourceGroupName $newResourceGroupName -ClusterName $newClusterName 
		
			The PowerShell script only configures the cluster name and the storage account name.  You can set other values in the ARM template. 
			
		For deploying an ARM template using other methods, see [Deploy an application with Azure Resource Manager template](resource-group-template-deploy.md).

reason: (Linux Support)

deleted:

		},
			    {
			      "name": "[parameters('clusterName')]",
			      "type": "Microsoft.HDInsight/clusters",
			      "location": "[parameters('location')]",
			      "apiVersion": "2015-03-01-preview",
			      "dependsOn": [
			        "[concat('Microsoft.Storage/storageAccounts/',parameters('clusterStorageAccountName'))]"
			      ],
			      "tags": {},
			      "properties": {
			        "clusterVersion": "3.2",
			        "osType": "Linux",
			        "clusterDefinition": {
			          "kind": "hadoop",
			          "configurations": {
			            "gateway": {
			              "restAuthCredential.isEnabled": true,
			              "restAuthCredential.username": "[parameters('clusterLoginUserName')]",
			              "restAuthCredential.password": "[parameters('clusterLoginPassword')]"
			            }
			          }
			        },
			        "storageProfile": {
			          "storageaccounts": [
			            {
			              "name": "[concat(parameters('clusterStorageAccountName'),'.blob.core.chinacloudapi.cn')]",
			              "isDefault": true,
			              "container": "[parameters('clusterName')]",
			              "key": "[listKeys(resourceId('Microsoft.Storage/storageAccounts', parameters('clusterStorageAccountName')), '2015-05-01-preview').key1]"
			            }
			          ]
			        },
			        "computeProfile": {
			          "roles": [
			            {
			              "name": "headnode",
			              "targetInstanceCount": "1",
			              "hardwareProfile": {
			                "vmSize": "Large"
			              },
			              "osProfile": {
			                "linuxOperatingSystemProfile": {
			                  "username": "[parameters('sshUserName')]",
			                  "password": "[parameters('sshPassword')]"
			                }
			              }
			            },
			            {
			              "name": "workernode",
			              "targetInstanceCount": "[parameters('clusterWorkerNodeCount')]",
			              "hardwareProfile": {
			                "vmSize": "Large"
			              },
			              "osProfile": {
			                "linuxOperatingSystemProfile": {
			                  "username": "[parameters('sshUserName')]",
			                  "password": "[parameters('sshPassword')]"
			                }
			              }
			            }
			          ]
			        }
			      }

reason: (Linux Support)

replacement:

deleted:

		Preview Portal

replaced by:

		Management Portal

reason: (the new Ibiza portal)

deleted:

		preview portal

replaced by:

		Management Portal

reason: (the new Ibiza portal)

deleted:

		## Create using the preview portal
		
		You can refer to the [basic configuration options](#basic-configuration-options), and the [advanced configuration options](#advanced-configuration-options) for the explanations of the fields.
		
		**To create an HDInsight cluster**
		
		1. Sign in to the [Azure preview portal][azure-preview-portal].
		2. Click **NEW**, Click **Data Analytics**, and then click **HDInsight**.
		
		    ![Creating a new cluster in the Azure preview portal](./media/hdinsight-provision-clusters/HDI.CreateCluster.1.png "Creating a new cluster in the Azure Preview Portal")
		
		3. Type or select the following values:
		
		  * **Cluster Name**: Enter a name for the cluster. A green check will appear beside the cluster name if the name is available.
		  * **Cluster Type**: Select **Hadoop**.
		  * **Cluster Operating System**: Select **Windows Server 2012 R2 Datacenter**.
		  * **Subscription**: Select the Azure subscription that will be used for creating this cluster.
		  * **Resource Group**: Select an existing or create a new resource group. This entry will default to one of your existing resource groups, if any are available.
		  * **Credentials**: Configure the username and the password for the Hadoop user (HTTP user). If you enable remote desktop for the cluster, you will need to configure the remote desktop user username and password, and an account expiration date. Click **Select** at the bottom to save the changes.
		
			   	![Provide cluster credentials](./media/hdinsight-provision-clusters/HDI.CreateCluster.3.png "Provide cluster credentials")
		
		  * **Data Source**: Create a new or select an existing Azure Storage account to be used as the default file system for the cluster.
		
		   		![Data source blade](./media/hdinsight-provision-clusters/HDI.CreateCluster.4.png "Provide data source configuration")
		
		  		* **Selection Method**: Set this to **From all subscriptions** to enable browsing of storage accounts from all your subscriptions. Set this to **Access Key** if you want to enter the **Storage Name** and **Access Key** of an existing storage account.
		  		* **Select storage account / Create New**: Click **Select storage account** to browse and select an existing storage account you want to associate with the cluster. Or, click **Create New** to create a new storage account. Use the field that appears to enter the name of the storage account. A green check will appear if the name is available.
		  		* **Choose Default Container**: Use this to enter the name of the default container to use for the cluster. While you can enter any name here, we recommend using the same name as the cluster so that you can easily recognize that the container is used for this specific cluster.
		  		* **Location**: The geographic region that the storage account is in, or will be created in. This location will determine the cluster location.  The cluster and its default storage account must co-locate in the same Azure data center.
		  	
		  * **Node Pricing Tiers**: Set the number of worker nodes that you need for the cluster. The estimated cost of the cluster will be shown within the blade.
		  
		
				![Node pricing tiers blade](./media/hdinsight-provision-clusters/HDI.CreateCluster.5.png "Specify number of cluster nodes")
		
		
		  * **Optional Configuration** to select the cluster version, as well as configure other optional settings such as joining a **Virtual Network**, setting up an **External Metastore** to hold data for Hive and Oozie, use Script Actions to customize a cluster to install custom components, or use additional storage accounts with the cluster.
		
		  		* **HDInsight Version**: Select the version you want to use for the cluster. For more information, see [HDInsight cluster versions](hdinsight-component-versioning.md).
		  		* **Virtual Network**: Select an Azure virtual network and the subnet if you want to place the cluster into a virtual network.  
		
					![Virtual network blade](./media/hdinsight-provision-clusters/HDI.CreateCluster.6.png "Specify virtual network details")
		
					>[AZURE.NOTE] Windows based HDInsight cluster can only be placed into a classical virtual network.
		  
		
		  		
				* **External Metastores**: Specify an Azure SQL database to store Hive and Oozie metadata associated with the cluster.
		 
		            > [AZURE.NOTE] Metastore configuration is not available for HBase cluster types.
		
					![Custom metastores blade](./media/hdinsight-provision-clusters/HDI.CreateCluster.7.png "Specify external metastores")
		
		
					For **Use an existing SQL DB for Hive** metadata, click **Yes**, select a SQL database, and then provide the username/password for the database. Repeat these steps if you want to **Use an existing SQL DB for Oozie metadata**. Click **Select** till you are back on the **Optional Configuration** blade.
		
		
					>[AZURE.NOTE] The Azure SQL database used for the metastore must allow connectivity to other Azure services, including Azure HDInsight. On the Azure SQL database dashboard, on the right side, click the server name. This is the server on which the SQL database instance is running. Once you are on the server view, click **Configure**, and then for **Azure Services**, click **Yes**, and then click **Save**.
				
		  		* **Script Actions** if you want to use a custom script to customize a cluster, as the cluster is being created. For more information about script actions, see [Customize HDInsight clusters using Script Action](hdinsight-hadoop-customize-cluster.md). On the Script Actions blade provide the details as shown in the screen capture.
		  	
		
					![Script action blade](./media/hdinsight-provision-clusters/HDI.CreateCluster.8.png "Specify script action")
		
		
		    	* **Azure Storage Keys**: Specify additional storage accounts to associate with the cluster. In the **Azure Storage Keys** blade, click **Add a storage key**, and then select an existing storage account or create a new account.
		    
		
					![Additional storage blade](./media/hdinsight-provision-clusters/HDI.CreateCluster.9.png "Specify additional storage accounts")
		
		
		4. Click **Create**. Selecting **Pin to Startboard** will add a tile for cluster to the Startboard of your preview portal. The icon will indicate that the cluster is being created, and will change to display the HDInsight icon once creation has completed.
		
		
			| While creating | Creationg complete |
			| ------------------ | --------------------- |
			| ![Provisioning indicator on startboard](./media/hdinsight-provision-clusters/provisioning.png) | ![Provisioned cluster tile](./media/hdinsight-provision-clusters/provisioned.png) |
		
		
			
			> [AZURE.NOTE] It will take some time for the cluster to be created, usually around 15 minutes. Use the tile on the Startboard, or the **Notifications** entry on the left of the page to check on the provisioning process.
			
		
		5. Once the creation completes, click the tile for the cluster from the Startboard to launch the cluster blade. The cluster blade provides essential information about the cluster such as the name, the resource group it belongs to, the location, the operating system, URL for the cluster dashboard, etc.
		
		
			![Cluster blade](./media/hdinsight-provision-clusters/HDI.Cluster.Blade.png "Cluster properties")
		
		
			Use the following to understand the icons at the top of this blade, and in the **Essentials** section:
		
		
			* **Settings** and **All Settings**: Displays the **Settings** blade for the cluster, which allows you to access detailed configuration information for the cluster.
			* **Dashboard**, **Cluster Dashboard**, and **URL**: These are all ways to access the cluster dashboard, which is a Web portal to run jobs on the cluster.
			* **Remote Desktop**: Enables you to enable/disable remote desktop on the cluster nodes.
			* **Scale Cluster**: Allows you to change the number of worker nodes for this cluster.
			* **Delete**: Deletes the HDInsight cluster.
			* **Quickstart** (![cloud and thunderbolt icon = quickstart](./media/hdinsight-provision-clusters/quickstart.png)): Displays information that will help you get started using HDInsight.
			* **Users** (![users icon](./media/hdinsight-provision-clusters/users.png)): Allows you to set permissions for _portal management_ of this cluster for other users on your Azure subscription.
			
		
				> [AZURE.IMPORTANT] This _only_ affects access and permissions to this cluster in the preview portal, and has no effect on who can connect to or submit jobs to the HDInsight cluster.
				
			* **Tags** (![tag icon](./media/hdinsight-provision-clusters/tags.png)): Tags allows you to set key/value pairs to define a custom taxonomy of your cloud services. For example, you may create a key named __project__, and then use a common value for all services associated with a specific project.

replaced by:

		## Create using the Management Portal
		
		HDInsight clusters use an Azure Blob storage container as the default file system. An Azure Storage account located on the same data center is required before you can create an HDInsight cluster. For more information, see [Use Azure Blob Storage with HDInsight](/documentation/articles/hdinsight-use-blob-storage). For details on creating an Azure Storage account, see [How to Create a Storage Account](/documentation/articles/storage-create-storage-account).
		
		1. Sign in to the [Azure Management Portal][azure-management-portal].
		2. Click **+ NEW** on the bottom of the page, click **DATA SERVICES**, click **HDINSIGHT**, and then click **CUSTOM CREATE**.
		3. On the **Cluster Details** page, type or choose the following values:
		
			![Provide Hadoop HDInsight cluster details][image-customprovision-page1]
		
		    <table border='1'>
				<tr><th>Property</th><th>Value</th></tr>
				<tr><td>Cluster Name</td>
					<td><p>Name the cluster. </p>
						<ul>
						<li>The Domain Name System (DNS) name must start and end with an alphanumeric character and may contain dashes.</li>
						<li>The field must be a string from 3 to 63 characters.</li>
						</ul></td></tr>
				<tr><td>Cluster Type</td>
					<td>For cluster type, select <strong>Hadoop</strong>.</td></tr>
				<tr><td>HDInsight Version</td>
					<td>Choose the version. For Hadoop, the default is HDInsight version 3.1, which uses Hadoop 2.4.</td></tr>
				</table>
		
			Enter or select the values as shown in the table and then click the right arrow.
		
		4. On the **Configure Cluster** page, enter or select the following values:
		
			![Provide Hadoop HDInsight cluster details](./media/hdinsight-provision-clusters/HDI.CustomProvision.Page2.png)
		
			<table border="1">
			<tr><th>Name</th><th>Value</th></tr>
			<tr><td>Data Nodes</td><td>Number of data nodes you want to deploy. For testing purposes, create a single-node cluster. <br />The cluster size limit varies for Azure subscriptions. Contact Azure billing support to increase the limit.</td></tr>
			<tr><td>Region/Virtual Network</td><td><p>Choose the same region as the Storage account you created in the last procedure. HDInsight requires the Storage account to be located in the same region. Later in the configuration, you can choose only a Storage account that is in the same region that you specified here.</p><p> The available regions are: <strong>China East</strong>, <strong>China North</strong>. <br/>If you have created an Azure Virtual Network, you can select the network that the HDInsight cluster will be configured to use.</p><p>For more information on creating an Azure Virtual Network, see [Virtual Network configuration tasks](http://msdn.microsoft.com/zh-cn/library/azure/jj156206.aspx).</p></td></tr>
			<tr><td>Head Node Size</td><td><p>Select a virtual machine (VM) size for the head node.</p></td></tr>
			<tr><td>Data Node Size</td><td><p>Select a VM size for the data nodes.</p></td></tr>
			</table>
		
			>[AZURE.NOTE] Based on the choice of VMs, your cost might vary. HDInsight uses all standard-tier VMs for cluster nodes. For information on how VM sizes affect your prices, see <a href="/home/features/hdinsight/#price" target="_blank">HDInsight Pricing</a>.	
		
		
		5. On the **Configure Cluster User** page, provide the following values:
		
		    ![Provide Hadoop HDInsight cluster user and metastore details](./media/hdinsight-provision-clusters/HDI.CustomProvision.Page3.png)
		
		    <table border='1'>
				<tr><th>Property</th><th>Value</th></tr>
				<tr><td>HTTP User Name</td>
					<td>Specify the HDInsight cluster user name.</td></tr>
				<tr><td>HTTP Password/Confirm Password</td>
					<td>Specify the HDInsight cluster user password.</td></tr>
				<tr><td>Enable remote desktop for cluster</td>
					<td>Select this check box to specify a username, password, and expiry date for a remote desktop user that can remote into the cluster nodes, once it is provisioned. You can also enable remote desktop later, after the cluster is provisioned. For instructions, see <a href="/documentation/articles/hdinsight-administer-use-management-portal-v1/#rdp" target="_blank">Connect to HDInsight clusters using RDP</a>.</td></tr>
				<tr><td>Enter the Hive/Oozie Metastore</td>
					<td>Select this check box to specify a SQL database on the same data center as the cluster, to be used as the Hive/Oozie metastore. If you select this checkbox, you must spcecify details about the Azure SQL database in the subsequent pages of the wizard. This is useful if you want to retain the metadata about Hive/Oozie jobs even after a cluster has been deleted.</td></tr>
				</td></tr>		
			</table>
		
			Click the right arrow.
		
		6. On the **Configure Hive/Oozie Metastore** page, provide the following values:
		
		    ![Provide Hadoop HDInsight cluster user](./media/hdinsight-provision-clusters/HDI.CustomProvision.Page4.png)
		
			Specify an Azure SQL database that will be used as the Hive/Oozie metastore. You can specify the same database for both Hive and Oozie metastores. This SQL database must be in the same data center as the HDInsight cluster. The list box lists only the SQL databases in the same data center that you specified on the <strong>Cluster Details</strong> page. Also specify the username and password to connect to the Azure SQL database you selected.
		
		    >[AZURE.NOTE] The Azure SQL database used for the metastore must allow connectivity to other Azure services, including Azure HDInsight. On the Azure SQL database dashboard, on the right side, click the server name. This is the server on which the SQL database instance is running. Once you are on the server view, click **Configure**, and then for **Azure Services**, click **Yes**, and then click **Save**.
		
		    Click the right arrow.
		
		
		7. On the **Storage Account** page, provide the following values:
		
		    ![Provide storage account for Hadoop HDInsight cluster](./media/hdinsight-provision-clusters/HDI.CustomProvision.Page5.png)
		
			<table border='1'>
				<tr><th>Property</th><th>Value</th></tr>
				<tr><td>Storage Account</td>
					<td>Specify the Azure Storage account that will be used as the default file system for the HDInsight cluster. You can choose one of the three options:
					<ul>
						<li><strong>Use Existing Storage</strong></li>
						<li><strong>Create New Storage</strong></li>
						<li><strong>Use Storage from Another Subscription</strong></li>
					</ul>
					</td></tr>
				<tr><td>Account Name</td>
					<td><ul>
						<li>If you chose to use existing storage, for <strong>Account Name</strong>, select an existing Storage account. The drop-down lists only the Storage accounts located in the same data center where you chose to provision the cluster.</li>
						<li>If you chose the <strong>Create New Storage</strong> or <strong>Use Storage from Another Subscription</strong> option, you must provide the Storage account name.</li>
					</ul></td></tr>
				<tr><td>Account Key</td>
					<td>If you chose the <strong>Use Storage from Another Subscription</strong> option, specify the account key for that Storage account.</td></tr>
				<tr><td>Default Container</td>
					<td><p>Specify the default container on the Storage account that is used as the default file system for the HDInsight cluster. If you chose <strong>Use Existing Storage</strong> for the <strong>Storage Account</strong> field, and there are no existing containers in that account, the container is created by default with the same name as the cluster name. If a container with the name of the cluster already exists, a sequence number will be appended to the container name. For example, mycontainer1, mycontainer2, and so on. However, if the existing Storage account has a container with a name different from the cluster name you specified, you can use that container as well.</p>
		            <p>If you chose to create new storage or use storage from another Azure subscription, you must specify the default container name.</p>
		        </td></tr>
				<tr><td>Additional Storage Accounts</td>
					<td>HDInsight supports multiple Storage accounts. There is no limit on the additional Storage accounts that can be used by a cluster. However, if you create a cluster by using the Azure Management Portal, you have a limit of seven due to the UI constraints. Each additional Storage account you specify adds an extra **Storage Account** page to the wizard where you can specify the account information. For example, in the screenshot above, one additional Storage account is selected, and hence page 5 is added to the dialog.</td></tr>
			</table>
		
			Click the right arrow.
		
		7. If you chose to configure additional storage for the cluster, on the **Storage Account** page, enter the account information for the additional Storage account:
		
			![Provide additional storage details for HDInsight cluster](./media/hdinsight-provision-clusters/HDI.CustomProvision.Page6.png)
		
		    Here again, you have the option to choose from existing storage, create new storage, or use storage from another Azure subscription. The procedure to provide the values is similar to the previous step.
		
		    > [AZURE.NOTE] Once an Azure Storage account is chosen for your HDInsight cluster, you can neither delete the account nor change the account to a different account.
		
		8. On the **Script Actions** page, click **add script action** to provide details about the custom script that you want to run to customize a cluster, as the cluster is being created. For more information, see [Customize HDInsight clusters using Script Action](/documentation/articles/hdinsight-hadoop-customize-cluster). 
			
			![Configure Script Action to customize an HDInsight cluster](./media/hdinsight-provision-clusters/HDI.CustomProvision.Page7.png)
		
			<table border='1'>
				<tr><th>Property</th><th>Value</th></tr>
				<tr><td>Name</td>
					<td>Specify a name for the script action.</td></tr>
				<tr><td>Script URI</td>
					<td>Specify the Uniform Resource Identifier (URI) to the script that is invoked to customize the cluster.</td></tr>
				<tr><td>Node Type</td>
					<td>Specify the nodes on which the customization script is run. You can choose <b>All Nodes</b>, <b>Head nodes only</b>, or <b>Data nodes only</b>.
				<tr><td>Parameters</td>
					<td>Specify the parameters, if required by the script.</td></tr>
			</table>
		
			You can add more than one script action to install multiple components on the cluster. After you have added the scripts, click the check mark to start provisioning the cluster.

reason: (the new Ibiza portal)

