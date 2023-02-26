<template>
	<view class="padding_left_l padding_right_l">
		<view class="flex_row padding_top_l margin_top_m">
			<image src="/static/image/recharge02.png" mode="aspectFill" class="recharge_icon"></image>
			<view class="font_size_title_l color_black_333 font_weight margin_left_s">
				充值金额
			</view>
			<view class="margin_left color_orange font_size_text_l">
				1积分为1元人民币
			</view>
		</view>
		<view class="box_690 padding_l">
			<view class="flex_row flex_wrap ">
				<block v-for="(item,index) in moneyList" :key="index">
					<view @click="selectMoney(item, index)" class="money_box margin_right_l margin_bottom_l" :class="{'active':monetIndex == index}">
						{{item}}元
					</view>
				</block>
			</view>
			
			<input type="text" v-model="price" class="input_money" placeholder="自定义金额" placeholder-style="text-algin:center;">
		</view>
		<view class="flex_row margin_top_xl">
			<image src="/static/image/recharge01.png" mode="aspectFill" class="pay_way"></image>
			<view class="font_size_title_l color_black_333 font_weight margin_left_s">
				支付方式
			</view>
		</view>
		<view class="box_690 padding_l">
			<view class="flex_row">
				<image src="/static/image/pay01.png" mode="aspectFill" class="pay_img"></image>
				<view class="margin_left_s font_size_text_l color_black_333 font_weight">
					微信支付
				</view>
				<!-- #ifdef APP-PLUS -->
				<radio value="3" @click="changePay(3)" :checked="checkedPay == 3"  color='#FF6437' style="transform:scale(0.6)" class="margin_left"/>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				<radio value="4" @click="changePay(4)" :checked="checkedPay == 4"  color='#FF6437' style="transform:scale(0.6)" class="margin_left"/>
				<!-- #endif -->
			</view>
			<!-- #ifdef APP-PLUS -->
			<view class="flex_row margin_top_xl">
				<image src="/static/image/pay02.png" mode="aspectFill" class="pay_img"></image>
				<view class="margin_left_s font_size_text_l color_black_333 font_weight">
					支付宝支付
				</view>
				<radio :checked="checkedPay == 2" @click="changePay(2)" value="2"  color='#FF6437' style="transform:scale(0.6)" class="margin_left"/>
			</view>
			<!-- #endif -->
		</view>
		<view class="sure_buttton_letter margin_left_l margin_top_xxl" @click="submit">
			确 定
		</view>
		<u-popup :show="rechargePop" mode="bottom" :round="30"  @close="closePop">
			<view class="flex_row padding_l" @click="closePop">
				<image src="/static/image/health_close.png" mode="aspectFill" class="close_icon margin_left"></image>
			</view>
			<view  class="padding_l">
				
				<view class="text_align_center color_black_333 font_weight" style="font-size: 72rpx;">
					<text style="font-size: 52rpx;"></text>￥{{price}}
				</view>
				<view class="flex_row border_top border_bottom padding_l_0 margin_top_xl">
					<view class="color_black_999 font_size_text_xl">
						订单金额
					</view>
					<view class="margin_left font_size_text_l color_black_333">
						¥{{price}}
					</view>
				</view>
				<!-- <view class="flex_row  border_bottom padding_l_0">
					<view class="color_black_999 font_size_text_xl">
						红包
					</view>
					<view class="margin_left font_size_text_l color_orange">
						-¥5.00
					</view>
				</view> -->
				<view class="flex_row  border_bottom padding_l_0">
					<view class="color_black_999 font_size_text_xl">
						订单信息
					</view>
					<view class="margin_left font_size_text_l color_black_333">
						{{checkedPay == 2? '支付宝' : '微信' }}充值
					</view>
				</view>
				<view class="sure_buttton margin_top_l margin_left_l margin_bottom_l" @click="toPay">
					立即付款
				</view>
			</view>
			
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				price: 50,
				moneyList:['50','100','200','500','1000','2000'],
				monetIndex:0,
				rechargePop:false,
				pay_channel: 4,
				checkedPay: 4,
				wallet_id: 0,
			}
		},
		onLoad(options) {
			// #ifdef APP-PLUS
			this.checkedPay = 3;
			this.pay_channel = 3;
			// #endif
			this.wallet_id = options.wallet_id;
		},
		methods: {
			changePay(type) {
				this.pay_channel = type;
				this.checkedPay = type;
			},
			selectMoney(item, index) {
				this.price = item;
				this.monetIndex = index;
			},
			submit(e){
				this.rechargePop = true
				
			},
			closePop(e) {
				console.log(e)
				this.rechargePop = false
			},
			toPay() {
				this.$api.getRecharge({pay_channel:this.pay_channel,wallet_id:this.wallet_id,charge_amount: this.price,remark:''}).then(res=>{
					switch (this.pay_channel) {
						case 2: //app支付宝支付
								uni.requestPayment({
									provider: "alipay", //固定值为"alipay"
									orderInfo: res.url, //此处为服务器返回的订单信息字符串
									success: function(res) {
										uni.showToast({
											title: "充值成功",
											icon:'none',
											duration: 1000
										});
										// setTimeout(function() {
										// 	uni.reLaunch({
										// 		url: '/aUserPages/my/my'
										// 	})
										// }, 1000);
										console.log("支付成功");
									},
									fail: function(err) {
										console.log('支付失败:' + JSON.stringify(err));
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
										uni.showToast({
											title: "充值成功",
											icon:'none',
											duration: 1000
										});
										setTimeout(function() {
											uni.reLaunch({
												url: '/aUserPages/my/my'
											})
										}, 1000);
									},
									fail(e) {
										uni.showToast({
											title: "支付失败",
											icon:'none',
											duration: 1000
										});
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
									uni.showToast({
										title: "充值成功",
										icon:'none',
										duration: 1000
									});
									setTimeout(function() {
										uni.reLaunch({
											url: '/aUserPages/my/my'
										})
									}, 1000);
									
								},
								fail: function(err) {
									console.log('fail:' + JSON.stringify(err));
								}
							})
							break;
						default:
							console.log('支付方式不对');
					}
				}).catch(error => {
					uni.showToast({
						title: error.msg,
						icon: 'none'
					})
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.recharge_icon{
		width: 38rpx;
		height: 38rpx;
	}
.money_box{
	width: 180rpx;
	height: 140rpx;
	border-radius: 20rpx;
	background-color: #F6F6F6 ;
	text-align: center;
	line-height: 140rpx;
	color: #333333;
	font-size: 38rpx;
	font-weight: bold;
	
	&.active{
		color: #ffffff;
		background: linear-gradient(to bottom right,#FF6437,#FF9B51);
	}
}
.input_money{
	width: 620rpx;
	height: 90rpx;
	background: #F6F6F6;
	border-radius: 20rpx;
	text-align: center;
}
.pay_way{
	width: 38rpx;
	height: 38rpx;
}

.pay_img{
	width: 46rpx;
	height: 46rpx;
}
</style>
