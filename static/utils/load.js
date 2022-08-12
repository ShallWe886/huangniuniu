export default class{
	load = {
		loadEnd:true,//加载结束
		requestEnd:true,//请求结束
		loadMore:true,//可加载更多
		loadError:false,//加载错误
		lazyEnd:true,//懒加载结束
		total:0,//数据总条数
		scope:'body',//加载动画范围 box body
		mode:"list",//加载动画模式 info list
		loadHeight:0,//加载的高度
		
		startTime:0,//加载开始时间
		loadEndDelay:1000,//加载延时
		loadErrorPrompt:"加载失败",//加载失败提示语
		loadNonePrompt:"暂无数据",//没有数据提示语
		loadMoreNonePrompt:"暂无更多",//没有提示语
		pageName:"pageNum",//分页字段名
		showNonePrompt:true,//显示首次加载无数据提示语
		showLoadMorePrompt:true,//显示可加载更多提示语
		showLoadMoreNonePrompt:true,//显示加载更多没有数据提示语
	};
	lazy = {
		pxToRpx:0,//px转rpx系数
		windowHeight:0,//视图高度/宽度rpx
		subtractHeight:0,//视图高度减去的高度rpx
		distance:200,//距离底部多少rpx
		
		lazyTop:0,//懒加载高度rpx
		boxTop:0,//盒子当前高度
		scrollTop:0,//当前滚动高度rpx
		oldScrollTop:0,//上次滚动高度rpx
		delay:100,//加载数据延迟毫秒数ms
		itemHeight:0,//内容盒子的高度rpx
		hasLazy:false,//是否有缓存数据
		lazyLength:undefined//加载的长度
	};
	queryParams = {
		pageNum:1,//页码
		pageSize:10,//页数
	};
	list = [];
	form = null;//表单数据
	lazyList = [];//懒加载列表
	lazyIndex = 0;//懒加载序号
	api = null;//接口函数
	changeData = null;//处理数组数据函数
	changeResponse = null;//处理返回数据
	getList = function(init){//请求列表
		return new Promise((resolve, reject)=>{
			this.loadStart(init).then(()=>{
				this.resetLazy(init);
				if(!this.api){
					this.loadError("请传入请求API");
				}else{
					this.api(this.queryParams).then(response =>{
						uni.stopPullDownRefresh();
						if(this.changeResponse){response = this.changeResponse(response)}//处理接口数据
						// if(!response.rows || !response.total){
						// 	this.loadError("数据格式错误");
						// 	reject(response);
						// }else{
							console.log('shuju',response)
							this.delayLoadEnd().then(()=>{
								this.loadEnd(response.list,response.count).then(()=>{
									this.loadLazyInit();
									resolve(response);
								});
							})
						// }
					}).catch(error =>{
						this.delayLoadEnd().then(()=>{
							this.loadError();
							reject(error);
						})
					})
				}
			})
		})
	};
	getInfo = function(init){//请求详情
		return new Promise((resolve, reject)=>{
			this.loadStart(init).then(() =>{
				if(!this.api){
					this.loadError("请传入请求API");
				}else{
					this.api(this.queryParams).then(response =>{
						this.delayLoadEnd().then(()=>{
							uni.stopPullDownRefresh();
							if(this.changeResponse){response = this.changeResponse(response)}
							this.loadEnd(response.data ? response.data : response);
							resolve(response);
						})
					}).catch(error =>{
						this.delayLoadEnd().then(()=>{
							this.loadError();
							reject(error);
						})
					})
				}
			})
		})
	};
	
	constructor(initData){//入口函数
		if(initData.getList)this.getList = initData.getList;
		if(initData.getInfo)this.getInfo = initData.getInfo;
		if(initData.api)this.api = initData.api;
		if(initData.changeData)this.changeData = initData.changeData;
		if(initData.changeResponse)this.changeResponse = initData.changeResponse;
		if(initData.load != undefined)this.setObject('load',initData.load);
		if(initData.lazy != undefined)this.setObject('lazy',initData.lazy);
		if(initData.queryParams != undefined)this.setObject('queryParams',initData.queryParams);
		if(initData.form != undefined)this.setObject('form',initData.form);
		this.mathHeight();
	}
	
	mathHeight(){//计算盒子高度
		uni.getSystemInfo({
			success: (event) => {
				this.lazy.pxToRpx = 750 / event.screenWidth;
				this.lazy.windowHeight = (this.lazy.windowHeight > 0 ? this.lazy.windowHeight : (this.lazy.pxToRpx * event.windowHeight)) - this.lazy.subtractHeight;
			}
		})
		
	}
	
	setObject(objectName,object){//存储对象数据
		if(typeof object === "object"){
			this[objectName] = Object.assign(this[objectName],object || {});
		}else{
			this.loadError(objectName + "请传入object对象");
		}
	}
	
	loadStart(init){//加载开始
		return new Promise((resolve, reject)=> {
			if(!this.load.requestEnd)return
			if(this.load.loadError)this.load.loadError = false
			if(init){
				this.resetLoad();
				this.resetLazy();
			}
			if(!this.load.loadMore)return;
			this.load.requestEnd = false;
			this.load.loadEnd = false;
			this.load.startTime = new Date().getTime();
			resolve();
		})
	}
	
	loadEnd(data,total){//加载结束
		return new Promise((resolve, reject)=> {
			this.load.requestEnd = true;
			this.load.lazyEnd = false;
			if(data && typeof data === "object" && total == undefined){
				this.form = Object.assign(this.form || {},data);
				this.load.loadMore = false;
				this.load.total = 1;
				this.load.loadEnd = true;
			}else if(data && typeof data === "object" && total != undefined){
				data.forEach((item,index) => {
					item.height = this.lazy.itemHeight;
					if(this.changeData)item = this.changeData(item);
					item.top = this.lazy.boxTop;
					this.lazy.boxTop += item.height;
				})
				this.list = this.list.concat(data);
				if(this.list.length >= total)this.load.loadMore = false;
				this.load.total = total;
				if(this.queryParams[this.load.pageName])this.queryParams[this.load.pageName] ++;
				this.load.loadEnd = true;
			}
			if(this.list.length > 0 || this.form)this.lazy.hasLazy = true
			resolve(this);
		})
	}
	
	delayLoadEnd(){
		return new Promise((resolve, reject)=> {
			let time = this.load.loadEndDelay - new Date().getTime() + this.load.startTime;
			time = time < 10 ? 10 : time
			setTimeout(() =>{
				resolve();
			},time)
		})
	}
	
	loadError(loadErrorPrompt = "加载失败"){//加载错误
		this.load.loadErrorPrompt = loadErrorPrompt;
		this.load.loadEnd = true;
		this.load.requestEnd = true;
		this.lazy.hasLazy = false;
		this.load.loadError = true;
	}
	
	changeLoad(target,init = false){//导航选择
		return new Promise((resolve, reject)=>{
			if(target == undefined){
				resolve(this);
			}
			if(this.load.requestEnd && this.load.loadEnd){
				if(this == target){
					resolve(this);
				}else if(target.lazy.hasLazy && !init){
					target.resetLazy(true);
					target.loadLazyInit();
					resolve(target);
				}else{
					resolve(target);
				}
			}else{
				reject(this);
			}
		})
	}
	
	scrollLazy(scrollTop = 0){//滚动懒加载
		this.lazy.scrollTop = this.lazy.pxToRpx * scrollTop;
		this.loadLazyList();
	}
	
	loadLazyInit(){//初始化缓存列表
		this.lazy.lazyTop = this.lazy.scrollTop + this.lazy.windowHeight + this.lazy.distance;
		if(!this.load.requestEnd && !this.load.loadEnd)return
		setTimeout(()=>{
			if(this.lazyIndex < (this.lazy.lazyLength || this.list.length || 0) && this.list[this.lazyIndex].top <= this.lazy.lazyTop){
				this.list[this.lazyIndex].lazyIndex = Number(this.lazyIndex);
				this.lazyList.push(this.list[this.lazyIndex]);
				this.lazyIndex += 1;
				this.loadLazyInit();
			}else if(this.lazyIndex == this.list.length){
				this.load.lazyEnd = true;
				if(this.load.loadMore && this.getList)this.getList();
			}
		},this.lazy.delay)
	}
	
	loadLazyList(){//加载缓存列表
		let flag = this.lazy.oldScrollTop <= this.lazy.scrollTop;//true增  false减
		this.lazy.lazyTop = this.lazy.scrollTop + this.lazy.windowHeight + this.lazy.distance;
		if(this.lazyIndex < (this.lazy.lazyLength || this.list.length || 0) && this.list[this.lazyIndex].top <= this.lazy.lazyTop){
			this.list[this.lazyIndex].lazyIndex = Number(this.lazyIndex);
			this.lazyList.push(this.list[this.lazyIndex]);
			this.lazyIndex += 1;
		}else if(this.lazyIndex == this.list.length){
			this.load.lazyEnd = true;
			if(this.load.loadMore && this.getList)this.getList();
		}
		this.lazy.oldScrollTop = this.lazy.scrollTop;
	}
	
	remove(lists = [],key){//删除部分数据
		this.list = this.list.filter(item => {
			let flag = lists.findIndex(removeItem => (!key ? removeItem : removeItem[key]) === (!key ? item : item[key]));
			return flag == -1;
		});
		this.resetLazy(true);
		this.load.lazyEnd = false;
		this.loadLazyInit();
	}
	
	resetLoad(){//初始化加载
		this.load.loadEnd = true;
		this.load.requestEnd = true;
		this.load.loadMore = true;
		this.load.loadError = false;
		this.load.lazyEnd = true;
		this.load.total = 0;
		this.lazy.hasLazy = false;
		this.list = [];
		this.queryParams[this.load.pageName] = 1;
		this.resetLazy();
	}
	
	resetLazy(init){//初始化懒加载
		if(init){
			this.load.lazyEnd = true;
			this.lazyList = [];
			this.lazyIndex = 0;
			this.lazy.lazyTop = 0;
			this.lazy.scrollTop = 0;
			this.lazy.oldScrollTop = 0;
			this.lazy.boxTop = 0;
		}
	}
}