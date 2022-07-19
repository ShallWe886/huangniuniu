<template>
	<view>
		<view class="" style="padding-bottom: 200rpx;">
			<view class="box_690 margin_left_l ">
				<u-swiper :list="swiperList" @click="lookSwiper" indicator indicatorMode="dot" circular height="300">
				</u-swiper>
			</view>
			<view class="margin_left_l margin_right_l margin_top_l margin_bottom_s">
				<text class="font_size_text_l color_black_333 font_weight">适合人群/场景：</text>
				<text
					class="font_size_text_l color_black_333">繁忙人士、老人、孕妇等检查开单预约长期需要购药、需要纸质检查报告异地患者检查、购药、取报告精准挂号门诊就诊预约检查</text>
			</view>
			<view class="box_690 margin_left_l">
				<view class="flex_row border_bottom padding_l" v-for="(item,index) in list" :key="index">
					<view class="flex_row">
						<radio :checked="item.status" color='#FF6437' style="transform:scale(0.7)" />
						<text class="font_size_text_xl color_black_333">{{item.title}}</text>
					</view>
					<view class="margin_left color_orange font_weight font_size_title_m">
						{{item.price}}元
					</view>
				</view>
			</view>
		</view>

		<view class="run_bottom">
			<view class="flex_row">
				<view class="font_size_text_xl color_black_999">
					<radio  color='#FF6437' style="transform:scale(0.7)" />
					<text class="margin_left_s">全部</text>
				</view>
				<view class="margin_left flex_row">
					<view class="">
						<view class="">
							<text class="font_size_text_m color_black_999">已选3项,</text>
							<text class="font_size_text_m color_black_333">合计：</text>
							<text class="color_orange font_weight font_size_title_xxl">749</text>
							<text class="font_size_text_m color_orange">元</text>
						</view>
						<view class="margin_top_s">
							<text class="color_orange font_size_text_m">优惠价：</text>
							<text class="color_orange font_weight font_size_text_xl">599.20</text>
							<text class="font_size_text_m color_orange">元</text>
						</view>
					</view>
					<view class="run_button margin_left_m flex_shrink" @click="buy">
						去结算
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				list: [{
						status: true,
						title: '代办预约普通号',
						price: 50
					},
					{
						status: true,
						title: '代办预约专家号',
						price: 199
					},
					{
						status: true,
						title: '代办预约特诊号',
						price: 500
					},
					{
						status: false,
						title: '开单及预约检查',
						price: 199
					},
					{
						status: false,
						title: '代办买药',
						price: 199
					},
					{
						status: false,
						title: '代办问诊',
						price: 499
					},
					{
						status: false,
						title: '代办取寄结果',
						price: 99
					},
				],



			}
		},
		methods: {
			lookSwiper(e) {
				//查看轮播图
			},
			buy() { //结算
				uni.navigateTo({
					url: '/aUserPages/vipPages/writeOrder'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.run_bottom {
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
		background: #ffffff;
		box-shadow: 0rpx -15rpx 60rpx -10rpx rgba(229, 149, 121, 0.1);
		border-radius: 40rpx 40rpx 0rpx 0rpx;
		box-sizing: border-box;
		padding: 40rpx 30rpx;

		.run_button {
			width: 200rpx;
			height: 90rpx;
			background: linear-gradient(135deg, #FF6437 0%, #FF9B51 100%);
			box-shadow: 0rpx 10rpx 30rpx -10rpx rgba(255, 73, 0, 0.3);
			border-radius: 45rpx;
			text-align: center;
			line-height: 90rpx;
			font-size: 36rpx;
			font-weight: bold;
			color: #ffffff;
		}
	}
</style>
