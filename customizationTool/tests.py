from django.test import TestCase
from mdFileStructure import Article
from markdown import markdown
import glob
import ntpath

folders = [
    "articles/virtual-machines/"
  ]
inputPath = "./static/customizationTool/input/trainingSet/"



for folder in folders:
    fileList = glob.glob(inputPath+folder+"/*.md")
    for filename in fileList:
        print("processing: "+filename)
        input = open(filename, "r", encoding="utf8")
        text = input.read()
        input.close()
        article = Article(markdown(text), text, text)