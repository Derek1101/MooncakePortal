deletion:

deleted:

		### To create a new connection with the Azure preview portal
		
		1. From your automation account, click the **Assets** part to open the **Assets** blade.
		1. Click the **Connections** part to open the **Connections** blade.
		1. Click **Add a connection** at the top of the blade.
		2. In the **Type** dropdown, select the type of connection you want to create.  The form will present the properties for that particular type.
		1. Complete the form and click **Create** to save the new connection.

reason: (the new Ibiza portal)

deleted:

		### Graphical runbook samples
		
		You add a **Get-AutomationConnection** activity to a graphical runbook by right-clicking on the connection in the Library pane of the graphical editor and selecting **Add to canvas**.
		
		![](media/automation-connections/connection-add-canvas.png)
		
		The following image shows an example of using a connection in a graphical runbook.  This is the same example shown above for sending a text message using Twilio from a textual runbook.  This example uses the **UseConnectionObject** parameter set for the **Send-TwilioSMS** activity that uses a connection object for authentication to the service.  A [pipeline link](automation-graphical-authoring-intro.md#links-and-workflow) is used here since the Connection parameter is expecting a single object.
		
		The reason that a PowerShell expression is used for the value in the **To** parameter instead of a Constant value is that this parameter expects a string array value type so that you can send to multiple numbers.  A PowerShell expression allows you to provide a single value or an array.
		
		![](media/automation-connections/get-connection-object.png)
		
		The image below shows the same example as above but uses the **SpecifyConnectionFields** parameter set that expects the AccountSid and AuthToken parameters to be specified individually as opposed to using a connection object for authentication.  In this case, fields of the connection are specified instead of the object itself.  
		
		![](media/automation-connections/get-connection-properties.png)

reason: (Graphical Runbook)

deleted:

		## Related articles
		
		- [Links in graphical authoring](automation-graphical-authoring-intro.md#links-and-workflow)

reason: (Graphical Runbook)

