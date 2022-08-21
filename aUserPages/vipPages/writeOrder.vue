<template>
	<view class="padding_bottom_l">
		<view class="box_690 padding_0_l margin_left_l ">
			<view v-show="ordinaryInfo.isShow">
				<view class="font_weight font_size_text_xl padding_m_0 color_black ">
					预约普通号：
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊医院<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(1,ordinaryInfo.service_type,0)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!ordinaryInfo.hospitalName">请选择就诊医院</text>
							<text v-if="ordinaryInfo.hospitalName"
								class="color_black_333">{{ordinaryInfo.hospitalName}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊科室<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(2,ordinaryInfo.service_type,ordinaryInfo.hospital_id)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!ordinaryInfo.clinicName">请选择就诊科室</text>
							<text v-if="ordinaryInfo.clinicName"
								class="color_black_333">{{ordinaryInfo.clinicName}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊时间<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(3,ordinaryInfo.service_type,0)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!ordinaryInfo.service_time">请选择就诊时间</text>
							<text v-if="ordinaryInfo.service_time"
								class="color_black_333">{{ordinaryInfo.service_time}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊患者<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(4,ordinaryInfo.service_type)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!ordinaryInfo.patientName">请选择就诊患者</text>
							<text v-if="ordinaryInfo.patientName"
								class="color_black_333">{{ordinaryInfo.patientName}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						特殊要求
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s color_black_beb"
							v-model="ordinaryInfo.remark" placeholder="请填写备注"
							placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
			</view>
			<view v-show="expertInfo.isShow">
				<view class="font_weight font_size_text_xl padding_m_0 color_black ">
					预约专家号：
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊医院<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(1,expertInfo.service_type,0)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!expertInfo.hospitalName">请选择就诊医院</text>
							<text v-if="expertInfo.hospitalName"
								class="color_black_333">{{expertInfo.hospitalName}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊科室<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(2,expertInfo.service_type,expertInfo.hospital_id)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!expertInfo.clinicName">请选择就诊科室</text>
							<text v-if="expertInfo.hospitalName"
								class="color_black_333">{{expertInfo.clinicName}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊时间<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(3,expertInfo.service_type,0)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!expertInfo.service_time">请选择就诊时间</text>
							<text v-if="expertInfo.service_time"
								class="color_black_333">{{expertInfo.service_time}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊患者<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(4,expertInfo.service_type)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!expertInfo.patientName">请选择就诊患者</text>
							<text v-if="expertInfo.patientName"
								class="color_black_333">{{expertInfo.patientName}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom ">
					<view class="font_size_text_xl color_black_333 font_weight">
						特殊要求
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s" v-model="expertInfo.remark"
							placeholder="请填写备注" placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
			</view>
			<view v-show="specialInfo.isShow">
				<view class="font_weight font_size_text_xl padding_m_0 color_black ">
					预约特诊号：
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊医院<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(1,specialInfo.service_type,0)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!specialInfo.hospitalName">请选择就诊医院</text>
							<text v-if="specialInfo.hospitalName"
								class="color_black_333">{{specialInfo.hospitalName}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊科室<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(2,specialInfo.service_type,specialInfo.hospital_id)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!specialInfo.clinicName">请选择就诊科室</text>
							<text v-if="specialInfo.hospitalName"
								class="color_black_333">{{specialInfo.clinicName}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊时间<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(3,specialInfo.service_type,0)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!specialInfo.service_time">请选择就诊时间</text>
							<text v-if="specialInfo.service_time"
								class="color_black_333">{{specialInfo.service_time}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊患者<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(4,specialInfo.service_type)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!specialInfo.patientName">请选择就诊患者</text>
							<text v-if="specialInfo.patientName"
								class="color_black_333">{{specialInfo.patientName}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						特殊要求
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s" v-model="specialInfo.remark"
							placeholder="请填写备注" placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
			</view>
			<view v-show="inspectInfo.isShow">
				<view class="font_weight font_size_text_xl padding_m_0 color_black ">
					开单及预约检查：
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊医院<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(1,inspectInfo.service_type,0)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!inspectInfo.hospitalName">请选择就诊医院</text>
							<text v-if="inspectInfo.hospitalName"
								class="color_black_333">{{inspectInfo.hospitalName}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊科室<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(2,inspectInfo.service_type,inspectInfo.hospital_id)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!inspectInfo.clinicName">请选择就诊科室</text>
							<text v-if="inspectInfo.hospitalName"
								class="color_black_333">{{inspectInfo.clinicName}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊时间<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(3,inspectInfo.service_type,0)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!inspectInfo.service_time">请选择就诊时间</text>
							<text v-if="inspectInfo.service_time"
								class="color_black_333">{{inspectInfo.service_time}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊患者<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(4,inspectInfo.service_type)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!inspectInfo.patientName">请选择就诊患者</text>
							<text v-if="inspectInfo.patientName"
								class="color_black_333">{{inspectInfo.patientName}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						特殊要求
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s" v-model="inspectInfo.remark"
							placeholder="请填写备注" placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
			</view>
			<view v-show="consultationInfo.isShow">
				<view class="font_weight font_size_text_xl padding_m_0 color_black ">
					问诊：
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊医院<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(1,consultationInfo.service_type,0)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!consultationInfo.hospitalName">请选择就诊医院</text>
							<text v-if="consultationInfo.hospitalName"
								class="color_black_333">{{consultationInfo.hospitalName}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊科室<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(2,consultationInfo.service_type,consultationInfo.hospital_id)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!consultationInfo.clinicName">请选择就诊科室</text>
							<text v-if="consultationInfo.hospitalName"
								class="color_black_333">{{consultationInfo.clinicName}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊时间<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(3,consultationInfo.service_type,0)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!consultationInfo.service_time">请选择就诊时间</text>
							<text v-if="consultationInfo.service_time"
								class="color_black_333">{{consultationInfo.service_time}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊患者<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(4,consultationInfo.service_type)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!consultationInfo.patientName">请选择就诊患者</text>
							<text v-if="consultationInfo.patientName"
								class="color_black_333">{{consultationInfo.patientName}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						特殊要求
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s" v-model="consultationInfo.remark"
							placeholder="请填写备注" placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
			</view>
			<view v-show="sendTakeInfo.isShow">
				<view class="font_weight font_size_text_xl padding_m_0 color_black ">
					取寄结果：
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊医院<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(1,sendTakeInfo.service_type,0)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!sendTakeInfo.hospitalName">请选择就诊医院</text>
							<text v-if="sendTakeInfo.hospitalName"
								class="color_black_333">{{sendTakeInfo.hospitalName}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊科室<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(2,sendTakeInfo.service_type,sendTakeInfo.hospital_id)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!sendTakeInfo.clinicName">请选择就诊科室</text>
							<text v-if="sendTakeInfo.hospitalName"
								class="color_black_333">{{sendTakeInfo.clinicName}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊时间<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(3,sendTakeInfo.service_type,0)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!sendTakeInfo.service_time">请选择就诊时间</text>
							<text v-if="sendTakeInfo.service_time"
								class="color_black_333">{{sendTakeInfo.service_time}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊患者<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(4,sendTakeInfo.service_type)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!sendTakeInfo.patientName">请选择就诊患者</text>
							<text v-if="sendTakeInfo.patientName"
								class="color_black_333">{{sendTakeInfo.patientName}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						特殊要求
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s" v-model="sendTakeInfo.remark"
							placeholder="请填写备注" placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						收件信息
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s" v-model="sendTakeInfo.receivingInfo"
							placeholder="请填写收件信息" placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						报告信息
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s" v-model="sendTakeInfo.report"
							placeholder="请填写报告信息" placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						订单备注
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s" v-model="sendTakeInfo.order"
							placeholder="请填写订单备注" placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
			</view>
			<view v-show="buyMedicine.isShow">
				<view class="font_weight font_size_text_xl padding_m_0 color_black ">
					买药：
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊患者<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(4,buyMedicine.service_type)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!buyMedicine.patientName">请选择就诊患者</text>
							<text v-if="buyMedicine.patientName"
								class="color_black_333">{{buyMedicine.patientName}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊时间<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row" @click="openHospital(3,buyMedicine.service_type,0)">
						<view class="font_size_text_l text_align_right margin_right_s">
							<text class="color_black_beb" v-if="!buyMedicine.service_time">请选择就诊时间</text>
							<text v-if="buyMedicine.service_time"
								class="color_black_333">{{buyMedicine.service_time}}</text>
						</view>
						<u-icon name="arrow-right" color="#B4B4B4"></u-icon>
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						特殊要求
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s" v-model="buyMedicine.remark"
							placeholder="请填写备注" placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						购买地址
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s" v-model="buyMedicine.buyAddress"
							placeholder="请填写购买地址" placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						收件信息
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s" v-model="buyMedicine.receivingInfo"
							placeholder="请填写收件信息" placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						订单备注
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s" v-model="buyMedicine.drugName"
							placeholder="请填写订单备注" placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
			</view>
			<view class="margin_l_0 font_size_text_xl color_black_333 font_weight">
				支付方式
			</view>
			<view class="flex_row width_all margin_top_s padding_bottom_xl" v-for="(item, index) in payStyle"
				:key="index" @click="selectPayStyle(item,index)">
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
		<view class="sure_buttton margin_top_xxl " @click="toPay">
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
				hospitalShow:false,
				ordinaryInfo: { //普通号
					service_type: 6,
					hospitalName: '',
					clinicName: '',
					service_time: '',
					patientName: '',
					remark: '',
					hospital_id: '',
					patient_id: '',
					department_id: '',
					isShow: false
				},
				expertInfo: { //专家号
					service_type: 7,
					hospitalName: '',
					clinicName: '',
					service_time: '',
					patientName: '',
					remark: '',
					hospital_id: '',
					patient_id: '',
					department_id: '',
					isShow: false
				},
				specialInfo: { //特约号
					service_type: 8,
					hospitalName: '',
					clinicName: '',
					service_time: '',
					patientName: '',
					remark: '',
					hospital_id: '',
					patient_id: '',
					department_id: '',
					isShow: false
				},
				inspectInfo: { //预约检查
					service_type: 12,
					hospitalName: '',
					clinicName: '',
					service_time: '',
					patientName: '',
					remark: '',
					hospital_id: '',
					patient_id: '',
					department_id: '',
					isShow: false
				},
				consultationInfo: { //问诊
					service_type: 9,
					hospitalName: '',
					clinicName: '',
					service_time: '',
					patientName: '',
					remark: '',
					hospital_id: '',
					patient_id: '',
					department_id: '',
					isShow: false
				},
				sendTakeInfo: { //送取
					service_type: 11,
					hospitalName: '',
					clinicName: '',
					service_time: '',
					patientName: '',
					remark: '', //特殊要求
					hospital_id: '',
					patient_id: '',
					department_id: '',
					receivingInfo: '', //收件信息
					report: '', //报告信息
					order: '', //订单备注
					isShow: false

				},
				buyMedicine: { //买药
					service_type: 10,
					service_time: '',
					patientName: '',
					remark: '',
					patient_id: '',
					buyAddress: '', //购买地址
					receivingInfo: '', //收件信息
					drugName: '', //订单备注
					isShow: false
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
				time: Number(new Date()),
				departmentShow: false,
				selecttitle: '',
				hospitalList: [],//医院列表
				clinicList:[[]],//科室列表
				timeShow: false,
				typeList: [] ,//就诊类型
				addressInfo:null ,// 定位信息
				page:1,
				loading:true,
				operateType:'',//选择时的操作类型
				patientShow:false,//患者弹窗
				patientList:[],//患者列表
				pay_channel:1
			}
		},
		onReady() {

			// 微信小程序需要用此写法
			this.$refs.datetimePicker.setFormatter(this.formatter)
		},
		onLoad(options) {
			// console.log(options.typeList)
			this.typeList = JSON.parse(options.typeList)
			this.getData()
			this.addressInfo = uni.getStorageSync('addressInfo')
			this.getDepartment()
		},
		methods: {
			getData(e) { //初始化数据
				if (this.typeList.includes(6)) {
					console.log(2222)
					this.ordinaryInfo.isShow = true
				}
				if (this.typeList.includes(7)) {
					console.log(1111)
					this.expertInfo.isShow = true
				}
				if (this.typeList.includes(8)) {
					this.specialInfo.isShow = true
				}
				if (this.typeList.includes(12)) {
					this.inspectInfo.isShow = true
				}
				if (this.typeList.includes(9)) {
					this.consultationInfo.isShow = true
				}
				if (this.typeList.includes(11)) {
					this.sendTakeInfo.isShow = true
				}
				if (this.typeList.includes(10)) {
					this.buyMedicine.isShow = true
				}
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
				if (type === 'minute') {
					return `${value}分`
				}
				return value
			},
			sureSelect(e) { // 确定选定科室
				if (this.operateType == 6) {
					this.ordinaryInfo.clinicName = e.value[0].name
					this.ordinaryInfo.department_id = e.value[0].id
				}
				if (this.operateType == 7) {
					this.expertInfo.clinicName = e.value[0].name
					this.expertInfo.department_id = e.value[0].id
				}
				if (this.operateType == 8) {
					this.specialInfo.clinicName = e.value[0].name
					this.specialInfo.department_id = e.value[0].id
				}
				if (this.operateType == 12) {
					this.inspectInfo.clinicName = e.value[0].name
					this.inspectInfo.department_id = e.value[0].id
				}
				if (this.operateType == 9) {
					this.consultationInfo.clinicName = e.value[0].name
					this.consultationInfo.department_id = e.value[0].id
				}
				if (this.operateType == 11) {
					this.sendTakeInfo.clinicName = e.value[0].name
					this.sendTakeInfo.department_id = e.value[0].id
				}
				if (this.operateType == 10) {
					this.buyMedicine.clinicName = e.value[0].name
					this.buyMedicine.hospital_id = e.value[0].id
				}
				this.departmentShow = !this.departmentShow
			},
			cancelSelect(e) { //取消选择
				this.departmentShow = !this.departmentShow
			},
			sureSelectTime(e) { //确定选择时间
			let time = this.getFullTime(e.value)
			if (this.operateType == 6) {
				this.ordinaryInfo.service_time = time
			}
			if (this.operateType == 7) {
				this.expertInfo.service_time = time
			}
			if (this.operateType == 8) {
				this.specialInfo.service_time = time
			}
			if (this.operateType == 12) {
				this.inspectInfo.service_time = time
			}
			if (this.operateType == 9) {
				this.consultationInfo.service_time = time
			}
			if (this.operateType == 11) {
				this.sendTakeInfo.service_time = time
			}
			if (this.operateType == 10) {
				this.buyMedicine.service_time = time
			}
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
				if (this.operateType == 6) {
					this.ordinaryInfo.hospitalName = item.name
					this.ordinaryInfo.hospital_id = item.id
				}
				if (this.operateType == 7) {
					this.expertInfo.hospitalName = item.name
					this.expertInfo.hospital_id = item.id
				}
				if (this.operateType == 8) {
					this.specialInfo.hospitalName = item.name
					this.specialInfo.hospital_id = item.id
				}
				if (this.operateType == 12) {
					this.inspectInfo.hospitalName = item.name
					this.inspectInfo.hospital_id = item.id
				}
				if (this.operateType == 9) {
					this.consultationInfo.hospitalName = item.name
					this.consultationInfo.hospital_id = item.id
				}
				if (this.operateType == 11) {
					this.sendTakeInfo.hospitalName = item.name
					this.sendTakeInfo.hospital_id = item.id
				}
				if (this.operateType == 10) {
					this.buyMedicine.hospitalName = item.name
					this.buyMedicine.hospital_id = item.id
				}
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
				if (this.operateType == 6) {
					this.ordinaryInfo.patientName = item.patient_name
					this.ordinaryInfo.patient_id = item.id
				}
				if (this.operateType == 7) {
					this.expertInfo.patientName = item.patient_name
					this.expertInfo.patient_id = item.id
				}
				if (this.operateType == 8) {
					this.specialInfo.patientName = item.patient_name
					this.specialInfo.patient_id = item.id
				}
				if (this.operateType == 12) {
					this.inspectInfo.patientName = item.patient_name
					this.inspectInfo.patient_id = item.id
				}
				if (this.operateType == 9) {
					this.consultationInfo.patientName = item.patient_name
					this.consultationInfo.patient_id = item.id
				}
				if (this.operateType == 11) {
					this.sendTakeInfo.patientName = item.patient_name
					this.sendTakeInfo.patient_id = item.id
				}
				if (this.operateType == 10) {
					this.buyMedicine.patientName = item.patient_name
					this.buyMedicine.patient_id = item.id
				}
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
					
				})
				
			},
			getInfo(e){
				let record_json = []
				if (this.typeList.includes(6)) {
					record_json.push(this.ordinaryInfo)
				}
				if (this.typeList.includes(7)) {
					record_json.push(this.expertInfo)
				}
				if (this.typeList.includes(8)) {
					record_json.push(this.specialInfo)
				}
				if (this.typeList.includes(12)) {
					record_json.push(this.inspectInfo)
				}
				if (this.typeList.includes(9)) {
					record_json.push(this.consultationInfo)
				}
				if (this.typeList.includes(11)) {
					record_json.push(this.sendTakeInfo)
				}
				if (this.typeList.includes(10)) {
					record_json.push(this.buyMedicine)
				}
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
