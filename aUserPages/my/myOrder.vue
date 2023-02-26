<template>
	<view class="fixed_padding_bottom_xxxl" :class="{popupShow:popupShow}">
		<search @searchData="getSearchData"></search>
		<!-- <view class="flex_row justify_around order_top_box">
			<view class="order_top_item padding_bottom_s"  :class="{'active':orderTypeIndex == index}"
				v-for="(item,index) in orderType" :key="index" @click="selectOrderTypeStatus(index)">
				{{item.name}}
			</view>
		</view> -->
		<view class="flex_row justify_around order_top_box">
			<view class="order_top_item padding_bottom_s" :class="{'active':orderIndex == index}"
				v-for="(item,index) in orderTitleList[orderTypeIndex]" :key="index" @click="selectOrderStatus(index)">
				{{item.title}}
			</view>
		</view>
		<view class="prompt" v-if="orderList.length == 0">
			暂无订单数据
		</view>
		<view v-if="orderTypeIndex == 0 && orderIndex != 4" class="margin_left_l" v-for="(item,index1) in orderList"
			:key="index1">
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
						<view v-for="(items,indexs) in item.record_info" class="margin_bottom_m" :key="indexs"
							v-if="indexs == 0">
							<view class="font_size_title_s color_black_333 font_weight"
								style="line-height: 70rpx;display: flex;justify-content: space-between;">
								{{items.patient_name}}
								<view v-if="orderIndex > 0 && orderIndex < 4" class="btn_white_m " @click.stop="openOrderFeedback(items)">
									留言列表
								</view>
							</view>
							<view class="font_size_text_m color_black_888 order_label">
								{{serviceType[items.service_type].name}}
							</view>
							<view class="font_size_text_s color_black_888 text_overflow_1" style="line-height: 50rpx;">
								就诊医院和科室：{{items.hospital_name || ''}} {{items.department_name || ''}}
							</view>
							<view class="font_size_text_m color_black_888 text_overflow_1" style="line-height: 30rpx;">
								陪诊时间：{{items.service_time}}
							</view>
						</view>
					</view>
				</view>
				<view class="flex_row justify_end ">
					<view class="btn_white_m margin_top_l" v-if=" orderIndex == 0" @click.stop="cancelOrder(index1)">
						取消订单
					</view>
					<view class="btn_orange_m margin_left_xl margin_top_l" v-if=" orderIndex == 0"
						@click.stop="openToPopup(item)">
						去支付
					</view>

					<view class="btn_orange_m margin_top_l" v-if=" orderIndex== 1" @click.stop="refund(item,index1)">
						申请退款
					</view>
					<view class="btn_white_m margin_top_l" v-if=" orderIndex == 3">
						已评价
					</view>
					<view class="btn_orange_m margin_left_xl margin_top_l" v-if=" orderIndex == 3"
						@click.stop="toInvoice">
						申请开票
					</view>
				</view>
			</view>
		</view>
		<view v-if="orderTypeIndex == 1 || (orderTypeIndex == 0 && orderIndex == 4)" class="margin_left_l"
			v-for="(item,index2) in orderList" :key="index2">
			<view class="box_690 order_item_box padding_l" @click="toDetail(item,orderIndex)">
				<view class="tip_yellow  " v-if="orderIndex == 0">
					待支付
				</view>
				<view class="tip_yellow  " v-if="orderIndex== 1">
					已付款
				</view>
				<view class="tip_blue  " v-if="orderIndex == 2">
					已发货
				</view>
				<view class="tip_blue  " v-if="orderIndex == 3">
					已签收
				</view>
				<view class="tip_orange  " v-if="item.tui_status == 0">
					退款中
				</view>
				<view class="tip_orange  " v-if="item.tui_status == 7 || item.tui_status == 8">
					已退款
				</view>
				<view class="tip_orange  " v-if="item.tui_status == 1">
					拒绝退款
				</view>
				<view class="font_size_text_m color_black_999">
					下单时间：{{item.create_time}}
				</view>
				<view class="flex_row margin_top_l">
					<image src="/static/image/docImg.png" mode="aspectFill" class="order_img"></image>
					<view class="margin_left_l">
						<view class="margin_bottom_m">
							<view class="font_size_title_s color_black_333 font_weight"
								style="line-height: 70rpx;display: flex;justify-content: space-between;">
								{{orderIndex == 4 ? item.patient_name : item.goods_name}}
								<view class="btn_white_m " v-if="orderIndex > 0 && orderIndex < 4" @click.stop="openOrderFeedback(item)">
									留言列表
								</view>
							</view>
							<view class="font_size_text_m color_black_888 order_label">
								{{orderIndex == 4 ? serviceType[item.service_type].name : item.goods_price}}
							</view>
							<view v-if="orderIndex == 4" class="font_size_text_s color_black_888 text_overflow_1"
								style="line-height: 50rpx;">
								就诊医院和科室：{{item.hospital_name || item.drug_hospital || ''}}，{{item.department_name || ''}}
							</view>
							<view v-if="orderIndex == 4" class="font_size_text_m color_black_888 text_overflow_1"
								style="line-height: 30rpx;">
								陪诊时间：{{item.service_time}}
							</view>
							<view v-if="orderTypeIndex == 1" class="font_size_text_s color_black_888 text_overflow_1"
								style="line-height: 50rpx;">
								价格：{{item.deduct_price}} + {{item.total_integral}}
							</view>
							<view v-if="orderTypeIndex == 1" class="font_size_text_m color_black_888 text_overflow_1"
								style="line-height: 30rpx;">
								产品积分：{{item.pay_integral}}
							</view>
						</view>
					</view>
				</view>
				<view class="flex_row justify_end ">
					<!-- <view class="btn_white_m margin_top_l" v-if=" orderIndex == 0" @click.stop="cancelOrder(index)">
						取消订单
					</view> -->
					<view class="btn_orange_m margin_left_xl margin_top_l" v-if=" orderIndex == 0"
						@click.stop="openToPopup(item)">
						去支付
					</view>

					<view class="btn_orange_m margin_left_xl margin_top_l"
						v-if=" orderIndex == 2 && orderTypeIndex == 1" @click.stop="sureReceipt(item)">
						确认收货
					</view>

					<!-- <view class="btn_orange_m margin_top_l" v-if=" orderIndex== 1" @click.stop="refund(item,index)">
						申请退款
					</view>
					<view class="btn_white_m margin_top_l" v-if=" orderIndex == 3">
						已评价
					</view>
					<view class="btn_orange_m margin_left_xl margin_top_l" v-if=" orderIndex == 3" @click.stop="toInvoice">
						申请开票
					</view> -->
				</view>
			</view>
		</view>
		<u-popup :show="cancelStatus" :closeable="true" mode="center" :round="20" @close="closeQuick"
			customStyle="width:600rpx;padding:60rpx;box-sizing: border-box;">
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
		<u-popup :show="toPopup" :closeable="true" mode="center" :round="20" @close="closePay"
			customStyle="width:600rpx;padding:60rpx;box-sizing: border-box;padding-top: 96rpx">
			<view class="flex_row width_all margin_top_s padding_bottom_xl" v-for="(item, index) in payStyle"
				:key="index">
				<image :src="item.img" class="pay_img"></image>
				<view class="font_size_text_l color_black_333 font_weight margin_left_l">
					{{item.name}} <text class="color_orange font_size_text_l font_weight margin_left_m"
						v-if="index == 0">（余额：{{ userInfo ? userInfo.balance : '0.00'}}）</text>
				</view>
				<view class="margin_left" @click="selectPayStyle(item, index)">
					<image src="/static/image/select01.png" class="icon_img" v-if="pay_channel == item.pay_channel">
					</image>
					<image src="/static/image/select02.png" class="icon_img" v-if="pay_channel != item.pay_channel">
					</image>
				</view>
			</view>
			<view class="sure_buttton margin_top_xxl " @click="againPay">
				立即支付
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
				popupShow: false,
				pay_channel: 4,
				payStyle: [{
						name: '咚咚币',
						img: '/static/image/pay03.png',
						pay_channel: 1
					},
					// #ifdef APP-PLUS
					{
						name: '微信支付',
						img: '/static/image/pay01.png',
						pay_channel: 3
					},
					{
						name: '支付宝支付',
						img: '/static/image/pay02.png',
						pay_channel: 2
					},
					// #endif
					// #ifdef MP-WEIXIN
					{
						name: '微信支付',
						img: '/static/image/pay01.png',
						pay_channel: 4
					},
					// {
					// 	name: '支付宝支付',
					// 	img: '/static/image/pay02.png',
					// 	pay_channel: 5
					// },
					// #endif
				],
				toPopup: false,
				orderType: [{
					'name': '普通'
				}, {
					'name': '积分'
				}],
				orderTypeIndex: 0,
				serviceType: [{
						'name': ''
					},
					{
						'name': 'VIP陪诊-尊享服务'
					},
					{
						'name': 'VIP陪诊-优享服务'
					},
					{
						'name': 'VIP陪诊-基础服务'
					},
					{
						'name': '普通人全程陪诊'
					},
					{
						'name': '名家有约'
					},
					{
						'name': '代办挂号-普通号'
					},
					{
						'name': '代办挂号-专家号'
					},
					{
						'name': '代办挂号-特诊号'
					},
					{
						'name': '代办-问诊'
					},
					{
						'name': '代办取药'
					},
					{
						'name': '代办送取报告'
					}, //11
					{
						'name': '代办开单以及检查'
					}, //12
					{
						'name': '儿童全程陪诊'
					}, //13
					{
						'name': '老年人全程陪诊'
					}, //14
					{
						'name': '孕妈全程陪诊'
					},
					{
						'name': '特殊人群全程陪诊'
					},
					{
						'name': 'VIP陪诊-基础服务'
					},
					{
						'name': 'VIP陪诊-优享服务'
					},
					{
						'name': 'VIP陪诊-尊享服务'
					}, //19
				],
				orderTitleList: [
					[{
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
					[{
							"title": "待付款"
						}, {
							"title": "已付款"
						}, {
							"title": "已发货"
						}, {
							"title": "已签收"
						}
						// , {
						// 	"title": "退货申请"
						// },
						// {
						// 	"title": "退货中"
						// }, {
						// 	"title": "已退货"
						// }, {
						// 	"title": "取消交易"
						// }, {
						// 	"title": "部分退货"
						// }
					]
				],
				keyWord: '',
				orderIndex: 0, //选中的状态 //0：待付款 1：待接单 2：服务中 3：已完成 4：退款
				orderList: [],
				cancelStatus: false,
				cancelSucess: false,
				page: 1,
				loading: true,
				cancelIndex: '', //取消订单的下标
				order_id: 0,
				userInfo: null

			}
		},
		onLoad(options) {
			// #ifdef APP-PLUS
			this.pay_channel = 3;
			// #endif
			this.orderIndex = options.status ? options.status : 0
			console.log('orderIndex', this.orderIndex);
		},
		onShow() {
			// if(getApp().globalData.upDate.isUpdateOrder){
			// 	this.getfresh();
			// 	getApp().globalData.upDate.isUpdateOrder = false
			// }
			this.getfresh();
			this.getUserInfo()

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
			sureReceipt(e) {
				uni.showToast({
					title: '暂无收货功能，敬请期待',
					icon: 'none',
				})
				return;
			},
			getUserInfo(e) {
				this.$api.getMyInfo({}).then(res => {
					this.userInfo = res
				})
			},
			setText() {},
			//订单反馈
			openOrderFeedback(item) {
				uni.navigateTo({
					url: '/aUserPages/orderFeedback/orderFeedback?type=0&order_id=' + item.order_id +
						'&service_id=' + item.id
				})
			},
			selectPayStyle(item, index) { //选择支付方式 1钱包，2支付宝，3微信支付，4微信小程序支付 5支付宝小程序支付
				this.payValue = item.name;
				this.pay_channel = item.pay_channel
			},
			openToPopup(item) {
				this.toPopup = true;
				this.order_id = item.order_id;
				this.pay_channel = 1;
				this.popupShow = true;
			},
			closePay() {
				this.toPopup = false;
				this.popupShow = false
			},
			//重新支付
			againPay() {
				let api = {
					0: 'getOrderPay',
					1: 'getGoodsPay'
				}
				this.$api[api[this.orderTypeIndex]]({
					order_id: this.order_id,
					pay_channel: this.pay_channel
				}).then(res => {
					let _this = this;
					switch (this.pay_channel) {
						case 1: //东东币
							_this.getfresh()
							_this.closePay()
							break;
						case 2: //app支付宝支付
							uni.requestPayment({
								provider: "alipay", //固定值为"alipay"
								orderInfo: res.url, //此处为服务器返回的订单信息字符串
								success: function(res) {
									_this.getfresh()
									_this.closePay()
									console.log("支付成功");
								},
								fail: function(err) {
									console.log('支付失败:' + JSON.stringify(err))
									_this.closePay()
								}
							});
							break;
						case 3: //app微信支付
							uni.requestPayment({
								provider: "wxpay",
								orderInfo: {
									appid: res.appid, // 微信开放平台 - 应用 - AppId，注意和微信小程序、公众号 AppId 可能不一致
									noncestr: res.nonceStr, // 随机字符串
									package: res.package, // 固定值
									partnerid: res.partnerid, // 微信支付商户号
									prepayid: res.prepayid, // 统一下单订单号 
									timestamp: res.timestamp, // 时间戳（单位：秒）
									sign: res.sign // 签名，这里用的 MD5/RSA 签名
								},
								success(res) {
									_this.getfresh()
									_this.closePay()
								},
								fail(e) {
									uni.showToast({
										title: "支付失败",
										icon: 'none',
										duration: 1000
									});
									this.closePay()
								}
							})
							break;
						case 4: //小程序微信支付
							uni.requestPayment({
								provider: 'wxpay',
								timeStamp: res.timeStamp,
								nonceStr: res.nonceStr,
								package: res.package,
								signType: res.signType,
								paySign: res.paySign,
								success: function(res) {
									console.log('success:' + JSON.stringify(res));
									_this.getfresh()
									_this.closePay()
								},
								fail: function(err) {
									console.log('fail:' + JSON.stringify(err));
									uni.showToast({
										title: "支付失败",
										icon: 'none',
										duration: 1000
									});
									_this.closePay()
								}
							})
							break;
						default:
							console.log('支付方式不对');
					}
					// uni.navigateTo({
					// 	url:'/aUserPages/my/myOrder'
					// })
				}).catch(error => {
					if (this.pay_channel == 1) {
						error.msg = '余额不足'
					}
					uni.showToast({
						title: error.msg,
						icon: 'none'
					})
				})

			},
			selectOrderTypeStatus(index) {
				this.orderTypeIndex = index
				this.orderIndex = 0
				this.getfresh()
			},
			fresh(e) {
				uni.showNavigationBarLoading();
				this.getfresh()
				uni.hideNavigationBarLoading();
				uni.stopPullDownRefresh();
			},
			getSearchData(e) {
				this.title = e;
			},
			getfresh(e) {
				uni.showLoading({
					title: '加载中',
					mask: true
				});
				this.orderList = []
				this.page = 1
				this.loading = true;
				this.getOrder()
			},
			getOrder(e) {
				if (this.orderTypeIndex == 1) {
					this.$api.getGoodsOrderList({
						pageSize: 4,
						page: this.page,
						order_status: this.orderIndex > 0 && this.orderIndex < 4 ? this.orderIndex : 0
					}).then(res => {
						uni.hideLoading()
						this.loading = res.list.length == 4
						this.orderList = this.orderList.concat(res.list)
						this.page += 1
					})
				} else {
					let api = {
						0: "getOrderToPay",
						1: "getOrderList",
						2: "getOrderList",
						3: "getOrderList",
						4: "getOrderRefund"
					}
					this.$api[api[this.orderIndex]]({
						pageSize: 4,
						page: this.page,
						service_status: this.orderIndex > 0 && this.orderIndex < 4 ? this.orderIndex : 0
					}).then(res => {
						uni.hideLoading()
						this.loading = res.list.length == 4
						this.orderList = this.orderList.concat(res.list)
						this.page += 1
						console.log('orderList', this.orderList);
					})
				}
				console.log('orderList', this.orderList);
			},
			change(e) {
				console.log('change', e);
			},
			selectOrderStatus(status) {
				this.orderIndex = status
				this.getfresh()
			},
			toDetail(item) { //查看详情
				console.log('item', item);
				let serviceId = this.orderIndex == 4 ? item.id : item.record_info[0].id
				console.log('item.record_info+id', serviceId);
				uni.navigateTo({
					url: '/aUserPages/my/orderDetail?orderId=' + item.order_id + "&type=" + this.orderIndex +
						"&serviceId=" + serviceId
				})
			},
			cancelOrder(index) {
				this.cancelStatus = !this.cancelStatus
				this.popupShow = true;
				this.cancelIndex = index
			},
			closeQuickPop(type) {
				this.cancelStatus = !this.cancelStatus
				this.popupShow = false;
				if (type == 1) { //取消订单
					this.$api.cancelOrder({
						order_id: this.orderList[this.cancelIndex].order_id
					}).then(res => {
						this.orderList.splice(this.cancelIndex, 1)
						this.cancelSucess = true
						this.popupShow = true;
						let time = setTimeout(x => {
							this.cancelSucess = false
							this.popupShow = false;
							clearTimeout(time)
						}, 3000)
						if (this.orderList.length < 4) {
							this.getOrder()
						}
					})


				}
			},
			closeQuick(e) {
				console.log("关闭")
				this.cancelStatus = false
				this.popupShow = false;
			},
			closeSucess(e) {
				this.cancelSucess = !this.cancelSucess
				this.popupShow = false;
			},
			refund(item, index) { //申请退款
				uni.navigateTo({
					url: '/aUserPages/my/refund?serviceId=' + item.record_info[0].id
				})
			},
			toInvoice(e) {
				uni.navigateTo({
					url: "/aUserPages/my/invoice"
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
	.popupShow {
		overflow: hidden;
		position: fixed;
		height: 100vh;
		width: 100%;
	}

	.pay_img {
		width: 46rpx;
		height: 46rpx;
	}

	.icon_img {
		width: 32rpx;
		height: 32rpx;
	}

	.sure_buttton {
		width: unset;
		// margin-left: 70rpx;
	}

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
			width: 220rpx;
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
