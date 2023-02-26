// uni-app请求封装
/*
*router       String  请求接口
*data/param   Object  请求参数
*methods      String  请求方法
*type         Number  提示窗口提示 0请求前后不提示  1请求前提示  2请求后提示 3请求前后提示
*bMsg         String  提示窗口请求前提示语
*eMsg		  String  提示窗口请求后提示语
*errMsg       String  提示窗口错误提示语
*back		  Boolean 请求结束是否返回
*backTime	  Number  请求结束是否返回等待时间
*hideLoading  Boolean 是否隐藏加载
*useToken     Boolean 是否需要token
*hideError    Boolean 是否显示错误报错
*/
import enviroment from "./enviroment.js"
export default class Request {
	http (request) {
        let path = enviroment.getUrl();
		request.backTime = request.backTime == undefined ? 1000 : request.backTime;
        if(request.useToken == undefined)request.useToken = true;

		if(request.type == 1 || request.type == 3){
			uni.showLoading({title:request.bMsg != undefined ? request.bMsg : request.back ? "提交中" : "请求中"  ,mask:true})
		}

        request.header = {};
		request.header["Content-Type"] = request.data ? "application/json;charset=UTF-8" : 'application/x-www-form-urlencoded';

        request.data = request.data || request.param || {}
		if(uni.getStorageSync("token") )request.data.user_token =  uni.getStorageSync("token");
        for(let key in request.data){
            if(!request.data[key] && !request.data[key] === 0)delete request.data[key]
        }
		// 返回promise
		return new Promise((resolve,reject) => {
			// 请求
			uni.request({
				url: `${path}${request.url}`,
				data: request.data,
				header:request.header,
				method:request.methods,
				success: (resonpes) => {
					request.resonpes = resonpes.data;
					console.log("************************我的请求参数***********************")
					request.url = `${path}${request.url}`;
					console.log(request)
					if(request.hideLoading !== false || request.type !== 0){uni.hideLoading();}
					// 将结果抛出
					console.log('结果状态',resonpes.data.status)
					if(resonpes.data.status == 200 ){
						resolve(resonpes.data.data)
						console.log(request.url)
						if(request.url == `${path}/api/login/smsLogin` || request.url == `${path}/escort/login/smsLogin`){
							console.log("token",resonpes.data.token)
							uni.setStorageSync("token",resonpes.data.token)
						}
						if(request.type == 2 || request.type == 3){
							if(request.back){
								uni.showToast({
									title:request.eMsg || "提交成功",
									icon:"none",
									mask:true,
									duration:request.backTime,
									success(res) {
										setTimeout(function(){
											uni.navigateBack({delta:request.delta || 1})
										},request.backTime)
									}
								})
							}else{
								uni.showToast({title:request.eMsg || "请求成功",icon:"none"})
							}
						}
					}else if(resonpes.data.status == '201'){
						resolve(resonpes.data)
						uni.showToast({title:resonpes.data.msg,icon:"none"})
					}else if(resonpes.data.status == 401){
						if(!uni.getStorageSync("hasLogin")){
							uni.setStorageSync("hasLogin",true);
							uni.showModal({
								title:"温馨提示",
								content:"用户未登录，请登录后操作，是否登录？",
								showCancel:false,
								confirmText:"去登录",
								success: (model) => {
									if(model.confirm){
										uni.setStorageSync("token",null);
										uni.setStorageSync("hasLogin",null);
										uni.reLaunch({url:"/pages/login/login"})
									}
								}
							})
						}else{
							reject(resonpes.data)
						}
					}else{
                        reject(resonpes.data)
						uni.hideLoading();
						if(request.hideError)uni.showToast({title:request.errMsg || resonpes.data.msg,icon:"none"})
					}
				},
				fail:(error) =>{
                    console.log( `${path}${request.url}`)
					uni.hideLoading();
					reject(error)
					uni.showToast({title: '网络出小差了~',icon:"none"});
				}
			})
		})
	}
}
