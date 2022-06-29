<template>
	<view>
		<view class="flex_row margin_top_xl margin_left_l">
			<view class="add_bg"></view>
			<view class="font_size_title_l color_black_333 font_weight margin_left_s">
				个人信息
			</view>
		</view>
		<view class="box_690 margin_left_l padding_0_l">
			<view class="flex_row padding_l_0 border_bottom">
				<view class="font_size_text_xl color_black_333 font_weight">
					姓名
				</view>
				<view class="margin_left flex_row">
					<input type="text" class="text_align_end margin_right_s" v-model="registerInfo.name" placeholder="请输入姓名"
						placeholder-class="font_size_text_l">
				</view>

			</view>
			<view class="flex_row padding_l_0 border_bottom" v-if="key == 'name'">
				<view class="font_size_text_xl color_black_333 font_weight">
					性别
				</view>
				<view class="margin_left flex_row">
					<view class="flex_row font_size_text_l color_black_333">
						<image src="/static/image/select01.png" class="icon_img" v-if="registerInfo.sex == 0"></image>
						<image src="/static/image/select02.png" class="icon_img" v-else></image>
						<view class="margin_left_s">
							男
						</view>
					</view>
					<view class="flex_row font_size_text_l color_black_333 margin_left_m">
						<image src="/static/image/select01.png" class="icon_img" v-if="registerInfo.sex == 1"></image>
						<image src="/static/image/select02.png" class="icon_img" v-else></image>
						<view class="margin_left_s">
							女
						</view>
					</view>
				</view>
			</view>
			<view class="flex_row padding_l_0 border_bottom">
				<view class="font_size_text_xl color_black_333 font_weight">
					年龄
				</view>
				<view class="margin_left flex_row">
					<input type="text" class="text_align_end margin_right_s" v-model="registerInfo.age"
						placeholder="请输入年龄" placeholder-class="font_size_text_l">
				</view>
			</view>
			<view class="flex_row padding_l_0 border_bottom">
				<view class="font_size_text_xl color_black_333 font_weight">
					联系方式
				</view>
				<view class="margin_left flex_row">
					<input type="text" class="text_align_end margin_right_s" v-model="registerInfo.phone"
						placeholder="请输入联系方式" placeholder-class="font_size_text_l">
				</view>
			</view>
			<view class=" padding_l_0 " >
				<view class="font_size_text_xl color_black_333 font_weight">
					个人简介
				</view>
				<textarea v-model="registerInfo.detail" cols="30" rows="8" class="area_box margin_top_m"></textarea>
			
			</view>
			<view class="flex_row padding_l_0 border_bottom">
				<view class="font_size_text_xl color_black_333 font_weight">
					资质证明
				</view>
				<view class="margin_left register_label">
					上传
				</view>
			</view>
		</view>
		<view class="sure_buttton " style="margin-top: 200rpx; margin-left: 70rpx;" @click="submitRegister">
			注册
		</view>
		<u-popup :show="tipPop" :closeable="true" mode="center" :round="20" @close="closePop">
			<view class="flex_column "
				style="width: 600rpx; height: 340rpx;box-sizing: border-box;padding: 108rpx 30rpx 30rpx 30rpx">
				<view class="font_size_title_xxl color_black_333 font_weight">
					已提交审核
				</view>
				<view class="font_size_text_xl color_black_666  margin_top_xl">
					预计xx个工作日完成审核
				</view>
				<view class="font_size_text_xl color_black_666  margin_top_m">
					请耐心等待
				</view>
				
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				registerInfo:{
					name:'',
					age:'',
					phone:'',
					detail:'',
					sex:0
				},
				tipPop:false
			}
		},
		methods: {
			closePop(e){
				this.tipPop = false
			},
			submitRegister(e){
				this.tipPop = true
				setTimeout(res=>{
					uni.navigateTo({
						url:"/accompanyPages/acceptOrder/acceptOrder"
					})
				},3000)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.add_bg {
		width: 10rpx;
		height: 30rpx;
		border-radius: 4rpx;
		background: linear-gradient(to bottom, #FF6437, #FF9B51);
	}
	
	.area_box {
		border: 1rpx #E6E6E6 solid;
		border-radius: 10rpx;
		height: 190rpx;
		width: 630rpx;
	}
	
	.register_label{
		width: 98rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		background-color: rgba(255, 100, 55, 0.12);
		color: #FF6437;
		font-size: 28rpx;
		border-radius: 8rpx;
	}
</style>
