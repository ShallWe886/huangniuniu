<template>
	<view class="flex_row">
		<view class="flex_row" v-for="(item,index) in timeList" :key="index">
			<view class="flex_column line_box ">
				<block v-if="index != 3">
					<view class="order_step_line_gray"  :class="{'order_step_line_orange':value-1>index }"></view>
				</block>
				<image :src="value > index ? '/static/image/orderDetail01.png':'/static/image/orderDetail02.png'"
					mode="aspectFill" class="order_step_img"></image>
				<view v-if="value > index" style="height: 90rpx; " class="flex_column">
					<view class="font_size_text_l color_orange">
						{{item.title}}
					</view>
					<view class="font_size_text_xxs color_black_888 flex_column">
						<view>2022-05-12</view>
						<view>08:23:59</view>
					</view>
				</view>
				<view v-else style="height: 90rpx;">
					<view class="font_size_text_l color_black_999">
						{{item.title}}
					</view>
				</view>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		name: "step",
		props: {
			value: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				timeList: [{
						title: '提交订单',
						time: '2022-05-12 08:23:59'
					},
					{
						title: '付款成功',
						time: '22022-05-1208:24:05'
					},
					{
						title: '待接单',
						time: '2022-05-12 08:23:59'
					},
					{
						title: '已完成',
						time: '2022-05-12 08:23:59'
					}
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
	
	.order_step_img {
		width: 44rpx;
		height: 44rpx;
		
		
	}

	.order_step_line_gray {
		width: 144rpx;
		border: 2rpx solid #999999;
		position: absolute;
		top:22rpx;
		right:-89rpx;
	}

	.order_step_line_orange {
		width: 144rpx;
		border: 2rpx solid #FF6F3D;
		position: absolute;
		top:22rpx;
		right:-89rpx;
	}
	.line_box{
		position: relative;
		width: 160rpx;
	}
</style>
