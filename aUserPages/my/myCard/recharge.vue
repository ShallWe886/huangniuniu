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
					<view class="money_box margin_right_l margin_bottom_l" :class="{'active':monetIndex == index}">
						{{item}}元
					</view>
				</block>
			</view>
			
			<input type="text" class="input_money" placeholder="自定义金额" placeholder-style="text-algin:center;">
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
				<radio value="2"  color='#FF6437' style="transform:scale(0.6)" class="margin_left"/>
			</view>
			<view class="flex_row margin_top_xl">
				<image src="/static/image/pay02.png" mode="aspectFill" class="pay_img"></image>
				<view class="margin_left_s font_size_text_l color_black_333 font_weight">
					支付宝支付
				</view>
				<radio value="2"  color='#FF6437' style="transform:scale(0.6)" class="margin_left"/>
			</view>
		</view>
		<view class="sure_buttton_letter margin_left_l margin_top_xxl" @click="submit">
			确 定
		</view>
		<u-popup :show="rechargePop" mode="bottom" :round="30"  @close="closePop">
			<view class="flex_row padding_l">
				<image src="/static/image/health_close.png" mode="aspectFill" class="close_icon margin_left"></image>
			</view>
			<view  class="padding_l">
				
				<view class="text_align_center color_black_333 font_weight" style="font-size: 72rpx;">
					<text style="font-size: 52rpx;"></text>￥2000.00
				</view>
				<view class="flex_row border_top border_bottom padding_l_0 margin_top_xl">
					<view class="color_black_999 font_size_text_xl">
						订单金额
					</view>
					<view class="margin_left font_size_text_l color_black_333">
						¥5.00
					</view>
				</view>
				<view class="flex_row  border_bottom padding_l_0">
					<view class="color_black_999 font_size_text_xl">
						红包
					</view>
					<view class="margin_left font_size_text_l color_orange">
						-¥5.00
					</view>
				</view>
				<view class="flex_row  border_bottom padding_l_0">
					<view class="color_black_999 font_size_text_xl">
						订单信息
					</view>
					<view class="margin_left font_size_text_l color_black_333">
						钱包充值
					</view>
				</view>
				<view class="sure_buttton margin_top_l margin_left_l margin_bottom_l">
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
				moneyList:['50','100','200','500','1000','2000'],
				monetIndex:0,
				rechargePop:false
			}
		},
		methods: {
			submit(e){
				this.rechargePop = true
			},
			closePop(e) {
				console.log(e)
				this.rechargePop = false
			}
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
