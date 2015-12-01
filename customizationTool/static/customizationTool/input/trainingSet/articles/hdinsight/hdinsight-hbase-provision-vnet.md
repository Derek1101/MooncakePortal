deletion:

deleted:

		##Azure portal and Azure preview portal
		
		> [AZURE.IMPORTANT] The steps in this document use the Azure preview portal. Microsoft recommends using the Azure preview portal when creating new services. For an explanation of the advantages of the preview portal, see [DevOps just got a whole lot more awesome](http://azure.microsoft.com/overview/preview-portal/). 
		> 
		> Services and resources created in the Azure preview portal are not visible in the Azure portal, as they use a new resource model.
		
		For a version of this document that uses the Azure portal, see the following link:

reason: (the new Ibiza portal)

deleted:

		**To create a resource group**
		
		1. Sign in to the [Azure Preview portal](https://portal.azure.com).
		2. Click **NEW**, click **Management**, and then click **Resource group**.
		3. Type or select the following values:
		
			- **Resource group name**: Enter a name for the resource group.
			- **Subscription**: Select the Azure subscription used for this resource group.
			- **Resource group location**: Select an Azure data center.  This location doesn't have to match the HDInsight cluster location.
		
		4. Click **Create**.

reason: (the new Ibiza portal)

deleted:

		- [Analyze Twitter sentiment with HBase in HDInsight](../hdinsight-hbase-twitter-sentiment.md)

reason: (google facebook twitter)

replacement:

deleted:

		1. Sign in to the [preview portal](https://portal.azure.com).
		2. Click **NEW**, click **Networking**, and then click **Virtual network**.
		3. In **Select a deployment model**, select **Classic**, and then click **Create**.
		
			> [AZURE.NOTE] You cannot use a v1 (Classic,) Azure Virtual Network with HDInsight. The Virtual Network must be v2 (Azure Resource Manager,) in order for it to be listed as an option during the HDInsight cluster creation process in the Azure preview portal, or to be usable when creating a cluster from the Azure CLI or Azure PowerShell.
		> 
		> If you have resources on a v1 network, and you wish to make HDInsight directly accessible to those resources through a virtual network, see [Connecting classic VNets to new VNets](../virtual-network/virtual-networks-arm-asm-s2s.md) for information on how to connect a v2 Virtual Network to a v1 Virtual Network. Once this connection is established, you can create the HDInsight cluster in the v2 Virtual Network.

		4. Type or select the following values:
		
			- **Name**: The name of your virtual network.
			- **Address space**:  Choose an address space for the virtual network that is large enough to provide addresses for all nodes in the cluster. Otherwise the provision will fail. For walking through this tutorial, you can use the default values. Click **OK** to save the changes.
			- **Resource group**: Select the resource group you created earlier in the tutorial.
			- **Subscription**: Select the Azure subscription you like to use for this virtual network.
			- **Location** - The location must be the same as the HBase cluster that you will create.
		
		5. Click **Create**.

replaced by:

		1. Sign in to the [Azure Management Portal][azure-portal].
		2. Click **NEW** in the bottom-left corner, click **NETWORK SERVICES**, click **VIRTUAL NETWORK**, and then click **QUICK CREATE**.
		3. Type or select the following values:
		
			- **Name** - The name of your virtual network.
			- **Address space** - Choose an address space for the virtual network that is large enough to provide addresses for all nodes in the cluster. Otherwise the provision will fail. For walking through this tutorial, you can pick any of the three choices. 
			- **Maximum VM count** - Choose one of the maximum virtual machine (VM) counts. This value determines the number of possible hosts (VMs) that can be created under the address space. For walking through this tutorial, **4096 [CIDR: /20]** is sufficient. 
			- **Location** - The location must be the same as the HBase cluster that you will create.
			- **DNS server** - This tutorial uses an internal Domain Name System (DNS) server provided by Azure, so you can choose **None**. More advanced networking configurations with custom DNS servers are also supported.
		4. Click **CREATE A VIRTUAL NETWORK** in the lower-right corner. The new virtual network name will appear in the list. Wait until the Status column shows **Created**.
		5. In the main pane, click the virtual network you just created.
		6. Click **DASHBOARD** on the top of the page.
		7. Under **quick glance**, make a note of the virtual network ID. You will need it when provisioning the HBase cluster.
		8. Click **CONFIGURE** on the top of the page.
		9. On the bottom of the page, the default subnet name is **Subnet-1**. You can optionally rename the subnet or add a new subnet for the HBase cluster. Make a note of the subnet name; you will need it when provisioning the cluster.
		10. Verify **CIDR(ADDRESS COUNT)** for the subnet that will be used for the cluster. The address count must be greater than the number of worker nodes plus seven (gateway: 2, head node: 2, Zookeeper: 3). For example, if you need a 10-node HBase cluster, the address count for the subnet must be greater than 17 (10+7). Otherwise the deployment will fail.
		11. Click **Save** on the bottom of the page, if you have updated the subnet values.

reason: (the new Ibiza portal)

deleted:

		**To create an HDInsight cluster**
		
		1. Sign in to the [Azure preview portal](https://portal.azure.com).
		2. Click **NEW**, Click **Data Analytics**, and then click **HDInsight**.
		
		    ![Creating a new cluster in the Azure preview portal](./media/hdinsight-provision-clusters/HDI.CreateCluster.1.png "Creating a new cluster in the Azure Preview Portal")
		
		3. Type or select the following values:
		
		  - **Cluster Name**: Enter a name for the cluster. A green check will appear beside the cluster name if the name is available.
		  - **Cluster Type**: Select **HBase**.
		  - **Cluster Operating System**: Select **Windows Server 2012 R2 Datacenter**.
		  - **Subscription**: Select the Azure subscription that will be used for provision this cluster.
		  - **Resource Group**: Select the resource group you created earlier in the tutorial.
		  - **Credentials**: Configure the username and the password for the Hadoop user (HTTP user). If you enable remote desktop for the cluster, you will need to configure the remote desktop user username and password, and an account expiration date. Click **Select** at the bottom to save the changes.
		  - **Data Source**: Select an existing or create a new Azure Storage account that will be used as the default file system for the cluster. The default name for the default container is the cluster name.  The location of the storage account also determine the location of the cluster.
		  - **Node Pricing Tier**: For learning or evaluation purpose, select 1 region node to minimize the cost.
		
		  	- **Selection Method**: Set this to **From all subscriptions** to enable browsing of storage accounts from all your subscriptions. Set this to **Access Key** if you want to enter the **Storage Name** and **Access Key** of an existing storage account.
		  	- **Select storage account / Create New**: Click **Select storage account** to browse and select an existing storage account you want to associate with the cluster. Or, click **Create New** to create a new storage account. Use the field that appears to enter the name of the storage account. A green check will appear if the name is available.
		    - **Choose Default Container**: Use this to enter the name of the default container to use for the cluster. While you can enter any name here, we recommend using the same name as the cluster so that you can easily recognize that the container is used for this specific cluster.
		  	- **Location**: The geographic region that the storage account is in, or will be created in. This location will determine the cluster location.  The cluster and its default storage account must co-locate in the same Azure data center.

		  - **Node Pricing Tiers**: Set the number of worker nodes that you need for the cluster. The estimated cost of the cluster will be shown within the blade.
			- **Optional Configuration**: For this tutorial, you only need to configure **Virtual Network**.  Select the virtual network you created earlier in the tutorial. Make sure you also select a subnet.
		
		4. Click **Create**.

replaced by:

		1. Sign in to the [Azure Management Portal][azure-portal].
		
		2. Click **NEW** in the lower-left corner, point to **DATA SERVICES**, point to **HDINSIGHT**, and then click **CUSTOM CREATE**.
		
		3. Enter a cluster name, select HBase as the cluster type, select the Windows Server 2012 operating system, select the HDInsight version, and then click the right button.
		
			![Provide details for the HBase cluster][img-provision-cluster-page1]
		
		
			> [AZURE.NOTE] For an HBase cluster, Windows Server is the only available OS option.
		
		4. On the **Configure Cluster** page, enter or select the following:
		
			![Provide details for the HBase cluster](./media/hdinsight-hbase-provision-vnet/hbasewizard2.png)
		
			<table border='1'>
				<tr><th>Property</th><th>Value</th></tr>
				<tr><td>Data Nodes</td><td>Select the number of data nodes you want to deploy. For testing purposes, create a single-node cluster. <br />The cluster size limit varies for Azure subscriptions. Contact Azure billing support to increase the limit.</td></tr>
				<tr><td>Region/Virtual Network</td><td><p>Select a region or an Azure virtual network, if you have one already created. For this tutorial, select the network that you created earlier, and then select a corresponding subnet. The default name is <b>Subnet-1</b>.</p></td></tr>
				<tr><td>Head Node Size</td><td><p>Select a VM size for the head node.</p></td></tr>
				<tr><td>Data Node Size</td><td><p>Select a VM size for the data nodes.</p></td></tr>
				<tr><td>Zookeeper Size</td><td><p>Select a VM size for the Zookeeper node.</p></td></tr>
			</table>	
		
			>[AZURE.NOTE] Based on the choice of VMs, your cost might vary. HDInsight uses all standard-tier VMs for cluster nodes. For information on how VM sizes affect your prices, see <a href="/home/features/hdinsight/#price" target="_blank">HDInsight Pricing</a>.	
		
			Click the right button.
			
		5. Enter the Hadoop user name and password to use for this cluster, and then click the right button.
		
			![Provide Storage account for Hadoop HDInsight cluster](./media/hdinsight-hbase-provision-vnet/hbasewizard3.png)
		
			<table border='1'>
				<tr><th>Property</th><th>Value</th></tr>
				<tr><td>HTTP User Name</td>
					<td>Specify the HDInsight cluster user name.</td></tr>
				<tr><td>HTTP Password/Confirm Password</td>
					<td>Specify the HDInsight cluster user password.</td></tr>
				<tr><td>Enable remote desktop for cluster</td>
					<td>Select this check box to specify a username, password, and expiry date for a remote desktop user that can remote into the cluster nodes, once it is provisioned. You can also enable remote desktop later, after the cluster is provisioned. For instructions, see <a href="/documentation/articles/hdinsight-administer-use-management-portal-v1/#rdp" target="_blank">Connect to HDInsight clusters using RDP</a>.</td></tr>
			</table>
		
		6. On the **Storage Account** page, provide the following values:
		
		    ![Provide Storage account for Hadoop HDInsight cluster](./media/hdinsight-hbase-provision-vnet/hbasewizard4.png)
		
			<table border='1'>
				<tr><th>Property</th><th>Value</th></tr>
				<tr><td>Storage Account</td>
					<td>Specify the Azure Storage account that will be used as the default file system for the HDInsight cluster. You can choose one of the three options:
					<ul>
						<li><strong>Use Existing Storage</strong></li>
						<li><strong>Create New Storage</strong></li>
						<li><strong>Use Storage From Another Subscription</strong></li>
					</ul>
					</td></tr>
				<tr><td>Account Name</td>
					<td><ul>
						<li>If you chose to use existing storage, for <strong>Account Name</strong>, select an existing storage account. The drop-down lists only the Storage accounts located in the same data center where you chose to provision the cluster.</li>
						<li>If you chose the <strong>Create New Storage</strong> or <strong>Use Storage From Another Subscription</strong> option, you must provide the Storage account name.</li>
					</ul></td></tr>
				<tr><td>Account Key</td>
					<td>If you chose the <strong>Use Storage From Another Subscription</strong> option, specify the account key for that Storage account.</td></tr>
				<tr><td>Default Container</td>
					<td><p>Specify the default container on the Storage account that is used as the default file system for the HDInsight cluster. If you chose <strong>Use Existing Storage</strong> for the <strong>Storage Account</strong> field, and there are no existing containers in that account, the container is created by default with the same name as the cluster name. If a container with the name of the cluster already exists, a sequence number will be appended to the container name. For example, mycontainer1, mycontainer2, and so on. However, if the existing Storage account has a container with a name different from the cluster name you specified, you can use that container as well.</p>
		            <p>If you chose to create a new storage or use storage from another Azure subscription, you must specify the default container name.</p>
		        </td></tr>
				<tr><td>Additional Storage Accounts</td>
					<td>If required, specify additional Storage accounts for the cluster. HDInsight supports multiple Storage accounts. There is no limit on the additional Storage accounts that can be used by a cluster. However, if you create a cluster by using the Azure Management Portal, you have a limit of seven due to the UI constraints. Each additional Storage account you specify adds an extra <strong>Storage Account</strong> page to the wizard where you can specify the account information. For example, in the screenshot above, no additional storage account is selected, and hence an extra page is not added to the wizard.</td></tr>
			</table>
		
			Click the right arrow.
		
		7. On the **Script Actions** page, select the checkmark in the lower-right corner. Do not click the **add script action** button, as this tutorial does not require a customized cluster setup.
			
			![Configure Script Action to customize an HDInsight HBase cluster][img-provision-cluster-page5] 
		
			> [AZURE.NOTE] This page can be used to customize the cluster during setup. For more information, see [Customize HDInsight clusters using Script Action](/documentation/articles/hdinsight-hadoop-customize-cluster).

reason: (the new Ibiza portal)

