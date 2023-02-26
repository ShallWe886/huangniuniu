## 1.1.2（2022-03-18）
去掉slot相关的值
## 1.1.1（2022-03-17）
处理app端出现错误提示问题
## 1.1.0（2022-03-08）
将原this.$store.getters.navbar 修改为 this.$store.state.zqNavbarSetting
修复非全局定义出现的BUG
修复穿透属性下出现背景色
## 1.0.18（2022-02-21）
更新字体文件不需要通过下载获取
## 1.0.17（2021-11-12）
随便更新
## 1.0.16（2021-11-12）
改一点bug
## 1.0.15（2021-11-11）
新增吸附计算
## 1.0.14（2021-11-09）
更新文档说明
## 1.0.13（2021-11-09）
无
## 1.0.12（2021-11-09）
修改标题显示的bug
## 1.0.11（2021-11-09）
修改BUg
## 1.0.10（2021-11-09）
新增全局配置方法
## 1.0.9（2021-11-09）
更改说明
## 1.0.8（2021-11-09）
新增左侧和中间插槽
## 1.0.7（2021-11-09）
新增使用说明
## 1.0.6（2021-11-08）
自定义导航栏

本插件依赖iconfont字体文件，需要到git中获取字体文件  /static/style中

<zq-navbar v-model="scrollTop" :props="{'navbarTitle':'知秋标题栏',hasSearch:true,isIndex:true}" :initBtn="initBtn"@searchBlur="getSearch"></zq-navbar>

initBtn 是内置的按钮

	*label  	  按钮名称  type为font时显示
	
	*font 		  按钮的图形文字
	
	*iconClass    按钮图形类名
	
	*name		  按钮名称  --必传
	
	*type		  按钮类型 icon  font
	
	*url		  methods为go时的页面跳转
	
	*methods	  点击按钮的处理方式 go click
	
	*class	 	  按钮的类名，用于修改字号颜色等

	{label:"新增",font:'&#xe6e7',iconClass:"icon-add",name:"add",type:'icon',url:"",methods:"click",class:""},
	
	{label:"编辑",font:'&#xe693',iconClass:"icon-edit",name:"edit",type:'icon',url:"",methods:"click",class:""},
	
	{label:"删除",font:"&#xe66b",iconClass:"icon-ashbin",name:"delete",type:'icon',url:"",methods:"click",class:""},
	
	{label:"完成",font:"&#xe6ee",iconClass:"icon-save",name:"save",type:'icon',url:"",methods:"click",class:""},
	
	{label:"扫码",font:"&#xe6cc",iconClass:"icon-scanning",name:"code",type:'icon',url:"",methods:"click",class:""},
	
	{label:"消息",font:"&#xe6b7",iconClass:"icon-notification",name:"news",type:'icon',url:"",methods:"click",class:""},
	
	{label:"刷新",font:"&#xe6c4",iconClass:"icon-refresh",name:"upDate",type:'icon',url:"",methods:"click",class:""},
	
	{label:"条形",font:"&#xe676",iconClass:"icon-chart-bar",name:"chart-bar",type:'icon',url:"",methods:"click",class:""},
	
	{label:"饼图",font:"&#xe676",iconClass:"icon-chart-pie",name:"chart-pie",type:'icon',url:"",methods:"click",class:""},
	
	{label:"设置",font:"&#xe6d4",iconClass:"icon-setting",name:"set",type:'icon',url:"",methods:"click",class:""},
	
	{label:"分享",font:'&#xe6cb;',iconClass:"icon-share",name:"share",type:'icon',url:"",methods:"click",class:""},
	
	{label:"菜单",font:"&#xe6dc",iconClass:"icon-toggle-right",name:"sidebar",type:'icon',url:"",methods:"click",class:""},
	
	{label:"返回",font:'&#xe6e8',iconClass:"icon-arrow-left-bold",name:"back",type:'icon',url:"",methods:"click",class:""},
	
	{label:"首页",font:'&#xe6a2',iconClass:"icon-home",name:"index",type:'icon',url:"",methods:"click",class:""},
	
	{label:"多选",font:'&#xe6b6',iconClass:"icon-keyboard-26",name:"select",type:'icon',url:"",methods:"click",class:""},
	
	{label:"",font:'',iconClass:"",name:"other",type:'font',url:"",methods:"click",class:""},
	
	{label:"电话",font:'&#xe6dd',iconClass:"icon-telephone",name:"phone",type:'icon',url:"",methods:"click",class:""},
	
	{label:"收藏",font:'&#xe69c',iconClass:"icon-fabulous",name:"fabulous",type:'icon',url:"",methods:"click",class:""},
	
	{label:"列表",font:'&#xe6cb;',iconClass:"icon-menu",name:"list",type:'icon',url:"",methods:"click",class:""},
	
	{label:"视图",font:'&#xe6cb;',iconClass:"icon-modular",name:"view",type:'icon',url:"",methods:"click",class:""}

