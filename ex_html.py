#!/usr/bin/python
# -*- coding: utf-8 -*-

# from bs4 import BeautifulSoup
import os
import pycurl

def getDefp():
	url = '/tmp/dept.txt'
	tmp = '/tmp/tpm_dep.txt'
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
	url = "https://process.gprocurement.go.th/EGPWeb/jsp/control.egp"
	c = pycurl.Curl()
	c.setopt(c.URL, url)
	c.setopt(c.CONNECTTIMEOUT, 5)
	c.setopt(c.TIMEOUT, 8)
	c.setopt(c.USERAGENT, '')#'Foo\xa9'.encode('iso-8859-1'))
	c.setopt(c.POSTFIELDS, 'ORG_ID=1&ORG_NAME=1&ORG_UNIT_ID=2&ORG_UNIT_NAME=&QUERY=&PROV_ID=&AMP_ID=&MOI_ID=&MINISTRY_CODE=&flag=SEARCH&servlet=gojsp&proc_id=FAGN0103H&proc_name=Agency&url=agc%2F&hidPROV_ID=&hidAMP_ID=&hidMOI_ID=&hidMINIS_ID=')
	c.setopt(c.COOKIEFILE, '')
	c.setopt(c.FAILONERROR, True)
	c.setopt(c.HTTPHEADER, ['Content-type: application/x-www-form-urlencoded;charset=tis-620'])

	try:
	    # c.perform()
	 
	    # c.setopt(c.URL, 'http://myappserver.com/ses2')
	    # c.setopt(c.POSTFIELDS, 'foo=bar&bar=foo')
	    c.perform()
	except pycurl.error, error:
	    errno, errstr = error
	    print 'An error occurred: ', errstr

# getDefp()
curlText()
