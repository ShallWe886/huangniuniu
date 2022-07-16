<template>
	<view class="flex_column padding_bottom_m ">
		<view class="box_690 padding_0_l">
			<view class="flex_row border_bottom padding_l_0" v-for="(value,key) in orderInfo" :key="key">
				<view class="font_size_text_xl color_black_333 font_weight">
					{{key}}
				</view>
				<view class="margin_left color_black_888 font_size_text_l">
					{{value}}
				</view>
			</view>
			<view class="flex_row border_bottom padding_l_0" >
				<view class="font_size_text_xl color_black_333 font_weight">
					退款原因
				</view>
				<view class="margin_left color_black_888 font_size_text_l flex_row">
					选择退款原因
					<u-icon name="arrow-right" size="30"></u-icon>
				</view>
			</view>
			<view class=" padding_l_0 " >
				<view class="font_size_text_xl color_black_333 font_weight">
					退款说明
				</view>
				<textarea v-model="personInfo"  cols="30" rows="8" class="area_box margin_top_m"></textarea>
				
			</view>
		</view>
		<view class="sure_buttton_letter margin_top_xxl">
			提交
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderInfo:{
					'医院':'华夏第一军区医院',
					'时间':'2022-05-12 8:00-9:00',
					'送取报告凭证':'有',
					'代办人':'无',
					'退款金额':'¥26.00',
					
					
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.area_box{
		border: 1rpx #E6E6E6 solid;
		border-radius: 10rpx;
		height: 190rpx;
	}
</style>
