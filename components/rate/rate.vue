<template>
	<view>
		<image src="/static/image/star01.png" mode="aspectFill" class="rate_img" v-for="item in value"></image>
		
		<image src="/static/image/star02.png" mode="aspectFill" class="rate_img" v-if="num >= 1" v-for="item in num"></image>
		
	</view>
</template>

<script>
	export default {
		name:"rate",
		props:{
			value:{
				type:Number,
				default:0
			}
		},
		
		data() {
			return {
				num:0,
				count:5
			};
		},
		created() {
			this.num = this.count - this.value
		}
	}
</script>

<style lang="scss" scoped>
.rate_img{
	width: 28rpx;
	height: 27rpx;
	margin-left: 5rpx;
}
</style>