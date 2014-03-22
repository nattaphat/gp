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

function showPage(start,end,page){
	this.pageNo = page;
	var startPage = start;
	var endPage = end;
	if(endPage>=this.dataSize){
		endPage=this.dataSize;
	}
	for(var i=1;i<=this.dataSize;i++){
		if(i>=startPage && i<=endPage){
			document.getElementById("trDetail"+i+"").style.display = '';
		}else{
			document.getElementById("trDetail"+i+"").style.display = 'none';
		}
	}
	showPageNum(startPage,endPage);
}

function showPageNum(startPage,endPage){
	var str ="";
	if(this.dataSize>0){
		str +="<table id=\"tableb3\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" align=\"center\">";
		str +=" <tr class=\"thfooter\">";
		str +=" <td class=\"green\" width=\"50%\" align=\"left\">&nbsp;&nbsp;ลำดับที่&nbsp;<font class=\"blue\"><b>"+(startPage+(this.dataSizeLimit*(this.pageGroup-1)))+"</b></font>&nbsp;-&nbsp;<font class=\"blue\"><b>"+(endPage+(this.dataSizeLimit*(this.pageGroup-1)))+"</b></font>&nbsp;จากทั้งหมด&nbsp;"+(this.dataSize>this.dataSizeLimit?"มากกว่า <font class=\"blue\"><b>"+((this.dataSizeLimit)*this.pageGroup)+"</b></font>":"<font class=\"blue\"><b>"+(this.dataSize+(this.dataSizeLimit*(this.pageGroup-1)))+"</b></font>")+"&nbsp;รายการ</td>";
	if(pageGroup>1){
		str +=" <td width=\"6%\" align=\"right\" class=\"green\" style=\"cursor: pointer;\" onclick=\"pagePrev("+(((this.dataSizeLimit*(this.pageGroup-1))+1)-this.dataSizeLimit)+","+((this.dataSizeLimit*(this.pageGroup-1))+1)+","+(this.pageGroup-1)+");\"><b>ย้อนกลับ</b></td>";
	}else{
		str +=" <td width=\"6%\" align=\"left\"><font color=\"#808080\">ย้อนกลับ</font></td>";
	}
	if(this.pageNo==1){
		str +=" <td id=\"tdpage2\" width=\"4%\" align=\"center\"><b><font class=\"blue\"><u>"+(((this.pageGroup*5)-5)+1)+"</u></font></b></td>";
	}else if(this.arrPage>0){
		str +=" <td id=\"tdpage2\" style=\"cursor: pointer\" class=\"blue\" onclick=\"showPage(1,10,1)\" width=\"4%\" align=\"center\">"+(((this.pageGroup*5)-5)+1)+"</td>";
	}
	if(this.pageNo==2){
		str +=" <td id=\"tdpage2\" width=\"4%\" align=\"center\"><b><font class=\"blue\"><u>"+(((this.pageGroup*5)-5)+2)+"</u></font></b></td>";
	}else if(this.arrPage>1){
		str +=" <td id=\"tdpage2\" style=\"cursor: pointer\" class=\"blue\" onclick=\"showPage(11,20,2)\" width=\"4%\" align=\"center\">"+(((this.pageGroup*5)-5)+2)+"</td>";
	}
	if(this.pageNo==3){
		str +=" <td id=\"tdpage2\" width=\"4%\" align=\"center\"><b><font class=\"blue\"><u>"+(((this.pageGroup*5)-5)+3)+"</u></font></b></td>";
	}else if(this.arrPage>2){
		str +=" <td id=\"tdpage2\" style=\"cursor: pointer\" class=\"blue\" onclick=\"showPage(21,30,3)\" width=\"4%\" align=\"center\">"+(((this.pageGroup*5)-5)+3)+"</td>";
	}
	if(this.pageNo==4){
		str +=" <td id=\"tdpage2\" width=\"4%\" align=\"center\"><b><font class=\"blue\"><u>"+(((this.pageGroup*5)-5)+4)+"</u></font></b></td>";
	}else if(this.arrPage>3){
		str +=" <td id=\"tdpage2\" style=\"cursor: pointer\" class=\"blue\" onclick=\"showPage(31,40,4)\" width=\"4%\" align=\"center\">"+(((this.pageGroup*5)-5)+4)+"</td>";
	}
	if(this.pageNo==5){
		str +=" <td id=\"tdpage2\" width=\"4%\" align=\"center\"><b><font class=\"blue\"><u>"+(((this.pageGroup*5)-5)+5)+"</u></font></b></td>";
	}else if(this.arrPage>4){
		str +=" <td id=\"tdpage2\" style=\"cursor: pointer\" class=\"blue\" onclick=\"showPage(41,50,5)\" width=\"4%\" align=\"center\">"+(((this.pageGroup*5)-5)+5)+"</td>";
	}
	if(this.arrPage>5){
		str +=" <td width=\"6%\" align=\"right\" class=\"green\" style=\"cursor: pointer;\" onclick=\"pageNext("+((this.dataSizeLimit*this.pageGroup)+1)+","+((this.dataSizeLimit*(this.pageGroup+1))+1)+","+(this.pageGroup+1)+");\"><b>ถัดไป</b></td>";
	}else{
		str +=" <td width=\"6%\" align=\"right\"><font color=\"#808080\">ถัดไป</font></td>";
	}

	str +=" </tr>";
	str +=" </table>";
	}

	document.getElementById("showPageNum").innerHTML=str;
}

function pagePrev(showBegin,showEnd,pageGroup){
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

TOR Url:
http://process.gprocurement.go.th/egp2procmainWeb/servlet/FPRO9951BServlet?projectId='+projectId+'&itemNo='+itemNo+'&fileName='+fileName

ประกาศเชิญชวน
http://process.gprocurement.go.th/egp2procmainWeb/jsp/procsearch.sch?pid=57035080717&servlet=gojsp&proc_id=ShowHTMLFile&processFlows=Procure

Simple Search
http://process.gprocurement.go.th/egp2procmainWeb/jsp/public_announ_search.jsp?"+
"announcetype="+temp_type+"&"+"deptsubid="+encode(document.getElementById('EGP_ProcHomeSearchPortletAgency').value)+"&province="+document.getElementById('EGP_ProcHomeSearchPortletProvince').value+"&homeflag="+item+"&proc_id=public_proc_search";

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


--pageNo.--
showPage(11,20,2)
showPage(21,30,3)
showPage(31,40,4)
showPage(41,50,5)


