<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			<view class="box_690 padding_l">
				<view class="flex_row">
					<image src="" mode="aspectFill" class="accept_item_img flex_shrink"></image>
					<view class="margin_left_m">
						<view class="font_size_text_s" style="line-height: 24rpx;">
							<text style="color: #BEBEBE;">订单时间：</text><text class="color_black_888">2022-12-12
								11:30</text>
						</view>
						<view class="flex_row margin_top_m">
							<view class="accept_item_label margin_right_s ">
								西华医院
							</view>
							<view class="accept_item_label margin_right_s">
								内科
							</view>
							<view class="accept_item_label margin_right_s">
								专业陪诊
							</view>
						</view>
						<view class="font_weight color_black_333 font_size_text_m margin_top_m"
							style="line-height: 26rpx;">
							¥25.00
						</view>
						<view class=" color_black_333 font_size_text_m margin_top_m" style="line-height: 26rpx;">
							李先生<text class="margin_left_l">185****9393</text>
						</view>
						<view class="color_black_333 font_size_text_s margin_top_m" style="line-height: 24rpx;">
							用户期望就诊时间：2022-12-12 3:00
						</view>
						<view class="font_size_text_m color_orange margin_top_m" style="line-height: 26rpx;">
							2022-12-12 3:00-5:00
						</view>
					</view>
				</view>
				<view class="flex_row justify_end margin_top_m" v-if="type != 5">
					<block v-if="type == 1">
						<view class="accept_item_btn_border" @click="operate(0)">
							接受
						</view>
						<view class="accept_item_btn_orange margin_left_xl" @click="operate(1)">
							拒绝
						</view>
					</block>
					<block v-if="type == 2">
						<view class="accept_item_btn_orange" @click="operate(2)">
							抢单
						</view>
					</block>
					<block v-if="type == 3">
						<view class="accept_item_btn_border" @click="operate(3)">
							转单
						</view>
						<view class="accept_item_btn_orange margin_left_xl" @click="operate(4)">
							取消
						</view>
					</block>
					<block v-if="type == 4">
						<view class="accept_item_btn_orange" @click="operate(5)">
							完成订单
						</view>
					</block>
				</view>
			</view>
		</block>
		<u-popup :show="popshow" @close="close" @open="open" mode="center" :round="20" closeable="true">
			<view class="pop_box flex_column" v-if="type == 1 || type == 3">
				<view class="flex_row" style="margin-top:110rpx;">
					<view class="color_black_333 font_size_text_xl" v-if="type == 1">
						拒绝原因
					</view>
					<view class="color_black_333 font_size_text_xl" v-if="type == 3">
						取消原因
					</view>
					<view class="input_box flex_row color_black_888 font_size_text_l margin_left_m">
						请选择
						<view class="margin_left">
							<u-icon name="play-right-fill" size="30"></u-icon>
						</view>
					</view>
				</view>
				<view class="input_more_box margin_top_xl">
					<input type="text" placeholder="请输入备注" placeholder-style="font-size: 28rpx;color: #BEBEBE;">
				</view>
				<view class="submit_reason margin_top_xxl">
					提交
				</view>
			</view>
			<view class="result_box flex_column">
				<block v-if="type == 2 && result">
					<image src="/static/image/order_result01.png" mode="aspectFill" class="result_img"></image>
					<view class="" style="font-size: 40rpx;color: #17CD44;font-weight: bold;margin-top: 24rpx;">
						抢单成功
					</view>
					<view class="kehu_box margin_top_xl">
						联系客户
					</view>
				</block>
				<block v-if="type == 2 && !result">
					<image src="/static/image/order_result02.png" mode="aspectFill" class="result_img"></image>
					<view class="" style="font-size: 40rpx;color: #FF6437;font-weight: bold;margin-top: 24rpx;">
						抢单失败
					</view>
				</block>
				<block v-if="type == 4">
					<image src="/static/image/order_result01.png" mode="aspectFill" class="result_img"></image>
					<view class="" style="font-size: 40rpx;color: #17CD44;font-weight: bold;margin-top: 24rpx;">
						恭喜您完成顶顶那
					</view>
					<view class=" margin_top_l">
						<text class="font_size_title_s color_black_999">获取收益：</text>
						<text class="font_size_title_l color_black_333 font_weight margin_left_s">¥25.00</text>
					</view>
				</block>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		name: "u-order",
		props: {
			list: {
				type: Array,
				default: []
			},
			type: { // 1.接单 2.抢单  3.待服务 4.服务中 5.已完成
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				popshow: false,
				result: false // 抢单结果
			};
		},
		methods: {
			operate(status) { //0:接受 1：拒绝 2：抢单 3：转单 4：取消 5：完成订单
				
				if (status == 0) {
					uni.showToast({
						title: "该订单陪诊时间与您xxx陪诊时间冲突（3s）",
						duration: 3000,
						icon:"none"
					})
				} else if (status == 1) {
					this.popshow = true
				} else if (status == 2) {
					this.popshow = true
				} else if (status == 3) {
					this.popshow = true
				} else if (status == 4) {
					this.popshow = true
				} else if (status == 5) {

				}

			},
			open() {
				// console.log('open');
			},
			close() {
				this.popshow = false
				// console.log('close');
			}
		},
	}
