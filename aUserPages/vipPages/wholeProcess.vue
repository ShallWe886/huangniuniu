<template>
	<view class="padding_bottom_xl">
		<view class="vip_box">
			<image :src="imageUrl+'/vipTopImg.png'" class="vip_topImg"></image>
			<view class="box_690 vip_tip_box" style="padding: 30rpx 30rpx;">
				<view class=" flex_column">
					<view class="service_box " style="width: 365rpx !important">
						<view
							style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;left: 10px;top: 13px;">
						</view>
						<view class="font_size_title_s color_orange">
							全程就医陪诊
						</view>
						<view
							style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;right: 10px;top: 13px;">
						</view>
					</view>
				</view>
				<view class="font_size_text_xl color_black_333 margin_top_m" style="text-align:justify;">
					麦咚顾问提前预约客户明确见面时间地点，并在院内就医过程中为您提供跑腿、取号、缴费、取药等服务，您只需要在休息区静候就诊。
				</view>
			</view>
		</view>
		<view class="padding_0_l " style="margin-top: 206rpx;margin-bottom: 80rpx;">
			<view class="box_690 padding_xl_l flex_column ">
				<view class="service_box ">
					<view
						style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;left: 10px;top: 13px;">
					</view>
					<view class="font_size_title_s color_orange font_weight">
						适用人群
					</view>
					<view
						style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;right: 10px;top: 13px;">
					</view>
				</view>
				<view class="font_size_text_xl color_black_333 margin_top_m">
					普通人/儿童/老年人/孕妈/特殊人群
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
					<view class="font_size_title_s color_orange font_weight">
						收费标准
					</view>
					<view
						style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;right: 10px;top: 13px;">
					</view>
				</view>
				<radio-group @change="radioChange">
					<view class="service_item margin_top_m" style="display: flex;justify-content: space-between;" v-for="(item, index) in list" :key="index" @click.stop="selectType(item)">
						<view class="check-serve" >
							<radio color="#FF6437" style="transform:scale(0.7)" :value="item.id" :checked="index === current" />
						</view>
						<view class="">
							<text class="font_size_text_xl color_black_888">{{item.name}} </text>
						</view>
						<view class="">
							<text class="font_size_text_xl color_orange margin_left_xl"> ¥{{item.money}}</text>
							<text class="font_size_text_m color_orange">/次</text>
						</view>
					</view>
				</radio-group>
				<!-- <block v-for="(items,indexs) in item.list">
					<view class="service_item margin_top_m">
						<text class="font_size_text_xl color_black_888">基础服务包 </text>
						<text class="font_size_text_xl color_orange margin_left_xl"> ¥999</text>
						<text class="font_size_text_m color_orange">.00起</text>
					</view>
				</block> -->
			</view>
		</view>
		<view class="sure_buttton margin_top_xxl" style="position: fixed; bottom: 40rpx" @click="submitOrder">
			提交订单
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				money:0,
				list: [],
				service_type: 4,
				total: 0,
			}
		},
		onLoad(e) {
			this.getData()
		},
		methods: {
			selectType(item) {
				console.log('@@', item);
				this.total = item.money
			},
			radioChange(e) {
				this.service_type = e.detail.value 
				console.log('eeee', e, this.service_type);
			},
			getData(e){
				uni.showLoading({title: '加载中',mask:true});
				this.$api.getbusiness({type:2}).then(res=>{
					uni.hideLoading()
					this.money = Number(res[0].money).toFixed(2)
					this.list = res;
					this.total = this.list[0].money
				})
			},
			submitOrder(e) {
				//提交订单
				uni.navigateTo({
					url: '/aUserPages/vipPages/wholeWriteOrder?service_type='+this.service_type+'&total='+this.total+'&type=0.2'
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
		// width: 620rpx;
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
