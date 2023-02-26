<template>
	<view class="padding_bottom_m flex_column">
		<view class="box_690 padding_0_l">
			<view class="margin_top_l text_align_center font_size_text_l color_black_999 margin_bottom_l" v-if="list.length == 0">
				暂无交易记录
			</view>
			<view class="flex_row border_bottom padding_l_0" v-for="(item,index) in list" :key="index">
				<view class="">
					<view class="font_size_title_s color_black_333 font_weight">
						积分
					</view>
					<view class="font_size_text_m color_black_999 margin_top_s">
						{{item.create_time || ''}} 
					</view>
				</view>
				<view class="margin_left color_orange font_weight font_size_title_l" >
					{{item.integral}}
				</view>
				<!-- <view class="margin_left color_orange font_weight font_size_title_l" v-if="selectId == 1">
					-2222
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				page: 1,
				loading: false
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.getfresh();
		},
		onPullDownRefresh: function() {
			this.fresh();
		},
		onReachBottom() {
			if (this.loading) {
				this.getData()
			}
		},
		methods: {
			fresh(e) {
				uni.showNavigationBarLoading();
				this.getfresh()
				uni.hideNavigationBarLoading();
				uni.stopPullDownRefresh();
			},
			getfresh(e) {
				this.orderList = []
				this.page = 1
				this.loading = true;
				this.getData()
			},
			getData() {
				this.$api.intergalLog({pageSize: 10,page: this.page}).then(res=>{
					this.list = this.list.concat(res.list)
					this.page += 1
				})
			}
		}
	}
</script>

<style>

</style>
