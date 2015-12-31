import re
import nltk
from bs4 import BeautifulSoup, NavigableString, Comment, Doctype
from customizationTool.keywordExtract import run
from markdown import markdown


sentenceTokenizer = nltk.data.load("tokenizers/punkt/english.pickle")
titleMul = 5.0
descriptionMul = 5.0
openingMul = 2.5
childMul = 0.5
endingMul = 2.0

url_reg = r"\[%s\]:[ \t]*([^\"|^\n]+)[ \t]*(\"[^\"|^\n]*\")"
def findUrl(text, fullMd):
    result = re.findall(url_reg%text, fullMd, flags=re.I)
    return result[0][0].strip()

link_reg = r"(\[([^\]]*)\](?!\(.+\))(\[([^\]]*)\])?)"
def mdPreprocess(md, fullMd):
    links = list(set([link for link in re.findall(link_reg, md) if link[1].strip() not in ["AZURE.NOTE", "WACN.NOTE", "AZURE.WARNING", "AZURE.IMPORTANT", "AZURE.TIP"]]))
    for link in links:
        if link[3].strip() != "":
            url = findUrl(link[3], fullMd)
        else:
            url = findUrl(link[1], fullMd)
        md = md.replace(link[0], "["+link[1]+"]("+url+")")
    return md

def handelNotCode(md):
    lines = md.split("\n")
    for line in lines:
        if line.strip() == "":
            continue
        else:
            if line[0] in [" ", "\t"]:
                line

def checkEqual(html_plaintext, md, fullMd, isCode):
    md = mdPreprocess(md, fullMd)
    if not isCode:
        md = handleNotCode(md)
    md_html = markdown("\n"+md+"\n")
    soup = BeautifulSoup(md_html, "html.parser")
    h_l = len(html_plaintext)
    m_l = len(soup.get_text(" ", strip=True))
    if(m_l>h_l):
        print("html:\n"+html_plaintext)
        print("\n\n\n\nmd: \n"+soup.get_text(" ", strip=True))
        print("\n\n\n\nmd: \n"+md_html)
        print("\n\n\n\nmd: \n"+md)
        raise Exception("md is greater than html")
    return h_l == m_l

def getMatchingMd(html, md, fullMd):
    soup = BeautifulSoup(html, "html.parser")
    if len(soup.contents)==0:
        return 0
    currentEnd = soup
    extra = ""
    while True:
        try:
            currentEnd2 = currentEnd.contents[len(currentEnd.contents) - 1]
            backward = 2
            while str(currentEnd2).strip() == "":
                currentEnd2 = currentEnd.contents[len(currentEnd.contents) - backward]
                backward += 1
            if str(currentEnd2).strip() == "]":
               includes = re.findall("\[AZURE\.INCLUDE[ \t]*\<a[ \t]*href=\"../(../)?includes/([^\]|^\n]+)\"\>[^\]|^\n]+\</a\>\]",html,flags=re.I)
               currentEnd2 = includes[len(includes)-1][1]+")]"
            elif str(currentEnd2).strip() in [".", ",", "?", "!", ":", ";"]:
                extra = str(currentEnd2).strip()
                currentEnd2 = currentEnd.contents[len(currentEnd.contents) - backward]
            currentEnd = currentEnd2
        except IndexError:
            if currentEnd.name == "img":
                try:
                    currentEnd = "!["+currentEnd["alt"]
                except KeyError:
                    currentEnd = "!["
                break;
        except AttributeError:
            break;
    end = str(currentEnd).strip()
    currentIndex = 0
    while True:
        deltaIndex = md[currentIndex:].find(end)
        if deltaIndex == -1:
            print("end:"+end)
            raise Exception("cannot find:\n"+html+"\nin:\n"+md)
        currentIndex += deltaIndex+len(end)
        if currentIndex == len(md):
            return currentIndex
        if md[currentIndex] == "]":
            currentIndex += 1
            if currentIndex == len(md):
                return currentIndex
            if md[currentIndex] == "[":
                while md[currentIndex] !="]":
                    currentIndex+=1
                currentIndex+=1
            elif md[currentIndex] == "(":
                right = 1
                currentIndex+=1
                while right!=0:
                    if md[currentIndex] == "(":
                        right+=1
                    elif md[currentIndex] == ")":
                        right-=1
                    currentIndex+=1
                
            elif len(md)>=currentIndex+2 and md[currentIndex:currentIndex+2] == "</":
                currentIndex += md[currentIndex:].find(">")
        for content in soup.contents:
            try:
                if content.name == "pre":
                    isCode = True
                else:
                    isCode = False
            except KeyError:
                continue
        if checkEqual(soup.get_text(" ", strip=True), md[:currentIndex]+extra, fullMd, isCode):
            if extra != "":
                delta = md[currentIndex:].find(extra)
                currentIndex += delta + len(extra)
            head_remain = re.findall("([ \t]*\#+[ \t]*\n)", md[currentIndex:])
            if len(head_remain)>0:
                if md[currentIndex:].find(head_remain[0][0]) == 0:
                    currentIndex += len(head_remain[0][0]) 
            return currentIndex

