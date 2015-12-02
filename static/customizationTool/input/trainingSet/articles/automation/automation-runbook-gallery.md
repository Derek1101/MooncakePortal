deletion:

deleted:

		and Azure preview portal

reason: (the new Ibiza portal)

deleted:

		or Azure preview portal

reason: (the new Ibiza portal)

deleted:

		### To import a runbook from the Runbook Gallery with the Azure preview portal
		
		1. In the Azure Preview Portal, open your Automation account. 
		2. Click on the **Runbooks** tile to open the list of runbooks.
		3. Click **Browse gallery** button. <br>
		![Browse gallery button](media/automation-runbook-gallery/browse-gallery-button.png)
		4. Locate the gallery item you want and select it to view its details.   <br>
		![Browse gallery](media/automation-runbook-gallery/browse-gallery.png)
		4. Click on **View source project** to view the item in the [TechNet Script Center](http://gallery.technet.microsoft.com/).
		5. To import an item, click on it to view its details and then click the **Import** button.<br>
		![Import button](media/automation-runbook-gallery/gallery-item-detail.png)
		6. Optionally, change the name of the runbook and then click **OK** to import the runbook.
		5. The runbook will appear on the **Runbooks** tab for the Automation Account.

reason: (the new Ibiza portal)

deleted:

		## Modules in PowerShell Gallery
		
		PowerShell modules contain cmdlets that you can use in your runbooks, and existing modules that you can install in Azure Automation are available in the [PowerShell Gallery](http://www.powershellgallery.com).  You can launch this gallery from the Azure preview portal and install them directly into Azure Automation or you can download them and install them manually.  You cannot install the modules directly from the Azure portal, but you can download them install them as you would any other module.
		
		### To import a module from the PowerShell Gallery with the Azure preview portal
		
		1. In the Azure Preview Portal, open your Automation account. 
		2. Click on the **Assets** tile to open the list of assets.
		3. Click on the **Modules** tile to open the list of modules.
		3. Click on the **PowerShell gallery** button to launch the PowerShell Gallery in another browser window. <br>
		![PowerShell gallery](media/automation-runbook-gallery/powershell-gallery-button.png)
		4. Click the **Modules** menu to access the list of available modules.<br>
		![PowerShell gallery button](media/automation-runbook-gallery/powershell-gallery.png)
		4. Locate a module that you're interested in and select it to view its details.
		5. To install the module directly into Azure Automation, click the **Deploy to Azure Automation** button.<br>
		![PowerShell gallery button](media/automation-runbook-gallery/powershell-gallery-detail.png)
		6. You are returned to the Azure preview portal in a **Custom deployment** pane.  Specify whether you will install the module in a **New or Existing Automation Account** and the **Automation Account Name**.  The **Automation Account Location** is ignored if you use an existing account. 
		7. Select **Resource group** and either specify a existing resource group or create a new one for the module.
		6. You must select **Legal terms** and click **Buy**.  Note that despite the name of this button you are not actually charged for installing a module.
		7. Click **Create** to import the module.  This may take a couple of minutes since each activity needs to be extracted.  
		8. You will receive a notification that the module is being deployed and a notification when it has completed.

reason: (the new Ibiza portal)

