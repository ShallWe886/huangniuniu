<template>
	<view class="padding_bottom_xl">
		<view class="vip_box">
			<image src="/static/image/vipTopImg.png" class="vip_topImg"></image>
			<view class="box_690 padding_l_xl vip_tip_box">
				<view class="font_weight color_black_333 font_size_title_l">
					全程就医陪诊
				</view>
				<view class="font_size_text_xl color_black_999 margin_top_m">
					普通人/儿童/老年人/孕妈特殊人群等
				</view>
			</view>
		</view>
		<view class="padding_0_l " style="margin-top: 100rpx;">
			<view class="box_690 padding_xl_l flex_column ">
				<view class="service_box ">
					<view
						style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;left: 10px;top: 13px;">
					</view>
					<view class="font_size_title_s color_orange">
						服务范围
					</view>
					<view
						style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;right: 10px;top: 13px;">
					</view>
				</view>
				<view class="font_size_text_xl color_black_888 margin_top_m">
					服务范围文案服务范围文案服务范围文案服务范围文案服务范围文案
				</view>
				<!-- <block v-for="(items,indexs) in item.list">
					<view class="service_item margin_top_m">
						<text class="font_size_text_xl color_black_888">基础服务包 </text>
						<text class="font_size_text_xl color_orange margin_left_xl"> ¥999</text>
						<text class="font_size_text_m color_orange">.00起</text>
					</view>
				</block> -->
			</view>
			<view class="box_690 padding_xl_l flex_column  ">
				<view class="service_box ">
					<view
						style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;left: 10px;top: 13px;">
					</view>
					<view class="font_size_title_s color_orange">
						收费标准
					</view>
					<view
						style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;right: 10px;top: 13px;">
					</view>
				</view>
				<view class="service_item margin_top_m">
					<text class="font_size_text_xl color_black_888">收费标准 </text>
					<text class="font_size_text_xl color_orange margin_left_xl"> ¥999</text>
					<text class="font_size_text_m color_orange">.00起</text>
				</view>
				<!-- <block v-for="(items,indexs) in item.list">
					<view class="service_item margin_top_m">
						<text class="font_size_text_xl color_black_888">基础服务包 </text>
						<text class="font_size_text_xl color_orange margin_left_xl"> ¥999</text>
						<text class="font_size_text_m color_orange">.00起</text>
					</view>
				</block> -->
			</view>
		</view>
		<view class="sure_buttton margin_top_xxl" @click="submitOrder">
			提交订单
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				serviceList: [{
						name: "",
						list: [{}, {}, {}, {}]
					},
					{
						name: "",
						list: [{}, {}, {}, {}]
					},
					{
						name: "",
						list: [{}, {}, {}, {}]
					},
					{
						name: "",
						list: [{}, {}, {}, {}]
					}
				]
			}
		},
		methods: {
			submitOrder(e) {
				//提交订单
				uni.navigateTo({
					url: '/aUserPages/vipPages/writeOrder'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.vip_box {
		position: relative;

		.vip_topImg {
			width: 100%;
			height: 370rpx;
		}

		.vip_tip_box {
			position: absolute;
			top: 135px;
			left: 15px;
		}
	}

	.service_box {
		background: #FFEAE3;
		width: 290rpx;
		height: 70rpx;
		border-radius: 40rpx;
		line-height: 70rpx;
		text-align: center;
		position: relative;
	}

	.service_item {
		width: 620rpx;
		height: 80rpx;
		line-height: 80rpx;
		// background-color: #f8f8f8;
		border-radius: 10rpx;
		text-align: center;
	}

	.sure_buttton {
		margin-left: 70rpx;
	}
</style>
