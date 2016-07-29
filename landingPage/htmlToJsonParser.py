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
    soup.at
    group_i = 0
    group_children = list(list(soup.children)[0].children)
    for child in group_children[:len(group_children)-2]:
        if str(child) == ' ':
            continue
        group = {}
        li = list(child.children)
        a = li[1]
        group["group"]=a.contents[0]
        group["id"] = "left_nav_first_level_"+service_id+"_"+str(group_i)
        ul = li[3]
        articles = []
        article_i = 0
        for gantchild in ul.children:
            if str(gantchild) == ' ':
                continue
            article = {}
            article_a = list(gantchild.children)[1]
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