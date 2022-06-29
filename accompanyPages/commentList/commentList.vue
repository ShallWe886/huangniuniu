<template>
	<view class="padding_bottom_m">
		<search></search>
		<view class="box_690 padding_l margin_left_l" v-for="(item,index) in commetList" :key="index">
			<view class="" style="display: flex;flex-direction: row;">
				<image src="/static/image/comment_avator.png" mode="aspectFill" class="comment_avator flex_shrink"></image>
				<view class="margin_left_s width_all">
					<view class="flex_row">
						<view class="font_size_text_l flex_row">
							<view style="color: #BEBEBE;">订单时间：</view><view class="color_black_888">2022-12-12 11:30</view>
						</view>
						<view class="margin_left flex_shrink">
							<rate :value="3"></rate>
						</view>
					</view>
					<view class="flex_row margin_top_m">
						<view class="accept_item_label margin_right_s ">
							西华医院
						</view>
						<view class="accept_item_label margin_right_s">
							内科
						</view>
						<view class="accept_item_label margin_right_s">
							专业陪诊
						</view>
					</view>
					<view class="flex_row margin_top_m">
						<view class="font_weight color_black_333 font_size_title_m">
							¥25.00
						</view>
						<view class="time_label margin_left_s">
							2022-12-12  3:00-5:00
						</view>
					</view>
					<view class=" color_black_333 font_size_text_m margin_top_s" style="line-height: 26rpx;">
						李先生<text class="margin_left_l">185****9393</text>
					</view>
					<view class="font_size_text_l color_black_333 margin_top_s">
						收入：¥23.00
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import rate from "@/components/rate/rate.vue"
	import search from '@/components/search.vue'
	export default {
		components: {
			search,
			rate
		},
		data() {
			return {
				commetList:[{},{},{},{}]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.comment_avator{width: 70rpx;
	height: 70rpx;
	border-radius: 50%;
	background-color: #888888;}
	.accept_item_label {
		height: 38rpx;
		line-height: 38rpx;
		padding: 0 20rpx;
		border-radius: 20rpx;
		background: #F5F5F5;
		font-size: 24rpx;
		color: #888888;

		&:nth-child(3) {
			background: #FFF0E5;
			color: #FF6437;
		}
	}
	.time_label{
		width: 254rpx;
		height: 38rpx;
		background: #F5F5F5;
		border-radius: 20rpx;
		font-size: 22rpx;
		text-align: center;
		color: #888888;
		line-height: 38rpx;
	}
</style>
