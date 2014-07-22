#!/usr/bin/python
# -*- coding: utf-8 -*-

# from bs4 import BeautifulSoup
import os
import pycurl
import urllib2

def getDefp():
	url = '/data/html/www/haii/gprocument/test.txt'
	tmp = '/tmp/tpm_dep.txt'
	command ="awk -v lines=1 '/clickDept/ {for(i=lines;i;--i)getline; print $0 }' "+url+" > "+tmp;

	os.system(command)
	f = open(tmp, 'r')
	for line in f:
		if "clickDept" in line:
			line = line.decode('ISO-8859-11','ignore').encode('utf-8')
			arr_line = line.split(" ")
			arr_name = line.split(" ")
			org_code = arr_line[2].split("('")[1].split("'")[0]
			if arr_line[2].__contains__('">') == 1:
				# print 'True'
				org_name = arr_line[2].split(">")[1].split("<")[0]

			print org_name

def getOrgUnitInfo():
	# url = "https://process.gprocurement.go.th/EGPWeb/jsp/agc/FAGN0103A.jsp?MODE=1&ORG_ID=1&ORG_UNIT_ID=1&DEPT_ID=0114"
	# response = urllib2.urlopen(url)
	# html = response.read().decode('ISO-8859-11','ignore').encode('utf-8')
	# data = html.replace('\n','')
	data = "1^สถาบันสารสนเทศทรัพยากรน้ำและการเกษตร (องค์การมหาชน)|D|1912|เลขที่ 108 อาคารบางกอกไทยทาวเวอร์ ชั้น 8 ถนนรางน้ำ|103702|10400|0-2642-7132|0-2642-7133|test@haii.or.th||_|"
	arr_data = data.split('|')
	org_name = arr_data[0].split('^')[1]
	org_code = arr_data[2]
	org_add = arr_data[3]
	org_geocode = arr_data[4]
	
	if len(org_geocode) == 6:
		org_prov_code = org_geocode[:2]
		org_amp_code = org_geocode[2:-2]
		org_tam_code = org_geocode[-2:]

	elif len(org_geocode) == 4:
		org_prov_code = org_geocode[:2]
		org_amp_code = org_geocode[2:-2]
		org_tam_code = ""
	else :
		org_prov_code = org_geocode[:2]
		org_amp_code = ""
		org_tam_code = ""

	org_post = arr_data[5]
	org_tel = arr_data[6]
	org_fax = arr_data[7]
	org_email = arr_data[8]

def curlText():
	url = "https://process.gprocurement.go.th/EGPWeb/jsp/control.egp"
	
	with open('test.txt', 'wb') as f:
		c = pycurl.Curl()
		c.setopt(c.URL, url)
		c.setopt(c.WRITEDATA, f)
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
			content = c.perform()
		except pycurl.error, error:
		    errno, errstr = error
		    print 'An error occurred: ', errstr

def testReadFile():
	f = open('test.txt');

	for line in f:
		print line.decode('ISO-8859-11','ignore').encode('utf-8')

# getDefp()
# curlText()
# testReadFile()
getOrgUnitInfo()