props的接受参数

	*hideTop				当导航栏滚动到置顶位置触发隐藏，需要在父组件中加入
	
								onPageScroll(event) {
									
									this.scrollTop = event.scrollTop;
									
								}
								
								用v-model接收scrollTop，hideTop值为-1则不自动隐藏
								
	*penetrate				导航栏不占用高度，具有穿透特性
	
	*navbarTitleHieght		标题的高度除状态栏的高度（rpx）
	
	*navbarNoneTitleHieght  当标题无内容和无按钮和无气泡时的标题高度（rpx）
	
	*hasSearch				是否显示搜索按钮，展开时覆盖标题栏
	
	*isIndex				返回首页按钮
	
	*disabledToTop			在搜索框展开时超过一定位置展示置顶按钮，或者隐藏时点击标题可置顶，false为禁用置顶
	
	penetrate:false,//是否穿透

	navbarHeight:0,//状态栏高度
	
	navbarTitleHieght:88,//标题高度
	
	navbarNoneTitleHieght:20,//无标题时高度
	
	navbarColor:"#333333",//导航栏字体颜色
	
	navbarBackgroundColor:"#ffffff",//导航栏背景颜色
	
	navbarPenetrateBackgroundColor:"",//穿透背景色
	
	navbarBackgroundImage:null,//导航栏背景图
	
	navbarBackgroundImageOpacity:1,//导航栏透明度
	
	navbarBorderBottomColor:"none",//导航栏边框颜色
	
	navbarTitle:"",//导航栏标题
	
	navbarTitleFontSize:14,//标题字号大小
	
	hasBubble:false,//是否有气泡
	
	hasBoxShadow:false,//是否有阴影
	
	titleAlign:'center',//头部字体排列方式
	
	hasSearch:false,//是否显示搜索框
	
	showSearchBtn:false,//是否显示搜索按钮
	
	searchPrompt:"请输入搜索词",//搜索框提示语
	
	searchBtnText:"搜索",//搜索框按钮文字
	
	searchBtnColor:'',//搜索按钮的颜色
	
	searchBtnFontSize:'',//搜索按钮的字号
	
	searchBtnWidth:80,//搜索按钮宽度
	
	searchAlign:'left',//搜索框文字排列
	
	searchBackgroundColor:'#ffffff',//搜索框背景颜色
	
	searchBorderColor:"#cccccc",//搜索框边框颜色
	
	searchPlaceholderColor:'#eeeeee',//搜索框提示语颜色
	
	hasLocation:false,//是否使用定位
	
	locationText:null,//定位的文字
	
	latitude:0,//定位的纬度
	
	longitude:0,//定位的经度
	
	isBack:false,//是否返回
	
	isIndex:false,//是否返回首页
	
	hideBtn:false,//是否隐藏所有的按钮
	
	hideTop:400,//隐藏的高度
	
	disabledToTop:false//禁用置顶


事件

@getAddr			接收地址信息

@searchBlur			搜索框失去焦点

@getHeight			获取导航栏的高度

@searchInput		搜索框input事件

@按钮名称			点击按钮之后触发的时间，如@save
## 1.0.5（2021-11-08）
无
## 1.0.4（2021-11-08）
自定义导航栏

