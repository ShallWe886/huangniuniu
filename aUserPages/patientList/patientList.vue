<template>
	<view class=" padding_l">
		<block v-for="(item,index) in patientList" v-if="patientList.length >0" :key="index">
			<view class="box_690 flex_row padding_l">
				<view class="">
					<view class="flex_row">
						<image src="/static/image/patientList01.png" class="patient_icon_img flex_shrink"></image>
						<view class="font_size_title_s color_black_333 font_weight margin_left_s text_overflow_1">
							李无敌
						</view>
					</view>
					<view class="flex_row margin_top_m">
						<image src="/static/image/patientList02.png" class="patient_icon_img flex_shrink"></image>
						<view class="font_size_text_l color_black_888  margin_left_s">
							女
						</view>
					</view>
					<view class="flex_row margin_top_m">
						<image src="/static/image/patientList03.png" class="patient_icon_img flex_shrink"></image>
						<view class="font_size_text_l color_black_888  margin_left_s">
							111111111111111
						</view>
					</view>
				</view>
				<view class="flex_column margin_left margin_top_l patient_info">
					<view class="update_patient" @click="addPatient">
						修改
					</view>
					<view class="update_patient margin_top_m">
						删除
					</view>
				</view>
			</view>
		</block>
		<view class="prompt flex_column" v-if="patientList.length == 0">
			<image src="/static/image/nopatient.png" mode="aspectFit" class="no_patient_img"></image>
			<view class="font_size_title_s color_black_333 font_weight margin_top_l">
				您还没有添加就诊人～
			</view>
			<view class="font_size_text_l color_black_999 margin_top_xl">
				请点击下方按钮添加就诊人～
			</view>
			<view class="sure_buttton margin_top_xxl" @click="addPatient">
				添加就诊人信息
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				patientList:[{},{},{},{},{}]
			}
		},
		methods: {
			addPatient(e){
				//添加就诊人信息
				uni.navigateTo({
					url:'/aUserPages/patientList/addPatient'
				})
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	.patient_icon_img {
		width: 36rpx;
		height: 36rpx;
	}

	.patient_info {
		.update_patient {
			width: 120rpx;
			height: 50rpx;
			line-height: 50rpx;
			text-align: center;
			border-radius: 20rpx;

			&:nth-child(1) {
				border: 2rpx #638CFF solid;
				color: #638CFF;
			}

			&:nth-child(2) {
				border: 2rpx #FF6437 solid;
				color: #FF6437;
			}
		}


	}
	.no_patient_img{
		width: 300rpx;
		height: 220rpx;
	}
	
</style>