class ArticleNode(object):
    """
    the super class
    """
    def __init__(self, parent, children, html, md, fullMd):
        self.parent = parent
        self.children = children
        self.html = html
        self.keywords = None
        self.md = md
        self.fullMd = fullMd

    def getKeywords(self):
        if self.keywords == None:
            childrenKeywordLists = [child.getKeywords() for child in self.children if len(child.getKeywords()) > 0]
            self.keywords = {}
            for li in childrenKeywordLists:
                for k,v in li.items():
                    try:
                        self.keywords[k] += v
                    except KeyError:
                        self.keywords[k] = v
        return self.keywords

class Article(ArticleNode):
    tagsReg = r"(\<p\>\s*\<tags\s*\n?(\s*\w+\..+\n?)+\s*/\>\s*\</p\>)"
    def __init__(self, html, md, fullMd):
        soup = BeautifulSoup(html,"html.parser")
        self.opening = []
        try:
            self.title = Sentence(self,soup.properties["pagetitle"], soup.properties["pagetitle"], fullMd)
        except (TypeError, KeyError):
            self.title = ArticleNode(self, [], "", "", fullMd)
        try:
            self.description = Sentence(self, soup.properties["description"], soup.properties["description"], fullMd)
            soup.properties.extract()
            soup.tags.extract()
            html = re.sub("(\<properties[^\>]+/\>)", "", html, flags=re.I)
            html = re.sub("\<tags[^\>]+/\>", "", html, flags=re.I)
            html = html.replace("<p></p>","")
            html = html.replace("<!-- not suitable for Mooncake -->","")
            md = re.sub("\<properties[^\>]+/\>", "", md, flags=re.I)
            md = re.sub("\<tags[^\>]+/\>", "", md, flags=re.I)
            md = md.replace("<!-- not suitable for Mooncake -->","")
        except (TypeError, KeyError):
            self.description = ArticleNode(self, [], "", "", fullMd)
        hasHead = False
        for i in range(1,7):
            if len(soup.find_all("h"+str(i))) != 0:
                children = self.__contentInit(soup, html, i, md, fullMd)
                hasHead = True
                break
        
        if not hasHead:
            opening = []
            for p in soup.contents:
                p_html = str(p).strip()
                if p_html!="":
                    mdIndex = getMatchingMd(p_html, md, fullMd)
                    opening.append(structuralize(self, str(p).strip(), md[:mdIndex], fullMd))
                    md = md[mdIndex:]
            self.opening = []
            children = []
            for o in opening:
                if len(o) > 0:
                    children.extend(o)
        return super().__init__(None, children, html, md, fullMd)

    def __contentInit(self, soup, html, headNum, md, fullMd):
        block_titles = soup.find_all("h"+str(headNum))
        tags = re.findall(Article.tagsReg, html, flags=re.I)
        if len(tags) == 0:
            beginIndex = 0
        else:
            beginIndex = html.find(tags[0][0])+len(tags[0][0])
        endIndex = html.find("<h"+str(headNum))
        open_html = html[beginIndex:endIndex].strip()
        mdIndex = getMatchingMd(open_html, md, fullMd)
        self.opening = structuralize(self, open_html, md[:mdIndex], fullMd)
        
        md = md[mdIndex:]
        beginIndex = endIndex
        endIndex = html[beginIndex+3:].find("<h"+str(headNum))
        children = []
        
        while endIndex != -1:
            block_html = html[beginIndex:beginIndex+endIndex+3].strip()
            md_index = getMatchingMd(block_html, md, fullMd)
            block = Block(self, block_html, headNum, md[:md_index], fullMd)
            md = md[md_index:]
            children.append(block)
            beginIndex += endIndex+3
            endIndex = html[beginIndex+3:].find("<h"+str(headNum))
        block = Block(self, html[beginIndex:].strip(), headNum, md, fullMd)
        children.append(block)
        return children

    def getKeywords(self):
        if self.keywords == None:
            titleKeys = self.title.getKeywords()
            for key in titleKeys.keys():
                titleKeys[key] = titleKeys[key]*titleMul
            descriptionKeys = self.description.getKeywords()
            for key in descriptionKeys.keys():
                descriptionKeys[key] = descriptionKeys[key]*descriptionMul
            openingKeysList = [a.getKeywords() for a in self.opening if len(a.getKeywords())>0]
            openingKeys = {}
            for li in openingKeysList:
                for k,v in li.items():
                    try:
                        openingKeys[k] += v*openingMul
                    except KeyError:
                        openingKeys[k] = v*openingMul
            childrenKeys = super().getKeywords()
            for key in childrenKeys.keys():
                childrenKeys[key] = childrenKeys[key]*childMul
            keysList = []
            if len(titleKeys) > 0:
                keysList.append(titleKeys)
            if len(descriptionKeys) > 0:
                keysList.append(descriptionKeys)
            if len(openingKeysList) > 0:
                keysList.append(openingKeys)
            if len(childrenKeys) > 0:
                keysList.append(childrenKeys)
            self.keywords = {}
            for list in keysList:
                for k,v in list.items():
                    try:
                        self.keywords[k] += v
                    except KeyError:
                        self.keywords[k] = v
        return self.keywords

