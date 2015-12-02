deletion:

deleted:

		- A [Linux-based cluster](hdinsight-apache-storm-tutorial-get-started.md): Select this if you want to use SSH to work with the cluster from Linux, Unix, OS X, or Windows clients

reason: (Linux Support)

deleted:

		* An SSH client. See one of the following articles for more information on using SSH with HDInsight:
		
    		- [Use SSH with Linux-based Hadoop on HDInsight from Linux, Unix, or OS X](hdinsight-hadoop-linux-use-ssh-unix.md)
		
    		- [Use SSH with Linux-based Hadoop on HDInsight from Windows](hdinsight-hadoop-linux-use-ssh-windows.md)

reason: (Linux Support)

deleted:

		This is provided with all Linux, Unix, and OS X systems.

reason: (Linux Support)

deleted:

		in a Unix or Linux distribution, it should have a value similar to `/usr/lib/jvm/java-7-oracle`.

reason: (Linux Support)

deleted:

		###If using a Linux-based cluster
		
		1. Use SCP to copy the jar package to your HDInsight cluster. Replace USERNAME with the SSH user for your cluster. Replace CLUSTERNAME with the name of your HDInsight cluster:
		
		        scp ./target/EventHubExample-1.0-SNAPSHOT.jar USERNAME@CLUSTERNAME-ssh.azurehdinsight.net:.
		
		    If you used a password for your SSH account, you will be prompted to enter the password. If you used an SSH key with the account, you may need to use the `-i` parameter to specify the path to the key file. For example, `scp -i ~/.ssh/id_rsa ./target/EventHubExample-1.0-SNAPSHOT.jar USERNAME@CLUSTERNAME-ssh.azurehdinsight.net:.`.
		
		    > [AZURE.NOTE] If your client is a Windows workstation, you may not have an SCP command installed. We recommend PSCP, which can be downloaded from the [PuTTY download page](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html).
		
		    This command will copy the file to the home directory of your SSH user on the cluster.
		
		1. Once the file has finished uploading, use SSH to connect to the HDInsight cluster. Replace **USERNAME** the the name of your SSH login. Replace **CLUSTERNAME** with your HDInsight cluster name:
		
		        ssh USERNAME@CLUSTERNAME-ssh.azurehdinsight.net
		
		    > [AZURE.NOTE] If you used a password for your SSH account, you will be prompted to enter the password. If you used an SSH key with the account, you may need to use the `-i` parameter to specify the path to the key file. The following example will load the private key from `~/.ssh/id_rsa`:
		    >
		    > `ssh -i ~/.ssh/id_rsa USERNAME@CLUSTERNAME-ssh.azurehdinsight.net`
		
		    If you are using PuTTY, enter `CLUSTERNAME-ssh.azurehdinsight.net` in the __Host Name (or IP address)__ field, and then click __Open__ to connect. You will be prompted to enter your SSH account name.
		
		    > [AZURE.NOTE] If you used a password for your SSH account, you will be prompted to enter the password. If you used an SSH key with the account, you may need to use the following steps to select the key:
		    >
		    > 1. In **Category**, expand **Connection**, expand **SSH**, and select **Auth**.
		    > 2. Click **Browse** and select the .ppk file that contains your private key.
		    > 3. Click __Open__ to connect.
		
		2. Use the following command to start the topologies:
		
		        storm jar EventHubExample-1.0-SNAPSHOT.jar com.microsoft.example.EventHubWriter writer
		        storm jar EventHubExample-1.0-SNAPSHOT.jar com.microsoft.example.EventHubReader reader
		
		    This will start the topologies and give them a friendly name of "reader" and "writer".
		
		3. Wait a minute or two to allow the topologies to write and read events from event hub, then use the following command to verify that the EventHubReader is storing data to your HDInsight storage:
		
		        hadoop fs -ls /devicedata
		
		    This should return a list of files similar to the following:
		
		        -rw-r--r--   1 storm supergroup      10283 2015-08-11 19:35 /devicedata/wasbbolt-14-0-1439321744110.txt
		        -rw-r--r--   1 storm supergroup      10277 2015-08-11 19:35 /devicedata/wasbbolt-14-1-1439321748237.txt
		        -rw-r--r--   1 storm supergroup      10280 2015-08-11 19:36 /devicedata/wasbbolt-14-10-1439321760398.txt
		        -rw-r--r--   1 storm supergroup      10267 2015-08-11 19:36 /devicedata/wasbbolt-14-11-1439321761090.txt
		        -rw-r--r--   1 storm supergroup      10259 2015-08-11 19:36 /devicedata/wasbbolt-14-12-1439321762679.txt
		
		    > [AZURE.NOTE] Some files may show a size of 0, as they have been created by the EventHubReader, but data has not been stored to them yet.
		
		    You can view the contents of these files by using the following command:
		
		        hadoop fs -text /devicedata/*.txt
		
		    This will return data similar to the following:
		
		        3409e622-c85d-4d64-8622-af45e30bf774,848981614
		        c3305f7e-6948-4cce-89b0-d9fbc2330c36,-1638780537
		        788b9796-e2ab-49c4-91e3-bc5b6af1f07e,-1662107246
		        6403df8a-6495-402f-bca0-3244be67f225,275738503
		        d7c7f96c-581a-45b1-b66c-e32de6d47fce,543829859
		        9a692795-e6aa-4946-98c1-2de381b37593,1857409996
		        3c8d199b-0003-4a79-8d03-24e13bde7086,-1271260574
		
		    The first column contains the device ID value and the second column is the device value.
		
		4. Use the following commands to stop the topologies:
		
		        storm kill reader
		        storm kill writer

reason: (Linux Support)

deleted:

		* If you are using a __Linux-based__ Storm on HDInsight cluster, see [Deploy and manage Apache Storm topologies on Linux-based HDInsight](hdinsight-storm-deploy-monitor-topology.md)

reason: (Linux Support)

