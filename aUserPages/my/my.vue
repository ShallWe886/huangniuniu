<template>
	<view class="fixed_padding_bottom_xxxl">
		<view class="bg_box">
			<image :src="imageUrl+'/my_bg.png'" mode="aspectFill" class="my_bg"></image>
			<view class="avator_box">
				<view class="flex_row ">
					<image src="/static/image/avator.png" mode="aspectFill" class="avator_img flex_shrink" v-if="!userInfo.headimgurl"></image>
					<image :src="userInfo.headimgurl" mode="aspectFill" class="avator_img flex_shrink" v-else></image>
					<view class="width_all margin_left_m">
						<view class="flex_row">
							<view class="font_size_title_l color_black_333 font_weight">
								{{userInfo.nickname}}
							</view>
							<view class="patient_man color_white font_size_text_s margin_left" @click="toManPatient">
								患者管理
							</view>
						</view>
						<view class="flex_row margin_top_l">
							<view class="flex_row my_label" @click="lookIntShop">
								<image src="/static/image/my_label_img01.png" mode="aspectFill" class="label_img">
								</image>
								<view class="font_size_text_s color_orange flex_row">
									<view class="margin_right_xs">
										我的积分 {{userInfo.user_integral}}
									</view>
									<u-icon name="arrow-right" color="#FF6437" size="25"></u-icon>
								</view>
							</view>
							<view class="flex_row my_label margin_left_m" @click="lookDong">
								<image src="/static/image/my_label_img02.png" mode="aspectFill" class="label_img">
								</image>
								<view class="font_size_text_s color_orange flex_row" >
									<view class="margin_right_xs">
										咚咚币 {{userInfo.balance}}
									</view>
									<u-icon name="arrow-right" color="#FF6437" size="25"></u-icon>
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
							<u-icon name="arrow-right" size="26" color="#999999"></u-icon>
						</view>
					</view>
					<view class="flex_row justify_between margin_top_l">
						<view class="flex_column" v-for="(item,index) in orderList" @click="toMyOrder(index+1)" :key="index">
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
			
			<view class="my_center_box " >
				<image :src="imageUrl+'/my_center02.png'" mode="aspectFill"></image>
				<view class="my_center_item">
					<view class="font_size_title_m color_white font_weight">
						常见问题
					</view>
					<view class="font_size_text_s color_white margin_top_s">
						副标题副标题
					</view>
					<view class="font_size_text_xs color_white my_center_invite margin_top_s" @click="lookQuestion">
						立即查看
					</view>
				</view>
			</view>
			<view class="my_center_box margin_left_l" >
				<image :src="imageUrl+'/my_center01.png'" mode="aspectFill"></image>
				<view class="my_center_item" >
					<view class="font_size_title_m color_white font_weight">
						邀请好友
					</view>
					<view class="font_size_text_s color_white margin_top_s">
						患者邀请赠送100积分
					</view>
					<view class="font_size_text_xs color_white my_center_invite margin_top_s" @click="invitefriend">
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
			<view class="margin_left font_size_text_l color_black_999" v-if="index == 0 ">
				v1.2
			</view>
			<view class="margin_left font_size_text_l color_black_999" v-else-if="index == 2 ">
				44M
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
		<tabbar :tabbarIndex="5"></tabbar>
	</view>
</template>

<script>
	import enviroment from "@/static/js/enviroment.js"
	export default {
		data() {
			return {
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
				userInfo:null
			}
		},
		onLoad() {
		},
		onShow() {
			this.getUserInfo()
		},
		methods: {
			getUserInfo(e){
				this.$api.getMyInfo({}).then(res=>{
					// this.userInfo.user_id = res.user_id
					// this.userInfo.balance = res.balance
					// this.userInfo.nickname = res.nickname
					// this.userInfo.user_integral = res.user_integral
					// this.userInfo.headimgurl = res.headimgurl
					// this.userInfo.username = res.username
					this.userInfo = res
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
					url:"/aUserPages/inviteFriends/inviteFriends"
				})
			},
			lookQuestion(e){ //常见问题
				uni.navigateTo({
					url:"/aUserPages/question/question"
				})
			},
			lookItem(item,index){
				if(index == 0){
					
				}else if(index == 1){
					uni.navigateTo({
						url:item.src
					})
				}else if(index == 2){
					this.clearShow = true
				}else if(index == 3){
					uni.navigateTo({
						url:item.src+"?type="+0
					})
				}else if(index == 4){
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
					url:"/aUserPages/integralShop/integralShop"
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
				uni.navigateTo({
					url:'/aUserPages/login/login'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
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
			width: 126rpx;
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
