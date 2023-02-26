<template>
	<view class="padding_bottom_l" :class="{popupShow:popupShow}">
		<view class="box_690 padding_0_l margin_left_l ">
			<view v-show="ordinaryInfo.isShow">
				<view class="font_weight font_size_text_xxl padding_m_0 color_black ">
					代办挂号-普通号：
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
					<view class="margin_left flex_row"
						@click="openHospital(2,ordinaryInfo.service_type,ordinaryInfo.hospital_id)">
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
						指定专家
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s  font_size_text_l color_black_333"
							v-model="ordinaryInfo.expert_doctor" placeholder="请填写指定专家"
							placeholder-class="font_size_text_l color_black_beb">
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
						<input type="text" class="text_align_right margin_right_s  font_size_text_l color_black_333"
							v-model="ordinaryInfo.special_request" placeholder="请填写特殊要求"
							placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
			</view>
			<view v-show="expertInfo.isShow">
				<view class="font_weight font_size_text_xxl padding_m_0 color_black ">
					代办挂号-专家号：
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
					<view class="margin_left flex_row"
						@click="openHospital(2,expertInfo.service_type,expertInfo.hospital_id)">
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
						指定专家
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s  font_size_text_l color_black_333"
							v-model="expertInfo.expert_doctor" placeholder="请填写指定专家"
							placeholder-class="font_size_text_l color_black_beb">
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
						<input type="text" class="text_align_right margin_right_s font_size_text_l color_black_333"
							v-model="expertInfo.special_request" placeholder="请填写特殊要求"
							placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
			</view>
			<view v-show="specialInfo.isShow">
				<view class="font_weight font_size_text_xxl padding_m_0 color_black ">
					代办挂号-特诊号：
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
					<view class="margin_left flex_row"
						@click="openHospital(2,specialInfo.service_type,specialInfo.hospital_id)">
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
						指定专家
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s  font_size_text_l color_black_333"
							v-model="specialInfo.expert_doctor" placeholder="请填写指定专家"
							placeholder-class="font_size_text_l color_black_beb">
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
						<input type="text" class="text_align_right margin_right_s font_size_text_l color_black_333"
							v-model="specialInfo.special_request" placeholder="请填写特殊要求"
							placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
			</view>
			<view v-show="inspectInfo.isShow">
				<view class="font_weight font_size_text_xxl padding_m_0 color_black ">
					代办开单以及检查：
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
				<!-- <view class="flex_row padding_m_0 border_bottom">
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
				</view> -->
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						期望检查时间<text class="color_orange margin_left_s">*</text>
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
						检查项目<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s font_size_text_l color_black_333"
							v-model="inspectInfo.check_item" placeholder="请填写检查项目"
							placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						特殊要求
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s font_size_text_l color_black_333"
							v-model="inspectInfo.special_request" placeholder="请填写特殊要求"
							placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
			</view>
			<view v-show="consultationInfo.isShow">
				<view class="font_weight font_size_text_xxl padding_m_0 color_black ">
					代办问诊：
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
					<view class="margin_left flex_row"
						@click="openHospital(2,consultationInfo.service_type,consultationInfo.hospital_id)">
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
						问诊内容<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s font_size_text_l color_black_333"
							v-model="consultationInfo.wz_content" placeholder="请填写问诊内容"
							placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						特殊要求
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s font_size_text_l color_black_333"
							v-model="consultationInfo.special_request" placeholder="请填写特殊要求"
							placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
			</view>
			<view v-show="sendTakeInfo.isShow">
				<view class="font_weight font_size_text_xxl padding_m_0 color_black ">
					代办送取报告：
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
				<!-- <view class="flex_row padding_m_0 border_bottom">
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
				</view> -->
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
						待取报告信息<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s font_size_text_xl color_black_333"
							v-model="sendTakeInfo.voucher" placeholder="请填写待取报告信息"
							placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						特殊要求
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s font_size_text_l color_black_333"
							v-model="sendTakeInfo.special_request" placeholder="请填写特殊要求"
							placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						收件信息<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s font_size_text_xl color_black_333"
							v-model="sendTakeInfo.address_id" placeholder="请填写收件人姓名地址电话"
							placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
				<!-- <view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						订单备注
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s" v-model="sendTakeInfo.order"
							placeholder="请填写订单备注" placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view> -->
			</view>
			<view v-show="buyMedicine.isShow">
				<view class="font_weight font_size_text_xxl padding_m_0 color_black ">
					代办取药：
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
						购药医院<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s font_size_text_l color_black_333"
							v-model="buyMedicine.drug_hospital" placeholder="请填写购买医院"
							placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						期望时间<text class="color_orange margin_left_s">*</text>
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
						药品名称<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s font_size_text_xl color_black_333"
							v-model="buyMedicine.drug_name" placeholder="请填写购买药名,逗号分割"
							placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						特殊要求
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s font_size_text_l color_black_333"
							v-model="buyMedicine.special_request" placeholder="请填写特殊要求"
							placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						购买地址<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s font_size_text_l color_black_333"
							v-model="buyMedicine.address_to_buy" placeholder="请填写购买地址"
							placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						收件信息<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s font_size_text_xl color_black_333"
							v-model="buyMedicine.address_id" placeholder="请填写收件人姓名地址电话"
							placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
				<view class="flex_row padding_m_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						订单备注
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s font_size_text_l color_black_333"
							v-model="buyMedicine.remark" placeholder="请填写订单备注"
							placeholder-class="font_size_text_l color_black_beb">
					</view>
				</view>
			</view>
			<view class="margin_l_0 font_size_text_xl color_black_333 font_weight">
				支付方式
			</view>
			<view class="flex_row width_all margin_top_s padding_bottom_xl">
				<image src="/static/image/pay03.png" class="pay_img"></image>
				<view class="font_size_text_l color_black_333 font_weight margin_left_l">
					积分 <text
						class="color_orange font_size_text_l font_weight margin_left_m">（积分：{{userInfo.user_integral || '0.00'}}）</text>
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
						v-if="index == 0">（余额：{{ userInfo.balance || '0.00'}}）</text>
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
					{{integral_total || 0}}<text v-if="pay_integral && integral_total && integral_total > 20">积分抵扣{{total - discount_total}}元</text>
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
		<!-- <u-picker :show="departmentShow" :columns="clinicList" keyName="name" :title="selecttitle" @confirm="sureSelect"
			@cancel="cancelSelect" visibleItemCount="12" itemHeight="48" confirmColor="#FF6437">
		</u-picker> -->
		<u-datetime-picker :show="timeShow" v-model="time" mode="datetime" :formatter="formatter"
			@confirm="sureSelectTime" :minDate="minDate" @cancel="cancelSelectTime" visibleItemCount="12"
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
		<u-popup :show="patientShow" mode="bottom" :round="15" :closeable="true" @close="closeSelectPatient"
			@scrolltolower="getPatient">
			<view class="padding_l text_align_center font_size_title_s color_black font_weight">
				选择患者
			</view>
			<scroll-view scroll-y="true" style="height: 450rpx;">
				<view class="margin_top_l text_align_center font_size_title_s color_black_999"
					v-if="patientList.length == 0">
					暂无可选患者
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				minDate: Number(new Date()),
				popupShow: false,
				hospitalShow: false,
				ordinaryInfo: { //普通号
					special_request: '', //特殊要求
					service_type: 6,
					hospitalName: '',
					clinicName: '',
					service_time: '',
					patientName: '',
					remark: '',
					hospital_id: '',
					patient_id: '',
					department_id: '',
					isShow: false,
					product_count: 1,
					expert_doctor: '', //指定专家
				},
				expertInfo: { //专家号
					product_count: 1,
					service_type: 7,
					hospitalName: '',
					clinicName: '',
					service_time: '',
					patientName: '',
					remark: '',
					hospital_id: '',
					patient_id: '',
					expert_doctor: '',
					department_id: '',
					isShow: false,
					special_request: '', //特殊要求
				},
				specialInfo: { //特诊号
					service_type: 8,
					hospitalName: '',
					expert_doctor: '',
					clinicName: '',
					service_time: '',
					patientName: '',
					remark: '',
					hospital_id: '',
					patient_id: '',
					department_id: '',
					product_count: 1,
					isShow: false,
					check_item: '', //检查项目
					special_request: '', //特殊要求
				},
				inspectInfo: { //预约检查
					service_type: 12,
					hospitalName: '',
					clinicName: '',
					service_time: '',
					patientName: '',
					remark: '',
					project: '',
					hospital_id: '',
					patient_id: '',
					department_id: '',
					product_count: 1,
					isShow: false,
					special_request: '', //特殊要求
				},
				consultationInfo: { //问诊
					service_type: 9,
					hospitalName: '',
					clinicName: '',
					service_time: '',
					patientName: '',
					remark: '',
					special_request: '', //特殊要求
					wz_content: '', //问诊内容
					hospital_id: '',
					patient_id: '',
					department_id: '',
					product_count: 1,
					isShow: false
				},
				sendTakeInfo: { //送取
					service_type: 11,
					hospitalName: '',
					clinicName: '',
					service_time: '',
					patientName: '',
					remark: '',
					special_request: '', //特殊要求
					hospital_id: '',
					patient_id: '',
					department_id: '',
					receivingInfo: '',
					address_id: '', //收件信息
					voucher: '', //报告信息
					order: '', //订单备注
					product_count: 1,
					isShow: false

				},
				buyMedicine: { //买药
					service_type: 10,
					service_time: '',
					patientName: '',
					hospitalName: '',
					drug_hospital: '', //购药医院
					drug_name: '', //药名称
					remark: '',
					patient_id: '',
					buyAddress: '', //购买地址
					receivingInfo: '',
					address_id: '', //收件信息
					remark: '', //订单备注
					special_request: '', //特殊要求
					product_count: 1,
					isShow: false
				},
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
				time: Number(new Date()),
				departmentShow: false,
				selecttitle: '',
				hospitalList: [], //医院列表
				clinicList: [], //科室列表
				timeShow: false,
				typeList: [], //就诊类型
				addressInfo: null, // 定位信息
				page: 1,
				loading: true,
				operateType: '', //选择时的操作类型
				patientShow: false, //患者弹窗
				patientList: [], //患者列表
				pay_channel: 4,
				userInfo: {},
				discount_total: 0,
				total: 0,
				pay_integral: false,
				integral_total: 0,
			}
		},
		onReady() {

			// 微信小程序需要用此写法
			this.$refs.datetimePicker.setFormatter(this.formatter)
		},
		onLoad(options) {
			console.log(options.typeList)
			// #ifdef APP-PLUS
			this.pay_channel = 3;
			// #endif
			uni.showLoading({
				title: '加载中',
				mask: true
			});
			this.typeList = JSON.parse(options.typeList)
			this.total = options.total
			this.discount_total = options.total
			this.getData()
			this.addressInfo = uni.getStorageSync('addressInfo')
		},
		onShow() {
			this.getUserInfo()
			this.getPatientFresh()
		},
		methods: {
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
			addPatient(e) {
				//添加就诊人信息
				uni.navigateTo({
					url: '/aUserPages/patientList/addPatient?type=' + e
				})
			},
			selectPayIntegral() {
				//根据沟通，客户希望积分能够兑换现金抵扣，例如XX积分=XX元，（20积分分等于一元，每次不能抵扣超过当前订单总额的30%）
				if(this.userInfo.user_integral <20) {
					this.pay_integral = false
					this.integral_total = 0;
					return;
				}
				this.pay_integral = !this.pay_integral
				if (this.pay_integral) {
					this.integralCompute()
				} else {
					this.discount_total = this.total
				}
			},
			integralCompute() {
				//0.2积分 == 1分  2积分=1毛  #跑腿总费用的30%，全程陪诊不可超过20%，VIP陪诊不可超过10%
				let price = (this.total * 0.3).toFixed(2)
				if (price <= 0) {
					return;
				}
				//抵扣所需积分
				let num = (price * 100) * 0.2
				let num1 = 0;
				let remainder = 0;
				if (num > this.userInfo.user_integral) {
					remainder = this.userInfo.user_integral % 20
					this.integral_total = this.userInfo.user_integral - remainder;
					console.log('@@@', (this.userInfo.user_integral / 0.2) % 20);
				} else {
					remainder = num % 20
					this.integral_total = num - remainder;
					console.log('@@', remainder, this.integral_total, num / 0.2);
				}
				num1 = (this.integral_total / 0.2) / 100
				this.integral_total = this.integral_total.toFixed(2)
				this.discount_total = (this.total - num1.toFixed(2)).toFixed(2)


			},
			getUserInfo(e) {
				this.$api.getMyInfo({}).then(res => {
					console.log('!!!!!!!!', res);
					this.userInfo = res
					this.userInfo.user_integral = parseInt(res.user_integral)
				})
			},
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
				uni.hideLoading()
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
					this.ordinaryInfo.clinicName = e.name
					this.ordinaryInfo.department_id = e.id
				}
				if (this.operateType == 7) {
					this.expertInfo.clinicName = e.name
					this.expertInfo.department_id = e.id
				}
				if (this.operateType == 8) {
					this.specialInfo.clinicName = e.name
					this.specialInfo.department_id = e.id
				}
				if (this.operateType == 12) {
					this.inspectInfo.clinicName = e.name
					this.inspectInfo.department_id = e.id
				}
				if (this.operateType == 9) {
					this.consultationInfo.clinicName = e.name
					this.consultationInfo.department_id = e.id
				}
				if (this.operateType == 11) {
					this.sendTakeInfo.clinicName = e.name
					this.sendTakeInfo.department_id = e.id
				}
				if (this.operateType == 10) {
					this.buyMedicine.clinicName = e.name
					this.buyMedicine.hospital_id = e.id
				}
				this.departmentShow = !this.departmentShow
				this.popupShow = false;
			},
			cancelSelect(e) { //取消选择
				this.departmentShow = !this.departmentShow
				this.popupShow = false;
			},
			sureSelectTime(e) { //确定选择时间
				this.popupShow = false;
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
				this.popupShow = false;
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
					// this.departmentShow = true
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
				this.popupShow = false;
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
				this.addressInfo.city = '深圳'
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
				this.clinicList= []
				this.$api.getDepartmentLists({
					hospital_id: e
				}).then(res => {
					this.clinicList = res
					this.departmentShow = true
					console.log('科室', this.clinicList, res)
				})

			},
			sureHospital(item) { //确定选择的医院
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
				this.popupShow = false;
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
				this.popupShow = false;
			},
			surePatient(item) { //选择就诊患者
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
				this.popupShow = false;
			},
			selectPayStyle(item, index) { //选择支付方式 1钱包，2支付宝，3微信支付，4微信小程序支付 5支付宝小程序支付
				this.payValue = item.name;
				console.log('payValue', this.payValue);
				this.pay_channel = item.pay_channel
				// console.log(item,index)
				// this.payValue = item.name
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
				this.$api.addRecord({
					pay_channel: this.pay_channel,
					integral: this.integral_total,
					record_json: this.getInfo()
				}).then(res => {
					console.log('付款', res);
					let _this = this
					switch (this.pay_channel) {
						case 1: //东东币
							// uni.navigateTo({
							// 	url: "/aUserPages/resultPage/resultPage?type="+3+"&amount="+this..discount_total
							// })
							if(res.errorCode && res.errorMsg ) {
								uni.showToast({
									title:res.errorMsg,
									icon:'none'
								})
								return;
							}
							// #ifdef MP-WEIXIN
							_this.getPushMes(this.discount_total)
							// #endif
							// uni.navigateTo({
							// 	url: "/aUserPages/resultPage/resultPage?type=" + 3 + "&amount=" + _this
							// 		.discount_total
							// })
							break;
						case 2: //app支付宝支付
							uni.requestPayment({
								provider: "alipay", //固定值为"alipay"
								orderInfo: res.url, //此处为服务器返回的订单信息字符串
								success: function(res) {
									uni.navigateTo({
										url: "/aUserPages/resultPage/resultPage?type=" + 3 +
											"&amount=" + _this.discount_total
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
									// uni.navigateTo({
									// 	url: '/aUserPages/my/myOrder?status=1'
									// })
									uni.navigateTo({
										url: "/aUserPages/resultPage/resultPage?type=" + 3 +
											"&amount=" + _this.discount_total
									})
								},
								fail(e) {
									uni.showToast({
										title: "支付失败",
										icon: 'none',
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
									_this.getPushMes(this.discount_total)
								},
								fail: function(err) {
									console.log('fail:' + JSON.stringify(err));
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
				}).catch(error => {
					uni.showToast({
						title: error.msg,
						icon: 'none'
					})
				})

			},
			getInfo(e) {
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
