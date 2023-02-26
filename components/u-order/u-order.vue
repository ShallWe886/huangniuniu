<template>
	<view v-if="list.length > 0" :class="{popupShow:popshow}">
		<block v-for="(item,index) in list" :key="index">
			<view class="box_690 padding_l margin_left_l">
				<view class="flex_row">
					<image src="/static/image/logo.png" mode="aspectFill" class="accept_item_img flex_shrink"></image>
					<view class="margin_left_m">
						<view class="tip_yellow  " v-if="type == 4 && item.service_status == 6">
							完成审核中
						</view>
						<view class="font_size_text_s" style="line-height: 24rpx;">
							<text style="color: #BEBEBE;">订单时间：</text><text class="color_black_888">20{{item.create_time}}</text>
						</view>
						<view class="flex_row margin_top_m">
							<view v-if="item.hospital_name" class="accept_item_label margin_right_s ">
								{{item.hospital_name}}
							</view>
							<view v-if="item.depart_name" class="accept_item_label margin_right_s">
								{{item.depart_name}}
							</view>
							<view class="accept_item_label margin_right_s">
								{{serviceType[item.service_type].name}}
							</view>
						</view>
						<view class="font_weight color_black_333 font_size_title_l margin_top_m"
							style="line-height: 36rpx;">
							¥{{item.service_fee}}
						</view>
						<view class=" color_black_333 font_size_text_m margin_top_m" style="line-height: 26rpx;">
							{{item.patient_name}}<text class="margin_left_l" v-if="item.phone">{{item.phone.substring(0, 3) + '****' + item.phone.substring(7)}}</text>
							
						</view>
						<view class="color_black_333 font_size_text_s margin_top_m" style="line-height: 24rpx;" v-if="type!=5">
							<text>就诊时间：</text>{{item.service_time || ''}}
						</view>
						<!-- <view class="font_size_text_m color_orange margin_top_m" style="line-height: 26rpx;"
							v-if="type!=5">
							2022-12-12 3:00-5:00
						</view>
						<view class="font_size_text_m color_black_888 margin_top_m" style="line-height: 26rpx;"
							v-if="type==5">
							2022-12-12 3:00-5:00
						</view> -->
						<view class="font_size_text_l color_black_333 margin_top_m" style="line-height: 26rpx;"
							v-if="type==5">
							收入：￥{{item.attdent_balance}}
						</view>
					</view>
				</view>
				<view class="flex_row justify_end margin_top_m" v-if="type != 5">
					<block v-if="type == 1">
						<view class="accept_item_btn_border" @click="operate(1, item)">
							拒绝
						</view>
						<view class="accept_item_btn_orange margin_left_xl" @click="operate(0, item)">
							 接受
						</view>
					</block>
					<block v-if="type == 2">
						<view class="accept_item_btn_orange" @click="operate(2, item)">
							抢单
						</view>
					</block>
					<block v-if="type == 4 || type == 3">
						<view class="accept_item_btn_orange margin_right_m" @click="openOrderFeedback(item)">
							留言列表
						</view>
					</block>
					<block>
						<view v-if="type == 3 || (type == 4 && item.service_status !== 6)" class="accept_item_btn_border margin_right_l" @click="operate(3, item)">
							转单
						</view>
						<view v-if="type == 3" class="accept_item_btn_orange margin_left_xl" @click="operate(4, item)">
							取消
						</view>
					</block>
					<block v-if="type == 4 && item.service_status !== 6">
						<view class="accept_item_btn_orange" @click="operate(5, item)">
							完成订单
						</view>
					</block>
				</view>
			</view>
		</block>
		<u-popup :show="popshow" @close="close" @open="open" mode="center" :round="20" closeable="true">
			<view class="pop_box flex_column" v-if="type == 1 || type == 3">
				<view class="flex_row" style="margin-top:110rpx;">
					<view class="color_black_333 font_size_text_xl" v-if="type == 1">
						拒绝原因
					</view>
					<view class="color_black_333 font_size_text_xl" v-if="type == 3">
						<text v-if="isCancel == 0">取消原因</text>
						<text v-if="isCancel == 1">转单原因</text>
					</view>
					<view class="input_box flex_row color_black_888 font_size_text_l margin_left_m" v-if="isCancel == 1"> @click="openPop(isCancel)">
						请选择
						<view class="margin_left">
							<u-icon name="play-right-fill" size="30"></u-icon>
						</view>
					</view>
				</view>
				<view class="input_more_box margin_top_xl">
					<input v-model="reason" type="text" placeholder="请输入备注" placeholder-style="font-size: 28rpx;color: #BEBEBE;">
				</view>
				<view class="submit_reason margin_top_xxl" @click="refuse">
					提交
				</view>
			</view>
			<view class="result_box flex_column" v-if="type == 2 || type == 4">
				<block v-if="type == 2 && result">
					<image src="/static/image/order_result01.png" mode="aspectFill" class="result_img"></image>
					<view class="" style="font-size: 40rpx;color: #17CD44;font-weight: bold;margin-top: 24rpx;">
						抢单成功
					</view>
					<view class="kehu_box margin_top_xl">
						联系客户
					</view>
				</block>
				<block v-if="type == 2 && !result">
					<image src="/static/image/order_result02.png" mode="aspectFill" class="result_img"></image>
					<view class="" style="font-size: 40rpx;color: #FF6437;font-weight: bold;margin-top: 24rpx;">
						抢单失败
					</view>
				</block>
				<block v-if="type == 4">
					<image src="/static/image/order_result01.png" mode="aspectFill" class="result_img"></image>
					<view class="" style="font-size: 40rpx;color: #17CD44;font-weight: bold;margin-top: 24rpx;">
						恭喜您完成订单
					</view>
					<view class=" margin_top_l">
						<!-- <text class="font_size_title_s color_black_999">获取收益：</text>
						<text class="font_size_title_l color_black_333 font_weight margin_left_s">¥25.00</text> -->
					</view>
				</block>
			</view>
		</u-popup>
		<!-- <u-popup :show="hospitalShow" mode="bottom" :round="15" :closeable="true" @close="closeSelectHospital"
			@scrolltolower="getPull">
			<view class="padding_l text_align_center font_size_title_s color_black font_weight">
				选择拒绝理由
			</view>
			<scroll-view scroll-y="true" style="height: 450rpx;">
				<view class="margin_top_l text_align_center font_size_title_s color_black_999"
					v-if="refuseList.length == 0">
					暂无可选医院
				</view>
				<view class="font_size_text_l color_black_333 border_bottom padding_l text_align_center"
					v-for="(item,index) in refuseList" :key="index" @click="sureHospital(item.name)">
					{{item.name}}
				</view>
			</scroll-view>
		</u-popup> -->
	</view>
