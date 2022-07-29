import Request from '../static/js/request.js';
let request = new Request().http;

import UploadFile from '../static/js/upload.js';
let uploadFile = new UploadFile().http;

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
		return request({url:"/api/patient/add",param:upJson,methods:"GET",type:2,eMsg:'添加成功'})
	},
	getPatientDetail:function(upJson){//患者详情
		return request({url:"/api/patient/detail",param:upJson,methods:"GET",type:0})
	},
	delPatient:function(upJson){//患者删除
		return request({url:"/api/patient/del",param:upJson,methods:"GET",type:2,eMsg:'删除成功'})
	},
	editPatient:function(upJson){//患者修改
		return request({url:"/api/patient/edit",param:upJson,methods:"GET",type:2,eMsg:'修改成功'})
	},
	// upLoad:function(upJson){//文件上传
	// 	return request({url:"",data:upJson,methods:"POST",type:0})
	// },
	upLoad:function(upJson){//文件上传
	  return uploadFile({url:"/api/base/upload",data:upJson,methods:"POST"})
	 },
	getCardList:function(upJson){//就诊卡列表
		return request({url:"/api/card/list",param:upJson,methods:"GET",type:0})
	},
	addCard:function(upJson){//新增就诊卡
		return request({url:"/api/card/add",param:upJson,methods:"GET",type:2,eMsg:"添加成功"})
	},
	editCard:function(upJson){//修改就诊卡
		return request({url:"/api/card/edit",param:upJson,methods:"GET",type:2,eMsg:'修改成功'})
	},
	delCard:function(upJson){//删除成功
		return request({url:"/api/card/del",param:upJson,methods:"GET",type:2,eMsg:"删除成功"})
	},
	getAddressList:function(upJson){//收货地址
		return request({url:"/api/address/getList",param:upJson,methods:"GET",type:0})
	},
	addAddress:function(upJson){//新增收货地址
		return request({url:"/api/address/add",data:upJson,methods:"POST",type:0})
	},
	editAddress:function(upJson){//更新or删除地址
		return request({url:"/api/address/edit",data:upJson,methods:"GET",type:0})
	},
	getAddressDetail:function(upJson){//地址详情
		return request({url:"/api/address/detail",data:upJson,methods:"GET",type:0})
	},
	
}