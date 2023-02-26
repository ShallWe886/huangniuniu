<template>
	<view>
		<view class="self_box">
			<image :src="imageUrl+'/my_bg.png'" mode="aspectFill" class="my_bg"></image>
			<view class="selfInfo_box">
				<view class="flex_row">
					<image v-if="userinfo.headimgurl" :src="userinfo.headimgurl" mode="aspectFill" class="avator_img flex_shrink"></image>
					<image v-else src="/static/image/avator2.png" mode="aspectFill" class="avator_img flex_shrink"></image>
					<view class="margin_left_m width_all" @click="setUserInfo">
						<view class="flex_row">
							<view class="font_weight color_black_333 font_size_title_l">
								{{userinfo && userinfo.attendant_name ? userinfo.attendant_name.slice(0,1) : ''}}<text v-if="userinfo.attendant_name">顾问</text>
							</view>
							<view class="margin_left self_tip_box " @click.stop="lookMyMessage">
								<!-- <image src="/static/image/selfImg.png" mode="aspectFill" class="self_tip_img"></image>
								<view v-if="msgNum > 0" class="self_tip_num">
									{{msgNum}}
								</view> -->
							</view>
						</view>

						<view class="flex_row margin_top_l">
							<view class="self_label">
								年龄：{{userinfo.age}}
							</view>
							<view class="self_label margin_left_m">
								性别：{{userinfo.sex == 1 ? '女' : '男'}}
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
								<text v-if="item.title == '我的钱包'">{{userinfo.balance || ''}}</text>
								<text v-if="item.title == '我的服务'">{{userinfo.score || ''}}</text>
								<text v-if="item.title !== '我的服务' && item.title !== '我的钱包'">{{item.con}}</text>
							</view>
							<u-icon name="arrow-right" size="30" color="#999999"></u-icon>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="box_690 padding_0_l margin_left_l" style="margin-top: 200rpx;">
			<view class="flex_row  padding_l_0" @click="lookMyMessage" v-for="(item,index) in [{a:1}]" :key="index">
				<image src="/static/image/self06.png" mode="aspectFill" class="self_img"></image>
				<view class="color_black_333 font_size_text_l margin_left_m">
					我的消息
				</view>
				<view class="margin_left flex_row font_size_text_l color_black_999">
					<view class="new_box" v-if="newShow">
						new
					</view>
					<u-icon name="arrow-right" size="30" color="#999999"></u-icon>
				</view>
			</view>
			<view class="flex_row  padding_l_0" @click="toSet" v-for="(item,index) in [{a:1}]" :key="index">
				<image src="/static/image/self07.png" mode="aspectFill" class="self_img"></image>
				<view class="color_black_333 font_size_text_l margin_left_m">
					工作时间设置
				</view>
				<view class="margin_left flex_row font_size_text_l color_black_999">
					<u-icon name="arrow-right" size="30" color="#999999"></u-icon>
				</view>
			</view>
		</view>
		<u-popup :show="timePop" :round="30" mode="bottom" @close="closeTimePop">
			<view>
				<view class="flex_row justify_between padding_l">
					<view @click="closeTimePop">
						<u-icon name="arrow-left" size="50" color="#333333"> </u-icon>
					</view>
					<view class="font_size_title_xxl color_black_333 font_weight">
						选择时间
					</view>
					<view class="font_size_title_xl color_orange font_weight" @click="savePlanDate">
						保存
					</view>
				</view>
				<view class="flex_row time_all_box">
					<scroll-view scroll-y="true" style="width: 230rpx;height: 60vh;">
						<block v-for="(item,index) in dateList" :key="index">
							<view class="date_box" @click="selectDate(item, index)"
								:class="{'active':dateIndex == index}">
								{{item.date}}
							</view>
						</block>
					</scroll-view>
					<scroll-view scroll-y="true" style="width: 550rpx;height:60vh;">
						<view class="flex_row margin_top_xl" style="margin-left: 70rpx;">
							<view class="flex_row">
								<view
									style="width: 24rpx;height: 24rpx;border-radius: 2rpx;border: 1rpx solid #BEBEBE;box-sizing: border-box;">
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
						<view class="flex_row flex_wrap  margin_top_xl time_item" style="padding: 0 35rpx;">
							<block v-for="(item,index) in timeList" :key="index">
								<view @click="seletTime(item, index)" class="time_box_third" v-if="item.status == 0">
									{{item.time}}</view>
								<view @click="seletTime(item, index)" class="time_box_second" v-if="item.status == 1">
									{{item.time}}</view>
								<view @click="seletTime(item, index)" class="time_box_first" v-if="item.status == 2">
									{{item.time}}</view>
							</block>
						</view>
					</scroll-view>
				</view>
				<view class="flex_row justify_around work_box">
					<view class="font_size_title_s color_orange font_weight" @click="selectAll(2)">
						全天工作
					</view>
					<view class="font_size_title_s color_orange font_weight" @click="selectAll(0)">
						全天休息
					</view>
				</view>
			</view>
		</u-popup>
		<!-- #ifdef MP-WEIXIN -->
		<uFoot :type='3'></uFoot>
		<!-- #endif -->
		<!-- #ifdef APP-PLUS -->
		<view class="flex_row justify_around ufoot_box bg_white">
			<view class="flex_column"  @click="toTabbar(1)">
				<block v-if="type == 1">
					<image src="/static/image/selfInfo00.png" mode="aspectFill" class="foot_img"></image>
					<view class="font_size_text_s color_orange margin_top_s">
						接单
					</view>
				</block>
				<block v-else>
					<image src="/static/image/selfInfo01.png" mode="aspectFill" class="foot_img"></image>
					<view class="font_size_text_s color_black_888 margin_top_s">
						接单
					</view>
				</block>
			</view>
			<view class="flex_column"  @click="toTabbar(2)">
				<block v-if="type == 2">
					<image src="/static/image/tabbar04.png" mode="aspectFill" class="foot_img"></image>
					<view class="font_size_text_s color_orange margin_top_s">
						订单列表
					</view>
				</block>
				<block v-else>
					<image src="/static/image/tabbar03.png" mode="aspectFill" class="foot_img"></image>
					<view class="font_size_text_s color_black_888 margin_top_s">
						订单列表
					</view>
				</block>
			</view>
			<view class="flex_column"  @click="toTabbar(3)">
				<block v-if="type == 3">
					<image src="/static/image/tabbar08.png" mode="aspectFill" class="foot_img"></image>
					<view class="font_size_text_s color_orange margin_top_s">
						我的
					</view>
				</block>
				<block v-else>
					<image src="/static/image/tabbar07.png" mode="aspectFill" class="foot_img"></image>
					<view class="font_size_text_s color_black_888 margin_top_s">
						我的
					</view>
				</block>
			</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newShow: true,
				msgNum: 0,
				types: [{
					name: '休息',
					status: 0
				}, {
					name: '工作',
					status: 2
				}],
				planList: [],
				type: 1,
				plan_date: '',
				work_hour: [], //工作时间
				free_hour: [], //休息时间
				userinfo: {},
				timePop: false,
				dateIndex: 0,
				dateList: [],
				timeList: [],
				selfList: [
					// {
					// 	img: '/static/image/self01.png',
					// 	title: '我的服务',
					// 	url: '/accompanyPages/commentList/commentList',
					// 	con: '4.6分',
					// 	isShow: true
					// },
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
						con: '',
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
						img: '/static/image/self04.png',
						title: '分享',
						url: '/aUserPages/inviteFriends/inviteFriends?invite_type=2',
						con: '',
						isShow: true
					},
					// {
					// 	img: '/static/image/self05.png',
					// 	title: '服务我们',
					// 	url: '',
					// 	con: '',
					// 	isShow: false
					// }
				],
				typeIndex: 1

			}
		},
		onLoad() {
			console.log('app1', getApp().globalData.upDate.newShow);
			let userinfo = uni.getStorageSync('userInfoEscort');
			if (!userinfo) {
				uni.navigateTo({
					url:'/aUserPages/login/login'
				})
				return;
			}
			uni.showLoading({title: '加载中',mask:true});
			this.getInfo();
			this.getDate()
			this.getTimes()
			console.log('####', this.userinfo);
		},
		onShow() {
			this.newShow = getApp().globalData.upDate.newShow
		},
		methods: {
			toTabbar(status){
				if(status == 1){
					uni.reLaunch({
						url:'/accompanyPages/acceptOrder/acceptOrder'
					})
				}else if(status == 2){
					uni.reLaunch({
						url:'/accompanyPages/orderList/orderList'
					})
				}else if(status == 3){//急速预约
					uni.reLaunch({
						url:'/accompanyPages/selfInfo/selfInfo'
					})
					
				}
			},
			selectAll(status) {
				this.type == 0;
				if (status == 2) {
					this.type == 2;
				}
				this.timeList.map(res => {
					res.status = status
				})
			},
			selectType(type) {
				uni.showLoading({
				    mask:true  //是否显示透明蒙层，防止触摸穿透，默认：false
				  }); 
				  this.type = type.detail.value
				  console.log('...', type, this.type);
				uni.hideLoading()
				console.log('type', type, this.type);
			},
			seletTime(item, index) {
				if (item.status == 0) {
					this.timeList[index].status = 2
					// if (this.type == 1) {
					// 	this.timeList[index].status = 1
					// } else {
					// 	this.timeList[index].status = 2
					// }

				} else {
					this.timeList[index].status = 0;
				}
			},
			getTimes() {
				let list = [];
				for (let i = 0; i < 24; i++) {
					let n = i;
					if (n.toString().length < 2) {
						n = '0' + n;
					}
					list.push({
						status: 0,
						time: n + ':00'
					})
				}
				this.timeList = list;
				console.log(list);
			},
			getDate() {
				//获取当前年月日
				let now = new Date();
				let year = now.getFullYear(); //得到年份
				let month = now.getMonth() + 1; //得到月份
				let date = now.getDate(); //得到日期		
				this.plan_date = year + "-" + month + "-" + date
				let check = [];
				for (let i = 0; i < 7; i++) {
					//24 * 3600 * 1000 就是计算一天的时间  
					let date = new Date(now.getTime() + i * 24 * 3600 * 1000);
					let year = date.getFullYear();
					let month = date.getMonth() + 1;
					let day = date.getDate();
					let dt2 = new Date(now.getTime() + i * 24 * 3600 * 1000);
					let weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
					let weekDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
					if(day.toString().length == 1) {
						day = '0'+day
						
					}
					// console.log(duty);
					//把七天的时间和星期添加到数组中

					check.push({
						date: year + "-" + month + "-" + day,
					});

				}
				console.log(check);
				this.dateList = check;
			},
			//设置排班
			savePlanDate() {
				let list = this.timeList;
				for (let i in list) {
					if (list[i].status == 0) {
						this.free_hour.push(list[i].time.substring(0, 2))
					}

					if (list[i].status == 2) {
						this.work_hour.push(list[i].time.substring(0, 2))
					}
				}
				if(this.work_hour.length == 0 && this.free_hour.length == 0) {
					uni.showToast({
						title:"请选择休息时间或者工作时间",
						icon: 'none',
						duration:1000
					})
					return;
				}
				this.work_hour = Array.from(new Set(this.work_hour))
				this.free_hour = Array.from(new Set(this.free_hour))
				console.log(222, this.work_hour);
				console.log(11111, this.free_hour);
				this.$api.escortSetPlan({
					plan_date: this.plan_date,
					work_hour: this.work_hour.toString(),
					free_hour: this.free_hour.toString()
				}).then(res => {
					this.closeTimePop()
				})
			},
			selectDate(item, index) {
				this.dateIndex = index;
				this.plan_date = item.date
				this.getPlan();
				// this.getPlanTime()
			},
			getInfo() {
				this.$api.escortInfo({}).then(res => {
					console.log('res', res);
					this.userinfo = res;
					uni.hideLoading()
				})
			},
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
			closeTimePop(e) {
				this.timePop = false
			},
			getPlan() {
				this.$api.escortGetPlan({
					plan_date: this.plan_date
				}).then(res => {
					console.log('getPlan', res);
					this.planList = res;
					this.getPlanTime();
				})
			},
			getPlanTime() {
				let free_hour = [];
				let work_hour = [];
				for (let h in this.planList) {
					if (this.planList[h].plan_date == this.plan_date) {
						free_hour = this.planList[h].free_hour.split(',');
						work_hour = this.planList[h].work_hour.split(',');
						// break;
					}
				}
				for (let n in this.timeList) {
					this.timeList[n].status = 0;
					// if (free_hour.includes(this.timeList[n].time.substring(0, 2))) {
					// 	this.timeList[n].status = 0
					// }
					if (work_hour.includes(this.timeList[n].time.substring(0, 2))) {
						this.timeList[n].status = 2
					}
				}
				console.log('@@@@@@@@@@@@@@@@');
			},
			toSet(e) { //设置
				console.log('@@@@@@@点击工作时间设置@@@@@@@@@')
				this.timePop = true
				this.getPlan();
			}
		}
	}
</script>

<style lang="scss" scoped>
	image {
		will-change: transform;
		width: auto;
		height: auto;
	}
	.ufoot_box{
			height: 168rpx;position: fixed;bottom: 0;left: 0;width: 100%;z-index: 9999;
		}
	.foot_img{
		width: 37rpx;
		height: 39rpx;
	}
	.self_box {
		position: relative;
		// height: 700rpx;

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
		width: 200rpx;
		height: 92rpx;
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
		width: 140rpx;
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
		width: 140rpx;
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
		width: 140rpx;
		height: 80rpx;
		border-radius: 10rpx;
		color: #333333;
		font-size: 30rpx;
		margin-bottom: 20rpx;
		line-height: 80rpx;
		text-align: center;
		border: 1rpx solid #BEBEBE;
		box-sizing: border-box;
	}

	.work_box {
		width: 750rpx;
		height: 90rpx;
		line-height: 90rpx;
		background: #ffffff;
	}

	.time_item {
		view {
			margin-right: 20rpx;

			&:nth-child(3n) {
				margin-right: 0;
			}
		}

	}
</style>
