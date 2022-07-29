<template>
	<view class="padding_left_l padding_bottom_xl">
		<view class="flex_row">
			<view class="add_bg"></view>
			<view class="font_size_title_l color_black_333 font_weight margin_left_s">
				患者信息
			</view>
		</view>
		<view class="box_690 padding_left_l padding_right_l">
			<block v-for="(value,key) in inputinfo" :key="key">
				<view class="flex_row padding_l_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						{{value.label}}<text class="color_red " v-if="value.isSure"> *</text>
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s width_all" v-model="value.content"
							:placeholder="value.placeholderText" placeholder-class="font_size_text_l">
					</view>

				</view>
				<view class="flex_row padding_l_0 border_bottom" v-if="key == 'name'">
					<view class="font_size_text_xl color_black_333 font_weight">
						性别
					</view>
					<view class="margin_left flex_row">
						<view class="flex_row font_size_text_l color_black_333 margin_right_l" @click="selectSex(1)">
							<image src="/static/image/select01.png" class="icon_img" v-if="sex == 1"></image>
							<image src="/static/image/select02.png" class="icon_img" v-else></image>
							<view class="margin_left_s">
								男
							</view>
						</view>
						<view class="flex_row font_size_text_l color_black_333 margin_left_xl" @click="selectSex(0)">
							<image src="/static/image/select01.png" class="icon_img" v-if="sex == 0"></image>
							<image src="/static/image/select02.png" class="icon_img" v-else></image>
							<view class="margin_left_s">
								女
							</view>
						</view>
					</view>
				</view>
				<block v-if="key == 'idCard'">
					<view class=" padding_l_0 ">
						<view class="font_size_text_xl color_black_333 font_weight">
							个人情况
						</view>
						<textarea v-model="personInfo" cols="30" rows="8" class="area_box margin_top_m"></textarea>

					</view>
					<view class=" padding_l_0 border_bottom">
						<view class="flex_row">
							<view class="font_size_text_xl color_black_333 font_weight">
								图片
							</view>
							<view class="color_black_888 font_size_text_xs margin_left">
								<text class="color_red">*</text>病例，体检报告，检查报告之类
							</view>
						</view>
						<UpLoadImg @input="uploadImg" :list="imgList"></UpLoadImg>
					</view>
				</block>
			</block>
			<view class="flex_row padding_l_0 ">
				<view class="font_size_text_xl color_black_333 font_weight">
					医院诊疗卡号
				</view>
				<view class="margin_left font_size_text_xl color_orange" @click="toRelation">
					关联
				</view>

			</view>

		</view>
		<view class="sure_buttton_letter margin_top_xl " style="margin-left: 20px;" @click="addPatient">
			确定
		</view>
		<u-popup :show="relationPopShow" :closeable="true" mode="center" :round="20" @close="closeRelationPop">
			<view class="flex_column padding_l">
				<view class="font_size_title_l color_black_333 font_weight border_bottom padding_bottom_l"
					style="width: 600rpx;text-align: center;">
					治疗卡
				</view>
				<scroll-view scroll-y="true" style="height: 510rpx;">
					<view class="text_align_center font_size_text_l color_black_999 margin_top_xl "
						v-if="cardList.length == 0">
						暂无与医疗卡
					</view>
					<view class="flex_row relatin_item_box border_bottom padding_m_0" v-for="(item,index) in cardList"
						:key="index" @click="selectRealte(item)">
						<view class="flex_row">
							<radio value="1" color='#FF6437' style="transform:scale(0.7)" />
							<view class="">
								<view class="font_size_text_xl color_black_333 font_weight text_overflow_1">
									{{item.hospital_name}}
								</view>
								<view class="text_overflow_1 font_size_text_l color_black_666 margin_top_s">
									卡号：{{item.card_no}}
								</view>
							</view>
						</view>
						<view class="flex_row margin_left">
							<view class="relationMan_box" @click.stop="updateCard(0,item,index)">
								编辑
							</view>
							<view class="relationMan_box margin_left_m" @click.stop="updateCard(1,item,index)">
								删除
							</view>
						</view>
					</view>
				</scroll-view>

				<view class=" relation_add_box flex_row margin_top_xl  font_size_title_s color_black_666 justify_center"
					@click="addCard">
					<u-icon name="plus" size="30" color="#666666"></u-icon>
					新增
				</view>
			</view>
		</u-popup>
		<u-popup :show="addCardShow" :closeable="true" mode="center" :round="20" @close="closeAddPop">
			<view class=" padding_l">
				<view class="font_size_title_l color_black_333 font_weight  padding_bottom_l"
					style="width: 600rpx;text-align: center;">
					<block v-if="cardType == 0">新增</block>
					<block v-if="cardType == 1">编辑</block>
				</view>
				<view class="flex_row relatin_item_box border_bottom padding_m_0 border_top ">
					<view class="font_size_text_xl color_black_333 font_weight">
						医院
					</view>
					<input type="text" style="text-align: end;margin-left: auto;" placeholder="请输入医院名称"
						placeholder-style="font-size:28rpx;color:#BEBEBE;" v-model="cardInfo.hospital_name">
				</view>
				<view class="flex_row relatin_item_box border_bottom padding_m_0 ">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊卡号
					</view>
					<input type="text" style="text-align: end;margin-left: auto;" placeholder="请输入就诊卡号"
						placeholder-style="font-size:28rpx;color:#BEBEBE;" v-model="cardInfo.card_no">
				</view>
				<view class="flex_row font_size_text_l color_black_666 margin_top_xl">
					<radio v-model="cardInfo.is_default" color='#FF6437' :checked="cardInfo.is_default == 1"
						style="transform:scale(0.7)" @click="changeDefault" />
					默认
				</view>
				<view class=" addCard_box font_size_title_s color_white margin_top_l" @click="sureAdd"
					style="letter-spacing:10rpx;">
					提交
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import UpLoadImg from "@/components/UpLoad.vue"
	import IdentityCodeValid from '@/static/js/identityCard.js'
	export default {
		components: {
			UpLoadImg
		},
		data() {
			return {
				inputinfo: {
					name: {
						label: '姓名',
						placeholderText: '请输入姓名',
						content: '',
						isSure: true // 是否必填
					},

					age: {
						label: '年龄',
						placeholderText: '请输入年龄',
						content: '',
						isSure: false // 是否必填
					},
					phone: {
						label: '联系方式',
						placeholderText: '请输入联系方式',
						content: '',
						isSure: true // 是否必填
					},
					idCard: {
						label: '身份证号码',
						placeholderText: '请输入身份证号码',
						content: '',
						isSure: true // 是否必填
					},
					emerge: {
						label: '紧急联系人',
						placeholderText: '请输入紧急联系人',
						content: '',
						isSure: false // 是否必填
					},

					emergePhone: {
						label: '联系电话',
						placeholderText: '请输入紧急联系人电话号码',
						content: '',
						isSure: false // 是否必填
					},
					relation: {
						label: '与就诊人关系',
						placeholderText: '请输入与就诊人的关系',
						content: '',
						isSure: false // 是否必填
					}

				},
				sex: 1, //性别
				personInfo: '', //个人情况
				relationPopShow: false,
				cardList: [], //医疗卡
				addCardShow: false, //新增pop
				cardInfo: { //新增卡信息
					hospital_name: '', //医院名称
					card_no: '', //卡号
					is_default: 0 //默认 0否 1 是
				},
				imgList: [],
				cardType: 0, //医疗卡0 新增 1 修改
				type: 0, //患者0：新增 1 修改
				cardId: '', //关联的卡id
				patientId: '' //患者id
			}
		},
		onLoad(options) {
			console.log(options)
			this.type = options.type
			if (this.type == 1) {
				this.patientId = options.patientId
				this.getData() //获取详情
			}
		},
		methods: {
			getData(e) { //获取患者详情
				this.$api.getPatientDetail({
					id: this.patientId
				}).then(res => {
					this.inputinfo.name.content = res.patient_name
					this.inputinfo.age.content = res.age
					this.sex = res.sex
					this.inputinfo.phone.content = res.phone
					this.inputinfo.emerge.content = res.contact
					this.inputinfo.emergePhone.content = res.contact_mobile
					this.inputinfo.idCard.content = res.id_card
					this.personInfo = res.description
					this.cardId = res.medical_card
					this.inputinfo.relation.content = res.user_relasion
					this.imgList = res.picture.split(',')
				})
			},
			toRelation() { //关联
				this.relationPopShow = true
				this.getCard()
			},
			selectRealte(item) {
				this.cardId = item.id
				this.relationPopShow = false
			},
			closeRelationPop() {
				//关闭关联弹窗
				this.relationPopShow = false
			},
			updateCard(type, info, index) { //更改卡片信息
				if (type == 0) { //修改卡片信息
					this.relationPopShow = false
					this.cardType = 1
					this.addCardShow = true
					this.cardInfo = info
				} else if (type == 1) { //删除卡片
					uni.showModal({
						title: "温馨提示",
						content: "是否确认删除此医疗卡?",
						success: (obj) => {
							if (obj.confirm) {
								this.$api.delCard({
									id: info.id
								}).then(res => {
									this.cardList.splice(index, 1)
								})
							}
						}

					})
				}

			},
			addCard(e) { //新增卡片
				this.relationPopShow = false
				this.addCardShow = true
				this.cardType = 0
				this.cardInfo.card_no = ''
				this.cardInfo.hospital_name = ''
				this.cardInfo.is_default = 0
			},
			sureAdd(e) { //提交添加
				if (this.cardInfo.hospital_name == '' || this.cardInfo.card_no == "") {
					uni.showToast({
						icon: "none",
						title: "医院或就诊卡号不能为空"
					})
					return
				}
				if (this.cardType == 0) { //添加

					this.$api.addCard({
						hospital_name: this.cardInfo.hospital_name,
						card_no: this.cardInfo.card_no,
						is_default: this.cardInfo.is_default
					}).then(res => {
						this.cardList.push(this.cardInfo)
						this.cardInfo.card_no = ''
						this.cardInfo.hospital_name = ''
						this.cardInfo.is_default = 0
						this.addCardShow = false
					})
				} else { // 修改
					this.$api.editCard({
						hospital_name: this.cardInfo.hospital_name,
						card_no: this.cardInfo.card_no,
						is_default: this.cardInfo.is_default,
						id: this.cardInfo.id
					}).then(res => {
						this.cardInfo.card_no = ''
						this.cardInfo.hospital_name = ''
						this.cardInfo.is_default = 0
						this.addCardShow = false
					})
				}
			},
			closeAddPop(e) { //关闭添加卡片
				this.addCardShow = false

			},
			getCard(e) { //获取卡片列表
				this.$api.getCardList({}).then(res => {
					this.cardList = res
				})
			},
			changeDefault(e) { //改变默认状态
				if (this.cardInfo.is_default == 0) {
					this.cardInfo.is_default = 1
				} else {
					this.cardInfo.is_default = 0
				}
			},
			selectSex(type) { //选择性别
				this.sex = type
			},
			uploadImg(e) {
				this.imgList = e
				console.log("上传照片")
				console.log(this.imgList)
			},
			addPatient(e) { //确认
				if (this.inputinfo.name.content == '') {
					uni.showToast({
						icon: "none",
						title: "姓名不能为空"
					})
					return
				}
				if (this.inputinfo.phone.content == '') {
					uni.showToast({
						icon: "none",
						title: "手机号不能为空"
					})
					return
				}
				var phoneReg = /^1[3|4|5|7|8][0-9]{9}$/;
				// console.log("验证手机号",phoneReg.test(this.phone))
				if (!phoneReg.test(this.inputinfo.phone.content)) {
					uni.showToast({
						icon: "none",
						title: "手机号填写错误"
					})
					return
				}
				if (this.inputinfo.idCard.content == '') {
					uni.showToast({
						icon: "none",
						title: "身份证号不能为空"
					})
					return
				}

				let data1 = this.inputinfo.idCard.content.toUpperCase()
				if (!IdentityCodeValid(data1)) {
					uni.showToast({
						icon: "none",
						title: "身份证填写错误"
					})
					return
				}
				let imageUrl = '';
				if (this.imgList.length > 0) {
					imageUrl = this.imgList.join(',')
				}
				if (this.type == 0) { //新增
					this.$api.addPatient({
						patient_name: this.inputinfo.name.content,
						sex: this.sex,
						age: this.inputinfo.age.content,
						phone: this.inputinfo.phone.content,
						description: this.personInfo,
						medical_card: this.cardId,
						user_relasion: this.inputinfo.relation.content,
						contact_mobile: this.inputinfo.emergePhone.content,
						contact: this.inputinfo.emerge.content,
						picture: imageUrl,
						id_card: this.inputinfo.idCard.content
					}).then(res => {
						getApp().globalData.upDate.isUpdatePtient = true
						uni.navigateBack({})
					})
				} else { //1 修改
					this.$api.editPatient({
						id: this.patientId,
						patient_name: this.inputinfo.name.content,
						sex: this.sex,
						age: this.inputinfo.age.content,
						phone: this.inputinfo.phone.content,
						description: this.personInfo,
						medical_card: this.cardId,
						user_relasion: this.inputinfo.relation.content,
						contact_mobile: this.inputinfo.emergePhone.content,
						contact: this.inputinfo.emerge.content,
						picture: imageUrl,
						id_card: this.inputinfo.idCard.content
					}).then(res => {
						getApp().globalData.upDate.isUpdatePtient = true
						uni.navigateBack({})
					})
				}

			}
		}
	}
