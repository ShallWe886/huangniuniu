<template>
	<view class="flex_column">
		<view class="box_690 padding_0_l">
			<view class="flex_row padding_l_0 border_bottom">
				<view class="font_size_title_s font_weight color_black_333">
					消息推送
				</view>
				<view class="margin_left">
					<u-switch v-model="isSure" size="50" activeColor="#FF8245"></u-switch>
				</view>
			</view>
			<view class="flex_row padding_l_0">
				<view class="font_size_title_s color_black_333 font_weight">
					推送时间
				</view>
				<view class="margin_left">
					<label>
						<checkbox color="#FF6437" style="transform:scale(0.7)" />全选
					</label>
				</view>
			</view>
			<view class="flex_row">
				<checkbox-group class="flex_row flex_wrap">
					<block v-for="(item,index) in dayList" :key="index">
						<view class="font_size_text_l color_black_999 flex_row margin_bottom_l time_item" >
							<checkbox value="cb" :checked="item.check" color="#FF6437" style="transform:scale(0.6)" />{{item.label}}
						</view>
						
					</block>
					
				</checkbox-group>
			</view>
			<view class="time_box  margin_top_xl justify_center flex_row " style="margin-bottom: 50rpx;" >
				<view class="font_size_title_s color_black_333 font_weight padding_bottom_s">
					时间
				</view>
				<view class="flex_row padding_bottom_s margin_left_xl" style="border-bottom: 1rpx solid #DCDCDC;">
					<view class="font_size_title_s color_black_333 ">
						00：00
					</view>
					<view class="margin_left_l">
						<u-icon name="clock" size="40" ></u-icon>
					</view>
				</view>
				
				<view class="font_size_title_s color_black_333 margin_left_xl">
					至
				</view>
				<view class="flex_row  padding_bottom_s margin_left_xl"  style="border-bottom: 1rpx solid #DCDCDC;">
					<view class="font_size_title_s color_black_333 ">
						23：59
					</view>
					<view class="margin_left_l">
						<u-icon name="clock" size="40" ></u-icon>
					</view>
				</view>
				
			</view>
		</view>
		<view class="sure_buttton_letter margin_top_xxl">
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
.time_item{
	width: 120rpx;
	margin-right: 50rpx;
	&:nth-child(4n){
		margin-right: 0;
	}
}
</style>
