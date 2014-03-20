TOR Url:
http://process.gprocurement.go.th/egp2procmainWeb/servlet/FPRO9951BServlet?projectId='+projectId+'&itemNo='+itemNo+'&fileName='+fileName

ประกาศเชิญชวน
http://process.gprocurement.go.th/egp2procmainWeb/jsp/procsearch.sch?pid=57035080717&servlet=gojsp&proc_id=ShowHTMLFile&processFlows=Procure

Simple Search
http://process.gprocurement.go.th/egp2procmainWeb/jsp/public_announ_search.jsp?"+
"announcetype="+temp_type+"&"+"deptsubid="+encode(document.getElementById('EGP_ProcHomeSearchPortletAgency').value)+"&province="+document.getElementById('EGP_ProcHomeSearchPortletProvince').value+"&homeflag="+item+"&proc_id=public_proc_search";


function egpProSearchSubmit(item){
		//alert();
		var temp_type = document.getElementById('EGP_ProcHomeSearchPortletTypeOfAnnoucne').value;
		if(item=="S"){
			if(temp_type == "0"){
				alert("E1001: โปรดบันทึกประเภทประกาศ");
			}
			else{
				//document.EGP_SPSUBMIT_Form.announcetype.value = temp_type
				//document.EGP_SPSUBMIT_Form.deptsubid.value = //document.getElementById('').value;
				//document.EGP_SPSUBMIT_Form.province.value = //document.getElementById('').value;
				//document.EGP_SPSUBMIT_Form.homeflag.value = item;
				//document.EGP_SPSUBMIT_Form.action = "http://process.gprocurement.go.th/egp2procmainWeb/jsp/public_proc_search.jsp?";
				//document.EGP_SPSUBMIT_Form.action = "http://process.gprocurement.go.th/egp2procmainWeb/servlet/FPRO9952BServlet?"+
				//"announcetype="+temp_type+"&"+"deptsubid="+encode(document.getElementById('').value)+"&province="+document.getElementById('EGP_ProcHomeSearchPortletProvince').value+"&homeflag="+item+"&proc_id=public_proc_search";
				//document.EGP_SPSUBMIT_Form.action = "http://process.gprocurement.go.th/egp2procmainWeb/jsp/public_announ_search.jsp?"+
				"announcetype="+temp_type+"&"+"deptsubid="+encode(document.getElementById('EGP_ProcHomeSearchPortletAgency').value)+"&province="+document.getElementById('EGP_ProcHomeSearchPortletProvince').value+"&homeflag="+item+"&proc_id=public_proc_search";

				var src = document.EGP_SPSUBMIT_Form.action = "http://process.gprocurement.go.th/egp2procmainWeb/jsp/public_announ_search.jsp?"+
				"announcetype="+temp_type+"&"+"deptsubid="+encode(document.getElementById('EGP_ProcHomeSearchPortletAgency').value)+"&province="+document.getElementById('EGP_ProcHomeSearchPortletProvince').value+"&homeflag="+item+"&proc_id=public_proc_search";

				my_window = window.open (src,"_self","status=1,width=810,height=800,resizable=yes,scrollbars=yes,menubar=yes");

				my_window.moveTo(0,0)
				//document.EGP_SPSUBMIT_Form.submit();
			}
	}
	else{
		/*document.EGP_SPSUBMIT_Form.announcetype.value = temp_type;
		document.EGP_SPSUBMIT_Form.deptsubid.value = document.getElementById('').value;
		document.EGP_SPSUBMIT_Form.province.value = document.getElementById('').value;*/
		document.EGP_SPSUBMIT_Form.homeflag.value = item;
		document.EGP_SPSUBMIT_Form.action = "http://process.gprocurement.go.th/egp2procmainWeb/jsp/public_announ_search.jsp?";
		document.EGP_SPSUBMIT_Form.submit();
	}
} 

function chkProject(projectId,templateType,announceFlag,itemNo,seqNo){
	var f1 = document.form1;
	f1.target = "_blank";
	// f1.action = "procsearch.sch?servlet=gojsp&proc_id=ShowHTMLFile&processFlows=Procure";
	f1.action = "procsearch.sch?pid="+projectId+"&servlet=gojsp&proc_id=ShowHTMLFile&processFlows=Procure";// Update By Prasert
	f1.pass.value = "F";
	f1.projectId.value = projectId;
	f1.templateType.value = templateType;
	f1.temp_Announ.value = announceFlag;
	f1.temp_itemNo.value = itemNo;
	f1.seqNo.value = seqNo;
	f1.submit();
	f1.target = "_self";
} 

