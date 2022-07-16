<template>
	<view>
		<search></search>
		<view class="flex_row accept_top_box justify_around">
			<view class="flex_column" @click="toSelect(0)">
				<view class="accept_top_title" :class="{'active':selectIndex == 0}">
					待服务
				</view>
				<view class="accept_top_bottom" :class="{'active':selectIndex == 0}">
				</view>
			</view>
			<view class="flex_column"  @click="toSelect(1)">
				<view class="accept_top_title" :class="{'active':selectIndex == 1}">
					服务中
				</view>
				<view class="accept_top_bottom" :class="{'active':selectIndex == 1}">
				</view>
			</view>
			<view class="flex_column"  @click="toSelect(2)">
				<view class="accept_top_title" :class="{'active':selectIndex == 2}">
					已完成
				</view>
				<view class="accept_top_bottom" :class="{'active':selectIndex == 2}">
				</view>
			</view>
		</view>
		<swiper :indicator-dots="false" :autoplay="false" :current="selectIndex"  class="accept_height " @change='change' @transition="selectSwiper">
			<swiper-item>
				<scroll-view scroll-y="true" class="accept_height ">
					<acceptItem :list="orderList" :type="3"></acceptItem>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true" class="accept_height ">
					<acceptItem :list="orderList" :type="4"></acceptItem>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true" class="accept_height ">
					<acceptItem :list="orderList" :type="5"></acceptItem>
				</scroll-view>
			</swiper-item>
		</swiper>
		
		<!-- 底部导航栏 -->
		<uFoot :type='2'></uFoot>
	</view>
</template>

<script>
	import search from '@/components/search.vue'
	import acceptItem from "@/components/u-order/u-order.vue"
	export default {
		components:{
			search,
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
		height: calc(100vh - 360rpx);
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