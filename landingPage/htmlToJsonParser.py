FIRST_LEVEL_SPLIT_PATTERN = '(\<li [^\>|^\<]*\> \<a [^\>|^\<]*\>[^\>|^\<]+\<\/a\> \<ul [^\>|^\<]*\> (\<li\> \<a [^\>|^\<]*\>[^\>|^\<]+\<\/a\> \<\/li\> )+\<\/ul\> \<\/li\>)+'

SECOND_LEVEL_REG = r'^\<li [^\>|^\<]*\> \<a [^\>|^\<]*ms\.cmpnm="(?P<groupID>[^\>|^\<|^"]*)"[^\>|^\<]*\>(?P<groupName>[^\>|^\<]+)\<\/a\>.+'

SECOND_LEVEL_SPLIT_PATTERN = '(\<li\> \<a [^\>|^\<]*\>[^\>|^\<]+\<\/a\> \<\/li\>)+'

THIRD_LEVEL_REG = r'^\<li\> \<a [^\>|^\<]*(href="(?P<link>[^\>|^\<|^"]*)"[^\>|^\<]*ms\.cmpnm="(?P<articleID>[^\>|^\<|^"]*)"|ms\.cmpnm="(?P<articleID2>[^\>|^\<|^"]*)"[^\>|^\<]*href="(?P<link2>[^\>|^\<|^"]*)")[^\>|^\<]*\>(?P<articleTitle>[^\>|^\<]+)\<\/a\> \<\/li\>$'

import re
import json
import bs4

def navigationParse(line, service_name, service_id):
    navigationJson = {}
    navigationJson["service"]= service_name;
    navigationJson["id"]= "left_nav_top_level_"+service_id
    navigation = []
    soup = bs4.BeautifulSoup(line, "html.parser")
    group_i = 0
    group_children = [x for x in soup.find("ul").children if x.name=="li"]
    for child in group_children:
        group = {}
        a = child.find("span")
        group["group"]=a.contents[0]
        group["id"] = "left_nav_first_level_"+service_id+"_"+str(group_i)
        ul = child.find("ul")
        ul_children = [x for x in ul.children if x.name=="li"]
        articles = []
        article_i = 0
        for gantchild in ul_children:
            article = {}
            article_a = list(gantchild.children)[0]
            article["title"] = article_a.contents[0]
            article["id"] = "left_nav_second_level_"+service_id+"_"+str(group_i)+"_"+str(article_i)
            article["link"] = article_a.attrs["href"]
            articles.append(article)
            article_i+=1
        group_i+=1
        group["articles"]=articles
        navigation.append(group)
    navigationJson["navigation"] = navigation
    return json.dumps(navigationJson).encode('utf-8').decode("unicode-escape")