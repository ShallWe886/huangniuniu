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
	getArea:function(upJson){//省市区
		return request({url:"/api/address/getArea",param:upJson,methods:"GET",type:0})
	},
	getHospitalList:function(upJson){//首页医院列表
		return request({url:"/api/index/index",param:upJson,methods:"GET",type:0})
	},
	getHospital:function(upJson){//医院列表
		return request({url:"/api/hospital/list",param:upJson,methods:"GET",type:0})
	},
	getHospitalDetail:function(upJson){//医院详情
		return request({url:"/api/hospital/detail",param:upJson,methods:"GET",type:0})
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
		return request({url:"/api/address/edit",param:upJson,methods:"GET",type:0})
	},
	getAddressDetail:function(upJson){//地址详情
		return request({url:"/api/address/detail",param:upJson,methods:"GET",type:0})
	},
	getdoctorsList:function(upJson){//医生列表
		return request({url:"/api/hospital/doctors",param:upJson,methods:"GET",type:0})
	},
	getarticleList:function(upJson){//文章列表
		return request({url:"/api/article/index",param:upJson,methods:"GET",type:0})
	},
	getarticleDetail:function(upJson){//文章详情
		return request({url:"/api/article/view",param:upJson,methods:"GET",type:0})
	},
	getChannel:function(upJson){//文章栏目
		return request({url:"/api/channel/index",param:upJson,methods:"GET",type:0})
	},
	getbusiness:function(upJson){//业务接口
		return request({url:"/api/record/business",param:upJson,methods:"GET",type:0})
	},
	getDiscount:function(upJson){//代办折扣
		return request({url:"/api/record/discount",param:upJson,methods:"GET",type:0})
	},
	addRecord:function(upJson){//服务订单提交接口
		return request({url:"/api/record/add",data:upJson,methods:"POST",type:0})
	},
	getMyAccount:function(upJson){//账户余额
		return request({url:"/api/wallet/myAccount",param:upJson,methods:"GET",type:0})
	},
	getMywallet:function(upJson){//账户余额
		return request({url:"/api/wallet/bill",param:upJson,methods:"GET",type:0})
	},
	getMyInfo:function(upJson){//个人中心信息
		return request({url:"/api/my/info",param:upJson,methods:"GET",type:0})
	},
	/**订单列表**/
	getOrderToPay:function(upJson){//待支付订单列表
		return request({url:"/api/order/toPay",param:upJson,methods:"GET",type:0})
	},
	getOrderAll:function(upJson){//全部订单列表
		return request({url:"/api/order/all",param:upJson,methods:"GET",type:0})
	},
	getOrderList:function(upJson){//订单列表
		return request({url:"/api/order/list",param:upJson,methods:"GET",type:0})
	},
	getOrderRefund:function(upJson){//订单列表
		return request({url:"/api/order/refundList",param:upJson,methods:"GET",type:0})
	},
	getOrderDetail:function(upJson){//订单详情
		return request({url:"/api/order/detail",param:upJson,methods:"GET",type:0})
	},
	getOrderView:function(upJson){//订单详情
		return request({url:"/api/order/view",param:upJson,methods:"GET",type:0})
	},
	cancelOrder:function(upJson){//取消订单
		return request({url:"/api/order/cancel",param:upJson,methods:"GET",type:0})
	},
	refundApply:function(upJson){//申请退款
		return request({url:"/api/order/refundApply",param:upJson,methods:"GET",type:2,eMsg:"申请成功",back:true})
	},
	addAnswer:function(upJson){//提交评价
		return request({url:"/api/answer/add",param:upJson,methods:"GET",type:2,eMsg:"评价成功",back:true})
	},
	// 商城
	getGoodList:function(upJson){//商城列表
		return request({url:"/api/goods/index",param:upJson,methods:"GET",type:0})
	},
	getGoodDetail:function(upJson){//商品详情
		return request({url:"/api/goods/view",param:upJson,methods:"GET",type:0})
	},
	getGoodOrder:function(upJson){//商品下单
		return request({url:"/api/goods/order",param:upJson,methods:"GET",type:0})
	},
}