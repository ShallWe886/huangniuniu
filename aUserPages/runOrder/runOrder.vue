<template>
	<view>
		<view class="" style="padding-bottom: 200rpx;">
			<view class="vip_box">
				<image :src="imageUrl+'/vipTopImg.png'" class="vip_topImg"></image>
				<view class="box_690 padding_l_xl vip_tip_box">
					<view class=" flex_column">
						<view class="service_box ">
							<view
								style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;left: 10px;top: 13px;">
							</view>
							<view class="font_size_title_s color_orange">
								跑腿开单
							</view>
							<view
								style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;right: 10px;top: 13px;">
							</view>
						</view>
					</view>
					<!-- <view class="font_weight color_black_333 font_size_title_l">
						跑腿开单
					</view> -->
					<view class="font_size_text_xl .color_black_333 margin_top_m" style="text-align:justify;">
						麦咚顾问为您代办挂号、问诊、开单、购药、预约检查、纸质检查报告送取。您无需花时间往返医院，让您省时省心。
					</view>
				</view>
			</view>
			<!-- <view class="box_690 margin_left_l ">
				<u-swiper :list="swiperList" @click="lookSwiper" indicator indicatorMode="dot" circular height="300">
				</u-swiper>
				<view class="box_690 padding_l_xl vip_tip_box">
					<view class="font_weight color_black_333 font_size_title_l">
						跑腿开单
					</view>
					<view class="font_size_text_xl color_black_999 margin_top_m">
						麦咚顾问为您代办挂号、问诊、开单、购药、预约检查、纸质检查报告送取。您无需花时间往返医院，让您省时省心
					</view>
				</view>
			</view> -->
			<view class="margin_left_l margin_right_l margin_top_l margin_bottom_s" style="margin-top: 190rpx;">
				<view class="box_690 padding_xl_l flex_column ">
					<view class="service_box ">
						<view
							style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;left: 10px;top: 13px;">
						</view>
						<view class="font_size_title_s color_orange font_weight">
							适用人群
						</view>
						<view
							style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;right: 10px;top: 13px;">
						</view>
					</view>
					<view class="font_size_text_xl color_black_333 margin_top_m">
						繁忙人士/老年人/孕妇/异地患者/特殊人群等
					</view>
				</view>
			</view>
			<view class="box_690 margin_left_l padding_xl_l">
				<view class="flex_column">
					<view class="service_box margin_top_l margin_bottom_l">
						<view
							style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;left: 10px;top: 13px;">
						</view>
						<view class="font_size_title_s color_orange font_weight">
							收费标准
						</view>
						<view
							style="width: 15rpx;height: 15rpx;border-radius: 50%;background-color: #fff;position: absolute;right: 10px;top: 13px;">
						</view>
					</view>
				</view>
				<view class="flex_row border_bottom padding_l" v-for="(item,index) in list" :key="index" @click="selectStatus(item)">
					<view class="flex_row">
						<radio :checked="item.status" v-model="item.status" color='#FF6437' style="transform:scale(0.7)"/>
						<text class="font_size_text_xl color_black_333">{{item.name}}</text>
					</view>
					<view class="margin_left color_orange font_weight font_size_title_m">
						{{item.money}}元
					</view>
				</view>
			</view>
		</view>

		<view class="run_bottom">
			<view class="flex_row">
				<view class="font_size_text_xl color_black_999 flex_shrink">
					<radio  color='#FF6437' style="transform:scale(0.7)" :checked="checkAll" @click="selectStatusAll" />
					<text class="margin_left_s">全部</text>
				</view>
				<view class="margin_left flex_row">
					<view class="">
						<view class="">
							<!-- <text class="font_size_text_m color_black_999">已选{{buyInfo.num}}项,</text> -->
							<text class="font_size_text_m color_black_333">合计：</text>
							<text class="color_orange font_weight font_size_title_xl">{{buyInfo.allMoney}}</text>
							<text class="font_size_text_m color_orange">元</text>
						</view>
						<view class="margin_top_s">
							<text class="color_orange font_size_text_m">优惠价：</text>
							<text class="color_orange font_weight font_size_text_xl">{{buyInfo.price}}</text>
							<text class="font_size_text_m color_orange">元</text>
						</view>
					</view>
					<view class="run_button margin_left_m flex_shrink" @click="buy">
						去结算{{buyInfo.num}}
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				list: [],
				discountlist:[] ,//折扣列表
				buyInfo:{//购买信息
					num:0 ,//购买数量
					allMoney:0.00 ,// 购买价钱
					price:0 // 优惠价钱
					
				},
				typeList:[],
				checkAll: false,
				
			}
		},
		onLoad(e) {
			this.getData()
		},
		onShow() {
			this.typeList = []
		},
		methods: {
			selectStatusAll() {
				this.checkAll = !this.checkAll
				if(this.checkAll) {
					this.buyInfo.num = 0;
					this.buyInfo.allMoney = 0.00;
					this.buyInfo.price = 0;
				}
				this.list.map(res=>{
					if(this.checkAll) {
						res.status = true;
					} else {
						if(res.status) {
							this.buyInfo.num --
							 this.tocount(res.money,2)
						}
						res.status = false;
					}
					// res.status = !res.status;
					if(res.status){
						this.buyInfo.num ++ 
						this.tocount(res.money,1)
					}
				})
				console.log('this.checkAll', this.checkAll)
			},
			getData(e){
				uni.showLoading({title: '加载中',mask:true});
				this.$api.getbusiness({type:4}).then(res=>{
					uni.hideLoading()
					this.list = res.map(obj=>{
						obj.status = false
						return obj
					})
				})
				this.$api.getDiscount({}).then(res=>{
					this.discountlist = res
					this.discountlist.reverse()
				})
			},
			lookSwiper(e) {
				//查看轮播图
			},
			buy() { //结算
				
				this.list.map(res=>{
					if(res.status){
						this.typeList.push(res.id)
					}
				})
				console.log(this.typeList)
				if(this.typeList.length == 0) {
					uni.showToast({
						title:"请选择业务",
						icon:"none"
					})
					return
				}
				let total = this.buyInfo.allMoney;
				if(this.buyInfo.price > 0 && this.typeList.length > 1) {
					total = this.buyInfo.price
				}
				uni.navigateTo({
					url: '/aUserPages/vipPages/writeOrder?typeList='+JSON.stringify(this.typeList)+'&total='+total
				})
			},
			selectStatus(item){ // 选择状态
				item.status = !item.status
				if(item.status){
					this.buyInfo.num ++ 
					this.tocount(item.money,1)
				}else{
					this.buyInfo.num --
					 this.tocount(item.money,2)
				}
			},
			tocount(money,type){ //type 1 :+ 2: -  计算价钱
				if(type == 1){
					this.buyInfo.allMoney = Number(Number(this.buyInfo.allMoney)+Number(money)).toFixed(2)
				}else{
					this.buyInfo.allMoney = Number(Number(this.buyInfo.allMoney)-Number(money)).toFixed(2)
				}
				this.toDiscount()
			},
			toDiscount(){//计算折扣
				for (var i = 0; i < this.discountlist.length; i++) {
					if(this.buyInfo.num >= Number(this.discountlist[i].number)){
						this.buyInfo.price = (this.buyInfo.allMoney * Number(this.discountlist[i].rate)*0.1).toFixed(2)
						break;
					} else {
						this.buyInfo.price = 0;
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.service_box {
		background: #FFEAE3;
		width: 290rpx;
		height: 70rpx;
		border-radius: 40rpx;
		line-height: 70rpx;
		text-align: center;
		position: relative;
	}
	.vip_box {
		position: relative;
	
		.vip_topImg {
			width: 100%;
			height: 370rpx;
		}
	
		.vip_tip_box {
			position: absolute;
			top: 270rpx;
			left: 30rpx;
		}
	}
	.run_bottom {
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
		background: #ffffff;
		box-shadow: 0rpx -15rpx 60rpx -10rpx rgba(229, 149, 121, 0.1);
		border-radius: 40rpx 40rpx 0rpx 0rpx;
		box-sizing: border-box;
		padding: 40rpx 30rpx;

		.run_button {
			width: 200rpx;
			height: 90rpx;
			background: linear-gradient(135deg, #FF6437 0%, #FF9B51 100%);
			box-shadow: 0rpx 10rpx 30rpx -10rpx rgba(255, 73, 0, 0.3);
			border-radius: 45rpx;
			text-align: center;
			line-height: 90rpx;
			font-size: 36rpx;
			font-weight: bold;
			color: #ffffff;
		}
	}
</style>
