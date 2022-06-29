<template>
	<view class="padding_bottom_m flex_column">
		<view class="wallet_box">
			<image src="/static/image/wallet_bg.png" mode="aspectFill" class="wallet_bg"></image>
			<view class="wallet_con">
				<view class="flex_row">
					<view class="font_size_text_l color_white">
						余额
					</view>
					<view class="margin_left font_size_text_l color_white flex_row" @click="lookMyCard">
						我的卡包
						<u-icon name="arrow-right" size="30" color="#ffffff"></u-icon>
					</view>
				</view>
				<view class="flex_row margin_top_xl">
					<view class="color_white font_weight " style="font-size: 68rpx;">
						1222
					</view>
					<view class="wallet_label margin_left" @click="toWithdrawal">
						提现
					</view>
				</view>
			</view>
			
		</view>
		<view class="box_690 padding_0_l">
			<view class="flex_row justify_around border_bottom">
				<view class="select_box padding_m_0" :class="{'active':selectId == 0}" @click="select(0)">
					收入明细
				</view>
				<view class="select_box padding_m_0" :class="{'active':selectId == 1}" @click="select(1)">
					提现记录
				</view>
			</view>
			<view class="flex_row border_bottom padding_l_0" v-for="(item,index) in list" :key="index">
				<view class="">
					<view class="font_size_title_s color_black_333 font_weight">
						住院陪护服务
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
			lookMyCard(e){
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
	.wallet_box{
		position: relative;
		.wallet_bg{
			
				width: 690rpx;
				height: 250rpx;
		}
		.wallet_con{
			width: 690rpx;
			height: 250rpx;
			position: absolute;
			top: 0;
			left: 0%;
			padding: 40rpx;
			box-sizing: border-box;
			.wallet_label{
				width: 130rpx;
				height: 54rpx;
				background: rgba(255, 255, 255, 0.5);
				border-radius: 27rpx;
				line-height: 54rpx;
				text-align: center;
				font-size: 32rpx;
				color: #ffffff;
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