class Block(ArticleNode):
    def __init__(self, parent, html, headNum, md, fullMd):
        soup = BeautifulSoup(html,"html.parser")
        block_title = soup.find_all("h"+str(headNum))[0]
        title_html = "".join([str(x).strip() for x in block_title.contents])
        block_title.extract()
        md_index = getMatchingMd(title_html, md, fullMd)
        self.title = Sentence(self, title_html, md[:md_index], fullMd)
        md = md[md_index:]
        self.opening = []
        hasHead = False
        for i in range(headNum+1,7):
            if len(soup.find_all("h"+str(i))) != 0:
                children = self.__contentInit(soup, html, i, headNum, md, fullMd)
                self.ending = []
                hasHead = True
                break
        if not hasHead:
            olIndex = html.find("<ol")
            ulIndex = html.find("<ul")
            if olIndex == -1 and ulIndex == -1:
                opening = []
                for p in soup.contents:
                    p_html = str(p).strip()
                    if p_html!="":
                        mdIndex = getMatchingMd(p_html, md, fullMd)
                        opening.append(structuralize(self, str(p).strip(), md[:mdIndex], fullMd))
                        md = md[mdIndex:]
                self.opening = []
                children = []
                for o in opening:
                    if len(o) > 0:
                        children.extend(o)
                self.ending = []
            else:
                self.opening = []
                children = []
                self.ending = []
                olCount = len(soup.find_all("ol"))
                ulCount = len(soup.find_all("ul"))
                addTo = self.opening
                listCount = 0
                for p in soup.contents:
                    if type(p) != Doctype and type(p) != NavigableString and type(p) != Comment and "".join([str(x).strip() for x in p.contents])!="":
                        if p.name == "h"+str(headNum):
                            continue
                        elif p.name == "ol":
                            addTo = children
                            listCount += 1 + len(p.find_all("ol")) + len(p.find_all("ul"))
                        elif p.name == "ul":
                            addTo = children
                            listCount += 1 + len(p.find_all("ol")) + len(p.find_all("ul"))
                        elif len(p.find_all("ol")) != 0 or len(p.find_all("ul")) != 0:
                            addTo = children
                            listCount += len(p.find_all("ol")) + len(p.find_all("ul"))
                        p_html = str(p).strip()
                        if p_html!="":
                            mdIndex = getMatchingMd(p_html, md, fullMd)
                            addTo.extend(structuralize(self, p_html, md[:mdIndex], fullMd))
                            md = md[mdIndex:]
                        if listCount >= olCount+ulCount:
                            addTo = self.ending
        return super().__init__(parent, children, html, md, fullMd)

    def __contentInit(self, soup, html, headNum, parentHeadNum, md, fullMd):
        block_titles = soup.find_all("h"+str(headNum))
        beginIndex = html.find("</h"+str(parentHeadNum)+">")+5
        endIndex = html.find("<h"+str(headNum))
        open_html = html[beginIndex:endIndex].strip()
        mdIndex = getMatchingMd(open_html, md, fullMd)
        self.opening = structuralize(self, open_html, md[:mdIndex], fullMd)
        md = md[mdIndex:]
        beginIndex = endIndex
        endIndex = html[beginIndex+3:].find("<h"+str(headNum))
        children = []
        while endIndex != -1:
            block_html = html[beginIndex:beginIndex+endIndex+3].strip()
            md_index = getMatchingMd(block_html, md, fullMd)
            children.append(Block(self, block_html, headNum, md[:md_index], fullMd))
            md = md[md_index:]
            beginIndex += endIndex+3
            endIndex = html[beginIndex+3:].find("<h"+str(headNum))
        children.append(Block(self, html[beginIndex:].strip(), headNum, md, fullMd))
        return children

    def getKeywords(self):
        if self.keywords == None:
            titleKeys = self.title.getKeywords()
            for key in titleKeys.keys():
                titleKeys[key] = titleKeys[key]*titleMul
            openingKeysList = [a.getKeywords() for a in self.opening if len(a.getKeywords())>0]
            openingKeys = {}
            for li in openingKeysList:
                for k,v in li.items():
                    try:
                        openingKeys[k] += v*openingMul
                    except KeyError:
                        openingKeys[k] = v*openingMul
            childrenKeys = super().getKeywords()
            for key in childrenKeys.keys():
                childrenKeys[key] = childrenKeys[key]*childMul
            endingKeysList = [a.getKeywords() for a in self.ending if len(a.getKeywords())>0]
            endingKeys = {}
            for li in endingKeysList:
                for k,v in li.items():
                    try:
                        endingKeys[k] += v*endingMul
                    except KeyError:
                        endingKeys[k] = v*endingMul
            keysList = []
            if len(titleKeys) > 0:
                keysList.append(titleKeys)
            if len(openingKeysList) > 0:
                keysList.append(openingKeys)
            if len(childrenKeys) > 0:
                keysList.append(childrenKeys)
            if len(endingKeysList) > 0:
                keysList.append(endingKeys)
            self.keywords = {}
            for list in keysList:
                for k,v in list.items():
                    try:
                        self.keywords[k] += v
                    except KeyError:
                        self.keywords[k] = v
        return self.keywords

