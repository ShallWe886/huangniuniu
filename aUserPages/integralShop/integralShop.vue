<template>
	<view class="padding_bottom_m">
		<view class="flex_row" style="background-color: #ffffff;height: 80rpx;box-sizing: border-box;padding: 15rpx 0;">
			<view class="flex_row width_all order_input_box margin_left_l  padding_0_s " >
				<u-icon name="search" size="40" color="#999999"></u-icon>
				<input type="text" style="width: 600rpx;" placeholder="请输入搜索内容" v-model="keyWord"
					placeholder-class="font_size_text_m color_black_999">
				<view>
					<u-icon name="mic" size="30" color="#999999"></u-icon>
				</view>
			</view>
			<u-icon name="grid" size="50"></u-icon>
		</view>
		<view class="flex_row flex_wrap padding_left_l padding_top_l ">
			<view class="shop_box flex_column " v-for="(item,index) in shopList" :key="index" @click="lookDetail(item,index)">
				<image :src="item.thumbnail_img" mode="aspectFill" class="shop_img"></image>
				<view class="">
					<view class="font_size_text_m color_black_333 text_overflow_1 font_weight margin_top_s">
						{{item.goods_name}}
					</view>
					<view class="font_size_text_s color_orange margin_top_xs">
						{{item.pay_integral}}积分+{{item.deduct_price}}元
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
				shopList:[],
				pageNo:1,
				loading:true
			}
		},
		onLoad() {
			this.getfresh()
		},
		onShow() {
		},
		onPullDownRefresh() {
			this.getfresh()
		},
		onReachBottom() {
			if (this.loading) {
				this.getData();
			}
		},
		methods: {
			fresh(e) {
				uni.showNavigationBarLoading();
				this.getfresh()
				uni.hideNavigationBarLoading();
				uni.stopPullDownRefresh();
			},
			getfresh(e) {
				this.shopList = []
				this.pageNo = 1
				this.loading = true;
				this.getData();
			},
			getData(e){
				this.$api.getGoodList({page:this.pageNo,pageSize:20}).then(res=>{
					this.loading = res.list.length == 10
					this.shopList = this.shopList.concat(res.list)
					this.pageNo += 1
					
				})
			},
			lookDetail(item,index){
				uni.navigateTo({
					url:"/aUserPages/integralShop/shopDetail/shopDetail?id="+item.id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order_input_box {
		width: 640rpx;
		border-radius: 30rpx;
		background-color: #F5F5F5;
		height: 60rpx;
	}

	.shop_box {
		width: 220rpx;
		height: 290rpx;
		border-radius: 16rpx;
		background: #ffffff;
		margin-right: 15rpx;
		margin-bottom: 15rpx;
		.shop_img{
			width: 220rpx;
			height: 175rpx;
			background: #F5F5F5;
			border-radius: 16rpx 16rpx 0 0;
			
		}
	}
</style>