function pageNext(showBegin,showEnd,pageGroup){
	var f1 = document.form1;
	f1.govStatus.value = "S";
	f1.announceType.value = "2";
	f1.budgetYear.value = "";
	f1.deptId.value = "";
	f1.deptSubId.value = "";
	f1.moiId.value = "100000";
	f1.methodId.value = "";
	f1.typeId.value = "";
	f1.project_id.value = "";
	f1.projectName.value = "";
	f1.announceSDate.value = "";
	f1.announceEDate.value = "";
	f1.projectMoneyS.value = "";
	f1.projectMoneyE.value = "";
	f1.projectStatus.value = "";
	f1.beginrec.value = showBegin;
	f1.endrec.value = showEnd;
	f1.grouppage.value = pageGroup;
	f1.homeflag.value = "S";
		f1.servlet.value = "FPRO9965Servlet";
	f1.proc_id.value = "FPRO9965";
	f1.mode.value = "SEARCH";
	f1.action="procsearch.sch";
	f1.submit();
	}

function chklink(
			projectId,
			deptSubId,
			methodId,
			typeId,
			projectName,
			budgetYear,
			projectMoney,
			projectStatus,
			announDate,
			govStatus,
			announceType,
			moiId,
			itemNo,
			seqNo
			){
	var f1 = document.form1;
	f1.servlet.value = "FPRO9965Servlet";
	if(methodId=="01"||methodId=="04"||methodId=="05"||methodId=="08"||methodId=="10"||methodId=="13"){
	//f1.proc_id.value = "FPRO9965_2";
	//f1.mode.value = "LINK_I_IMPORTANT";
	f1.proc_id.value = "FPRO9965_1";
	f1.mode.value = "LINK";
	}else{
	f1.proc_id.value = "FPRO9965_1";
	f1.mode.value = "LINK";
	}
	f1.temp_projectId.value = projectId;
	f1.temp_deptSubId.value = deptSubId;
	f1.temp_methodId.value = methodId;
	f1.temp_typeId.value = typeId;
	f1.temp_projectName.value = projectName;
	f1.temp_budgetYear.value = budgetYear;
	f1.temp_projectMoney.value = projectMoney;
	f1.temp_projectStatus.value = projectStatus;
	f1.temp_announDate.value = announDate;
	f1.temp_govStatus.value = govStatus;
	f1.temp_announType.value = announceType;
	f1.temp_moiId.value = moiId;
	if(announceType == "BOQ"){
	f1.temp_itemNo.value = "0";
	}else{
	f1.temp_itemNo.value = itemNo;
	}
	f1.seqNo.value = seqNo;
	f1.action="procsearch.sch";
	f1.submit();
} 
/*URL search by province*/
http://process.gprocurement.go.th/egp2procmainWeb/jsp/public_announ_search.jsp?announcetype=ประเภทประกาศ&deptsubid=&province=รหัสจังหวัด&homeflag=S&proc_id=public_proc_search

/*URL serach by project*/
http://process.gprocurement.go.th/egp2procmainWeb/jsp/procsearch.sch?pid=57035007205&servlet=gojsp&proc_id=ShowHTMLFile&processFlows=Procure

/*Onclick Proj*/
Owner_name_phone	ÊÓ¹Ñ¡ÁÒµÃ°Ò¹¡ÒÃ¨Ñ´«×éÍ¨Ñ´¨éÒ§ÀÒ¤ÃÑ° (ÊÁ¨.) ¡ÃÁºÑ­ªÕ¡ÅÒ§ â·Ã.02-127-7000 µèÍ 6951 - 6959
announceEDate	
announceSDate	
announceType	2
beginrec	
budgetYear	
deptId	
deptSubId	
endrec	
flag	
flowHidden	
govStatus	
grouppage	
homeflag	S
ipaddress	61.91.110.202
methodId	
mode	
moiId	100000
pageNo	
pass	F
prevpage	
proc_id	FPRO9965
proc_name	Procure
processFlows	Procure
projectId	57035196035
projectMoneyE	
projectMoneyS	
projectName	
projectStatus	
project_id	
retmenu	
seqNo	0
servlet	FPRO9965Servlet
startindexloop	
temp_Announ	A
temp_announDate	
temp_announType	
temp_budgetYear	
temp_deptSubId	
temp_govStatus	
temp_itemNo	0
temp_methodId	
temp_moiId	
temp_projectId	
temp_projectMoney	
temp_projectName	
temp_projectStatus	
temp_typeId	
templateType	D2
typeId	
url