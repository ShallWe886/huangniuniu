<template>
	<view class="fixed_padding_bottom_xxxl">
		<zq-navbar :props="{'navbarTitle':'健康百科','hasLocation':true}" >
			  <template v-slot:left>
				  <view class="flex_row" @click="goAddress">
				  	<u-icon name="map" color="#333333" size="30"></u-icon>
					<view class="font_size_title_s color_black_333  padding_0_s">
						{{addressInfo.city}}
					</view>
					<u-icon name="arrow-down-fill" color="#333333" size="30"></u-icon>
				  </view>
			  </template>
			  <template v-slot:right>
			  				<!-- #ifdef APP-PLUS -->
			  	<view style="width:90px;">
			  		
			  	</view>
			  				<!-- #endif -->
			  </template>
		</zq-navbar>
		<search @searchData="getSearchData"></search>
		<view class="  margin_top_m padding_0_l">
			<u-swiper :list="swiperList" keyName="picture" @click="lookSwiper" indicator indicatorMode="dot" circular height="280" :radius="20">
			</u-swiper>
			<scroll-view scroll-x="true" style="width: 690rpx;margin-top: 20rpx;padding-left: 20rpx;box-sizing: border-box;height: 60rpx;" >
				<view class="flex_row">
					<view class="flex_column margin_right_l flex_shrink" v-for="(item,index) in selectList" :key="index" @click="selectIndexs(item, index)">
						<view class="health_label" :class="{'active':selectIndex == index}">
							{{item.channel_name}}
						</view>
						<view class="health_bottom margin_top_s" :class="{'active':selectIndex == index}">
						</view>
					</view>
				</view>
			</scroll-view>
			<!-- <zq-load class="" v-if="healthList"> -->
				<view class="box_690 health_box" v-for="(item,index) in healthList" :key="index" @click="lookDetail(item)">
					<image :src="item.news_face" mode="aspectFill" class="health_img"></image>
					<view class="margin_top_m padding_left_l padding_right_l padding_bottom_m">
						<view class="font_size_title_s color_black font_weight text_overflow_1">
							{{item.title}}
						</view>
						<view class="font_size_text_l color_black_999 text_overflow_1 margin_top_s">
							{{item.channel_name}}
						</view>
					</view>
					<view class="health_con_label">
						标签
					</view>
				</view>
			<!-- </zq-load> -->
			
		</view>
		<!-- 底部导航栏 -->
		<tabbar :tabbarIndex="4"></tabbar>
	</view>
</template>

<script>
	import search from '@/components/search.vue'
	import Load from '@/static/utils/load.js'
	import QQMapWX from "@/static/js/qqmap-wx-jssdk.js"
	export default {
		components:{
			search
		},
		data() {
			return {
				title: '',
				addressInfo:{//定位信息
					longitude:'',
					latitude:'',
					city:'广州'
				},
				swiperList: [
					// 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					// 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					// 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				selectIndex:0,
				selectList:[{channel_name: '推荐', channel_id: ''}],
				healthList:[],
				info:'',
				channel_id: '',

			}
		},
		onLoad() {
			uni.showLoading({title: '加载中',mask:true});
			this.getData()
			this.getList()
			this.qqmapsdk = new QQMapWX({key:'2PWBZ-ZJWKJ-Z2AFK-FCMDI-MTTDS-KZBPP'});
		},
		onShow() {
			this.getLocation()
		},
		onPageScroll(event) {
			this.info.scrollLazy(event.scrollTop)
		},
		methods: {
			lookSwiper() {},
			getSearchData(e) {
				console.log('eeee', e);
				this.title = e;
				this.healthList = [];
				this.getList();
			},
			selectIndexs(item, index) {
				this.healthList = [];
				this.channel_id = item.channel_id;
				this.selectIndex = index;
				this.getList();
			},
			getData(e){
				this.info = new Load({
					api:this.$api.getarticleList,
					lazy:{subtractHeight:470,itemHeight:400},
					queryParams:{}
				})
				// this.info.getList()
				this.$api.getChannel({page:1,pageSize:15}).then(res=>{
					this.selectList =this.selectList.concat(res.list);
				})
				this.$api.banner({type: 2}).then(res=>{
					this.swiperList = res.list
				})
				uni.hideLoading()
			},
			getList() {
				this.$api.getarticleList({page:1,pageSize:10, channel_id: this.channel_id,title:this.title}).then(res=>{
					this.healthList = this.healthList.concat(res.list);
				})
			},
			getLocation(e){//定位
				uni.getLocation({
				    type: 'wgs84',
				    success: (res) =>{
						uni.hideLoading()
						let addressInfo = uni.getStorageSync('addressInfo');
						if(addressInfo.longitude) {
							this.addressInfo.longitude = addressInfo.longitude;
							this.addressInfo.latitude = addressInfo.latitude
						} else {
							this.addressInfo.longitude = res.longitude
							this.addressInfo.latitude = res.latitude
						}
						uni.setStorageSync('addressInfo',this.addressInfo);
						console.log('ewss', res, addressInfo,this.addressInfo);
						this.qqmapsdk.reverseGeocoder({
							location: {
								latitude: this.addressInfo.latitude,
								longitude: this.addressInfo.longitude
						    }, 
							success:(obj)=> {
								this.addressInfo.id = obj.result.ad_info.adcode
								this.addressInfo.city = obj.result.address_component.city
								if(this.addressInfo.city.length > 4) {
									this.addressInfo.city =	this.addressInfo.city.substring(0, 2)
								}
								console.log('地址', obj, this.addressInfo);
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
						uni.hideLoading()
						uni.showModal({
							title:"温馨提示",
							content:"获取定位是为了提供更好的服务~请手动打开定位，然后重启小程序！",
							success: () => {
								this.isCanAddress = false
								// this.getdata()
							}
						})
						
				    	
				    }
				});
			},
			goAddress(e){//定位
				uni.navigateTo({
					url:"/aUserPages/address/address"
				})
			},
			lookDetail(item){
				uni.navigateTo({
					url:'/aUserPages/healthy/healthyCon/healthyCon?healthId='+item.id+'&title='+item.title
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.health_label{
	font-size: 28rpx;
	color: #333333;
	
	&.active{
		color: 	#FF6437;
		font-weight: bold;
		font-size: 32rpx;
	}
}

.health_bottom{
	width: 50rpx;
	height: 4rpx;
	border-radius: 2rpx;
	background: #fafafa;
	
	&.active{
		background: #FF6437;
		
	}
}
.health_box{
	position: relative;
	height: 380rpx;
	.health_img{
		width: 690rpx;
		height: 250rpx;
	}
	
	.health_con_label{
		width: 100rpx;
		height: 40rpx;
		border-radius: 0 20rpx 0 20rpx;
		background: linear-gradient(to right,#FA6B00,#FA2E14);
		font-size: 24rpx;
		color: #ffffff;
		position: absolute;
		top: 0;
		right: 0;
		line-height: 40rpx;
		text-align: center;
	}
}

</style>
