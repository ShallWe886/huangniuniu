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
			<swiper-item >
				<view class="font_size_text_l color_black_999 text_align_center margin_top_l" v-if="orderList.length == 0">
					暂无数据
				</view>
				<scroll-view v-else scroll-y="true" class="accept_height " @scrolltolower="scrollLower">
					<view class="color_black_999 font_size_text_l margin_top_l margin_left_l ">
						<!-- <u-switch v-model="checked" size="46" @change="changeSwitch"></u-switch>点击开启派单模式 -->
						<!-- 派单中   2022-12-12  11:00-23:00 -->
					</view>
					<acceptItem @showOverlay="showOverlay" :list="orderList" :type="1"></acceptItem>
				</scroll-view>
			</swiper-item>
			<swiper-item >
				<view class="font_size_text_l color_black_999 text_align_center margin_top_l" v-if="orderList.length == 0">
					暂无数据
				</view>
				<scroll-view v-else scroll-y="true" class="accept_height " @scrolltolower="scrollLower">
					<acceptItem @showOverlay="showOverlay" :list="orderList" :type="2"></acceptItem>
				</scroll-view>
			</swiper-item>
		</swiper>
		
		<!-- 底部导航栏 -->
		<uFoot :type='1'></uFoot>
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
				checked: false,
				selectIndex:0,
				orderList:[],
				pageSize: 2,
				page: 1,
				count: 0,
				invite_type: '',
			}
		},
		onLoad(options) {
			
		},
		onShow() {
			this.getfresh()
			
		},
		onPullDownRefresh: function() {
			console.log('1111');
			this.fresh();
		},
		onReachBottom() {
			console.log('222');
			//当前列表数据长度>=数据总长度时
				if (this.orderList.length >= this.count) {
					uni.showToast({
						title: '没有更多了~',
						duration: 1000,
						icon: 'none'
					})
				} else {
					this.getList()
				}
		},
		methods: {
			scrollLower() {
				if(this.orderList.length < this.count) {
					this.getList();
				}
			},
			showOverlay(e) {
				console.log('@@@', e);
				this.selectIndex = e.selectIndex;
				uni.redirectTo({
					url:'accompanyPages/orderList/orderList'
				})
				return;
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
			changeSwitch(status) {
							console.log(status);
			},
			change(e){
				this.selectIndex = e.detail.current;
				console.log('selectIndex', this.selectIndex);
			},
			selectSwiper(e){
				// console.log(1,e)
			},
			toSelect(type){
				this.selectIndex = type;
				this.page = 1;
				this.orderList = [];
				this.getList();
			},
			getList() {
				let list = this.selectIndex == 1 ? 'escortUnassigned' : 'escortDistribute';
				this.$api[list]({page: this.page, pageSize:this.pageSize}).then(res=>{
					uni.hideLoading()
					console.log('派单列表',res)
					this.loading = res.list.length == 4
					this.orderList = this.orderList.concat(res.list)
					this.count = res.count;
					this.page += 1
				})
			},
			getfresh(e) {
				uni.showLoading({title: '加载中',mask:true});
				this.orderList = []
				this.page = 1
				this.loading = true;
				this.getList()
			},
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
