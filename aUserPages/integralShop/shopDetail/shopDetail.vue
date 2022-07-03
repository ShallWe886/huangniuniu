<template>
	<view>
		<sswiper :swiperList="shopInfo.slider" :height="210"></sswiper>
		<view class="shop_detail_box padding_xl">
			<view class="font_size_title_xl color_orange font_weight">
				2000积分+45元
			</view>
			<view class="font_size_title_l color_black_333 font_weight margin_top_m">
				商品*********标题
			</view>
			<view class="shop_item_box padding_l margin_top_xl">
				<view class="flex_row">
					<view class="font_size_text_l color_black_888">
						数量
					</view>
					<view class="font_size_text_l color_black_888 margin_left">
						22
					</view>
				</view>
				<view class="flex_row margin_top_m">
					<view class="font_size_text_l color_black_888">
						规格
					</view>
					<view class="font_size_text_l color_black_888 margin_left">
						23mm x 32mm
					</view>
				</view>
				<view class="flex_row margin_top_m">
					<view class="font_size_text_l color_black_888">
						品牌
					</view>
					<view class="font_size_text_l color_black_888 margin_left">
						西门子
					</view>
				</view>
				<view class="flex_row margin_top_m">
					<view class="font_size_text_l color_black_888">
						颜色
					</view>
					<view class="font_size_text_l color_black_888 margin_left">
						粉红
					</view>
				</view>
				<view class="flex_row margin_top_m">
					<view class="font_size_text_l color_black_888">
						货号
					</view>
					<view class="font_size_text_l color_black_888 margin_left">
						0000000
					</view>
				</view>
			</view>
			<view class="shop_item_box flex_column padding_bottom_l margin_top_l">
				<image src="/static/image/detail.png" mode="aspectFill" class="detail_img"></image>
				<view class="color_black_999 font_size_text_m margin_top_xs padding_0_l">
					乐鱼高清智能网络可以远程支持WIFI视频监控，我的家里只有你没有他，我们对你的情意并不假， 智能化管理生活
				</view>
			</view>
			<view class="sure_buttton margin_top_xxl margin_left_l" @click="toBuy">
				立即兑换
			</view>
			<view class="label_box">
				<view class="" style="position: relative;">
					<image src="/static/image/shopLabel.png" mode="aspectFill" class="shop_label"></image>
					<view class=" font_size_text_s color_white" style="position: absolute;top: -10rpx;left:46rpx">
						标签
					</view>
				</view>

			</view>
		</view>
		<u-popup :show="popShow" mode="bottom" :round="30" closeable="true" @close="closeSure">
			<view class="padding_xl">
				<view class="flex_row">
					<image src="/static/image/shop_little_img.png" mode="aspectFill" class="shop_little_img"></image>
					<view class="margin_left_l">
						<view class="font_size_title_l color_black_333 font_weight">
							商品**********标题
						</view>
						<view class="font_size_title_m color_orange margin_top_m font_weight">
							2000积分+45元
						</view>
					</view>
				
				</view>
				<view class="flex_row margin_top_xl">
					<view class="font_size_title_s color_black_333 ">
						颜色
					</view>
					<view class="margin_left_xl">
						<view class="flex_row ">
							<view class="spec_label margin_right_l" :class="{'active':specId == index}"  v-for="(item,index) in shopInfo.specList" :key="index">
								{{item.name}}
							</view>
						</view>
					</view>
					
				</view>
				<view class="flex_row margin_top_xl">
					<view class="font_size_title_s color_black_333">
						数量
					</view>
					<view class="margin_left_xl">
						<u-number-box v-model="shopNum" @change="valChange" button-size="36"  disabledInput="true" inputWidth="70"></u-number-box>
					</view>
				</view>
				<view class="sure_buttton margin_top_xxl margin_left_l" @click="toPay">
					确认
				</view>
			</view>
			
		</u-popup>
	</view>
</template>

<script>
	import sswiper from "@/components/swiper.vue"
	export default {
		components: {
			sswiper
		},
		data() {
			return {
				shopInfo: {
					slider: ['','',''],
					specList: [{
						name: '黄色'
					}, {
						name: '红色'
					}, {
						name: '黑色'
					}]
				},
				popShow: false,
				specId: 0, //规格id
				shopNum: 0
			}
		},
		methods: {
			toBuy(e){
				this.popShow = true
			},
			closeSure(e){
				this.popShow = false
			},
			toPay(e){//付款
				uni.navigateTo({
					url:'/aUserPages/integralShop/confirm/confirm'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.shop_detail_box {
		border-radius: 40rpx 40rpx 0 0;
		background-color: #ffffff;
		position: relative;

		.shop_item_box {
			width: 670rpx;
			background-color: #FAFAFA;
			border-radius: 10rpx;
			box-sizing: border-box;

			.detail_img {
				width: 354rpx;
				height: 300rpx;
			}
		}

		.label_box {
			position: absolute;
			top: 0;
			right: 60rpx;

			.shop_label {
				width: 70rpx;
				height: 50rpx;
			}
		}

	}

	.shop_little_img {
		width: 280rpx;
		height: 200rpx;
	}

	.spec_label {
		padding: 5rpx 20rpx;
		border-radius: 16rpx;
		background-color: #F0F0F0;
		font-size: 26rpx;
		color: #333333;
		box-sizing: border-box;


		&.active {
			color: #FF6437;
			background-color: #FFEFEB;
			border: 2rpx #FF6437 solid;

		}
	}
</style>
