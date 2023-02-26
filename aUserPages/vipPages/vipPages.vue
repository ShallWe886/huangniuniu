<template>
	<view class="padding_bottom_xl">
		<view class="vip_box">
			<image :src="imageUrl+'/vipTopImg.png'" class="vip_topImg"></image>
			<view class="box_690 padding_l_xl vip_tip_box flex_column">
				<!-- #ifdef MP-WEIXIN -->
				<view class="service_box " style="width: 365rpx !important">
				<!-- #endif -->
				<!-- #ifdef APP-PLUS -->
				<view class="service_box " style="padding:0 40rpx">
				<!-- #endif -->
					<view
						style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;left: 10px;top: 13px;">
					</view>
					<view class="font_size_title_s color_orange">
						您的专业就医顾问
					</view>
					<view
						style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;right: 10px;top: 13px;">
					</view>
				</view>
				<view class="font_size_text_xl color_black_333 margin_top_xl">
					<view class="margin_bottom_l">精准就医信息咨询</view>
					<view class="margin_bottom_l">全程专属顾问服务</view>
					<view class="margin_bottom_l">医患沟通详尽解读</view>
					<view>名医服务就医沟通</view>
				</view>
				<view class="font_size_text_xl color_black_333 margin_top_xl font_weight text_align_center">
					<view class="margin_bottom_l">购买流程
					</view>
					<view>拨打人工客服明确需求</text>
					</view>
					<view class="">
						<image src="/static/image/vipshu.png" mode="" style="width: 20rpx;height: 40rpx;"></image>
					</view>
					<view>确认服务内容及价格</text>
					</view>
					<view class="">
						<image src="/static/image/vipshu.png" mode="" style="width: 20rpx;height: 40rpx;"></image>
					</view>
					<view>在此页面下单付费</text></view>
				</view>
			</view>
		</view>
		<view class="padding_0_l " style="margin-bottom: 200rpx;">
			<view class="box_690 padding_xl_l flex_column flex_center">
				<view class="service_box ">
					<view
						style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;left: 10px;top: 13px;">
					</view>
					<view class="font_size_title_s color_orange">
						&nbsp;&nbsp;&nbsp;适用人群&nbsp;&nbsp;&nbsp;
					</view>
					<view
						style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;right: 10px;top: 13px;">
					</view>
				</view>
				<view class=" margin_top_m color_black_333 font_size_text_xl flex_column "
					style="width: 620rpx;background-color: #f8f8f8;border-radius: 10rpx;text-align: center;padding: 20rpx;box-sizing: border-box;">
					<view>需要绿通或高水平医疗的人群</view>
					<view>需提前预约安排的异地就医人群</view>
					<view>公司或个人购买年度服务套餐</view>
					<view>需会诊专家服务（必要时组建多学科专家）</view>
				</view>
			</view>
			<!-- <radio-group @change="radioChange"> -->
			<view class="box_690 padding_xl_l flex_column flex_center" v-for="(item,index) in serviceList" :key="index">
				<view class="" style="display: flex;position: relative;">
					<view class="service_box " style="width: unset;">
						<view
							style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;left: 10px;top: 13px;">
						</view>
						<view class="font_size_title_s color_orange" style="padding: 0 40rpx;">
							{{item.name}}
						</view>
						<view
							style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;right: 10px;top: 13px;">
						</view>
					</view>
					<!-- <view class="check-serve" style="position: absolute;right:-140rpx">
							<radio color="#FF6437" style="transform:scale(0.7)" :value="item.name" :checked="index === current" />
						</view> -->
				</view>
				<block v-for="(items,indexs) in list" :key="indexs" v-if="item.name == items.name.substring(0, 10)">
					<view class="service_item margin_top_m" style="display: flex;justify-content: space-between">
						<!-- v-if="item.showTitle" -->
						<text class="font_size_text_s color_black_888 ">{{items.name}} </text>
						<text class="font_size_text_xl color_orange  font_weight"> ¥{{items.money}}</text>
						<!-- <text class="font_size_text_m color_orange font_weight" style="padding-right: 40rpx;">.00起</text> -->
						<view class="number-box flex_row">
							<view class="box-jian" @click="addNumber(items, 0, index)">
								<u-icon name="minus" :color="items.shopNum == 0?'#c8c9cc':'#151617'" size="30" bold></u-icon>
							</view>
							<view class="box-input">
								<input v-model="items.shopNum" type="number" class="u-number-box__input"
									disabled>
							</view>
							<view class="box-add" @click="addNumber(items, 1, index)">
								<u-icon name="plus" color="#151617" size="30" bold></u-icon>
							</view>
						</view>
						<!-- <u-number-box :value="items.shopNum" :min="0" @change="valChange(items, index, indexs)" button-size="40" disabledInput="true"
								inputWidth="70" iconStyle="font-size:30rpx;" max="1000"></u-number-box> -->
					</view>
				</block>
			</view>
			<!-- </radio-group>	 -->
			<!-- <view class="box_690 padding_xl_l flex_column flex_center">
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
			</view> -->
			<view style="position: fixed; bottom: 130rpx;left:320rpx;z-index: 999;"
				class="flex_column margin_top_l margin_bottom_s" @click="appoint">
				<view class="centerImg flex_column justify_center" style="">
					<image src="/static/image/tabbar09.png" class="tabbar_img_center "></image>
				</view>
				<view class="font_size_text_xxs  color_black_888 margin_top_s">
					人工预约
				</view>
			</view>
			<view style="position: fixed; bottom: 40rpx;z-index: 999;" class="sure_buttton margin_top_xxl"
				@click="submitOrder">
				提交订单
			</view>
		</view>
		<u-popup :show="appointShow" :closeable="true" mode="center" :round="20" @close="closeQuick">
			<view class="flex_column " style="width: 600rpx; box-sizing: border-box;padding: 50rpx 30rpx 60rpx 30rpx ;">
				<view class="font_size_title_xxl color_black_333 font_weight " style="margin-top: 30rpx;">
					咨询热线
				</view>
				<view class="font_size_title_xl color_black_333 font_weight margin_top_m" @click="setText">
					131 8901 9301
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
				shopNum: 0,
				current: 0,
				serviceList: [{
						name: "VIP陪诊-尊享服务",
						showTitle: true,
						list: [{
							title: "ces",
							money: 1999
						}]
					}, {
						name: "VIP陪诊-优享服务",
						showTitle: true,
						list: [{
							title: "ces2",
							money: 999
						}]
					},
					{
						name: "VIP陪诊-基础服务",
						showTitle: true,
						list: [{
							title: "ces",
							money: 1999
						}]
					}
				],
				appointShow: false,
				service_type: [],
				msg: null,
				list: [],
				ischange: false,
				total: 0,
				noClick: true,
			}
		},
		onLoad() {

		},
		onShow() {
			this.total = 0;
			this.getData()
		},
		methods: {
			// selectType(item, index) {
			// 	// this.total = item.money
			// 	this.current = index
			// 	this.msg = item;
			// },
			addNumber(e, status, index) {
				let num = 0
				let arr = JSON.parse(JSON.stringify(this.list))
				this.service_type = e.id
				this.total = 0
				arr.map(item => {
					if (this.serviceList[index].name != item.name.substring(0, 10)) {
						item.shopNum = 0;
					}
					if (e.id == item.id) {
						if (status && status > 0) {
							item.shopNum = item.shopNum + 1;
							num = item.shopNum
							// this.$set(this.list, 'shopNum', item.shopNum)
							// this.total = this.total + parseInt(item.money)
						} else {
							if(item.shopNum == 0){
								return
							}
							item.shopNum = item.shopNum - 1;
							num = item.shopNum
							// this.total = this.total - parseInt(item.money)
						}
					}
					this.total = this.total + parseInt(item.money) * parseInt(item.shopNum)
				})
				this.list = arr;
				// if (this.service_type.length > 0) {
				// 	let flag = false;
				// 	let n = 0;
				// 	for (let i in this.service_type) {
				// 		if (this.service_type[i].id == e.id) {
				// 			n = i;
				// 			flag = true
				// 		}
				// 	}
				// 	if (flag) {
				// 		this.service_type[n].num = num
				// 	} else {
				// 		this.service_type.push({
				// 			id: e.id,
				// 			num: num
				// 		});
				// 	}
				// } else {
				// 	this.service_type.push({
				// 		id: e.id,
				// 		num: num
				// 	});
				// }
			},
			valChange(e) {
				this.msg = e;
				this.$forceUpdate()
			},
			radioChange(e) {
				// this.service_type = e.detail.value
			},
			submitOrder(e) {
				console.log('service_type', JSON.stringify(this.service_type));
				if (this.total <= 0) {
					uni.showToast({
						title: '没有选择服务项目无法提交订单',
						icon: 'none'
					})
					return
				}

				//提交订单
				uni.navigateTo({
					url: '/aUserPages/vipPages/wholeWriteOrder?service_type=' + JSON.stringify(this.service_type) +
						'&total=' + this.total + '&type=0.1' + '&product_type=1'
				})
			},
			getData(e) { //获取数据
				uni.showLoading({
					title: '加载中',
					mask: true
				});
				this.$api.getbusiness({
					type: 1
				}).then(res => {
					uni.hideLoading()
					this.list = res;
					this.list.map(res => {
						res.shopNum = 0
					})
					this.msg = this.list[0]
					this.msg.shopNum = 0;
					console.log('this.serviceList', this.list);
				})
			},
			appoint(e) {
				this.appointShow = true
			},
			setText(e) {
				//点击复制
				uni.setClipboardData({
					data: '131 8901 9301',
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
						phoneNumber: '131 8901 9301' //仅为示例
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
	.number-box {

		.box-jian,
		.box-add {
			background-color: #efeff5;
			width: 80rpx;
			height: 40rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.box-input {
			background-color: #f8f8fb;

			.u-number-box__input {
				width: 50rpx;
			}
		}
	}

	.sure_buttton {
		margin-left: 40rpx;
	}

	.vip_box {
		position: relative;

		.vip_topImg {
			width: 100%;
			height: 370rpx;
		}

		.vip_tip_box {
			// position: absolute;
			// top: 270rpx;
			// left: 30rpx;
			margin-top: -75rpx;
			margin-left: 30rpx;
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
