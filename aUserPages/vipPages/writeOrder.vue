<template>
	<view class="padding_bottom_l">
		<view class="box_690 padding_0_l margin_left_l ">
			<view class="font_weight font_size_text_xl padding_m_0 color_black ">
				预约普通号：
			</view>
			<block v-for="(value,key) in ordinaryInfo" :key="key">
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						{{value.title}} <text class="color_orange margin_left_s" v-if="value.isSure">*</text>
					</view>
					<view class="margin_left flex_row" @click="selectInfo(value,key)" v-if="key == 'hospital'|| key == 'clinic' || key == 'patient' || key == 'time'">
						<input type="text" class="text_align_right margin_right_s" v-model="value.content"
							:placeholder="value.placeholderText" placeholder-class="font_size_text_l"
							disabled="false">
						<u-icon name="arrow-right" color="#B4B4B4" ></u-icon>
					</view>
					<view class="margin_left flex_row"  v-else>
						<input type="text" class="text_align_right margin_right_s" v-model="value.content" :placeholder="value.placeholderText" placeholder-class="font_size_text_l">
					</view>
				</view>
			</block>
			<view class="font_weight font_size_text_xl padding_m_0 color_black ">
				预约专家号：
			</view>
			<block v-for="(value,key) in expertInfo" :key="key">
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						{{value.title}} <text class="color_orange margin_left_s" v-if="value.isSure">*</text>
					</view>
					<view class="margin_left flex_row" @click="selectInfo(value,key)" v-if="key == 'hospital'|| key == 'clinic' || key == 'patient' || key == 'time'">
						<input type="text" class="text_align_right margin_right_s" v-model="value.content"
							:placeholder="value.placeholderText" placeholder-class="font_size_text_l"
							disabled="false">
						<u-icon name="arrow-right" color="#B4B4B4" ></u-icon>
					</view>
					<view class="margin_left flex_row"  v-else>
						<input type="text" class="text_align_right margin_right_s" v-model="value.content" :placeholder="value.placeholderText" placeholder-class="font_size_text_l">
					</view>
				</view>
			</block>
			<view class="font_weight font_size_text_xl padding_m_0 color_black ">
				预约特诊号：
			</view>
			<block v-for="(value,key) in specialInfo" :key="key">
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						{{value.title}} <text class="color_orange margin_left_s" v-if="value.isSure">*</text>
					</view>
					<view class="margin_left flex_row" @click="selectInfo(value,key)" v-if="key == 'hospital'|| key == 'clinic' || key == 'patient' || key == 'time'">
						<input type="text" class="text_align_right margin_right_s" v-model="value.content"
							:placeholder="value.placeholderText" placeholder-class="font_size_text_l"
							disabled="false">
						<u-icon name="arrow-right" color="#B4B4B4" ></u-icon>
					</view>
					<view class="margin_left flex_row"  v-else>
						<input type="text" class="text_align_right margin_right_s" v-model="value.content" :placeholder="value.placeholderText" placeholder-class="font_size_text_l">
					</view>
				</view>
			</block>
			<view class="font_weight font_size_text_xl padding_m_0 color_black ">
				开单及预约检查：
			</view>
			<block v-for="(value,key) in inspectInfo" :key="key">
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						{{value.title}} <text class="color_orange margin_left_s" v-if="value.isSure">*</text>
					</view>
					<view class="margin_left flex_row" @click="selectInfo(value,key)" v-if="key == 'hospital'|| key == 'clinic' || key == 'patient' || key == 'time'">
						<input type="text" class="text_align_right margin_right_s" v-model="value.content"
							:placeholder="value.placeholderText" placeholder-class="font_size_text_l"
							disabled="false">
						<u-icon name="arrow-right" color="#B4B4B4" ></u-icon>
					</view>
					<view class="margin_left flex_row"  v-else>
						<input type="text" class="text_align_right margin_right_s" v-model="value.content" :placeholder="value.placeholderText" placeholder-class="font_size_text_l">
					</view>
				</view>
			</block>
			<view class="font_weight font_size_text_xl padding_m_0 color_black ">
				问诊：
			</view>
			<block v-for="(value,key) in consultationInfo" :key="key">
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						{{value.title}} <text class="color_orange margin_left_s" v-if="value.isSure">*</text>
					</view>
					<view class="margin_left flex_row" @click="selectInfo(value,key)" v-if="key == 'hospital'|| key == 'clinic' || key == 'patient' || key == 'time'">
						<input type="text" class="text_align_right margin_right_s" v-model="value.content"
							:placeholder="value.placeholderText" placeholder-class="font_size_text_l"
							disabled="false">
						<u-icon name="arrow-right" color="#B4B4B4" ></u-icon>
					</view>
					<view class="margin_left flex_row"  v-else>
						<input type="text" class="text_align_right margin_right_s" v-model="value.content" :placeholder="value.placeholderText" placeholder-class="font_size_text_l">
					</view>
				</view>
			</block>
			<view class="font_weight font_size_text_xl padding_m_0 color_black ">
				取寄结果：
			</view>
			<block v-for="(value,key) in sendTakeInfo" :key="key">
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						{{value.title}} <text class="color_orange margin_left_s" v-if="value.isSure">*</text>
					</view>
					<view class="margin_left flex_row" @click="selectInfo(value,key)" v-if="key == 'hospital'|| key == 'clinic' || key == 'patient' || key == 'time'">
						<input type="text" class="text_align_right margin_right_s" v-model="value.content"
							:placeholder="value.placeholderText" placeholder-class="font_size_text_l"
							disabled="false">
						<u-icon name="arrow-right" color="#B4B4B4" ></u-icon>
					</view>
					<view class="margin_left flex_row"  v-else>
						<input type="text" class="text_align_right margin_right_s" v-model="value.content" :placeholder="value.placeholderText" placeholder-class="font_size_text_l">
					</view>
				</view>
			</block>
			<view class="font_weight font_size_text_xl padding_m_0 color_black ">
				买药：
			</view>
			<block v-for="(value,key) in buyMedicine" :key="key">
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						{{value.title}} <text class="color_orange margin_left_s" v-if="value.isSure">*</text>
					</view>
					<view class="margin_left flex_row" @click="selectInfo(value,key)" v-if="key == 'hospital'|| key == 'clinic' || key == 'patient' || key == 'time'">
						<input type="text" class="text_align_right margin_right_s" v-model="value.content"
							:placeholder="value.placeholderText" placeholder-class="font_size_text_l"
							disabled="false">
						<u-icon name="arrow-right" color="#B4B4B4" ></u-icon>
					</view>
					<view class="margin_left flex_row"  v-else>
						<input type="text" class="text_align_right margin_right_s" v-model="value.content" :placeholder="value.placeholderText" placeholder-class="font_size_text_l">
					</view>
				</view>
			</block>
			<!-- <view class="flex_row padding_m_0 border_bottom">
				<view class="font_size_text_xl color_black_333 font_weight">
					随行人员
				</view>
				<view class="margin_left flex_row">
					<input type="text" class="text_align_right margin_right_s" v-model="orderInfo.accompanyName"
						placeholder="请填写随行人员姓名" placeholder-class="font_size_text_l">
				</view>
			</view>
			<view class="flex_row padding_m_0 border_bottom">
				<view class="font_size_text_xl color_black_333 font_weight">
					随行人员手机号
				</view>
				<view class="margin_left flex_row">
					<input type="text" class="text_align_right margin_right_s" v-model="orderInfo.accompanyPhone"
						placeholder="请填写随行人员手机号" placeholder-class="font_size_text_l">
				</view>
			</view> -->
			
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
		<view class="sure_buttton margin_top_xxl ">
			立即支付
		</view>
		<u-picker :show="show" :columns="hospitalList" keyName="name" :title="selecttitle" @confirm="sureSelect"
			@close="cancelSelect" visibleItemCount="12"  itemHeight="48" confirmColor="#FF6437">
		</u-picker>
		<u-datetime-picker :show="timeShow" v-model="orderInfo.time" mode="datetime" :formatter="formatter"
			@confirm="sureSelectTime" @close="cancelSelectTime" visibleItemCount="12"  itemHeight="48" confirmColor="#FF6437"></u-datetime-picker>
		<!-- <u-popup :show="show" mode="bottom" :round="15" :closeable="true"  @close="close" @open="open">
		    <view>
		        <text>人生若只如初见，何事秋风悲画扇</text>
		    </view>
		</u-popup> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ordinaryInfo:{ //普通号
					hospital:{
						title: '就诊医院',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊医院"
					},
					clinic:{
						title: '就诊科室',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊科室"
					},
					time:{
						title: '就诊时间',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊时间"
					},
					patient:{
						title: '就诊患者',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊患者"
					},
					other:{
						title:'特殊要求',
						isSure:false,
						content:'',
						placeholderText: "请填写要求"
					}
				},
				expertInfo:{ // 专家号
					hospital:{
						title: '就诊医院',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊医院"
					},
					clinic:{
						title: '就诊科室',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊科室"
					},
					time:{
						title: '就诊时间',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊时间"
					},
					patient:{
						title: '就诊患者',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊患者"
					},
					other:{
						title:'特殊要求',
						isSure:false,
						content:'',
						placeholderText: "请填写要求"
					}
				},
				specialInfo:{ // 特约号
					hospital:{
						title: '就诊医院',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊医院"
					},
					clinic:{
						title: '就诊科室',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊科室"
					},
					time:{
						title: '就诊时间',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊时间"
					},
					patient:{
						title: '就诊患者',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊患者"
					},
					other:{
						title:'特殊要求',
						isSure:false,
						content:'',
						placeholderText: "请填写要求"
					}
				},
				inspectInfo:{ // 预约检查
					hospital:{
						title: '就诊医院',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊医院"
					},
					clinic:{
						title: '就诊科室',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊科室"
					},
					time:{
						title: '就诊时间',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊时间"
					},
					patient:{
						title: '就诊患者',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊患者"
					},
					other:{
						title:'特殊要求',
						isSure:false,
						content:'',
						placeholderText: "请填写要求"
					}
				},
				consultationInfo:{ // 问诊
					hospital:{
						title: '就诊医院',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊医院"
					},
					clinic:{
						title: '就诊科室',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊科室"
					},
					time:{
						title: '就诊时间',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊时间"
					},
					patient:{
						title: '就诊患者',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊患者"
					},
					other:{
						title:'特殊要求',
						isSure:false,
						content:'',
						placeholderText: "请填写要求"
					}
				},
				sendTakeInfo:{ // 送取
					hospital:{
						title: '就诊医院',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊医院"
					},
					clinic:{
						title: '就诊科室',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊科室"
					},
					time:{
						title: '就诊时间',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊时间"
					},
					patient:{
						title: '就诊患者',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊患者"
					},
					other:{
						title:'特殊要求',
						isSure:false,
						content:'',
						placeholderText: "请填写要求"
					},
					receiving:{ //收件信息
						title:'收件信息',
						isSure:false,
						content:'',
						placeholderText: "请填写收件信息"
					},
					reportInfo:{//报告信息
						title:'报告信息',
						isSure:false,
						content:'',
						placeholderText: "请填写报告信息"
					},
					orderRemarks:{ // 订单备注
						title:'订单备注',
						isSure:false,
						content:'',
						placeholderText: "请填写订单备注"
					}
				},
				buyMedicine:{ //买药
					patient:{
						title: '就诊患者',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊患者"
					},
					time:{
						title: '就诊时间',
						isSure: true,
						content: '',
						placeholderText: "请选择就诊时间"
					},
					other:{
						title:'特殊要求',
						isSure:false,
						content:'',
						placeholderText: "请填写要求"
					},
					buyAddress:{ //购买地址
						title:'购买地址',
						isSure:false,
						content:'',
						placeholderText: "请填写购买地址"
					},
					receivingInfo:{//收件信息
						title:'收件信息',
						isSure:false,
						content:'',
						placeholderText: "请填写收件信息"
					},
					drugName:{ // 药品名称
						title:'订单备注',
						isSure:false,
						content:'',
						placeholderText: "请填写订单备注"
					}
				},
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
					hospital: '', //医院
					department: '', //科室
					time: Number(new Date()), //时间
					patient: '', //患者
					accompanyName: '', //随行人员
					accompanyPhone: '', //随行人员手机号
					remarks: '' //备注
				},
				show: false,
				selecttitle: '',
				hospitalList: [
					[{
						name: "华夏军区第一医院"
					}, {
						name: "华夏军区第一医院"
					}, {
						name: "华夏军区第一医院"
					}, {
						name: "华夏军区第一医院"
					},{
						name: "华夏军区第一医院"
					}, {
						name: "华夏军区第一医院"
					}, {
						name: "华夏军区第一医院"
					}, {
						name: "华夏军区第一医院"
					},{
						name: "华夏军区第一医院"
					}, {
						name: "华夏军区第一医院"
					}, {
						name: "华夏军区第一医院"
					}, {
						name: "华夏军区第一医院"
					}, ]
				],
				timeShow: false
			}
		},
		onReady() {
			// 微信小程序需要用此写法
			this.$refs.datetimePicker.setFormatter(this.formatter)
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
			selectInfo(vlaue, key) { // 点击选择
				if (key != 'time') {
					this.show = !this.show
					if (key == 'hospital') {
						this.selecttitle = '选择医院'
					} else if (key == 'clinic') {
						this.selecttitle = '选择科室'
					} else if (key == 'patient') {
						this.selecttitle = '选择患者'
					}
				} else {
					this.timeShow = !this.timeShow
				}
			},
			sureSelect(e) { // 确定选定内容
				this.show = !this.show
			},
			cancelSelect(e) { //取消选择
				this.show = !this.show
			},
			sureSelectTime(e) { //确定选择时间
				this.timeShow = !this.timeShow
			},
			cancelSelectTime(e) { //取消选择
				this.timeShow = !this.timeShow
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
