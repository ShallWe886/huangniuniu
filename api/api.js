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
	getDepartmentLists:function(upJson){//新科室列表
		return request({url:"/api/hospital/relationDepartment",param:upJson,methods:"GET",type:0})
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
	getGoodsOrderList:function(upJson){//积分订单列表
		return request({url:"/api/goods/orderList",param:upJson,methods:"GET",type:0})
	},
	getOrderRefund:function(upJson){//订单列表
		return request({url:"/api/order/refundList",param:upJson,methods:"GET",type:0})
	},
	getOrderDetail:function(upJson){//订单详情
		return request({url:"/api/order/detail",param:upJson,methods:"GET",type:0})
	},
	getOrderPay:function(upJson){//订单支付
		return request({url:"/api/record/pay",param:upJson,methods:"GET",type:0})
	},
	getGoodsPay:function(upJson){//积分订单支付
		return request({url:"/api/goods/toPay",param:upJson,methods:"GET",type:0})
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
	getRecharge:function(upJson){//余额充值
		return request({url:"/api/order/recharge",param:upJson,methods:"GET",type:0})
	},
	escortRegister:function(upJson){//陪诊注册
		return request({url:"/escort/login/register",param:upJson,methods:"GET",type:0})
	},
	escortDistribute:function(upJson){//陪诊抢单列表
		return request({url:"/escort/record/distribute",param:upJson,methods:"GET",type:0})
	},
	smsSendEscort:function(upJson){//短信发送接口
		return request({url:"/escort/login/smsSend",data:upJson,methods:"POST",type:2,eMsg:"已发送"})
	},
	smsLoginEscort:function(upJson){//短信登陆接口
		return request({url:"/escort/login/smsLogin",data:upJson,methods:"POST",type:0})
	},
	escortUnassigned:function(upJson){//陪诊派单列表
		return request({url:"/escort/record/unassigned",data:upJson,methods:"GET",type:0})
	},
	escortRob:function(upJson){//陪诊抢单
		return request({url:"/escort/record/rob",data:upJson,methods:"GET",type:0})
	},
	escortAccept:function(upJson){//陪诊抢单
		return request({url:"/escort/record/accept",data:upJson,methods:"GET",type:0})
	},
	escortTransfer:function(upJson){//陪诊转单
		return request({url:"/escort/order/transfer",data:upJson,methods:"GET",type:0})
	},
	escortCancle:function(upJson){//陪诊取消订单
		return request({url:"/escort/order/cancle",data:upJson,methods:"GET",type:0})
	},
	escortFinish:function(upJson){//陪诊完成订单
		return request({url:"/escort/order/finish",data:upJson,methods:"GET",type:0})
	},
	escortOrder:function(upJson){//陪诊订单
		return request({url:"/escort/order/list",data:upJson,methods:"GET",type:0})
	},
	escortInfo:function(upJson){//陪诊个人信息
		return request({url:"/escort/my/info",data:upJson,methods:"GET",type:0})
	},
	escortSetPlan:function(upJson){//陪诊个人设置排班
		return request({url:"/escort/my/setPlan",data:upJson,methods:"GET",type:0})
	},
	escortGetPlan:function(upJson){//陪诊个人读取排班
		return request({url:"/escort/my/getPlan",data:upJson,methods:"GET",type:0})
	},
	escortBill:function(upJson){//陪诊个人账户记录
		return request({url:"/escort/wallet/bill",data:upJson,methods:"GET",type:0})
	},
	escortWalletApply:function(upJson){//陪诊个人账户提现申请
		return request({url:"/escort/wallet/apply",data:upJson,methods:"GET",type:0})
	},
	miniLogin:function(upJson){//用户端微信登录获取code
		return request({url:"/api/login/miniLogin",data:upJson,methods:"GET",type:0})
	},
	getMobileInfo:function(upJson){//用户端小程序解析手机号
		return request({url:"/api/login/getMobileInfo",data:upJson,methods:"POST",type:0})
	},
	miniLoginEscort:function(upJson){//陪诊端微信登录获取code
		return request({url:"/escort/login/miniLogin",data:upJson,methods:"GET",type:0})
	},
	getMobileInfoEscort:function(upJson){//陪诊端小程序解析手机号
		return request({url:"/escort/login/getMobileInfo",data:upJson,methods:"POST",type:0})
	},
	escortFeedback:function(upJson){//陪诊端意见反馈
		return request({url:"/escort/feedback/add",data:upJson,methods:"GET",type:0})
	},
	escortPing:function(upJson){//陪诊个人评价列表
		return request({url:"/escort/my/ping",data:upJson,methods:"GET",type:0})
	},
	escortArticle:function(upJson){//陪诊个人常见问题
		return request({url:"/escort/article/index",data:upJson,methods:"GET",type:0})
	},
	feedbackList:function(upJson){//用户订单留言列表
		return request({url:"/api/order/feedbackList",data:upJson,methods:"GET",type:0})
	},
	feedbackReplay:function(upJson){//用户订单留言回复
		return request({url:"/api/order/replay",data:upJson,methods:"GET",type:0})
	},
	feedbackAdd:function(upJson){//用户订单留言新增
		return request({url:"/api/order/feedbackAdd",data:upJson,methods:"GET",type:0})
	},
	feedbackListEscort:function(upJson){//陪诊订单留言列表
		return request({url:"/escort/order/feedbackList",data:upJson,methods:"GET",type:0})
	},
	feedbackReplayEscort:function(upJson){//陪诊订单留言回复
		return request({url:"/escort/order/replay",data:upJson,methods:"GET",type:0})
	},
	feedbackAddEscort:function(upJson){//陪诊订单留言新增
		return request({url:"/escort/order/feedbackAdd",data:upJson,methods:"GET",type:0})
	},
	articleList:function(upJson){//陪诊个人常见问题
		return request({url:"/api/article/index",data:upJson,methods:"GET",type:0})
	},
	isFirstLogin:function(upJson){//微信授权登陆-判断是不是第一次登陆
		return request({url:"/api/Login/isFirstLogin",data:upJson,methods:"POST",type:0})
	},
	isFirstLogin:function(upJson){//微信授权登陆-判断是不是第一次登陆
		return request({url:"/api/Login/isFirstLogin",data:upJson,methods:"POST",type:0})
	},
	isFirstLoginEscort:function(upJson){//陪诊端微信授权登陆-判断是不是第一次登陆
		return request({url:"/escort/Login/isFirstLogin",data:upJson,methods:"POST",type:0})
	},
	getWechatVertify:function(upJson){//微信授权登陆-发送验证码
		return request({url:"/api/Login/getWechatVertify",data:upJson,methods:"POST",type:0})
	},
	getWechatVertifyEscort:function(upJson){//陪诊端微信授权登陆-发送验证码
		return request({url:"/escort/Login/getWechatVertify",data:upJson,methods:"POST",type:0})
	},
	checkWechatVertify:function(upJson){//微信授权登陆-检验验证码
		return request({url:"/api/login/checkWechatVertify",data:upJson,methods:"POST",type:0})
	},
	checkWechatVertifyEscort:function(upJson){//陪诊端微信授权登陆-检验验证码
		return request({url:"/escort/Login/checkWechatVertify",data:upJson,methods:"POST",type:0})
	},
	updateWechatByMobile:function(upJson){//微信授权登陆-首次登陆接口
		return request({url:"/api/login/updateWechatByMobile",data:upJson,methods:"POST",type:0})
	},
	updateWechatByMobileEscort:function(upJson){//陪诊端微信授权登陆-首次登陆接口
		return request({url:"/escort/Login/updateWechatByMobile",data:upJson,methods:"POST",type:0})
	},
	weixinLogin:function(upJson){//微信授权登陆-非第一次登陆
		return request({url:"/api/login/weixinLogin",data:upJson,methods:"POST",type:0})
	},
	weixinLoginEscort:function(upJson){//陪诊端微信授权登陆-非第一次登陆
		return request({url:"/escort/Login/weixinLogin",data:upJson,methods:"POST",type:0})
	},
	setProfileEscort:function(upJson){//陪诊端修改信息
		return request({url:"/escort/my/setProfile",data:upJson,methods:"POST",type:0})
	},
	getDepartmentEscort:function(upJson){//陪诊端新科室列表
		return request({url:"/escort/hospital/relationDepartment",param:upJson,methods:"GET",type:0})
	},
	getHospitalEscort:function(upJson){//陪诊端医院列表
		return request({url:"/escort/hospital/list",param:upJson,methods:"GET",type:0})
	},
	intergalLog:function(upJson){//用户端积分明细
		return request({url:"/api/my/intergalLog",data:upJson,methods:"get",type:0})
	},
	shareImg:function(upJson){//用户端分享图片
		return request({url:"/api/my/share",data:upJson,methods:"get",type:0})
	},
	shareImgEscort:function(upJson){//用户端分享图片
		return request({url:"/escort/my/share",data:upJson,methods:"get",type:0})
	},
	setProfile:function(upJson){//陪诊端修改信息
		return request({url:"/api/my/setProfile",data:upJson,methods:"POST",type:0})
	},
	recordVip:function(upJson){//陪诊端修改信息
		return request({url:"/api/record/vip",data:upJson,methods:"POST",type:0})
	},
	readContractEscort:function(upJson){//预览协议接口
		return request({url:"/escort/Contract/read",data:upJson,methods:"get",type:0})
	},
}