</script>

<style lang="scss" scoped>
	.add_bg {
		width: 10rpx;
		height: 30rpx;
		border-radius: 4rpx;
		background: linear-gradient(to bottom, #FF6437, #FF9B51);
	}

	.icon_img {
		width: 32rpx;
		height: 32rpx;
	}

	.area_box {
		border: 1rpx #E6E6E6 solid;
		border-radius: 10rpx;
		height: 190rpx;
	}

	.sure_buttton {
		margin-left: 35rpx;
	}

	.relatin_item_box {
		width: 600rpx;

		.relationMan_box {
			width: 100rpx;
			height: 50rpx;
			text-align: center;
			line-height: 50rpx;
			border-radius: 10rpx;
			font-size: 28rpx;

			&:nth-child(1) {
				color: #638CFF;
				border: 2rpx #638CFF solid;
			}

			&:nth-child(2) {
				color: #FF3900;
				border: 2rpx #FF3900 solid;
			}
		}

	}

	.relation_add_box {
		width: 500rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border-radius: 16rpx;
		border: 2rpx #D2D2D2 solid;
	}

	.addCard_box {
		width: 500rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border-radius: 70rpx;
		background: linear-gradient(to right, #FF6437, #FF9B51);
		margin-left: 45rpx;
	}

	.update_img_box {
		width: 322rpx;
		height: 192rpx;
		border-radius: 16rpx;
		border: 2rpx dashed #FFB644;
		margin-top: 20rpx;
	}

	.update_img {
		width: 90rpx;
		height: 90rpx;
	}
</style>
