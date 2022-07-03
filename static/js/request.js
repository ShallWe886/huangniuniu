// uni-app请求封装
/*
*router       String  请求接口
*data         Object  请求参数
*methods       String  请求方法
*type         Number  提示窗口提示 0请求前后不提示  1请求前提示  2请求后提示 3请求前后提示
*bMsg         String  提示窗口请求前提示语
*eMsg		  String  提示窗口请求后提示语
*back		  Boolean 请求结束是否返回
*backTime	  Number  请求结束是否返回等待时间
*/
import enviroment from "./enviroment.js"
import store from '@/store/index.js';//需要引入store
export default class Request {
	http (data) {
		data.backTime = data.backTime == undefined ? 2000 : data.backTime
		let path = enviroment.getUrl();
		if(data.type == 1 || data.type == 3 || data.type == undefined){
			uni.showLoading({title:data.bMsg != undefined ? data.bMsg : data.back ? "提交中" : "请求中"  ,mask:true})
		}
		let header = new Object();
		if(data.methods == "POST1" || data.methods == "PUT"){
		
			header = {"Content-Type": "application/json"}
			data.methods = data.methods == "POST1" ? "POST" : "PUT"
		}else if(data.methods == "POST"){
			header = {'Content-Type':'application/x-www-form-urlencoded'}
		}else{
			header = {'Content-Type':'application/json;charset=UTF-8'}
		}
		if(uni.getStorageSync("token") != undefined && uni.getStorageSync("token") != null && uni.getStorageSync("token") != ""){
		 	header.authorization = uni.getStorageSync("token")
		}
		
		// 返回promise
		return new Promise((resolve,reject) => {
			// 请求
			uni.request({
				url: `${path}${data.url}`,
				data: data.data,
				header:header,
				method:data.methods,
				success: (res) => {
					console.log(`************************${data.url}我的请求结果***********************`)
					data.res = res;
					console.log(data);
					uni.hideLoading();
					// 将结果抛出
					if(res.data.code === 0){
						uni.showToast({title:res.data.info,icon:"none"})
						if(res.data.info == "商品已下架！"){
						let time = setTimeout(res=>{
								uni.navigateBack({
									delta:1
								})
								clearTimeout(time)
							},2000)
							
						}
					}else if(res.data.code === 403){
						console.log(getApp().globalData.upDate.login)
						if(getApp().globalData.upDate.login){
							getApp().globalData.upDate.login = false
							uni.navigateTo({
								url:"/myPages/my/login/authorLogin/authorLogin"
							})
						}
					}else if(res.data.code === 1){
						resolve(res.data.data)
						if(data.type == 2 || data.type == 3){
							if(data.back){
								uni.showToast({
									title:data.bMsg || "提交成功",
									icon:"none",
									mask:true,
									duration:2000,
									success:(res)=> {
										setTimeout(function(){
											uni.navigateBack({})
										},2000)
									}
								})
							}else{
								uni.showToast({title:data.eMsg == undefined ? res.data.info : data.eMsg,icon:"none"})
							}
						}
					}else if(res.data.code == 401){
						uni.showModal({
							title:"温馨提示",
							content:"用户未登录，请登录后操作，是否登录？",
							confirmText:"去登录",
							success: (res) => {
								if(res.confirm){
									uni.reLaunch({
										url:"/pages/index/index"
									})
								}
							}
						})
					}
					
				},
				fail:(res) =>{
					uni.hideLoading();
					throw "网络出小差了~"
					uni.showToast({title: '网络出小差了~',icon:"none"});
				}
			})
		})
	}
}