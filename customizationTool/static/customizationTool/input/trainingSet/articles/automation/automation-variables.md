deletion:

deleted:

		### To create a new variable with the Azure preview portal
		
		1. From your automation account, click the **Assets** part to open the **Assets** blade.
		1. Click the **Variables** part to open the **Variables** blade.
		1. Click **Add a variable** at the top of the blade.
		1. Complete the form and click **Create** to save the new variable.

reason: (the new Ibiza portal)

deleted:

		### Graphical runbook samples
		
		In a graphical runbook, you add the **Get-AutomationVariable** or **Set-AutomationVariable** by right-clicking on the variable in the Library pane of the graphical editor and selecting the activity you want.
		
		![Add variable to canvas](media/automation-variables/variable-add-canvas.png)
		
		#### Setting values in a variable
		
		The following image shows sample activities to update a variable with a simple value in a graphical runbook. In this sample, a single Azure virtual machine is retrieved with **Get-AzureVM** and the computer name is saved to an existing Automation variable with a type of String.  It doesn't matter whether the [link is a pipeline or sequence](automation-graphical-authoring-intro.md#links-and-workflow) since we only expect a single object in the output.
		
		![Set simple variable](media/automation-variables/set-simple-variable.png)
		
		The following image shows the activities used to update a variable with a complex value in a graphical runbook. The only change from the previous example is not specifying a **Field path** for the **Activity output** on the **Set-AutomationVariable** activity so that the object is stored instead of just a property of the object.  As explained in [Variable types](#variable-types), this is stored as a PSCustomObject.
		
		![Set complex variable](media/automation-variables/set-complex-variable.png)
		
		The following image shows similar functionality as the previous example, with multiple virtual machines saved to the variable.  A [sequence link](automation-graphical-authoring-intro.md#links-and-workflow) must be used here so that the **Set-AutomationVariable** activity receives the entire set of virtual machines as one collection.  If a [pipeline link](automation-graphical-authoring-intro.md#links-and-workflow) was used, then the **Set-AutomationVariable** activity would run separately for each object with the result being that only the last virtual machine in the collection would be saved.  As explained in [Variable types](#variable-types), this is stored as a collection of PSCustomObjects.
		
		![Set complex collection variable](media/automation-variables/set-complex-variable-collection.png)
		
		#### Retrieving values from a variable
		
		The following image shows sample activities that retrieve and use a variable in a graphical runbook.  The first activity retrieves the virtual machines that were saved to the variable in the previous example.  The link needs to be a [pipeline](automation-graphical-authoring-intro.md#links-and-workflow) so that the **Start-AzureVM** activity runs once for each object sent from the **Get-AutomationVariable** activity.  This will work the same whether a a single object or multiple objects are stored in the variable.  The **Start-AzureVM** activity uses properties of the PSCustomObject that represents each virtual machine. 
		
		![Get complex variable](media/automation-variables/get-complex-variable.png)
		
		The following image shows how to filter the objects that are stored to a variable in a graphical runbook.  A [condition](automation-graphical-authoring-intro.md#links-and-workflow) is added to the link in the previous example to filter only those virtual machines that were stopped when the variable was set.
		
		![Get complex variable filtered](media/automation-variables/get-complex-variable-filter.png)

reason: (Graphical Runbook)

deleted:

		## Related articles
		
		- [Links in graphical authoring](automation-graphical-authoring-intro.md#links-and-workflow)

reason: (Graphical Runbook)

