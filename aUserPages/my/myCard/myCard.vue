<template>
	<view class="padding_l">
		<view class="flex_row">
			<image src="/static/image/card_icon.png" mode="aspectFill" class="card_icon"></image>
			<view class="font_size_title_l font_weight color_black_333 margin_left_m">
				我的卡（3张）
			</view>
			<view class="margin_left add_card_box  " @click="toAddCard">
				<u-icon name="plus" size="30" color="#ffffff"></u-icon>
				<view class="margin_left_s">
					新增银行卡
				</view>
			</view>
		</view>
		<view class="margin_top_l">
			<view class="card_box margin_top_l" v-for="(item,index) in cardList" :key="index">
				<image :src="item.img" mode="aspectFill" class="card_img"></image>
				<view class="card_con_box">
					<view class="font_size_text_xl color_white text_align_end">
						张*斌
					</view>
					<view class="flex_row margin_top_xl ">
						<view class="color_white " style="font-size: 48rpx;margin-left: 60rpx;">
							<text>....</text><text class="margin_left_m">....</text><text class="margin_left_m">....</text><text class="margin_left_m">1155</text>
						</view>
						<view class="card_label margin_left">
							设置卡备注
						</view>
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
				cardList:[{img:'/static/image/card01.png'},{img:'/static/image/card02.png'},{img:'/static/image/card03.png'}]
			}
		},
		methods: {
			toAddCard(e){
				uni.navigateTo({
					url:'/aUserPages/my/myCard/addCard/addCard'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.card_icon {
		width: 45rpx;
		height: 34rpx;
	}

	.add_card_box {
		width: 250rpx;
		height: 70rpx;
		border-radius: 30rpx;
		background: linear-gradient(to right, #FF7328, #FF9241);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;
		color: #ffffff;
	}
	
	.card_box{
		position: relative;
		
		.card_img{
			width: 690rpx;
			height: 230rpx;
			
			
		}
		
		.card_con_box{
			position: absolute;
			top: 0;
			left: 0;
			width: 690rpx;
			height: 230rpx;
			padding: 30rpx;
			box-sizing: border-box;
			
			.card_label{
				padding: 5rpx 10rpx;
				border-radius: 16rpx;
				background: rgba(255, 255, 255, 0.3);
				font-size: 26rpx;
				color: #ffffff ;
			}
		}
	}
</style>
