<template>
	<view class=" padding_bottom_l padding_left_l">
		<block v-for="(item,index) in patientList" v-if="patientList.length >0" :key="index">
			<view class="box_690 flex_row padding_l">
				<view class="">
					<view class="flex_row">
						<image src="/static/image/patientList01.png" class="patient_icon_img flex_shrink"></image>
						<view class="font_size_title_s color_black_333 font_weight margin_left_s text_overflow_1">
							{{item.patient_name}}
						</view>
					</view>
					<view class="flex_row margin_top_l">
						<image src="/static/image/patientList02.png" class="patient_icon_img flex_shrink"></image>
						<view class="font_size_text_l color_black_888  margin_left_s">
							女
						</view>
					</view>
					<view class="flex_row margin_top_l">
						<image src="/static/image/patientList03.png" class="patient_icon_img flex_shrink"></image>
						<view class="font_size_text_l color_black_888  margin_left_s">
							{{item.id_card}}
						</view>
					</view>
				</view>
				<view class="flex_column margin_left margin_top_l patient_info">
					<view class="update_patient" @click="updatePatient(1,item)">
						修改
					</view>
					<view class="update_patient margin_top_l" @click="deletePatient(item,index)">
						删除
					</view>
				</view>
			</view>
		</block>
		<view class="prompt flex_column" v-if="patientList.length == 0">
			<image src="/static/image/nopatient.png" mode="aspectFit" class="no_patient_img"></image>
			<view class="font_size_title_s color_black_333 font_weight margin_top_l">
				您还没有添加就诊人～
			</view>
			<view class="font_size_text_l color_black_999 margin_top_xl">
				请点击下方按钮添加就诊人～
			</view>
			<view class="sure_buttton " style="position: fixed;bottom: 120rpx;left: 70rpx;" @click="addPatient(0)">
				添加就诊人信息
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				patientList:[],
				loading:true,
				pageNo:1
			}
		},
		onLoad() {
			this.getData()
		},
		onShow() {
			if(getApp().globalData.upDate.isUpdatePtient){
				this.getfresh()
				getApp().globalData.upDate.isUpdatePtient = false
			}
		},
		onPullDownRefresh() {
			this.getfresh()
		},
		onReachBottom() {
			if (this.loading) {
				this.getData();
			}
		},
		methods: {
			fresh(e) {
				this.getfresh()
			},
			getfresh(e) {
				this.patientList = []
				this.pageNo = 1
				this.loading = true;
				this.getData();
			},
			getData(e){
				this.$api.getPatientList({page:this.pageNo,pageSize:10}).then(res=>{
					this.loading = res.list.length == 10
					this.patientList = this.patientList.concat(res.list)
					this.pageNo += 1
					
				})
			},
			addPatient(e){
				//添加就诊人信息
				uni.navigateTo({
					url:'/aUserPages/patientList/addPatient?type='+e
				})
			},
			updatePatient(e,item){//修改
				uni.navigateTo({
					url:'/aUserPages/patientList/addPatient?type='+e+"&patientId="+item.id
				})
			},
			deletePatient(item,index){//删除患者
				this.$api.delPatient({id:item.id}).then(res=>{
					this.patientList.splice(index,1)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.patient_icon_img {
		width: 36rpx;
		height: 36rpx;
	}

	.patient_info {
		.update_patient {
			width: 120rpx;
			height: 50rpx;
			line-height: 50rpx;
			text-align: center;
			border-radius: 20rpx;

			&:nth-child(1) {
				border: 2rpx #638CFF solid;
				color: #638CFF;
			}

			&:nth-child(2) {
				border: 2rpx #FF6437 solid;
				color: #FF6437;
			}
		}


	}
	.no_patient_img{
		width: 300rpx;
		height: 220rpx;
		margin-top: 200rpx;
	}
	
</style>
