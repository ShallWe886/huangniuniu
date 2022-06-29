<template>
	<view class="margin_0_l fixed_padding_bottom_xxxl">
		<zq-navbar :props="{'navbarTitle':'首页','hasLocation':true}" >
			  <template v-slot:left>
				  <view class="flex_row" @click="goAddress">
				  	<u-icon name="map" color="#333333" size="30"></u-icon>
					<view class="font_size_title_s color_black_333  padding_0_s">
						深圳市
					</view>
					<u-icon name="arrow-down-fill" color="#333333" size="30"></u-icon>
				  </view>
			  </template>
		</zq-navbar>
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
		<block v-for="(item,index) in clinicList" :key="index">
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
		<!-- 底部导航栏 -->
		<keep-alive>
			<tabbar :type='1' ></tabbar>
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
			goAddress(e){//定位
				uni.navigateTo({
					url:"/aUserPages/address/address"
				})
			},
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

	
</style>