本插件依赖iconfont字体文件，需要到git中获取字体文件  /static/style中

<zq-navbar v-model="scrollTop" :props="{'navbarTitle':'知秋标题栏',hasSearch:true,isIndex:true}" :initBtn="initBtn"@searchBlur="getSearch"></zq-navbar>

initBtn 是内置的按钮

	*label  	  按钮名称  type为font时显示
	
	*font 		  按钮的图形文字
	
	*iconClass    按钮图形类名
	
	*name		  按钮名称  --必传
	
	*type		  按钮类型 icon  font
	
	*url		  methods为go时的页面跳转
	
	*methods	  点击按钮的处理方式 go click
	
	*class	 	  按钮的类名，用于修改字号颜色等

	{label:"新增",font:'&#xe6e7',iconClass:"icon-add",name:"add",type:'icon',url:"",methods:"click",class:""},
	
	{label:"编辑",font:'&#xe693',iconClass:"icon-edit",name:"edit",type:'icon',url:"",methods:"click",class:""},
	
	{label:"删除",font:"&#xe66b",iconClass:"icon-ashbin",name:"delete",type:'icon',url:"",methods:"click",class:""},
	
	{label:"完成",font:"&#xe6ee",iconClass:"icon-save",name:"save",type:'icon',url:"",methods:"click",class:""},
	
	{label:"扫码",font:"&#xe6cc",iconClass:"icon-scanning",name:"code",type:'icon',url:"",methods:"click",class:""},
	
	{label:"消息",font:"&#xe6b7",iconClass:"icon-notification",name:"news",type:'icon',url:"",methods:"click",class:""},
	
	{label:"刷新",font:"&#xe6c4",iconClass:"icon-refresh",name:"upDate",type:'icon',url:"",methods:"click",class:""},
	
	{label:"条形",font:"&#xe676",iconClass:"icon-chart-bar",name:"chart-bar",type:'icon',url:"",methods:"click",class:""},
	
	{label:"饼图",font:"&#xe676",iconClass:"icon-chart-pie",name:"chart-pie",type:'icon',url:"",methods:"click",class:""},
	
	{label:"设置",font:"&#xe6d4",iconClass:"icon-setting",name:"set",type:'icon',url:"",methods:"click",class:""},
	
	{label:"分享",font:'&#xe6cb;',iconClass:"icon-share",name:"share",type:'icon',url:"",methods:"click",class:""},
	
	{label:"菜单",font:"&#xe6dc",iconClass:"icon-toggle-right",name:"sidebar",type:'icon',url:"",methods:"click",class:""},
	
	{label:"返回",font:'&#xe6e8',iconClass:"icon-arrow-left-bold",name:"back",type:'icon',url:"",methods:"click",class:""},
	
	{label:"首页",font:'&#xe6a2',iconClass:"icon-home",name:"index",type:'icon',url:"",methods:"click",class:""},
	
	{label:"多选",font:'&#xe6b6',iconClass:"icon-keyboard-26",name:"select",type:'icon',url:"",methods:"click",class:""},
	
	{label:"",font:'',iconClass:"",name:"other",type:'font',url:"",methods:"click",class:""},
	
	{label:"电话",font:'&#xe6dd',iconClass:"icon-telephone",name:"phone",type:'icon',url:"",methods:"click",class:""},
	
	{label:"收藏",font:'&#xe69c',iconClass:"icon-fabulous",name:"fabulous",type:'icon',url:"",methods:"click",class:""},
	
	{label:"列表",font:'&#xe6cb;',iconClass:"icon-menu",name:"list",type:'icon',url:"",methods:"click",class:""},
	
	{label:"视图",font:'&#xe6cb;',iconClass:"icon-modular",name:"view",type:'icon',url:"",methods:"click",class:""}

