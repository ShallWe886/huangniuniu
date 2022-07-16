<template>
	<view class="flex_column">
		<view class="box_690 padding_left_l padding_right_l padding_bottom_l">
			<view class="flex_row padding_l_0 border_bottom">
				<view class="font_size_text_xl color_black_333 font_weight">
					收货人
				</view>
				<view class="margin_left flex_row">
					<input type="text" class="text_align_right margin_right_s" v-model="addressInfo.name"
						placeholder="请输入收货人" placeholder-class="font_size_text_l">
				</view>
			</view>
			<view class="flex_row padding_l_0 border_bottom">
				<view class="font_size_text_xl color_black_333 font_weight">
					手机号码
				</view>
				<view class="margin_left flex_row">
					<input type="text" class="text_align_right margin_right_s" v-model="addressInfo.phone"
						placeholder="请输入手机号码" placeholder-class="font_size_text_l">
				</view>
			</view>
			<view class="flex_row padding_l_0 border_bottom">
				<view class="font_size_text_xl color_black_333 font_weight">
					所在地区
				</view>
				<view class="margin_left flex_row font_size_text_l color_black_888">
					请选择
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class=" padding_l_0 ">
				<view class="font_size_text_xl color_black_333 font_weight">
					详细地址
				</view>
				<textarea v-model="addressInfo.detail" placeholder="道路、门牌号、小区、楼栋号、单元室等" cols="30" rows="8"
					class="area_box margin_top_m padding_m" placeholder-style="color: #BEBEBE;font-size: 28rpx;"></textarea>

			</view>
			<view class="flex_row padding_bottom_m">
				<view class="font_size_text_xl color_black_333 font_weight">
					设为默认地址
				</view>
				<view class="margin_left">
					<u-switch v-model="addressInfo.default" size="50"  activeColor="#FF8245" ></u-switch>
				</view>
			</view>
		</view>
		<view class="sure_buttton " style="margin-top: 120rpx;">
			确认添加
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressInfo: {
					name: '',
					phone: '',
					area: '',
					detail: '',
					default:true
				}
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.area_box {
		border: 1rpx #E6E6E6 solid;
		border-radius: 10rpx;
		height: 190rpx;
	}
</style>
