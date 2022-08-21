<template>
	<view class="fixed_padding_bottom_xxxl">
		<search></search>

		<view class="flex_row justify_around order_top_box">
			<view class="order_top_item padding_bottom_s" :class="{'active':orderIndex == index}"
				v-for="(item,index) in orderTitleList" :key="index" @click="selectOrderStatus(index)">
				{{item.title}}
			</view>
		</view>
		<view class="prompt" v-if="orderList.length == 0">
			暂无订单数据
		</view>
		<view class="margin_left_l" v-for="(item,index) in orderList">
			<view class="box_690 order_item_box padding_l" @click="toDetail(item,orderIndex)">
				<view class="tip_yellow  " v-if="orderIndex == 0">
					待支付
				</view>
				<view class="tip_yellow  " v-if="orderIndex== 1">
					待接单
				</view>
				<view class="tip_blue  " v-if="orderIndex == 2">
					服务中
				</view>
				<view class="tip_blue  " v-if="orderIndex == 3">
					已完成
				</view>
				<view class="tip_orange  " v-if="orderIndex == 4">
					退款中
				</view>
				<view class="font_size_text_m color_black_999">
					下单时间：{{item.create_time}}
				</view>
				<view class="flex_row margin_top_l">
					<image src="/static/image/docImg.png" mode="aspectFill" class="order_img"></image>
					<view class="margin_left_l">
						<view class="font_size_title_s color_black_333 font_weight" style="line-height: 70rpx;">
							李先生
						</view>
						<view v-for="(items,indexs) in item.record_info" class="margin_bottom_m" :key="indexs">
							<view class="font_size_text_m color_black_888 order_label">
								专业陪诊
							</view>
							<view class="font_size_text_s color_black_888 text_overflow_1" style="line-height: 50rpx;">
								就诊医院和科室：{{items.hospital_name}}，{{items.department_name}}
							</view>
							<view class="font_size_text_m color_black_888 text_overflow_1" style="line-height: 30rpx;">
								陪诊时间：{{items.service_time}}
							</view>
						</view>
					</view>
				</view>
				<view class="flex_row justify_end ">
					<view class="btn_white_m margin_top_l" v-if=" item.status == 1" @click.stop="cancelOrder(index)">
						取消订单
					</view>
					<view class="btn_orange_m margin_left_xl margin_top_l" v-if=" item.status == 1">
						去支付
					</view>

					<view class="btn_orange_m margin_top_l" v-if=" item.status == 2" @click.stop="refund(item,index)">
						申请退款
					</view>
					<view class="btn_white_m margin_top_l" v-if=" item.status == 4">
						已评价
					</view>
					<view class="btn_orange_m margin_left_xl margin_top_l" v-if=" item.status == 4" @click.stop="toInvoice">
						申请开票
					</view>
				</view>
			</view>
		</view>
		<u-popup :show="cancelStatus" :closeable="true" mode="center" :round="20" @close="closeQuick" customStyle="width:600rpx;padding:60rpx;box-sizing: border-box;">
			<view class="flex_column " style="margin-top: 60rpx;">

				<view class="font_size_title_s color_black_666  margin_top_s" @click="setText">
					确定取消此订单吗？
				</view>
				<view class="flex_row " style="margin-top: 75rpx;">
					<view class="quick_btn font_size_title_s color_orange " @click="closeQuickPop(0)">
						取消
					</view>
					<view class="quick_btn font_size_title_s color_white " @click="closeQuickPop(1)">
						确认
					</view>
				</view>
			</view>
		</u-popup>
		<u-popup :show="cancelSucess" :closeable="true" mode="center" :round="20" @close="closeSucess"
			customStyle="width:600rpx;padding:60rpx;box-sizing: border-box;">
			<view class="flex_column ">
				<image src="/static/image/cancelSucessImg.png" mode="aspectFill" class="cancelSucessImg"></image>
				<view class="font_size_title_xxl color_orange font_weight margin_top_m ">
					取消成功
				</view>
			</view>
		</u-popup>
		<!-- 底部导航栏 -->
		<!-- <tabbar :tabbarIndex="2" ></tabbar> -->
	</view>
</template>

