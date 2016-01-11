import glob
import re

folders = [
    "articles/app-service-web/",
    "articles/automation/",
    "articles/hdinsight/",
    "articles/media-services/",
    "articles/redis-cache/",
    "articles/traffic-manager/",
    "articles/virtual-network/",
    "articles/virtual-machines/"
  ]
inputPath = "./static/customizationTool/input/trainingSet/"
path = "C:/Users/Administrator/Documents/GitHub/azure-content-pr/"
includeReg = r"(\[AZURE\.INCLUDE\s*\[.+\]\((../)+includes/(.+\.md)\)\])"
for folder in folders:
    fileList = glob.glob(inputPath+folder+"/*.md")
    for filename in fileList:
        print("processing: "+filename)
        input = open(filename, "r", encoding="utf8")
        md = input.read()
        input.close()
        includes = re.findall(includeReg, md)
        for include in includes:
            includeFile = open(path+"includes/"+include[2], "r", encoding="utf8")
            includeText = includeFile.read().replace("\n", "\n\t\t")
            includeFile.close()
            md = md.replace(include[0], includeText)
        output = open(filename, "w", encoding="utf8")
        output.write(md)
        output.close()