<template>
	<view class=" fixed_padding_bottom_xxxl">
		<zq-navbar :props="{'navbarTitle':'首页','hasLocation':true}" >
			  <template v-slot:left>
				  <view class="flex_row" @click="goAddress">
				  	<u-icon name="map" color="#333333" size="30"></u-icon>
					<view class="font_size_title_s color_black_333  padding_0_s">
						深圳市
					</view>
					<u-icon name="arrow-down-fill" color="#333333" size="30"></u-icon>
				  </view>
			  </template>
		</zq-navbar>
		<view class="  ">
			<u-swiper :list="swiperList" @click="lookSwiper" indicator indicatorMode="dot" circular height="280" keyName="picture">
			</u-swiper>
		</view>
		<view class="flex_row justify_between margin_top_xl margin_left_l margin_right_l">
			<view class="flex_column">
				<view class="index_item_box">
					<image src="/static/image/index01.png" class="index_item_img" ></image>
					<view class="index_item_con"  @click="toVip(1)">
						<view class="item_title">
							VIP陪诊
						</view>
						<view class="item_con margin_top_m">
							名医服务、就医绿通服务、专业全流程就医顾问、医患就诊沟通的桥梁
						</view>
						<view class="item_btn margin_top_m">
							立即进入
						</view>
					</view>
				</view>
				<view class="index_center_item_box margin_top_m">
					<image src="/static/image/index03.png" class="index_center_item_img " ></image>
					<view class="index_center_item_con" @click="toVip(2)">
						<view class="index_center_title">
							名家有约
						</view>
						<view class="index_center_con margin_top_m">
							提供知名专家健康咨询服务，专注长期健康管理
						</view>
						<view class="index_center_btn margin_top_m">
							待上线
						</view>
					</view>
				</view>
			</view>
			<view class="flex_column">
				<view class="index_center_item_box ">
					<image src="/static/image/index02.png" class="index_center_item_img" ></image>
					<view class="index_center_item_con" @click="toVip(3)">
						<view class="index_center_title">
							全程陪诊
						</view>
						<view class="index_center_con margin_top_m">
							普通人/儿童/老年人/孕妈特殊人群等
						</view>
						<view class="index_center_btn margin_top_m">
							立即进入
						</view>
					</view>
				</view>
				
				<view class="index_item_box margin_top_m">
					<image src="/static/image/index04.png" class="index_item_img" ></image>
					<view class="index_item_con" @click="toVip(4)">
						<view class="item_title">
							跑腿开单
						</view>
						<view class="item_con margin_top_m">
							少跑医院、节约时间、轻松挂号、检查、问诊、取药取报告
						</view>
						<view class="item_btn margin_top_m">
							立即进入
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="margin_top_xl color_black_333 font_weight font_size_title_l padding_bottom_m margin_left_l margin_right_l">
			医院列表
		</view>
		<block v-for="(item,index) in hospitalList" :key="index">
			<view class="box_690 flex_row padding_s_m margin_left_l margin_right_l" @click="lookDetail(item,index)">
				<image :src="item.picture" class="clinic_img flex_shrink"></image>
				<view class=" padding_left_m">
					<view class="font_weight font_size_title_s color_black_333 text_overflow_1">
						{{item.name}}
					</view>
					<view class="font_size_text_m margin_top_s">
						<text class="color_red">{{levelMap[item.level].name}}</text>
						<text class="margin_left_s color_black_888">{{typeMap[item.type].name}}</text>
					</view>
					<view class="margin_top_s text_overflow_1 font_size_text_s color_black_888 ">
						{{item.description}}
					</view>
				</view>
			</view>
		</block>
		<!-- 底部导航栏 -->
		<tabbar :tabbarIndex="1" ></tabbar>

	</view>
</template>