class Steps(ArticleNode):
    def __init__(self, parent, html, md, fullMd):
        soup = BeautifulSoup(html, "html.parser")
        children = []
        for li in soup.contents:
            try:
                if li.name == "li":
                    li_html = "".join([str(x).strip() for x in li.contents])
                    mdIndex = getMatchingMd(li_html, md, fullMd)
                    children.append(ListItem(self, li_html, md[:mdIndex], fullMd))
                    md = md[mdIndex:]
            except KeyError:
                pass
        return super().__init__(parent, children, html, md, fullMd)

class UnorderList(ArticleNode):
    def __init__(self, parent, html, md, fullMd):
        soup = BeautifulSoup(html, "html.parser")
        children = []
        for li in soup.contents:
            try:
                if li.name == "li":
                    li_html = "".join([str(x).strip() for x in li.contents])
                    mdIndex = getMatchingMd(li_html, md, fullMd)
                    children.append(ListItem(self, li_html, md[:mdIndex], fullMd))
                    md = md[mdIndex:]
            except KeyError:
                pass
        return super().__init__(parent, children, html, md, fullMd)

class ListItem(ArticleNode):
    def __init__(self, parent, html, md, fullMd):
        soup = BeautifulSoup(html, "html.parser")
        if len(soup.find_all("p")) > 0 or len(soup.find_all("ul")) > 0 or len(soup.find_all("ol")) > 0:
            children = structuralize(self, html, md, fullMd)
        else:
            children = []
            for sentence in sentenceTokenizer.tokenize(html):
                mdIndex = getMatchingMd(sentence, md, fullMd)
                children.append(Sentence(self, sentence, md[:mdIndex], fullMd))
                md = md[mdIndex:]
        return super().__init__(parent, children, html, md, fullMd)

