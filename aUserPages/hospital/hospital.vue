<template>
	<view class="padding_bottom_xl" v-if="hospitalDetail">
		<view class="vip_box">
			<image :src="hospitalDetail.picture" class="vip_topImg"></image>
			<view class="box_690 padding_top_l padding_bottom_xl padding_left_xl padding_right_xl vip_tip_box">
				<view class="font_weight color_black_333 font_size_title_l">
					{{hospitalDetail.name}}
				</view>
				<view class="flex_row margin_top_m">
					<view class="lable_box">
						{{levelMap[hospitalDetail.level].name}}
					</view>
					<view class="lable_box margin_left_s">
						{{typeMap[hospitalDetail.type].name}}
					</view>
				</view>
				<view class="font_size_text_xl color_black_999 margin_top_m">
					咨询电话：{{hospitalDetail.telephone}}
				</view>
				<view class="font_size_text_xl color_black_999 margin_top_s">
					医院位置：{{hospitalDetail.address}}
				</view>
			</view>
		</view>
		<view class="padding_0_l " style="margin-top: 120px;">
			<view class="flex_row justify_around border_bottom">
				<view class="tab_box" :class="{'active':tabId == 0}" @click="selectTab(0)">
					医院介绍
				</view>
				<view class="tab_box" :class="{'active':tabId == 1}" @click="selectTab(1)">
					优势科室
				</view>
			</view>
			<swiper :indicator-dots="false" style="height: 600rpx;" :autoplay="false" :current="tabId" @change='change' @transition="selectSwiper">
				<swiper-item >
					<view class="box_690 padding_l font_size_text_l color_black_333">
						<rich-text :nodes="hospitalDetail.description"></rich-text>
					</view>
				</swiper-item>
				<swiper-item >
					<scroll-view scroll-y="true" style="height: 600rpx;">
						<view v-for="(item,index) in docList" :key="index">
								<view class="box_690 padding_l flex_row" :key="index">
									<image src="/static/image/docImg.png" mode="aspectFill" class="doc_img flex_shrink"></image>
									<view class=" margin_left_l">
										<view class="font_size_title_m color_black_333">
											欧阳华夏
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
							</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		
	</view>
</template>

<script>
	import {levelMap,typeMap} from "@/static/js/dictionaries.js"
	export default {
		data() {
			return {
				levelMap,
				typeMap,
				tabId: 0,
				docList:[{},{},{}],
				hospitalDetail:null
			}
		},
		onLoad(options) {
			// this.hospitalDetail = uni.getStorageSync('hospitalDetail')
			uni.setNavigationBarTitle({
				title: this.hospitalDetail.name
			})
		},
		methods: {
			getDepartment(e){
				this.$api.getDepartment({}).then(res=>{
					
				})
			},
			selectTab(type){
				console.log(type)
				this.tabId = type
			},
			change(e){
				this.tabId = e.detail.current
			},
			selectSwiper(e){
				// console.log(1,e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.vip_box {
		position: relative;

		.vip_topImg {
			width: 100%;
			height: 370rpx;
		}

		.vip_tip_box {
			position: absolute;
			top: 270rpx;
			left: 30rpx;

			.lable_box {
				font-size: 26rpx;
				line-height: 46rpx;
				border-radius: 23px;
				padding: 0 30rpx;

				&:nth-child(1) {
					background: RGBA(241, 238, 255, 1);
					// opacity: 0.4;
					color: #403AE5;
				}

				&:nth-child(2) {
					background: RGBA(255, 244, 237, 1);
					color: #FF6437;
				}
			}
		}
	}

	.tab_box {
		font-size: 32rpx;
		color: #999999;
		padding-bottom: 10rpx;
		border-bottom: 6rpx #fafafa solid;

		&.active {
			color: #FF6437;
			border-bottom: 6rpx #FF6437 solid;
		}
	}
	.doc_img{
		width: 180rpx;
		height: 200rpx;
		background-color: #999999;
		border-radius: 10rpx;
	}
	.remark_box{
		padding: 10rpx 20rpx;
		border-radius: 10px;
		background-color: #F5F5F5;
		margin-right: 10rpx;
		
	}
</style>
