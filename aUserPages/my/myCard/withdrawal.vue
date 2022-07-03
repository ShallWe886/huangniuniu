<template>
	<view>
		<view class="with_box ">
			<view class="with_bg">
			</view>
			<view class="box_690 padding_left_l padding_right_l padding_top_l with_con">
				<view class="font_size_text_l color_black_999">
					提现到
				</view>
				<view class="flex_row padding_l_0 border_bottom" @click="selectCard">
					<image src="/static/image/with_icon.png" mode="aspectFit" class="with_icon"></image>
					<view class="margin_left_m">
						<view class="font_size_text_xl color_black_333">
							招商银行储蓄卡
						</view>
						<view class="font_size_text_xl color_black_333 margin_top_s">
							2312 **** **** 1155
						</view>
					</view>
					<view class="margin_left">
						<u-icon name="arrow-right" color="#999999"></u-icon>
					</view>
				</view>
				<view class="padding_l_0 font_size_text_l color_black_999">
					提现金额
				</view>
				<view class="flex_row border_bottom padding_bottom_s">
					<u-icon name="rmb" size="40" color="#333333"> </u-icon>
					<input type="text" placeholder="最低提现额度为100元" placeholder-style="font-size:34rpx;color:#BEBEBE;">
				</view>
				<view class="flex_row padding_l_0">
					<view class="font_size_text_l color_black_999">
						可提现金额<text class="color_orange font_weight">500</text>元
					</view>
					<view class="margin_left font_weight color_orange font_size_text_l">
						全部提现
					</view>
				</view>
			</view>
		</view>
		<view class="padding_left_l padding_right_l padding_bottom_l">
			<view class="flex_row " style="margin-top: 60rpx;">
				<radio value="2" color='#FF6437' style="transform:scale(0.6)" />
				<view class=" font_size_text_m color_black_999">
					已阅读并同意《<text class="color_orange font_weight">提现服务协议</text>》
				</view>
			</view>
			<view class="sure_buttton margin_top_l margin_left_l">
				确认提现
			</view>
			<view class="margin_top_xl">
				<view class="font_weight color_black_333 font_size_title_s">
					提现须知
				</view>
				<view class="font_size_text_l color_black_999" style="line-height: 46rpx;">
					1、为保证提现成功，请先完成实名认证绑卡操作。系统将会在2个工作日内对您输入的身份进行审核校验。银行卡信息审核通过后方可进行提现操作。
				</view>
				<view class="margin_top_s font_size_text_l color_black_999" style="line-height: 46rpx;">
					2、提现到账时间：提现成功后一般将在1～3个工作日左右到账，周末顺延。如逾期未到账，请查询银行卡出入账明细或在壹创助手我的财务管理查询余额是否有退回。
				</view>
			</view>
		</view>
		<u-popup :show="withPop" mode="bottom" :round="30" @close="closePop">
			<view  style="padding-left: 50rpx;padding-bottom: 30rpx;padding-top: 30rpx;padding-right: 40rpx;">
				<view class="flex_row">
					<image src="/static/image/health_close.png" mode="aspectFill" class="delet_icon margin_left"></image>
				</view>
				<view class="flex_row" v-for="(item,index) in cardList" :key="index">
					<view class="card_box margin_top_m">
						<image :src="item.img" mode="aspectFill" class="card_img"></image>
						<view class="card_con_box">
							<view class="font_size_text_xl color_white text_align_end">
								张*斌
							</view>
							<view class="flex_row margin_top_xl ">
								<view class="color_white " style="font-size: 48rpx;margin-left: 60rpx;">
									<text>....</text><text class="margin_left_m">....</text><text
										class="margin_left_m">....</text><text class="margin_left_m">1155</text>
								</view>
								<!-- <view class="card_label margin_left">
									设置卡备注
								</view> -->
							</view>
						</view>
					</view>
					<radio value="2" color='#FF6437' style="transform:scale(0.7)" class="margin_left_m" />
				</view>
				<view class="addCard_box flex_row margin_top_m padding_0_l">
					<image src="/static/image/card_icon.png" mode="aspectFill" class="card_icon"></image>
					<view class="margin_left_m font_size_text_xl color_black_333">
						添加新的银行卡
					</view>
					<view class="margin_left">
						<u-icon name="plus" size="40" color="#333333"></u-icon>
					</view>
				</view>
			</view>

		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				withPop: false,
				cardList: [{
					img: '/static/image/card01.png'
				}, {
					img: '/static/image/card02.png'
				}, {
					img: '/static/image/card03.png'
				}]
			}
		},
		methods: {
			selectCard(e){
				this.withPop = true
			},
			closePop(e) {
				console.log(e)
				this.withPop = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.with_box {
		position: relative;
		height: 508rpx;

		.with_bg {
			width: 750rpx;
			height: 265rpx;
			background: linear-gradient(to bottom, #FCF0E7, #F9F9F9);
		}

		.with_con {
			position: absolute;
			top: 30rpx;
			left: 30rpx;
		}
	}

	.with_icon {
		width: 92rpx;
		height: 92rpx;
	}

	.card_box {
		position: relative;

		.card_img {
			width: 620rpx;
			height: 190rpx;


		}

		.card_con_box {
			position: absolute;
			top: 0;
			left: 0;
			width: 620rpx;
			height: 190rpx;
			padding: 30rpx;
			box-sizing: border-box;

			.card_label {
				padding: 5rpx 10rpx;
				border-radius: 16rpx;
				background: rgba(255, 255, 255, 0.3);
				font-size: 26rpx;
				color: #ffffff;
			}
		}
	}

	.addCard_box {
		width: 620rpx;
		height: 122rpx;
		border-radius: 20rpx;
		box-sizing: border-box;
		border: 1rpx solid #999999;

		.card_icon {
			width: 45rpx;
			height: 34rpx;
		}

	}
	.delet_icon{width: 36rpx;height: 36rpx;}
</style>
