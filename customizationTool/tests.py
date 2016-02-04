from django.test import TestCase
from customizationTool.mdFileStructure import Article
from markdown import markdown
import glob
import ntpath
import operator

folders = [
    "articles/virtual-machines/"
  ]
inputPath = "./static/customizationTool/input/trainingSet/"



for folder in folders:
    fileList = glob.glob(inputPath+folder+"/*.md")
    finalKeywords = {}
    for filename in fileList:
        print("processing: "+filename)
        input = open(filename, "r", encoding="utf8")
        text = input.read()
        input.close()
        article = Article(markdown(text))
        keywords = article.getKeywords()
        for k,v in keywords.items():
            if finalKeywords.get(k) == None:
                finalKeywords[k] = v
            else:
                finalKeywords[k] += v
    sorted_keys = sorted(finalKeywords.items(), key=operator.itemgetter(1), reverse=True)
    output = open("output/output.txt", "w", encoding="utf8")
    for key in sorted_keys[:50]:
        print(key[0]+": "+str(key[1]))
        output.write(key[0]+"\n")
    output.close()