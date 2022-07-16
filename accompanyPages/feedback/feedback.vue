<template>
	<view class="flex_column padding_bottom_m">
		<view class="box_690 flex_row padding_l">
			<view class="color_black_333 font_size_text_xl font_weight">
				选择反馈类型
			</view>
			<view class="margin_left">
				<u-icon name="arrow-right" size="30"></u-icon>
			</view>
		</view>
		<view class="box_690 padding_l" style="position: relative;">
			<textarea name="" id="" cols="30" rows="10" class="areabox" placeholder="请输入介绍信息"
				placeholder-style="font-size:28rpx;color:#BEBEBE;" maxlength="300"></textarea>
			<view class="tip_word">
				已输入0/300
			</view>
		</view>
		<view class="box_690 padding_l">
			<input type="text" placeholder="手机/邮箱/QQ（选填）" placeholder-style="font-size: 30rpx;color: #BEBEBE;">
		</view>
		<view class="box_690">
			<view class="flex_row">
				<view class="top_label">
				</view>
				<view class="font_size_title_s color_black_333 font_weight padding_top_l padding_bottom_l border_bottom width_all margin_right_l" style="margin-left: 16rpx;">
					上传图片(最多6张)
				</view>
			</view>
			<view class="flex_row padding_l">
				<view style="position: relative; margin-right: 45rpx;width: 180rpx;height: 130rpx;" >
					<image src="" mode="aspectFill" class="add_item_img"></image>
					<view class="delet_box">
						×
					</view>
				</view>
				<view class="update_box flex_column justify_center">
					<image src="/static/image/add.png" mode="aspectFill" class="add_Img"></image>
				</view>
				
			</view>
		</view>
		<view class="sure_buttton margin_top_xxl">
			确认绑定
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.areabox {
		width: 630rpx;
		height: 300rpx;
		border-radius: 8rpx;
		border: 1rpx solid #E6E6E6;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
	}

	.tip_word {
		position: absolute;
		bottom: 50rpx;
		right: 50rpx;
		font-size: 28rpx;
		color: #BEBEBE;
	}
	
	.top_label{
		width: 16rpx;
		height: 34rpx;
		background: #E6E6E6;
		
	}
	
	.update_box{
		width: 180rpx;
		height: 130rpx;
		background: #F5F5F5;
		
		
		.add_Img{
			width: 36rpx;
			height: 36rpx;
		}
	}
	
	.add_item_img{
		width: 180rpx;
		height: 130rpx;
		background: #F5F5F5;
	}
	.delet_box{
		width: 30rpx;
		height: 24rpx;
		background: #000000;
		border-radius: 0rpx 0rpx 0rpx 15rpx;
		opacity: 0.4;
		font-size: 28rpx;
		color: #ffffff;
		line-height: 24rpx;
		text-align: center;
		position: absolute;
		top: 0;
		right: 0;
	}
</style>
