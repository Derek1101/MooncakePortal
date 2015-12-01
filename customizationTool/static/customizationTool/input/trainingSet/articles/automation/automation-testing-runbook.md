deletion:

deleted:

		, and there is no difference in testing between the textual editor and the graphical editor in the Azure preview portal

reason: (the new Ibiza portal)

deleted:

		## To test a runbook in the Azure preview portal
		
		You can work with any [runbook type](automation-runbook-types.md) in the Azure preview portal.
		
		1. Open the Draft version of the runbook in either the [textual editor](automation-editing-a-runbook#Portal) or [graphical editor](automation-graphical-authoring-intro.md).
		2. Click the **Test** button to open the Test blade.
		3. If the runbook has parameters, they will be listed in the left pane where you can provide values to be used for the test.
		4. If you want to run the test on a [Hybrid Runbook Worker](automation-hybrid), then change **Run Settings** to **Hybrid Worker** and select the name of the target group.  Otherwise, keep the default **Azure** to run the test in the cloud.
		5. Click the **Start** button to start the test.
		6. If the runbook is [PowerShell Workflow](automation-runbook-types.md#powershell-workflow-runbooks) or [Graphical](automation-runbook-types.md#graphical-runbooks), then you can stop or suspend it while it is being tested with the buttons underneath the Output Pane. When you suspend the runbook, it completes the current activity before being suspended. Once the runbook is suspended, you can stop it or restart it.
		7. Inspect the output from the runbook in the output pane.

reason: (the new Ibiza portal)

deleted:

		- [Graphical runbooks in Azure Automation](automation-graphical-authoring-intro.md)

reason: (Graphical Runbook)

