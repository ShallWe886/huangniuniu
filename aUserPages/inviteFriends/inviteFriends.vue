<template>
	<view class="padding_l">
		<image :src="imageUrl+'/friengBg.png'" mode="aspectFill" class="friend_bg"></image>
		<view class="flex_row margin_top_l">
			<view class="font_size_title_s color_orange font_weight" @click="lookMyfriends">
				我的好友
			</view>
			<view class="margin_left font_size_text_l color_black_888">
				长按海报保存
			</view>
		</view>

		<view class="sure_buttton_letter margin_top_xxl margin_left_l" @click="toShare" >
			分享
		</view>
		<u-popup :show="sharePop" mode="bottom" :round="30"  @close="closePop">
			<view class="padding_l">
				<view class="flex_row">
					<view class="font_weight color_black_333 font_size_text_xl">
						请选择分享方式
					</view>
					<image src="/static/image/health_close.png" mode="aspectFill" class="invite_close margin_left"></image>
				</view>
				<view class="flex_row justify_between margin_bottom_l  margin_top_l" style="padding: 10rpx 50rpx;">
					<view class="flex_column" v-for="(item,index) in shareList" :key="index">
						<image :src="item.img" mode="aspectFill" class="share_img"></image>
						<view class="margin_top_s font_size_text_l color_black_888">
							{{item.title}}
						</view>
					</view>
				</view>
			</view>
			
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sharePop: false,
				shareList:[{img:'/static/image/friend01.png',title:'朋友圈'},{img:'/static/image/friend02.png',title:'微信'},{img:'/static/image/friend03.png',title:'QQ'},{img:'/static/image/friend04.png',title:'微博'}]
			}
		},
		methods: {
			toShare(e){
				this.sharePop = true
			},
			closePop(e){
				console.log(e)
				this.sharePop = false
			},
			lookMyfriends(){
				//查看我的好友
				uni.navigateTo({
					url:"/aUserPages/inviteFriends/myFriend"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.friend_bg {
		width: 690rpx;
		height: 878rpx;
	}
	
	.share_img{
		width: 110rpx;
		height: 110rpx;
	}
	.invite_close{
		width: 36rpx;
		height: 36rpx;
	}
</style>
