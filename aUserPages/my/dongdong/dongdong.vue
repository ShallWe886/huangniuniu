<template>
	<view class="padding_bottom_m flex_column">
		<view class="dong_top_box margin_top_l">
			<image src="/static/image/dong_bg.png" class="dong_top_bg"></image>
			<view class="dong_top_item">
				<view class="flex_row font_size_text_l" @click="lookMycard">
					<view class="color_white">
						余额
					</view>
					<view class="margin_left color_white flex_row">
						我的卡包
						<u-icon name="arrow-right" size="30" color="#ffffff"></u-icon>
					</view>
				</view>
				<view class="color_white font_weight margin_top_m" style="font-size: 68rpx;">
					122222
				</view>
				<view class="dong_top_man flex_row color_white font_weight font_size_text_xl ">
					<view class="man_box" @click="toRecharge">
						<image src="/static/image/dong01.png" mode="aspectFill" class="dong_la"></image>
						<view class="margin_left_m">
							充值
						</view>
					</view>
					<view class="man_box" @click="toWithdrawal">
						<image src="/static/image/dong02.png" mode="aspectFill" class="dong_la"></image>
						<view class="margin_left_m">
							提现
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="box_690 padding_0_l">
			<view class="flex_row justify_around border_bottom">
				<view class="select_box padding_m_0" :class="{'active':selectId == 0}" @click="select(0)">
					充值记录
				</view>
				<view class="select_box padding_m_0" :class="{'active':selectId == 1}" @click="select(1)">
					提现记录
				</view>
			</view>
			<view class="flex_row border_bottom padding_l_0" v-for="(item,index) in list" :key="index">
				<view class="">
					<view class="font_size_title_s color_black_333 font_weight">
						冬冬币
					</view>
					<view class="font_size_text_m color_black_999 margin_top_s">
						2022-06-03  12:23
					</view>
				</view>
				<view class="margin_left color_orange font_weight font_size_title_l" v-if="selectId == 0">
					+2222
				</view>
				<view class="margin_left color_orange font_weight font_size_title_l" v-if="selectId == 1">
					-2222
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectId:0,
				list:[{},{},{},{},{}]
			}
		},
		methods: {
			select(type){
				this.selectId = type
			},
			lookMycard(e){
				//查看我的卡包
				uni.navigateTo({
					url:"/aUserPages/my/myCard/myCard"
				})
			},
			toRecharge(e){//充值
				uni.navigateTo({
					url:'/aUserPages/my/myCard/recharge'
				})
			},
			toWithdrawal(e){//提现
				uni.navigateTo({
					url:'/aUserPages/my/myCard/withdrawal'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.dong_top_box {
		position: relative;

		.dong_top_bg {
			width: 690rpx;
			height: 310rpx;
		}

		.dong_top_item {
			width: 690rpx;
			height: 310rpx;
			position: absolute;
			top: 0;
			left: 0;
			padding: 40rpx 50rpx 0 50rpx;
			box-sizing: border-box;

			.dong_top_man {
				width: 690rpx;
				margin-top: 50rpx;
				.man_box {
					width: 295rpx;
					line-height: 38rpx;
					display: flex;
					flex-direction: row;
					justify-content: center;

					.dong_la {
						width: 38rpx;
						height: 38rpx;
					}
				}
			}


		}

	}
	.select_box{
		font-size: 36rpx;
		color: #333333;
		font-weight: bold;
		border-bottom: 10rpx solid #ffffff;
		&.active{
			color: #FF6437;
			border-bottom: 6rpx solid #FF6437;
		}
	}
</style>
