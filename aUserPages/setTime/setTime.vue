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
				checkBox: false,
				jlFlag: true
			}
		},
		methods: {
			selectCheck(e) {
				console.log('selectCheck', e, this.dayList);
			},
			selectAll(e) {
				console.log('eee', e);
				if (!this.jlFlag) {
					return
				}
				this.jlFlag = false
				setTimeout(() => {
					this.dayList.map(res => {
						res.check = !res.check;
					})
					this.checkBox = !this.checkBox
					this.jlFlag = true
				}, 300)
				// 一定时间内，只执行一次有效事件
			},
		}
	}
</script>

<style lang="scss" scoped>
	.time_box {
		width: 610rpx;
		height: 230rpx;
		border-radius: 10rpx;
		background: #F8F8F8;
	}

	.time_item {
		width: 120rpx;
		margin-right: 50rpx;

		&:nth-child(4n) {
			margin-right: 0;
		}
	}
</style>
