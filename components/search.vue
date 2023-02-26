<template>
	<view>
		<view  style="background-color: #ffffff;padding: 15rpx 0;height: 90rpx;box-sizing: border-box;">
			<view @click="searchKeyword" class="flex_row width_all order_input_box margin_left_l   ">
				<u-icon name="search" size="40" color="#999999" customStyle="padding-right: 10rpx"></u-icon>
				<input type="text" @confirm="searchKeywordAllways" style="width: 600rpx;" placeholder="请输入搜索内容" v-model="keyWord"
					placeholder-class="font_size_text_m color_black_999">
				<!-- <view>
					<u-icon name="mic" size="30" color="#999999"></u-icon>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "search",
		props:{
			// keyWord:{
			// 	type:String,
			// 	default:''
			// }
		},
		data() {
			return {
				keyWord: ''
			};
		},
		methods: {
			searchKeyword(){
				console.log('keyword', this.keyWord);
				if (typeof this.keyWord == 'string' && this.keyWord.length > 0) {
				        this.$emit("searchData", this.keyWord)
					}
			},
			searchKeywordAllways(){
				console.log('keyword', this.keyWord);
				this.$emit("searchData", this.keyWord)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order_input_box {
		width: 690rpx;
		border-radius: 30rpx;
		background-color: #F5F5F5;
		height: 60rpx;
		box-sizing: border-box;
		padding: 0 25rpx ;
	}
</style>
