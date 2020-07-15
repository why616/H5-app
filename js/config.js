
var service_ip = "http://106.55.2.240:8080";//服务器IP地址
//var service_ip = "http://192.168.2.221:8080";
var url_login = service_ip+"/user/login";//登陆访问的地址

var url_websocket= service_ip+"/messagePush/";
var url_msg = service_ip+'/msg/getMessages';
var url_read = service_ip+'/msg/alreadyRead';
var url_sendMsg = service_ip+'/msg/receive'; 

var alarmMessageURL = service_ip + "/alarm/messages";
var changStateURL = service_ip + "/alarm/changeState";
var addAlarmURL = service_ip + "/alarm/addAlarmMessage";












var getState = function() {
		var stateText = window.localStorage.getItem('$state') || "{}";
		console.log("text:"+stateText);
		return JSON.parse(stateText);
	};