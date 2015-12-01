deletion:

deleted:

		and [Graphical authoring in Azure Automation](automation-graphical-authoring-intro.md)

reason: (Graphical Runbook)

deleted:

		or an exported graphical runbook (.graphrunbook)

reason: (Graphical Runbook)

deleted:

		- A .graphrunbook file may only be imported into a new [graphical runbook](automation-runbook-types.md#graphical-runbooks), and graphical runbooks can only be created from a .graphrunbook file.

reason: (Graphical Runbook)

deleted:

		### To import a runbook from a file with the Azure preview portal
		You can use the following procedure to import a script file into Azure Automation.  Note that you can only import a .ps1 file into a PowerShell Workflow runbook using this portal.
		
		1. In the Azure Preview Portal, open your Automation account. 
		2. Click on the **Runbooks** tile to open the list of runbooks.
		3. Click on the **Add a runbook** button and then **Import**.
		4. Click **Runbook file** to select the file to import
		2. If the **Name** field is enabled, then you have the option to change it.  The runbook name must start with a letter and can have letters, numbers, underscores, and dashes.
		3. Select a [runbook type](automation-runbook-types.md) taking into account the restrictions listed above.
		3. The new runbook will appear in the list of runbooks for the Automation Account.
		4. You must [publish the runbook](#publishing-a-runbook) before you can run it.

reason: (the new Ibiza portal)

deleted:

		## To publish a runbook using the Azure preview portal
		
		1. Open the runbook in the Azure preview portal.
		1. Click the **Edit** button.
		1. Click the **Publish** button and then **Yes** to the verification message.

reason: (the new Ibiza portal)

deleted:

		- [Graphical authoring in Azure Automation](automation-graphical-authoring-intro.md)

reason: (Graphical Runbook)

replacement:

deleted:

		### To create a new Azure Automation runbook with the Azure preview portal
		
		1. In the Azure Preview Portal, open your Automation account. 
		2. Click on the **Runbooks** tile to open the list of runbooks.
		3. Click on the **Add a runbook** button and then **Create a new runbook**.
		2. Type a **Name** for the runbook and select its [Type](automation-runbook-types.md). The runbook name must start with a letter and can have letters, numbers, underscores, and dashes.
		3. Click **Create** to create the runbook and open the editor.

replaced by:

		### To create a new Azure Automation runbook with the Azure Management Portal
		
		1. In the Azure Management Portal, click, **New**, **Azure Websites**, **Automation**, **Runbook**, **Quick Create**.
		2. Enter the required information, and then click **Create**. The runbook name must start with a letter and can have letters, numbers, underscores, and dashes.
		3. If you want to edit the runbook now, then click **Edit Runbook**. Otherwise, click **OK**.
		4. Your new runbook will appear on the **Runbooks** tab.

reason: (the new Ibiza portal)

