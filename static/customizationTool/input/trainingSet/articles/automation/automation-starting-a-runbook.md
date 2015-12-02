deletion:

deleted:

		<tr>
		  <td><a href="http://azure.microsoft.com/documentation/articles/automation-webhooks/">Webhook</a></td>
		  <td>
		   <ul>
		    <li>Start runbook from single HTTP request.</li>
		    <li>Authenticated with security token in URL.</li>
		    <li>Client cannot override parameter values specified when webhook created.  Runbook can define single parameter that is populated with the HTTP request details.</li>
		    <li>No ability to track job state through webhook URL.</li>
		   </ul>
		  </td>
		 </tr>

reason: (Graphical Runbook)

deleted:

		 <tr>
		  <td><a href="http://azure.microsoft.com/documentation/articles/automation-webhooks/">Respond to Azure Alert</a></td>
		  <td>
		   <ul>
		    <li>Start a runbook in response to Azure alert.</li>
		    <li>Configure webhook for runbook and link to alert.</li>
		    <li>Authenticated with security token in URL.</li>
		    <li>Currently supports alert on Metrics only.</li>
		   </ul>
		  </td>
		 </tr>

reason: (Webhook)

deleted:

		## Starting a runbook with the Azure preview portal
		
		1. From your automation account, click the **Runbooks** part to open the **Runbooks** blade.
		1. Click a runbook to open its **Runbook** blade.
		2. Click **Start**.
		1. If the runbook has no parameters, you will be prompted to confirm whether you want to start it.  If the runbook has parameters, the **Start Runbook** blade will be opened so you can provide parameter values. See [Runbook Parameters](#Runbook-parameters) below for further details on parameters.
		3. The **Job** blade is opened so that you can track the job's status.

reason: (the new Ibiza portal)

