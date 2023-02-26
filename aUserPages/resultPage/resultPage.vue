<template>
	<view class="padding_bottom_m">
		<view class="flex_column box_690 padding_xl margin_left_l margin_top_xl">
			<block v-if="type == 0">
				<image src="/static/image/result0.png" mode="aspectFill" class="result_img"></image>
				<view class=" font_weight margin_top_xl" style="font-size: 50rpx;color: #17CD44;">
					接单成功
				</view>
				<view class="margin_top_xxl color_black_999 font_size_title_l">
					接单金额：<text class="font_weight color_black_333" style="font-size: 50rpx;">¥299.00</text>
				</view>
				<view class="result_button">
					进入服务流程
				</view>
			</block>
			<block v-if="type == 1">
				<image src="/static/image/result1.png" mode="aspectFill" class="result_img"></image>
				<view class="color_orange font_weight margin_top_xl" style="font-size: 50rpx;">
					支付失败
				</view>
				<view class="margin_top_xxl color_black_999 font_size_title_s">
					最后一步出了点问题，请重新支付
				</view>
				<view class="result_button">
					重新支付
				</view>
			</block>
			<block v-if="type == 3">
				<image src="/static/image/order_result01.png" mode="aspectFill" class="result_img"></image>
				<view class=" font_weight margin_top_xl" style="font-size: 50rpx;color: #17CD44;">
					支付成功
				</view>
				<view class="margin_top_xxl color_black_999 font_size_title_l">
					支付金额：<text class="font_weight color_black_333" style="font-size: 50rpx;">¥{{amount}}</text>
				</view>
				<view class="result_button" @click="backIndex">
					返回首页
				</view>
			</block>
		</view>
		

	</view>
</template>

<script>
	export default {
		data() {
			return {
				amount: '0.00',
				type: 0 // 0：接单成功 1：支付失败 3：支付成功
			}
		},
		onLoad(options) {
			this.type = options.type
			this.amount = options.amount
			if(this.type == 0){
				uni.setNavigationBarTitle({
					title: "接单成功"
				})
			}else if(this.type == 1){
				uni.setNavigationBarTitle({
					title: "支付失败"
				})
			}else if(this.type == 3){
				uni.setNavigationBarTitle({
					title: "支付成功"
				})
			}
			
		},
		methods: {
			backIndex() {
				uni.navigateTo({
					url: '/pages/index/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.result_img {
		width: 256rpx;
		height: 240rpx;
	}

	.result_button {
		width: 360rpx;
		height: 90rpx;
		line-height: 90rpx;
		border-radius: 30rpx;
		background: linear-gradient(to right, #FF6437, #FF9B51);
		font-size: 32rpx;
		color: #ffffff;
		text-align: center;
		margin-top: 200rpx;
	}
</style>
