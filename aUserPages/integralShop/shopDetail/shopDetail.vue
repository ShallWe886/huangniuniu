<template>
	<view>
		<zq-load v-model="info.load">
			<block v-if="info.form">
				<sswiper :swiperList="info.form.slider" :height="210"></sswiper>
				<view class="shop_detail_box padding_xl">
					<view class="font_size_title_xl color_orange font_weight">
						{{info.form.pay_integral}}积分+{{info.form.deduct_price}}元
					</view>
					<view class="font_size_title_l color_black_333 font_weight margin_top_m">
						{{info.form.goods_name}}
					</view>
					<view class="shop_item_box padding_l margin_top_xl">
						<view class="flex_row">
							<view class="font_size_text_l color_black_888">
								数量
							</view>
							<view class="font_size_text_l color_black_888 margin_left">
								{{info.form.goods_num}}
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
						<!-- <image src="/static/image/detail.png" mode="aspectFill" class="detail_img"></image>
						<view class="color_black_999 font_size_text_m margin_top_xs padding_0_l">
							乐鱼高清智能网络可以远程支持WIFI视频监控，我的家里只有你没有他，我们对你的情意并不假， 智能化管理生活
						</view> -->
						<rich-text :nodes="info.form.goods_content"></rich-text>
					</view>
					<view class="sure_buttton margin_top_xxl margin_left_l" @click="toBuy">
						立即兑换
					</view>
					<view class="label_box">
						<view class="" style="position: relative;">
							<image src="/static/image/shopLabel.png" mode="aspectFill" class="shop_label"></image>
							<view class=" font_size_text_s color_white"
								style="position: absolute;top: -10rpx;left:46rpx">
								标签
							</view>
						</view>

					</view>
				</view>
			</block>

		</zq-load>

		<u-popup :show="popShow" mode="bottom" :round="30" @close="closeSure">
			<view class="flex_row padding_right_l padding_top_l padding_bottom_m" @click="closeSure">
				<image src="/static/image/health_close.png" mode="aspectFill" class="close_icon margin_left"></image>
			</view>
			<view class="padding_xl">
				<view class="flex_row">
					<image src="/static/image/shop_little_img.png" mode="aspectFill" class="shop_little_img"></image>
					<view class="margin_left_l">
						<view class="font_size_title_l color_black_333 font_weight">
							{{info.form.goods_name}}
						</view>
						<view class="font_size_title_m color_orange margin_top_m font_weight">
							{{info.form.pay_integral}}积分+{{info.form.deduct_price}}元
						</view>
					</view>

				</view>
				<!-- <view class="flex_row margin_top_xl">
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
				</view> -->
				<view class="flex_row margin_top_xl">
					<view class="font_size_title_s color_black_333">
						数量
					</view>
					<view class="margin_left_xl">
						<u-number-box v-model="shopNum" @change="valChange" button-size="40" disabledInput="true"
							inputWidth="70" iconStyle="font-size:30rpx;" :max="info.form.goods_num"></u-number-box>
					</view>
				</view>
				<view class="sure_buttton_letter margin_top_xxl margin_left_l" @click="toPay">
					确认
				</view>
			</view>

		</u-popup>
	</view>
</template>

<script>
	import sswiper from "@/components/swiper.vue"
	import Load from "@/static/utils/load.js"
	export default {
		components: {
			sswiper
		},
		data() {
			return {
				shopInfo: {
					slider: ['', '', ''],
					specList: [{
						name: '黄色'
					}, {
						name: '红色'
					}, {
						name: '黑色'
					}],
				},
				info: null,
				popShow: false,
				specId: 0, //规格id
				shopNum: 1,
				shopId: '' //商品id
			}
		},
		onLoad(options) {
			this.shopId = options.id
			// this.$api.getGoodDetail({id:this.shopId})
			this.info = new Load({
				api: this.$api.getGoodDetail,
				queryParams: {
					id: this.shopId
				},
				load: {
					mode: "info"
				}
			})
			this.info.getInfo()
		},
		onPageScroll(event) {
			this.info.scrollLazy(event.scrollTop)
		},
		methods: {
			toBuy(e) {
				this.popShow = true
			},
			closeSure(e) {
				this.popShow = false
			},
			toPay(e) { //付款
				if (this.info.form.goods_num == 0) {
					uni.showToast({
						icon: "none",
						title: "商品库存不足"
					})
					return
				}
				let userInfo = uni.getStorageSync('userInfo')
				if (userInfo.user_integral < this.info.form.pay_integral) {
					uni.showToast({
						icon: "none",
						title: "积分不足"
					})
					return
				}
				uni.setStorageSync('goodInfo', this.info.form)
				uni.navigateTo({
					url: '/aUserPages/integralShop/confirm/confirm?shopNum=' + this.shopNum
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
