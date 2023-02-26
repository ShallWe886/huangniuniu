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
        route:"",//页面路由
		
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
        safeHeight:0,//底部高度
		
		lazyTop:0,//懒加载高度rpx
		boxTop:0,//盒子当前高度
		scrollTop:0,//当前滚动高度rpx
		oldScrollTop:0,//上次滚动高度rpx
		delay:100,//加载数据延迟毫秒数ms
		itemHeight:0,//内容盒子的高度rpx
		hasLazy:false,//是否有缓存数据
		lazyLength:undefined//加载的长度
	};
    selected = {//选择
        status:false,//是否开启选择
        total:0,//选中总数
        list:[],//选中的数组
        all:false,//是否全选
        success:null,//选择后的函数
        remove:(key) => {
            setTimeout(()=>{
                this.remove(this.selected.list,key);
            },200)
        }
    }
	queryParams = {
		pageNum:1,//页码
		pageSize:10//页数
	};
	list = [];
	form = null;//表单数据
	lazyList = [];//懒加载列表
	lazyIndex = 0;//懒加载序号
	api = null;//接口函数
    
    /*
    *处理数组数据函数
    */
	changeData = function(item){
        if(this.selected.status)item.selected = false;
        return item;
    };
    
    /*
    *处理数组数据函数
    */
	changeResponse = function(response){return response;};
    
    /*
    *请求列表
    */
	getList = function(init){
		return new Promise((resolve, reject)=>{
			this.loadStart(init).then(()=>{
				this.resetLazy(init);
				if(!this.api){
					this.loadError("请传入请求API");
				}else{
					this.api(this.queryParams).then(response =>{
						uni.stopPullDownRefresh();
						response = this.changeResponse(response)//处理接口数据
                        this.delayLoadEnd().then(()=>{
                            this.loadEnd(response.rows,response.total).then(()=>{
                                this.loadLazyInit();
                                resolve(response);
                            });
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
    
    /*
    *请求详情
    */
	getInfo = function(init){
		return new Promise((resolve, reject)=>{
			this.loadStart(init).then(() =>{
				if(!this.api){
					this.loadError("请传入请求API");
				}else{
					this.api(this.queryParams).then(response =>{
						this.delayLoadEnd().then(()=>{
							uni.stopPullDownRefresh();
							response = this.changeResponse(response)
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
	
    /*
    *入口函数
    */
	constructor(initData){
        if(initData){
            if(initData.getList)this.getList = initData.getList;
            if(initData.getInfo)this.getInfo = initData.getInfo;
            if(initData.api)this.api = initData.api;
            if(initData.changeData)this.changeData = initData.changeData;
            if(initData.changeResponse)this.changeResponse = initData.changeResponse;
            if(initData.load != undefined)this.setObject('load',initData.load);
            if(initData.lazy != undefined)this.setObject('lazy',initData.lazy);
            if(initData.queryParams != undefined)this.setObject('queryParams',initData.queryParams);
            if(initData.form != undefined)this.setObject('form',initData.form);
            if(initData.selected != undefined)this.setObject('selected',initData.selected);
        }
        
        this.addLoadForGlobal();
		this.mathHeight();
	}
    
    /*
    *新增全局当前加载类
    */
    addLoadForGlobal(){
        let routes = getCurrentPages();
        this.load.route = routes[routes.length - 1].route;
        getApp().globalData.load = getApp().globalData.load || {};
        getApp().globalData.load[this.load.route] = this;
    }
    
    /*
    *删除全局当前加载类
    */
    removeLoadForGlobal(){
        if(getApp().globalData.loadObject[this.load.route])delete getApp().globalData.loadObject[this.load.route];
    }
	
    /*
    *存储对象数据
    */
	setObject(objectName,object){
		if(typeof object === "object"){
			this[objectName] = Object.assign(this[objectName],object || {});
		}else{
			this.loadError(objectName + "请传入object对象");
		}
	}
	
    /*
    *加载开始
    */ 
	loadStart(init){
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
	
    /*
    *加载结束
    *data       Object/Array      数据返回的对象
    *total      Number            数据返回的条数
    */ 
	loadEnd(data,total){
		return new Promise((resolve, reject)=> {
            if(data){
                this.load.requestEnd = true;
                this.load.lazyEnd = false;
                if(data && typeof data === "object" && total == undefined){
                	this.form = Object.assign(this.form || {},data);
                	this.load.loadMore = false;
                	this.load.total = 1;
                	this.load.loadEnd = true;
                }else if(data && typeof data === "object" && total != undefined){
                	this.list = this.list.concat(this.mathItem(data));
                	if(this.list.length >= total)this.load.loadMore = false;
                	this.load.total = total;
                	if(this.queryParams[this.load.pageName])this.queryParams[this.load.pageName] ++;
                	this.load.loadEnd = true;
                }
                if(this.list.length > 0 || this.form)this.lazy.hasLazy = true
                resolve(this);
            }else{
                this.load.requestEnd = true;
                this.load.lazyEnd = false;
            }
		})
	}
	
    /*
    *延迟展示
    */ 
	delayLoadEnd(){
		return new Promise((resolve, reject)=> {
			let time = this.load.loadEndDelay - new Date().getTime() + this.load.startTime;
			time = time < 10 ? 10 : time
			setTimeout(() =>{
				resolve();
			},time)
		})
	}
	
    /*
    *加载错误
    */ 
	loadError(loadErrorPrompt = "加载失败"){
		this.load.loadErrorPrompt = loadErrorPrompt;
		this.load.loadEnd = true;
		this.load.requestEnd = true;
		this.lazy.hasLazy = false;
		this.load.loadError = true;
	}
	
    /*
    *切换加载
    *target    Object       load对象     
    *init      Boolean      是否重新加载
    */ 
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
	
    /*
    *滚动懒加载
    */ 
	scrollLazy(scrollTop = 0){
		this.lazy.scrollTop = this.lazy.pxToRpx * scrollTop;
        if(this.lazy.scrollTop > this.lazy.oldScrollTop)this.lazy.oldScrollTop = this.lazy.scrollTop;
		this.loadLazyList();
	}
	
    /*
    *初始化缓存列表
    */ 
	loadLazyInit(){
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
	
    /*
    *加载缓存列表
    */ 
	loadLazyList(){
		this.lazy.lazyTop = this.lazy.scrollTop + this.lazy.windowHeight + this.lazy.distance;
		if(this.lazyIndex < (this.lazy.lazyLength || this.list.length || 0) && this.list[this.lazyIndex].top <= this.lazy.lazyTop){
            this.list[this.lazyIndex].lazyIndex = Number(this.lazyIndex);
			this.lazyList.push(this.list[this.lazyIndex]);
			this.lazyIndex += 1;
		}else if(this.lazyIndex == this.list.length){
			this.load.lazyEnd = true;
			if(this.load.loadMore && this.getList)this.getList();
		}
	}
	
    /*
    *删除数据
    *target    Array     被删除的数组
    *key      String    用于匹配的字段
    */ 
	remove(target = [],key){
        this.resetLazy(true);
		this.list = this.list.filter(item => {
			let flag = target.findIndex(removeItem => (!key ? removeItem : removeItem[key]) === (!key ? item : item[key]));
			return flag == -1;
		});
        this.list = this.mathItem(this.list);
		this.load.total -= target.length;
        this.select();
		this.load.lazyEnd = false;
		this.loadLazyInit();
	}
	
    /*
    *添加数据
    *target   Object/Array   添加的数据
    *index    Number         添加到指定下标
    */ 
	push(target,index){
        this.resetLazy(true);
        if(typeof target === "object" && !target.length)target = [target];
        index = index || 0;
        let endList = this.list.splice(index,this.list.length - index);
        this.list = this.mathItem(this.list.concat(target,endList));
        this.load.total += target.length;
		this.select();
		this.load.lazyEnd = false;
		this.loadLazyInit();
	}
    
    /*
    *更新数据
    *target   Object/Array   更新数据
    *key      String         用于匹配的字段
    */ 
    update(target,key){
        if(this.load.mode == "list"){
            if(!key)return
            this.list = this.list.map(item => {
                if(target[key] == item[key]){
                    item = Object.assign(item,target);
                }
                return item;
            });
            this.select();
        }else{
            this.form = Object.assign(this.form,target);
        }
    }
    
    /*
    *单选
    */ 
    select(target,key){
        if(!this.selected.status)return
        if(target && key){
            this.list.forEach(item => {
                if(item[key] == target[key]){
                    item.selected = !item.selected;
                }
            })
        }
        
        this.selected.list = this.list.filter(item => item.selected);
        this.selected.total = this.selected.list.length;
        this.selected.all = this.list.length == this.selected.total;
        if(this.selected.success)this.selected.success(this.selected.list);
    }
    
    /*
    *全选
    */ 
    selectAll(){
        if(!this.selected.status)return
        let flag = this.list.filter(item => item.selected).length < this.list.length;
        this.list.forEach(item => {
            item.selected = flag;
        })
        this.selected.total = flag ? this.list.length : 0;
        this.selected.list = flag ? this.list : [];
        this.selected.all = flag;
        if(this.selected.success)this.selected.success(this.selected.list);
    }
	
    /*
    *初始化加载
    */ 
	resetLoad(){
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
	
    /*
    *初始化懒加载
    */ 
	resetLazy(init){
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
    
    /*
    *滚动到历史位置
    */ 
    scrollTop(){
        uni.pageScrollTo({
            duration:500,
            scrollTop:this.lazy.oldScrollTop
        })
    }
    
    /*
    *计算盒子高度
    */ 
    mathHeight(){
    	uni.getSystemInfo({
    		success: (event) => {
    			this.lazy.pxToRpx = 750 / event.screenWidth;
                this.lazy.safeHeight = event.safeAreaInsets.bottom * this.lazy.pxToRpx / 2;
    			this.lazy.windowHeight = (this.load.loadHeight > 0 ? this.load.loadHeight : this.lazy.windowHeight > 0 ? this.lazy.windowHeight : (this.lazy.pxToRpx * event.windowHeight)) - this.lazy.subtractHeight - this.lazy.safeHeight;
    		}
    	})
    	
    }
    
    /*
    *计算对象相关高度
    */ 
    mathItem(list){
        list.forEach((item,index) => {
        	item.height = this.lazy.itemHeight;
        	item = this.changeData(item);
        	item.top = this.lazy.boxTop;
        	this.lazy.boxTop += item.height;
        })
        return list;
    }
	
	/**
	 * 微信登录
	 */
	wxLogin() {
	    // 展示加载框
	    uni.showLoading({
	      title: '加载中',
	    });
	    uni.getUserProfile({
	      desc: '登录后可同步数据',
	      success: async (obj) => {
	        // this.userInfo = obj.userInfo;
			console.log('obj', obj);
	        // 调用 action ，请求登录接口
	        uni.login({
	          provider: 'weixin',
	          success: async (res) => {
	            // console.log('登录获取code', res.code);
	            if (res.errMsg == 'login:ok') {
	              // await this.loginAuth({
	              //   userProfile: obj,
	              //   appid: 'wx558xxxxxxxxxxxxxxx2',
	              //   code: this.code,
	              // });
				  this.$api.miniLogin({code:res.code}).then(res=>{
					  console.log('keyword_token', res);
				  	// uni.setStorageSync('keyword_token', res.keyword_token)
				  })
	            }
	          },
	        });
	      },
	      fail: () => {
	        uni.showToast({
	          title: '授权已取消',
	          icon: 'error',
	          mask: true,
	        });
	      },
	      complete: () => {
	        // 隐藏loading
	        uni.hideLoading();
	      },
	    });
	}
}