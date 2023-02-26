<template>
	<view class="flex_column padding_bottom_m " :class="{popupShow:hospitalShow}">
		<zq-load v-model="info.load">
			<view class="box_690 padding_0_l" v-if="info.form">
				<view v-if="info.form.order_info.record_info.hospital_name" class="flex_row border_bottom padding_l_0" >
					<view class="font_size_text_xl color_black_333 font_weight">
						医院
					</view>
					<view class="margin_left color_black_888 font_size_text_l">
						{{info.form.order_info.record_info.hospital_name}}
					</view>
				</view>
				<view class="flex_row border_bottom padding_l_0" >
					<view class="font_size_text_xl color_black_333 font_weight">
						时间
					</view>
					<view class="margin_left color_black_888 font_size_text_l">
						{{info.form.order_info.record_info.service_time}}
					</view>
				</view>
				<!-- <view class="flex_row border_bottom padding_l_0" >
					<view class="font_size_text_xl color_black_333 font_weight">
						送取报告凭证
					</view>
					<view class="margin_left color_black_888 font_size_text_l">
						{{info.form.order_info.record_info.voucher}}
					</view>
				</view>
				<view class="flex_row border_bottom padding_l_0" >
					<view class="font_size_text_xl color_black_333 font_weight">
						代办人
					</view>
					<view class="margin_left color_black_888 font_size_text_l">
						{{info.form.order_info.record_info.attendant_name}}
					</view>
				</view> -->
				<view class="flex_row border_bottom padding_l_0" >
					<view class="font_size_text_xl color_black_333 font_weight">
						退款金额
					</view>
					<view class="margin_left color_black_888 font_size_text_l">
						{{info.form.order_info.total}}
					</view>
				</view>
				<view class="flex_row border_bottom padding_l_0"  @click="hospitalShow = true">
					<view class="font_size_text_xl color_black_333 font_weight">
						退款原因
					</view>
					<view class="margin_left color_black_888 font_size_text_l flex_row" style="display: flex;">
						<text v-if="!refundInfo.reason">选择退款原因</text>
						<text v-else>{{refundInfo.reason}}</text>
						<u-icon name="arrow-right" size="30"></u-icon>
						<!-- <input type="text" v-model="refundInfo.reason" placeholder="请填写退款原因"> -->
					</view>
				</view>
				<view class=" padding_l_0 " >
					<view class="font_size_text_xl color_black_333 font_weight">
						退款说明
					</view>
					<!-- <textarea @blur="blurText" class="area_box margin_top_m" style="-webkit-user-select:text !important; color:#000;font-size:24rpx" contenteditable="true"></textarea> -->
					<textarea v-model="refundInfo.liyou"  cols="30" rows="8" class="area_box margin_top_m"></textarea>
					
				</view>
			</view>
			<view class="sure_buttton_letter margin_top_xxl" style="margin-left: 60rpx;" @click="toRefund">
				提交
			</view>
		</zq-load>
		<u-popup :show="hospitalShow" mode="bottom" :round="15" :closeable="true" @close="closeSelectHospital"
			@scrolltolower="getPull">
			<view class="padding_l text_align_center font_size_title_s color_black font_weight">
				选择退款原因
			</view>
			<scroll-view scroll-y="true" style="height: 450rpx;">
				<view class="margin_top_l text_align_center font_size_title_s color_black_999"
					v-if="refundList.length == 0">
					暂无可选退款原因
				</view>
				<view class="font_size_text_l color_black_333 border_bottom padding_l text_align_center"
					v-for="(item,index) in refundList" :key="index" @click="sureHospital(item.name)">
					{{item.name}}
				</view>
			</scroll-view>
		</u-popup>
	</view>
</template>

<script>
	import Load from "@/static/utils/load.js"
	export default {
		data() {
			return {
				hospitalShow: false,
				refundList: [
					{name: '暂不需要'},
					{name: '选错订单'},
					{name: '其他'},
				],
				refundInfo:{
					reason:'',//退款原因
					liyou:''//退款理由
				},
				info:null,
				serviceId:'',
				refundReasonList:[]//退款原因列表
			}
		},
		onLoad(options) {
			this.serviceId = options.serviceId
			this.info = new Load({
				api: this.$api.getOrderView,
				queryParams: {
					service_id: this.serviceId
				},
				load: {
					mode: "info"
				},
			})
			this.info.getInfo()
		},
		methods: {
			closeSelectHospital() {
				this.hospitalShow = false
			},
			sureHospital(name) {
				this.refundInfo.reason = name;
				this.hospitalShow = false
			},
			toRefund(e){
				if(!this.refundInfo.reason){
					uni.showToast({
						icon:"none",
						title:"请填写退款理由"
					})
				}
				this.$api.refundApply({record_id:this.serviceId,reason:this.refundInfo.reason,refund_desc:this.refundInfo.liyou}).then(res=>{
					getApp().globalData.upDate.isUpdateOrder = true
				})
				
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.popupShow {
		overflow: hidden;
		position: fixed;
		height: 100vh;
		width: 100%;
	}
.area_box{
		border: 1rpx #E6E6E6 solid;
		border-radius: 10rpx;
		height: 190rpx;
	}
</style>
