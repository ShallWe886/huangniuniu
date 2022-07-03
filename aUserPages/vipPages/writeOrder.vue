<template>
	<view>
		<view class="box_690 padding_0_l margin_left_l ">
			<block v-for="(item,index) in inputList">
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						{{item.title}} <text class="color_orange margin_left_s" v-if="item.isSure">*</text>
					</view>
					<view class="margin_left flex_row" @click="selectInfo(item,index)">
						<input type="text" class="text_align_end margin_right_s" v-model="item.content"
							:placeholder="item.placeholderText" placeholder-class="font_size_text_l"
							disabled="item.isSure">

						<u-icon name="arrow-right" color="#B4B4B4" v-if="item.isSure"></u-icon>
					</view>
				</view>
			</block>
			<view class="flex_row padding_m_0 border_bottom">
				<view class="font_size_text_xl color_black_333 font_weight">
					随行人员
				</view>
				<view class="margin_left flex_row">
					<input type="text" class="text_align_end margin_right_s" v-model="orderInfo.accompanyName"
						placeholder="请填写随行人员姓名" placeholder-class="font_size_text_l">
				</view>
			</view>
			<view class="flex_row padding_m_0 border_bottom">
				<view class="font_size_text_xl color_black_333 font_weight">
					随行人员手机号
				</view>
				<view class="margin_left flex_row">
					<input type="text" class="text_align_end margin_right_s" v-model="orderInfo.accompanyPhone"
						placeholder="请填写随行人员手机号" placeholder-class="font_size_text_l">
				</view>
			</view>
			<view class="flex_row padding_m_0 border_bottom">
				<view class="font_size_text_xl color_black_333 font_weight">
					备注
				</view>
				<view class="margin_left flex_row">
					<input type="text" class="text_align_end margin_right_s" v-model="orderInfo.remarks"
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
		<view class="sure_buttton margin_top_xxl ">
			立即支付
		</view>
		<u-picker :show="show" :columns="hospitalList" keyName="name" :title="selecttitle" @confirm="sureSelect"
			@close="cancelSelect" visibleItemCount="12"  itemHeight="48">
		</u-picker>
		<u-datetime-picker :show="timeShow" v-model="orderInfo.time" mode="datetime" :formatter="formatter"
			@confirm="sureSelectTime" @close="cancelSelectTime" visibleItemCount="12"  itemHeight="48"></u-datetime-picker>
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
			selectInfo(item, index) { // 点击选择
				if (index != 2) {
					this.show = !this.show
					if (index == 0) {
						this.selecttitle = '选择医院'
					} else if (index == 1) {
						this.selecttitle = '选择科室'
					} else if (index == 3) {
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
