<template>
	<view class="padding_bottom_m flex_column">
		<view class="box_690 addcard_box ">
			<image src="/static/image/addCard01.png" mode="aspectFill" class="addcard_img"></image>
			<view class="flex_row padding_l_0">
				<view class="add_label">
				</view>
				<view class="font_size_title_l color_black_333 font_weight " style="margin-left: 14rpx;">
					基本信息
				</view>
			</view>
			<view class="flex_row padding_l border_bottom ">
				<view class="font_size_text_xl color_black_333">
					真实姓名
				</view>
				<input type="text" placeholder="请输入真实姓名" placeholder-style="font-size:28rpx;color:#BEBEBE;" class="margin_left text_align_end">
			</view>
			<view class="flex_row padding_l border_bottom ">
				<view class="font_size_text_xl color_black_333">
					身份证
				</view>
				<input type="text" placeholder="请输入身份证" placeholder-style="font-size:28rpx;color:#BEBEBE;" class="margin_left text_align_end">
			</view>
			<view class="flex_row padding_l border_bottom ">
				<view class="font_size_text_xl color_black_333">
					手机号码
				</view>
				<input type="text" placeholder="请输入手机号码" placeholder-style="font-size:28rpx;color:#BEBEBE;" class="margin_left text_align_end">
			</view>
		</view>
		
		<view class="box_690 addcard_box_item ">
			<image src="/static/image/addCard02.png" mode="aspectFill" class="addcard_img_item"></image>
			<view class="flex_row padding_l_0">
				<view class="add_label_item">
				</view>
				<view class="font_size_title_l color_black_333 font_weight " style="margin-left: 14rpx;">
					银行卡信息
				</view>
			</view>
			<view class="flex_row padding_l border_bottom ">
				<view class="font_size_text_xl color_black_333">
					银行卡号
				</view>
				<input type="text" placeholder="请输入银行卡号" placeholder-style="font-size:28rpx;color:#BEBEBE;" class="margin_left text_align_end">
			</view>
			<view class="flex_row padding_l border_bottom ">
				<view class="font_size_text_xl color_black_333">
					银行名称
				</view>
				<view class="font_size_text_l color_black_999 margin_left">
					自动识别
				</view>
				
			</view>
		</view>
		<view class="box_690 flex_row ">
			<view class="flex_row padding_l border_bottom ">
				<view class="font_size_text_xl color_black_333 flex_shrink">
					验证码
				</view>
				<view class="  margin_left flex_row">
					<input type="text" placeholder="请输入验证码" placeholder-style="font-size:28rpx;color:#BEBEBE;" class=" text_align_end">
					<view class="code_btn margin_left_s">
						发送验证码
					</view>
				</view>
				
			</view>
		</view>
		<view class="sure_buttton margin_top_xxl" >
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
.addcard_box{
	position: relative;
	.addcard_img{
		width: 245rpx;
		height: 270rpx;
		position: absolute;
		right: 30rpx;
		bottom: 30rpx;
	}
	.add_label{
		width: 16rpx;
		height: 34rpx;
		background: #E6E6E6;
	}
}
.addcard_box_item{
	position: relative;
	.addcard_img_item{
		width: 242rpx;
		height: 187rpx;
		position: absolute;
		right: 30rpx;
		bottom: 30rpx;
	}
	.add_label_item{
		width: 16rpx;
		height: 34rpx;
		background: #E6E6E6;
	}
}

.code_btn{
	width: 178rpx;
	height: 68rpx;
	background: linear-gradient(135deg, #FF6437 0%, #FF9B51 100%);
	border-radius: 10rpx;
	line-height: 68rpx;
	text-align: center;
	color: #ffffff;
	font-size: 28rpx;
}
</style>