<script>
	import {levelMap,typeMap} from "@/static/js/dictionaries.js"
	import QQMapWX from "@/static/js/qqmap-wx-jssdk.js"
	export default {
		data() {
			return {
				levelMap,
				typeMap,
				title: 'Hello',
				swiperList: [],
				hospitalList: [],
				quickAppointShow: false,
				addressInfo:{//定位信息
					longitude:'',
					latitude:'',
					city:'上海市'
				},
				isCanAddress:true ,//是否可以进入定位页面
				pageNo:1,
				loading:true
			}
		},
		onLoad() {
			this.getData()
			// this.getHospital()
			this.qqmapsdk = new QQMapWX({key:'TJNBZ-JMTLI-CGWGZ-5QDAQ-BBP3K-4KFIE'});
			this.getLocation()
		},
		onPullDownRefresh() {
			this.getData();
		},
		onReachBottom() {
			// if (this.loading) {
			// 	this.getHospital();
			// }
		},
		methods: {
			fresh(e) {
				this.getfresh()
			},
			getfresh(e) {
				this.doctorList = []
				this.page = 1
				this.loading = true;
				this.getHospital();
			},
			getData(e){
				this.$api.banner({}).then(res=>{
					this.swiperList = res.list
				})
				this.$api.getHospitalList({}).then(res=>{
					this.hospitalList = res.hospital
				})
			},
			getHospital(){ //获取医院列表
				
				
			},
			getLocation(e){//定位
				uni.getLocation({
				    type: 'wgs84',
				    success: (res) =>{
						this.addressInfo.longitude = res.longitude
						this.addressInfo.latitude = res.latitude
						uni.setStorageSync('addressInfo',this.addressInfo)
						this.qqmapsdk.reverseGeocoder({
							location: {
								latitude: res.latitude,
								longitude: res.longitude
						    }, 
							success:(obj)=> {
								this.addressInfo.id = obj.result.ad_info.adcode
								this.addressInfo.city = obj.result.address_component.city
								uni.setStorage({
								    key: 'addressInfo',
									data:this.addressInfo,
								    success: function (res) {    
								    }
								});
								// this.getdata()
							},
							fail:function(obj){
								console.error(123,obj)
							}
						})
				    },
					fail:(res)=> {
						uni.showModal({
							title:"温馨提示",
							content:"获取定位是为了提供更好的服务~请手动打开定位，然后重启小程序！",
							success: () => {
								this.isCanAddress = false
								this.getdata()
							}
						})
						
				    	
				    }
				});
			},
			goAddress(e){//定位
				if(this.isCanAddress){
					uni.navigateTo({
						url:"/aUserPages/address/address"
					})
				}else{
					uni.showToast({
						icon:"none",
						title:"请手动打开定位服务",
						duration:5000
					})
				}
			},
			lookSwiper(e) {
				//查看轮播图
			},
			toVip(type) {
				//vip陪诊
				if (type == 1) {
					uni.navigateTo({ //vip陪诊
						url: '/aUserPages/vipPages/vipPages'
					})
				} else if (type == 2) { //名家有约
					uni.navigateTo({
						url: '/aUserPages/hospital/expertAppoing'
					})

				} else if (type == 3) { //全程陪诊
					uni.navigateTo({
						url: '/aUserPages/vipPages/wholeProcess'
					})
				} else if (type == 4) {
					uni.navigateTo({
						url: '/aUserPages/runOrder/runOrder'
					})
				}

			},
			lookDetail(item, index) {
				// uni.setStorageSync("hospitalDetail",item)
				uni.navigateTo({
					url: '/aUserPages/hospital/hospital?hospitalId='+item.id
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.flex_column {
		&:nth-child(1) {
			.index_img {
				width: 335rpx;
				height: 270rpx;

				&:nth-child(2) {
					height: 200rpx;
				}
			}
		}

		&:nth-child(2) {
			.index_img {
				width: 335rpx;
				height: 270rpx;

				&:nth-child(1) {
					height: 200rpx;
				}
			}
		}
	}
	
	.index_item_box{
		width: 335rpx;
		height: 270rpx;
		position: relative;
		
		.index_item_img{
			width: 335rpx;
			height: 270rpx;
		}
		
		.index_item_con{
			width: 335rpx;
			height: 270rpx;
			position: absolute;
			top: 0;
			left: 0;
			padding: 15rpx 20rpx;
			box-sizing: border-box;
			
			.item_title{
				font-size: 32rpx;
				color: #A24337;
				font-weight: 600;
				line-height: 45rpx;
			}
			
			.item_con{
				font-size: 22rpx;
				font-family: PingFangSC-Light, PingFang SC;
				font-weight: 300;
				color: #A24337;
				line-height: 30rpx;
			}
			
			.item_btn{
				width: 100rpx;
				height: 36rpx;
				border-radius: 18rpx;
				border: 1rpx solid #A24337;
				text-align: center;
				line-height: 36rpx;
				font-size: 20rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #A24337;
			}
		}
	}
	
	.index_center_item_box{
		width: 335rpx;
		height: 200rpx;
		position: relative;
		
		.index_center_item_img{
			width: 335rpx;
			height: 200rpx;
		}
		
		.index_center_item_con{
			width: 335rpx;
			height: 200rpx;
			position: absolute;
			top: 0;
			left: 0;
			padding: 15rpx 20rpx;
			box-sizing: border-box;
			
			.index_center_title{
				font-size: 32rpx;			
				color: #C55B0F;
				font-weight: 600;
				line-height: 45rpx;
			}
			
			.index_center_con{
				font-size: 22rpx;
				font-family: PingFangSC-Light, PingFang SC;
				font-weight: 300;
				color: #C55B0F;
				line-height: 30rpx;
			}
			
			.index_center_btn{
				width: 100rpx;
				height: 36rpx;
				border-radius: 18rpx;
				border: 1rpx solid #C55B0F;
				text-align: center;
				line-height: 36rpx;
				font-size: 20rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #C55B0F;
			}
		}
	}
	.clinic_img {
		width: 205rpx;
		height: 155rpx;
		background-color: #f8f8f8;
	}

	
</style>
