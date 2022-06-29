<template>
	<view class="flex_column padding_bottom_l">
		<view class="box_690 flex_row padding_l">
			<image src="/static/image/address_con.png" mode="aspectFit" class="con_addr flex_shrink"></image>
			<view class="margin_left_m" @click="selectAddress">
				<view class="flex_row">
					<view class="text_overflow_1 font_size_title_m color_black_333 font_weight">
						李晓华
					</view>
					<view class="font_size_text_xl color_black_888 flex_shrink margin_left_s">
						18675403333
					</view>
				</view>
				<view class="color_black_888 font_size_text_l margin_top_m text_overflow_2">
					浙江省杭州市西湖区文新街道桂花园社区
					雨花园1号楼2单元305室
				</view>
			</view>
			<view class="margin_left">
				<u-icon name="arrow-right" size="40"></u-icon>
			</view>
		</view>
		<view class="box_690 padding_l">
			<view class="flex_row padding_bottom_m">
				<view class="tip_label">

				</view>
				<view class="font_size_title_l color_black_333 font_weight margin_left_s">
					订单信息
				</view>
			</view>
			<view class="flex_row width_all padding_top_xl border_top">
				<image src="/static/image/shop_little_img.png" mode="aspectFill" class="shop_img"></image>
				<view class="margin_left_l">
					<view class="font_size_title_l color_black_333 font_weight">
						商品*******标题
					</view>
					<view class=" color_black_888 font_size_text_s margin_top_l">
						数量：1 <text class="margin_left_s">颜色：红色</text>
					</view>
					<view class="font_size_title_m color_orange font_weight margin_top_l">
						2000积分+45元
					</view>
				</view>
			</view>
		</view> 
		<view class="box_690 padding_l">
			<view class="tip_box font_size_text_l color_black_333">
				您现有积分<text class="color_orange">xx</text>，还需支付<text class="color_orange">xx</text>元
			</view>
			<view class="flex_row margin_top_xl" v-for="(item,index) in payStyle" :key="index">
				<image :src="item.img" mode="aspectFill" class="pay_img"></image>
				<view class="font_size_text_l color_black_333 font_weight margin_left_s">
					{{item.title}} <text class="font_size_text_l margin_left_m"
						style="color: #FF9300;" v-if="index == 2">（账户话费余额：¥300）</text>
				</view>
				<radio value="1" :checked="pay == index" color='#FF6437' style="transform:scale(0.7)"
					class="margin_left" />
			</view>
		</view>
		<view class="sure_buttton margin_top_xxl" @click="toSucess">
			确认支付
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				payStyle: [{
						'title': '微信支付',
						img: '/static/image/pay01.png'
					},
					{
						'title': '支付宝支付',
						img: '/static/image/pay02.png'
					},
					{
						'title': '余额支付',
						img: '/static/image/pay04.png'
					}
				]
			}
		},
		methods: {
			toSucess(e){//支付成功
				uni.navigateTo({
					url:"/aUserPages/resultPage/resultPage?type="+0
				})
			},
			selectAddress(e){
				uni.navigateTo({
					url:'/aUserPages/my/addAddress/addAddress'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.con_addr {
		width: 48rpx;
		height: 48rpx;
	}

	.tip_label {
		width: 10rpx;
		height: 30rpx;
		background: linear-gradient(to bottom, #FF6437, #FF9B51);
		border-radius: 4rpx;
	}

	.shop_img {
		width: 220rpx;
		height: 200rpx;
	}

	.pay_img {
		width: 46rpx;
		height: 46rpx;
	}
	.tip_box{
		width: 540rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		border-radius: 30rpx;
		background: #F6F6F6;
		margin-left: 45rpx;
	}
</style>