</template>

<script>
	export default {
		name: "u-order",
		props: {
			refuseList: [
				{name: '拒绝原因1'},
				{name: '拒绝原因2'},
				{name: '拒绝原因3'},
				{name: '拒绝原因4'},
			],
			list: {
				type: Array,
				default: []
			},
			type: { // 1.接单 2.抢单  3.待服务 4.服务中 5.已完成
				type: Number,
				default: 0
			}
		},
		data() {
			return {
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
				hospitalShow: false,
				popshow: false,
				result: false ,// 抢单结果
				isCancel:0, // 0：取消  1：转单
				reason: '',
				userInfoEscort: uni.getStorageSync('userInfoEscort'),
				dispatch_id: 0,
				service_id: 0,
			};
		},
		methods: {
			getPushMes(){
				uni.requestSubscribeMessage({
				  tmplIds: [ 'Izx9LtxDYKSf5p6EQ94lXy3pny1EwTg0yV92eE24Ayo', 'P_pLvSpYyXRD91Yay7cj61ChWMBNaHi7qsBTrvgN7j0', 'hwYtsSpoITsXoYxDqcA3vhN_jASpKpTjj050zpS7g1U'],
				  success (res) {
					  console.log('小程序推送消息',res);
				  },
				  fail(err) {
				  	console.log('小程序推送消息11111', err);
				  }
				})
			},
			openOrderFeedback(item) {
				console.log('@@@', item);
				uni.navigateTo({
					url:'/aUserPages/orderFeedback/orderFeedback?type=1&service_id='+item.service_id+'&order_id='+item.order_id
				})
			},
			openPop(status) {
				if(status == 0) {
					this.hospitalShow = true
				}
			},
			closeSelectHospital() {
				this.hospitalShow = false
			},
			sureHospital(name) {
				this.reason = name;
				this.hospitalShow = false
			},
			operate(status, item) { //0:接受 1：拒绝 2：抢单 3：转单 4：取消 5：完成订单
				this.dispatch_id = item.dispatch_id;
				this.service_id = item.service_id;
				let name = 'escortAccept';
				let arr = {};
				if (status == 0) {
					name = 'escortAccept';
					arr = {dispatch_id: item.dispatch_id, status: 1};
					// uni.showToast({
					// 	title: "该订单陪诊时间与您xxx陪诊时间冲突（3s）",
					// 	duration: 3000,
					// 	icon: "none"
					// })
				} else if (status == 1) {
					this.popshow = true
					return;
				} else if (status == 2) {
					name = 'escortRob';
					arr = {service_id: item.service_id};
				} else if (status == 3) {
					name = 'escortTransfer';
					arr = {service_id: item.service_id};
					let _this = this;
					uni.showModal({
					    title: '温馨提示',  //提示标题
					    content: '你是否确认转单，转单后该订单退回后台',  //提示内容
					    showCancel: true, //是否显示取消按钮
					    success: function (res) {
							let isFlag = 1;
					        _this.$api.escortTransfer(arr).then(res=>{
					        	isFlag = 1;
					        	_this.dataHandle(status, isFlag)
					        	console.log('res', res);
					        }).catch(error =>{
					        	isFlag = 0;
					        	_this.result = false;
					        	_this.dataHandle(status, isFlag)
					        	console.log('res111', error, isFlag);
					        	// uni.showToast({
					        	// 	title: error.msg,
					        	// 	duration: 3000,
					        	// 	icon: "none"
					        	// })
					        })
					    }
					})
					return;
					// this.isCancel = 1
					// this.popshow = true
				} else if (status == 4) {
					this.isCancel = 0
					this.popshow = true
					return;
				} else if (status == 5) {
					name = 'escortFinish';
					arr = {service_id: item.service_id};
					// this.popshow = true
					uni.navigateTo({
						url:'/accompanyPages/orderList/completeOrder?service_id='+item.service_id
					})
					return;
				}
				this.getPushMes();
				console.log(status, name);
			this.getFunction(status, name, arr);
			},
			refuse() {
				let name = '';
				let arr = {};
				if(this.type == 3) {
					name = 'escortCancle';
					arr = {service_id: this.service_id,  reason:this.reason};
				} else {
					name = 'escortAccept';
					arr = {dispatch_id: this.dispatch_id, status: 2, reason:this.reason};
				}
				this.getFunction(1, name, arr)
			},
			getFunction(status, name, arr)
			{
				let isFlag = 1;
				this.$api[name](arr).then(res=>{
					isFlag = 1;
					this.dataHandle(status, isFlag)
					console.log('res', res);
				}).catch(error =>{
					isFlag = 0;
					// this.result = false;
					this.dataHandle(status, isFlag)
					console.log('res111', error, isFlag);
					// uni.showToast({
					// 	title: error.msg,
					// 	duration: 3000,
					// 	icon: "none"
					// })
				})
			},
			dataHandle(status, isFlag) {
				console.log('ssss', isFlag, status);
				switch(status) {
					case 0 :
							if(isFlag == 1) {
								setTimeout(function(){
									this.popshow = false
									uni.navigateTo({
										url:'/accompanyPages/orderList/orderList?selectIndex=1'
									})
								},2000)
								// this.$emit('showOverlay',{selectIndex: 0, service_status: 2})
							}
						break;
					case 1 :
							this.close()
							if(isFlag == 1) {
								let time= setTimeout(x=>{
									this.$emit('showOverlay',{selectIndex: 0, service_status: 2})
									clearTimeout(time)
								},3000)
							}
						break;
					case 2 :
							this.popshow = true;
							if(isFlag == 1) {
								this.result = true;
								// this.popshow = false
								setTimeout(function(){
									this.popshow = false
									// uni.navigateTo({
									// 	url:'/accompanyPages/orderList/orderList'
									// })
									this.$emit('showOverlay',{selectIndex: 1, service_status: 3})
								},2000)
							}
						break;
					case 3 :
							this.isCancel = 1
							this.close()
							if(isFlag == 1) {
								let time= setTimeout(x=>{
									this.$emit('showOverlay',{selectIndex: this.type == 3 ? 0 : 1, service_status: this.type == 3 ? 2 : 3})
									clearTimeout(time)
								},2000)
							}
						break;
					case 4 :
							this.isCancel = 0
							this.close()
						break;
					case 5 :
							this.popshow = true
							if(isFlag == 1) {
								let time= setTimeout(x=>{
									this.popshow = false
									this.$emit('showOverlay',{selectIndex: 1, service_status: 3})
									clearTimeout(time)
								},2000)
							}
						break;
					default:
						console.log('default');			
				}
			},
			open() {
				// console.log('open');
			},
			close() {
				this.popshow = false
				// console.log('close');
			}
		},
	}
