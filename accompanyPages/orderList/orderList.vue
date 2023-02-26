<template>
	<view v-loading="loading">
		<search></search>
		<view class="flex_row accept_top_box justify_around">
			<view class="flex_column" @click="toSelect(0, 2)">
				<view class="accept_top_title" :class="{'active':selectIndex == 0}">
					待服务
				</view>
				<view class="accept_top_bottom" :class="{'active':selectIndex == 0}">
				</view>
			</view>
			<view class="flex_column"  @click="toSelect(1, 3)">
				<view class="accept_top_title" :class="{'active':selectIndex == 1}">
					服务中
				</view>
				<view class="accept_top_bottom" :class="{'active':selectIndex == 1}">
				</view>
			</view>
			<view class="flex_column"  @click="toSelect(2, 4)">
				<view class="accept_top_title" :class="{'active':selectIndex == 2}">
					已完成
				</view>
				<view class="accept_top_bottom" :class="{'active':selectIndex == 2}">
				</view>
			</view>
		</view>
		<swiper :indicator-dots="false" :autoplay="false" :current="selectIndex"  class="accept_height " @change='change' @transition="selectSwiper">
			<swiper-item>
				<view class="font_size_text_l color_black_999 text_align_center margin_top_l" v-if="orderList.length == 0">
					暂无数据
				</view>
				<scroll-view v-else scroll-y="true" class="accept_height " @scrolltolower="scrollLower">
					<acceptItem @showOverlay="showOverlay" :list="orderList" :type="3"></acceptItem>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<view class="font_size_text_l color_black_999 text_align_center margin_top_l" v-if="orderList.length == 0">
					暂无数据
				</view>
				<scroll-view v-else scroll-y="true" class="accept_height " @scrolltolower="scrollLower">
					<acceptItem @showOverlay="showOverlay" :list="orderList" :type="4"></acceptItem>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<view class="font_size_text_l color_black_999 text_align_center margin_top_l" v-if="orderList.length == 0">
					暂无数据
				</view>
				<scroll-view v-else scroll-y="true" class="accept_height " @scrolltolower="scrollLower">
					<acceptItem @showOverlay="showOverlay" :list="orderList" :type="5"></acceptItem>
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
				selectIndex:1,
				orderList:[],
				service_status: 3,
				pageSize: 5,
				page:1,
			}
		},
		onLoad(options) {
			this.selectIndex = options.selectIndex
		},
		onShow() {
			this.getfresh()
			
		},
		onPullDownRefresh: function() {
			console.log('1111');
			this.fresh();
		},
		methods: {
			showOverlay(e) {
				this.selectIndex = e.selectIndex;
				this.service_status  = e.service_status
				this.page = 1;
				this.orderList = [];
				this.getList();
			},
			fresh(e) {
				uni.showNavigationBarLoading();
				this.getfresh()
				uni.hideNavigationBarLoading();
				uni.stopPullDownRefresh();
			},
			scrollLower() {
				if(this.orderList.length < this.count) {
					this.getList();
				}
			},
			getList() {
				this.$api.escortOrder({page: this.page, pageSize:this.pageSize, service_status: this.service_status}).then(res=>{
					// this.loading = res.list.length == 4
					this.orderList = this.orderList.concat(res.list)
					this.count = res.count;
					this.page += 1
					
					uni.hideLoading()
				})
			},
			getfresh(e) {
				uni.showLoading({title: '加载中',mask:true});
				this.orderList = []
				this.page = 1
				this.loading = true;
				this.getList()
			},
			change(e){
				this.selectIndex = e.detail.current
			},
			selectSwiper(e){
				// console.log(1,e)
			},
			toSelect(type, service_status){
				this.selectIndex = type;
				this.service_status = service_status;
				this.page = 1;
				this.orderList = [];
				this.getList();
			},
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