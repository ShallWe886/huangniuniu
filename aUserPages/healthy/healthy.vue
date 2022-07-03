<template>
	<view class="fixed_padding_bottom_xxxl">
		<zq-navbar :props="{'navbarTitle':'健康百科','hasLocation':true}" >
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
		<search></search>
		<view class="  margin_top_m padding_0_l">
			<u-swiper :list="swiperList" @click="lookSwiper" indicator indicatorMode="dot" circular height="280" :radius="20">
			</u-swiper>
			<scroll-view scroll-x="true" style="width: 690rpx;margin-top: 20rpx;padding-left: 20rpx;box-sizing: border-box;" >
				<view class="flex_row">
					<view class="flex_column margin_right_l flex_shrink" v-for="(item,index) in selectList" :key="index">
						<view class="health_label" :class="{'active':selectIndex == index}">
							{{item.title}}
						</view>
						<view class="health_bottom margin_top_s" :class="{'active':selectIndex == index}">
						</view>
					</view>
				</view>
			</scroll-view>
			<view class="box_690 health_box" v-for="(item,index) in healthList" :key="index" @click="lookDetail(item)">
				<image :src="imageUrl+'/health_item.png'" mode="aspectFill" class="health_img"></image>
				<view class="margin_top_m padding_left_l padding_right_l padding_bottom_m">
					<view class="font_size_title_s color_black font_weight text_overflow_1">
						早餐决定着每个人健康
					</view>
					<view class="font_size_text_l color_black_999 text_overflow_1	margin_top_s">
						看看营养师建议这6种自制及到餐厅吃选择
					</view>
				</view>
				<view class="health_con_label">
					标签
				</view>
			</view>
		</view>
		<!-- 底部导航栏 -->
		<keep-alive>
			<tabbar :type='4' ></tabbar>
		</keep-alive>
	</view>
</template>

<script>
	import search from '@/components/search.vue'
	export default {
		components:{
			search
		},
		data() {
			return {
				swiperList: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				selectIndex:0,
				selectList:[{title:'推荐'},{title:'我的关注'},{title:'百科分类'},{title:'百科分类'},{title:'百科分类'},{title:'百科分类'},{title:'百科分类'},{title:'百科分类'}],
				healthList:[{},{},{},{},{}]

			}
		},
		methods: {
			goAddress(e){//定位
				uni.navigateTo({
					url:"/aUserPages/address/address"
				})
			},
			lookDetail(item){
				uni.navigateTo({
					url:'/aUserPages/healthy/healthyCon/healthyCon'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.health_label{
	font-size: 28rpx;
	color: #333333;
	
	&.active{
		color: 	#FF6437;
		font-weight: bold;
		font-size: 32rpx;
	}
}

.health_bottom{
	width: 50rpx;
	height: 4rpx;
	border-radius: 2rpx;
	background: #fafafa;
	
	&.active{
		background: #FF6437;
		
	}
}
.health_box{
	position: relative;
	.health_img{
		width: 690rpx;
		height: 250rpx;
	}
	
	.health_con_label{
		width: 100rpx;
		height: 40rpx;
		border-radius: 0 20rpx 0 20rpx;
		background: linear-gradient(to right,#FA6B00,#FA2E14);
		font-size: 24rpx;
		color: #ffffff;
		position: absolute;
		top: 0;
		right: 0;
		line-height: 40rpx;
		text-align: center;
	}
}

</style>