props的接受参数

	*hideTop				当导航栏滚动到置顶位置触发隐藏，需要在父组件中加入
	
								onPageScroll(event) {
									
									this.scrollTop = event.scrollTop;
									
								}
								
								用v-model接收scrollTop，hideTop值为-1则不自动隐藏
								
	*penetrate				导航栏不占用高度，具有穿透特性
	
	*navbarTitleHieght		标题的高度除状态栏的高度（rpx）
	
	*navbarNoneTitleHieght  当标题无内容和无按钮和无气泡时的标题高度（rpx）
	
	*hasSearch				是否显示搜索按钮，展开时覆盖标题栏
	
	*isIndex				返回首页按钮
	
	*disabledToTop			在搜索框展开时超过一定位置展示置顶按钮，或者隐藏时点击标题可置顶，false为禁用置顶
	
	penetrate:false,//是否穿透

	navbarHeight:0,//状态栏高度
	
	navbarTitleHieght:88,//标题高度
	
	navbarNoneTitleHieght:20,//无标题时高度
	
	navbarColor:"#333333",//导航栏字体颜色
	
	navbarBackgroundColor:"#ffffff",//导航栏背景颜色
	
	navbarPenetrateBackgroundColor:"",//穿透背景色
	
	navbarBackgroundImage:null,//导航栏背景图
	
	navbarBackgroundImageOpacity:1,//导航栏透明度
	
	navbarBorderBottomColor:"none",//导航栏边框颜色
	
	navbarTitle:"",//导航栏标题
	
	navbarTitleFontSize:14,//标题字号大小
	
	hasBubble:false,//是否有气泡
	
	hasBoxShadow:false,//是否有阴影
	
	titleAlign:'center',//头部字体排列方式
	
	hasSearch:false,//是否显示搜索框
	
	showSearchBtn:false,//是否显示搜索按钮
	
	searchPrompt:"请输入搜索词",//搜索框提示语
	
	searchBtnText:"搜索",//搜索框按钮文字
	
	searchBtnColor:'',//搜索按钮的颜色
	
	searchBtnFontSize:'',//搜索按钮的字号
	
	searchBtnWidth:80,//搜索按钮宽度
	
	searchAlign:'left',//搜索框文字排列
	
	searchBackgroundColor:'#ffffff',//搜索框背景颜色
	
	searchBorderColor:"#cccccc",//搜索框边框颜色
	
	searchPlaceholderColor:'#eeeeee',//搜索框提示语颜色
	
	hasLocation:false,//是否使用定位
	
	locationText:null,//定位的文字
	
	latitude:0,//定位的纬度
	
	longitude:0,//定位的经度
	
	isBack:false,//是否返回
	
	isIndex:false,//是否返回首页
	
	hideBtn:false,//是否隐藏所有的按钮
	
	hideTop:400,//隐藏的高度
	
	disabledToTop:false//禁用置顶


事件

@getAddr			接收地址信息

@searchBlur			搜索框失去焦点

@getHeight			获取导航栏的高度

@searchInput		搜索框input事件

@按钮名称			点击按钮之后触发的时间，如@save
## 1.0.2（2021-11-08）
自定义导航栏
本插件依赖iconfont字体文件，需要到git中获取字体文件  /static/style中

<zq-navbar v-model="scrollTop" :props="{'navbarTitle':'知秋标题栏',hasSearch:true,isIndex:true}" :initBtn="initBtn"@searchBlur="getSearch"></zq-navbar>

initBtn 是内置的按钮

	*label  	  按钮名称  type为font时显示
	
	*font 		  按钮的图形文字
	
	*iconClass    按钮图形类名
	
	*name		  按钮名称  --必传
	
	*type		  按钮类型 icon  font
	
	*url		  methods为go时的页面跳转
	
	*methods	  点击按钮的处理方式 go click
	
	*class	 	  按钮的类名，用于修改字号颜色等

