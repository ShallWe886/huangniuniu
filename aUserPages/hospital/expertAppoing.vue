<template>
	<view class="margin_left_l padding_bottom_m">
		<view class="box_690 flex_row padding_xl">
			<image src="/static/image/docImg.png" mode="aspectFill" class="doc_img"></image>
			<view class="margin_left_l">
				<view class="font_size_title_m color_black_333 ">
					医生简介
				</view>
				<view class="flex_row flex_wrap margin_top_m">
					<view class=" remark_box font_size_text_m color_black_888">
						主任医师
					</view>
					<view class="remark_box font_size_text_m color_black_888">
						眼科
					</view>
				</view>
				<view class="font_size_text_l color_black_888 margin_top_xl">
					已挂号量：<text class="font_size_title_s color_orange margin_left_s">88</text>
				</view>
			</view>
		</view>
		<view class="box_690 padding_xl">
			<view class="font_size_title_m color_black_333 font_weight">
				医生简介
			</view>
			<view class="font_size_text_l color_black_888 margin_top_m">
				医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介
			</view>
		</view>
		<view class="box_690 padding_l_m">
			<block  v-for="(item,index) in timeList" :key="index">
				<view class="font_size_text_s color_orange margin_top_l margin_bottom_m" v-if="item.isFree ==2">
					下次放号：6月05日 13:00   数量：26
				</view>
				<view class="work_item flex_row padding_s_m margin_bottom_m">
					<view class="flex_column padding_right_m time_right">
						<view class="font_size_title_m color_orange font_weight">
							周 二
						</view>
						<view class="font_size_text_m color_black_888">
							06-02
						</view>
					</view>
					<view class="padding_l_m">
						<view class="color_black_888 font_size_text_l">
							12:00-13:00
						</view>
						<view class="font_size_text_l color_black_333 margin_top_xs">
							出诊地点：医院本部
						</view>
					</view>
					<view class="label_gray_s margin_left" v-if="item.isFree == 0">
						预约已截止
					</view>
					<view class="label_orange_s margin_left" v-if="item.isFree ==1" @click="submitOrder">
						预约
					</view>
					
					<view class="label_gray_s margin_left" v-if="item.isFree ==2">
						预约未开始
					</view>
				</view>
			</block>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				timeList:[{isFree:0},{isFree:1},{isFree:2}]
			}
		},
		methods: {
			submitOrder(e) {
				//提交订单
				uni.navigateTo({
					url: '/aUserPages/vipPages/wholeWriteOrder?service_type=5'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.doc_img {
		width: 180rpx;
		height: 200rpx;
	}

	.remark_box {
		padding: 0 15rpx;
		border-radius: 20rpx;
		background-color: #F5F5F5;
		margin-right: 10rpx;
	}
	.work_item{
		background-color: #F6F6F6;
		border-radius: 10rpx;
	}
	.time_right{
		border-right: 1rpx solid #DCDCDC;
	}
</style>
