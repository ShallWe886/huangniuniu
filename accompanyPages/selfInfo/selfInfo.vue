<template>
	<view>
		<view class="self_box">
			<image :src="imageUrl+'/my_bg.png'" mode="aspectFill" class="my_bg"></image>
			<view class="selfInfo_box">
				<view class="flex_row">
					<image src="/static/image/avator.png" mode="aspectFill" class="avator_img flex_shrink"></image>
					<view class="margin_left_m width_all" @click="setUserInfo">
						<view class="flex_row">
							<view class="font_weight color_black_333 font_size_title_l">
								钢铁**超甜
							</view>
							<view class="margin_left self_tip_box " @click.stop="lookMyMessage">
								<image src="/static/image/selfImg.png" mode="aspectFill" class="self_tip_img"></image>
								<view class="self_tip_num">
									6
								</view>
							</view>
						</view>

						<view class="flex_row margin_top_l">
							<view class="self_label">
								年龄：35
							</view>
							<view class="self_label margin_left_m">
								性别：女
							</view>
						</view>
					</view>
				</view>
				<view class="box_690 padding_0_l">
					<view class="flex_row  padding_l_0" v-for="(item,index) in selfList" :key="index"
						@click="lookItem(item)">
						<image :src="item.img" mode="aspectFill" class="self_img"></image>
						<view class="color_black_333 font_size_text_l margin_left_m">
							{{item.title}}
						</view>
						<view class="margin_left flex_row font_size_text_l color_black_999">
							<view v-if="item.isShow">
								{{item.con}}
							</view>
							<u-icon name="arrow-right" size="30" color="#999999"></u-icon>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="box_690 padding_0_l margin_left_l" >
			<view class="flex_row  padding_l_0" @click="lookMyMessage">
				<image src="/static/image/self06.png" mode="aspectFill" class="self_img"></image>
				<view class="color_black_333 font_size_text_l margin_left_m">
					我的消息
				</view>
				<view class="margin_left flex_row font_size_text_l color_black_999">
					<view class="new_box">
						new
					</view>
					<u-icon name="arrow-right" size="30" color="#999999"></u-icon>
				</view>
			</view>
			<view class="flex_row  padding_l_0" @click="toSet">
				<image src="/static/image/self07.png" mode="aspectFill" class="self_img"></image>
				<view class="color_black_333 font_size_text_l margin_left_m">
					设置
				</view>
				<view class="margin_left flex_row font_size_text_l color_black_999">

					<u-icon name="arrow-right" size="30" color="#999999"></u-icon>
				</view>
			</view>
		</view>
		<u-popup :show="timePop" :round="30" mode="bottom" @close="closeTimePop" >
			<view>
				<view class="flex_row justify_between padding_l">
					<view @click="closeTimePop">
						<u-icon name="arrow-left" size="50" color="#333333"> </u-icon>
					</view>
					<view class="font_size_title_xxl color_black_333 font_weight">
						选择时间
					</view>
					<view class="font_size_title_xl color_orange font_weight" @click="closeTimePop">
						保存
					</view>
				</view>
				<view class="flex_row time_all_box">
					<scroll-view scroll-y="true" style="width: 160rpx;height: 60vh;">
						<block v-for="(item,index) in dateList" :key="index">
							<view class="date_box" :class="{'active':dateIndex == index}">
								今日
							</view>
						</block>

					</scroll-view>
					<scroll-view scroll-y="true" style="width: 590rpx;height:60vh;">
						<view class="flex_row" style="margin-left: 70rpx;">
							<view class="flex_row">
								<view
									style="width: 24rpx;height: 24rpx;border-radius: 2rpx;border: 1rpx solid #BEBEBE;box-sizing: border-box;">
								</view>
								<view class="font_size_text_l color_black_888 margin_left_s">
									已预约
								</view>
							</view>
							<view class="flex_row" style="margin-left: 70rpx;">
								<view
									style="width: 24rpx;height: 24rpx;border-radius: 2rpx;background: #FFD8C6;box-sizing: border-box;">
								</view>
								<view class="font_size_text_l color_black_888 margin_left_s">
									休息
								</view>
							</view>
							<view class="flex_row" style="margin-left: 70rpx;">
								<view
									style="width: 24rpx;height: 24rpx;border-radius: 2rpx;background: #FF8F00;box-sizing: border-box;">
								</view>
								<view class="font_size_text_l color_black_888 margin_left_s">
									工作
								</view>
							</view>
						</view>
						<view class="flex_row flex_wrap justify_between margin_top_xl" style="padding: 0 35rpx;">
							<block v-for="(item,index) in timeList" :key="index">
								<view class="time_box_third" v-if="item.status == 0">{{item.time}}</view>
								<view class="time_box_second" v-if="item.status == 1">{{item.time}}</view>
								<view class="time_box_first" v-if="item.status == 2">{{item.time}}</view>
							</block>

						</view>
					</scroll-view>
					
				</view>
				<view class="flex_row justify_around work_box">
					<view class="font_size_title_s color_orange font_weight">
						全天工作
					</view>
					<view class="font_size_title_s color_orange font_weight">
						全天休息
					</view>
				</view>
			</view>
		</u-popup>
		<keep-alive>
			<uFoot :type='3'></uFoot>
		</keep-alive>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				timePop: false,
				dateIndex: 0,
				dateList: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
				timeList: [{
					status: 0,
					time:'00.00'
				}, {
					status: 0,
					time:'01.00'
				}, {
					status: 0,
					time:'02.00'
				}, {
					status: 0,
					time:'03.00'
				}, {
					status: 0,
					time:'04.00'
				}, {
					status: 0,
					time:'05.00'
				}, {
					status: 0,
					time:'06.00'
				}, {
					status: 0,
					time:'07.00'
				}, {
					status: 0,
					time:'08.00'
				}, {
					status: 0,
					time:'09.00'
				}, {
					status: 0,
					time:'10.00'
				}, {
					status: 1,
					time:'11.00'
				}, {
					status: 1,
					time:'00.00'
				}, {
					status: 1,
					time:'12.00'
				}, {
					status: 1,
					time:'13.00'
				}, {
					status: 1,
					time:'14.00'
				}, {
					status: 1,
					time:'15.00'
				}, {
					status: 1,
					time:'16.00'
				}, {
					status: 1,
					time:'17.00'
				}, {
					status: 1,
					time:'18.00'
				}, {
					status: 0,
					time:'19.00'
				}, {
					status: 0,
					time:'20.00'
				}, {
					status: 0,
					time:'21.00'
				}, {
					status: 0,
					time:'22.00'
				}, {
					status: 0,
					time:'23.00'
				}],
				selfList: [{
						img: '/static/image/self01.png',
						title: '我的服务',
						url: '/accompanyPages/commentList/commentList',
						con: '4.6分',
						isShow: true
					},
					{
						img: '/static/image/self02.png',
						title: '我的钱包',
						url: '/accompanyPages/wallet/wallet',
						con: '100.00元',
						isShow: true
					},
					{
						img: '/static/image/self03.png',
						title: '常见问题',
						url: '/aUserPages/question/question',
						con: '1000',
						isShow: true
					},
					{
						img: '/static/image/self04.png',
						title: '意见反馈',
						url: '/accompanyPages/feedback/feedback',
						con: '',
						isShow: false
					},
					{
						img: '/static/image/self05.png',
						title: '服务我们',
						url: '',
						con: '',
						isShow: false
					}
				],


			}
		},
		methods: {
			setUserInfo(e) {
				//设置个人信息
				uni.navigateTo({
					url: '/accompanyPages/selfInfo/updateSelfInfo/updateSelfInfo'
				})
			},
			lookItem(item) {
				uni.navigateTo({
					url: item.url
				})
			},
			lookMyMessage(e) { //查看我的消息
				uni.navigateTo({
					url: "/accompanyPages/inform/inform"
				})
			},
			closeTimePop(e){
				this.timePop = false
			},
			toSet(e){//设置
				this.timePop = true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.self_box {
		position: relative;
		height: 700rpx;

		.my_bg {
			width: 100%;
			height: 450rpx;
		}

		.selfInfo_box {
			width: 750rpx;
			position: absolute;
			top: 0;
			box-sizing: border-box;
			padding: 50rpx 30rpx 0 30rpx;

			.avator_img {
				width: 110rpx;
				height: 110rpx;
				border-radius: 50%;
				background-color: bisque;
			}

			.self_tip_box {
				position: relative;

				.self_tip_img {
					width: 32rpx;
					height: 44rpx;
				}

				.self_tip_num {
					width: 20rpx;
					height: 20rpx;
					font-size: 18rpx;
					color: #ffffff;
					border-radius: 50%;
					line-height: 20rpx;
					text-align: center;
					background: #FF3333;
					position: absolute;
					top: 2rpx;
					right: -3rpx;
				}

			}

			.self_label {
				width: 135rpx;
				height: 40rpx;
				background: rgba(255, 255, 255, 0.5);
				box-shadow: 0rpx 4rpx 7rpx 0rpx rgba(255, 109, 92, 0.1);
				border-radius: 18rpx;
				font-size: 22rpx;
				color: #FF6437;
				text-align: center;
				line-height: 40rpx;

			}


		}


	}

	.self_img {
		width: 34rpx;
		height: 34rpx;
	}

	.new_box {
		width: 80rpx;
		height: 40rpx;
		background: #FF4512;
		border-radius: 20rpx;
		text-align: center;
		line-height: 40rpx;
		color: #ffffff;
		font-size: 28rpx;
	}

	.date_box {
		width: 160rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		background: #F5F5F5;
		color: #888888;
		font-size: 30rpx;

		&.active {
			color: #FF6437;
			background: #ffffff;
		}
	}

	.time_box_first {
		width: 160rpx;
		height: 80rpx;
		background: #FF8F00;
		border-radius: 10rpx;
		color: #ffffff;
		font-size: 30rpx;
		box-sizing: border-box;
		margin-bottom: 20rpx;
		line-height: 80rpx;
		text-align: center;
	}

	.time_box_second {
		width: 160rpx;
		height: 80rpx;
		background: #FFD8C6;
		border-radius: 10rpx;
		color: #ffffff;
		font-size: 30rpx;
		box-sizing: border-box;
		margin-bottom: 20rpx;
		line-height: 80rpx;
		text-align: center;
	}

	.time_box_third {
		width: 160rpx;
		height: 80rpx;
		border-radius: 10rpx;
		color: #333333;
		font-size: 30rpx;
		box-sizing: border-box;
		margin-bottom: 20rpx;
		line-height: 80rpx;
		text-align: center;

		border: 1rpx solid #BEBEBE;
	}
	.work_box{
		width: 750rpx;
		height: 90rpx;
		line-height: 90rpx;
		background: #ffffff;
	}
</style>