[{label:"新增",font:'&#xe6e7',iconClass:"icon-add",name:"add",type:'icon',url:"",methods:"click",class:""},
	
	{label:"编辑",font:'&#xe693',iconClass:"icon-edit",name:"edit",type:'icon',url:"",methods:"click",class:""},
	
	{label:"删除",font:"&#xe66b",iconClass:"icon-ashbin",name:"delete",type:'icon',url:"",methods:"click",class:""},
	
	{label:"完成",font:"&#xe6ee",iconClass:"icon-save",name:"save",type:'icon',url:"",methods:"click",class:""},
	
	{label:"扫码",font:"&#xe6cc",iconClass:"icon-scanning",name:"code",type:'icon',url:"",methods:"click",class:""},
	
	{label:"消息",font:"&#xe6b7",iconClass:"icon-notification",name:"news",type:'icon',url:"",methods:"click",class:""},
	
	{label:"刷新",font:"&#xe6c4",iconClass:"icon-refresh",name:"upDate",type:'icon',url:"",methods:"click",class:""},
	
	{label:"条形",font:"&#xe676",iconClass:"icon-chart-bar",name:"chart-bar",type:'icon',url:"",methods:"click",class:""},
	
	{label:"饼图",font:"&#xe676",iconClass:"icon-chart-pie",name:"chart-pie",type:'icon',url:"",methods:"click",class:""},
	
	{label:"设置",font:"&#xe6d4",iconClass:"icon-setting",name:"set",type:'icon',url:"",methods:"click",class:""},
	
	{label:"分享",font:'&#xe6cb;',iconClass:"icon-share",name:"share",type:'icon',url:"",methods:"click",class:""},
	
	{label:"菜单",font:"&#xe6dc",iconClass:"icon-toggle-right",name:"sidebar",type:'icon',url:"",methods:"click",class:""},
	
	{label:"返回",font:'&#xe6e8',iconClass:"icon-arrow-left-bold",name:"back",type:'icon',url:"",methods:"click",class:""},
	
	{label:"首页",font:'&#xe6a2',iconClass:"icon-home",name:"index",type:'icon',url:"",methods:"click",class:""},
	
	{label:"多选",font:'&#xe6b6',iconClass:"icon-keyboard-26",name:"select",type:'icon',url:"",methods:"click",class:""},
	
	{label:"",font:'',iconClass:"",name:"other",type:'font',url:"",methods:"click",class:""},
	
	{label:"电话",font:'&#xe6dd',iconClass:"icon-telephone",name:"phone",type:'icon',url:"",methods:"click",class:""},
	
	{label:"收藏",font:'&#xe69c',iconClass:"icon-fabulous",name:"fabulous",type:'icon',url:"",methods:"click",class:""},
	
	{label:"列表",font:'&#xe6cb;',iconClass:"icon-menu",name:"list",type:'icon',url:"",methods:"click",class:""},
	
	{label:"视图",font:'&#xe6cb;',iconClass:"icon-modular",name:"view",type:'icon',url:"",methods:"click",class:""}]

props的接受参数

	*hideTop				当导航栏滚动到置顶位置触发隐藏，需要在父组件中加入
	
								onPageScroll(event) {
									
									this.scrollTop = event.scrollTop;
									
								}
								
								用v-model接收scrollTop，hideTop值为-1则不自动隐藏
								
	*penetrate				导航栏不占用高度，具有穿透特性
	
	*navbarTitleHieght		标题的高度除状态栏的高度（rpx）
	
	*navbarNoneTitleHieght  当标题无内容和无按钮和无气泡时的标题高度（rpx）
	
	*hasSearch				是否显示搜索按钮，展开时覆盖标题栏
	
	*isIndex				返回首页按钮
	
	*disabledToTop			在搜索框展开时超过一定位置展示置顶按钮，或者隐藏时点击标题可置顶，false为禁用置顶
	
