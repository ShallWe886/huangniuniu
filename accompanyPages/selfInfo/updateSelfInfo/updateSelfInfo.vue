<template>
	<view class="padding_bottom_m">
		<view class="update_box">
			
			<view class="box_690 padding_0_l">
				<view class="" style="height: 100rpx; position: relative;">
					<view class="" style="position: absolute;top: -100rpx;left: 50%;transform: translate(-100rpx,0);">
						<view class="avator_box">
							<image src="/static/image/avator.png" mode="aspectFill" class="avator_img"></image>
							<image src="/static/image/update_avator.png" mode="aspectFill" class="avator_update_logo"></image>
						</view>
					</view>
					
				</view>
				
				<view class="flex_row padding_l_0 border_bottom border_top ">
					<view class="font_size_text_xl color_black_333 font_weight">
						真实姓名
					</view>
					<input type="text" placeholder="请输入真实姓名" class="margin_left text_align_right" placeholder-style="font-size:28rpx;color:#BEBEBE;">
				</view>
				<view class="flex_row padding_l_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						手机号码
					</view>
					<input type="text" placeholder="请输入手机号码" class="margin_left text_align_right" placeholder-style="font-size:28rpx;color:#BEBEBE;">
				</view>
				<view class="flex_row padding_l_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						年 龄
					</view>
					<view class="color_black_888 font_size_text_l margin_left">
						35岁
					</view>
				</view>
				<view class="flex_row padding_l_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						性 别
					</view>
					<view class="color_black_888 font_size_text_l margin_left">
						女
					</view>
				</view>
				<view class=" padding_l_0 border_bottom">
					<view class="flex_row">
						<view class="font_size_text_xl color_black_333 font_weight">
							资质证明
						</view>
						<view class="color_black_888 font_size_text_xs margin_left">
							*如有此项更容易通过审核
						</view>
					</view>
					<view class="justify_center flex_row ">
						<view class="flex_column justify_center update_img_box">
							<image src="/static/image/update_img.png" mode="aspectFill" class="update_img"></image>
							<view class="font_size_text_m color_black_888 margin_top_s">
								上传资质证明照片
							</view>
						</view>
					</view>
				</view>
				<view class="flex_row padding_l_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						备用账号
					</view>
					<view class=" margin_left">
						<u-icon name="arrow-right" size="30" color="#999999"></u-icon>
					</view>
				</view>
				<view class=" padding_l_0 ">
					<view class="font_size_text_xl color_black_333 font_weight">
						个人介绍 <text class="color_orange">*</text>
					</view>
					<textarea cols="30" rows="8" class="area_box margin_top_m"></textarea>

				</view>
				<view class="flex_row padding_l_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						医院
					</view>
					<view class=" margin_left">
						<u-icon name="arrow-right" size="30" color="#999999"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_l_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						科室
					</view>
					<view class=" margin_left">
						<u-icon name="arrow-right" size="30" color="#999999"></u-icon>
					</view>
				</view>
			</view>
		</view>
		<view class="sure_buttton_letter margin_top_xxl" style="margin-left: 70rpx;">
			注册
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
	.update_box{
		margin-top: 120rpx;
		margin-left: 30rpx;
	}
	.avator_box{
		position: relative;
		width: 176rpx;
		height: 176rpx;
		
		.avator_img{
			width: 176rpx;
			height: 176rpx;
		}
		
		.avator_update_logo{
			width: 52rpx;
			height: 52rpx;
			position: absolute;
			bottom: 0;
			right: 0;
		}
		
	}
	.update_img_box {
		width: 322rpx;
		height: 192rpx;
		border-radius: 16rpx;
		border: 2rpx dashed #FFB644;
		margin-top: 20rpx;
	}

	.update_img {
		width: 90rpx;
		height: 90rpx;
	}

	.area_box {
		border: 1rpx #E6E6E6 solid;
		border-radius: 10rpx;
		height: 190rpx;
	}
</style>
