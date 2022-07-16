<template>
	<view class="flex_column">
		<view class="box_690 padding_l">
			<view class="color_black_333 font_size_text_xl font_weight">
				<text class="color_orange"> *</text>1、您还会再次选择麦咚陪诊服务吗？
			</view>
			<view class="answer_box flex_row  margin_l_0 padding_left_xl padding_right_xl">
				<view class="font_size_text_xl color_black_333">
					<radio value="1" :checked="sexStatus" color='#FF6437' style="transform:scale(0.5)" />否
				</view>
				<view class="font_size_text_xl color_black_333" style="margin-left: 260rpx;">
					<radio value="2" :checked="!sexStatus" color='#FF6437' style="transform:scale(0.5)" />是
				</view>
			</view>
			<view class="color_black_333 font_size_text_xl font_weight padding_top_m">
				<text class="color_orange"> *</text>2、您还希望麦咚陪诊服务在哪些方面做出完善？
			</view>
			<view class="answer_box   margin_l_0">
				<input type="text" class="margin_top_l" v-model="reason">
			</view>
			<view class="color_black_333 font_size_text_xl font_weight padding_top_m">
				<text class="color_orange"> *</text>3、您会推荐麦咚陪诊服务给其他有需求的亲戚朋友吗？
			</view>
			<view class="answer_box flex_row  margin_l_0 padding_left_xl padding_right_xl">
				<view class="font_size_text_xl color_black_333">
					<radio value="1" :checked="recomStatus" color='#FF6437' style="transform:scale(0.5)" />不会
				</view>
				<view class="font_size_text_xl color_black_333" style="margin-left: 260rpx;">
					<radio value="2" :checked="!recomStatus" color='#FF6437' style="transform:scale(0.5)" />会
				</view>
			</view>
			<view class="color_black_333 font_size_text_xl font_weight padding_top_m">
				<text class="color_orange"> *</text>4、请对本次服务满意度评分
			</view>
			<view class="margin_top_l  padding_left_xl" style="padding-bottom: 50rpx;">
				<u-rate count="5" v-model="rateValue" size='66'></u-rate>
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
				sexStatus: true,
				recomStatus:true,
				rateValue:0,
				reason:''
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.answer_box {
		width: 630rpx;
		height: 90rpx;
		border-radius: 10rpx;
		border: 1rpx #E6E6E6 solid;
		box-sizing: border-box;
	}
</style>
