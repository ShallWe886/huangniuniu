<template>
	<view class="fixed_padding_bottom_xxxl" :class="{popupShow:popupShow}">
		<view class="bg_box">
			<image :src="imageUrl+'/my_bg.png'" mode="aspectFill" class="my_bg"></image>
			<view class="avator_box">
				<view class="flex_row ">
					<image v-if="userInfo && userInfo.headimgurl" @click="openAvator(0)" :src="userInfo.headimgurl" mode="aspectFill" class="avator_img flex_shrink" ></image>
					<image @click="openAvator(0)" src="/static/image/avator2.png" mode="aspectFill" class="avator_img flex_shrink" v-else></image>
					<view class="width_all margin_left_m">
						<view class="flex_row">
							<view class="font_size_title_l color_black_333 font_weight">
								{{userInfo.nickname || ''}}
							</view>
							<view class="patient_man color_white font_size_text_s margin_left" @click="toManPatient">
								就诊人信息
							</view>
						</view>
						<view class="flex_row margin_top_l">
							<view class="flex_row my_label" @click="lookIntShop">
								<image src="/static/image/my_label_img01.png" mode="aspectFill" class="label_img">
								</image>
								<view class="font_size_text_s color_orange flex_row">
									<view class="margin_right_xs">
										我的积分 
										<!-- #ifdef APP-PLUS -->
										{{userInfo && userInfo.user_integral ? userInfo.user_integral : 0}}
										<!-- #endif -->
										<!-- #ifdef MP-WEIXIN -->
										{{userInfo.user_integral || 0}}
										<!-- #endif -->
									</view>
									<!-- #ifdef APP-PLUS -->
									<span class="margin_left_s" style="font-size: 32rpx;">></span>
									<!-- #endif -->
									<!-- #ifdef MP-WEIXIN -->
									<u-icon name="arrow-right" color="#FF6437" size="25"></u-icon>
									<!-- #endif -->
								</view>
							</view>
							<view class="flex_row my_label margin_left_m" @click="lookDong">
								<image src="/static/image/my_label_img02.png" mode="aspectFill" class="label_img">
								</image>
								<view class="font_size_text_s color_orange flex_row" >
									<view class="margin_right_xs">
										咚咚币
										<!-- #ifdef APP-PLUS -->
										{{userInfo ? userInfo.balance : 0}}
										<!-- #endif -->
										<!-- #ifdef MP-WEIXIN -->
										{{userInfo.balance || 0}}
										<!-- #endif -->
									</view>
									<!-- #ifdef APP-PLUS -->
									<span class="margin_left_s" style="font-size: 32rpx;">></span>
									<!-- #endif -->
									<!-- #ifdef MP-WEIXIN -->
									<u-icon name="arrow-right" color="#FF6437" size="25"></u-icon>
									<!-- #endif -->
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="box_690 margin_top_xl padding_top_l padding_left_l padding_right_l padding_bottom_xl">
					<view class="flex_row">
						<view class="font_size_title_s color_black_333 font_weight">
							我的订单
						</view>
						<view class="flex_row margin_left font_size_text_s color_black_888" @click="toMyOrder(0)">
							更多
							
							<!-- #ifdef APP-PLUS -->
							<span style="font-size: 32rpx;">></span>
							<!-- #endif -->
							<!-- #ifdef MP-WEIXIN -->
							<u-icon name="arrow-right" size="25"></u-icon>
							<!-- #endif -->
						</view>
					</view>
					<view class="flex_row justify_between margin_top_l">
						<view class="flex_column" v-for="(item,index) in orderList" @click="toMyOrder(index)" :key="index">
							<image :src="item.img" mode="aspectFill" class="my_order_img"></image>
							<view class="font_size_text_l color_black_333 margin_top_m">
								{{item.title}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="flex_row  margin_left_l margin_top_l">
			
			<view class="my_center_box " @click="lookQuestion">
				<image :src="imageUrl+'/my_center02.png'" mode="aspectFill"></image>
				<view class="my_center_item">
					<view class="font_size_title_m color_white font_weight">
						常见问题
					</view>
					<view style="height: 26rpx;" class="font_size_text_s color_white margin_top_s">
						<!-- 副标题副标题 -->
					</view>
					<view class="font_size_text_xs color_white my_center_invite margin_top_s">
						立即查看
					</view>
				</view>
			</view>
			<view class="my_center_box margin_left_l" @click="invitefriend">
				<image :src="imageUrl+'/my_center01.png'" mode="aspectFill"></image>
				<view class="my_center_item" >
					<view class="font_size_title_m color_white font_weight">
						邀请好友
					</view>
					<view class="font_size_text_s color_white margin_top_s">
						患者邀请赠送100积分
					</view>
					<view class="font_size_text_xs color_white my_center_invite margin_top_s" >
						立即邀请
					</view>
				</view>
			</view>
		</view>
		<view class="flex_row my_list margin_left_l margin_top_xl margin_bottom_m" v-for="(item,index) in myList" @click="lookItem(item,index)" :key="index">
			<image :src="item.img" mode="aspectFill"></image>
			<view class="font_size_text_l color_black_333 margin_left_l">
				{{item.title}}
			</view>
			<view class="margin_left font_size_text_l color_black_999" v-if="item.title == '版本号' ">
				v{{verson}}
			</view>
			<view class="margin_left font_size_text_l color_black_999" v-else-if="item.title == '清除缓存' ">
				{{cacheSize}}
			</view>
			<view class="margin_left font_size_text_l color_black_999" v-else>
				<u-icon name="arrow-right"></u-icon>
			</view>
		</view>
		<view class="my_out font_size_text_l color_black_333 margin_top_l" @click="signOut">
			退出登录
		</view>
		<u-popup :show="clearShow" :round="20" mode="center" :closeable="true" @close="closeClaer">
			<view style="width: 600rpx; height: 390rpx;box-sizing: border-box;padding-top: 80rpx;" class="flex_column">
				<view class="font_weight font_size_title_xl color_black_333 text_align_center">
					清除缓存
				</view>
				<view class="margin_top_l color_black_666 font_size_text_l margin_top_l text_align_center">
					所有缓存将会被清除
				</view>
				<view class="flex_row margin_top_xl">
					<view class="quick_btn font_size_title_s color_orange " @click="closeQuickPop(0)">
						取消
					</view>
					<view class="quick_btn font_size_title_s color_white margin_left_l" @click="closeQuickPop(1)">
						确认
					</view>
				</view>
			</view>
		</u-popup>
		<!-- #ifdef MP-WEIXIN || H5 -->
		<tabbar tabbarIndex="5"></tabbar>
		<!-- #endif -->
		<!-- #ifdef APP-PLUS -->
		<view class="flex_row justify_around tabbar_box bg_white">
			<view class="flex_column " @click="toTabbar(1)">
				<block v-if="tabbarIndex == 1">
					<image src="/static/image/tabbar02.png" class="tabbar_img"></image>
					<view class="font_size_text_xxs margin_top_s color_orange">
						首页
					</view>
				</block>
				<block v-else>
					<image src="/static/image/tabbar01.png" class="tabbar_img"></image>
					<view class="font_size_text_xxs margin_top_s color_black_888">
						首页
					</view>
				</block>
		
			</view>
			<!-- <view class="flex_column " @click="toTabbar(2)">
				<block v-if="tabbarIndex == 2">
					<image src="/static/image/tabbar04.png" class="tabbar_img"></image>
					<view class="font_size_text_xxs margin_top_s color_orange">
						购物车
					</view>
				</block>
				<block v-else>
					<image src="/static/image/tabbar03.png" class="tabbar_img"></image>
					<view class="font_size_text_xxs margin_top_s color_black_888">
						购物车
					</view>
				</block>
		
			</view> -->
			<view class="flex_column " style="position: relative;" @click="toTabbar(4)">
				<view class="flex_column" style="position: absolute;top: -32px;"  @click.stop="toTabbar(3)">
					<view style="position: relative;">
						<view
							style="position: absolute;top:-45px;left: -25px;width: 100rpx;height: 100rpx;border-radius: 50%;padding: 5px;background: #ffffff;">
							<view class="centerImg flex_column " style="">
								<image src="/static/image/tabbar09.png" class="tabbar_img_center margin_top_m"></image>
							</view>
					
						</view>
					</view>
					
					<view class="font_size_text_xxs margin_top_m color_black_888">
						人工预约
					</view>
				</view>
				<block v-if="tabbarIndex == 4">
					<image src="/static/image/tabbar06.png" class="tabbar_img"></image>
					<view class="font_size_text_xxs margin_top_s color_orange">
						健康百科
					</view>
				</block>
				<block v-else>
					<image src="/static/image/tabbar05.png" class="tabbar_img"></image>
					<view class="font_size_text_xxs margin_top_s color_black_888">
						健康百科
					</view>
				</block>
		
			</view>
			<view class="flex_column " @click="toTabbar(5)">
				<block v-if="tabbarIndex == 5">
					<image src="/static/image/tabbar08.png" class="tabbar_img"></image>
					<view class="font_size_text_xxs margin_top_s color_orange">
						我的
					</view>
				</block>
				<block v-else>
					<image src="/static/image/tabbar07.png" class="tabbar_img"></image>
					<view class="font_size_text_xxs margin_top_s color_black_888">
						我的
					</view>
				</block>
		
			</view>
		</view>
		<u-popup :show="quickAppointShow" :closeable="true" mode="center" :round="20" @close="closeQuick">
			<view class="flex_column " style="width: 600rpx; box-sizing: border-box;padding: 50rpx 30rpx 60rpx 30rpx ;">
				<view class="font_size_title_xxl color_black_333 font_weight " style="margin-top: 30rpx;">
					咨询热线
				</view>
				<view class="font_size_title_xl color_black_333 font_weight margin_top_m" @click="setText">
					010-6565-556
				</view>
				<view class="flex_row margin_top_xl ">
					<view class="quick_btn font_size_title_s color_orange " @click="closeQuickPop(0)">
						取消
					</view>
					<view class="quick_btn font_size_title_s color_white margin_left_l" @click="closeQuickPop(1)">
						确认
					</view>
				</view>
			</view>
		</u-popup>
		<!-- #endif -->
		<u-popup :show="avatorShow" mode="bottom" :round="15" :closeable="true" @close="closeAvator">
			<view class="padding_l text_align_center font_size_title_s color_black font_weight">
				修改头像
			</view>
			<view class="justify_center flex_row">
				<UpLoadImg @input="uploadImg" :list="list_img" ShowNum="1"></UpLoadImg>
			</view>
			<view class="flex_row margin_top_xl justify_center margin_bottom_l">
				<view class="quick_btn font_size_title_s color_orange " @click="closeAvator">
					取消
				</view>
				<view class="quick_btn font_size_title_s color_white margin_left_l" @click="openAvator(1)">
					确认
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import UpLoadImg from "@/components/UpLoad.vue"
	// import enviroment from "@/static/js/enviroment.js"
	// import Load from '@/static/utils/load.js'
	export default {
		components: {
			UpLoadImg
		},
		data() {
			return {
				tabbarIndex: 5,
				popupShow: false,
				avatorShow: false,
				quickAppointShow: false,
				clearShow: false,
				orderList: [{
						title: '待付款',
						img: '/static/image/my_order01.png'
					},
					{
						title: '待接单',
						img: '/static/image/my_order02.png'
					},
					{
						title: '服务中',
						img: '/static/image/my_order03.png'
					},
					{
						title: '已完成',
						img: '/static/image/my_order04.png'
					},
					{
						title: '退款',
						img: '/static/image/my_order05.png'
					}
				],
				myList: [{
						img: '/static/image/my_list01.png',
						title: '版本号',
						isShow: 'false'
					},
					{
						img: '/static/image/my_list02.png',
						title: '消息推送设置',
						isShow: 'true',
						src:'/aUserPages/setTime/setTime'
					},
					{
						img: '/static/image/my_list03.png',
						title: '清除缓存',
						isShow: 'false'
					},
					{
						img: '/static/image/my_list04.png',
						title: '用户协议',
						isShow: 'true',
						src:'/aUserPages/contract/contract'
					},
					{
						img: '/static/image/my_list05.png',
						title: '隐私条款',
						isShow: 'true',
						src:'/aUserPages/contract/contract'
					},
				],
				// userInfo:{ //用户信息
				// 	user_id:2,
				// 	username:"17621792920",
				// 	nickname:"17621792920",
				// 	headimgurl:NULL,
				// 	user_integral:"7000",
				// 	balance:"97030.00"
				// },
				userInfo:null,
				cacheSize:0,
				verson:1,
				list_img: []
				
			}
		},
		onLoad() {
			// #ifdef MP-WEIXIN
				this.myList.splice(2,1)
			// #endif
			this.checkCache()
			uni.showLoading({title: '加载中',mask:true});
		},
		onShow() {
			this.getUserInfo()
		},
		methods: {
			closeAvator() {
				this.avatorShow = false
				this.popupShow = false
			},
			openAvator(status) {
				if(status > 0) {
					this.$api.setProfile({headimgurl: this.list_img.toString()}).then(res=>{
						console.log('res',res);
						this.getUserInfo()
						this.avatorShow = false
						this.popupShow = false
					})
				} else {
					this.avatorShow = true
					this.popupShow = true
					this.list_img = this.userInfo && this.userInfo.headimgurl ? [this.userInfo.headimgurl] :[]
				}
			},
			uploadImg(e) {
				this.list_img = e
			},
			toTabbar(status) {
				if (status == 1) {
					uni.reLaunch({
						url: '/pages/index/index'
					})
				} else if (status == 2) {//购物车
					uni.reLaunch({
						url: '/aUserPages/shopCar/shopCar'
					})
				} else if (status == 3) { //急速预约
					this.quickAppointShow = true
			
				} else if (status == 4) {
					uni.reLaunch({
						url: '/aUserPages/healthy/healthy'
					})
				} else if (status == 5) {
					uni.reLaunch({
						url: '/aUserPages/my/my'
					})
				}
			},
			setText(e) {
				//点击复制
				uni.setClipboardData({
					data: '131 8901 9301',
					success: function() {
						uni.showToast({
							title: "复制成功",
							icon: "none"
						})
					}
				});
			},
			closeQuickPop(type) {
				this.quickAppointShow = !this.quickAppointShow
				if (type == 1) {
					uni.makePhoneCall({
						phoneNumber: '010-6565-556' //仅为示例
					});
				}
			},
			closeQuick(e) {
				console.log("关闭")
				this.quickAppointShow = false
			},
			getUserInfo(e){
				this.$api.getMyInfo({}).then(res=>{
					this.userInfo = res
					this.userInfo.user_integral = parseInt(res.user_integral)
					// this.userInfo.user_integral = this.userInfo ? parseFloat(this.userInfo.user_integral).toFixed(2) : 0;
					console.log('@@', res,this.userInfo);
					uni.hideLoading()
				})
			},
			//查看订单
			toMyOrder(status) {
				uni.navigateTo({
					url: "/aUserPages/my/myOrder?status=" + status
				})
			},
			invitefriend(e){ // 邀请好友
				uni.navigateTo({
					url:"/aUserPages/inviteFriends/inviteFriends?invite_type=1"
				})
			},
			lookQuestion(e){ //常见问题
				uni.navigateTo({
					url:"/aUserPages/question/question?type=1"
				})
			},
			lookItem(item,index){
				 if(item.title == '消息推送设置'){
					uni.navigateTo({
						url:item.src
					})
				}else if(item.title == '清除缓存'){
					this.clearShow = true
				}else if(item.title == '用户协议'){
					uni.navigateTo({
						url:item.src+"?type="+0
					})
				}else if(item.title == '隐私条款'){
					uni.navigateTo({
						url:item.src+"?type="+1
					})
				}
			},
			lookDong(e){//查看东东币
			console.log(11111111)
				uni.navigateTo({
					url:"/aUserPages/my/dongdong/dongdong"
				})
				
			},
			lookIntShop(e){//积分商城
				uni.navigateTo({
					url:"/aUserPages/integralShop/detailed"
				})
			},
			toManPatient(e){//患者管理
				uni.navigateTo({
					url:"/aUserPages/patientList/patientList"
				})
			},
			closeClaer(e){
				this.clearShow = false
			},
			signOut(e){
				uni.removeStorageSync('token')
				uni.navigateTo({
					url:'/aUserPages/login/login'
				})
			},
			checkCache() { // 计算应用缓存、版本号
				// 使用plus.cache.calculate 获取应用的缓存大小
				var self = this;
				// #ifdef APP-PLUS
				plus.cache.calculate(function(size) { //size是多少个字节单位是b
					if (size < 1024) {
						self.cacheSize = size + 'B';
					} else if (size / 1024 >= 1 && size / 1024 / 1024 < 1) {
						self.cacheSize = Math.floor(size / 1024 * 100) / 100 + 'KB';
					} else if (size / 1024 / 1024 >= 1) {
						self.cacheSize = Math.floor(size / 1024 / 1024 * 100) / 100 + 'M';
					}
				});
				// plus.runtime.getProperty(plus.runtime.appid, (wgtinfo) => {
				// 　　console.log(wgtinfo)
				// 	self.verson = wgtinfo
				// })
				// #endif
					uni.getSystemInfo({
				　　　　success:  (res) =>{
				           this.verson = res.appVersion  
				　　　　}
				　　});
				// // #ifdef MP-WEIXIN
				// 　
				// 　　const accountInfo = wx.getAccountInfoSync();
				// 　　this.verson = accountInfo.miniProgram.version 
				// // #endif
			},
			closeQuickPop(type){
				this.clearShow = false
				if(type == 1){//清除缓存
					
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	image {
		will-change: transform;
		width: auto;
		height: auto;
	}
	.popupShow {
		overflow: hidden;
		position: fixed;
		height: 100vh;
		width: 100%;
	}
	.tabbar_box {
		height: 160rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 9999;
	}
	
	.tabbar_img {
		width: 38rpx;
		height: 38rpx;
	}
	
	.centerImg {
		width: 90rpx;
		height: 90rpx;
		border-radius: 50%;
		background: linear-gradient(to bottom right, #FF6437, #FF9B51);
		box-shadow: 0px 0px 0px #fff
	}
	
	.tabbar_img_center {
		width: 44rpx;
		height: 44rpx;
	}
	
	.quick_btn {
		width: 220rpx;
		text-align: center;
		height: 72rpx;
		line-height: 72rpx;
		border-radius: 70rpx;
	
	
		&:nth-child(1) {
			background-color: #f8f8f8;
			border: 2rpx solid #FF6437;
		}
	
		&:nth-child(2) {
			background: linear-gradient(to right, #FF6437, #FF9B51);
		}
	}
	.bg_box {
		width: 100%;
		height: 470rpx;
		position: relative;

		.my_bg {
			width: 100%;
			height: 450rpx;
		}

		.avator_box {
			width: 750rpx;
			position: absolute;
			top: 40rpx;
			left:0;
			padding-left: 30rpx;
			box-sizing: border-box;
		}

		.avator_img {
			width: 110rpx;
			height: 110rpx;
			border-radius: 50%;
			background-color: bisque;
		}

		.my_label {
			padding: 5rpx 15rpx;
			border-radius: 18rpx;
			background-color: #FFFFFF;

			.label_img {
				width: 24rpx;
				height: 24rpx;

			}
		}

		.patient_man {
			width: 142rpx;
			height: 42rpx;
			line-height: 42rpx;
			text-align: center;
			border-radius: 25rpx 0 0 25rpx;
			background: linear-gradient(to right, #FF6437, #FF9B51);
		}

		.my_order_img {
			width: 64rpx;
			height: 64rpx;
		}

	}

	.my_center_box {
		position: relative;

		image {
			width: 330rpx;
			height: 180rpx;
		}

		.my_center_item {
			position: absolute;
			top: 0;
			left: 0;
			width: 330rpx;
			height: 180rpx;
			box-sizing: border-box;
			padding: 20rpx;

			.my_center_invite {
				width: 108rpx;
				height: 36rpx;
				line-height: 36rpx;
				text-align: center;
				border: 1rpx solid #FFFFFF;
				border-radius: 16rpx;
			}
		}
	}

	.my_list {
		width: 690rpx;

		image {
			width: 42rpx;
			height: 42rpx;
		}
	}

	.my_out {
		width: 280rpx;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		border-radius: 40rpx;
		background-color: #FAE5DD;
		margin-left: 235rpx;
	}

	.quick_btn {
		width: 220rpx;
		text-align: center;
		height: 72rpx;
		line-height: 72rpx;
		border-radius: 70rpx;


		&:nth-child(1) {
			background-color: #f8f8f8;
			border: 2rpx solid #FF6437;
		}

		&:nth-child(2) {
			background: linear-gradient(to right, #FF6437, #FF9B51);
		}
	}
</style>
