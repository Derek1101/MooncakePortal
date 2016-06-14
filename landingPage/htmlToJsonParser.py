FIRST_LEVEL_SPLIT_PATTERN = '(\<li [^\>|^\<]*\> \<a [^\>|^\<]*\>[^\>|^\<]+\<\/a\> \<ul [^\>|^\<]*\> (\<li\> \<a [^\>|^\<]*\>[^\>|^\<]+\<\/a\> \<\/li\> )+\<\/ul\> \<\/li\>)+'

SECOND_LEVEL_REG = r'^\<li [^\>|^\<]*\> \<a [^\>|^\<]*ms\.cmpnm="(?P<groupID>[^\>|^\<|^"]*)"[^\>|^\<]*\>(?P<groupName>[^\>|^\<]+)\<\/a\>.+'

SECOND_LEVEL_SPLIT_PATTERN = '(\<li\> \<a [^\>|^\<]*\>[^\>|^\<]+\<\/a\> \<\/li\>)+'

THIRD_LEVEL_REG = r'^\<li\> \<a [^\>|^\<]*(href="(?P<link>[^\>|^\<|^"]*)"[^\>|^\<]*ms\.cmpnm="(?P<articleID>[^\>|^\<|^"]*)"|ms\.cmpnm="(?P<articleID2>[^\>|^\<|^"]*)"[^\>|^\<]*href="(?P<link2>[^\>|^\<|^"]*)")[^\>|^\<]*\>(?P<articleTitle>[^\>|^\<]+)\<\/a\> \<\/li\>$'

import re
import json

def navigationParse(line, service_name, service_id):
    navigationJson = {}
    navigationJson["service"]= service_name;

    firstLevelList = re.findall(FIRST_LEVEL_SPLIT_PATTERN, line)
    navigationJson["id"]= service_id

    navigation = []
    for l in firstLevelList:
        m = re.match(SECOND_LEVEL_REG, l[0].strip())
        dict = m.groupdict()
        group = {}
        group["group"] = dict["groupName"]
        group["id"] = dict["groupID"]

        secondLevelList = re.findall(SECOND_LEVEL_SPLIT_PATTERN, l[0].strip())
        articles = []
        for articleL in secondLevelList:
            print(articleL)
            m2 = re.match(THIRD_LEVEL_REG, articleL)
            dict = m2.groupdict()
            article = {}
            if dict["link"]:
                article["link"] = dict["link"]
            else:
                article["link"] = dict["link2"]
            if dict["articleID"]:
                article["id"] = dict["articleID"]
            else:
                article["id"] = dict["articleID2"]
            article["title"] = dict["articleTitle"]
            articles.append(article)
        
        group["articles"] = articles
        navigation.append(group)

    navigationJson["navigation"] = navigation
    return json.dumps(navigationJson).encode('utf-8').decode("unicode-escape")