# zq-navbar
## 组件使用说明

- 该组件使用的字体文件展示`initBtn`内的字体文字，需要到git下载字体文件方可正常使用
- 该组件默认向下滚动到`400rpx`自动隐藏滚动条，穿透时默认根据滚动距离`0-300rpx`渐变加深透明度`0-1`
- 该组件除了字体大小使用`px`全部使用的`rpx`单位
- 劳烦各位大佬点个收藏  [git地址](https://gitee.com/smallzhi2020/zq-frame)
- 字体文件为 [icon目录下的icon和appicon文件，里面含有其他字体文字],不需要单独引用，组件内含有字体问题，如需增加新的图标可将文件内的字体文件替换掉(http://39.105.116.130:8888/down/2f7qJEjfBQRi)
- [效果展示预览图](http://39.105.116.130:8888/down/9jtxuIneJPZY)

- template代码：

```
	<zq-navbar 
		v-model="scrollTop" 
		:props="{'navbarTitle':'知秋标题栏'}"
		:initBtn="[{name:'add'}]"
	>
		<template v-slot:left></template>
		<template v-slot:center></template>
		<template v-slot:right></template>
		<template v-slot:sidebar>该插槽为侧边栏插槽，配合initBtn中的sidebar使用</template>
	</zq-navbar>
```

## 组件属性的全局配置

- 在pages.json配置不使用原生导航栏
```
	"globalStyle": {
		"navigationBarTextStyle": "white",
		"navigationBarTitleText": "",
		"navigationBarBackgroundColor": "#F8F8F8",
		"backgroundColor": "#F8F8F8",
		"navigationStyle":"custom",
		"mp-alipay":{
		   "transparentTitle": "always",
		   "titlePenetrate": "YES"
		},
		"app-plus":{
			"titleNView":false
		}
	}
```

- 在main.js文件中定义$store

```
import store from './store';
Vue.prototype.$store = store;
```

- 在store的文件中添加以下内容，不使用的属性可不配置,单页面可通过`:props`设置

```
	const store = new Vuex.Store({
		state: {
			zqNavbarSetting:{
				penetrate:false,//是否穿透
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
			}
		}
	})
```

- 全局监听页面滚动的方法，在main.js
- Scroll为`on/Page/Scroll`，不知道为啥被解析成Scroll
```
Vue.mixin({
	data(){
		return{
			scrollTop:0
		}
	},
	onPageScroll(event) {//onPageScroll
		this.scrollTop = event.scrollTop;
	}
})
```

## 当需要吸附tab组件时，可以通过该方式吸附
- 多个吸附对象如果不想前面的组件被后面的组件覆盖则设置`top`时应当将当前`adsorbs['#box'].top`加上前面所有吸附对象的`总高`
- 被吸附对象为`主体内容`，占位标签`无内容标签`，为防止页面出现闪动两个标签应当`等高`

```
<zq-navbar 
	v-model="scrollTop" 
	:props="{'navbarTitle':'知秋标题栏'}"
	:adsorbs="['#box']" 
	@getAdsorbs="getAdsorbs"
>
	<view class="box" id="box">
		<view class="box" 
			:style="{
				'position':'fixed',
				top:adsorbs['#box'].top + 'rpx'}" 
				v-if="adsorbs['#box'] && adsorbs['#box'].adsorb"
			>
			被吸附对象
		</view>
		<view class="box">
			被吸附对象占位标签，为避免出现闪动；后期会单独写一个吸顶组件，直接套用就好
		</view>
	</view>
</zq-navbar>
```


## 组件基本API参数

|属性名|类型|默认值|必填|说明|
| -- | -- | -- | -- | -- |
|value|[Number,String]|0|否|该字段可以通过监听当前的页面滚动条高度，当高度超过props中配置的hideTop时，往下滚动自动隐藏导航栏，往上滚动显示导航栏
|props|Object|null|否|设置导航栏的属性|
|initBtn|Array|[]|否|导航栏中内置的按钮，该按钮使用的字体文件，通过git下载static包里面的字体文体配合使用|
|searchValue|String|""|否|搜索框的绑定值|
|adsorbs|Array|false|否|监听需要吸附的组件，建议使用`['#id']`传值，如tab组件滚动到顶部，吸附在导航栏下方|

## props的参数

|属性名|类型|默认值|必填|说明|
| -- | -- | -- | -- | -- |
|penetrate|Boolean|false|否|导航栏是否穿透,不占用页面高度|
|navbarBackgroundImage|String|null|否|导航栏的背景图|
|navbarBackgroundImageHeight|Number|null|否|导航栏背景图的高度,不设置默认使用导航栏高度|
|navbarBackgroundImageMode|String|aspectFill|否|导航栏的背景图模式|
|navbarBackgroundImageOpacity|Number|1|否|导航栏的透明度，在isPenetrateImageGradual为true时不使用该透明度|
|navbarPenetrateBackgroundColor|String|''|否|穿透时导航栏的背景颜色，使用背景图片时该属性不生效|
|isPenetrateScrollGradual|Boolean|true|否|是否随着滚动而改变透明度，需要配合v-model使用，只对背景色生效|
|isPenetrateImageGradual|Boolean|false|否|是否随着滚动而改变透明度，需要配合v-model使用，只对图片生效|
|penetrateGradualMin|Number|0|否|渐变透明度的最小值|
|penetrateGradualMax|Number|1|否|渐变透明度的最大值|
|penetrateGradualBackgroundColor|String|null|否|渐变的背景色，如果没有值时，使用navbarBackgroundColor|
|penetrateGradualMaxTop|Number|300|否|渐变的最大高度，仅在该高度内渐变，值为-1时将不使用渐变|
|navbarHeight|Number|0|否|导航栏状态栏的高度，已自动计算高度，也可以通过设置高度来改变高度|
|navbarTitleHieght|Number|88|否|小程序的气泡高度|
|navbarNoneTitleHieght|Number|20|否|如果没有气泡或者没有按钮以及标题没有内容该高度使用|
|navbarColor|String|#333333|否|导航栏的整体字体颜色|
|navbarBackgroundColor|String|#ffffff|否|导航栏的背景颜色，使用背景图片时该属性不生效|
|navbarTitle|String|""|否|导航栏标题，超过标题栏宽度自动省略隐藏，双击标题可将页面滚动至最高处，可通过disabledToTop属性禁用|
|navbarTitleFontSize|Number|14|否|导航栏的字号大小，使用的是px|
|hasBubble|Boolean|false|否|是否存在右边的气泡，已自动判断微信小程序时为true|
|titleAlign|String|center|否|导航栏标题文字的排列方式|
|hasSearch|Boolean|false|否|是否显示搜索按钮，使用时点击搜索按钮会展开搜索框|
|showSearchBtn|Boolean|true|否|是否显示搜索框展开时右侧的按钮|
|searchPrompt|String|请输入搜索词|否|搜索框内的placeholder占位文字|
|searchBtnText|String|搜索|否|搜索框内获取焦点时弹出的键盘右下角文字|
|searchBtnColor|String|''|否|搜索按钮的颜色，不赋值默认使用导航栏字体颜色|
|searchBtnFontSize|Number|null|否|搜索按钮的字号大小，不赋值默认使用导航栏字号大小|
|searchBtnWidth|Number|80|否|搜索按钮的盒子宽度|
|searchAlign|String|left|否|搜索框内字体排列方式|
|searchBackgroundColor|String|#ffffff|否|搜索框的背景颜色|
|searchBorderColor|String|#cccccc|否|搜索框的边框颜色|
|hasLocation|Boolean|false|否|是否显示左侧定位|
|locationText|String|null|否|无定位时的文字|
|latitude|Number|0|否|定位的纬度|
|longitude|Number|0|否|定位的经度|
|hasHome|Boolean|false|否|是否显示返回首页按钮|
|homeUrl|String|/pages/index/index|否|返回首页的页面路由|
|hideTop|String|400|否|导航栏在页面滚动到该值是隐藏，往上滚动时显示，值为-1时不隐藏|
|disabledToTop|Boolean|false|否|禁用点击导航栏标题或点击搜索框左侧的置顶按钮将页面滚动到最高处|


## initBtn的参数

- name为必传属性，如果不传其他属性默认使用内置属性
- initBtn长度大于2的时候，全部通过...隐藏，可点击...展开查看

|属性名|类型|默认值|必填|说明|
| -- | -- | -- | -- | -- |
|label|String|新增|否|按钮中文名称|
|font|String|&#xe6e7|否|字体文件中的字体content内容|
|iconClass|String|icon-add|否|字体文件中的字体类型|
|name|String|add|`是`|使用对应按钮的名字|
|type|String|icon|否|按钮为icon时使用font，font使用label|
|url|String|""|否|methods为go时的跳转链接|
|methods|String|""|否|按钮的方法click为点击，go为跳转路由|
|class|String|""|否|按钮的类型，可以传字体文字的类名|

```
initBtn:[
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
  {label:"收藏",font:'&#xe69c',iconClass:"icon-fabulous",name:"fabulous",type:'icon',url:"",methods:"click",class:""},
  {label:"列表",font:'&#xe6cb;',iconClass:"icon-menu",name:"list",type:'icon',url:"",methods:"click",class:""},
  {label:"视图",font:'&#xe6cb;',iconClass:"icon-modular",name:"view",type:'icon',url:"",methods:"click",class:""}
]
```

## 组件事件
|事件名|说明|
| --| --|
|@getAddr|获取定位信息|
|@searchBlur|搜索框失去焦点时触发事件|
|@getHeight|获取当前导航栏的高度|
|@searchInput|搜索框的input事件|
|@getAdsorbs|吸附对象的属性获取，返回格式{'#id':{adsorb:false,top:0}}|
|@按钮名称|initBtn中的对应事件，如使用了add的按钮，则会触发@add事件|