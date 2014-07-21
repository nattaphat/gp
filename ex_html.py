#!/usr/bin/python
# -*- coding: utf-8 -*-

from bs4 import BeautifulSoup
import os
import re

url = '/data/html/www/haii/gprocument/dept.txt'
tmp = '/data/html/www/haii/gprocument/tpm_dep.txt'
command ="awk -v lines=1 '/clickDept/ {for(i=lines;i;--i)getline; print $0 }' "+url+" > "+tmp;
# print command

os.system(command)
f = open(tmp, 'r')
for line in f:
	if "clickDept" in line:
		arr_line = line.split(" ")
		org_code = arr_line[1].split("('")[1].split("'")[0]
		org_name = arr_line[2].split(">")[1].split("<")[0]
		print org_name


