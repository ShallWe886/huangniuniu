<template>
	<view class="flex_column padding_bottom_m">
		<view class="box_690 padding_l" style="position: relative;">
			<textarea v-model="content" name="" id="" cols="30" rows="10" class="areabox" placeholder="请输入备注信息"
				placeholder-style="font-size:28rpx;color:#BEBEBE;" maxlength="300"></textarea>
			<view class="tip_word">
				已输入0/300
			</view>
		</view>
		<view class="box_690">
			<view class="flex_row">
				<view class="top_label">
				</view>
				<view class="font_size_title_s color_black_333 font_weight padding_top_l padding_bottom_l border_bottom width_all margin_right_l" style="margin-left: 16rpx;">
					上传图片(最多9张)
				</view>
			</view>
			<view class="flex_row padding_l">
				<UpLoadImg @input="uploadImg" :list="list_img" ShowNum="9" ></UpLoadImg>
			</view>
		</view>
		<view class="fixed_bottom flex_center submit_style">
			<view class="sure_buttton" @click="submitOrder">
				确认提交
			</view>
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
				list_img: [],
				content: '',
				service_id: '',
			}
		},
		onLoad(options) {
			this.service_id = options.service_id
		},
		methods: {
			uploadImg(e) {
				this.list_img = e
				console.log('eeee', e, this.disabled);
			},
			submitOrder()
			{
				this.$api.escortFinish({service_id: this.service_id, end_end_content: this.content,end_pic: this.list_img.toString()}).then(res=>{
					console.log('res', res);
					uni.navigateBack();
				}).catch(error =>{
					uni.showToast({
						title: error.msg,
						duration: 3000,
						icon: "none"
					})
				})
			},
		}
	}
</script>

<style scoped="sass">
	.submit_style {
		bottom: 40rpx;
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.top_label{
		width: 16rpx;
		height: 34rpx;
		background: #E6E6E6;
		
	}
	.tip_word {
		position: absolute;
		bottom: 50rpx;
		right: 50rpx;
		font-size: 28rpx;
		color: #BEBEBE;
	}
</style>
