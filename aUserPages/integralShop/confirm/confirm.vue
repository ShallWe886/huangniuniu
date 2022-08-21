<template>
	<view class="flex_column padding_bottom_l" v-if="goodInfo">
		<view class="box_690 flex_row padding_l" @click="selectAddress">
			<image src="/static/image/address_con.png" mode="aspectFit" class="con_addr flex_shrink"></image>
			<view class="margin_left_m" >
				<block v-if="addressInfo">
					<view class="flex_row">
						<view class="text_overflow_1 font_size_title_m color_black_333 font_weight">
							{{addressInfo.user_name}}
						</view>
						<view class="font_size_text_xl color_black_888 flex_shrink margin_left_s">
							{{addressInfo.user_phone}}
						</view>
					</view>
					<view class="color_black_888 font_size_text_l margin_top_m text_overflow_2">
						{{addressInfo.province_id+addressInfo.detail}}
					</view>
				</block>
				<view v-if="!addressInfo">请选择收货地址</view>
			</view>
			<view class="margin_left">
				<u-icon name="arrow-right" size="40"></u-icon>
			</view>
		</view>
		<view class="box_690 padding_l">
			<view class="flex_row padding_bottom_m">
				<view class="tip_label">
				</view>
				<view class="font_size_title_l color_black_333 font_weight margin_left_s">
					订单信息
				</view>
			</view>
			<view class="flex_row width_all padding_top_xl border_top">
				<image src="/static/image/shop_little_img.png" mode="aspectFill" class="shop_img"></image>
				<view class="margin_left_l">
					<view class="font_size_title_l color_black_333 font_weight">
						{{goodInfo.goods_name}}
					</view>
					<view class=" color_black_888 font_size_text_s margin_top_l">
						数量：{{shopNum}} <text class="margin_left_s">颜色：红色</text>
					</view>
					<view class="font_size_title_m color_orange font_weight margin_top_l">
						{{goodInfo.pay_integral}}积分+{{goodInfo.deduct_price}}元
					</view>
				</view>
			</view>
		</view> 
		<view class="box_690 padding_l">
			<view class="tip_box font_size_text_l color_black_333">
				您现有积分<text class="color_orange">{{userInfo.user_integral}}</text>，还需支付<text class="color_orange">{{goodInfo.deduct_price}}</text>元
			</view>
			<!-- #ifdef APP -->
			<view class="flex_row margin_top_xl" v-for="(item,index) in payStyle1" :key="index">
					<image :src="item.img" mode="aspectFill" class="pay_img"></image>
					<view class="font_size_text_l color_black_333 font_weight margin_left_s">
						{{item.title}} <text class="font_size_text_l margin_left_m"
							style="color: #FF9300;" v-if="index == 2">（账户话费余额：¥{{userInfo.balance}}）</text>
					</view>
					<radio value="1" :checked="pay_channel == item.pay_channel" color='#FF6437' style="transform:scale(0.7)"
						class="margin_left" @click="selectPay(item)"/>
				</view>
			</view>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<view class="flex_row margin_top_xl" v-for="(item,index) in payStyle2" :key="index">
					<image :src="item.img" mode="aspectFill" class="pay_img"></image>
					<view class="font_size_text_l color_black_333 font_weight margin_left_s">
						{{item.title}} <text class="font_size_text_l margin_left_m"
							style="color: #FF9300;" v-if="index == 2">（账户话费余额：¥{{userInfo.balance}}）</text>
					</view>
					<radio value="1" :checked="pay_channel == item.pay_channel" color='#FF6437' style="transform:scale(0.7)"
						class="margin_left" @click="selectPay(item)"/>
				</view>
			</view>
			<!-- #endif -->
		<view class="sure_buttton margin_top_xxl" @click="toSucess">
			确认支付
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				payStyle1: [{ // app
						'title': '微信支付',
						img: '/static/image/pay01.png',
						pay_channel:3
					},
					{
						'title': '支付宝支付',
						img: '/static/image/pay02.png',
						pay_channel:2
					},
					{
						'title': '余额支付',
						img: '/static/image/pay04.png',
						pay_channel:1
					},
					
				],
				payStyle2: [{//微信小程序
						'title': '微信支付',
						img: '/static/image/pay01.png',
						pay_channel:4
					},
					{
						'title': '余额支付',
						img: '/static/image/pay04.png',
						pay_channel:1
					},
					
				],
				goodInfo:null,
				shopNum:0,
				userInfo:uni.getStorageSync('userInfo'),
				addressInfo:null,
				pay_channel:4 //1钱包，2支付宝，3微信支付，4微信小程序支付 5支付宝小程序支付
			}
		},
		onLoad(options) {
			// #ifdef MP-WEIXIN
			this.pay_channel = 4
			// #endif
			this.goodInfo = uni.getStorageSync('goodInfo')
			this.shopNum = options.shopNum
			
		},
		onShow() {
			if(getApp().globalData.upDate.address){
				this.addressInfo = uni.getStorageSync('address')
				getApp().globalData.upDate.address = false;
			}
		},
		methods: {
			toSucess(e){//支付成功
				if(!this.addressInfo){
					uni.showToast({
						icon:"none",
						title:"请先选择收货地址"
					})
					return
				}
				this.$api.getGoodOrder({goods_id:this.goodInfo.id,goods_num:this.shopNum,pay_channel:this.pay_channel,address_id:this.addressInfo.id}).then(res=>{
					uni.navigateTo({
						url:"/aUserPages/resultPage/resultPage?type="+3
					})
				})
				
			},
			selectAddress(e){
				uni.navigateTo({
					url:'/aUserPages/address/managerAddress/managerAddress?status='+0
				})
			},
			selectPay(item){//选择支付方式
				this.pay_channel = item.pay_channel
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.con_addr {
		width: 48rpx;
		height: 48rpx;
	}

	.tip_label {
		width: 10rpx;
		height: 30rpx;
		background: linear-gradient(to bottom, #FF6437, #FF9B51);
		border-radius: 4rpx;
	}

	.shop_img {
		width: 220rpx;
		height: 200rpx;
	}

	.pay_img {
		width: 46rpx;
		height: 46rpx;
	}
	.tip_box{
		width: 540rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		border-radius: 30rpx;
		background: #F6F6F6;
		margin-left: 45rpx;
	}
</style>
