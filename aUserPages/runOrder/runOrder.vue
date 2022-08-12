<template>
	<view>
		<view class="" style="padding-bottom: 200rpx;">
			<view class="box_690 margin_left_l ">
				<u-swiper :list="swiperList" @click="lookSwiper" indicator indicatorMode="dot" circular height="300">
				</u-swiper>
			</view>
			<view class="margin_left_l margin_right_l margin_top_l margin_bottom_s">
				<text class="font_size_text_l color_black_333 font_weight">适合人群/场景：</text>
				<text
					class="font_size_text_l color_black_333">繁忙人士、老人、孕妇等检查开单预约长期需要购药、需要纸质检查报告异地患者检查、购药、取报告精准挂号门诊就诊预约检查</text>
			</view>
			<view class="box_690 margin_left_l">
				<view class="flex_row border_bottom padding_l" v-for="(item,index) in list" :key="index">
					<view class="flex_row">
						<radio :checked="item.status" v-model="item.status" color='#FF6437' style="transform:scale(0.7)" @click="selectStatus(item)"/>
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
					<radio  color='#FF6437' style="transform:scale(0.7)" />
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
				typeList:[]
				
			}
		},
		onLoad(e) {
			this.getData()
		},
		onShow() {
			this.typeList = []
		},
		methods: {
			getData(e){
				this.$api.getbusiness({type:4}).then(res=>{
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
				uni.navigateTo({
					url: '/aUserPages/vipPages/writeOrder?typeList='+JSON.stringify(this.typeList)
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
					if(Number(this.discountlist[i].number) <= this.buyInfo.num){
						this.buyInfo.price = this.buyInfo.allMoney * Number(this.discountlist[i].rate)*0.1
						break;
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
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
