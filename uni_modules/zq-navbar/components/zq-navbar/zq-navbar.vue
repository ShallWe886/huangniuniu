<template>
	<view :style="{'height':(navbar.penetrate ? 0 : (navbar.navbarHeight + navbarTitlHeight)) + 'rpx'}">
		<view class="zq-navbar-box" 
			:style="{'paddingTop':navbar.navbarHeight + 'rpx',
				'color':navbar.navbarColor,
				'borderBottom':navbar.navbarBorderBottom,
				'height':navbarTitlHeight + navbar.navbarHeight + 'rpx',
				'background':navbar.navbarBackgroundImage || navbar.penetrate ? '' : navbar.navbarBackgroundColor}" 
			:class="{'zq-navbar-noneBorderBottom':navbar.penetrate,
				'zq-navbar-hasBoxShadow':navbar.hasBoxShadow && !navbar.penetrate,
				'zq-navbar-box-hide':isHideNavbar,
				'zq-navbar-box-show':!isHideNavbar}"> 
			<view class="zq-navbar-box-img"
				:style="{
					'height':navbarTitlHeight + navbar.navbarHeight + 'rpx'
				}">
				<image :src="navbar.navbarBackgroundImage"
					:mode="navbar.navbarBackgroundImageMode"
					class="zq-navbar-box-img-src"
					:style="{
						'height':(navbar.navbarBackgroundImageHeight ? navbar.navbarBackgroundImageHeight : navbarTitlHeight + navbar.navbarHeight) + 'rpx',
						'opacity':navbar.isPenetrateImageGradual ? penetrateBackgroundOpacity : navbar.navbarBackgroundImageOpacity
					}"
					v-if="navbar.navbarBackgroundImage"
				></image>
			</view>
			<view class="zq-navbar-box-bg" 
				:style="{
					'background':navbar.penetrateGradualBackgroundColor || navbar.navbarBackgroundColor,
					'height':navbarTitlHeight + navbar.navbarHeight + 'rpx',
					'opacity':penetrateBackgroundOpacity
				}"
				v-if="navbar.penetrate && !navbar.navbarBackgroundImage && navbar.isPenetrateScrollGradual">
				
			</view>
			<view class="zq-navbar-item zq-navbar-flex-row"
				:style="{
					'paddingTop':navbar.navbarHeight + 'rpx',
					'paddingRight':(navbar.hasBubble ? bubbleWidth : '0') + 'rpx',
					'height':navbarTitlHeight + navbar.navbarHeight + 'rpx'}"
				v-if="!searchStatus"
				@click="toTop">
				
				<!-- **********导航栏左边气泡*****************-->
				<view class="zq-navbar-item-left" 
					:style="{
						'height':navbarTitlHeight + 'rpx',
						'width':navbar.hasBubble ? bubbleWidth + 'rpx' : ''
					}">
					<slot name="left">
						<view class="icon iconfont zq-navbar-btn icon-arrow-left-bold"
							@click.stop="back()"
							v-if="navbar.isBack"
							style="padding:0 10rpx;"
							:style="{'fontSize':navbar.navbarTitleFontSize + 4 + 'px'}"
						></view>
						<view class="icon iconfont zq-navbar-btn icon-home"
							@click.stop="goHome()"
							v-if="navbar.hasHome"
							style="padding:0 10rpx;"
							:style="{'fontSize':navbar.navbarTitleFontSize + 4 + 'px'}"
						></view>
						<view class="zq-navbar-address" @click.stop="getLocation" v-if="navbar.hasLocation">
							<view class="icon iconfont icon-navigation"
								:style="{'fontSize':navbar.navbarTitleFontSize + 2 + 'px'}"
							></view>
							<view class="zq-navbar-address-text zq-navbar-text-overflow-1"
								:style="{
									'fontSize':navbar.navbarTitleFontSize - 2 + 'px',
									'lineHeight':navbar.navbarTitleFontSize + 'px',
									'height':navbar.navbarTitleFontSize + 'px'}">
								{{!navbar.locationText ? '未定位' : navbar.locationText}}
							</view>
						</view>
					</slot>
				</view>
				<!-- **********导航栏标题*****************-->
				<slot name="center">
					<view class="zq-navbar-title zq-navbar-text-overflow-1"
						:style="{
							'textAlign':navbar.titleAlign,
							'lineHeight':navbar.navbarTitleHieght + 'rpx',
							'height':navbarTitlHeight + 'rpx',
							'fontSize':navbar.navbarTitleFontSize + 'px'
						}">{{navbar.navbarTitle}}</view>
				</slot>
				<slot name="right">
					<!-- **********搜索***************** -->
					<view class="zq-navbar-flex-row" 
						v-if="navbar.hasSearch && !searchStatus">
						<view 
							class="zq-navbar-flex-row"
							:style="{
								'height':(navbar.navbarTitleHieght - 20) + 'rpx'
								}">
							<view class="icon iconfont zq-navbar-btn" 
								:style="{'fontSize':navbar.navbarTitleFontSize + 2 + 'px'}" 
								@click.stop="search()">&#xe6ca;</view>
						</view>
					</view>
					<!-- **********多余会隐藏的按钮************ -->
					<view 
						class="zq-navbar-icon-box zq-navbar-flex-row"
						:style="{'fontSize':navbar.navbarTitleFontSize + 'px'}"
						v-if="!navbar.hideBtn && !searchStatus && btnList.length < 3">
						<block v-for="(item,index) in btnList" :id="index">
							<view class="icon iconfont zq-navbar-btn icon-notification" 
								:style="{
									'color':item.color ? item.color : navbar.navbarColor,
									'fontSize':navbar.navbarTitleFontSize + 2 + 'px'
								}" 
								v-if="item.name == 'news'" 
								@click.stop="clickBtn(item)" 
								v-show="index < 2 || btnList[0].name == 'search' && index < 1">
								<view class="zq-navbar-news-dot"></view>
							</view>
							<text class="icon iconfont zq-navbar-btn" 
								:class="[item.iconClass,item.class]" 
								:style="{
									'color':item.color ? item.color : navbar.navbarColor,
									'fontSize':navbar.navbarTitleFontSize + 2 + 'px'
								}" 
								v-if="item.name != 'search' && item.name != 'news' && item.type == 'icon'" 
								@click.stop="clickBtn(item)" 
								v-show="index < 2"></text>
							<text class="zq-navbar-btn" :style="{'color':item.color ? item.color : navbar.navbarColor}" v-if="item.name != 'search' && item.name != 'news' && item.type == 'font'" @click.stop="clickBtn(item)" v-show="index < 2">{{item.label}}</text>
						</block>
					</view>
					<!-- ************隐藏的按钮*********** -->
					<view class="icon iconfont zq-navbar-btn" 
						v-if="btnList.length > 2 && !searchStatus" 
						@click.stop="more()" 
						:style="{'fontSize':navbar.navbarTitleFontSize + 2 + 'px'}">&#xe690;
					</view>
				</slot>
			</view>
			<!-- ************搜索框*********** -->
			<view class="zq-navbar-search-box" 
				:style="{
					'top':navbar.navbarHeight + 'rpx',
					'height':navbarTitlHeight + 'rpx'
				}"
				v-if="searchStatus">
				<view class="icon iconfont icon-top zq-navbar-search-top"
					@click.stop="toTop" 
					:style="{
						'fontSize':navbar.navbarTitleFontSize + 2 + 'px',
						'color':navbar.navbarColor
					}"
					v-if="showSearchTop && !navbar.disabledToTop"
				></view>
				<view class="zq-navbar-search"
					:class="{'zq-navbar-animation-scaleLeft':searchStatus}"
					:style="{
						'width':(navbar.hasBubble ? 710 - bubbleWidth : 710) - (navbar.showSearchBtn ? navbar.searchBtnWidth : 0) - (showSearchTop && !navbar.disabledToTop ? 40 : 0) + 'rpx',
						'right':(navbar.hasBubble ? bubbleWidth + 20 : 20) + (navbar.showSearchBtn ? navbar.searchBtnWidth : 0) + 'rpx',
						'height':navbarTitlHeight - 15 + 'rpx',
						'borderRadius':(navbarTitlHeight - 15) / 2 + 'rpx',
						'background':navbar.searchBackgroundColor,
						'borderColor':navbar.searchBorderColor
					}"
					>
					<input type="text"
						v-model="inputValue"
						class="zq-navbar-search-input"
						:focus="searchStatus"
						:confirm-type="navbar.searchBtnText"
						:placeholder="navbar.searchPrompt"
						:style="{
							'fontSize':navbar.navbarTitleFontSize - 2 + 'px',
							'textAlign':navbar.searchAlign
							}"
						@blur="searchBlur"
						@input="searchInput"/>
					<view class="icon iconfont zq-navbar-search-close"
						:style="{
							'fontSize':navbar.navbarTitleFontSize + 'px',
							'color':navbar.navbarColor
						}" 
						@click.stop="closeSearch()">&#xe696;</view>
				</view>
				<view class="zq-navbar-search-btn"
					:style="{
						'right':(navbar.hasBubble ? bubbleWidth + 20 : 20) + 'rpx',
						'width':navbar.searchBtnWidth + 'rpx',
						'fontSize':(navbar.searchBtnFontSize || navbar.navbarTitleFontSize) + 'px',
						'color':navbar.searchBtnColor
						}"
					 @click.stop="searchBtn()"
					 v-if="navbar.showSearchBtn">
					<text>搜索</text>
				</view>
			</view>
		</view>
		<!-- ***********************垫脚石******************** -->
		<view 
			class="zq-navbar-top-block" 
			:style="{
				'height':(navbar.navbarHeight + navbarTitlHeight) + 'rpx',
				'background':navbar.navbarBackgroundImage ? '' : !navbar.penetrate ? navbar.navbarBackgroundColor : navbar.navbarPenetrateBackgroundColor
			}"
			v-if="!navbar.penetrate">
		</view>
		<!-- ***********************侧边栏******************** -->
		<view
			@touchmove.stop="" 
			:class="{
				'zq-navbar-sideBar-show':sidebarStutas,
				'zq-navbar-sideBar-hide':!sidebarStutas && !initStatus
			}"
			v-if="!initStatus">
			<view 
				class="zq-navbar-sideBar-box zq-navbar-flex-row" 
				:class="{
					'zq-navbar-animation-toRight':sidebarStutas,
					'zq-navbar-animation-leaveLeft':!sidebarStutas && !initStatus
				}">
				<scroll-view class="zq-navbar-sideBar" scroll-y="true">
					<view @click.stop="manageList()">
						<slot name="sidebar"></slot>
					</view>
				</scroll-view>
				<view class="zq-navbar-sideBar-btn icon iconfont" @click.stop="manageList()">&#xe6db;</view>
			</view>
		</view>
		<!-- ***********************右边隐藏的按钮******************** -->
		<view class="zq-navbar-more-box"
			:style="{'top':navbar.navbarHeight + navbarTitlHeight + 20 + 'rpx'}"
			v-if="moreStatus">
			<block v-for="(item,index) in btnList">
				<view class="zq-navbar-more-item zq-navbar-flex-row" 
					:style="{
						'color':item.color ? item.color : navbar.navbarColor
					}" 
					@click.stop="clickBtn(item,1)">
					<text class="icon iconfont zq-navbar-more-item-icon" :class="[item.class,item.iconClass]" :style="{'fontSize':navbar.navbarTitleFontSize + 2 + 'px'}"></text>
					<text class="zq-navbar-more-item-text zq-navbar-text-overflow-1" :style="{'fontSize':navbar.navbarTitleFontSize + 'px'}">{{item.label}}</text>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			value:{//当前滚动条高度
				default:0,
				type:[Number,String]
			},
			props:{//配置参数
				default:null,
				type:Object
			},
			initBtn:{//初始化按键
				value:[],
				default:Array
			},
			searchValue:{//搜索框值
				default:"",
				type:String
			},
			adsorbs:{//监听吸顶#id
				default:null,
				type:Array
			},
		},
		data(){
			return{
				initStatus:true,//初始状态
				navbar:{
					penetrate:true,//是否穿透
					navbarPenetrateBackgroundColor:"",//穿透背景色
					isPenetrateScrollGradual:true,//是否跟随滚动高度渐变
					isPenetrateImageGradual:false,//图片穿透
					penetrateGradualMin:0,//渐变的最小值
					penetrateGradualMax:1,//渐变的透明度最大值
					penetrateGradualBackgroundColor:null,//渐变的背景色
					penetrateGradualMaxTop:300,//渐变的最终值
					navbarHeight:0,//状态栏高度
					navbarTitleHieght:88,//标题高度
					navbarNoneTitleHieght:20,//无标题时高度
					navbarColor:"#333333",//导航栏字体颜色
					navbarBackgroundColor:"#ffffff",//导航栏背景颜色
					navbarBackgroundImage:null,//导航栏背景图
					navbarBackgroundImageHeight:null,//导航栏背景图高度
					navbarBackgroundImageMode:"aspectFill",//导航栏背景图模式
					navbarBackgroundImageOpacity:1,//导航栏透明度
					navbarBorderBottom:null,//导航栏边框颜色
					navbarTitle:"",//导航栏标题
					navbarTitleFontSize:14,//标题字号大小
					hasBubble:false,//是否有气泡
					hasBoxShadow:false,//是否有阴影
					titleAlign:'center',//头部字体排列方式
					hasSearch:false,//是否显示搜索框
					showSearchBtn:true,//是否显示搜索按钮
					searchPrompt:"请输入搜索词",//搜索框提示语
					searchBtnText:"搜索",//搜索框按钮文字
					searchBtnColor:'',//搜索按钮的颜色
					searchBtnFontSize:null,//搜索按钮的字号
					searchBtnWidth:80,//搜索按钮宽度
					searchAlign:'left',//搜索框文字排列
					searchBackgroundColor:'#ffffff',//搜索框背景颜色
					searchBorderColor:"#cccccc",//搜索框边框颜色
					hasLocation:false,//是否使用定位
					locationText:null,//定位的文字
					latitude:0,//定位的纬度
					longitude:0,//定位的经度
					isBack:false,//是否返回
					hasHome:false,//是否返回首页
					homeUrl:"/pages/index/index",//首页的页面路由
					hideBtn:false,//是否隐藏所有的按钮
					hideTop:400,//隐藏的高度
					disabledToTop:false//禁用置顶
				},
				bubbleWidth:100,//气泡宽度
				inputValue:"",//输入框文字
				btnList:[],//所属按钮'back','index','search','set','code','news','edit','add','save',sidebar','update','delete','chart','more',
				btnFunction:{},//按钮点击方法{label:"back",Function(){}}
				sidebarStutas:false,//是否打开侧边栏
				moreStatus:false,//是否打开更多
				searchStatus:false,//是否打开搜索框
				btnLength:0,//按钮的长度
				allBtn:[//更多按钮的链接
					{label:"新增",font:'&#xe6e7',iconClass:"icon-add",name:"add",type:'icon',url:"",methods:"click",class:""},//0
					{label:"编辑",font:'&#xe693',iconClass:"icon-edit",name:"edit",type:'icon',url:"",methods:"click",class:""},
					{label:"删除",font:"&#xe66b",iconClass:"icon-ashbin",name:"delete",type:'icon',url:"",methods:"click",class:""},
					{label:"完成",font:"&#xe6ee",iconClass:"icon-save",name:"save",type:'icon',url:"",methods:"click",class:""},
					{label:"扫码",font:"&#xe6cc",iconClass:"icon-scanning",name:"code",type:'icon',url:"",methods:"click",class:""},
					{label:"消息",font:"&#xe6b7",iconClass:"icon-notification",name:"news",type:'icon',url:"",methods:"click",class:""},//5
					{label:"刷新",font:"&#xe6c4",iconClass:"icon-refresh",name:"upDate",type:'icon',url:"",methods:"click",class:""},
					{label:"条形",font:"&#xe676",iconClass:"icon-chart-bar",name:"chart-bar",type:'icon',url:"",methods:"click",class:""},
					{label:"饼图",font:"&#xe676",iconClass:"icon-chart-pie",name:"chart-pie",type:'icon',url:"",methods:"click",class:""},
					{label:"设置",font:"&#xe6d4",iconClass:"icon-setting",name:"set",type:'icon',url:"",methods:"click",class:""},
					{label:"分享",font:'&#xe6cb;',iconClass:"icon-share",name:"share",type:'icon',url:"",methods:"click",class:""},//10
					{label:"菜单",font:"&#xe6dc",iconClass:"icon-toggle-right",name:"sidebar",type:'icon',url:"",methods:"click",class:""},
					{label:"返回",font:'&#xe6e8',iconClass:"icon-arrow-left-bold",name:"back",type:'icon',url:"",methods:"click",class:""},
					{label:"首页",font:'&#xe6a2',iconClass:"icon-home",name:"index",type:'icon',url:"",methods:"click",class:""},
					{label:"多选",font:'&#xe6b6',iconClass:"icon-keyboard-26",name:"select",type:'icon',url:"",methods:"click",class:""},
					{label:"",font:'',iconClass:"",name:"other",type:'font',url:"",methods:"click",class:""},//15
					{label:"电话",font:'&#xe6dd',iconClass:"icon-telephone",name:"phone",type:'icon',url:"",methods:"click",class:""},
					{label:"收藏",font:'&#xe69c',iconClass:"icon-favorite",name:"favorite",type:'icon',url:"",methods:"click",class:""},
					
					{label:"列表",font:'&#xe6cb;',iconClass:"icon-menu",name:"list",type:'icon',url:"",methods:"click",class:""},
					{label:"视图",font:'&#xe6cb;',iconClass:"icon-modular",name:"view",type:'icon',url:"",methods:"click",class:""},//20
				],
				isHideNavbar:false,//是否隐藏导航栏
				showSearchTop:false,//是否显示搜素框去顶部
				route:"",//当前页面路径
				scrollTop:0,//滚动的高度
				touchEndTime:0,//结束时间
				touchStartTime:0,//开始时间
				lastTapTime:0,//最后点击的时间
				scale:0,//比例
				navbarTitlHeight:0,//标题栏高度
				penetrateBackgroundOpacity:0,//背景透明度
				adsorbObj:{},//吸顶对象
			}
		},
		watch:{
			props:{
				deep:true,
				handler: function(newVal, oldVal) {
					newVal.penetrate = newVal.penetrate || false;
					this.navbar = Object.assign(this.navbar,newVal);
				}
			},
			initBtn(newVal){
				this.dealBtn();
				this.getNavbarHeight();
			},
			value(nVal){
				if(this.navbar.hideTop > -1 && !this.searchStatus){
					if(nVal < this.scrollTop){
						this.isHideNavbar = false;
					}else{
						this.isHideNavbar = this.scale * nVal >= this.navbar.hideTop;
					}
				}
				if(this.searchStatus){
					this.showSearchTop = this.scale * nVal >= this.navbar.hideTop
				}
				this.moreStatus = false;
				this.scrollTop = nVal;
				this.mathPenetrateBackgroundOpacity();
				this.adsorbDom();
			}
		},
		created() {
			uni.getSystemInfo({
				success: (respones) => {
					// #ifdef MP-WEIXIN || MP-ALIPAY
						this.navbar.hasBubble = true;
					// #endif
					this.scale = 750 / respones.screenWidth;
					this.navbar.navbarHeight = this.scale * respones.statusBarHeight;
					this.bubbleWidth = this.scale * 90;
				}
			})
			let pages = getCurrentPages();
			this.route = pages[pages.length - 1].route;
		},
		mounted() {
			let zqNavbarSetting = this.$store && this.$store.state.zqNavbarSetting ? this.$store.state.zqNavbarSetting : {};
			let propsSetting = this.props || {};
			if(!zqNavbarSetting.penetrate && !propsSetting.penetrate)propsSetting.penetrate = false
			this.navbar = Object.assign(this.navbar,zqNavbarSetting,propsSetting);
			this.scrollTop = this.value;
			this.inputValue = this.searchValue;
			this.dealBack();
			this.dealBtn();
			this.getNavbarHeight();
			this.mathPenetrateBackgroundOpacity();
		},
		methods:{
			adsorbDom(){
				if(this.adsorbs && this.adsorbs.length > 0){
					this.adsorbObj = {};
					for(let key in this.adsorbs){
						this.mathAdsorbDom(this.adsorbs[key]);
					}
				}
			},
			mathAdsorbDom(id){
				const query = uni.createSelectorQuery();
				query.select(id).boundingClientRect(data => {
					if(data){
						let navbarHeight = this.isHideNavbar ? 0 : this.navbarTitlHeight;
						this.adsorbObj[id] = {adsorb:data.top * this.scale < navbarHeight,top:navbarHeight};
						if(id == this.adsorbs[this.adsorbs.length - 1]){
							this.$emit('getAdsorbs',this.adsorbObj)
						}
					}else{
						console.error("没找到adsorbs目标")
					}
				}).exec();
			},
			getLocation(){//获取定位
				uni.chooseLocation({
					latitude:this.navbar.latitude,
					longitude:this.navbar.longitude,
					success:(res)=>{
						let reg = /.+?(省|市|自治区|自治州|县|区)/g;
						this.navbar.locationText = res.address.match(reg)[1];
						this.navbar.latitude = res.latitude;
						this.navbar.longitude = res.longitude;
						this.$emit('getAddr',{
							latitude:res.latitude,
							longitude:res.longitude,
							province:res.address.match(reg)[0],
							city:res.address.match(reg)[1],
							region:res.address.match(reg)[2]
						})
					}
				})
				
			},
			searchBtn(){//点击了搜索按钮
				this.$emit("searchBlur",this.inputValue)
			},
			closeSearch(){//关闭搜索框
				this.searchStatus = false;
				this.inputValue = "";
			},
			toTop(e){//返回顶部
				if(this.navbar.disabledToTop)return
				if (this.touchEndTime - this.touchStartTime < 350) {
				  var currentTime = e.timeStamp
				  var lastTapTime = this.lastTapTime
				  this.lastTapTime = currentTime
				  if (currentTime - lastTapTime < 300) {
					  uni.pageScrollTo({
			  　　　　　　duration:150,//过渡时间
			  　　　　　　scrollTop:0,//到达距离顶部的top值
			  　　　　})
				  }
				}
			},
			getNavbarHeight(){//计算高度
				if(this.navbar.navbarTitle.length > 0 || this.navbar.hasBubble || this.navbar.hasBubble || this.navbar.hasLocation || this.navbar.hasSearch || this.navbar.hasHome || this.navbar.isBack){
					this.navbarTitlHeight = this.navbar.navbarTitleHieght;
				}else{
					this.navbarTitlHeight = this.navbar.navbarNoneTitleHieght;
				}
				this.$emit('getHeight',this.navbarTitlHeight + this.navbar.navbarHeight);
			},
			setViewData(setData = {},pageSize = 0){//设置页面参数
				var pages = getCurrentPages();
				var page = pages[pages.length - 1 - pageSize];
				page.data = Object.assign(page.data,setData);
			},
			dealBack(){//判断是否二级页面
				var pages = getCurrentPages();
				this.navbar.isBack = pages.length > 1
			},
			manageList(){//开关侧边栏
				this.sidebarStutas = !this.sidebarStutas;
				this.changeInitStatus();
			},
			more(){//更多
				this.moreStatus = !this.moreStatus
			},
			search(){//搜索
				this.moreStatus = false;
				this.searchStatus = !this.searchStatus;
			},
			searchInput(e){//搜索框
				this.$emit("searchInput",this.inputValue)
			},
			searchBlur(e){
				setTimeout(()=>{
					if(this.navbar.showSearchBtn || !this.navbar.showSearchBtn && !this.searchStatus)return
					this.$emit("searchBlur",this.inputValue)
				},20)
			},
			back(){//返回上一页
				uni.navigateBack({})
			},
			goHome(){//首页路由
				uni.reLaunch({url:this.navbar.homeUrl})
			},
			dealBtn(){//处理按钮
				let pages = getCurrentPages();
				let btnIndex = -1;
				if(pages.length > 1 && this.props && !this.props.isBack) this.navbar.isBack = true;
				this.btnList = this.initBtn.map(obj =>{
					if(obj.name == 'index'){
						this.navbar['hasHome'] = true;
					}else if(obj.name == 'back'){
						this.navbar['isBack'] = true;
					}else{
						if(obj.name != undefined){
							btnIndex = this.allBtn.findIndex(btn =>{
								return btn.name == obj.name
							})
							if(btnIndex > -1){
								obj = Object.assign(this.allBtn[btnIndex],obj)
								return obj
							}else{
								return null
							}
							
						}
					}
				})
				this.btnList = this.btnList.filter(obj => obj)
			},
			changeInitStatus(){//改变初始状态
				this.initStatus = false;
			},
			mathPenetrateBackgroundOpacity(){//计算高度透明度
				if(this.navbar.penetrateGradualMaxTop > 0){
					this.penetrateBackgroundOpacity = this.scrollTop * this.scale > this.navbar.penetrateGradualMaxTop ? this.navbar.penetrateGradualMax  : this.scrollTop * this.scale / this.navbar.penetrateGradualMaxTop * (this.navbar.penetrateGradualMax - this.navbar.penetrateGradualMin) + this.navbar.penetrateGradualMin
				}
			},
			clickBtn(item){
				this.moreStatus = false;
				if(item.name == 'sidebar'){
					this.manageList();
				}else{
					if(item.methods == 'go'){
						if(item.url == ""){
							uni.showToast({title:"开发中~",icon:"none"})
							return
						}
						uni.navigateTo({url:item.url})
					}else if(item.methods == 'click'){
						this.$emit(item.name)
					}
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import url("./icon/icon.css");
	[class*=animation-] {
	    animation-duration: .5s;
	    animation-timing-function: ease-out;
	    animation-fill-mode: both;
	}
	.zq-navbar-flex-row{display: flex;flex-direction: row;align-items: center;}
	.zq-navbar-row-between{justify-content: space-between;}
	.zq-navbar-btn::after{content:var(--content);}
	.zq-navbar-text-overflow-1{overflow : hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;}
	.zq-navbar{width: 100%;}
	.zq-navbar-box{
		position: fixed;
		top: 0;
		left: 0;
		width: 750rpx;
		z-index: 999;
		box-sizing: border-box;
		.zq-navbar-box-img{
			position: absolute;
			left: 0;
			top: 0;
			width: 750rpx;
			overflow: hidden;
			image{
				width: 750rpx;
			}
		}
		.zq-navbar-box-bg{
			position: absolute;
			left: 0;
			top: 0;
			width: 750rpx;
		}
		.zq-navbar-item{
			position: absolute;
			width: 750rpx;
			left: 0;
			top: 0;
			padding: 0 20rpx;
			box-sizing: border-box;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			.zq-navbar-item-left{
				display: flex;
				flex-direction: row;
				align-items: center;
				.zq-navbar-address{
					display: flex;
					flex-direction: row;
					align-items: center;
					margin-right: 10rpx;
					.zq-navbar-address-text{
						width: 80rpx;
						margin-left: 5rpx;
					}
				}
			}
			.zq-navbar-btn{
				flex-shrink: 0;
				padding-right:10rpx;
				position: relative;
				transition: all 0.3s;
			}
			.zq-navbar-title{
				padding-right:10rpx;
				flex-grow: 1;
			}
		}
		.zq-navbar-search-box{
			position: absolute;
			left: 0;
			top: 0;
			width: 750rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			.zq-navbar-search-top{
				position: absolute;
				width: 60rpx;
				text-align: center;
				animation:zqToBig 0.3s;
			}
			.zq-navbar-search{
				position: absolute;
				border: 1px solid;
				display: flex;
				flex-direction: row;
				align-items: center;
				padding: 0 20rpx;
				box-sizing: border-box;
				transition: all 0.3s;
				.zq-navbar-search-input{
					flex-grow: 1;
					color: #333333;
				}
				.zq-navbar-search-close{
					margin-left: 20rpx;
				}
			}
			.zq-navbar-search-btn{
				position: absolute;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				overflow: hidden;
			}
		}
	}
	.zq-navbar-box-show{transform: translateY(0%);animation: zqToBottom 0.3s linear;}
	.zq-navbar-box-hide{transform: translateY(-100%);animation: zqLeaveTop 0.3s linear;}
	.zq-navbar-top-block{position: relative;top: 0;left: 0;width: 750rpx;}
	.zq-navbar-top-image{position: absolute;width: 750rpx;top: 0;left: 0;}
	
	.zq-navbar-noneBorderBottom{border-bottom:none !important;}
	.zq-navbar-hasBoxShadow{box-shadow: 0 0 20rpx #f6f6f6;}
	.zq-navbar-news-dot{width:10rpx;height:10rpx;position: absolute;border-radius: 50%;top: 0;right: 10rpx;background-color: red;animation:zqNavbarNews 1.5s;animation-iteration-count: infinite;}
	
	.zq-navbar-sideBar-box{transform: translateX(-100%);}
	.zq-navbar-sideBar{background-color: #FFFFFF;width:600rpx;box-sizing: border-box;height: 100vh;}
	.zq-navbar-sideBar-btn{border-radius: 0 10rpx 10rpx 0;background-color: #FFFFFF;padding:40rpx 16rpx;color: #333333;}
	
	.za-navbar-search-box{
		flex-grow:100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		border: 2rpx solid #DDDDDD;
		padding-left:20rpx;
		box-sizing: border-box;
		transition: all 1s;
		.zq-btn{
			font-size: 40rpx;
			padding: 0 10rpx;
		}
	}
	.zq-navbar-openIndex{animation:zqOpenIndex 0.6s;font-size: 24rpx;}
	
	.zq-navbar-icon-box{max-width:152rpx;overflow: hidden;box-sizing: border-box;flex-shrink: 0;}
	
	.zq-navbar-more-box{
		position: fixed;
		width: 200rpx;
		right:20rpx;
		background-color: #FFFFFF;
		box-shadow: 0rpx 0rpx 20rpx #bbbbbb;
		border-radius:8rpx;
		overflow: hidden;
		animation: zqToLeft 0.6s;
		z-index: 999;
		.zq-navbar-triangle{
			position: absolute;
			top: -10rpx;
			left: 50%;
			transform: translateY(-16rpx);
			width: 20rpx;
			height: 20rpx;
			border-radius: 4rpx;
			background: #FFFFFF;
			transform: rotate(45deg);
		}
		.zq-navbar-more-item{
			width: 100%;
			height: 60rpx;
			color: #333333;
			padding: 0 20rpx;
			box-sizing: border-box;
			font-size: 24rpx;
			border-bottom: 2rpx solid #DDDDDD;
			line-height:34rpx;
			.zq-navbar-more-item-icon{
				margin-right: 10rpx;
				flex-shrink: 0;
			}
			.zq-navbar-more-item-text{
				flex-grow: 1;
			}
		}
		&:last-child{
			border-bottom: none;
		}
	}
	
	.zq-navbar-sideBar-show{width: 100%;position: fixed;background-color: rgba(0,0,0,0.6);left:0;top:0;z-index: 999;height: 100vh;animation-duration: 0.3s !important;animation-name:zqToRight}
	.zq-navbar-sideBar-hide{width: 100%;position: fixed;background-color: rgba(0,0,0,0.6);left:0;top:0;z-index: 999;height: 100vh;animation-duration: 0.3s !important;animation-name:zqLeaveLeft;transform: translateX(-100%)}
	
	
	.zq-navbar-animation-toRight{animation-name:zqToRight}
	.zq-navbar-animation-leaveTop{animation-name:zqLeaveTop}
	.zq-navbar-animation-leaveLeft{animation-name:zqLeaveLeft}
	.zq-navbar-animation-scaleLeft{animation-name:zqScaleLeft;animation-duration: 0.3s;}
	@keyframes zqToRight {
	    0% {opacity: 0;transform: translateX(-100%);}
	    100% {opacity: 1;transform: translateX(0%);}
	}
	@keyframes zqToLeft {
	    0% {opacity: 0;transform: translateX(100%);}
	    100% {opacity: 1;transform: translateX(0%);}
	}
	@keyframes zqToBottom {
	    0% {transform: translateY(-100%);}
	    100% {transform: translateY(0%);}
	}
	@keyframes zqLeaveTop {
	    0% {transform: translateY(0%);}
	    100% {transform: translateY(-100%);}
	}
	@keyframes zqLeaveLeft{
	    0% {opacity: 1;transform: translateX(0);}
	    100% {opacity: 0;transform: translateX(-100%);}
	}
	@keyframes zqNavbarNews{
		0%{opacity: 1;}
		50%{opacity: 0;}
		100%{opacity: 1;}
	}
	@keyframes zqOpenIndex{
		0%{width: 0;}
		100%{width: 100%;}
	}
	@keyframes zqScaleLeft{
		0%{width: 0;opacity: 0;}
		100%{opacity: 1;}
	}
	@keyframes zqToBig{
		0%{transform: scale(0);opacity: 0;}
		100%{transform: scale(1);opacity: 1;}
	}
</style>
