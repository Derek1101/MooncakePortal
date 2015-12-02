deletion:

deleted:

		There are some projects that attempt to overcome these shortcomings, such as [Pyleus](https://github.com/Yelp/pyleus) and [Streamparse](https://github.com/Parsely/streamparse). While both of these can be ran on Linux-based HDInsight clusters, they are not the primary focus of this document as they require customizations during cluster setup and are not fully tested on HDInsight clusters. Notes on using these frameworks with HDInsight are included at the end of this document.

reason: (Linux Support)

deleted:

		* For __Linux-based__ HDInsight clusters: Use `scp WordCount-1.0-SNAPSHOT.jar USERNAME@CLUSTERNAME-ssh.azurehdinsight.net:WordCount-1.0-SNAPSHOT.jar` to copy the jar file to the cluster, replacing USERNAME with your SSH user name and CLUSTERNAME with the HDInsight cluster name.

		        Once the file has finished uploading, connect to the cluster using SSH and start the topology using `storm jar WordCount-1.0-SNAPSHOT.jar com.microsoft.example.WordCount wordcount`

reason: (Linux Support)

deleted:

		(SSH session to a Linux cluster for example,)

reason: (Linux Support)

deleted:

		* __Linux-based HDInsight__
		    
		        1. Copy the file to the HDInsight cluster head node using `scp`. For example:
		        
		                scp wordcount-1.0-SNAPSHOT.jar USERNAME@CLUSTERNAME-ssh.azurehdinsight.net:wordcount-1.0-SNAPSHOT.jar
		                
		            Replace USERNAME with an SSH user for your cluster, and CLUSTERNAME with your HDInsight cluster name.
		            
		        2. Once the file has been copied to the cluster, use SSH to connect to the cluster and submit the job. For information on using SSH with HDInsight, see one of the following:
		        
		            * [Use SSH with Linux-based HDInsight from Linux, Unix, or OS X](hdinsight-hadoop-linux-use-ssh-unix.md)
		            * [Use SSH with Linux-based HDInsight from Windows](hdinsight-hadoop-linux-use-ssh-windows.md)
		            
		        3. Once connected, use the following to start the topology:
		        
		                storm jar wordcount-1.0-SNAPSHOT.jar wordcount.core wordcount

reason: (Linux Support)

deleted:

		(SSH session to a Linux cluster,)

reason: (Linux Support)

deleted:

		##Pyleus framework
		
		[Pyleus](https://github.com/Yelp/pyleus) is a framework that attempts to make it easier to use Python with Storm by providing the following:
		
		* __YAML-based topology definitions__: This provides an easier way to define the topology, that doesn't require knowledge of Java or Clojure
		* __MessagePack-based serializer__: MessagePack is used as the default serialization, instead of JSON. This can result in faster messaging between components
		* __Dependency management__: Virtualenv is used to ensure that Python dependencies are deployed to all worker nodes. This requires Virtualenv to be installed on the worker nodes
		
		> [AZURE.IMPORTANT] Pyleus requires Storm on your development environment. Using the base Apache Storm 0.9.3 distribution seems to result in jars that are incompatible with the version of Storm provided with HDInsight. So the following steps use the HDInsight cluster as the development environment.
		
		You can successfuly build the example Pyleus topologies, using the HDInsight head node as the build environment:
		
		1. When provisioning a new Storm on HDInsight cluster, you must ensure that Python Virtualenv is present on the cluster nodes. When creating a new Linux-based HDInsight cluster, use the following Script Action settings with [Cluster customization](hdinsight-hadoop-customize-cluster.md):
		
		    * __Name__: Just provide a friendly name here
		    * __ Script URI__: Use `https://hditutorialdata.blob.core.windows.net/customizecluster/pythonvirtualenv.sh` as the value. This script will install Python Virtualenv on the nodes.
		    
		        > [AZURE.NOTE] It will also create some directories that are used by the Streamparse framework later in this document.
		        
		    * __Nimbus__: Check this entry so that the script is applied to the Nimbus (head) nodes.
		    * __Supervisor__: Check ths entry so that the script is applied to the supervisor (worker) nodes
		    
		    Leave other entries blank.
		
		1. Once the cluster has been created, connect using SSH:
		
		    * [Use SSH with Linux-based HDInsight from Linux, Unix, or OS X](hdinsight-hadoop-linux-use-ssh-unix.md)
		    * [Use SSH with Linux-based HDInsight from Windows](hdinsight-hadoop-linux-use-ssh-windows.md)
		
		2. From the SSH connect, use the following to create a new virtual environment and install Pyleus:
		
		        virtualenv pyleus_venv
		        source pyleus_venv
		        pip install pyleus
		
		3. Next, download the Pyleus git repository and build the WordCount example:
		
		        sudo apt-get install git
		        git clone https://github.com/Yelp/pyleus.git
		        pyleus build pyleus/examples/word_count/pyleus_topology.yaml
		    
		    Once the build completes, you will have a new file named `word_count.jar` in the current directory.
		    
		4. To submit the topology to the Storm cluster, use the following command:
		
		        pyleus submit -n localhost word_count.jar
		    
		    The `-n` parameter specifies the Nimbus host. Since we are on the head node, we can use `localhost`.
		    
		    You can also use the `pyleus` command to perform other Storm actions. Use the following to list the running topologies, and then kill the `word_count` topology:
		    
		        pyleus list -n localhost
		        pyleus kill -n localhost word_count

reason: (Linux Support)

deleted:

		##Streamparse framework
		
		[Streamparse](https://github.com/Parsely/streamparse) is a framework that attempts to make it easier to use Python with Storm by providing the following:
		
		* __Scaffolding__: This allows you to easily create the scaffolding for a project, then modify files to add your logic
		* __Clojure DSL functions__: These reduce the verbosity of using Python components in a Clojure topology definition
		* __Dependency management__: Virtualenv is used to ensure that Python dependencies are deployed to all worker nodes. This requires Virtualenv to be installed on the worker nodes
		* __Remote deployment__: Streamparse can use SSH automation to deploy components to worker nodes, and will can create an SSH tunnel to communicate with Nimbus. So you can easily deploy from your development environment to Linux-based cluster such as HDInsight
		
		> [AZURE.IMPORTANT] Streamparse relies on components that expect [Unix signals](https://en.wikipedia.org/wiki/Unix_signal), which are not available on Windows. Your development environment must be Linux, Unix, or OS X, and the HDInsight cluster must be Linux-based.
		
		1. When provisioning a new Storm on HDInsight cluster, you must ensure that Python Virtualenv is present on the cluster nodes. When creating a new Linux-based HDInsight cluster, use the following Script Action settings with [Cluster customization](hdinsight-hadoop-customize-cluster.md):
		
		    * __Name__: Just provide a friendly name here
		    * __ Script URI__: Use `https://hditutorialdata.blob.core.windows.net/customizecluster/pythonvirtualenv.sh` as the value. This script will install Python Virtualenv on the nodes, as well as create directories used by Streamparse
		    * __Nimbus__: Check this entry so that the script is applied to the Nimbus (head) nodes.
		    * __Supervisor__: Check ths entry so that the script is applied to the supervisor (worker) nodes
		    
		    Leave other entries blank.
		    
		    > [AZURE.WARNING] You must also use a __public key__ to secure the SSH user for your HDInsight cluster in order to remotely deploy using Streamparse.
		    >
		    > For more information on using keys with SSH on HDInsight, see one of the following documents:
		    >
		    > * [Use SSH with Linux-based HDInsight from Linux, Unix, or OS X](hdinsight-hadoop-linux-use-ssh-unix.md)
		    > * [Use SSH with Linux-based HDInsight from Windows](hdinsight-hadoop-linux-use-ssh-windows.md)
		
		2. While the cluster is provisioning, install Streamparse on your development environment using the following command:
		
		        pip install streamparse
		        
		3. Once Streamparse has installed, use the following command to create an example project:
		
		        sparse quickstart wordcount
		        
		    This will create a new directory named `wordcount`, and populate it with an example Word Count project.
		
		4. Change directories into the `wordcount` directory and start the topology in local mode:
		
		        cd wordcount
		        sparse run
		
		    Use Ctrl+C to stop the topology.
		
		###Deploy the topology
		
		Once your Linux-based HDInsight cluster has been created, use the following steps to deploy the topology to the cluster:
		
		1. Use the following command to find the fully qualified domain names of the worker nodes for your cluster:
		
		        curl -u admin:PASSWORD -G https://CLUSTERNAME.azurehdinsight.net/api/v1/clusters/CLUSTERNAME/hosts | grep '"host_name" : "worker'
		    
		    This will retrieve the hosts information for the cluster, pipe it to grep, and return on the entries for the worker nodes. You should see results similar to the following:
		    
		        "host_name" : "workernode0.1kft5e4nx2tevg5b2pdwxqx1fb.jx.internal.cloudapp.net"
		    
		    Save the `"workernode0.1kft5e4nx2tevg5b2pdwxqx1fb.jx.internal.cloudapp.net"` information, as it will be used in the next step.
		
		2. Open the __config.json__ file in the `wordcount` directory, and change the following entries:
		
		    * __user__: Set this to the SSH user account name that you configured for the HDInsight cluster. This will be used to authenticate to the cluster when deploying the project
		    * __nimbus__: Set this to `CLUSTERNAME-ssh.azurehdinsight.net`. Replace CLUSTERNAME with the name of your cluster. This is used when communicating with the Nimbus node, which is the head node of the cluster
		    * __workers__: Populate the workers entry with the host names for the worker nodes that you retrieved using curl. For example:
		    
		        ```
		"workers": [
		    "workernode0.1kft5e4nx2tevg5b2pdwxqx1fb.jx.internal.cloudapp.net",
		    "workernode1.1kft5e4nx2tevg5b2pdwxqx1fb.jx.internal.cloudapp.net"
		    ]
		        ```
		    
		    * __virtualenv\_root__: Set this to "/virtualenv"
		    
		    This configures the project for your HDInsight cluster, including the `/virtualenv` directory that was created during provisioning by the script action.
		
		4. Since Streamparse deploying on HDInsight needs to forward your authentication through the head node to the workers, `ssh-agent` must be started on your workstation. For most operating systems, it is started automatically. Use the following command to verify that it is running:
		
		        echo "$SSH_AUTH_SOCK"
		    
		    This will return a response similar to the following if `ssh-agent` is running:
		    
		        /tmp/ssh-rfSUL1ldCldQ/agent.1792
		    
		    > [AZURE.NOTE] The complete path may be different depending on your operating system. For example, on OS X the path may be similar to `/private/tmp/com.apple.launchd.vq2rfuxaso/Listeners`. But it should return some path if the agent is running.
		    
		    If nothing is returned, use the `ssh-agent` command to start the agent.
		    
		5. Verify that the agent knows about the key you use to authenticate to the HDInsight server. Use the following command to list the keys that are available to the agent:
		
		        ssh-add -L
		    
		    This will return the private keys that have been added to the agent. You can compare the results to the content of the private key you generated when creating an SSH key to authenticate to HDInsight.
		    
		    If no information is returned, or the returned information does not match your private key, use the following to add the private key to the agent:
		    
		        ssh-add /path/to/key/file
		    
		    For example, `ssh-add ~/.ssh/id_rsa`.
		
		4. You must also configure SSH so that it knows forwarding should be used for your HDInsight cluster. Add the following to `~/.ssh/config`. If this file does not exist, create it and use the following as the contents:
		
		        Host *.azurehdinsight.net
		          ForwardAgent yes
		        
		        Host *.internal.cloudapp.net
		          ProxyCommand ssh CLUSTERNAME-ssh.azurehdinsight.net nc %h %p
		    
		    Replace CLUSTERNAME with the name of your HDInsight cluster.
		    
		    This configures the SSH agent on your workstation to enable the forwarding of your SSH credentials through any *.azurehdinsight.net system that you connect to. In this case, the head node of your cluster. Next, it configures the command used to proxy SSH traffic from the headnode to the individual worker nodes (internal.cloudapp.net.) This allows Streamparse to connect to the head node, then from there to each of the worker nodes, using the key authentication for your SSH account.
		    
		5. Finally, use the following command to submit the topology from your local development environment, to the HDInsight cluster:
		
		        sparse submit
		    
		    This will connect to the HDInsight cluster, deploy the topology and any Python dependencies, then start the topology.

reason: (Linux Support)

deleted:

		* [How to use Python for streaming MapReduce jobs](hdinsight-hadoop-streaming-python.md)

reason: (Linux Support)

