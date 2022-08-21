<template>
	<view class="flex_column padding_bottom_m ">
		<zq-load v-model="info.load">
			<view class="box_690 padding_0_l margin_left_l" v-if="info.form" >
				<view  class="diff_bottom">
					<view class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							医院
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{info.form.order_info.record_info.hospital_name}}
						</view>
					</view>
					<view class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							科室
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{info.form.order_info.record_info.department_name}}
						</view>
					</view>
					<view class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							时间
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{info.form.order_info.record_info.service_time}}
						</view>
					</view>
					<view class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							就诊人
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{info.form.order_info.record_info.patient_name}}
						</view>
					</view>
					<view class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							就诊家属
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{info.form.order_info.record_info.patient_name}}
						</view>
					</view>
					<view class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							联系电话
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{info.form.order_info.record_info.patient_name}}
						</view>
					</view>
					<view class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							服务内容
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{info.form.order_info.record_info.contact}}
						</view>
					</view>
					<view class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							价格
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							￥{{info.form.order_info.record_info.service_fee}}
						</view>
					</view>
				</view>
				
				<view class="font_size_text_xxl color_black_333 font_weight flex_row border_bottom padding_l_0">
					麦咚专员
				</view>
				<view class="flex_row border_bottom padding_l_0" >
					<view class="font_size_text_xl color_black_333 font_weight">
						姓名
					</view>
					<view class="margin_left color_black_888 font_size_text_l flex_row">
						{{info.form.order_info.record_info.attendant}}
					</view>
				</view>
				<view class="flex_row border_bottom padding_l_0" >
					<view class="font_size_text_xl color_black_333 font_weight">
						性别
					</view>
					<view class="margin_left color_black_888 font_size_text_l flex_row">
						男
					</view>
				</view>
				<view class="flex_row border_bottom padding_l_0" >
					<view class="font_size_text_xl color_black_333 font_weight">
						联系电话
					</view>
					<view class="margin_left color_black_888 font_size_text_l flex_row">
						18888888888
					</view>
				</view>
				<view class="flex_row border_bottom padding_l_0" v-if="status == 5" >
					<view class="font_size_text_xl color_black_333 font_weight">
						退款金额
					</view>
					<view class="margin_left color_black_888 font_size_text_l flex_row">
						￥199.00
						
					</view>
				</view><view class="flex_row border_bottom padding_l_0" v-if="status == 5" >
					<view class="font_size_text_xl color_black_333 font_weight">
						退款原因
					</view>
					<view class="margin_left color_black_888 font_size_text_l flex_row">
						个人原因
						
					</view>
				</view>
				<view class=" step_box margin_top_m margin_bottom_m padding_top_xl padding_bottom_l" v-if="status == 2 || status == 3 || status == 4 ||status ==5"> 
					<step :value="status" :timelist='timeList'> </step>
				</view>
				
			</view>
			
			<!-- <image src="../.." mode=""></image> -->
			<view class="flex_row margin_top_xxl margin_left_l" v-if="status == 1" >
				<view class="detail_white_m">
					取消订单
				</view>
				<view class="detail_orange_m margin_left_xl">
					去支付
				</view>
			</view>
			<view class="flex_row margin_top_xxl margin_left_l" v-if="status == 4">
				<view class="detail_white_m" @click="toEvalute">
					评价
				</view>
				<view class="detail_orange_m margin_left_xl">
					申请开票
				</view>
			</view>
			<view class="sure_buttton margin_top_xxl " v-if="status == 2">
				取消订单
			</view>
		</zq-load>
		
	</view>
</template>

<script>
	import step from "@/components/step.vue"
	import Load from "@/static/utils/load.js"
	export default {
		components:{
			step
		},
		data() {
			return {
				info:null,
				status:4 ,//订单状态
				orderId:'',//订单id
				serviceId:'',//服务id
				type:0 ,//0：待付款1：待接单 2：服务中 3：已完成 4：退款
				timeList:''
			}
		},
		onLoad(options) {
			this.type = options.type
			if(this.type == 0 ){
				this.orderId = options.orderId
				this.info = new Load({
					api: this.$api.getOrderDetail,
					queryParams: {
						order_id: this.orderId
					},
					load: {
						mode: "info"
					},
				})
				this.info.getInfo()
			}else{
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
			}
			
		},
		methods: {
			toEvalute(e){
				uni.navigateTo({
					url:"/aUserPages/my/evaluate?recordId="+this.info.form.order_info.record_info.id+"&attendantId="+this.form.order_info.record_info.address_id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	//按钮
	[class*=detail_] {
		display: inline-block;
		width: 265rpx;
		height: 90rpx;
		line-height: 90rpx;
		border-radius: 40rpx;
		transition: all 0.3s;
		text-align: center;
		font-size: 32rpx;
	}

	.detail_white_m {
		background: #ffffff;
		color: #FF6437;
		border: 2rpx #FF6437 solid;
		box-sizing: border-box;
	}

	.detail_orange_m {
		background: linear-gradient(to right, #FF6437, #FF9B51);
		color: #ffffff;
	}
	
	.step_box{
		width: 630rpx;
		background-color: #F8F8F8;
		border-radius: 20rpx;
		box-sizing: border-box;
	}
	.diff_bottom{
		border-bottom: 3rpx solid #999999;
	}
</style>
