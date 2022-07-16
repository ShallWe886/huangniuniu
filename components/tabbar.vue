<template>
	<view>
		<!-- 底部导航栏 -->
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
			<view class="flex_column " @click="toTabbar(2)">
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

			</view>
			<view class="flex_column " @click="toTabbar(3)">
				<view style="position: relative;">
					<view
						style="position: absolute;top:-45px;left: -25px;width: 100rpx;height: 50px;border-radius: 50%;padding: 5px;background: #ffffff;">
						<view class="centerImg flex_column " style="">
							<image src="/static/image/tabbar09.png" class="tabbar_img_center margin_top_m"></image>
						</view>

					</view>
				</view>

				<view class="font_size_text_xxs margin_top_xl color_black_888">
					人工预约
				</view>
				<!-- <block>
					<image src="/static/image/tabbar01.png" class="tabbar_img"></image>
					<view class="font_size_text_xxs margin_top_s color_orange">
						急速预约
					</view>
				</block> -->
			</view>
			<view class="flex_column " @click="toTabbar(4)">
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
	</view>
</template>

<script>
	export default {
		name: "tabbar",
		props: {
			tabbarIndex: { //tabbarIndex 代表进入的页面 1:首页，2：订单，3：快速预约 4：健康百科 5：我的
				type: Number,
				default: 1
			}
		},
		data() {
			return {
				quickAppointShow: false
			}
		},
		methods: {
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
					data: '010-6565-556',
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
		}
	}
</script>

<style lang="scss">
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
</style>
