<template>
	<view class="padding_bottom_m">
		<view class="box_690 padding_l margin_left_l">
			<view class="" style="width: 630rpx;height: 750rpx;border:1rpx solid #E6E6E6;	border-radius: 10rpx;padding: 20rpx; box-sizing: border-box;">
				<rich-text :nodes="con"></rich-text>
			</view>
			<view class="margin_top_l ">
				<view class="input_share" style="text-align: center;line-height: 180rpx;font-size:24rpx;color:#BEBEBE;margin-top:70rpx;" v-if="!keyWord && !isShow" @click="inputCon">
					和大家来分享一下吧！
				</view>
				<textarea cols="30" rows="10" v-model="keyWord"   class="input_share" v-if="isShow" :focus="true" :auto-focus="true" style="padding: 20rpx;"></textarea>
			</view>
			<view class="flex_row margin_top_xl">
				<view class="img_box flex_column justify_center" >
					<image src="/static/image/photograph.png" mode="aspectFill" class="photo_img"></image>
				</view>
				<view class="margin_left_m">
					<view class=" color_black_333 font_size_text_xl font_weight">
						上传图片
					</view>
					<view class="margin_top_s color_black_999 font_size_text_s">
						内容丰富的评价有机会成为优质评价哦
					</view>
				</view>
				
			</view>
			<view class="margin_top_xl publish_buttton">
				发表
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				con: '富文本内容',
				keyWord:'',
				isShow:false
			}
		},
		methods: {
			inputCon(e){
				this.isShow = true
			}
		}
	}
</script>

<style lang="scss" scoped>
.input_share{
	width: 630rpx;
	height: 180rpx;
	border:1rpx solid #E6E6E6;
	border-radius: 10rpx;
	
	box-sizing: border-box;
	
}
.img_box{
	width: 110rpx;
	height: 110rpx;
	border:1rpx solid #E6E6E6;
	border-radius: 10rpx;
	
}
.photo_img{
	width: 52rpx;
	height: 46rpx;
}
.publish_buttton{
	width: 600rpx;
	height: 45px;
	line-height: 45px;
	text-align: center;
	border-radius: 20px;
	background: linear-gradient(to right, #FF6437, #FF9B51);
	font-size: 16px;
	color: #ffffff;
	margin-left:15rpx ;
}
</style>
