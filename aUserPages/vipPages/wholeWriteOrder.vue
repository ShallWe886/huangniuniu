<template>
	<view :class="{popupShow:popupShow}">
		<view class="box_690 padding_0_l margin_left_l ">
			<view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊医院<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(1,orderInfo.service_type,0)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!orderInfo.hospitalName">请选择就诊医院</text>
							<text v-if="orderInfo.hospitalName"
								class="color_black_333">{{orderInfo.hospitalName}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊科室<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row"
						@click="openHospital(2,orderInfo.service_type,orderInfo.hospital_id)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!orderInfo.clinicName">请选择就诊科室</text>
							<text v-if="orderInfo.clinicName" class="color_black_333">{{orderInfo.clinicName}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊时间<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(3,orderInfo.service_type,0)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!orderInfo.service_time">请选择就诊时间</text>
							<text v-if="orderInfo.service_time"
								class="color_black_333">{{orderInfo.service_time}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊患者<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(4,orderInfo.service_type)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!orderInfo.patientName">请选择就诊患者</text>
							<text v-if="orderInfo.patientName" class="color_black_333">{{orderInfo.patientName}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<!-- <view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						特殊要求
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s color_black_beb"
							v-model="orderInfo.remark" placeholder="请填写备注"
							placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view> -->
			</view>
			<view class="flex_row padding_m_0 border_bottom">
				<view class="font_size_text_xl color_black_333 font_weight">
					随行人员
				</view>
				<view class="margin_left flex_row">
					<input type="text" class="text_align_right margin_right_s" v-model="orderInfo.escort"
						placeholder="请填写随行人员姓名" placeholder-class="font_size_text_l">
				</view>
			</view>
			<view class="flex_row padding_m_0 border_bottom">
				<view class="font_size_text_xl color_black_333 font_weight">
					随行人员手机号
				</view>
				<view class="margin_left flex_row">
					<input type="number" class="text_align_right margin_right_s" v-model="orderInfo.contact"
						placeholder="请填写随行人员手机号" placeholder-class="font_size_text_l">
				</view>
			</view>
			<view class="flex_row padding_m_0 border_bottom">
				<view class="font_size_text_xl color_black_333 font_weight">
					备注
				</view>
				<view class="margin_left flex_row">
					<input type="text" class="text_align_right margin_right_s" v-model="orderInfo.remark"
						placeholder="请填写备注" placeholder-class="font_size_text_l">
				</view>
			</view>
			<view class="margin_l_0 font_size_text_xl color_black_333 font_weight">
				支付方式
			</view>
			<view class="flex_row width_all margin_top_s padding_bottom_xl">
				<image src="/static/image/pay03.png" class="pay_img"></image>
				<view class="font_size_text_l color_black_333 font_weight margin_left_l">
					积分 <text class="color_orange font_size_text_l font_weight margin_left_m"
						>（积分：{{userInfo.user_integral || '0.00'}}）</text>
				</view>
				<view class="margin_left" @click="selectPayIntegral">
					<image src="/static/image/select01.png" class="icon_img" v-if="pay_integral">
					</image>
					<image src="/static/image/select02.png" class="icon_img" v-if="!pay_integral">
					</image>
				</view>
			
			</view>
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
			<view class="flex_row width_all margin_top_s padding_bottom_xl">
				<view class="font_size_text_l color_black_333 font_weight margin_left_l">
					总金额
				</view>
				<view class="margin_left" style="font-size: 24rpx;">
					{{total || 0}}
				</view>
			</view>
			<view class="flex_row width_all margin_top_s padding_bottom_xl">
				<view class="font_size_text_l color_black_333 font_weight margin_left_l">
					积分抵扣
				</view>
				<view class="margin_left" style="font-size: 24rpx;">
					{{integral_total || 0}}<text v-if="pay_integral && integral_total && integral_total >= 20">积分抵扣{{total - discount_total}}元</text>	
				</view>
			</view>
			<view class="flex_row width_all margin_top_s padding_bottom_xl">
				<view class="font_size_text_l color_black_333 font_weight margin_left_l">
					优惠后金额
				</view>
				<view class="margin_left" style="font-size: 24rpx;">
					{{discount_total || 0}}
				</view>
			</view>
		</view>
		<view class="sure_buttton margin_top_xxl margin_bottom_l" @click="toPay">
			立即支付
		</view>
		<u-datetime-picker :show="timeShow" :closeOnClickOverlay="closeOnClickOverlay" v-model="time" mode="datetime"
			:formatter="formatter" :minDate="minDate" @confirm="sureSelectTime" @cancel="cancelSelectTime" visibleItemCount="12"
			itemHeight="48" confirmColor="#FF6437"></u-datetime-picker>
		<u-popup :show="hospitalShow" mode="bottom" :round="15" :closeable="true" @close="closeSelectHospital"
			@scrolltolower="getPull">
			<view class="padding_l text_align_center font_size_title_s color_black font_weight">
				选择就诊医院
			</view>
			<scroll-view scroll-y="true" style="height: 450rpx;">
				<view class="margin_top_l text_align_center font_size_title_s color_black_999"
					v-if="hospitalList.length == 0">
					暂无可选医院
				</view>
				<view class="font_size_text_l color_black_333 border_bottom padding_l text_align_center"
					v-for="(item,index) in hospitalList" :key="index" @click="sureHospital(item)">
					{{item.name}}
				</view>
			</scroll-view>
		</u-popup>
		<u-popup :show="patientShow" mode="bottom" :round="15" :closeable="true" @close="closeSelectPatient"
			@scrolltolower="getPatient">
			<view class="padding_l text_align_center font_size_title_s color_black font_weight">
				选择就诊人
			</view>
			<scroll-view scroll-y="true" style="height: 450rpx;">
				<view class="margin_top_l text_align_center font_size_title_s color_black_999"
					v-if="patientList.length == 0">
					暂无可选就诊人
					<view class="sure_buttton " style="position: fixed;bottom: 60rpx;" @click="addPatient(0)">
						添加就诊人信息
					</view>
				</view>
				<view class="font_size_text_l color_black_333 border_bottom padding_l text_align_center"
					v-for="(item,index) in patientList" :key="index" @click="surePatient(item)">
					{{item.patient_name}}
				</view>
			</scroll-view>
		</u-popup>
		<!-- <u-picker :show="departmentShow" :columns="clinicList" keyName="name" :title="selecttitle" @confirm="sureSelect"
			@cancel="cancelSelect" visibleItemCount="12" itemHeight="48" confirmColor="#FF6437">
		</u-picker> -->
		<u-popup :show="departmentShow" mode="bottom" :round="15" :closeable="true" @close="cancelSelect"
			@scrolltolower="getPull">
			<view class="padding_l text_align_center font_size_title_s color_black font_weight">
				选择就诊科室
			</view>
			<scroll-view scroll-y="true" style="height: 450rpx;">
				<view class="margin_top_l text_align_center font_size_title_s color_black_999"
					v-if="clinicList.length == 0">
					暂无可选科室
				</view>
				<view class="font_size_text_l color_black_333 border_bottom padding_l text_align_center"
					v-for="(item,index1) in clinicList" :key="index1" @click="sureSelect(item)">
					{{item.name}}
				</view>
			</scroll-view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				minDate: Number(new Date()),
				integral_total: 0,
				pay_integral: false,
				popupShow: false,
				closeOnClickOverlay: true,
				inputList: [{
						title: '就诊医院',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊医院"
					},
					{
						title: '就诊科室',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊科室"
					},
					{
						title: '就诊时间',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊时间"
					},
					{
						title: '就诊患者',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊患者"
					}
				],
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
				payValue: '微信支付',
				orderInfo: {
					service_type: 4,
					hospitalName: '',
					clinicName: '',
					service_time: '',
					patientName: '',
					remark: '',
					hospital_id: '',
					patient_id: '',
					department_id: '',
					escort: '', //随行人员
					contact: '', //随行人员联系方式
					isShow: false,
					product_count: 1,
				},
				time: Number(new Date()),
				departmentShow: false,
				selecttitle: '',
				hospitalShow: false, //医院弹窗
				hospitalList: [], //医院列表
				clinicList: [],
				// clinicList: [
				// 	[]
				// ], //科室列表
				timeShow: false,
				typeList: [], //就诊类型
				addressInfo: null, // 定位信息
				page: 1,
				loading: true,
				operateType: 4, //选择时的操作类型
				patientShow: false, //患者弹窗
				patientList: [], //患者列表
				pay_channel: 4,
				userInfo: {},
				total: 0,
				discount_total: 0,
				type: 0.1,
				service_type: 0,
				product_type: 0,
				record_json: [],
			}
		},
		onReady() {
			// 微信小程序需要用此写法
			this.$refs.datetimePicker.setFormatter(this.formatter)
		},
		onLoad(options) {
			console.log('options', options, new Date());
			// #ifdef APP-PLUS
			this.pay_channel = 3;
			// #endif
			this.service_type = options.service_type
			this.orderInfo.service_type = options.service_type;
			this.orderInfo.product_count = options.product_count ? options.product_count : 1;
			this.product_type = options.product_type ? options.product_type : 0;
			this.total = options.total
			this.discount_total = options.total
			this.type = options.type
			this.addressInfo = uni.getStorageSync('addressInfo')
			this.getUserInfo()
		},
		onShow() {
			this.getPatientFresh()
			this.record_json = [];
		},
		methods: {
			selectPayIntegral() {
				//根据沟通，客户希望积分能够兑换现金抵扣，例如XX积分=XX元，（20积分分等于一元，每次不能抵扣超过当前订单总额的30%）
				if(this.userInfo.user_integral <20) {
					this.pay_integral = false
					this.integral_total = 0;
					return;
				}

				this.pay_integral = !this.pay_integral
				if(this.pay_integral) {
					this.integralCompute()
				} else {
					this.discount_total = this.total
					this.integral_total = 0;
				}
			},
			integralCompute() {
				//0.2积分 == 1分  2积分=1毛   #跑腿总费用的30%，全程陪诊不可超过20%，VIP陪诊不可超过10%
				let price = (this.total*this.type).toFixed(2)
				console.log('jiage', this.total, this.type, this.total*this.type);
				if(price <= 0) {
					return;
				}
				//抵扣所需积分
				let num = (price*100)*0.2
				let num1 = 0;
				let remainder = 0;
				if(num > this.userInfo.user_integral) {
					remainder = this.userInfo.user_integral%20
					this.integral_total = this.userInfo.user_integral-remainder;
				} else {
					remainder = num%20
					this.integral_total = num-remainder;
				}
				num1 = (this.integral_total/0.2)/100
				this.integral_total = this.integral_total.toFixed(2)
				this.discount_total = (this.total - num1.toFixed(2)).toFixed(2)
				console.log('积分转化为分', price, num,num1,this.discount_total);
				
				
			},
			getUserInfo(e) {
				this.$api.getMyInfo({}).then(res => {
					this.userInfo = res
					this.userInfo.user_integral = parseInt(res.user_integral)
				})
			},
			addPatient(e) {
				//添加就诊人信息
				uni.navigateTo({
					url: '/aUserPages/patientList/addPatient?type=' + e
				})
			},
			formatter(type, value) {
				if (type === 'year') {
					return `${value}年`
				}
				if (type === 'month') {
					return `${value}月`
				}
				if (type === 'day') {
					return `${value}日`
				}
				if (type === 'hour') {
					return `${value}时`
				}
				// if (type === 'minute') {
				// 	return `${value}分`
				// }
				return value
			},
			sureSelect(e) { // 确定选定科室
			console.log('选择科室',e);
				// this.orderInfo.clinicName = e.value[0].name
				// this.orderInfo.department_id = e.value[0].id
				this.orderInfo.clinicName = e.name
				this.orderInfo.department_id = e.id
				this.departmentShow = !this.departmentShow
				this.popupShow = false
			},
			cancelSelect(e) { //取消选择
				this.departmentShow = !this.departmentShow
				this.popupShow = false
			},
			sureSelectTime(e) { //确定选择时间
				let time = this.getFullTime(e.value)
				console.log('time', time);
				this.orderInfo.service_time = time
				this.timeShow = !this.timeShow
				this.popupShow = false
				console.log('3333', this.timeShow);

			},
			getFullTime(timestamp) { //时间戳转化
				let date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
				let Y = date.getFullYear() + '-';
				let M = ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-';
				let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
				let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
				let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
				return Y + M + D + h + m + ':00';
			},
			cancelSelectTime(e) { //取消选择
				this.timeShow = !this.timeShow
				this.popupShow = false
			},
			openHospital(type, operateType, value) { //打开选择医院的弹窗 type // 1.选择医院 2.选择诊所 3.选择时间 4 // 选择患者
				this.operateType = operateType
				if (type == 1) { // 选择医院
					this.hospitalShow = true
					this.getFresh()
				} else if (type == 2) { //选择诊所
					if (!value || value < 1) { // value 为医院id
						uni.showToast({
							title: '请先选择医院',
							icon: 'none'
						})
						return;
						// this.getDepartment(value)
					}
					this.getDepartment(value)
				} else if (type == 3) {
					this.timeShow = true
				} else if (type == 4) {
					this.patientShow = true
					this.getPatientFresh()
				}
				this.popupShow = true

			},
			closeSelectHospital(e) { // 关闭选择医院的弹窗
				this.hospitalShow = false
				this.popupShow = false
			},
			getFresh(e) { //刷新获取列表
				this.hospitalList = []
				this.page = 1
				this.loading = true
				this.getHospitalList()
			},
			getPull(e) { //分页
				if (this.loading) {
					this.getHospitalList()
				}
			},
			getHospitalList(e) { // 获取医院列表
				// this.addressInfo.city = '深圳';
				console.log('this.addressInfo.city', this.addressInfo.city);
				this.$api.getHospital({
					page: this.page,
					// pageSize: 8,
					address: ''
				}).then(res => {
					this.hospitalList = this.hospitalList.concat(res.list)
					this.page += 1
					this.loading = res.list.length == 8
				})
			},
			getDepartment(e) { //获取科室列表
				this.clinicList = []
				this.$api.getDepartmentLists({hospital_id: e}).then(res => {
					this.clinicList = res
					this.departmentShow = true
				})

			},
			sureHospital(item) { //确定选择的医院
				let _this = this;
				_this.orderInfo.hospitalName = item.name
				_this.orderInfo.hospital_id = item.id
				_this.hospitalShow = false
				_this.popupShow = false
			},
			getPatientFresh(e) { //初始化获取患者列表
				this.patientList = []
				this.loading = true
				this.page = 1
				this.getPatientData()
			},
			getPatientData(e) { //获取患者列表
				this.$api.getPatientList({
					page: this.page,
					pageSize: 8
				}).then(res => {
					this.patientList = this.patientList.concat(res.list)
					this.page += 1
					this.loading = res.list.length == 8
				})
			},
			getPatient(e) { //分页加载
				if (this.loading) {
					this.getPatientData()
				}
			},
			closeSelectPatient(e) { //关闭选择列表
				this.patientShow = false
				this.popupShow = false
			},
			surePatient(item) { //选择就诊患者
				this.orderInfo.patientName = item.patient_name
				this.orderInfo.patient_id = item.id
				this.patientShow = false
				this.popupShow = false
			},
			selectPayStyle(item, index) { //选择支付方式 1钱包，2支付宝，3微信支付，4微信小程序支付 5支付宝小程序支付
				console.log(item, index)
				this.payValue = item.name;
				console.log('payValue', this.payValue);
				this.pay_channel = item.pay_channel
				// // #ifdef MP-WEIXIN
				// if(index == 0){
				// 	this.pay_channel = 4
				// }else{
				// 	this.pay_channel = index + 1
				// }
				// // #endif
				// // #ifdef APP
				// this.pay_channel = index +1
				// // #endif
			},
			toPay(e) { //提交订单
			let api = {0: 'addRecord', 1: 'recordVip'}
			let params = {0: {pay_channel: this.pay_channel,integral: this.integral_total,record_json: this.getInfo()
			}, 1: {amount: this.total, pay_channel: this.pay_channel,integral: this.integral_total,record_json: this.getInfo()}};
				console.log('info', this.getInfo());
			this.$api[api[this.product_type]](params[this.product_type]).then(res => {
					let _this = this
					switch (this.pay_channel) {
						case 1: //东东币
						console.log('res余额支付', res);
							if(res.errorCode && res.errorMsg ) {
								uni.showToast({
									title:res.errorMsg,
									icon:'none'
								})
								return;
							}
							// #ifdef APP-PLUS
							// #endif
							// #ifdef MP-WEIXIN
							_this.getPushMes(this.discount_total)
							// #endif
							break;
						case 2: //app支付宝支付
							let index = res.url.lastIndexOf("app_id")
							let url = res.url.substring(index+1,res.url.length);
							// let url = res.url.split("app_id");
							url = 'a'+url
							console.log('url', url);
							uni.requestPayment({
								provider: "alipay", //固定值为"alipay"
								orderInfo: res.url, //此处为服务器返回的订单信息字符串
								success: function(res) {
									uni.navigateTo({
										url:"/aUserPages/resultPage/resultPage?type="+3+"&amount="+_this.discount_total
									})
									console.log("支付成功");
								},
								fail: function(err) {
									console.log('支付失败:' + JSON.stringify(err));
									setTimeout(function() {
										uni.navigateTo({
											url: '/aUserPages/my/myOrder?status=0'
										})
									}, 1000);
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
									console.log('支付成功', res);
									uni.navigateTo({
										url:"/aUserPages/resultPage/resultPage?type="+3+"&amount="+_this.discount_total
									})
								},
								fail(e) {
									console.log('支付失败', e);
									uni.showToast({
										title: "支付失败",
										icon:'none',
										duration: 1000
									});
									// setTimeout(function() {
									// 	uni.navigateTo({
									// 		url: '/aUserPages/my/myOrder?status=0'
									// 	})
									// }, 1000);
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
									_this.getPushMes(this.discount_total);
									// uni.getPushClientId({
									// 	success: (res) => {
									// 		let push_clientid = res.cid
									// 		console.log('客户端推送标识:',push_clientid)
									// 	},
									// 	fail(err) {
									// 		console.log(err)
									// 	}
									// })
								},
								fail: function(err) {
									console.log('fail:' + JSON.stringify(err));
									uni.showToast({
										title: "支付失败",
										icon:'none',
										duration: 1000
									});
									setTimeout(function() {
										uni.navigateTo({
											url: '/aUserPages/my/myOrder?status=0'
										})
									}, 1000);
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
					console.log('支付错误', error);
					uni.showToast({
						title: error.msg,
						icon: 'none'
					})
				})

			},
			getPushMes(discount_total){
				uni.requestSubscribeMessage({
				  tmplIds: [ '52083IMd24SOcYVqMGmmY1DYJxAEMXSuQEFpqmNceIQ', 'hwYtsSpoITsXoYxDqcA3vhN_jASpKpTjj050zpS7g1U', 'fu1zd6WBDdlUHHao9zoiHh2-9ucoHri_yIykQG-v1d4'],
				  success (res) {
					  uni.navigateTo({
					  	url:"/aUserPages/resultPage/resultPage?type="+3+"&amount="+discount_total
					  })
					  console.log('小程序推送消息',res);
				  },
				  fail(err) {
				  	console.log('小程序推送消息11111', err);
					uni.navigateTo({
						url:"/aUserPages/resultPage/resultPage?type="+3+"&amount="+discount_total
					})
				  }
				})
			},
			getInfo(e) {
				let record_json = []
				record_json.push(this.orderInfo)
				console.log('record_json', record_json);
				this.record_json = record_json
				return this.record_json
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
	.pay_img {
		width: 46rpx;
		height: 46rpx;
	}

	.icon_img {
		width: 32rpx;
		height: 32rpx;
	}

	.sure_buttton {

		margin-left: 70rpx;
	}
</style>
