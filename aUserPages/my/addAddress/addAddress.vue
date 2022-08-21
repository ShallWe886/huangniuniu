<template>
	<view class="flex_column">
		<view class="box_690 padding_left_l padding_right_l padding_bottom_l">
			<view class="flex_row padding_l_0 border_bottom">
				<view class="font_size_text_xl color_black_333 font_weight">
					收货人
				</view>
				<view class="margin_left flex_row">
					<input type="text" class="text_align_right margin_right_s" v-model="addressInfo.name"
						placeholder="请输入收货人" placeholder-class="font_size_text_l">
				</view>
			</view>
			<view class="flex_row padding_l_0 border_bottom">
				<view class="font_size_text_xl color_black_333 font_weight">
					手机号码
				</view>
				<view class="margin_left flex_row">
					<input type="text" class="text_align_right margin_right_s" v-model="addressInfo.phone"
						placeholder="请输入手机号码" placeholder-class="font_size_text_l">
				</view>
			</view>
			<view class="flex_row padding_l_0 border_bottom" @click="chooseAddress">
				<view class="font_size_text_xl color_black_333 font_weight" >
					所在地区
				</view>
				<view class="margin_left flex_row font_size_text_l color_black_888" v-if="!addressInfo.address">
					请选择
					<u-icon name="arrow-right"></u-icon>
				</view>
				<view class="margin_left flex_row font_size_text_l color_black_888" v-if="addressInfo.address">
					{{addressInfo.address}}
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class=" padding_l_0 ">
				<view class="font_size_text_xl color_black_333 font_weight">
					详细地址
				</view>
				<textarea v-model="addressInfo.detail" placeholder="道路、门牌号、小区、楼栋号、单元室等" cols="30" rows="8"
					class="area_box margin_top_m padding_m" placeholder-style="color: #BEBEBE;font-size: 28rpx;"></textarea>

			</view>
			<view class="flex_row padding_bottom_m">
				<view class="font_size_text_xl color_black_333 font_weight">
					设为默认地址
				</view>
				<view class="margin_left">
					<u-switch v-model="addressInfo.default" size="50"  activeColor="#FF8245" ></u-switch>
				</view>
			</view>
		</view>
		<view class="sure_buttton " style="margin-top: 120rpx;" @click="submit">
			确认添加
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressInfo: {
					name: '',
					phone: '',
					address: '',
					detail: '',
					default:true,
					province_id:'',
					city_id:'',
					district_id:'',
					
				},
				type:0 ,// 0新增 1：修改
				addressId:'',
				locationInfo:uni.getStorageSync('addressInfo')
			}
		},
		onLoad(options) {
			this.type = options.type
			uni.setNavigationBarTitle({
				title:options.type == 0 ? '添加地址' : '修改地址'
			})
			if(this.type == 1){
				this.addressId = options.addressId
				this.getData()
			}
		},
		methods: {
			getData(e){ //获取地址详情
				this.$api.getAddressDetail({id:this.addressId}).then(res=>{
					this.addressInfo.name = res.user_name
					this.addressInfo.phone = res.user_phone
					this.addressInfo.detail = res.detail
					this.addressInfo.country_id = res.country_id
					this.addressInfo.province_id = res.province_id
					this.addressInfo.city_id = res.city_id
					this.addressInfo.district_id = res.district_id
					this.addressInfo.default = res.is_default
				})
			},
			submit(e){
				if(this.type == 0){//新增
					this.$api.addAddress({user_name:this.addressInfo.name,user_phone:this.addressInfo.phone,province_id:this.addressInfo.address,detail:this.addressInfo.detail}).then(res=>{
						uni.navigateBack()
						getApp().globalData.upDate.isUpdateAddress = true
					})
				}else{//修改
					this.$api.editAddress({user_name:this.addressInfo.name,user_phone:this.addressInfo.phone,province_id:this.addressInfo.address,detail:this.addressInfo.detail,id:this.addressId}).then(res=>{
						uni.navigateBack()
						getApp().globalData.upDate.isUpdateAddress = true
					})
				}
			},
			chooseAddress(e){//在地图选择地址
				console.log(11)
				uni.chooseLocation({
					latitude:this.locationInfo.latitude,
					longitude:this.locationInfo.longitude,
					success:(res) =>{
						console.log(res)
						this.addressInfo.address = res.address
						
					},
					fail(err) {
						console.error(err)
					}
				})
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.area_box {
		border: 1rpx #E6E6E6 solid;
		border-radius: 10rpx;
		height: 190rpx;
	}
</style>
