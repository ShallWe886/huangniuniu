<template>
	<view class="margin_0_l fixed_padding_bottom_xxxl">
		<view class="  margin_top_m">
			<u-swiper :list="swiperList" @click="lookSwiper" indicator indicatorMode="dot" circular height="280">
			</u-swiper>
		</view>
		<view class="flex_row justify_between margin_top_xl">
			<view class="flex_column">
				<image src="/static/image/index01.png" class="index_img" @click="toVip(1)"></image>
				<image src="/static/image/index03.png" class="index_img margin_top_m" @click="toVip(2)"></image>
			</view>
			<view class="flex_column">
				<image src="/static/image/index02.png" class="index_img" @click="toVip(3)"></image>
				<image src="/static/image/index04.png" class="index_img margin_top_m" @click="toVip(4)"></image>
			</view>
		</view>
		<view class="margin_top_xl color_black_333 font_weight font_size_title_l padding_bottom_m">
			医院列表
		</view>
		<block v-for="(item,index) in clinicList">
			<view class="box_690 flex_row padding_s_m" @click="lookDetail(item,index)">
				<image src="" class="clinic_img flex_shrink"></image>
				<view class=" padding_left_m">
					<view class="font_weight font_size_title_s color_black_333 text_overflow_1">
						{{item.title}}
					</view>
					<view class="font_size_text_m margin_top_s">
						<text class="color_red">三甲</text>
						<text class="margin_left_s color_black_888">综合医院</text>
					</view>
					<view class="margin_top_s text_overflow_1 font_size_text_s color_black_888 ">
						第三军区医院是国家重点，专业科室…第三军区医院是国家重点，专业科室…第三军区医院是国家重点，专业科室…第三军区医院是国家重点，专业科室…
					</view>
				</view>
			</view>
		</block>


		<u-popup :show="quickAppointShow" :closeable="true" mode="center" :round="20" @close="closeQuick">
			<view class="flex_column padding_xl">
				<view class="font_size_title_xxl color_black_333 font_weight">
					咨询热线
				</view>
				<view class="font_size_title_xl color_black_333 font_weight margin_top_s" @click="setText">
					010-6565-556
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

		<!-- 底部导航栏 -->
		<keep-alive>
			<tabbar :type='1' @openQuickShow="openQuickShow"></tabbar>
		</keep-alive>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				swiperList: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				clinicList: [{
						img: '',
						title: '华夏第一军区医院'
					},
					{
						img: '',
						title: '华夏第一军区医院'
					},
					{
						img: '',
						title: '华夏第一军区医院'
					},
				],
				quickAppointShow: false
			}
		},
		onLoad() {

		},
		methods: {
			lookSwiper(e) {
				//查看轮播图
			},
			toVip(type) {
				//vip陪诊
				if (type == 1) {
					uni.navigateTo({ //vip陪诊
						url: '/aUserPages/vipPages/vipPages'
					})
				} else if (type == 2) { //名家有约
					uni.navigateTo({
						url: '/aUserPages/hospital/expertAppoing'
					})

				} else if (type == 3) { //全程陪诊
					uni.navigateTo({
						url: '/aUserPages/vipPages/wholeProcess '
					})
				} else if (type == 4) {

				}

			},
			lookDetail(item, index) {
				uni.navigateTo({
					url: '/aUserPages/hospital/hospital'
				})
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
			openQuickShow(e){
				if(e == 'open'){
					this.quickAppointShow = true
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.flex_column {
		&:nth-child(1) {
			.index_img {
				width: 335rpx;
				height: 270rpx;

				&:nth-child(2) {
					height: 200rpx;
				}
			}
		}

		&:nth-child(2) {
			.index_img {
				width: 335rpx;
				height: 270rpx;

				&:nth-child(1) {
					height: 200rpx;
				}
			}
		}
	}

	.clinic_img {
		width: 205rpx;
		height: 155rpx;
		background-color: #f8f8f8;
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
