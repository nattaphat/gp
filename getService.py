#!/usr/bin/env python
# -*- coding: utf-8 -*-

# from bs4 import BeautifulSoup
from BeautifulSoup import BeautifulSoup
import urllib2
import urllib
import os
import re
import psycopg2
import psycopg2.extensions


class proCument:
	def __init__(self):
		self.mainUrl = "http://www.gprocurement.go.th/wps/portal/index_EGP"
		self.type_province_url = "http://process.gprocurement.go.th/egp2procmainWeb/jsp/procsearch.sch"
		self.path_temp = "/tmp/"
		self.userdb = "moac"
		self.dbname = "gprocurement"
		self.passwd = "moac8367"
		self.host = "localhost"

	def insertTypeNoticeAndProvince(self):
		html = self.mainUrl

		try: 		
			u  = urllib2.urlopen(html)
			text = u.read()

		except Exception,e:
			print(e)
		#write src to file
		tmp_file = open(self.path_temp+'gmain_src.txt','w')
		tmp_file.write(text)
		command1='cat '+self.path_temp+'gmain_src.txt | grep "option value=" >'+self.path_temp+'gmain_option.txt'
		os.system(command1)

		#read file
		command_read = open(self.path_temp+'gmain_option.txt','r')
		
		#connect db
		try:
			conn = psycopg2.connect("dbname='"+self.dbname+"' user='"+self.userdb+"' host='"+self.host+"' password='"+self.passwd+"'")
		except:
			print "I am unable to connect to the database"

		cur = conn.cursor()

		for line in command_read:

			number = re.findall(r'\d+', line)
			id_convert = ''.join(number)
			if id_convert !='' and len(id_convert) > 3:
				# print id_convert
				# print line.split("<")[1].split(">")[1]
			 	title = line.split("<")[1].split(">")[1]
			 	cur.execute("INSERT INTO gp_province (id,title) VALUES(%s,%s);",(id_convert,title))
			
			if id_convert != '' and len (id_convert) < 3 and id_convert != '0':
				# print id_convert
				# print line.split("<")[1].split(">")[1]
				title = line.split("<")[1].split(">")[1]
				cur.execute("INSERT INTO gp_notice (id,title) VALUES(%s,%s);",(id_convert,title))

		conn.commit()
		print "complete !"

	def insertNoticeByProvince(self):
		url = self.type_province_url
		# try: 		
		# 	u  = urllib2.urlopen(url)
		# 	text = u.read()

		# except Exception,e:
		# 	print(e)

		#################################### First page
		http_header = {
			"User-Agent" : "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.46 Safari/535.11",
			"Accept" : "text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,text/png,*/*;q=0.5",
			"Accept-Language" : "en-us,en;q=0.5",
			"Accept-Charset" : "ISO-8859-1",
			"Content-type": "application/x-www-form-urlencoded",
			"Host" : "www.mitfahrgelegenheit.de",
			"Referer" : "http://www.mitfahrgelegenheit.de/mitfahrzentrale/Dresden/Potsdam.html/"
		}
		#moiId --> province id
		params = {
			'announceType':'2',
			'deptSubId':'',
			'moiId':'100000',
			'mode':'',
			'servlet':'FPRO9965Servlet',
			'proc_id':'FPRO9965',
			'processFlows':'Procure',
			'proc_name':'Procure',
			'retmenu':'',
			'homeflag':'S'
		}

		##################################################### Wirte First page to file
		# data = urllib.urlencode(params)
		# req = urllib2.Request(url=url,data=data)
		# content = urllib2.urlopen(req).read()

		# tmp_file = open(self.path_temp+'gpconent_src.txt','w')
		# tmp_file.write(content.decode('cp874').encode('utf-8'))


		#################################################### Read file and Extract
		navy_read = open(self.path_temp+'gpconent_src.txt','r')
		soup = BeautifulSoup(navy_read)
		rs =  soup.findAll('tr',{'id':re.compile('^trDetail')})

		line = [td.findAll('td') for td in rs]
		print line

		################################################### Load data from Next page
		#moiId --> province id
		""" 
		Page1 : none
		Page2 : [showBegin:51,showEnd:101,pageGroup:2] contain 50 rows
		Page3 : [101,201,3] contain 50 rows
		Page4 : [201,251,4] contain 50 rows
		"""
		params_nextpage = {
			'govStatus':'S',
			'announceType':'2',
			'budgetYear':'',
			'deptId':'',
			'deptSubId':'',
			'moiId':'100000',
			'methodId':'',
			'typeId':'',
			'project_id':'',
			'projectName':'',
			'announceSDate':'',
			'announceEDate':'',
			'projectMoneyS':'',
			'projectMoneyE':'',
			'projectStatus':'',
			'beginrec':'51',
			'endrec' : '101',
			'grouppage' : '2',
			'homeflag' :"S",
			'servlet' : "FPRO9965Servlet",
			'proc_id' : "FPRO9965",
			'mode' : "SEARCH"
		}
	
		#print content.decode('cp874')
		#print 'complete !'

pg = proCument()
# pg.insertTypeNoticeAndProvince()
pg.insertNoticeByProvince()