<template>
	<view class="padding_bottom_m">
		<view class="box_690 padding_l margin_left_l" v-for="(item,index) in question" :key="index">
			<view class="flex_row" @click="lookAnswer(item)">
				<view class="font_size_title_s color_black_333 font_weight" >
					{{index+1}}、问题名称
				</view>
				<view class="margin_left">
					<u-icon name="arrow-right" size="30" color="#999999" v-if="!item.isShow"></u-icon>
					<u-icon name="arrow-down" size="30" color="#999999" v-if="item.isShow"></u-icon>
				</view>
			</view>
			<view class="answer_box font_size_text_m color_black_999 margin_top_l"  v-if="item.isShow">
				问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				question: [{
					que: '',
					answer: '',
					isShow: true
				}, {
					que: '',
					answer: '',
					isShow: false
				}, {
					que: '',
					answer: '',
					isShow: false
				}, {
					que: '',
					answer: '',
					isShow: false
				}, {
					que: '',
					answer: '',
					isShow: false
				}, {
					que: '',
					answer: '',
					isShow: false
				}, {
					que: '',
					answer: '',
					isShow: false
				}, {
					que: '',
					answer: '',
					isShow: false
				}, {
					que: '',
					answer: '',
					isShow: false
				}, ]
			}
		},
		methods: {
			lookAnswer(item){
				item.isShow = !item.isShow
			}
		}
	}
</script>

<style lang="scss" scoped>
	.answer_box {
		width: 610rpx;
		height: 150rpx;
		border-radius: 10rpx;
		background: #F8F8F8;
		box-sizing: border-box;
		padding: 20rpx;
	}
</style>
