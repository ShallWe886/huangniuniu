<template>
	<view class="padding_bottom_m" :class="{popupShow:popupShow}">
		<view class="update_box">

			<view class="box_690 padding_0_l">
				<view class="" style="height: 100rpx; position: relative;">
					<view class="" style="position: absolute;top: -100rpx;left: 50%;transform: translate(-100rpx,0);">
						<view class="avator_box">
							<UpLoadImg @input="uploadImg1" :list="avator" ShowNum="1"></UpLoadImg>
							<!-- <image src="/static/image/avator.png" mode="aspectFill" class="avator_img"></image>
							<image src="/static/image/update_avator.png" mode="aspectFill" class="avator_update_logo"> -->
							</image>
						</view>
					</view>

				</view>

				<view class="flex_row padding_l_0 border_bottom border_top ">
					<view class="font_size_text_xl color_black_333 font_weight">
						真实姓名<text class="color_orange margin_left_s">*</text>
					</view>
					<input type="text" @input="changeName" v-model="userinfo.attendant_name" placeholder="请输入真实姓名"
						class="margin_left text_align_right" placeholder-style="font-size:28rpx;color:#BEBEBE;">
				</view>
				<view class="flex_row padding_l_0 border_bottom border_top ">
					<view class="font_size_text_xl color_black_333 font_weight">
						对外昵称<text class="color_orange margin_left_s">*</text>
					</view>
					<input type="text" v-model="foreign_name" placeholder="请输入真实姓名"
						class="margin_left text_align_right" placeholder-style="font-size:28rpx;color:#BEBEBE;">
				</view>
				<view class="flex_row padding_l_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						手机号码<text class="color_orange margin_left_s">*</text>
					</view>
					<input type="number" maxlength="11" v-model="userinfo.mobile" placeholder="请输入手机号码"
						class="margin_left text_align_right" placeholder-style="font-size:28rpx;color:#BEBEBE;">
				</view>
				<view class="flex_row padding_l_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						年 龄
					</view>
					<view class="color_black_888 font_size_text_l margin_left">
						{{userinfo.age}}岁
					</view>
				</view>
				<view class="flex_row padding_l_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						性 别<text class="color_orange margin_left_s">*</text>
					</view>
					<view class="color_black_888 font_size_text_l margin_left flex_row">
						<!-- {{userinfo.sex == 1 ? '女' : '男'}} -->
						<view class="flex_row font_size_text_l color_black_333 margin_right_l" @click="selectSex(2)">
							<image src="/static/image/select01.png" class="icon_img" v-if="userinfo.sex == 2"></image>
							<image src="/static/image/select02.png" class="icon_img" v-else></image>
							<view class="margin_left_s">
								男
							</view>
						</view>
						<view class="flex_row font_size_text_l color_black_333 margin_left_xl" @click="selectSex(1)">
							<image src="/static/image/select01.png" class="icon_img" v-if="userinfo.sex == 1"></image>
							<image src="/static/image/select02.png" class="icon_img" v-else></image>
							<view class="margin_left_s">
								女
							</view>
						</view>
					</view>
				</view>
				<view class=" padding_l_0 border_bottom">
					<view class="flex_row">
						<view class="font_size_text_xl color_black_333 font_weight">
							资质证明
						</view>
						<view class="color_black_888 font_size_text_xs margin_left">
							*如有RDPAC,医学相关学历证书等更容易通过审核
						</view>
					</view>
					<view class="justify_center flex_row ">
						<UpLoadImg @input="uploadImg" :list="list_img" ShowNum="1"></UpLoadImg>
						<!-- <view class="flex_column justify_center update_img_box">
							<image :src="/static/image/update_img.png" mode="aspectFill" class="update_img"></image>
							<view class="font_size_text_m color_black_888 margin_top_s">
								上传资质证明照片
							</view>
						</view> -->
					</view>
				</view>
				<view class="flex_row padding_l_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						备用账号
					</view>
					<view class=" margin_left">
						<input type="number" maxlength="11" v-model="userinfo.spare_phone" placeholder="请输入备用账号"
							class="margin_left text_align_right" placeholder-style="font-size:28rpx;color:#BEBEBE;">
						<!-- <u-icon name="arrow-right" size="30" color="#999999"></u-icon> -->
					</view>
				</view>
				<view class="" v-for="(item, index) in advantage" :key="index">
					<view class="flex_row padding_l_0 border_bottom" @click="openHospital(item, index)">
						<view class="font_size_text_xl color_black_333 font_weight">
							医院<text class="color_orange margin_left_s">*</text>
						</view>
						<view class=" margin_left" style="display: flex;">
							<text class="font_size_text_xl color_black_333 font_weight">{{item.hospital_name}}</text>
							<u-icon name="arrow-right" size="30" color="#999999"></u-icon>
						</view>
					</view>
					<view v-for="(items, index1) in item.department" :key="index1" class="flex_row padding_l_0 border_bottom" @click="openDepartment(item, index1, index)">
						<view class="font_size_text_xl color_black_333 font_weight">
							科室<text class="color_orange margin_left_s">*</text>
						</view>
						<view class=" margin_left" style="display: flex;">
							<text class="font_size_text_xl color_black_333 font_weight">{{items.department_name}}</text>
							<u-icon name="arrow-right" size="30" color="#999999"></u-icon>
						</view>
					</view>
					<view class="add_list margin_top_xl" @click="addDepartment(index)">
						<u-icon name="plus-circle" size="50" color="#999999"></u-icon>
						<text class="font_size_text_l">增加科室</text>
					</view>
				</view>
				<view class="add_list margin_top_xl" @click="addList">
					<u-icon name="plus-circle" size="50" color="#999999"></u-icon>
					<text class="font_size_text_l">本人能服务的医院和科室<text class="color_orange margin_left_s">*</text></text>
				</view>
				<view class=" padding_l_0 ">
					<view class="font_size_text_xl color_black_333 font_weight">
						个人介绍
					</view>
					<textarea v-model="userinfo.description" cols="30" rows="8" class="area_box margin_top_m"></textarea>
				
				</view>
				<view class="flex_row padding_l_0 border_bottom">
					<view class="font_size_text_xl width_all color_black_333 font_weight flex_center">
						<view class="text_align_center">填写越详细越易通过审核</view>
						<!-- <br> -->
						<view class="text_align_center">并会影响后续系统派单量</view>
					</view>
				</view>
			</view>
		</view>
		<view @click="submitUser" class="sure_buttton_letter margin_top_xxl" style="margin-left: 70rpx;position: fixed; bottom: 40rpx">
			提交
		</view>
		<u-picker :show="departmentShow" :columns="clinicList" keyName="name" :title="selecttitle" @confirm="sureSelect"
			@cancel="cancelSelect" visibleItemCount="12" itemHeight="48" confirmColor="#FF6437">
		</u-picker>
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
	</view>
