deletion:

deleted:

		- **HDInsight on Linux (Ubuntu 12.04 LTS for Linux) (Preview)**: HDInsight provides the option of configuring Linux clusters on Azure. Configure a Linux cluster if you are familiar with Linux or Unix, migrating from an existing Linux-based Hadoop solution, or want easy integration with Hadoop ecosystem components built for Linux. For more information, see [Get started with Hadoop on Linux in HDInsight](hdinsight-hadoop-linux-get-started.md). 

reason: (Linux Support)

deleted:

		, and machines learning workloads

reason: (Machines Learning)

deleted:

		- SSH User (Linux clusters): Is used to connect to the cluster using SSH. You can create additional SSH user accounts after the cluster is created by following the steps in [Use SSH with Linux-based Hadoop on HDInsight from Linux, Unix, or OS X](hdinsight-hadoop-linux-use-ssh-unix.md).

reason: (Linux Support)

deleted:

		, including Windows, Mac and Linux

reason: (Linux Support)

deleted:

		for Mac, Linux and Windows

reason: (Linux Support)

deleted:

		Linux and

reason: (Linux Support)

deleted:

		- [Set up the Azure CLI for Linux](#clilin)

reason: (Linux Support)

deleted:

		#### <a id="clilin"></a>Set up Azure CLI for Linux
		
		Perform the following procedures to set up your Linux computer to use the Azure Command-Line Interface (Azure CLI):
		
		- Install Azure CLI by using Node.js Package Manager (NPM)
		- Connect to your Azure subscription
		
		**To install Azure CLI by using NPM**
		
		1.	Open a terminal window on your Linux computer and run the following command:
		
				sudo npm install -g https://github.com/azure/azure-xplat-cli/archive/hdinsight-February-18-2015.tar.gz
		
		2.	Run the following command to verify the installation:
		
				azure hdinsight -h
		
			You can use the *-h* switch at different levels to display the help information. For example:
		
				azure -h
				azure hdinsight -h
				azure hdinsight cluster -h
				azure hdinsight cluster create -h
		
		**To connect to your Azure subscription**
		
		Before using Azure CLI, you must configure connectivity between your workstation and Azure. Your Azure subscription information is used by Azure CLI to connect to your account. This information can be obtained from Azure in a publish settings file. The publish settings file can then be imported as a persistent local config setting that Azure CLI will use for subsequent operations. You need to import your publish settings only once.
		
		> [AZURE.NOTE] The publish settings file contains sensitive information. Microsoft recommends that you delete the file or take additional steps to encrypt the user folder that contains the file. On Windows, modify the folder properties or use BitLocker Drive Encryption.
		
		
		1.	Open a terminal window.
		2.	Run the following command to log in to your Azure subscription:
		
				azure account download
		
			![HDI.Linux.CLIAccountDownloadImport](./media/hdinsight-provision-clusters/HDI.Linux.CLIAccountDownloadImport.png)
		
			The command launches the webpage to download the publish settings file from. If the webpage does not open, click the link in the terminal window to open the browser page and log in to the portal.
		
		3.	Download the publish settings file to the computer.
		5.	From the command prompt window, run the following command to import the publish settings file:
		
				azure account import <path/to/the/file>

reason: (Linux Support)

deleted:

		Currently, only the **East Asia**, **Southeast Asia**, **North Europe**, **West Europe**, **East US**, **West US**, **North Central US**, and **South Central US** regions can host HDInsight clusters.

reason: (region diff)

