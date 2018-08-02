/**
 * Created by hezhaozeng on 2017/6/20 0020.
 */

 
$(document).ready(function(){
  
  var ispreview=getQueryString("ispreview");
  if(ispreview){
	  preview();
  }else{
	apiGetProtocol(getQueryString("appVersion"),getQueryString("source"),getQueryString("token"),getQueryString("userid"),getQueryString("productid"));
	//console.log(getQueryString("userId"));
  }
  
});

function preview(){
	var resultJson = '{"code":0,"msg":"成功","data":{"result":{"certNo":"333321198704051111","mobile":"11134204932","memberName":"张三","bankCardNo":"6225887847097999","deadLineValue":92,"investMoney":10000,"investTime":null,"startDate":"2017-06-16 00:00:00","endDate":"2017-09-15 00:00:00","fixRate":7.50,"productName":"天添牛Plus92天170613-003","isFlow":1,"flowMinRate":0.00,"flowMaxRate":0.00,"flowFinalRate":7.50,"collectRate":1.00,"extension":{"profitCalcDateDesc":"2017-06-16","investPeriodDesc":"92天","unified_social_credit_code":"91440400MA4W75TXXD","borrower":"珠海文达通贸易有限公司","profit_way":"一次性还本付息","refundWayDesc":"一次性还本付息","collectingInterestDesc":"省心赚，募集期内享有年化1.0%收益","currentRate":"0.35","vip_product":"1","show_progress":1,"residence":"珠海市横琴新区宝华路6号105室-26437（集中办公区）","rateDesc":"7.5%","refundDateDesc":"2017-09-15"}}},"serverTime":"2017-06-13 17:52:50"}';
	var resultObj  = $.parseJSON(resultJson);
	specialHandle(resultObj.data.result);	//添加 数字金额大写、起息年月日、到期年月日
	resolveByName(resultObj.data.result);	
}

function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) 
		return unescape(r[2]); 
	return null; 
} 

function ajax(url, options, context) {
	$.ajax({
		type: "get",				
		url: url,
		data: options.data,	
		success: function(e){
			console.log(e);
			if(e.code == 0){
				options.success && options.success.call(context, e);
				return;
			}
			
			options.error && options.error.call(context, e);
		},
		error: function(e){
			console.log(e);
			options.error && options.error.call(context, e);
		}
	});	
}

/*
    *查询产品协议
*/
function apiGetProtocol(appVersion, source, token, userId, productId) {
	var options = {};
	
	//?appVersion=1.0.1&source=web&token=null&userId=null&productId=710987e9-3a9a-4456-92b3-233355808ef9
	//appVersion：	API版本
	//token：		token
	//userId：		用户ID
	//source：		来源
	//productId：	产品ID('710987e9-3a9a-4456-92b3-233355808ef9')
	options.data = {
		appVersion:appVersion,
		source:source,
		token:token,
		userId:userId,
		productId:productId
	};
	
	options.success = function (resultObj) {		
		specialHandle(resultObj.data.result);	//添加 数字金额大写、起息年月日、到期年月日
		resolveByName(resultObj.data.result);
	};
	
	options.error = function (e) {
		//alert(e.msg);
	};
	
	ajax("https://m.xiaoniuapp.com/api/product/getProtocol", options, this);
}

/*
    *页面解析
*/
function resolveByID(protocolObj) {	
	for(var p in protocolObj){
		if( typeof(protocolObj[p])=="string" || typeof(protocolObj[p])=="number" ){
			if(document.getElementById(p)){
				document.getElementById(p).innerHTML=protocolObj[p];
			}
		}else if( typeof(protocolObj[p])=="object" ){			
			if(protocolObj[p]=="null"){
				if(document.getElementById(p)){
					document.getElementById(p).innerHTML="";
				}
				continue;
			}
			resolveByID(protocolObj[p]);
		}
	}
}

/*
    *页面解析
*/
function resolveByName(protocolObj) {	
	for(var p in protocolObj){
		if( typeof(protocolObj[p])=="string" || typeof(protocolObj[p])=="number" ){
			var luckElements = document.getElementsByName(p);
			for(var i=0;i<luckElements.length;i++){
				luckElements[i].innerHTML=protocolObj[p];
			}
		}else if( typeof(protocolObj[p])=="object" ){			
			if(protocolObj[p]=="null"){
				var luckElements = document.getElementsByName(p);
				for(var i=0;i<luckElements.length;i++){
					luckElements[i].innerHTML="";
				}
				continue;
			}
			resolveByName(protocolObj[p]);
		}
	}
}


/*
    *投资金额大写
	*起息日和到期日处理
*/
function specialHandle(protocolObj){
	var investMoney = protocolObj.investMoney;
	protocolObj.investMoneyUpper=digitUppercase(investMoney);
	
	var startDate = protocolObj.startDate;
	protocolObj.startDateYear=startDate.substring(0,4);
	protocolObj.startDateMonth=startDate.substring(5,7);
	protocolObj.startDateDay=startDate.substring(8,10);
	
	var endDate = protocolObj.endDate;
	protocolObj.endDateYear=endDate.substring(0,4);
	protocolObj.endDateMonth=endDate.substring(5,7);
	protocolObj.endDateDay=endDate.substring(8,10);
}

/*
    *数字金额大写转换
    *@param {number} num 数字金额
*/
var digitUppercase = function (num) {  
  var strOutput = "";  
  var strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';  
  num += "00";  
  var intPos = num.indexOf('.');  
  if (intPos >= 0)  
    num = num.substring(0, intPos) + num.substr(intPos + 1, 2);  
  strUnit = strUnit.substr(strUnit.length - num.length);  
  for (var i=0; i < num.length; i++)  
    strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(num.substr(i,1),1) + strUnit.substr(i,1);  
    return strOutput.replace(/零角零分$/, '整').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, "零元");
};

//===============departed==================

/*
    *字符串全部替换
    *@param {String} s1 旧字符串
    *@param {String} s2 新字符串
*/
String.prototype.replaceAll = function(s1,s2){
	return this.replace(new RegExp(s1,"gm"),s2);
}

function getHost() {
	//return "https://www.qguanzi.com"; //http://10.10.16.225:9018"; //window.location.origin;
	//return http://admin.xiaoniuapp.com/admin/protocol/dict/findAll.jsonp
	return "http://admin.xiaoniuapp.com/admin";
}

function jsonp(url, options, context) {
	$.ajax({
		type: "get",				
		url: url,
		data: options.data,
		dataType: "jsonp",
		jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)		
		success: function(e){
			console.log(e);
			if(e.code == 0){
				options.success && options.success.call(context, e);
				return;
			}
			
			options.error && options.error.call(context, e);
		},
		error: function(e){
			console.log(e);
			options.error && options.error.call(context, e);
		}
	});	
}

/*
    *查询协议字典
*/
function findAllProtocolDict() {
	var options = {};
	
	options.data = {};
	
	options.success = function (e) {
		//apiGetProtocol(e);
		
	};
	
	options.error = function (e) {
		//alert(e.msg);
	};
	
	jsonp("http://admin.xiaoniuapp.com/admin/protocol/dict/findAll.jsonp", options, this);
}