</template>

<script>
	import UpLoadImg from "@/components/UpLoad.vue"
	export default {
		components: {
			UpLoadImg
		},
		data() {
			return {
				foreign_name: '',
				selecttitle: '',
				hospitalShow: false,
				departmentShow: false,
				advantage: [],
				userinfo: {},
				list_img: [],
				avator: [],
				hospitalList: [],//医院列表
				clinicList: [],//科室列表
				popupShow: false,
				index: 0,
				page: 1,
				index1: 0,
			}
		},
		onLoad() {
			this.getInfo()
		},
		methods: {
			changeName(e) {
				console.log('##@',e);
				this.foreign_name = this.userinfo.attendant_name.slice(0,1) + '顾问'
			},
			openDepartment(item, index1, index) {
				this.index1 = index1
				this.getDepartment(item.hospital_id)
			},
			addDepartment( index) {
				this.advantage[index].department.push({department_name:'', department_id: ''})
			},
			selectSex(type) { //选择性别
				this.userinfo.sex = type
			},
			openHospital(item, index) {
				this.index = index
				this.hospitalShow = true
				this.getHospitalList()
				this.popupShow = true
			},
			cancelSelect(e) { //取消选择
				this.departmentShow = !this.departmentShow
				this.popupShow = false
			},
			sureSelect(e) { // 确定选定科室
				this.advantage[this.index].department[this.index1].department_name = e.value[0].name
				this.advantage[this.index].department[this.index1].department_id = e.value[0].id
				this.departmentShow = !this.departmentShow
				this.popupShow = false
			},
			closeSelectHospital(e) { // 关闭选择医院的弹窗
				this.hospitalShow = false
				this.popupShow = false
			},
			sureHospital(item) { //确定选择的医院
				this.advantage[this.index].hospital_name = item.name
				this.advantage[this.index].hospital_id = item.id
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
				// this.addressInfo.city = '深圳';;
				this.$api.getHospitalEscort({
					page: this.page,
					pageSize: 8,
					address: ''
				}).then(res => {
					this.hospitalList = this.hospitalList.concat(res.list)
					this.page += 1
					this.loading = res.list.length == 8
				})
			},
			getDepartment(e) { //获取科室列表
				this.clinicList[0] = []
				this.$api.getDepartmentEscort({hospital_id: e}).then(res => {
					this.clinicList = [res]
					this.departmentShow = true
					this.popupShow = true
					console.log('科室',this.clinicList, res, this.departmentShow)
				})
			
			},
			addList() {
				if(this.advantage.length == 10) {
					return;
				}
				let list = {hospital_name:'', hospital_id: '',department:[{department_name:'', department_id: ''}]};
				this.advantage.push(list)
				console.log('@@@', this.advantage);
			},
			//保存
			submitUser() {
				if(!this.advantage.length || !this.advantage[0].hospital_name || !this.advantage[0].department[0].department_name) {
					uni.showToast({
						title: '请完善所有信息',
						icon: 'error'
					})
					return;
				}
				let info = this.userinfo
				info.headimgurl = this.avator.toString()
				info.credentials = this.list_img.toString()
				info.advantage = this.advantage
				this.$api.setProfileEscort(info).then(res => {
					uni.navigateBack()
				})
			},
			uploadImg1(e) {
				console.log('e', e);
				this.avator = e
				console.log('eeee', e, this.disabled);
			},
			uploadImg(e) {
				console.log('e', e);
				this.list_img = e
				console.log('eeee', e, this.disabled);
			},
			getInfo() {
				this.$api.escortInfo({}).then(res => {
					console.log('res', res);
					this.userinfo = res;
					this.list_img = [this.userinfo.credentials]
					this.avator = [this.userinfo.headimgurl]
					this.advantage = JSON.parse(this.userinfo.advantage)
					this.foreign_name = this.userinfo.attendant_name.slice(0,1) + '顾问'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.icon_img {
		width: 32rpx;
		height: 32rpx;
	}
	.popupShow {
		overflow: hidden;
		position: fixed;
		height: 100vh;
		width: 100%;
	}
	.add_list {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	/deep/ input {
		color: #888 !important;
		font-size: 28rpx;
	}

	.update_box {
		margin-bottom: 100rpx;
		margin-top: 120rpx;
		margin-left: 30rpx;
	}

	.avator_box {
		position: relative;
		width: 176rpx;
		height: 176rpx;

		.avator_img {
			width: 176rpx;
			height: 176rpx;
		}

		.avator_update_logo {
			width: 52rpx;
			height: 52rpx;
			position: absolute;
			bottom: 0;
			right: 0;
		}

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

	.area_box {
		border: 1rpx #E6E6E6 solid;
		border-radius: 10rpx;
		height: 190rpx;
	}
</style>
