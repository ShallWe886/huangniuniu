<template>
	<view class="padding_bottom_m flex_column">
		<view class="wallet_box">
			<image src="/static/image/wallet_bg.png" mode="aspectFill" class="wallet_bg"></image>
			<view class="wallet_con">
				<view class="flex_row">
					<view class="font_size_text_l color_white">
						余额
					</view>
					<!-- <view class="margin_left font_size_text_l color_white flex_row" @click="lookMyCard">
						我的卡包
						<u-icon name="arrow-right" size="30" color="#ffffff"></u-icon>
					</view> -->
				</view>
				<view class="flex_row margin_top_xl">
					<view class="color_white font_weight " style="font-size: 68rpx;">
						{{userinfo.balance || 0}}
					</view>
					<view class="wallet_label margin_left" @click="toWithdrawal">
						提现
					</view>
				</view>
			</view>
			
		</view>
		<view class="box_690 padding_0_l">
			<view class="flex_row justify_around border_bottom">
				<view class="flex_column">
					<view class="select_box padding_m_0" :class="{'active':selectId == 1}" @click="select(1)">
						收入明细
					</view>
					<view class="border_box" :class="{'active':selectId == 1}">
					</view>
				</view>
				<view class="flex_column">
					<view class="select_box padding_m_0" :class="{'active':selectId == 2}" @click="select(2)">
						提现记录
					</view>
					<view class="border_box" :class="{'active':selectId == 2}">
					</view>
				</view>
				
			</view>
			<view class="flex_row border_bottom padding_l_0" v-for="(item,index) in list" :key="index">
				<view class="">
					<view class="font_size_title_s color_black_333 font_weight">
						{{item.remark}}
					</view>
					<view class="font_size_text_m color_black_999 margin_top_s">
						{{item.create_time}}
					</view>
				</view>
				<view class="margin_left color_orange font_weight font_size_title_l" v-if="selectId == 1">
					+{{item.amount}}
				</view>
				<view class="margin_left color_orange font_weight font_size_title_l" v-if="selectId == 2">
					-{{item.amount}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userinfo: {},
				selectId:1,
				list:[],
				pageSize: 6,
				page: 1
			}
		},
		onLoad() {
			this.getData()
		},
		onShow() {
			// if(getApp().globalData.upDate.isUpdateOrder){
			// 	this.getfresh();
			// 	getApp().globalData.upDate.isUpdateOrder = false
			// }
			this.getfresh();
			
		},
		onPullDownRefresh: function() {
			this.fresh();
		},
		onReachBottom() {
			if (this.loading) {
				this.getList()
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
				uni.showLoading({title: '加载中',mask:true});
				this.list = []
				this.page = 1
				this.loading = true;
				this.getList()
			},
			getList(){
				this.$api.escortBill({
					pageSize: 5,
					page: this.page,
					trade_type:this.selectId
				}).then(res => {
					uni.hideLoading()
					this.loading = res.data.length == 5
					console.log('data', res);
					this.list = this.list.concat(res.data)
					this.page += 1
					console.log('orderList', this.list);
				})
			},
			getData() {
				this.$api.escortInfo({}).then(res => {
					console.log('res', res);
					this.userinfo = res;
				})
			},
			select(type){
				this.selectId = type
				this.getfresh();
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
					url:'/aUserPages/my/myCard/withdrawal?type=1&amount='+this.userinfo.balance
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
			padding: 40rpx 40rpx 30rpx 50rpx;
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
		&.active{
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
