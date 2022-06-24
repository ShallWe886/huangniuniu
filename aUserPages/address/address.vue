<template>
	<view>
		<view class="flex_row padding_m_l border_bottom">
			<view class="flex_shrink flex_row">
				<u-icon name="map" size="40" color="#333333"></u-icon>
				<view class="font_size_title_s color_black_333 font_weight margin_left_xs margin_right_s">
					深圳市
				</view>
			</view>

			<u-icon name="arrow-down-fill" size="30" color="#333333"></u-icon>
			<view class="margin_left_l width_all">
				<u-search placeholder="请输入服务城市" v-model="keyword" :show-action="false" searchIconSize="50" height="60">
				</u-search>
			</view>
		</view>
		<view class="flex_row padding_m_l">
			<view class="font_size_title_l color_black_333">
				深圳市
			</view>
			<view class="margin_left flex_row">
				<image src="/static/image/addr.png" mode="aspectFill" class="addr_img"></image>
				<view class="color_orange font_size_title_s margin_left_m">
					重新定位
				</view>
			</view>
		</view>
		<view class="flex_row scroll_height">
			<scroll-view scroll-y="true" class="scroll_height city_w">
				<view v-for="(item,index) in cityList">
					<view class="font_size_title_s color_black_333 city_item" :class="{'active':cityId == index}"
						:key="index">{{item.name}}</view>
				</view>
			</scroll-view>
			<scroll-view scroll-y="true" class="scroll_height city_w">
				<view v-for="(item,index) in countryList">
					<view class="font_size_title_s color_black_333 country_item" :key="index">{{item.name}}</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '',
				cityList: [{
						"name": "城市"
					},
					{
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					},
				],
				countryList: [{
						"name": "城市"
					},
					{
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					}, {
						"name": "城市"
					},
				],
				cityId: 0
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.page {
		background-color: #ffffff;
		min-height: 100vh;
		width: 750rpx;
	}

	.addr_img {
		width: 34rpx;
		height: 34rpx;
	}

	.scroll_height {
		height: calc(100vh - 180rpx);
	}

	.city_w {
		&:nth-child(1) {
			width: 280rpx;
			background-color: #EAEAEA;

			.city_item {
				width: 280rpx;
				height: 90rpx;
				line-height: 90rpx;
				text-align: center;

				&.active {
					background-color: #FAFAFA;
				}
			}
		}

		&:nth-child(2) {
			width: 470rpx;

			.country_item {
				width: 470rpx;
				height: 90rpx;
				line-height: 90rpx;
				text-align: center;
			}

		}




	}
</style>
