<template>
	<view class="padding_bottom_m flex_column">
		<view class="dong_top_box margin_top_l">
			<image src="/static/image/dong_bg.png" class="dong_top_bg"></image>
			<view class="dong_top_item">
				<view class="flex_row font_size_text_l" @click="lookMycard">
					<view class="color_white">
						余额
					</view>
					<!-- <view class="margin_left color_white flex_row">
						我的卡包
						<u-icon name="arrow-right" size="30" color="#ffffff"></u-icon>
					</view> -->
				</view>
				<view class="color_white font_weight margin_top_m" style="font-size: 68rpx;">
					{{accountInfo.balance || 0}}
				</view>
				<view class="dong_top_man flex_row  font_weight  ">
					<view class="man_box " @click="toRecharge">
						<image src="/static/image/dong01.png" mode="aspectFill" class="dong_la"></image>
						<view class="margin_left_m font_size_text_xxl color_white">
							充值
						</view>
					</view>
					<!-- <view class="man_box" @click="toWithdrawal">
						<image src="/static/image/dong02.png" mode="aspectFill" class="dong_la"></image>
						<view class="margin_left_m font_size_text_xxl color_white">
							提现
						</view>
					</view> -->
				</view>
			</view>
		</view>
		<view class="box_690 padding_0_l">
			<view class="flex_row justify_around border_bottom">
				<view class="flex_column">
					<view class="select_box padding_m_0" :class="{'active':selectId == 1}" @click="select(1)">
						充值记录
					</view>
					<view class="border_box" :class="{'active':selectId == 1}">
					</view>
				</view>
				<!-- <view class="flex_column">
					<view class="select_box padding_m_0" :class="{'active':selectId == 2}" @click="select(2)">
						提现记录
					</view>
					<view class="border_box" :class="{'active':selectId == 2}">
					</view>
				</view> -->
				
			</view>
			<view class="margin_top_l text_align_center font_size_text_l color_black_999 margin_bottom_l" v-if="list.length == 0">
				暂无交易记录
			</view>
			<view class="flex_row border_bottom padding_l_0" v-for="(item,index) in list" :key="index">
				<view class="">
					<view class="font_size_title_s color_black_333 font_weight">
						咚咚币
					</view>
					<view class="font_size_text_m color_black_999 margin_top_s">
						{{item.pay_time || ''}} 
					</view>
				</view>
				<view class="margin_left color_orange font_weight font_size_title_l" >
					{{item.amount ||  ''}}
				</view>
				<!-- <view class="margin_left color_orange font_weight font_size_title_l" v-if="selectId == 1">
					-2222
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectId: 1,
				list: [],
				accountInfo:null ,// 账户余额
				page:1,
				loading:true
			}
		},
		onLoad() {
			this.getData()
			// this.getfresh();
		},
		onShow() {
			this.getfresh();
		},
		onPullDownRefresh: function() {
			this.fresh();
		},
		onReachBottom() {
			if (this.loading) {
				this.getRecordList()
			}
		},
		methods: {
			fresh(e) {
				uni.showNavigationBarLoading();
				this.getfresh()
				uni.hideNavigationBarLoading();
				uni.stopPullDownRefresh();
			},
			getfresh(e) {
				this.list = []
				this.page = 1
				this.loading = true;
				this.getRecordList()
			},
			getRecordList(e){
				this.$api.getMywallet({pageSize: 8,page: this.page,trade_type:this.selectId}).then(res=>{
					this.list = this.list.concat(res.data)
					this.loading = res.data.length == 8
					this.page += 1
				})
			},
			getData(e){
				this.$api.getMyAccount({}).then(res=>{
					this.accountInfo = res
				})
			},
			select(type) {
				this.selectId = type
				// this.getfresh()
			},
			lookMycard(e) {
				//查看我的卡包
				uni.navigateTo({
					url: "/aUserPages/my/myCard/myCard"
				})
			},
			toRecharge(e) { //充值
				uni.navigateTo({
					url: '/aUserPages/my/myCard/recharge?wallet_id='+this.accountInfo.id
				})
			},
			toWithdrawal(e) { //提现
				uni.navigateTo({
					url: '/aUserPages/my/myCard/withdrawal?type=0&amount='+this.accountInfo.balance
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
			padding: 40rpx 40rpx 0 50rpx;
			box-sizing: border-box;

			.dong_top_man {
				width: 690rpx;
				margin-top: 40rpx;
				box-sizing: border-box;

				.man_box {
					width: 295rpx;
					line-height: 38rpx;
					display: flex;
					flex-direction: row;
					// justify-content: center;
					box-sizing: border-box;
					padding: 10rpx  0;

					// &:nth-child(1) {
					// 	border-right: 1rpx #FFFFFF solid;
					// }

					.dong_la {
						width: 38rpx;
						height: 38rpx;
					}
				}
			}


		}

	}

	.select_box {
		font-size: 36rpx;
		color: #333333;
		font-weight: bold;

		&.active {
			color: #FF6437;
		}
	}
	.border_box{
		width: 80rpx;
		height: 6rpx;
		border-radius: 3rpx;
		background: #ffffff;
		
		&.active{
			background: linear-gradient(135deg, #FF6437 0%, #FF9B51 100%);
		}
	}
</style>