{penetrate:false,//是否穿透

	navbarHeight:0,//状态栏高度
	
	navbarTitleHieght:88,//标题高度
	
	navbarNoneTitleHieght:20,//无标题时高度
	
	navbarColor:"#333333",//导航栏字体颜色
	
	navbarBackgroundColor:"#ffffff",//导航栏背景颜色
	
	navbarPenetrateBackgroundColor:"",//穿透背景色
	
	navbarBackgroundImage:null,//导航栏背景图
	
	navbarBackgroundImageOpacity:1,//导航栏透明度
	
	navbarBorderBottomColor:"none",//导航栏边框颜色
	
	navbarTitle:"",//导航栏标题
	
	navbarTitleFontSize:14,//标题字号大小
	
	hasBubble:false,//是否有气泡
	
	hasBoxShadow:false,//是否有阴影
	
	titleAlign:'center',//头部字体排列方式
	
	hasSearch:false,//是否显示搜索框
	
	showSearchBtn:false,//是否显示搜索按钮
	
	searchPrompt:"请输入搜索词",//搜索框提示语
	
	searchBtnText:"搜索",//搜索框按钮文字
	
	searchBtnColor:'',//搜索按钮的颜色
	
	searchBtnFontSize:'',//搜索按钮的字号
	
	searchBtnWidth:80,//搜索按钮宽度
	
	searchAlign:'left',//搜索框文字排列
	
	searchBackgroundColor:'#ffffff',//搜索框背景颜色
	
	searchBorderColor:"#cccccc",//搜索框边框颜色
	
	searchPlaceholderColor:'#eeeeee',//搜索框提示语颜色
	
	hasLocation:false,//是否使用定位
	
	locationText:null,//定位的文字
	
	latitude:0,//定位的纬度
	
	longitude:0,//定位的经度
	
	isBack:false,//是否返回
	
	isIndex:false,//是否返回首页
	
	hideBtn:false,//是否隐藏所有的按钮
	
	hideTop:400,//隐藏的高度
	
	disabledToTop:false//禁用置顶
	
}


事件

@getAddr			接收地址信息

@searchBlur			搜索框失去焦点

@getHeight			获取导航栏的高度

@searchInput		搜索框input事件

@按钮名称			点击按钮之后触发的时间，如@save
## 1.0.1（2021-11-08）
更新文档说明
## 1.0.0（2021-11-08）
自定义导航栏
本插件依赖iconfont字体文件，需要到git中获取字体文件  /static/style中

<zq-navbar 
	v-model="scrollTop" 
	:props="{'navbarTitle':'知秋标题栏',hasSearch:true,isIndex:true}" 
	:initBtn="initBtn" 
	@searchBlur="getSearch"
></zq-navbar>

initBtn 是内置的按钮
	*label  	  按钮名称  type为font时显示
	*font 		  按钮的图形文字
	*iconClass    按钮图形类名
	*name		  按钮名称  --必传
	*type		  按钮类型 icon  font
	*url		  methods为go时的页面跳转
	*methods	  点击按钮的处理方式 go click
	*class	 	  按钮的类名，用于修改字号颜色等

[
	{label:"新增",font:'&#xe6e7',iconClass:"icon-add",name:"add",type:'icon',url:"",methods:"click",class:""},
	{label:"编辑",font:'&#xe693',iconClass:"icon-edit",name:"edit",type:'icon',url:"",methods:"click",class:""},
	{label:"删除",font:"&#xe66b",iconClass:"icon-ashbin",name:"delete",type:'icon',url:"",methods:"click",class:""},
	{label:"完成",font:"&#xe6ee",iconClass:"icon-save",name:"save",type:'icon',url:"",methods:"click",class:""},
	{label:"扫码",font:"&#xe6cc",iconClass:"icon-scanning",name:"code",type:'icon',url:"",methods:"click",class:""},
	{label:"消息",font:"&#xe6b7",iconClass:"icon-notification",name:"news",type:'icon',url:"",methods:"click",class:""},
	{label:"刷新",font:"&#xe6c4",iconClass:"icon-refresh",name:"upDate",type:'icon',url:"",methods:"click",class:""},
	{label:"条形",font:"&#xe676",iconClass:"icon-chart-bar",name:"chart-bar",type:'icon',url:"",methods:"click",class:""},
	{label:"饼图",font:"&#xe676",iconClass:"icon-chart-pie",name:"chart-pie",type:'icon',url:"",methods:"click",class:""},
	{label:"设置",font:"&#xe6d4",iconClass:"icon-setting",name:"set",type:'icon',url:"",methods:"click",class:""},
	{label:"分享",font:'&#xe6cb;',iconClass:"icon-share",name:"share",type:'icon',url:"",methods:"click",class:""},
	{label:"菜单",font:"&#xe6dc",iconClass:"icon-toggle-right",name:"sidebar",type:'icon',url:"",methods:"click",class:""},
	{label:"返回",font:'&#xe6e8',iconClass:"icon-arrow-left-bold",name:"back",type:'icon',url:"",methods:"click",class:""},
	{label:"首页",font:'&#xe6a2',iconClass:"icon-home",name:"index",type:'icon',url:"",methods:"click",class:""},
	{label:"多选",font:'&#xe6b6',iconClass:"icon-keyboard-26",name:"select",type:'icon',url:"",methods:"click",class:""},
	{label:"",font:'',iconClass:"",name:"other",type:'font',url:"",methods:"click",class:""},
	{label:"电话",font:'&#xe6dd',iconClass:"icon-telephone",name:"phone",type:'icon',url:"",methods:"click",class:""},
	{label:"收藏",font:'&#xe69c',iconClass:"icon-fabulous",name:"fabulous",type:'icon',url:"",methods:"click",class:""},
	
	{label:"列表",font:'&#xe6cb;',iconClass:"icon-menu",name:"list",type:'icon',url:"",methods:"click",class:""},
	{label:"视图",font:'&#xe6cb;',iconClass:"icon-modular",name:"view",type:'icon',url:"",methods:"click",class:""},
]

