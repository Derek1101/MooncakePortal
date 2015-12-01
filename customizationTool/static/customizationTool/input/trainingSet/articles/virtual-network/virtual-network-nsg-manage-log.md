deletion:

deleted:

		##Enable logging
		Audit logging is automatically enabled at all times for every Resource Manager resource. You need to enable event and counter logging to start collecting the data available through those logs. To enable logging, follow the steps below. 
		
		1.  Sign-in to the [Azure preview portal](http://portal.azure.com). If you don't already have an existing network security group, [create an NSG](virtual-networks-create-nsg-arm-ps.md) before you continue. 
		
		2.  In the preview portal, click **Browse** >> **Network security groups**.
		
			![Preview portal - Network security groups](./media/virtual-network-nsg-manage-log/portal-enable1.png)
		
		3. Select an existing network security group.
		
			![Preview portal - Network security group settings](./media/virtual-network-nsg-manage-log/portal-enable2.png)
		
		4. In the **Settings** blade, click **Diagnostics**, and then in the **Diagnostics** pane, next to **Status**, click **On**
		5. In the **Settings** blade, click **Storage Account**, and either select an existing storage account, or create a new one.  
		
		>[AZURE.INFORMATION] Audit logs do not require a separate storage account. The use of storage for event and rule logging will incur service charges.
		
		6. In the drop-down list just under **Storage Account**, select whether you want to log events, counters, or both, and then click **Save**.
		
			![Preview portal - Diagnostics logs](./media/virtual-network-nsg-manage-log/portal-enable3.png)

reason: (the new Ibiza portal)

replacement:

deleted:

		preview portal

replaced by:

		Management Portal

reason: (the new Ibiza portal)

deleted:

		preview portal

replaced by:

		Management Portal

reason: (the new Ibiza portal)

