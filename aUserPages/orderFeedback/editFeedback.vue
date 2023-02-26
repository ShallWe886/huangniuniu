<template>
	<view class="flex_column padding_bottom_m" :class="{popupShow:hospitalShow}">
		<view class="box_690 padding_l" style="position: relative;">
			<textarea v-model="content" name="" id="" cols="30" rows="10" class="areabox" placeholder="请输入留言信息"
				placeholder-style="font-size:28rpx;color:#BEBEBE;" maxlength="300"></textarea>
			<view class="tip_word">
				已输入{{content.length}}/300
			</view>
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
				<!-- <view style="position: relative; margin-right: 45rpx;width: 180rpx;height: 130rpx;" >
					<image src="" mode="aspectFill" class="add_item_img"></image>
					<view class="delet_box">
						×
					</view>
				</view>
				<view class="update_box flex_column justify_center">
					<image src="/static/image/add.png" mode="aspectFill" class="add_Img"></image>
				</view> -->
				<UpLoadImg @input="uploadImg" :list="list_img" ShowNum="6" ></UpLoadImg>
			</view>
		</view>
		<view class="sure_buttton margin_top_xxl" @click="submitTrue">
			确认提交
		</view>
	</view>
</template>

<script>
	import UpLoadImg from "@/components/UpLoad.vue"
	export default {
		components: {
			UpLoadImg
		},
		data() {
			return {
				disabled: false,
				content_type: '',
				content: '',
				contact: '',
				list_img: [],
				order_id: null,
				service_id: null,
				msg_id: null,
				type: 0,
			}
		},
		onLoad(options){
			this.type = options.type
			this.order_id = options.order_id
			this.service_id = options.service_id
			this.msg_id = options.msg_id ? options.msg_id : 0
		},
		methods: {
			uploadImg(e) {
				this.list_img = e
				console.log('eeee', e, this.disabled);
			},
			//提交反馈
			submitTrue() {
				let api = {};
				let params = {};
				if(this.msg_id && this.msg_id > 0) {
					api = {0: 'feedbackReplay', 1: 'feedbackReplayEscort'}
					params = {order_id: this.order_id,service_id: this.service_id,msg_id: this.msg_id,replay:this.content,replay_img:this.list_img.toString()}
				} else {
					api = {0: 'feedbackAdd', 1: 'feedbackAddEscort'}
					params = {order_id: this.order_id,service_id: this.service_id,content:this.content,list_img:this.list_img.toString()}
				}
				this.$api[api[this.type]](params).then(res => {
					uni.showToast({
						title:'留言反馈成功',
						icon: 'success',
						duration:1000
					})
					setTimeout(function() {
						uni.navigateBack({})
					}, 1000);
					
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.popupShow {
		overflow: hidden;
		position: fixed;
		height: 100vh;
		width: 100%;
	}
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
