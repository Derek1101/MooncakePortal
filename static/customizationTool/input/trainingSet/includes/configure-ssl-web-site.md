deletion:

deleted:

		This article shows you how to configure HTTPS for a web app in Azure App Service. It does not cover client certificate authentication; for information about that, see [How To Configure TLS Mutual Authentication for Web Apps](../articles/app-service-web/app-service-web-configure-tls-mutual-auth.md).

reason: (terminology: Azure App Service Web)

deleted:

		>[AZURE.NOTE] If you want to get started with Azure App Service before signing up for an Azure account, go to [Try App Service](http://go.microsoft.com/fwlink/?LinkId=523751), where you can immediately create a short-lived starter app in App Service. No credit cards required; no commitments.

reason: (“Try it now”)

deleted:

		## What's changed
		* For a guide to the change from Websites to App Service see: [Azure App Service and Its Impact on Existing Azure Services](http://go.microsoft.com/fwlink/?LinkId=529714)
		* For a guide to the change of the old portal to the new portal see: [Reference for navigating the preview portal](http://go.microsoft.com/fwlink/?LinkId=529715)

reason: (terminology: Azure App Service Web, the new Ibiza portal)

replacement:

deleted:

		1.	In your browser, open the [Azure Portal](http://go.microsoft.com/fwlink/?LinkId=529715).
		2.	Click the **Browse** option on the left side of the page.
		3.	Click the **Web Apps** blade.
		4.	Click the name of your app.
		5.	In the **Essentials** page, click **Settings**.
		6.	Click **Scale**
			![The scale tab][scale]
		7.	In the **Scale** section, set the App Service plan mode by clicking **Select**.
			![The Pricing tier][sslreserved]

replaced by:

		1. In your browser, open the [Management Portal][portal].
		
		2. In the **Websites** tab, click the name of your website.
		
			![selecting a web site][website]
		
		3. Click the **SCALE** tab.
		
			![The scale tab][scale]
		
		4. In the **general** section, set the web hosting plan mode by clicking **STANDARD**.
		
			![standard mode selected][standard]
		
		5. Click **Save**. When prompted, click **Yes**.

reason: (the new Ibiza portal)

deleted:

		1.	In your browser, open the [Azure Management Portal](https://portal.azure.com).
		2.	Click the **Browse** option on the left side of the page.
		3.	Click the **Web Apps** blade.
		4.	Click the name of your app.
		5.	In the **Essentials** page, click **Settings**.
		6.	Click **Custom domains and SSL**.
			![The config tab][sslconfig]
		7.	In the **certificates** section, click **Upload**
		8.	Using the **Upload a certificate** dialog, select the .pfx certificate file created earlier using the IIS Manager or OpenSSL. Specify the password, if any, that was used to secure the .pfx file. Finally, click the **Save** to upload the certificate.
			![ssl upload][ssluploadcert]
		9. In the **ssl bindings** section of the **SSL Settings** tab, use the dropdowns to select the domain name to secure with SSL, and the certificate to use. You may also select whether to use [Server Name Indication][sni] (SNI) or IP based SSL.
		
			![ssl bindings][sslbindings]
		
			* IP based SSL associates a certificate with a domain name by mapping the dedicated public IP address of the server to the domain name. This requires each domain name (contoso.com, fabricam.com, etc.) associated with your service to have a dedicated IP address. This is the traditional method of associating SSL certificates with a web server.
		
			* SNI based SSL is an extension to SSL and [Transport Layer Security][tls] (TLS) that allows multiple domains to share the same IP address, with separate security certificates for each domain. Most modern browsers (including Internet Explorer, Chrome, Firefox and Opera) support SNI, however older browsers may not support SNI. For more information on SNI, see the [Server Name Indication][sni] article on Wikipedia.
		
		10. Click **Save** to save the changes and enable SSL.

replaced by:

		1.	In your browser, open the [Azure Management Portal][portal].
		
		2. In the **Websites** tab, click the name of your site and then select the **CONFIGURE** tab.
		
			![the configure tab][configure]
		
		3. In the **certificates** section, click **upload a certificate**
		
			![upload a certificate][uploadcert]
		
		4. Using the **Upload a certificate** dialog, select the .pfx certificate file created earlier using the IIS Manager or OpenSSL. Specify the password, if any, that was used to secure the .pfx file. Finally, click the **check** to upload the certificate.
		
			![upload certificate dialog][uploadcertdlg]
		
		5. In the **ssl bindings** section of the **CONFIGURE** tab, use the dropdowns to select the domain name to secure with SSL, and the certificate to use. You may also select whether to use [Server Name Indication][sni](/documentation/articles/SNI) or IP based SSL.
		
			![ssl bindings][sslbindings]
			
			* IP based SSL associates a certificate with a domain name by mapping the dedicated public IP address of the server to the domain name. This requires each domain name (contoso.com, fabricam.com, etc.) associated with your service to have a dedicated IP address. This is the traditional method of associating SSL certificates with a web server.
		
			* SNI based SSL is an extension to SSL and [Transport Layer Security][tls](/documentation/articles/TLS) that allows multiple domains to share the same IP address, with separate security certificates for each domain. Most modern browsers (including Internet Explorer, Chrome, Firefox and Opera) support SNI, however older browsers may not support SNI. For more information on SNI, see the [Server Name Indication][sni] article on Wikipedia.
		
		6. Click **Save** to save the changes and enable SSL.

reason: (the new Ibiza portal)

