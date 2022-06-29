<template>
	<view class="flex_column">
		<view class="box_690 padding_l">
			<view class="flex_row padding_l_0">
				<view class="font_size_title_s font_weight color_black_333">
					消息推送
				</view>
				<view class="margin_left">
					<u-switch v-model="isSure" size="50" activeColor="#FF8245"></u-switch>
				</view>
			</view>
			<view class="flex_row">
				<view class="font_size_title_s color_black_333 font_weight">
					推送时间
				</view>
				<view class="margin_left">
					<label>
						<checkbox color="#FF6437" style="transform:scale(0.7)" />全部
					</label>
				</view>
			</view>
			<view class="flex_row">
				<checkbox-group>
					<block v-for="(item,index) in dayList" :key="index">
						<label class="font_size_text_l color_black_999 margin_right_xxl justify_around">
							<checkbox value="cb" :checked="item.check" color="#FF6437" style="transform:scale(0.7)" />{{item.label}}
						</label>
					</block>
					
				</checkbox-group>
			</view>
			<view class="time_box flex_row margin_top_xl justify_center">
				<view class="font_size_title_s color_black_333 font_weight">
					时间
				</view>
				<view class="font_size_title_s color_black_333 margin_left_xl">
					00：00
				</view>
				<view class="margin_left_l">
					<u-icon name="clock" size="40" ></u-icon>
				</view>
				<view class="font_size_title_s color_black_333 margin_left_l">
					至
				</view>
				<view class="font_size_title_s color_black_333 margin_left_xl">
					23：59
				</view>
				<view class="margin_left_l">
					<u-icon name="clock" size="40" ></u-icon>
				</view>
			</view>
		</view>
		<view class="sure_buttton margin_top_xxl">
			确认
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isSure: true,
				dayList: [{
						label: '周一',
						check: false
					},
					{
						label: '周二',
						check: false
					},
					{
						label: '周三',
						check: false
					},
					{
						label: '周四',
						check: false
					},
					{
						label: '周五',
						check: false
					},
					{
						label: '周六',
						check: false
					},
					{
						label: '周日',
						check: false
					}
				],

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
.time_box{
	width: 610rpx;
	height: 230rpx;
	border-radius: 10rpx;
	background: #F8F8F8;
}
</style>