class BlockQuote(ArticleNode):
    def __init__(self, parent, html, md, fullMd):
        soup = BeautifulSoup(html, "html.parser")
        if len(soup.find_all("p")) > 1 or len(soup.find_all("ul")) > 0 or len(soup.find_all("ol")) > 0:
            children = structuralize(self, html, md, fullMd)
        else:
            children = [Paragraph(self, "".join([str(x).strip() for x in soup.p.contents]), md, fullMd)]
        return super().__init__(parent, children, html, md, fullMd)

class Paragraph(ArticleNode):
    def __init__(self, parent, html, md, fullMd):
        if html.count("|")>=4:
            table = "<table>\n"
            lines = html.split("\n")
            for line in lines:
                line = line.strip()
                if line[0] == "|":
                    line = line[1:]
                if line[len(line)-1] == "|":
                    line = line[:len(line)-1]
                tds = line.split("|")
                tr = "<tr>"
                for td in tds:
                    tr += "<td> "+td+"</td>"
                tr += "</tr>"
                table += tr
            html = table+"</table>"
        soup = BeautifulSoup(html, "html.parser")
        if len(soup.find_all("table")) > 0 or len(soup.find_all("ul")) > 0 or len(soup.find_all("ol")) > 0:
            children = structuralize(self, html, md, fullMd)
        else:
            sent = sentenceTokenizer.tokenize(html)
            children = []
            for sentence in sent:
                mdIndex = getMatchingMd(sentence, md, fullMd)
                children.append(Sentence(self, sentence, md[:mdIndex], fullMd))
                md = md[mdIndex:]
        return super().__init__(parent, children, html, md, fullMd)

class Table(ArticleNode):
    def __init__(self, parent, html, md, fullMd):
        soup = BeautifulSoup(html, "html.parser")
        children = []
        md = md.strip()
        lines = md.split("\n")
        for i in range(0,len(soup.contents)):
             if "".join([str(x).strip() for x in soup.contents[i].contents])!="":
                children.append(Sentence(self, soup.contents[i].get_text("; ", strip=True), lines[i], fullMd))
        return super().__init__(parent, children, html, md, fullMd)

class Sentence(ArticleNode):
    def __init__(self, parent, html, md, fullMd):
        soup = BeautifulSoup(html, "html.parser")
        text = soup.get_text(" ", strip=True)
        if text != "":
            self.terms = run(text)
        else:
            self.terms = {}
        return super().__init__(parent, [], html, md, fullMd)

    def getKeywords(self):
        return self.terms

class Code(ArticleNode):
    def __init__(self, parent, html, md, fullMd):
        return super().__init__(parent, [], html, md, fullMd)

    def getKeywords(self):
        return {}

def structuralize(parent, html, md, fullMd):
    soup = BeautifulSoup(html, "html.parser")
    l = len(soup.contents)
    if l == 0:
        return []
    elif l == 1:
        if soup.contents[0].name == "ol":
            return [Steps(parent, "".join([str(x).strip() for x in soup.ol.contents]), md, fullMd)]
        elif soup.contents[0].name == "ul":
            return [UnorderList(parent, "".join([str(x).strip() for x in soup.ul.contents]), md, fullMd)]
        elif soup.contents[0].name == "li":
            return [ListItem(parent, "".join([str(x).strip() for x in soup.li.contents]), md, fullMd)]
        elif soup.contents[0].name == "p":
            return [Paragraph(parent, "".join([str(x).strip() for x in soup.p.contents]), md, fullMd)]
        elif soup.contents[0].name == "table":
            return [Table(parent, "".join([str(x).strip() for x in soup.table.contents]), md, fullMd)]
        elif soup.contents[0].name == "pre":
            return [Code(parent, "".join([str(x).strip() for x in soup.pre.contents]), md, fullMd)]
        elif soup.contents[0].name == "blockquote":
            return [BlockQuote(parent, "".join([str(x).strip() for x in soup.blockquote.contents]), md, fullMd)]
        else:
            return [Sentence(parent, html, md, fullMd)]
    else:
        part = Article(html, md, fullMd)
        part.opening.extend(part.children)
        return part.opening