props的接受参数
	*hideTop				当导航栏滚动到置顶位置触发隐藏，需要在父组件中加入
								onPageScroll(event) {
									this.scrollTop = event.scrollTop;
								}
								用v-model接收scrollTop，hideTop值为-1则不自动隐藏
	*penetrate				导航栏不占用高度，具有穿透特性
	*navbarTitleHieght		标题的高度除状态栏的高度（rpx）
	*navbarNoneTitleHieght  当标题无内容和无按钮和无气泡时的标题高度（rpx）
	*hasSearch				是否显示搜索按钮，展开时覆盖标题栏
	*isIndex				返回首页按钮
	*disabledToTop			在搜索框展开时超过一定位置展示置顶按钮，或者隐藏时点击标题可置顶，false为禁用置顶
{
	penetrate:false,//是否穿透
	navbarHeight:0,//状态栏高度
	navbarTitleHieght:88,//标题高度
	navbarNoneTitleHieght:20,//无标题时高度
	navbarColor:"#333333",//导航栏字体颜色
	navbarBackgroundColor:"#ffffff",//导航栏背景颜色
	navbarPenetrateBackgroundColor:"",//穿透背景色
	navbarBackgroundImage:null,//导航栏背景图
	navbarBackgroundImageOpacity:1,//导航栏透明度
	navbarBorderBottomColor:"none",//导航栏边框颜色
	navbarTitle:"",//导航栏标题
	navbarTitleFontSize:14,//标题字号大小
	hasBubble:false,//是否有气泡
	hasBoxShadow:false,//是否有阴影
	titleAlign:'center',//头部字体排列方式
	hasSearch:false,//是否显示搜索框
	showSearchBtn:false,//是否显示搜索按钮
	searchPrompt:"请输入搜索词",//搜索框提示语
	searchBtnText:"搜索",//搜索框按钮文字
	searchBtnColor:'',//搜索按钮的颜色
	searchBtnFontSize:'',//搜索按钮的字号
	searchBtnWidth:80,//搜索按钮宽度
	searchAlign:'left',//搜索框文字排列
	searchBackgroundColor:'#ffffff',//搜索框背景颜色
	searchBorderColor:"#cccccc",//搜索框边框颜色
	searchPlaceholderColor:'#eeeeee',//搜索框提示语颜色
	hasLocation:false,//是否使用定位
	locationText:null,//定位的文字
	latitude:0,//定位的纬度
	longitude:0,//定位的经度
	isBack:false,//是否返回
	isIndex:false,//是否返回首页
	hideBtn:false,//是否隐藏所有的按钮
	hideTop:400,//隐藏的高度
	disabledToTop:false//禁用置顶
}


事件
@getAddr			接收地址信息
@searchBlur			搜索框失去焦点
@getHeight			获取导航栏的高度
@searchInput		搜索框input事件
@按钮名称			点击按钮之后触发的时间，如@save