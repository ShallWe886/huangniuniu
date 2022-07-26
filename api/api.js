import Request from '../static/js/request.js';
let request = new Request().http;

// import UploadFile from '../static/js/upload.js';
// let uploadFile = new UploadFile().http;

export default{
	smsSend:function(upJson){//短信发送接口
		return request({url:"/api/login/smsSend",data:upJson,methods:"POST",type:2,eMsg:"已发送"})
	},
	smsLogin:function(upJson){//短信登陆接口
		return request({url:"/api/login/smsLogin",data:upJson,methods:"POST",type:0})
	},
	banner:function(upJson){//banner
		return request({url:"/api/banner/index",param:upJson,methods:"GET",type:0})
	},
	getHospitalList:function(upJson){//首页医院列表
		return request({url:"/api/index/index",param:upJson,methods:"GET",type:0})
	},
	getDepartmentList:function(upJson){//科室列表
		return request({url:"/api/hospital/department",param:upJson,methods:"GET",type:0})
	},
	getDoctors:function(upJson){//科室列表【下单的时候选择医生的列表】
		return request({url:"/api/hospital/doctors",param:upJson,methods:"GET",type:0})
	},
	getPatientList:function(upJson){//患者列表
		return request({url:"/api/patient/list",param:upJson,methods:"GET",type:0})
	},
	addPatient:function(upJson){//新增患者
		return request({url:"/api/patient/add",param:upJson,methods:"GET",type:2,emsg:'添加成功'})
	},
}