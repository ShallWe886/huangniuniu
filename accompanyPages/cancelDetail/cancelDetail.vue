<template>
	<view>
		<!-- <search></search> -->
		<view class="box_690 padding_l margin_left_l">
			<view class="flex_row padding_bottom_l border_bottom">
				<image src="" mode="aspectFill" class="accept_item_img flex_shrink"></image>
				<view class="margin_left_m">
					<view class="font_size_text_l" style="line-height: 24rpx;">
						<text style="color: #BEBEBE;">订单时间：</text><text class="color_black_888">2022-12-12 11:30</text>
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
					<view class="font_weight color_black_333 font_size_title_l margin_top_m" style="line-height: 26rpx;">
						¥25.00
					</view>
					<view class=" color_black_333 font_size_text_l margin_top_m" style="line-height: 26rpx;">
						李先生<text class="margin_left_l">185****9393</text>
					</view>
					<!-- <view class="font_size_text_m color_black_888 margin_top_m" style="line-height: 26rpx;">
						2022-12-12 3:00-5:00
					</view> -->
				</view>
			</view>
			<view class="flex_row padding_l_0 border_bottom">
				<view class="font_size_text_l color_black_333">
					取消时间
				</view>
				<view class="margin_left font_size_text_l color_black_888">
					2022-12-12 2:00:12
				</view>
			</view>
			<view class="flex_row padding_top_l ">
				<view class="font_size_text_l color_black_333">
					取消原因
				</view>
				<view class="margin_left font_size_text_l color_black_888">
					无理由
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

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.accept_item_img {
		width: 200rpx;
		height: 270rpx;
		border-radius: 10rpx;
		background: #F5F5F5;
	}

	.accept_item_label {
		height: 38rpx;
		line-height: 38rpx;
		padding: 0 20rpx;
		border-radius: 20rpx;
		background: #F5F5F5;
		font-size: 26rpx;
		color: #888888;

		&:nth-child(3) {
			background: #FFF0E5;
			color: #FF6437;
		}
	}
</style>
