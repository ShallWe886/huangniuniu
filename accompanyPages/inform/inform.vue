<template>
	<view class="padding_bottom_m">
		<search></search>
		<view class="box_690 padding_l_0 margin_left_l" style="display: flex; flex-direction: row;" v-for="(item,index) in informList" :key="index">
			<view class="gray_box">
			</view>
			<view class="margin_0_l width_all">
				<view class="flex_row">
					<view class="font_weight color_black_333 font_size_title_m ">
						订单取消
					</view>
					<view class="margin_left flex_row">
						<view class="dot_box">
						</view>
						<view class="font_size_text_m color_black_999 margin_left_s">
							客户取消订单
						</view>
					</view>
				</view>
				<view class="font_size_title_l color_black_333 font_weight margin_top_m">
					¥25.00
				</view>
				<view class="flex_row">
					<view class="con_label">
						专业陪诊
					</view>
					<view class="font_size_text_l color_black_888 margin_left_m">
						2022-12-12  3:00-5:00
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import search from '@/components/search.vue'
	export default {
		components: {
			search
		},
		data() {
			return {
				informList:[{},{},{},{}]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.gray_box{
	width: 14rpx;
	height: 30rpx;
	background: #E6E6E6;
}
.dot_box{
	width: 10rpx;
	height: 10rpx;
	background: linear-gradient(135deg, #FF6437 0%, #FF9B51 100%);
	border-radius: 50%;
}
.con_label{
	padding: 5rpx 20rpx;
	border-radius: 20rpx;
	background: #FFF0E5;
	font-size: 22rpx;
	color: #FF6437;
}
</style>
