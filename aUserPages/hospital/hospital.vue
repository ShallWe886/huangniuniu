<template>
	<view class="padding_bottom_xl" >
		<!-- #ifdef MP-WEIXIN -->
		<!-- #endif -->
		
		<view class="vip_box" v-if="detail">
			<image :src="detail.picture" class="vip_topImg"></image>
			<view class="box_690 padding_top_l padding_bottom_xl padding_left_xl padding_right_xl vip_tip_box">
				<view class="font_weight color_black_333 font_size_title_l">
					{{detail.name}}
				</view>
				<view class="flex_row margin_top_m">
					<view class="lable_box">
						{{levelMap[detail.level].name}}
					</view>
					<view class="lable_box margin_left_s">
						{{typeMap[detail.type].name}}
					</view>
				</view>
				<view class="font_size_text_xl color_black_999 margin_top_m">
					咨询电话：{{detail.telephone}}
				</view>
				<view class="font_size_text_xl color_black_999 margin_top_s">
					医院位置：{{detail.address}}
				</view>
			</view>
		</view>
		<view class="padding_0_l " style="margin-top: 40px;">
			<view class="flex_row justify_around border_bottom">
				<view class="tab_box" :class="{'active':tabId == 0}" @click="selectTab(0)">
					医院介绍
				</view>
				<view class="tab_box" :class="{'active':tabId == 1}" @click="selectTab(1)">
					特色科室
				</view>
			</view>
			<swiper :indicator-dots="false" style="height: 600rpx;" :autoplay="false" :current="tabId"
				@change='change' @transition="selectSwiper">
				<swiper-item>
					<view class="box_690 padding_l font_size_text_l color_black_333">
						<rich-text :nodes="detail.description"></rich-text>
					</view>
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y="true" style="height: 600rpx;" >
						<view class="font_size_text_l color_black_999 text_align_center margin_top_l" v-if="detail.department.length == 0">
							暂无数据
						</view>
						<view v-for="(item,index) in detail.department" :key="index">
							<view class="box_690 padding_l font_size_title_m color_black_333">
								{{item.department_name}}
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import {
		levelMap,
		typeMap
	} from "@/static/js/dictionaries.js"
	import Load from "@/static/utils/load.js"
	export default {
		data() {
			return {
				levelMap,
				typeMap,
				tabId: 0,
				docList: [{}, {}, {}],
				info: '',
				detail: {},
				hospitalId: ''
			}
		},
		onLoad(options) {
			this.hospitalId = options.hospitalId
			this.getData()
			
		},
		methods: {
			getData(e) {
				// #ifdef MP-WEIXIN
				this.info = new Load({
					api: this.$api.getHospitalDetail,
					queryParams: {
						hospital_id: this.hospitalId
					},
					load: {
						mode: "info"
					}
				})
				this.info.getInfo().then(obj=>{
					uni.setNavigationBarTitle({
						title: this.info.form.name
					})
				})
				// #endif
				
					this.$api.getHospitalDetail({hospital_id: this.hospitalId}).then(res => {
						this.detail = res;
						uni.setNavigationBarTitle({
							title: this.detail.name
						})
					})

			},
			getDepartment(e) {
				this.$api.getDepartment({}).then(res => {

				})
			},
			selectTab(type) {
				console.log(type)
				this.tabId = type
			},
			change(e) {
				this.tabId = e.detail.current
			},
			selectSwiper(e) {
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
			margin-top: -88rpx;
			margin-left: 30rpx;
			// position: absolute;
			// top: 270rpx;
			// left: 30rpx;

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
