from chardet import chardetect, detect
from customizationTool.mdFileStructure import Article
from markdown import markdown
import json

def construct_json(filename):
    file = open(filename, "rb")
    print("processing: "+filename)
    contentBytes = file.read()
    file.close()
    d = detect(contentBytes)
    print(d)
    file = open(filename, "r", encoding="utf-8")
    content = file.read()
    file.close()
    article = Article(markdown(content), content, content)
    node = {}
    node["name"] = filename
    node["title"] = article.title.html
    node["encoding"] = d["encoding"]
    node["description"] = article.description.html
    node["opening"] = parseToNodes(article.opening)
    node["children"] = parseToNodes(article.children)
    node["ending"] = []
    return json.dumps(node)

def parseToNodes(articleNodes):
    if articleNodes == None or len(articleNodes) == 0:
        return []
    result = []
    for articleNode in articleNodes:
        node = {}
        try:
            node["title"] = articleNode.title.html
        except AttributeError:
            node["title"] = ""
        node["nodeType"] = type(articleNode).__name__
        emptyChildListCount = 0;
        try:
            node["opening"] = parseToNodes(articleNode.opening)
            if len(node["opening"]) == 0:
                emptyChildListCount += 1
        except AttributeError:
            emptyChildListCount += 1
        try:
            node["children"] = parseToNodes(articleNode.children)
            if len(node["children"]) == 0:
                emptyChildListCount += 1
        except AttributeError:
            emptyChildListCount += 1
        try:
            node["ending"] = parseToNodes(articleNode.ending)
            if len(node["ending"]) == 0:
                emptyChildListCount += 1
        except AttributeError:
            emptyChildListCount += 1
        if emptyChildListCount == 3:
            node["text"] = articleNode.html
        result.append(node)
    return result
