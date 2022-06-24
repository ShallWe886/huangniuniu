<template>
	<view class="fixed_padding_bottom_xxxl">
		<view class="bg_box">
			<image src="/static/image/my_bg.png" mode="aspectFill" class="my_bg"></image>
			<view class="avator_box">
				<view class="flex_row ">
					<image src="/static/image/avator.png" mode="aspectFill" class="avator_img flex_shrink"></image>
					<view class="width_all margin_left_m">
						<view class="flex_row">
							<view class="font_size_title_l color_black_333 font_weight">
								钢铁**超甜
							</view>
							<view class="patient_man color_white font_size_text_s margin_left">
								患者管理
							</view>
						</view>
						<view class="flex_row margin_top_l">
							<view class="flex_row my_label">
								<image src="/static/image/my_label_img01.png" mode="aspectFill" class="label_img">
								</image>
								<view class="font_size_text_s color_orange flex_row">
									<view class="margin_right_xs">
										我的积分 96
									</view>
									<u-icon name="arrow-right" color="#FF6437" size="25"></u-icon>
								</view>
							</view>
							<view class="flex_row my_label margin_left_m">
								<image src="/static/image/my_label_img02.png" mode="aspectFill" class="label_img">
								</image>
								<view class="font_size_text_s color_orange flex_row">
									<view class="margin_right_xs">
										冬冬币 96
									</view>
									<u-icon name="arrow-right" color="#FF6437" size="25"></u-icon>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="box_690 margin_top_xl padding_top_l padding_left_l padding_right_l padding_bottom_xl">
					<view class="flex_row">
						<view class="font_size_title_s color_black_333 font_weight">
							我的订单
						</view>
						<view class="flex_row margin_left font_size_text_s color_black_888" @click="toMyOrder(0)">
							更多
							<u-icon name="arrow-right" size="26" color="#999999"></u-icon>
						</view>
					</view>
					<view class="flex_row justify_between margin_top_l">
						<view class="flex_column" v-for="(item,index) in orderList" @click="toMyOrder(index+1)">
							<image :src="item.img" mode="aspectFill" class="my_order_img"></image>
							<view class="font_size_text_l color_black_333 margin_top_m">
								{{item.title}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="flex_row  margin_left_l margin_top_l">
			<view class="my_center_box">
				<image src="/static/image/my_center01.png" mode="aspectFill"></image>
				<view class="my_center_item">
					<view class="font_size_title_m color_white font_weight">
						邀请好友
					</view>
					<view class="font_size_text_s color_white margin_top_s">
						副标题副标题
					</view>
					<view class="font_size_text_xs color_white my_center_invite margin_top_s">
						立即邀请
					</view>
				</view>
			</view>
			<view class="my_center_box margin_left_l">
				<image src="/static/image/my_center02.png" mode="aspectFill"></image>
				<view class="my_center_item">
					<view class="font_size_title_m color_white font_weight">
						常见问题
					</view>
					<view class="font_size_text_s color_white margin_top_s">
						副标题副标题
					</view>
					<view class="font_size_text_xs color_white my_center_invite margin_top_s">
						立即查看
					</view>
				</view>
			</view>
		</view>
		<view class="flex_row my_list margin_left_l margin_top_xl margin_bottom_m" v-for="(item,index) in myList">
			<image :src="item.img" mode="aspectFill"></image>
			<view class="font_size_text_l color_black_333 margin_left_l">
				{{item.title}}
			</view>
			<view class="margin_left font_size_text_l color_black_999" v-if="index == 0 ">
				v1.2
			</view>
			<view class="margin_left font_size_text_l color_black_999" v-else-if="index == 2 ">
				44M
			</view>
			<view class="margin_left font_size_text_l color_black_999" v-else>
				<u-icon name="arrow-right"></u-icon>
			</view>
		</view>
		<view class="my_out font_size_text_l color_black_333 margin_top_l">
			退出登录
		</view>
		
		<keep-alive>
			<tabbar :type='5' ></tabbar>
		</keep-alive>
		<!-- <tabbar :type='1'></tabbar> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderList: [{
						title: '待付款',
						img: '/static/image/my_order01.png'
					},
					{
						title: '待接单',
						img: '/static/image/my_order02.png'
					},
					{
						title: '服务中',
						img: '/static/image/my_order03.png'
					},
					{
						title: '已完成',
						img: '/static/image/my_order04.png'
					},
					{
						title: '退款',
						img: '/static/image/my_order05.png'
					}
				],
				myList: [{
						img: '/static/image/my_list01.png',
						title: '版本号',
						isShow: 'false'
					},
					{
						img: '/static/image/my_list02.png',
						title: '消息推送设置',
						isShow: 'true'
					},
					{
						img: '/static/image/my_list03.png',
						title: '清除缓存',
						isShow: 'false'
					},
					{
						img: '/static/image/my_list04.png',
						title: '用户协议',
						isShow: 'true'
					},
					{
						img: '/static/image/my_list05.png',
						title: '隐私条款',
						isShow: 'true'
					},
				]
			}
		},
		methods: {
			//查看订单
			toMyOrder(status){
				uni.navigateTo({
					url:"/aUserPages/my/myOrder?status="+status
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bg_box {
		width: 100%;
		height: 470rpx;
		position: relative;

		.my_bg {
			width: 100%;
			height: 450rpx;
		}

		.avator_box {
			position: absolute;
			top: 40rpx;
			left: 30rpx;
		}

		.avator_img {
			width: 110rpx;
			height: 110rpx;
			border-radius: 50%;
			background-color: bisque;
		}

		.my_label {
			padding: 5rpx 15rpx;
			border-radius: 18rpx;
			background-color: #FFFFFF;

			.label_img {
				width: 24rpx;
				height: 24rpx;

			}
		}

		.patient_man {
			width: 126rpx;
			height: 42rpx;
			line-height: 42rpx;
			text-align: center;
			border-radius: 25rpx 0 0 25rpx;
			background: linear-gradient(to right, #FF6437, #FF9B51);
		}

		.my_order_img {
			width: 64rpx;
			height: 64rpx;
		}

	}

	.my_center_box {
		position: relative;

		image {
			width: 330rpx;
			height: 180rpx;
		}

		.my_center_item {
			position: absolute;
			top: 0;
			left: 0;
			width: 330rpx;
			height: 180rpx;
			box-sizing: border-box;
			padding: 20rpx;

			.my_center_invite {
				width: 108rpx;
				height: 36rpx;
				line-height: 36rpx;
				text-align: center;
				border: 1rpx solid #FFFFFF;
				border-radius: 16rpx;
			}
		}
	}

	.my_list {
		width: 690rpx;

		image {
			width: 42rpx;
			height: 42rpx;
		}
	}
	
	.my_out{
		width: 280rpx;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		border-radius: 40rpx;
		background-color: #FAE5DD;
		margin-left: 235rpx;
	}
</style>
