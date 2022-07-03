<template>
	<view class="padding_bottom_xl">
		<view class="vip_box">
			<image  :src="imageUrl+'/vipTopImg.png'" class="vip_topImg"></image>
			<view class="box_690 padding_l_xl vip_tip_box">
				<view class="font_weight color_black_333 font_size_title_l">
					一对一专业陪诊
				</view>
				<view class="font_size_text_xl color_black_999 margin_top_s">
					全程就医陪同服务，手气代办服务
				</view>
			</view>
		</view>
		<view class="padding_0_l " style="margin-top: 100rpx;">
			<view
				class="box_690 padding_xl_l flex_column flex_center"
				v-for="(item,index) in serviceList" :key="index">
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
						<text class="font_size_text_xl color_black_888 margin_right_xl" v-if="item.showTitle">{{items.title}} </text>
						<text class="font_size_text_xl color_orange  font_weight"> ¥{{items.money}}</text>
						<text class="font_size_text_m color_orange font_weight">.00起</text>
					</view>
				</block>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				serviceList: [{
						name: "门诊服务",
						showTitle:true,
						list: [{title:"基础服务包",money:599}, {title:"优享服务包",money:999},{title:"尊享服务包",money:1299}]
					},
					{
						name: "住院服务",
						showTitle:true,
						list: [{title:"基础服务包",money:599}, {title:"优享服务包",money:999},{title:"尊享服务包",money:1299}]
					},
					{
						name: "VIP服务",
						showTitle:false,
						list: [{title:"",money:599}]
					}
				]
			}
		},
		methods: {

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
</style>
