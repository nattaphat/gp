#!/usr/bin/python
# -*- coding: utf-8 -*-

from bs4 import BeautifulSoup
import os
import pycurl

def getDefp():
	url = '/data/html/www/haii/gprocument/dept.txt'
	tmp = '/data/html/www/haii/gprocument/tpm_dep.txt'
	command ="awk -v lines=1 '/clickDept/ {for(i=lines;i;--i)getline; print $0 }' "+url+" > "+tmp;

	os.system(command)
	f = open(tmp, 'r')
	for line in f:
		if "clickDept" in line:
			arr_line = line.split(" ")
			org_code = arr_line[1].split("('")[1].split("'")[0]
			org_name = arr_line[2].split(">")[1].split("<")[0]

			print org_name

def curlText():
	c = pycurl.Curl()
	c.setopt(c.URL, 'http://myappserver.com/ses1')
	c.setopt(c.CONNECTTIMEOUT, 5)
	c.setopt(c.TIMEOUT, 8)
	c.setopt(c.POSTFIELDS, 'pizza=Quattro+Stagioni&extra=cheese')
	c.setopt(c.COOKIEFILE, '')
	c.setopt(c.FAILONERROR, True)
	c.setopt(c.HTTPHEADER, ['Accept: text/html', 'Accept-Charset: UTF-8'])
	try:
	    c.perform()
	 
	    c.setopt(c.URL, 'http://myappserver.com/ses2')
	    c.setopt(c.POSTFIELDS, 'foo=bar&bar=foo')
	    c.perform()
	except pycurl.error, error:
	    errno, errstr = error
	    print 'An error occurred: ', errstr
getDefp()


