<template>
	<view>
		<!-- <zq-load v-model="info.load"> -->
			<block v-if="info">
				<view class="box_690 padding_l flex_row" v-for="(item,index) in info" :key="index">
					<image src="/static/image/docImg.png" mode="aspectFill" class="doc_img flex_shrink">
					</image>
					<view class=" margin_left_l">
						<view class="font_size_title_m color_black_333">
							{{item.department_name}}
						</view>
						<view class="font_size_text_m color_black_999_light flex_row flex_wrap margin_top_s">
							<view class="remark_box">
								主任医师
							</view>
							<view class="remark_box">
								主任医师
							</view>
						</view>
						<view class="font_size_text_l color_black_999 margin_top_s text_overflow_2">
							简介：简介简介简介简介简介简介简介简介简介简介简介简介简介…
						</view>
					</view>
				
				</view>
			</block>
		</zq-load>
	
	</view>
</template>

<script>
	import Load from "@/static/utils/load.js"
	export default {
		data() {
			return {
				info:''
			}
		},
		onLoad() {
			this.getData()
		},
		onPageScroll(event) {
			this.info.scrollLazy(event.scrollTop)
		},
		methods: {
			getData(e){
				// this.info = new Load({
				// 	api:this.$api.getdoctorsList,
				// 	lazy:{subtractHeight:0,itemHeight:250},
				// 	queryParams:{}
				// })
				// this.info.getList()
				this.$api.getdoctorsList({}).then(res => {
					this.info = res;
					
				})
			}
		}
	}
</script>

<style lang="scss">
.doc_img {
		width: 180rpx;
		height: 200rpx;
		background-color: #999999;
		border-radius: 10rpx;
	}

	.remark_box {
		padding: 10rpx 20rpx;
		border-radius: 10px;
		background-color: #F5F5F5;
		margin-right: 10rpx;

	}
</style>
