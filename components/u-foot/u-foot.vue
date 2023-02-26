<template>
	<view>
		<view class="flex_row justify_around ufoot_box bg_white">
			<view class="flex_column"  @click="toTabbar(1)">
				<block v-if="type == 1">
					<image src="/static/image/selfInfo00.png" mode="aspectFill" class="foot_img"></image>
					<view class="font_size_text_s color_orange margin_top_s">
						接单
					</view>
				</block>
				<block v-else>
					<image src="/static/image/selfInfo01.png" mode="aspectFill" class="foot_img"></image>
					<view class="font_size_text_s color_black_888 margin_top_s">
						接单
					</view>
				</block>
			</view>
			<view class="flex_column"  @click="toTabbar(2)">
				<block v-if="type == 2">
					<image src="/static/image/tabbar04.png" mode="aspectFill" class="foot_img"></image>
					<view class="font_size_text_s color_orange margin_top_s">
						订单列表
					</view>
				</block>
				<block v-else>
					<image src="/static/image/tabbar03.png" mode="aspectFill" class="foot_img"></image>
					<view class="font_size_text_s color_black_888 margin_top_s">
						订单列表
					</view>
				</block>
			</view>
			<view class="flex_column"  @click="toTabbar(3)">
				<block v-if="type == 3">
					<image src="/static/image/tabbar08.png" mode="aspectFill" class="foot_img"></image>
					<view class="font_size_text_s color_orange margin_top_s">
						我的
					</view>
				</block>
				<block v-else>
					<image src="/static/image/tabbar07.png" mode="aspectFill" class="foot_img"></image>
					<view class="font_size_text_s color_black_888 margin_top_s">
						我的
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"u-foot",
		props:{
			type:{ // 1.接单 2.订单列表 3.我的
				type:Number,
				default:0
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			toTabbar(status){
				if(status == 1){
					uni.reLaunch({
						url:'/accompanyPages/acceptOrder/acceptOrder'
					})
				}else if(status == 2){
					uni.reLaunch({
						url:'/accompanyPages/orderList/orderList'
					})
				}else if(status == 3){//急速预约
					uni.reLaunch({
						url:'/accompanyPages/selfInfo/selfInfo'
					})
					
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ufoot_box{
		height: 168rpx;position: fixed;bottom: 0;left: 0;width: 100%;z-index: 9999;
	}
.foot_img{
	width: 37rpx;
	height: 39rpx;
}
</style>