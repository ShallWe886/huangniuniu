<template>
	<view class="padding_bottom_m">
		<view class="flex_row margin_top_xl margin_left_l">
			<view class="add_bg"></view>
			<view class="font_size_title_l color_black_333 font_weight margin_left_s">
				个人信息
			</view>
		</view>
		<view class="box_690 margin_left_l padding_0_l" >
			<view class="flex_row padding_l_0 border_bottom">
				<view class="font_size_text_xl color_black_333 font_weight">
					真实姓名<text class="color_orange margin_left_s">*</text>
				</view>
				<view class="margin_left flex_row">
					<input type="text" class="text_align_right margin_right_s" v-model="registerInfo.attendant_name" @input="changeName" placeholder="请输入姓名"
						placeholder-class="font_size_text_l">
				</view>

			</view>
			<view class="flex_row padding_l_0 border_bottom">
				<view class="font_size_text_xl color_black_333 font_weight">
					对外昵称<text class="color_orange margin_left_s">*</text>
				</view>
				<view class="margin_left flex_row">
					<input type="text" disabled class="text_align_right margin_right_s" v-model="foreign_name" placeholder="请输入姓名"
						placeholder-class="font_size_text_l">
				</view>
			
			</view>
			<view class="flex_row padding_l_0 border_bottom" >
				<view class="font_size_text_xl color_black_333 font_weight">
					性别<text class="color_orange margin_left_s">*</text>
				</view>
				<view class="margin_left flex_row">
					<view class="flex_row font_size_text_l color_black_333" @click="selectSex(2)">
						<image src="/static/image/select01.png" class="icon_img" v-if="registerInfo.sex == 2"></image>
						<image src="/static/image/select02.png" class="icon_img" v-else></image>
						<view class="margin_left_s">
							男
						</view>
					</view>
					<view class="flex_row font_size_text_l color_black_333 margin_left_xl" @click="selectSex(1)">
						<image src="/static/image/select01.png" class="icon_img" v-if="registerInfo.sex == 1"></image>
						<image src="/static/image/select02.png" class="icon_img" v-else></image>
						<view class="margin_left_s">
							女
						</view>
					</view>
				</view>
			</view>
			<view class="flex_row padding_l_0 border_bottom">
				<view class="font_size_text_xl color_black_333 font_weight">
					年龄
				</view>
				<view class="margin_left flex_row">
					<input type="text" class="text_align_right margin_right_s" v-model="registerInfo.age"
						placeholder="请输入年龄" placeholder-class="font_size_text_l">
				</view>
			</view>
			<view class="flex_row padding_l_0 border_bottom">
				<view class="font_size_text_xl color_black_333 font_weight">
					联系方式<text class="color_orange margin_left_s">*</text>
				</view>
				<view class="margin_left flex_row">
					<input type="text" class="text_align_right margin_right_s" v-model="registerInfo.mobile"
						placeholder="请输入联系方式" placeholder-class="font_size_text_l">
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
					<UpLoadImg @input="uploadImg" :list="registerInfo.credentials" ShowNum="1"></UpLoadImg>
					<!-- <view class="flex_column justify_center update_img_box">
						<image :src="/static/image/update_img.png" mode="aspectFill" class="update_img"></image>
						<view class="font_size_text_m color_black_888 margin_top_s">
							上传资质证明照片
						</view>
					</view> -->
				</view>
			</view>
			<view class=" padding_l_0 " >
				<view class="font_size_text_xl color_black_333 font_weight">
					个人简介
				</view>
				<textarea v-model="registerInfo.description" cols="30" rows="8" class="area_box margin_top_m"></textarea>
			
			</view>
			<!-- <UpLoadImg @input="uploadImg" :list="registerInfo.credentials" :disabled="disabled"></UpLoadImg> -->
			<view class="flex_row padding_l_0 border_bottom">
				<view class="font_size_text_xl width_all color_black_333 font_weight flex_center">
					<view class="text_align_center">填写越详细越易通过审核</view>
					<!-- <br> -->
					<view class="text_align_center">并会影响后续系统派单量</view>
				</view>
			</view>
		</view>
		<view class="flex_row margin_top_xl padding_0_l" style="margin-bottom: 110rpx;">
			<label @click="checkedXs" class="font_size_text_m color_black_999">
				<image src="/static/image/select01.png" class="icon_img" v-if="checkedX" style="margin-right: 10rpx;margin-bottom: -6rpx;">
				</image>
				<image src="/static/image/select02.png" class="icon_img" v-if="!checkedX" style="margin-right: 10rpx;margin-bottom: -6rpx;">
				</image>
				注册代表同意<text class="color_orange" @click.stop="openXy(0)">用户协议、</text><text class="color_orange"
					@click.stop="openXy(1)">隐私政策</text>并授权使用您的账号信息（ 如昵称、头像、地址）以便您统一管理。
			</label>
		</view>
		<view class="sure_buttton_letter " style="margin-top: 200rpx; margin-left: 70rpx;position: fixed; bottom: 40rpx" @click="submitRegister">
			注册
		</view>
		<u-picker :show="departmentShow" :columns="clinicList" keyName="name" @confirm="sureSelect"
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
		<u-popup :show="tipPop" :closeable="true" mode="center" :round="20" @close="closePop">
			<view class="flex_column "
				style="width: 600rpx; box-sizing: border-box;padding: 100rpx 30rpx 80rpx 30rpx">
				<view class="font_size_title_xxl color_black_333 font_weight">
					已提交审核
				</view>
				<view class="font_size_text_xl color_black_666  margin_top_xl">
					预计xx个工作日完成审核
				</view>
				<view class="font_size_text_xl color_black_666  margin_top_m">
					请耐心等待
				</view>
				
			</view>
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
				checkedX: false,
				registerInfo:{
					attendant_name:'',
					age:'',
					mobile:'',
					description:'',
					sex:2,
					credentials: [],
				},
				hospitalList: [],//医院列表
				clinicList: [],//科室列表
				popupShow: false,
				index: 0,
				page: 1,
				index1: 0,
				hospitalShow: false,
				departmentShow: false,
				advantage: [],
				img: '',
				list_img: [],
				disabled: false,
				tipPop:false,
				foreign_name: '',
			}
		},
		methods: {
			openXy(status) {
				uni.navigateTo({
					url: '/aUserPages/contract/contract?type=' + status
				})
			},
			//勾选用户协议
			checkedXs() {
				this.checkedX = !this.checkedX
				if (this.checkedX) {
					console.log('######');
				}
				console.log('ggg', this.checkedX);
			},
			changeName(e) {
				console.log('##@', this.registerInfo.attendant_name.slice(0,1),e);
				this.foreign_name = this.registerInfo.attendant_name.slice(0,1) + '顾问'
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
			uploadImg(e) {
				this.registerInfo.credentials = e
				this.img = this.registerInfo.credentials[0];
				if(this.registerInfo.credentials) {
					this.disabled = true;
				}
				console.log("上传照片")
				console.log(this.registerInfo.credentials, this.img)
			},
			selectSex(e) {
				this.registerInfo.sex = e
			},
			closePop(e){
				this.tipPop = false
			},
			submitRegister(e){
				if(!this.advantage.length || !this.advantage[0].hospital_name || !this.advantage[0].department[0].department_name) {
					uni.showToast({
						title: '请完善所有信息',
						icon: 'error'
					})
					return;
				}
				if (!this.checkedX) {
					uni.showToast({
						title: '请勾选用户隐私协议',
						icon: 'none'
					})
					return
				}
				this.$api.escortRegister({
					attendant_name:this.registerInfo.attendant_name,
					age:this.registerInfo.age,
					mobile:this.registerInfo.mobile,
					description:this.registerInfo.description,
					sex:this.registerInfo.sex,
					credentials: this.img.toString(),
					advantage: this.advantage
				}).then(res => {
					this.tipPop = true
					setTimeout(res=>{
						uni.reLaunch({
							// url:"/accompanyPages/acceptOrder/acceptOrder"
							url:"/aUserPages/login/login"
						})
					},5000)
				}).catch(error => {
					console.log('error', error);
					uni.showToast({
						title: error.msg,
						icon: 'error'
					})
				})
			}
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
	.add_bg {
		width: 10rpx;
		height: 30rpx;
		border-radius: 4rpx;
		background: linear-gradient(to bottom, #FF6437, #FF9B51);
	}
	
	.area_box {
		border: 1rpx #E6E6E6 solid;
		border-radius: 10rpx;
		height: 190rpx;
		width: 630rpx;
		box-sizing: border-box;
	}
	
	.register_label{
		width: 98rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		background-color: rgba(255, 100, 55, 0.12);
		color: #FF6437;
		font-size: 28rpx;
		border-radius: 8rpx;
	}
	.icon_img {
		width: 32rpx;
		height: 32rpx;
	}
</style>
