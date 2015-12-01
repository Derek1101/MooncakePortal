deletion:

deleted:

		| [Graphical](#graphical-runbooks) | Based on Windows PowerShell Workflow and created and edited completely in graphical editor in Azure portal. | 

reason: (Graphical Runbook)

deleted:

		## Graphical runbooks
		
		[Graphical runbooks](automation-runbook-types.md#graphical-runbooks) are created and edited with the graphical editor in the Azure portal.  You can export them to a file and then import them into another automation account, but you cannot create or edit them with another tool.  Graphical runbooks generate PowerShell Workflow code, but you can't directly view or modify the code. Graphical runbooks cannot be converted to one of the [text formats](automation-runbook-types.md), nor can a text runbook be converted to graphical format.
		
		### Advantages
		
		- Create runbooks with minimal knowledge of [PowerShell Workflow](automation-powershell-workflow.md).
		- Visually represent management processes.
		- Use [checkpoints](automation-powershell-workflow.md#checkpoints) to resume runbook in case of error.
		- Use [parallel processing](automation-powershell-workflow.md#parallel-processing) to perform mulitple activities in parallel.
		- Can include other Graphical runbooks and PowerShell Workflow runbooks as child runbooks to create high level workflows.
		
		
		### Limitations
		
		- Can't edit runbook outside of Azure portal.
		- May require a [Workflow Script Control](automation-powershell-workflow.md#activities) containing PowerShell Workflow code to perform complex logic.
		- Can't view or directly edit the PowerShell Workflow code created by the graphical workflow.  Note that you can view the code in any Workflow Script activities.
		- Runbook takes longer to start than PowerShell runbooks since it needs to be compiled before running.
		- PowerShell runbooks can only be included as child runbooks by using the Start-AzureAutomationRunbook cmdlet which creates a new job.

reason: (Graphical Runbook)

deleted:

		Graphical runbooks and

reason: (Graphical Runbook)

deleted:

		Graphical or

reason: (Graphical Runbook)

deleted:

		and Graphical runbooks

reason: (Graphical Runbook)

deleted:

		- [Graphical authoring in Azure Automation](automation-graphical-authoring-intro.md)

reason: (Graphical Runbook)

