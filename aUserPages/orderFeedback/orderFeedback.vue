<template>
	<view class="padding_bottom_m">
		<view class="box_690 padding_l_0 margin_left_l" style="display: flex; flex-direction: row;" v-for="(item,index) in informList" :key="index">
			<view class="gray_box">
			</view>
			<view class="margin_0_l width_all">
				<view class="flex_row margin_top_m">
					<view class="font_size_text_m color_black_888">
						{{item.create_time}}
					</view>
				</view>
				<view class="flex_row margin_top_m font_size_text_m color_black_888">
					{{item.type == 1 ? '用户' : '麦咚顾问'}}：
				</view>
				<view class="font_size_text_l margin_top_m" >
					<text>{{item.content}}</text>
				</view>
				<view class="font_size_title_l color_black_333 font_weight margin_top_m back_img">
					<image v-for="(items, index) in item.list_img.split(',')" :src="items" mode="aspectFill" class="order_img margin_right_l"></image>
				</view>
				<view v-if="item.status != 1 && ((type == 0 && item.type ==2) || type == 1 && item.type ==1)"  class="">
					<view @click="openEditBack1(item)" class="flex_row width_all order_input_box  margin_top_m " style="padding: unset;width: unset;">
						<u-icon name="edit-pen-fill" size="40" color="#999999" customStyle="padding-right: 10rpx"></u-icon>
						<input type="text" disabled style="width: 442rpx;" placeholder="请输入留言内容" v-model="keyWord"
							placeholder-class="font_size_text_m color_black_999">
					</view>
				</view>
				<view v-if="item.status == 1" class="flex_row margin_top_m font_size_text_m color_black_888">
					{{item.type == 2 ? '用户' : '麦咚顾问'}}：
				</view>
				<view v-if="item.status == 1" class="font_size_text_l margin_top_m" >
					<text>{{item.replay}}</text>
				</view>
				<view v-if="item.status == 1 && item.replay_img" class="font_size_title_l color_black_333 font_weight margin_top_m back_img">
					<image v-for="(items, index) in item.replay_img.split(',')" :src="items" mode="aspectFill" class="order_img margin_right_l"></image>
				</view>
			</view>
		</view>
		<view class="open_edit">
			<view @click="openEditBack" class="flex_row width_all order_input_box margin_left_l   ">
				<u-icon name="edit-pen-fill" size="40" color="#999999" customStyle="padding-right: 10rpx"></u-icon>
				<input type="text" disabled style="width: 600rpx;" placeholder="请输入留言内容" v-model="keyWord"
					placeholder-class="font_size_text_m color_black_999">
			</view>
			<!-- <view class="sure_buttton margin_top_xxl" @click="submitTrue">
				确认提交
			</view> -->
		</view>
	</view>
</template>

<script>
	import search from '@/components/search.vue'
	export default {
		components: {
			search
		},
		data() {
			return {
				informList:[],
				order_id: '',
				type: 0, //0-用户 1-陪护
				service_id: 0,
			}
		},
		onLoad(options) {
			this.order_id = options.order_id
			this.service_id = options.service_id
			this.type = options.type
		},
		onShow(){
			this.getData();
		},
		methods: {
			getData() {
				let api = {0: 'feedbackList', 1: 'feedbackListEscort'}

				this.$api[api[this.type]]({
					order_id: this.order_id,
					service_id: this.service_id,
				}).then(res => {
					this.informList = res
					// this.page += 1
					console.log('informList', res,this.informList);
				})
			},
			openEditBack1(item) {
				uni.navigateTo({
					url:'/aUserPages/orderFeedback/editFeedback?order_id='+this.order_id+'&service_id='+this.service_id+'&type='+this.type+'&msg_id='+item.id
				})
			},
			openEditBack() {
				uni.navigateTo({
					url:'/aUserPages/orderFeedback/editFeedback?order_id='+this.order_id+'&service_id='+this.service_id+'&type='+this.type
				})
			},
			lookDetail(e){
				uni.navigateTo({
					url:"/accompanyPages/cancelDetail/cancelDetail"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.back_img {
		display: flex;
		flex-direction: row;
	}
	.order_img {
		width: 70rpx;
		height: 70rpx;
	}
	.order_input_box {
		width: 690rpx;
		border-radius: 30rpx;
		background-color: #F5F5F5;
		height: 80rpx;
		box-sizing: border-box;
		padding: 0 25rpx ;
	}
	.open_edit {
		display: flex;
		justify-content: center;
		position: fixed;
		bottom: 26rpx;
		left: 0;
	}
.gray_box{
	width: 14rpx;
	height: 30rpx;
	background: #E6E6E6;
}
.dot_box{
	width: 10rpx;
	height: 10rpx;
	background: linear-gradient(135deg, #FF6437 0%, #FF9B51 100%);
	border-radius: 50%;
}
.con_label{
	padding: 5rpx 20rpx;
	border-radius: 20rpx;
	background: #FFF0E5;
	font-size: 22rpx;
	color: #FF6437;
}
</style>
