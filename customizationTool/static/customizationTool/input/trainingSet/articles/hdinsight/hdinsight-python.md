deletion:

deleted:

		**Linux-based HDInsight**
		
			add file wasb:///streaming.py;
		
			SELECT TRANSFORM (clientid, devicemake, devicemodel)
			  USING 'streaming.py' AS
			  (clientid string, phoneLable string, phoneHash string)
			FROM hivesampletable
			ORDER BY clientid LIMIT 50;

reason: (Linux Support)

deleted:

		If you are using a Linux-based HDInsight cluster, use the **SSH** steps below.

reason: (Linux Support)

deleted:

		###SSH
		
		For more information on using SSH, see <a href="../hdinsight-hadoop-linux-use-ssh-unix/" target="_blank">Use SSH with Linux-based Hadoop on HDInsight from Linux, Unix, or OS X</a> or <a href="../hdinsight-hadoop-linux-use-ssh-windows/" target="_blank">Use SSH with Linux-based Hadoop on HDInsight from Windows</a>.
		
		1. Using the Python examples [streaming.py](#streamingpy) and [jython.py](#jythonpy), create local copies of the files on your development machine.
		
		2. Use `scp` to copy the files to your HDInsight cluster. For example, the following would copy the files to a cluster named **mycluster**.
		
				scp streaming.py jython.py myuser@mycluster-ssh.azurehdinsight.net:
		
		3. Use SSH to connect to the cluster. For example, the following would connect to a cluster named **mycluster** as user **myuser**.
		
				ssh myuser@mycluster-ssh.azurehdinsight.net
		
		4. From the SSH session, add the python files uploaded previously to the WASB storage for the cluster.
		
				hadoop fs -copyFromLocal streaming.py /streaming.py
				hadoop fs -copyFromLocal jython.py /jython.py
		
		After uploading the files, use the following steps to run the Hive and Pig jobs.
		
		####Hive
		
		1. Use the `hive` command to start the hive shell. You should see a `hive>` prompt once the shell has loaded.
		
		2. Enter the following at the `hive>` prompt.
		
				add file wasb:///streaming.py;
				SELECT TRANSFORM (clientid, devicemake, devicemodel)
				  USING 'streaming.py' AS
				  (clientid string, phoneLabel string, phoneHash string)
				FROM hivesampletable
				ORDER BY clientid LIMIT 50;
		
		3. After entering the last line, the job should start. Eventually it will return output similar to the following.
		
				100041	RIM 9650	d476f3687700442549a83fac4560c51c
				100041	RIM 9650	d476f3687700442549a83fac4560c51c
				100042	Apple iPhone 4.2.x	375ad9a0ddc4351536804f1d5d0ea9b9
				100042	Apple iPhone 4.2.x	375ad9a0ddc4351536804f1d5d0ea9b9
				100042	Apple iPhone 4.2.x	375ad9a0ddc4351536804f1d5d0ea9b9
		
		####Pig
		
		1. Use the `pig` command to start the shell. You should see a `grunt>` prompt once the shell has loaded.
		
		2. Enter the following statements at the `grunt>` prompt.
		
				Register wasb:///jython.py using jython as myfuncs;
			    LOGS = LOAD 'wasb:///example/data/sample.log' as (LINE:chararray);
			    LOG = FILTER LOGS by LINE is not null;
			    DETAILS = foreach LOG generate myfuncs.create_structure(LINE);
			    DUMP DETAILS;
		
		3. After entering the following line,the job should start. Eventually it will return output similar to the following.
		
				((2012-02-03,20:11:56,SampleClass5,[TRACE],verbose detail for id 990982084))
				((2012-02-03,20:11:56,SampleClass7,[TRACE],verbose detail for id 1560323914))
				((2012-02-03,20:11:56,SampleClass8,[DEBUG],detail for id 2083681507))
				((2012-02-03,20:11:56,SampleClass3,[TRACE],verbose detail for id 1718828806))
				((2012-02-03,20:11:56,SampleClass3,[INFO],everything normal for id 530537821))

reason: (Linux Support)

