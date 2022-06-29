<template>
	<view>
		<view class="flex_row accept_top_box justify_around">
			<view class="flex_column" @click="toSelect(0)">
				<view class="accept_top_title" :class="{'active':selectIndex == 0}">
					派单
				</view>
				<view class="accept_top_bottom" :class="{'active':selectIndex == 0}">
				</view>
			</view>
			<view class="flex_column"  @click="toSelect(1)">
				<view class="accept_top_title" :class="{'active':selectIndex == 1}">
					抢单
				</view>
				<view class="accept_top_bottom" :class="{'active':selectIndex == 1}">
				</view>
			</view>
		</view>
		<swiper :indicator-dots="false" :autoplay="false" :current="selectIndex"  class="accept_height " @change='change' @transition="selectSwiper">
			<swiper-item>
				<scroll-view scroll-y="true" class="accept_height padding_left_l">
					<view class="color_black_999 font_size_text_l margin_top_l">
						派单中   2022-12-12  11:00-23:00
					</view>
					<acceptItem :list="orderList" :type="1"></acceptItem>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true" class="accept_height padding_left_l">
					<acceptItem :list="orderList" :type="2"></acceptItem>
				</scroll-view>
			</swiper-item>
		</swiper>
		
		<!-- 底部导航栏 -->
		<keep-alive>
			<uFoot :type='1'></uFoot>
		</keep-alive>
	</view>
	
</template>

<script>
	import acceptItem from "@/components/u-order/u-order.vue"
	export default {
		components:{
			acceptItem
		},
		data() {
			return {
				selectIndex:0,
				orderList:[{},{},{},{}]
			}
		},
		methods: {
			change(e){
				this.selectIndex = e.detail.current
			},
			selectSwiper(e){
				// console.log(1,e)
			},
			toSelect(type){
				this.selectIndex = type
			}
		}
	}
</script>

<style lang="scss" scoped>
	.accept_height{
		height: calc(100vh - 280rpx);
	}
	.accept_top_box{
		width: 750rpx;
		height: 90rpx;
		box-sizing: border-box;
		background-color: #ffffff;
		
		.accept_top_title{
			font-size: 28rpx;
			color: #333333;
			&.active{
				color: #FF6437;
				font-weight: bold;
			}
		}
		.accept_top_bottom{
			width: 50rpx;
			height: 4rpx;
			border-radius: 2rpx;
			background-color: #ffffff;
			margin-top: 8rpx;
			
			&.active{
				background-color: #FF6437;
			}
		}
	}
	
</style>
