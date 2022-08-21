<template>
	<view>
		<view class="box_690 padding_0_l margin_left_l ">
			<view >
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
					<view class="margin_left flex_row" @click="openHospital(2,orderInfo.service_type,orderInfo.hospital_id)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!orderInfo.clinicName">请选择就诊科室</text>
							<text v-if="orderInfo.clinicName"
								class="color_black_333">{{orderInfo.clinicName}}</text>
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
							<text v-if="orderInfo.patientName"
								class="color_black_333">{{orderInfo.patientName}}</text>
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
					<input type="text" class="text_align_right margin_right_s" v-model="orderInfo.contact"
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
			<view class="flex_row width_all margin_top_s padding_bottom_xl" v-for="(item, index) in payStyle"
				:key="index">
				<image :src="item.img" class="pay_img"></image>
				<view class="font_size_text_l color_black_333 font_weight margin_left_l">
					{{item.name}} <text class="color_orange font_size_text_l font_weight margin_left_m"
						v-if="index == 2">（余额：254）</text>
				</view>
				<view class="margin_left">
					<image src="/static/image/select01.png" class="icon_img" v-if="payValue == item.name"></image>
					<image src="/static/image/select02.png" class="icon_img" v-if="payValue != item.name"></image>
				</view>

			</view>
		</view>
		<view class="sure_buttton margin_top_xxl "  @click="toPay">
			立即支付
		</view>
		<u-picker :show="departmentShow" :columns="clinicList" keyName="name" :title="selecttitle" @confirm="sureSelect"
			@close="cancelSelect" visibleItemCount="12" itemHeight="48" confirmColor="#FF6437">
		</u-picker>
		<u-datetime-picker :show="timeShow" v-model="time" mode="datetime" :formatter="formatter"
			@confirm="sureSelectTime" @close="cancelSelectTime" visibleItemCount="12" itemHeight="48"
			confirmColor="#FF6437"></u-datetime-picker>
		<u-popup :show="hospitalShow" mode="bottom" :round="15" :closeable="true"  @close="closeSelectHospital"  @scrolltolower="getPull">
			<view class="padding_l text_align_center font_size_title_s color_black font_weight">
				选择就诊医院
			</view>
		    <scroll-view scroll-y="true" style="height: 450rpx;">
				<view class="margin_top_l text_align_center font_size_title_s color_black_999" v-if="hospitalList.length == 0">
					暂无可选医院
				</view>
		    	<view class="font_size_text_l color_black_333 border_bottom padding_l text_align_center" v-for="(item,index) in hospitalList" :key="index" @click="sureHospital(item)">
		    	    {{item.name}}
		    	</view>
		    </scroll-view>
		</u-popup>
		<u-popup :show="patientShow" mode="bottom" :round="15" :closeable="true"  @close="closeSelectPatient"  @scrolltolower="getPatient">
			<view class="padding_l text_align_center font_size_title_s color_black font_weight">
				选择患者
			</view>
		    <scroll-view scroll-y="true" style="height: 450rpx;">
				<view class="margin_top_l text_align_center font_size_title_s color_black_999" v-if="patientList.length == 0">
					暂无可选患者
				</view>
		    	<view class="font_size_text_l color_black_333 border_bottom padding_l text_align_center" v-for="(item,index) in patientList" :key="index" @click="surePatient(item)">
		    	    {{item.patient_name}}
		    	</view>
		    </scroll-view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
						name: '微信支付',
						img: '/static/image/pay01.png'
					},
					{
						name: '支付宝支付',
						img: '/static/image/pay02.png'
					},
					{
						name: '冬冬币',
						img: '/static/image/pay03.png'
					}
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
					escort:'',//随行人员
					contact:'',//随行人员联系方式
					isShow: false
				},
				time: Number(new Date()),
				departmentShow: false,
				selecttitle: '',
				hospitalShow:false,//医院弹窗
				hospitalList: [],//医院列表
				clinicList:[[]],//科室列表
				timeShow: false,
				typeList: [] ,//就诊类型
				addressInfo:null ,// 定位信息
				page:1,
				loading:true,
				operateType:4,//选择时的操作类型
				patientShow:false,//患者弹窗
				patientList:[],//患者列表
				pay_channel:1,
				
			}
		},
		onReady() {
			// 微信小程序需要用此写法
			this.$refs.datetimePicker.setFormatter(this.formatter)
		},
		onLoad() {
			this.addressInfo = uni.getStorageSync('addressInfo')
			this.getDepartment()
		},
		methods: {
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
				if (type === 'minute') {
					return `${value}分`
				}
				return value
			},
			sureSelect(e) { // 确定选定科室
				this.orderInfo.clinicName = e.value[0].name
				this.orderInfo.department_id = e.value[0].id
				this.departmentShow = !this.departmentShow
			},
			cancelSelect(e) { //取消选择
				this.departmentShow = !this.departmentShow
			},
			sureSelectTime(e) { //确定选择时间
				let time = this.getFullTime(e.value)
				this.orderInfo.service_time = time
				this.timeShow = !this.timeShow
				
			},
			getFullTime(timestamp){//时间戳转化
				let date = new Date(timestamp);    //时间戳为10位需*1000，时间戳为13位的话不需乘1000
				let Y = date.getFullYear() + '-';
				let M = ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-';
				let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
				let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
				let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
				return Y + M + D + h + m +':00';
			},
			cancelSelectTime(e) { //取消选择
				this.timeShow = !this.timeShow
			},
			openHospital(type,operateType,value){ //打开选择医院的弹窗 type // 1.选择医院 2.选择诊所 3.选择时间 4 // 选择患者
				this.operateType = operateType
				if(type == 1){ // 选择医院
					this.hospitalShow = true
					this.getFresh()
				}else if(type == 2){//选择诊所
					// if(value){ // value 为医院id
					// 	this.departmentShow = true
					// 	this.getDepartment(value)
					// }
					this.departmentShow = true
					// this.getDepartment(value)
				}else if(type == 3){
					this.timeShow =true
				}else if(type == 4){
					this.patientShow = true
					this.getPatientFresh()
				}
				
			},
			closeSelectHospital(e){ // 关闭选择医院的弹窗
				this.hospitalShow = false
			},
			getFresh(e){//刷新获取列表
				this.hospitalList = []
				this.page = 1
				this.loading = true
				this.getHospitalList()
			},
			getPull(e){//分页
				if(this.loading){
					this.getHospitalList()
				}
			},
			getHospitalList(e){ // 获取医院列表
				this.$api.getHospital({page:this.page,pageSize:8,address:this.addressInfo.city}).then(res=>{
					this.hospitalList = this.hospitalList.concat(res.list)
					this.page += 1
					this.loading = res.list.length == 8
				})
			},
			getDepartment(e){//获取科室列表
				this.clinicList[0] = []
				this.$api.getDepartmentList({}).then(res=>{
					console.log(this.clinicList[0],res.list)
					this.clinicList[0]=res.list
				})
				
			},
			sureHospital(item){//确定选择的医院
				this.orderInfo.hospitalName = item.name
				this.orderInfo.hospital_id = item.id
				this.hospitalShow = false
			},
			getPatientFresh(e){//初始化获取患者列表
				this.patientList = []
				this.loading = true
				this.page = 1
				this.getPatientData()
			},
			getPatientData(e){//获取患者列表
				this.$api.getPatientList({page:this.page,pageSize:8}).then(res=>{
					this.patientList = this.patientList.concat(res.list)
					this.page += 1
					this.loading = res.list.length == 8
				})
			},
			getPatient(e){//分页加载
				if(this.loading){
					this.getPatientData()
				}
			},
			closeSelectPatient(e){//关闭选择列表
				this.patientShow = false 
			},
			surePatient(item){//选择就诊患者
				this.orderInfo.patientName = item.patient_name
				this.orderInfo.patient_id = item.id
				this.patientShow = false
			},
			selectPayStyle(item,index){//选择支付方式 1钱包，2支付宝，3微信支付，4微信小程序支付 5支付宝小程序支付
				console.log(item,index)
				this.payValue = item.name
				// #ifdef MP-WEIXIN
				if(index == 0){
					this.pay_channel = 4
				}else{
					this.pay_channel = index + 1
				}
				// #endif
				// #ifdef APP
				this.pay_channel = index +1
				// #endif
			},
			toPay(e){//提交订单
				console.log(this.getInfo())
				this.$api.addRecord({pay_channel:1,record_json:this.getInfo()}).then(res=>{
					uni.navigateTo({
						url:'/aUserPages/my/myOrder'
					})
				})
				
			},
			getInfo(e){
				let record_json = []
				record_json.push(this.orderInfo)
				return record_json
			}
		}
	}
</script>

<style lang="scss" scoped>
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
