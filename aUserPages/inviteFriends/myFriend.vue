<template>
	<view>
		<search></search>
		<view class="box_690 margin_bottom_m padding_0_l margin_left_l">
			<view class="flex_row padding_l_0 border_bottom" v-for="(item,index) in friendList" :key="index">
				<image src="" mode="aspectFill" class="avater_img flex_shrink"></image>
				<view class="margin_left_m width_all">
					<view class="flex_row ">
						<view class="font_size_title_s color_black_333 font_weight">
							埃米
						</view>
						<view class="margin_left font_size_text_m color_black_888">
							2022-05-12  11:30:40
						</view>
					</view>
					
					<view class="font_size_text_m color_black_888 margin_top_m">
						Amy
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	import search from '@/components/search.vue'
	export default {
		components:{
			search
		},
		data() {
			return {
				friendList:[{},{},{},{}]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.avater_img{
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		background: #F5F5F5;
	}
</style>
