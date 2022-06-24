<template>
	<view>
		<!-- 底部导航栏 -->
		<view class="flex_row justify_around tabbar_box bg_white">
			<view class="flex_column " @click="toTabbar(1)">
				<block v-if="type == 1">
					<image src="/static/image/tabbar02.png" class="tabbar_img"></image>
					<view class="font_size_text_xxs margin_top_s color_orange">
						首页
					</view>
				</block>	
				<block v-else>
					<image src="/static/image/tabbar01.png" class="tabbar_img"></image>
					<view class="font_size_text_xxs margin_top_s color_black_888">
						首页
					</view>
				</block>
				
			</view>
			<view class="flex_column " @click="toTabbar(2)">
				<block v-if="type == 2">
					<image src="/static/image/tabbar04.png" class="tabbar_img"></image>
					<view class="font_size_text_xxs margin_top_s color_orange">
						订单
					</view>
				</block>	
				<block v-else>
					<image src="/static/image/tabbar03.png" class="tabbar_img"></image>
					<view class="font_size_text_xxs margin_top_s color_black_888">
						订单
					</view>
				</block>
				
			</view>
			<view class="flex_column " @click="toTabbar(3)">
				<view style="position: relative;">
					<view style="position: absolute;top:-45px;left: -25px;width: 100rpx;height: 50px;border-radius: 50%;padding: 5px;background: #ffffff;">
						<view class="centerImg flex_column " style="">
							<image src="/static/image/tabbar09.png" class="tabbar_img_center margin_top_m" ></image>
						</view>
						
					</view>
				</view>
				
				<view class="font_size_text_xxs margin_top_xl color_black_888">
					急速预约
				</view>
				<!-- <block>
					<image src="/static/image/tabbar01.png" class="tabbar_img"></image>
					<view class="font_size_text_xxs margin_top_s color_orange">
						急速预约
					</view>
				</block> -->	
			</view>
			<view class="flex_column " @click="toTabbar(4)">
				<block v-if="type == 4">
					<image src="/static/image/tabbar06.png" class="tabbar_img"></image>
					<view class="font_size_text_xxs margin_top_s color_orange">
						健康百科
					</view>
				</block>
				<block v-else>
					<image src="/static/image/tabbar05.png" class="tabbar_img"></image>
					<view class="font_size_text_xxs margin_top_s color_black_888">
						健康百科
					</view>
				</block>
					
			</view>
			<view class="flex_column " @click="toTabbar(5)">
				<block v-if="type == 5">
					<image src="/static/image/tabbar08.png" class="tabbar_img"></image>
					<view class="font_size_text_xxs margin_top_s color_orange">
						我的
					</view>
				</block>
				<block v-else>
					<image src="/static/image/tabbar07.png" class="tabbar_img"></image>
					<view class="font_size_text_xxs margin_top_s color_black_888">
						我的
					</view>
				</block>
					
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"tabbar",
		props:{
			type:{//type 代表进入的页面 1:首页，2：订单，3：快速预约 4：健康百科 5：我的
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
						url:'/pages/index/index'
					})
				}else if(status == 2){
					
				}else if(status == 3){//急速预约
					this.$emit('openQuickShow','open')
					
				}else if(status == 4){
					
				}else if(status == 5){
					uni.reLaunch({
						url:'/aUserPages/my/my'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.tabbar_box{height: 160rpx;position: fixed;bottom: 0;left: 0;width: 100%;z-index: 9999;}
.tabbar_img{width: 38rpx;height: 38rpx;}
.centerImg{width: 90rpx;height: 90rpx;border-radius: 50%;background: linear-gradient(to bottom right, #FF6437 , #FF9B51);  box-shadow:0px 0px 0px #fff}
.tabbar_img_center{width: 44rpx;height: 44rpx;}
</style>