</script>

<style lang="scss" scoped>
	[class*=tip_] {
		width: 153rpx;
		height: 44rpx;
		line-height: 44rpx;
		text-align: center;
		border-radius: 0px 20rpx 0px 20rpx;
		position: absolute;
		top: 0;
		right: 0;
		color: #ffffff;
		font-size: 26rpx;
	
	}
	.tip_yellow {
		background: #FF6437;
	}
	.popupShow {
		overflow: hidden;
		position: fixed;
		height: 100vh;
		width: 100%;
	}
	.accept_item_img {
		width: 200rpx;
		height: 270rpx;
		border-radius: 10rpx;
		background: #F5F5F5;
	}

	.accept_item_label {
		height: 38rpx;
		line-height: 38rpx;
		padding: 0 20rpx;
		border-radius: 20rpx;
		background: #F5F5F5;
		font-size: 24rpx;
		color: #888888;
		overflow: hidden;
		
		&:nth-child(1) {
			max-width: 134rpx;
		}
		&:nth-child(2) {
			max-width: 48rpx;
		}
		&:nth-child(3) {
			background: #FFF0E5;
			color: #FF6437;
			max-width: 160rpx;
		}
	}

	[class*=accept_item_btn_] {
		padding: 0 10rpx;
		height: 50rpx;
		line-height: 50rpx;
		border-radius: 20rpx;
		// text-align: center;
		background: #ffffff;
		font-size: 28rpx;
		color: #FF6437;
		box-sizing: border-box;
	}

	.accept_item_btn_border {
		border: 2rpx solid #FF6437;
	}

	.accept_item_btn_orange {
		color: #ffffff;
		background: linear-gradient(to right, #FF6437, #FF9B51);
	}

	.pop_box {
		width: 690rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		padding-bottom: 60rpx;

		.input_box {
			width: 470rpx;
			height: 90rpx;
			border-radius: 6rpx;
			border: 1rpx solid #E6E6E6;
			box-sizing: border-box;
			padding: 25rpx 30rpx;
		}

		.input_more_box {
			width: 610rpx;
			height: 90rpx;
			border-radius: 6rpx;
			border: 1rpx solid #E6E6E6;
			box-sizing: border-box;
			padding: 25rpx 30rpx;
		}

		.submit_reason {
			width: 340rpx;
			height: 72rpx;
			background: linear-gradient(135deg, #FF6437 0%, #FF9B51 100%);
			box-shadow: 0rpx 20rpx 50rpx -20rpx rgba(255, 110, 0, 0.2);
			border-radius: 70rpx;
			font-size: 32rpx;
			color: #ffffff;
			line-height: 72rpx;
			text-align: center;
		}
	}

	.result_box {
		width: 600rpx;
		box-sizing: border-box;
		padding: 60rpx;

		.result_img {
			width: 184rpx;
			height: 172rpx;
		}

		.kehu_box {
			width: 220rpx;
			height: 72rpx;
			box-shadow: 0rpx 20rpx 50rpx -20rpx rgba(255, 110, 0, 0.2);
			border-radius: 70rpx;
			border: 2rpx solid;
			// border-image: linear-gradient(135deg, rgba(255, 100, 55, 1), rgba(255, 155, 81, 1)) 2 2;
			font-size: 32rpx;
			color: #FF6437;
			line-height: 72rpx;
			text-align: center;
		}
	}
</style>
