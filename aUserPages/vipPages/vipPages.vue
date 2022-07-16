<template>
	<view class="padding_bottom_xl">
		<view class="vip_box">
			<image :src="imageUrl+'/vipTopImg.png'" class="vip_topImg"></image>
			<view class="box_690 padding_l_xl vip_tip_box">
				<view class="font_weight color_black_333 font_size_title_l text_align_center">
					一对一专业陪诊
				</view>
				<view class="font_size_text_xl color_black_333 margin_top_s font_weight text_align_center">
					<view>名医服务</view>
					<view>就医绿通服务</view>
					<view>专业全流程就医顾问</view>
					<view>医患就诊沟通的桥梁</view>
				</view>
			</view>
		</view>
		<view class="padding_0_l " style="margin-top: 240rpx;">
			<view class="box_690 padding_xl_l flex_column flex_center">
				<view class="service_box ">
					<view
						style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;left: 10px;top: 13px;">
					</view>
					<view class="font_size_title_s color_orange">
						适用人群
					</view>
					<view
						style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;right: 10px;top: 13px;">
					</view>
				</view>
				<view class=" margin_top_m color_black_888 font_size_text_xl flex_column " style="width: 620rpx;background-color: #f8f8f8;border-radius: 10rpx;text-align: center;padding: 20rpx;box-sizing: border-box;">
					<view >需要绿通或高水平医疗的人群</view>
					<view>需提前预约安排的异地就医人群</view>
					<view>公司或个人购买年度服务套餐</view>
					<view>需会诊专家服务（必要时组建多学科专家）</view>
				</view>
			</view>
			<view class="box_690 padding_xl_l flex_column flex_center" v-for="(item,index) in serviceList" :key="index">
				<view class="service_box ">
					<view
						style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;left: 10px;top: 13px;">
					</view>
					<view class="font_size_title_s color_orange">
						{{item.name}}
					</view>
					<view
						style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;right: 10px;top: 13px;">
					</view>
				</view>
				<block v-for="(items,indexs) in item.list" :key="indexs">
					<view class="service_item margin_top_m">
						<text class="font_size_text_xl color_black_888 margin_right_xl"
							v-if="item.showTitle">{{items.title}} </text>
						<text class="font_size_text_xl color_orange  font_weight"> ¥{{items.money}}</text>
						<text class="font_size_text_m color_orange font_weight">.00起</text>
					</view>
				</block>
			</view>
			<view class="box_690 padding_xl_l flex_column flex_center">
				<view class="service_box ">
					<view
						style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;left: 10px;top: 13px;">
					</view>
					<view class="font_size_title_s color_orange">
						特需服务
					</view>
					<view
						style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;right: 10px;top: 13px;">
					</view>
				</view>
				<view class="service_item margin_top_m">
					<text class="font_size_text_xl color_black_888 margin_right_xl">依据个性化需求定制 </text>
				</view>
			</view>
			<view class="flex_column margin_top_l" @click="appoint">
				<view class="centerImg flex_column justify_center" style="">
					<image src="/static/image/tabbar09.png" class="tabbar_img_center "></image>
				</view>
				<view class="font_size_text_xxs  color_black_888 margin_top_s">
					人工预约
				</view>
			</view>
		</view>
		<u-popup :show="appointShow" :closeable="true" mode="center" :round="20" @close="closeQuick">
			<view class="flex_column " style="width: 600rpx; box-sizing: border-box;padding: 50rpx 30rpx 60rpx 30rpx ;">
				<view class="font_size_title_xxl color_black_333 font_weight " style="margin-top: 30rpx;">
					咨询热线
				</view>
				<view class="font_size_title_xl color_black_333 font_weight margin_top_m" @click="setText">
					010-6565-556
				</view>
				<view class="flex_row margin_top_xl ">
					<view class="quick_btn font_size_title_s color_orange " @click="closeQuickPop(0)">
						取消
					</view>
					<view class="quick_btn font_size_title_s color_white margin_left_l" @click="closeQuickPop(1)">
						确认
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				serviceList: [{
						name: "门诊服务",
						showTitle: true,
						list: [{
							title: "",
							money: 999
						}]
					},
					{
						name: "住院服务",
						showTitle: true,
						list: [{
							title: "",
							money: 1999
						}]
					}
				],
				appointShow:false
			}
		},
		methods: {
			appoint(e) {
				this.appointShow = true
			},
			setText(e) {
				//点击复制
				uni.setClipboardData({
					data: '010-6565-556',
					success: function() {
						uni.showToast({
							title: "复制成功",
							icon: "none"
						})
					}
				});
			},
			closeQuickPop(type) {
				this.appointShow = !this.appointShow
				if (type == 1) {
					uni.makePhoneCall({
						phoneNumber: '010-6565-556' //仅为示例
					});
				}
			},
			closeQuick(e) {
				console.log("关闭")
				this.appointShow = false
			},
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
			top: 270rpx;
			left: 30rpx;
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
		background-color: #f8f8f8;
		border-radius: 10rpx;
		text-align: center;
	}

	.centerImg {
		width: 90rpx;
		height: 90rpx;
		border-radius: 50%;
		background: linear-gradient(to bottom right, #FF6437, #FF9B51);
		box-shadow: 0px 0px 0px #fff
	}

	.tabbar_img_center {
		width: 44rpx;
		height: 44rpx;
	}
	
	.quick_btn {
		width: 220rpx;
		text-align: center;
		height: 72rpx;
		line-height: 72rpx;
		border-radius: 70rpx;
	
	
		&:nth-child(1) {
			background-color: #f8f8f8;
			border: 2rpx solid #FF6437;
		}
	
		&:nth-child(2) {
			background: linear-gradient(to right, #FF6437, #FF9B51);
		}
	}
</style>
