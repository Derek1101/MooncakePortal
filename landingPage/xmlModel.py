from dexml import fields, Model
import json
from xml.dom.minidom import parseString
import re

docLinkReg = "/documentation/articles/([^/]+)/?"

class Second_level_nav(Model):
    name = fields.String(tagname="name")
    link = fields.String(tagname="link")
    article_name = fields.String(tagname="article-name")
    id = fields.String(tagname="id")
    class meta:
        tagname = "second-level-nav"

class First_level_nav(Model):
    name = fields.String()
    id = fields.String()
    second_level_navs = fields.List(Second_level_nav)
    class meta:
        tagname = "first-level-nav"

class Left_nav(Model):
    service_name = fields.String(tagname="service-name")
    first_level_navs = fields.List(First_level_nav)
    class meta:
        tagname = "left-nav"

def parseJsonToXml(jsonStr):
    navigation = json.loads(jsonStr)
    left_nav = Left_nav(service_name=navigation["service"])
    for group in navigation["navigation"]:
        first_level_nav = First_level_nav(name=group["group"], id=group["id"])
        for article in group["articles"]:
            second_level_nav = Second_level_nav(name=article["title"], link=article["link"], id=article["id"], article_name=__getArticleNameByLink(article["link"]))
            first_level_nav.second_level_navs.append(second_level_nav)
        left_nav.first_level_navs.append(first_level_nav)
    return parseString(left_nav.render(encoding="utf-8")).toprettyxml(encoding="utf-8")


def __getArticleNameByLink(link):
    result = re.findall(docLinkReg, link)
    if len(result) == 0:
        return "#"
    return result[0]