<script>
	import search from '@/components/search.vue'
	export default {
		components: {
			search
		},
		data() {
			return {
				orderTitleList: [{
					"title": "待付款"
				}, {
					"title": "待接单"
				}, {
					"title": "服务中"
				}, {
					"title": "已完成"
				}, {
					"title": "退款"
				}],
				keyWord: '',
				orderIndex: 0,//选中的状态 //0：待付款 1：待接单 2：服务中 3：已完成 4：退款
				orderList: [],
				cancelStatus: false,
				cancelSucess: false,
				page:1,
				loading:true,
				cancelIndex:'',//取消订单的下标
				
			}
		},
		onLoad(options) {
			this.orderIndex = options.status
		},
		onShow() {
			if(getApp().globalData.upDate.isUpdateOrder){
				this.getfresh();
				getApp().globalData.upDate.isUpdateOrder = false
			}
			
		},
		onPullDownRefresh: function() {
			this.fresh();
		},
		onReachBottom() {
			if (this.loading) {
				this.getOrder()
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
				this.orderList = []
				this.page = 1
				this.loading = true;
				this.getOrder()
			},
			getOrder(e) {
				let api = {0:"getOrderToPay",1:"getOrderList",2:"getOrderList",3:"getOrderList",4:"getOrderRefund"}
				this.$api[api[this.orderIndex]]({
					pageSize: 4,
					page: this.page,
					service_status:this.orderIndex >0 && this.orderIndex < 4?this.orderIndex : 0
				}).then(res => {
					this.loading = res.list.length == 4
					this.orderList = this.orderList.concat(res.list)
					this.page += 1
				})
			},
			change(e) {
				console.log('change', e);
			},
			selectOrderStatus(status) {
				this.orderIndex = status
				this.getfresh()
			},
			toDetail(item) { //查看详情
				uni.navigateTo({
					url: '/aUserPages/my/orderDetail?orderId=' + item.order_id+"&type="+this.orderIndex+"&serviceId="+item.record_info[0].id
				})
			},
			cancelOrder(index) {
				this.cancelStatus = !this.cancelStatus
				this.cancelIndex = index
			},
			closeQuickPop(type) {
				this.cancelStatus = !this.cancelStatus
				if (type == 1) {//取消订单
					this.$api.cancelOrder({order_id:this.orderList[this.cancelIndex].order_id}).then(res=>{
						this.orderList.splice(this.cancelIndex,1)
						this.cancelSucess = true
						let time= setTimeout(x=>{
							this.cancelSucess = false
							clearTimeout(time)
						},3000)
						if(this.orderList.length < 4){
							this.getOrder()
						}
					})
					
					
				}
			},
			closeQuick(e) {
				console.log("关闭")
				this.cancelStatus = false
			},
			closeSucess(e) {
				this.cancelSucess = !this.cancelSucess
			},
			refund(item,index){//申请退款
				uni.navigateTo({
					url:'/aUserPages/my/refund'
				})
			},
			toInvoice(e){
				uni.navigateTo({
					url:"/aUserPages/my/invoice"
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
	//order_label
	[class*=tip_] {
		width: 110rpx;
		height: 44rpx;
		line-height: 44rpx;
		text-align: center;
		border-radius: 0px 20rpx 0px 20rpx;
		position: absolute;
		top: 0;
		right: 0;
		color: #ffffff;
		font-size: 26rpx;

	}

	.tip_yellow {
		background: #FFB63D;
	}

	.tip_blue {
		background: #69CB20;
	}

	.tip_orange {
		background: #FF6437;
	}

	.order_top_box {
		background-color: #fff;
		height: 90rpx;

		.order_top_item {
			font-size: 28rpx;
			color: #333333;
			border-bottom: 4rpx solid #fff;
			margin-top: 15rpx;

			&.active {
				color: #FF6437;
				border-bottom: 4rpx #FF6437 solid;
			}
		}
	}

	.order_item_box {
		position: relative;

		.order_img {
			width: 150rpx;
			height: 190rpx;
		}

		.order_label {
			line-height: 26rpx;
			width: 165rpx;
			height: 40rpx;
			text-align: center;
			line-height: 40rpx;
			border-radius: 20rpx;
			background-color: #F5F5F5;
		}

	}

	.quick_btn {
		width: 220rpx;
		text-align: center;
		height: 72rpx;
		line-height: 72rpx;
		border-radius: 70rpx;
		box-sizing: border-box;

		&:nth-child(1) {
			background-color: #f8f8f8;
			border: 2rpx solid #FF6437;
		}

		&:nth-child(2) {
			background: linear-gradient(to right, #FF6437, #FF9B51);
			margin-left: 60rpx;
		}
	}

	.cancelSucessImg {
		width: 160rpx;
		height: 160rpx;
	}

	.cancel_box {
		width: 600rpx;
		padding: 60rpx;
		box-sizing: border-box;
	}
</style>