</script>

<style lang="scss" scoped>
	.accept_item_img {
		width: 200rpx;
		height: 270rpx;
		border-radius: 10rpx;
		background: #F5F5F5;
	}

	.accept_item_label {
		height: 38rpx;
		line-height: 38rpx;
		padding: 0 20rpx;
		border-radius: 20rpx;
		background: #F5F5F5;
		font-size: 24rpx;
		color: #888888;

		&:nth-child(3) {
			background: #FFF0E5;
			color: #FF6437;
		}
	}

	[class*=accept_item_btn_] {
		padding: 0 10rpx;
		height: 50rpx;
		line-height: 50rpx;
		border-radius: 20rpx;
		// text-align: center;
		background: #ffffff;
		font-size: 28rpx;
		color: #FF6437;
		box-sizing: border-box;
	}

	.accept_item_btn_border {
		border: 2rpx solid #FF6437;
	}

	.accept_item_btn_orange {
		color: #ffffff;
		background: linear-gradient(to right, #FF6437, #FF9B51);
	}

	.pop_box {
		width: 690rpx;
		height: 440rpx;
		background: #FFFFFF;
		border-radius: 20rpx;

		.input_box {
			width: 470rpx;
			height: 90rpx;
			border-radius: 6rpx;
			border: 1rpx solid #E6E6E6;
			box-sizing: border-box;
			padding: 25rpx 30rpx;
		}

		.input_more_box {
			width: 610rpx;
			height: 90rpx;
			border-radius: 6rpx;
			border: 1rpx solid #E6E6E6;
			box-sizing: border-box;
			padding: 25rpx 30rpx;
		}

		.submit_reason {
			width: 340rpx;
			height: 72rpx;
			background: linear-gradient(135deg, #FF6437 0%, #FF9B51 100%);
			box-shadow: 0rpx 20rpx 50rpx -20rpx rgba(255, 110, 0, 0.2);
			border-radius: 70rpx;
			font-size: 32rpx;
			color: #ffffff;
			line-height: 72rpx;
			text-align: center;
		}
	}

	.result_box {
		width: 600rpx;
		box-sizing: border-box;
		padding: 60rpx;

		.result_img {
			width: 184rpx;
			height: 172rpx;
		}

		.kehu_box {
			width: 220rpx;
			height: 72rpx;
			box-shadow: 0rpx 20rpx 50rpx -20rpx rgba(255, 110, 0, 0.2);
			border-radius: 70rpx;
			border: 2rpx solid;
			// border-image: linear-gradient(135deg, rgba(255, 100, 55, 1), rgba(255, 155, 81, 1)) 2 2;
			font-size: 32rpx;
			color: #FF6437;
			line-height: 72rpx;
			text-align: center;
		}
	}
</style>
