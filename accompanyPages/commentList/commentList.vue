<template>
	<view class="padding_bottom_m">
		<!-- <search></search> -->
		<view class="box_690 padding_l margin_left_l" v-for="(item,index) in commetList" :key="index">
			<view class="" style="display: flex;flex-direction: row;">
				<image src="/static/image/comment_avator.png" mode="aspectFill" class="comment_avator flex_shrink"></image>
				<view class="margin_left_s width_all">
					<view class="flex_row">
						<view class="font_size_text_l flex_row">
							<view style="color: #BEBEBE;">订单时间：</view><view class="color_black_888">{{item.create_time}}</view>
						</view>
						<view class="margin_left flex_shrink">
							<rate :value="item.score"></rate>
						</view>
					</view>
					<view class="flex_row margin_top_m">
						<view class="accept_item_label margin_right_s " style="overflow: hidden;text-overflow: ellipsis;white-space:nowrap;">
							{{item.hospital_name || ''}}
						</view>
						<view class="accept_item_label margin_right_s" style="overflow: hidden;text-overflow: ellipsis;white-space:nowrap;">
							{{item.depart_name || ''}}
						</view>
						<view class="accept_item_label margin_right_s" style="overflow: hidden;text-overflow: ellipsis;white-space:nowrap;">
							{{item.project_name || ''}}
						</view>
					</view>
					<view class="flex_row margin_top_m">
						<view class="font_weight color_black_333 font_size_title_m">
							¥{{item.total}}
						</view>
						<view class="time_label margin_left_s">
							{{item.create_time}}
						</view>
					</view>
					<view class=" color_black_333 font_size_text_m margin_top_s" style="line-height: 26rpx;">
						{{item.patient_name}}<text class="margin_left_l">{{item.phone.substring(0, 3) + '****' + item.phone.substring(7)}}</text>
					</view>
					<view class="font_size_text_l color_black_333 margin_top_s">
						收入：¥{{item.total}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import rate from "@/components/rate/rate.vue"
	import search from '@/components/search.vue'
	export default {
		components: {
			search,
			rate
		},
		data() {
			return {
				commetList:[],
				pageSize: 6,
				page: 1
			}
		},
		onShow() {
			// if(getApp().globalData.upDate.isUpdateOrder){
			// 	this.getfresh();
			// 	getApp().globalData.upDate.isUpdateOrder = false
			// }
			this.getfresh();
			
		},
		onPullDownRefresh: function() {
			this.fresh();
		},
		onReachBottom() {
			if (this.loading) {
				this.getList()
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
				uni.showLoading({title: '加载中',mask:true});
				this.commetList = []
				this.page = 1
				this.loading = true;
				this.getList()
			},
			getList(){
				this.$api.escortPing({
					pageSize: 4,
					page: this.page,
				}).then(res => {
					uni.hideLoading()
					this.loading = res.list.length == 4
					this.commetList = this.commetList.concat(res.list)
					this.page += 1
					console.log('orderList', this.commetList);
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.comment_avator{width: 70rpx;
	height: 70rpx;
	border-radius: 50%;
	background-color: #888888;}
	.accept_item_label {
		height: 38rpx;
		line-height: 38rpx;
		padding: 0 20rpx;
		border-radius: 20rpx;
		background: #F5F5F5;
		font-size: 24rpx;
		color: #888888;

		&:nth-child(3) {
			background: #FFF0E5;
			color: #FF6437;
		}
	}
	.time_label{
		width: 254rpx;
		height: 38rpx;
		background: #F5F5F5;
		border-radius: 20rpx;
		font-size: 22rpx;
		text-align: center;
		color: #888888;
		line-height: 38rpx;
	}
</style>
