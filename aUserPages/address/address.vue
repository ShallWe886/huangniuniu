<template>
	<view>
		<view class="flex_row padding_m_l border_bottom">
			<view class="flex_shrink flex_row">
				<u-icon name="map" size="40" color="#333333"></u-icon>
				<view class="font_size_title_s color_black_333 font_weight margin_left_xs margin_right_s">
					{{addressInfo.city || '广州'}}
				</view>
			</view>

			<u-icon name="arrow-down-fill" size="30" color="#333333"></u-icon>
			<view class="margin_left_l width_all">
				<!-- <u-search placeholder="请输入服务城市" v-model="keyword" :show-action="false" searchIconSize="50" @search="searchCity" height="60"> -->
				</u-search>
			</view>
		</view>
		<view class="flex_row padding_m_l">
			<view class="font_size_title_l color_black_333" @click="updateAddresss(0,{'region_name':LoactionInfo.city})">
				{{LoactionInfo.city}}
			</view>
			<view class="margin_left flex_row" @click="reLocation">
				<image src="/static/image/addr.png" mode="aspectFill" class="addr_img"></image>
				<view class="color_orange font_size_title_s margin_left_m">
					重新定位
				</view>
			</view>
		</view>
		<view class="flex_row scroll_height">
			<scroll-view scroll-y="true" class="scroll_height city_w">
				<view v-for="(item,index) in areaDate" :key="index" @click="selectCity(item,index)">
					<view class="font_size_title_s color_black_333 city_item" :class="{'active':cityId == index}"
						:key="index">{{item.region_name}}</view>
				</view>
			</scroll-view>
			<scroll-view scroll-y="true" class="scroll_height city_w">
				<view v-for="(item,index) in countryList" :key="index" @click="updateAddresss(1,item)">
					<view class="font_size_title_s color_black_333 country_item" :key="index">{{item.region_name}}</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import QQMapWX from "@/static/js/qqmap-wx-jssdk.js"
	export default {
		data() {
			return {
				keyword: '',
				areaDate:[],
				cityList: [],
				countryList:[],
				cityId: 0,
				LoactionInfo:{//定位信息
					longitude:'',
					latitude:'',
					city:''
				},
				addressInfo:{//位置信息
					longitude:'',
					latitude:'',
					city:''
				},
			}
		},
		onLoad() {
			// this.qqmapsdk = new QQMapWX({key:'TJNBZ-JMTLI-CGWGZ-5QDAQ-BBP3K-4KFIE'});
			this.qqmapsdk = new QQMapWX({key:'2PWBZ-ZJWKJ-Z2AFK-FCMDI-MTTDS-KZBPP'});
			this.getAddressData()
			let addressInfo = uni.getStorageSync('addressInfo');
			if(JSON.stringify(addressInfo) !=='{}') {
				this.addressInfo.city = addressInfo.city
				this.LoactionInfo.longitude = addressInfo.longitude
				this.LoactionInfo.latitude = addressInfo.latitude
			} 
			this.reLocation()
		},
		methods: {
			searchCity(e){
				console.log('eee',e);
			},
			getAddressData(e){
				uni.showLoading({})
				this.$api.getArea({}).then(res=>{
					this.areaDate = res.list
					this.countryList = this.areaDate[this.cityId].second
					uni.hideLoading()
				})
			},
			selectCity(item,index){
				this.countryList = item.second
				this.cityId = index
			},
			reLocation(e){//重新定位
				let addressInfo = {};
				uni.getStorage({
					key: 'addressInfo',
					success: function (res) {
						addressInfo = res.data;
						console.log(res.data);
					}
				});
				uni.getLocation({
				    type: 'wgs84',
				    success: (res) =>{
						console.log('addressInfor333', uni.getStorageSync('addressInfo'));
						// if(!this.LoactionInfo.longitude) {
							this.LoactionInfo.longitude = res.longitude
							this.LoactionInfo.latitude = res.latitude
						// }
						this.qqmapsdk.reverseGeocoder({
							location: {
								latitude: this.LoactionInfo.latitude,
								longitude: this.LoactionInfo.longitude
						    }, 
							success:(obj)=> {
								this.LoactionInfo.city = obj.result.address_component.city
								console.log('@@@', this.LoactionInfo.city);
							},
							fail:function(obj){
								console.error(123,obj)
							}
						})
				    },
					fail:(res)=> {
						console.log('地址error111', res);
						uni.showModal({
							title:"温馨提示",
							content:"获取定位是为了提供更好的服务~请手动打开定位，然后重启小程序！",
							success: () => {
							}
						})
				    	
				    }
				});
			},
			updateAddresss(type,item){//选择位置信息
			console.log('type', type);
				// if(type == 0){
				// 	this.addressInfo = this.LoactionInfo
				// }else{
					this.qqmapsdk.geocoder({
						address: item.region_name, //地址参数，例：固定地址，address: '北京市海淀区彩和坊路海淀西大街74号'
						success: (res) =>{
							console.log('fffff', res);
							this.addressInfo.id = res.result.ad_info.adcode
							this.addressInfo.city = item.district_name
							this.addressInfo.longitude = res.result.location.lng
							this.addressInfo.latitude = res.result.location.lat
							uni.setStorage({
							    key: 'addressInfo',
								data:this.addressInfo,
							    success: function (res) {
							        
							    }
							});
							getApp().globalData.upDate.isChangeAddress = true
							uni.navigateBack({
								delta:1
							})
						},
						fail:function(res){
							console.error(res)
						}
					})
				// }
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		background-color: #ffffff;
		min-height: 100vh;
		width: 750rpx;
	}

	.addr_img {
		width: 34rpx;
		height: 34rpx;
	}

	.scroll_height {
		height: calc(100vh - 180rpx);
	}

	.city_w {
		&:nth-child(1) {
			width: 280rpx;
			background-color: #EAEAEA;

			.city_item {
				width: 280rpx;
				height: 90rpx;
				line-height: 90rpx;
				text-align: center;

				&.active {
					background-color: #FAFAFA;
				}
			}
		}

		&:nth-child(2) {
			width: 470rpx;

			.country_item {
				width: 470rpx;
				height: 90rpx;
				line-height: 90rpx;
				text-align: center;
			}

		}




	}
</style>
