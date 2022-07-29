<template>
	<view class="padding_bottom_10">
		<view v-for="(item,index) in addressList" class="bg_white" :key="index">
			<view class="item_box padding_l_m" @click="sureAddress(item)">
				<view class="font_size_text_l color_black font_weight">
					<text class="font_size_text_m color_orange margin_right_s tip_box" v-if="item.is_default == 0">默认</text><text>{{item.name}}</text><text class="margin_left_m">{{item.phone}}</text>
				</view>
				<view class="margin_top_m flex_row">
					<view class="font_size_text_m color_black_999 text_overflow_1">
						<block v-if="item.province">{{item.province}}</block>
						<block v-if="item.city ">{{item.city}}</block>
						<block v-if="item.area">{{item.area}}</block>
						<block v-if="item.address">{{item.address}}</block>
					</view>
				
				</view>
			</view>
		</view>
		<view style="margin-top: 30vh;text-align: center;font-size: 32rpx;color: #999999;" v-if="addressList.length == 0">
			暂无收货地址
		</view>
		<view class="add_box width_all">
			<view class="sure_buttton " style="position: fixed;bottom: 120rpx;left: 70rpx;" @click="addAddress(0)">
				新增收货地址
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressList:[],
				page:1,
				loading:true,
				addressInfo:null,
				status:null
			}
		},
		onLoad(options) {
			this.status = options.status
			uni.setNavigationBarTitle({
				title:this.status == 0 ? '选择地址' : '地址管理'
			})
		},
		onShow() {
			this.getfresh()
		},
		onPullDownRefresh:function(){
		 this.fresh();
		},
		onReachBottom() {
			if(this.loading){
				this.getList()
			}
		},
		methods: {
			fresh(e){
				uni.showNavigationBarLoading();
				this.getfresh()
			},
			getfresh(e){
				this.addressList=[]
				this.page = 1
				this.loading = true;
				this.getList()
				uni.hideNavigationBarLoading();
				uni.stopPullDownRefresh();
			},
			getList(e){
				this.$api.getAddressList({page:this.page,pageSize:10}).then(res=>{
					this.loading = res.list.length == 10;
					this.addressList = this.addressList.concat(res.list);
					this.page += 1
				})
			},
			addAddress(e){
				uni.navigateTo({
					url:"/my/addAddress/addAddress?tyep="+e
				})
			},
			updateAddress(type,item){
				// this.addressInfo = JSON.stringify(item)
				uni.navigateTo({
					url:"/my/addAddress/addAddress?tyep="+e
				})
			},
			sureAddress(item){
				if(this.status == 0){
					uni.setStorage({
					    key: 'address',
						data:item,
					    success: function (res) {
							getApp().globalData.upDate.address = true
					        uni.navigateBack({
					        	delta:1
					        })
					    }
					});
				}
			}
		}
	}
</script>

<style >
	page{background-color: #FFFFFF;}
.writeImg{width: 24rpx;height: 24rpx;}
.item_box{border-bottom: 1rpx solid #EEEEEE;}
.tip_box{line-height: 15px;padding: 0 5px;border-radius: 5px;background: #FFE6E6;}
.add_box{position: fixed;bottom: 0;left: 0;height: 60px;z-index: 999;background: #FFFFFF;}
.add{line-height: 40px;border-radius: 20px;padding: 0 10px;border: 1rpx solid #00A2E9;width: 690rpx;background: #00A2E9;text-align: center;}
</style>
