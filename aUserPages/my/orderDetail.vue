<template>
	<view class="flex_column padding_bottom_m ">
		<!-- <zq-load v-model="info.load"> -->
			<view class="box_690 padding_0_l margin_left_l" >
				<view v-if="type == 0" v-for="(items,indexs) in info.record_info" :key="indexs" class="diff_bottom">
					<view v-if="items.hospital_name" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							医院
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{items.hospital_name}}
						</view>
					</view>
					<view v-if="items.department_name" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							科室
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{items.department_name}}
						</view>
					</view>
					<view class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							时间
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{items.service_time}}
						</view>
					</view>
					<view class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							就诊人
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{items.patient_name}}
						</view>
					</view>
					<view v-if="items.escort" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							就诊家属
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{items.escort}}
						</view>
					</view>
					<view v-if="items.contact" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							联系电话
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{items.contact}}
						</view>
					</view>
					<view class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							服务内容
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{serviceType[items.service_type].name}}
						</view>
					</view>
					<view class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							价格
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							￥{{items.service_fee || 0.00}}
						</view>
					</view>
					<view v-if="items.remark" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							备注
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{items.remark || ''}}
						</view>
					</view>
					<view v-if="items.expert_doctor" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							指定专家
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{items.expert_doctor || ''}}
						</view>
					</view>
					<view v-if="items.special_request" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							特殊要求
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{items.special_request || ''}}
						</view>
					</view>
					<view v-if="items.wz_content" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							问诊内容
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{items.wz_content || ''}}
						</view>
					</view>
					<view v-if="items.address_id" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							收件信息
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{items.address_id || ''}}
						</view>
					</view>
					<view v-if="items.voucher" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							报告信息
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{items.voucher || ''}}
						</view>
					</view>
					<view v-if="items.check_item" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							检查项目
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{items.check_item || ''}}
						</view>
					</view>
					<view v-if="items.address_to_buy" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							购买地址
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{items.address_to_buy || ''}}
						</view>
					</view>
					<view v-if="items.drug_hospital" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							购药医院
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{items.drug_hospital || ''}}
						</view>
					</view>
					<view v-if="items.drug_name" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							药品名称
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{items.drug_name || ''}}
						</view>
					</view>
				</view>
				<view v-if="type != 0"  class="diff_bottom">
					<view v-if="info.record_info.hospital_name" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							医院
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{info.record_info.hospital_name}}
						</view>
					</view>
					<view v-if="info.record_info.department_name" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							科室
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{info.record_info.department_name}}
						</view>
					</view>
					<view class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							时间
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{info.record_info.service_time}}
						</view>
					</view>
					<view class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							就诊人
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{info.record_info.patient_name}}
						</view>
					</view>
					<view v-if="info.record_info.escort" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							就诊家属
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{info.record_info.escort}}
						</view>
					</view>
					<view v-if="info.record_info.contact" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							联系电话
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{info.record_info.contact}}
						</view>
					</view>
					<view class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							服务内容
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{serviceType[info.record_info.service_type].name}}
						</view>
					</view>
					<view class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							价格
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							￥{{info.record_info.service_fee || 0.00}}
						</view>
					</view>
					<view v-if="info.record_info.remark" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							备注
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{info.record_info.remark || ''}}
						</view>
					</view>
					<view v-if="info.record_info.expert_doctor" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							指定专家
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{info.record_info.expert_doctor || ''}}
						</view>
					</view>
					<view v-if="info.record_info.special_request" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							特殊要求
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{info.record_info.special_request || ''}}
						</view>
					</view>
					<view v-if="info.record_info.wz_content" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							问诊内容
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{info.record_info.wz_content || ''}}
						</view>
					</view>
					<view v-if="info.record_info.address_id" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							收件信息
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{info.record_info.address_id || ''}}
						</view>
					</view>
					<view v-if="info.record_info.voucher" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							报告信息
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{info.record_info.voucher || ''}}
						</view>
					</view>
					<view v-if="info.record_info.check_item" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							检查项目
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{info.record_info.check_item || ''}}
						</view>
					</view>
					<view v-if="info.record_info.address_to_buy" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							购买地址
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{info.record_info.address_to_buy || ''}}
						</view>
					</view>
					<view v-if="info.record_info.drug_hospital" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							购药医院
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{info.record_info.drug_hospital || ''}}
						</view>
					</view>
					<view v-if="info.record_info.drug_name" class="flex_row border_bottom padding_l_0" >
						<view class="font_size_text_xl color_black_333 font_weight">
							药品名称
						</view>
						<view class="margin_left color_black_888 font_size_text_l flex_row">
							{{info.record_info.drug_name || ''}}
						</view>
					</view>
				</view>
				
				<!-- <view class="font_size_text_xxl color_black_333 font_weight flex_row border_bottom padding_l_0">
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
				</view> -->
				<view class="flex_row border_bottom padding_l_0" >
					<view class="font_size_text_xl color_black_333 font_weight">
						实际支付价格
					</view>
					<view class="margin_left color_black_888 font_size_text_l flex_row">
						￥{{info.total || 0.00}}
					</view>
				</view>
				<view class="flex_row border_bottom padding_l_0" v-if="status == 5" >
					<view class="font_size_text_xl color_black_333 font_weight">
						退款金额
					</view>
					<view class="margin_left color_black_888 font_size_text_l flex_row">
						￥{{info.total || 0.00}}
						
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
					<step :value="status" :timeList="timeList"> </step>
				</view>
				
			</view>
			
			<!-- <image src="../.." mode=""></image> -->
			<view class="flex_row margin_top_xxl margin_left_l" style="margin-left: 100rpx;" v-if="status == 0" >
				<view class="detail_white_m" @click="cancelOrder">
					取消订单
				</view>
				<view class="detail_orange_m margin_left_xl" @click="openToPopup">
					去支付
				</view>
			</view>
			<view class="flex_row margin_top_xxl margin_left_l" style="margin-left: 100rpx;" v-if="status == 3">
				<view class="detail_white_m" @click="toEvalute">
					评价
				</view>
				<view class="detail_orange_m margin_left_xl" @click="toInvoice">
					申请开票
				</view>
			</view>
			<view style="margin-left: 60rpx;" class="sure_buttton_letter margin_top_xxl " v-if="status == 1" @click="refund">
				申请退款
			</view>
		<!-- </zq-load> -->
	<u-popup :show="cancelStatus" :closeable="true" mode="center" :round="20" @close="closeQuick" customStyle="width:600rpx;padding:60rpx;box-sizing: border-box;">
		<view class="flex_column " style="margin-top: 60rpx;">
	
			<view class="font_size_title_s color_black_666  margin_top_s" @click="setText">
				确定取消此订单吗？
			</view>
			<view class="flex_row " style="margin-top: 75rpx;">
				<view class="quick_btn font_size_title_s color_orange " @click="closeQuickPop(0)">
					取消
				</view>
				<view class="quick_btn font_size_title_s color_white " @click="closeQuickPop(1)">
					确认
				</view>
			</view>
		</view>
	</u-popup>
	<u-popup :show="cancelSucess" :closeable="true" mode="center" :round="20" @close="closeSucess"
		customStyle="width:600rpx;padding:60rpx;box-sizing: border-box;">
		<view class="flex_column ">
			<image src="/static/image/cancelSucessImg.png" mode="aspectFill" class="cancelSucessImg"></image>
			<view class="font_size_title_xxl color_orange font_weight margin_top_m ">
				取消成功
			</view>
		</view>
	</u-popup>
	<u-popup :show="toPopup" :closeable="true" mode="center" :round="20" @close="closePay"
		customStyle="width:600rpx;padding:60rpx;box-sizing: border-box;padding-top: 96rpx">
		<view class="flex_row width_all margin_top_s padding_bottom_xl" v-for="(item, index) in payStyle"
			:key="index">
			<image :src="item.img" class="pay_img"></image>
			<view class="font_size_text_l color_black_333 font_weight margin_left_l">
				{{item.name}} <text class="color_orange font_size_text_l font_weight margin_left_m"
					v-if="index == 0">（余额：{{userInfo.balance || '0.00'}}）</text>
			</view>
			<view class="margin_left" @click="selectPayStyle(item, index)">
				<image src="/static/image/select01.png" class="icon_img" v-if="pay_channel == item.pay_channel">
				</image>
				<image src="/static/image/select02.png" class="icon_img" v-if="pay_channel != item.pay_channel">
				</image>
			</view>
		</view>
		<view class="sure_buttton margin_top_xxl " @click="againPay">
			立即支付
		</view>
	</u-popup>	
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
				pay_channel: 4,
				payStyle: [{
						name: '咚咚币',
						img: '/static/image/pay03.png',
						pay_channel: 1
					},
					// #ifdef APP-PLUS
					{
						name: '微信支付',
						img: '/static/image/pay01.png',
						pay_channel: 3
					},
					{
						name: '支付宝支付',
						img: '/static/image/pay02.png',
						pay_channel: 2
					},
					// #endif
					// #ifdef MP-WEIXIN
					{
						name: '微信支付',
						img: '/static/image/pay01.png',
						pay_channel: 4
					},
					// {
					// 	name: '支付宝支付',
					// 	img: '/static/image/pay02.png',
					// 	pay_channel: 5
					// },
					// #endif
				],
				toPopup: false,
				cancelStatus: false,
				cancelSucess: false,
				list: [],
				info:null,
				status:4 ,//订单状态
				serviceType: [
					{'name':''},
					{'name':'VIP陪诊-尊享服务'},
					{'name':'VIP陪诊-优享服务'},
					{'name':'VIP陪诊-基础服务'},
					{'name':'普通人全程陪诊'},
					{'name':'名家有约'},
					{'name':'代办挂号-普通号'},
					{'name':'代办挂号-专家号'},
					{'name':'代办挂号-特诊号'},
					{'name':'代办-问诊'},
					{'name':'代办取药'},
					{'name':'代办送取报告'},//11
					{'name':'代办开单以及检查'},//12
					{'name':'儿童全程陪诊'},//13
					{'name':'老年人全程陪诊'},//14
					{'name':'孕妈全程陪诊'},
					{'name':'特殊人群全程陪诊'},
					{'name':'VIP陪诊-基础服务'},
					{'name':'VIP陪诊-优享服务'},
					{'name':'VIP陪诊-尊享服务'},//19
				],
				orderId:'',//订单id
				serviceId:'',//服务id
				type:0 ,//0：待付款1：待接单 2：服务中 3：已完成 4：退款
				timeList:[]
			}
		},
		onLoad(options) {
			this.type = options.type
			this.status = options.type
			// #ifdef APP-PLUS
			this.pay_channel = 3;
			// #endif
			this.getUserInfo()
			if(this.type == 0 ){
				this.orderId = options.orderId
				// this.info = new Load({
				// 	api: this.$api.getOrderDetail,
				// 	queryParams: {
				// 		order_id: this.orderId
				// 	},
				// 	load: {
				// 		mode: "info"
				// 	},
				// })
				// this.info.getInfo()
				this.$api.getOrderDetail({order_id: this.orderId}).then(res => {
					console.log('info111', res);
					this.info = res.order_info;
				})
			}else{
				this.serviceId = options.serviceId
				// this.info = new Load({
				// 	api: this.$api.getOrderView,
				// 	queryParams: {
				// 		service_id: this.serviceId
				// 	},
				// 	load: {
				// 		mode: "info"
				// 	},
				// })
				// this.info.getInfo()
				this.$api.getOrderView({service_id: this.serviceId}).then(res => {
					console.log('list111', res)
					this.info  = res.order_info;
					console.log('info', this.info);
					this.timeList.push({title: '提交订单', time: res.order_info.record_info.create_time})
					this.timeList.push({title: '付款成功', time: res.order_info.record_info.dispatch_time})
					this.timeList.push({title: '待接单', time: res.order_info.record_info.dispatch_time})
					this.timeList.push({title: '已完成', time: res.order_info.record_info.end_time})
					console.log('timeList', this.timeList)
				})
			}
			
		},
		methods: {
			setText() {},
			getUserInfo(e) {
				this.$api.getMyInfo({}).then(res => {
					console.log('!!!!!!!!', res);
					this.userInfo = res
				})
			},
			refund(){//申请退款
				uni.navigateTo({
					url:'/aUserPages/my/refund?serviceId='+this.serviceId
				})
			},
			selectPayStyle(item, index) { //选择支付方式 1钱包，2支付宝，3微信支付，4微信小程序支付 5支付宝小程序支付
				console.log(item, index)
				this.payValue = item.name;
				console.log('payValue', this.payValue);
				this.pay_channel = item.pay_channel
			},
			openToPopup(item) {
				this.toPopup = true;
				this.order_id = item.order_id;
				this.pay_channel = 1;
			},
			closePay() {
				this.toPopup = false;
			},
			//重新支付
			againPay() {
				let api = {0: 'getOrderPay', 1: 'getGoodsPay'}
				this.$api.getOrderPay({order_id: this.orderId, pay_channel: this.pay_channel}).then(res => {
					let _this = this;
					switch (this.pay_channel) {
							case 1: //东东币
									_this.$forceUpdate()
									_this.closePay()
									_this.status = 1
								break;
							case 2: //app支付宝支付
								uni.requestPayment({
									provider: "alipay", //固定值为"alipay"
									orderInfo: res.url, //此处为服务器返回的订单信息字符串
									success: function(res) {
										_this.$forceUpdate()
										_this.closePay()
										_this.status = 1
										console.log("支付成功");
									},
									fail: function(err) {
										console.log('支付失败:' + JSON.stringify(err));
										_this.closePay()
									}
								});
								break;
							case 3: //app微信支付
								uni.requestPayment({
									provider: "wxpay",
									orderInfo: {
										appid: res.appid, // 微信开放平台 - 应用 - AppId，注意和微信小程序、公众号 AppId 可能不一致
										noncestr: res.nonceStr, // 随机字符串
										package: res.package, // 固定值
										partnerid: res.partnerid, // 微信支付商户号
										prepayid: res.prepayid, // 统一下单订单号 
										timestamp: res.timestamp, // 时间戳（单位：秒）
										sign: res.sign // 签名，这里用的 MD5/RSA 签名
									},
									success(res) {
										_this.$forceUpdate()
										_this.closePay()
										_this.status = 1
									},
									fail(e) {
										uni.showToast({
											title: "支付失败",
											icon:'none',
											duration: 1000
										});
										_this.closePay()
									}
								})
								break;
							case 4: //小程序微信支付
								uni.requestPayment({
									provider: 'wxpay',
									timeStamp: res.timeStamp,
									nonceStr: res.nonceStr,
									package: res.package,
									signType: res.signType,
									paySign: res.paySign,
									success: function(res) {
										console.log('success:' + JSON.stringify(res));
										_this.$forceUpdate()
										_this.closePay()
										_this.status = 1
									},
									fail: function(err) {
										console.log('fail:' + JSON.stringify(err));
										uni.showToast({
											title: "支付失败",
											icon:'none',
											duration: 1000
										});
										_this.closePay()
									}
								})
								break;
							default:
								console.log('支付方式不对');
						}
						// uni.navigateTo({
						// 	url:'/aUserPages/my/myOrder'
						// })
				}).catch(error => {
						if(this.pay_channel == 1) {
							error.msg = '余额不足'
						}
						uni.showToast({
							title: error.msg,
							icon: 'none'
						})
					})
					
			},
			cancelOrder(index) {
				this.cancelStatus = !this.cancelStatus
				this.cancelIndex = index
			},
			closeQuickPop(type) {
				this.cancelStatus = !this.cancelStatus
				if (type == 1) {//取消订单
					this.$api.cancelOrder({order_id:this.orderId}).then(res=>{
						this.cancelSucess = true
						let time= setTimeout(x=>{
							this.cancelSucess = false
							uni.navigateBack({})
							clearTimeout(time)
						},3000)
						this.$forceUpdate()
					})
					
					
				}
			},
			closeQuick(e) {
				console.log("关闭")
				this.cancelStatus = false
			},
			closeSucess(e) {
				this.cancelSucess = !this.cancelSucess
			},
			toEvalute(e){
				uni.navigateTo({
					url:"/aUserPages/my/evaluate?recordId="+this.info.record_info.id+"&attendantId="+this.info.record_info.attendant_id
				})
			},
			toInvoice(e){
				uni.navigateTo({
					url:"/aUserPages/my/invoice?recordId="+this.info.record_info.id+"&attendantId="+this.info.record_info.attendant_id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.quick_btn {
		width: 220rpx;
		text-align: center;
		height: 72rpx;
		line-height: 72rpx;
		border-radius: 70rpx;
		box-sizing: border-box;
	
		&:nth-child(1) {
			background-color: #f8f8f8;
			border: 2rpx solid #FF6437;
		}
	
		&:nth-child(2) {
			background: linear-gradient(to right, #FF6437, #FF9B51);
			margin-left: 60rpx;
		}
	}
	.cancelSucessImg {
		width: 160rpx;
		height: 160rpx;
	}
	
	.cancel_box {
		width: 600rpx;
		padding: 60rpx;
		box-sizing: border-box;
	}
	.pay_img {
		width: 46rpx;
		height: 46rpx;
	}
	.icon_img {
		width: 32rpx;
		height: 32rpx;
	}
	.sure_buttton {
		width: unset;
		// margin-left: 70rpx;
	}
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
