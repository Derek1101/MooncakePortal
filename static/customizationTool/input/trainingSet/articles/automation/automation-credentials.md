deletion:

deleted:

		### To create a new credential with the Azure preview portal
		
		1. From your automation account, click the **Assets** part to open the **Assets** blade.
		1. Click the **Credentials** part to open the **Credentials** blade.
		1. Click **Add a credential** at the top of the blade.
		1. Complete the form and click **Create** to save the new credential.

reason: (the new Ibiza portal)

deleted:

		### Graphical runbook sample
		
		You add a **Get-AutomationPSCredential** activity to a graphical runbook by right-clicking on the credential in the Library pane of the graphical editor and selecting **Add to canvas**.
		
		
		![Add credential to canvas](media/automation-credentials/credential-add-canvas.png)
		
		The following image shows an example of using a credential in a graphical runbook.  In this case, it is being used to provide authentication for a runbook to Azure resources as described in [Configuring authentication to Azure resources](#automation-configuring.md).  The first activity retrieves the credential that has access to the Azure subscription.  The **Add-AzureAccount** activity then uses this credential to provide authentication for any activities that come after it.  A [pipeline link](automation-graphical-authoring-intro.md#links-and-workflow) is here since **Get-AutomationPSCredential** is expecting a single object.  
		
		![Add credential to canvas](media/automation-credentials/get-credential.png)

reason: (Graphical Runbook)

deleted:

		## Related articles
		
		- [Links in graphical authoring](automation-graphical-authoring-intro.md#links-and-workflow)

reason: (Graphical Runbook)

