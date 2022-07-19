<template>
	<view class="flex_column padding_bottom_m">
		<view class="box_690 padding_0_l ">
			<view v-for="(items,indexs) in orderList" :key="indexs" class="diff_bottom">
				<view class="flex_row border_bottom padding_l_0" v-for="(value,key) in orderDetail" :key="key">
					<view class="font_size_text_xl color_black_333 font_weight">
						{{key}}
					</view>
					<view class="margin_left color_black_888 font_size_text_l flex_row">
						{{value}}
						<block v-if="key == '科室'">
							<u-icon name="arrow-right" color="#888888" size="30"></u-icon>
						</block>
					</view>
				</view>
			</view>
			<view class="font_size_text_xxl color_black_333 font_weight flex_row border_bottom padding_l_0">
				麦咚专员
			</view>
			<view class="flex_row border_bottom padding_l_0" >
				<view class="font_size_text_xl color_black_333 font_weight">
					姓名
				</view>
				<view class="margin_left color_black_888 font_size_text_l flex_row">
					麦咚小杨
				</view>
			</view>
			<view class="flex_row border_bottom padding_l_0" >
				<view class="font_size_text_xl color_black_333 font_weight">
					性别
				</view>
				<view class="margin_left color_black_888 font_size_text_l flex_row">
					男
				</view>
			</view>
			<view class="flex_row border_bottom padding_l_0" >
				<view class="font_size_text_xl color_black_333 font_weight">
					联系电话
				</view>
				<view class="margin_left color_black_888 font_size_text_l flex_row">
					18888888888
				</view>
			</view>
			<view class="flex_row border_bottom padding_l_0" v-if="status == 5" >
				<view class="font_size_text_xl color_black_333 font_weight">
					退款金额
				</view>
				<view class="margin_left color_black_888 font_size_text_l flex_row">
					￥199.00
					
				</view>
			</view><view class="flex_row border_bottom padding_l_0" v-if="status == 5" >
				<view class="font_size_text_xl color_black_333 font_weight">
					退款原因
				</view>
				<view class="margin_left color_black_888 font_size_text_l flex_row">
					个人原因
					
				</view>
			</view>
			<view class=" step_box margin_top_m margin_bottom_m padding_top_xl padding_bottom_l" v-if="status == 2 || status == 3 || status == 4 ||status ==5"> 
				<step :value="status"> </step>
			</view>
			
		</view>
		
		<!-- <image src="../.." mode=""></image> -->
		<view class="flex_row margin_top_xxl" v-if="status == 1">
			<view class="detail_white_m">
				取消订单
			</view>
			<view class="detail_orange_m margin_left_xl">
				去支付
			</view>
		</view>
		<view class="flex_row margin_top_xxl" v-if="status == 4">
			<view class="detail_white_m" @click="toEvalute">
				评价
			</view>
			<view class="detail_orange_m margin_left_xl">
				申请开票
			</view>
		</view>
		<view class="sure_buttton margin_top_xxl" v-if="status == 2">
			取消订单
		</view>
	</view>
</template>

<script>
	import step from "@/components/step.vue"
	export default {
		components:{
			step
		},
		data() {
			return {
				orderDetail: {
					'医院': '华夏第一军区医院',
					'科室': '内科',
					'时间': '2022-05-12  8:00-9:00',
					'就诊人': '李先生',
					'就诊家属': '无',
					'联系电话': '181****4627',
					'服务内容': '住院陪诊服务',
					'价格': '¥199.00'
					
				},
				orderList:[{},{},{}],
				status:4 //订单状态
			}
		},
		onLoad(optinos) {
			this.status = optinos.status
		},
		methods: {
			toEvalute(e){
				uni.navigateTo({
					url:"/aUserPages/my/evaluate"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	//按钮
	[class*=detail_] {
		display: inline-block;
		width: 265rpx;
		height: 90rpx;
		line-height: 90rpx;
		border-radius: 40rpx;
		transition: all 0.3s;
		text-align: center;
		font-size: 32rpx;
	}

	.detail_white_m {
		background: #ffffff;
		color: #FF6437;
		border: 2rpx #FF6437 solid;
		box-sizing: border-box;
	}

	.detail_orange_m {
		background: linear-gradient(to right, #FF6437, #FF9B51);
		color: #ffffff;
	}
	
	.step_box{
		width: 630rpx;
		background-color: #F8F8F8;
		border-radius: 20rpx;
		box-sizing: border-box;
	}
	.diff_bottom{
		border-bottom: 3rpx solid #999999;
	}
</style>
