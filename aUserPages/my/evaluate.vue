<template>
	<view class="flex_column">
		<view class="box_690 padding_l">
			<view class="color_black_333 font_size_text_xl font_weight">
				<text class="color_orange"> *</text>1、您还会再次选择麦咚陪诊服务吗？
			</view>
			<view class="answer_box flex_row  margin_l_0 padding_left_xl padding_right_xl">
				<view class="font_size_text_xl color_black_333">
					<radio value="1" :checked="!answer.one" color='#FF6437' style="transform:scale(0.5)" @click="select(1,false)"/>否
				</view>
				<view class="font_size_text_xl color_black_333" style="margin-left: 260rpx;">
					<radio value="2" :checked="answer.one" color='#FF6437' style="transform:scale(0.5)"  @click="select(1,true)"/>是
				</view>
			</view>
			<view class="color_black_333 font_size_text_xl font_weight padding_top_m">
				<text class="color_orange"> *</text>2、您还希望麦咚陪诊服务在哪些方面做出完善？
			</view>
			<view class="answer_box   margin_l_0">
				<input type="text" class="margin_top_l" v-model="answer.two">
			</view>
			<view class="color_black_333 font_size_text_xl font_weight padding_top_m">
				<text class="color_orange"> *</text>3、您会推荐麦咚陪诊服务给其他有需求的亲戚朋友吗？
			</view>
			<view class="answer_box flex_row  margin_l_0 padding_left_xl padding_right_xl">
				<view class="font_size_text_xl color_black_333">
					<radio value="1" :checked="!answer.three" color='#FF6437' style="transform:scale(0.5)"  @click="select(2,false)" />不会
				</view>
				<view class="font_size_text_xl color_black_333" style="margin-left: 260rpx;">
					<radio value="2" :checked="answer.three" color='#FF6437' style="transform:scale(0.5)"  @click="select(2,true)"/>会
				</view>
			</view>
			<view class="color_black_333 font_size_text_xl font_weight padding_top_m">
				<text class="color_orange"> *</text>4、请对本次服务满意度评分
			</view>
			<view class="margin_top_l  padding_left_xl" style="padding-bottom: 50rpx;">
				<u-rate count="5" v-model="answer.four" size='66'></u-rate>
			</view>
		</view>
		<view class="sure_buttton_letter margin_top_xxl" @click="toCommit">
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
				reason:'',
				recordId:'',
				attendantId:'',
				answer:{//答案
					one:true,
					two:'',
					three:true,
					four:0
				}
			}
		},
		onLoad(options) {
			this.recordId = options.recordId
			this.attendantId = options.attendantId
		},
		methods: {
			select(type,status){
				if(type == 1){
					this.answer.one = status
				}else if(type == 2){
					this.answer.three = status
				}
			},
			toCommit(e){//提交评价
			if(!this.answer.two) {
				uni.showToast({
					duration:2000,
					title: '请完整填写表单',
					icon: 'error'
				})
				return;
			}
				this.$api.addAnswer({record_id:this.recordId,attendant_id:this.attendantId,quest_one:this.answer.one,quest_two:this.answer.two,quest_three:this.answer.three,score:this.answer.four}).then(res=>{
					getApp().globalData.upDate.isUpdateOrder = true
				})
			}
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
