deletion:

deleted:

		### To create a new certificate with the Azure preview portal
		
		1. From your automation account, click the **Assets** part to open the **Assets** blade.
		1. Click the **Certificates** part to open the **Certificates** blade.
		1. Click **Add a certificate** at the top of the blade.
		2. Type a name for the certificate in the **Name** box.
		2. Click **Select a file** under **Upload a certificate file** to browse for a .cer or .pfx file.  If you select a .pfx file, specify a password and whether it should be allowed to be exported.
		1. Click **Create** to save the new certificate asset.

reason: (the new Ibiza portal)

deleted:

		### Graphical runbook sample
		
		You add a **Get-AutomationCerticiate** to a graphical runbook by right-clicking on the certificate in the Library pane of the graphical editor and selecting **Add to canvas**.
		
		![](media/automation-certificates/certificate-add-canvas.png)
		
		The following image shows an example of using a certificate in a graphical runbook.  This is the same example shown above for adding a certificate to a cloud service from a textual runbook.  
		
		This example uses the **UseConnectionObject** parameter set for the Send-**TwilioSMS activity** that uses a connection object for authentication to the service.  A [pipeline link](automation-graphical-authoring-intro.md#links-and-workflow) must be used here since a sequence link would return a collection containing containing a single object which the Connection parameter is not expecting.
		
		![](media/automation-certificates/add-certificate.png)

reason: (Graphical Runbook)

deleted:

		## See Also
		
		- [Links in graphical authoring](automation-graphical-authoring-intro.md#links-and-workflow) 

reason: (Graphical Runbook)

