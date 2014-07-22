#!/usr/bin/python
# -*- coding: utf-8 -*-

# from bs4 import BeautifulSoup
import os
import pycurl
import urllib2

def getDefp(filename,org_id,org_unit_id):
	# url = '/data/html/www/haii/gprocument/test.txt'
	directory = os.getcwd()+'/dept_raw/temp_dep_'+org_id+'_'+org_unit_id+'.txt'
	# tmp = '/tmp/tpm_dep.txt'
	
	command ="awk -v lines=1 '/clickDept/ {for(i=lines;i;--i)getline; print $0 }' "+filename+" > "+directory;

	os.system(command)
	f = open(directory, 'r')
	for line in f:
		if "clickDept" in line:
			line = line.decode('ISO-8859-11','ignore').encode('utf-8')
			arr_line = line.split(" ")
			arr_name = line.split(" ")
			org_code = arr_line[2].split("('")[1].split("'")[0]
			if arr_line[2].__contains__('">') == 1:
				# print 'True'
				org_name = arr_line[2].split(">")[1].split("<")[0]

			getOrgUnitInfo(org_code,org_name,org_id,org_unit_id)
			# print org_name

def getOrgUnitInfo(org_code,org_name,org_id,org_unit_id):
	for_db = os.getcwd()+'/dept_raw/fordb.txt'
	url = "https://process.gprocurement.go.th/EGPWeb/jsp/agc/FAGN0103A.jsp?MODE=1&ORG_ID="+org_id+"&ORG_UNIT_ID="+org_unit_id+"&DEPT_ID="+org_code
	response = urllib2.urlopen(url)
	html = response.read().decode('ISO-8859-11','ignore').encode('utf-8')
	data = html.replace('\n','')
	# data = "1^สถาบันสารสนเทศทรัพยากรน้ำและการเกษตร (องค์การมหาชน)|D|1912|เลขที่ 108 อาคารบางกอกไทยทาวเวอร์ ชั้น 8 ถนนรางน้ำ|103702|10400|0-2642-7132|0-2642-7133|test@haii.or.th||_|"
	print data
	rs_data = data.split('^')
	if len(rs_data[1]) > 1:
		arr_data = data.split('|')
		if len(arr_data[0].split('^')[1]) > 0:
			org_subname = arr_data[0].split('^')[1]
		else:
			org_subname = ""

		if arr_data[2] is not None:
			org_code = arr_data[2]
		else:
			org_code = ""

		if len(arr_data[3]) > 0:
			org_add = arr_data[3]
		else:
			org_add =""

		if len(arr_data[4]):
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
		else:
			org_prov_code = ""
			org_amp_code = ""
			org_tam_code = ""
		
		
		if len(arr_data[5]) > 0:
			org_post = arr_data[5]
		else:
			org_post=""

		if len(arr_data[6]) > 0:
			org_tel = arr_data[6]
		else:
			org_tel = ""

		if len(arr_data[7]):
			org_fax = arr_data[7]
		else:
			org_fax =""

		if len(arr_data[8]) >0:
			org_email = arr_data[8]
		else:
			org_email=""

	rs_text = org_id+',' \
			+org_unit_id+',' \
			+org_code+',' \
			+org_name+',' \
			+org_subname+',' \
			+org_add+',' \
			+org_prov_code+',' \
			+org_amp_code+','+ \
			org_tam_code+','+ \
			org_post+','+ \
			org_tel+','+ \
			org_fax+','+ \
			org_email

	# with open("foo", "a") as f:
	# 	f.write(rs_text)

def curlText(filename,org_id,org_unit_id):
	url = "https://process.gprocurement.go.th/EGPWeb/jsp/control.egp"
	
	with open(filename, 'wb') as f:
		c = pycurl.Curl()
		c.setopt(c.URL, url)
		c.setopt(c.WRITEDATA, f)
		c.setopt(c.CONNECTTIMEOUT, 5)
		c.setopt(c.TIMEOUT, 8)
		c.setopt(c.USERAGENT, '')#'Foo\xa9'.encode('iso-8859-1'))
		c.setopt(c.POSTFIELDS, 'ORG_ID='+org_id+'&ORG_NAME=1&ORG_UNIT_ID='+org_unit_id+'&ORG_UNIT_NAME=&QUERY=&PROV_ID=&AMP_ID=&MOI_ID=&MINISTRY_CODE=&flag=SEARCH&servlet=gojsp&proc_id=FAGN0103H&proc_name=Agency&url=agc%2F&hidPROV_ID=&hidAMP_ID=&hidMOI_ID=&hidMINIS_ID=')
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

def readOrgAndUnit():
	f = open('org_org_uint.txt','rb')
	directory = os.getcwd()+'/dept_raw/';
	for line in f:
		(org_id,org_unit_id) = line.split(',')
		org_id = org_id.replace('\n','')
		org_unit_id = org_unit_id.replace('\n','')
		filename = directory+'org_orgunit_'+org_id+'_'+org_unit_id+'.txt'
		curlText(filename,org_id,org_unit_id)
		getDefp(filename,org_id,org_unit_id)
		print 'finish: '+org_id+'_'+org_unit_id
		

def testReadFile():
	# f = open('test.txt');
	# for line in f:
	# 	print line.decode('ISO-8859-11','ignore').encode('utf-8')
	data = <td>&nbsp;<a href="#" onClick="clickDept('E1508139  ')">ศูนย์พัฒนาเด็กเล็กบ้านศาลาต้นรัก</a></td>
	print data
	arr_data = data.split('^')

	print len(arr_data[1])
# getDefp()
# curlText()
# testReadFile()
# getOrgUnitInfo()
readOrgAndUnit()