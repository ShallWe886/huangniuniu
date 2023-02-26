<template>
	<view class="padding_l">
		<view class="immm">
			<canvas id="sss" canvas-id="firstCanvas">
			</canvas>
		</view>
		<!-- #ifdef APP-PLUS -->
		<!-- style="width: 330px;height: 489px;" id="mycanvas" canvas-id="firstCanvas" -->
		<!-- <canvas style="width: 330px;height: 489px;" @longpress="savePhoto" id="qrcode" canvas-id="qrcode">
		</canvas> -->
		<!-- <image :src="srcs" mode="aspectFill" class="friend_bg" @longpress="savePhoto"></image> -->
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<!-- #endif -->
		<view class="backcanvas" @longpress="savePhoto">
			<image :src="img" mode="aspectFit" class="friend_bg"></image>
			<view class="canvasimg">
				<!-- #ifdef MP-WEIXIN -->
				<image style="width: 80px;height: 80px;position: absolute;" src="/static/image/xcx.jpg"
					mode="aspectFit"></image>
				<!-- #endif -->
				<!-- #ifdef APP-PLUS -->
				<uqrcode ref="qrcode" canvas-id="qrcode" value="陪诊"
					:options="{ invite_type: invite_type, pic:  userInfo.user_id}" @click="remake"
					@complete="complete($event)" size="70">
				</uqrcode>
				<!-- #endif -->
			</view>
		</view>
		<view class="flex_row margin_top_l">
			<view class="font_size_title_s color_orange font_weight" @click="lookMyfriends">
				我的好友
			</view>
			<view class="margin_left font_size_text_l color_black_888">
				长按海报保存
			</view>
		</view>

		<view class="sure_buttton_letter margin_top_xxl margin_left_l" @click="toShare">
			分享
		</view>
		<!-- <xWxmlToCanvas ref="xWxmlToCanvas" :hide="true" :width="350" :height="500" :xStyle="creatStyle()"
			:xWxml="creatwxml()"></xWxmlToCanvas> -->
		<u-popup :show="sharePop" mode="bottom" :round="30" @close="closePop">
			<view class="padding_l">
				<view class="flex_row">
					<view class="font_weight color_black_333 font_size_text_xl">
						请选择分享方式
					</view>
					<image src="/static/image/health_close.png" mode="aspectFill" class="invite_close margin_left"
						@click="closePop"></image>
				</view>
				<view class="flex_row justify_between margin_bottom_l  margin_top_l" style="padding: 10rpx 50rpx;">
					<!-- #ifdef MP-WEIXIN -->
					<button v-for="(item,index) in shareList" :key="index" class="flex_column" plain="true"
						data-name="shareBtn" open-type="share">
						<image :src="item.img" mode="aspectFill" class="share_img"></image>
						<view class="margin_top_s font_size_text_l color_black_888">
							{{item.title}}
						</view>
					</button>
					<!--  #endif-->
					<!-- #ifdef APP-PLUS -->
					<view class="flex_column" v-for="(item,index) in shareList" :key="index" @click="shareType(item)">
						<image :src="item.img" mode="aspectFill" class="share_img"></image>
						<view class="margin_top_s font_size_text_l color_black_888">
							{{item.title}}
						</view>
					</view>
					<!--  #endif-->
				</view>
			</view>

		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				canvasShow: false,
				srcs: '',
				sharePop: false,
				scene: '',
				invite_type: 1,
				userInfo: {},
				img: this.imageUrl + '/friengBg.png',
				shareList: [{
						img: '/static/image/friend02.png',
						title: '微信',
						type: 2
					},
					// #ifdef APP-PLUS
					{
						img: '/static/image/friend01.png',
						title: '朋友圈',
						type: 1
					},
					{
						img: '/static/image/friend03.png',
						title: 'QQ',
						type: 3
					}, {
						img: '/static/image/friend04.png',
						title: '微博',
						type: 4
					},
					// #endif
				]
			}
		},
		onLoad(options) {
			this.invite_type = options.invite_type
			this.getUserInfo()
		},
		onShow() {},

		// #ifdef MP-WEIXIN
		onShareAppMessage(res) {
			if (res.from === 'button') { // 来自页面内分享按钮
				console.log('分享', this.userInfo, res.target)
			}
			return {
				title: '您的专业就医顾问',
				imageUrl: this.sureImg,
				path: '/pages/index/index?pid=' + this.userInfo.user_id + '&invite_type=' + this.invite_type
			}
		},
		onShareTimeline() {
			return {
				title: '您的专业就医顾问',
				path: '/pages/index/index?pid=' + this.userInfo.user_id + '&invite_type=' + this.invite_type,
				imageUrl: this.sureImg
			};
		},
		// #endif
		methods: {
			// #ifdef MP-WEIXIN
			complete(e) {
				if (e.success) {
					this.$refs['qrcode'].toTempFilePath({
						success: res => {
							console.log('生成二维码', res);
							this.srcs = res.tempFilePath
							this.handleBase64()
						},
						fail: err => {
							console.log('二维码错误tup', err);
						}
					});
				} else {
					console.log('生成失败');
				}
			},
			remake() {
				const ref = this.$refs['qrcode'];
				ref.remake();
			},
			// #endif
			handleBase64() {
				console.log('this.srcs', this.srcs);
				const fsm = uni.getFileSystemManager();
				const FILE_BASE_NAME = 'tmp_base64src'; //自定义文件名
				const [, format, bodyData] = /data:image\/(\w+);base64,(.*)/.exec(this.srcs) || [];
				console.log('bodyData', bodyData);
				console.log('format', format);
				if (!format) {
					console.log('format!!!!', format);
					return (new Error('ERROR_BASE64SRC_PARSE'));
				}
				// const {
				// 	microapp,
				// 	common
				// } = uni.getEnvInfoSync();
				const filePath = `${wx.env.USER_DATA_PATH}/${FILE_BASE_NAME}.${format}`;
				const buffer = uni.base64ToArrayBuffer(bodyData);
				console.log('buffer', buffer);
				let that = this;
				fsm.writeFile({
					filePath,
					data: buffer,
					encoding: 'binary',
					success() {
						console.log('$$$$$$');
						that.createPoster(filePath)
					},
					fail(err) {
						console.log('##', err);
					},
				});
			},
			// 分享码海报生成
			createPoster(filePath) {
				console.log('filepath', filePath);
				let _this = this
				_this.context = uni.createCanvasContext('firstCanvas', _this);
				uni.getImageInfo({
					src: this.img,
					success(res) {
						let image_Width = res.width
						let image_Height = res.height
						_this.context.drawImage(res.path, 0, 0, 294, 500);
						_this.context.drawImage(filePath, 92, 310, 110, 110);
						console.log('查看生成海报', filePath);
						setTimeout(function() { //必须延迟执行
							// _this.context.draw(true); //绘制
							_this.context.draw(true, setTimeout(() => {
								uni.canvasToTempFilePath({ //将canvas生成图片
									x: 0,
									y: 0,
									width: 294,
									height: 500,
									destWidth: 294, //截取canvas的宽度
									destHeight: 500, //截取canvas的高度
									canvasId: 'firstCanvas',
									success: (res) => {
										console.log('res.tempFilePath==========',
											res.tempFilePath)
										_this.sureImg = res.tempFilePath
										uni.hideLoading();
									},
									fail: (err) => {
										console.log('查看生成海报错误', err);
										uni.hideLoading();
									},
								})
							}, 1000))
						}, 500)
					},
					fail(error) {
						console.log('error', error);
					}
				})

			},
			getUserInfo(e) {
				let api = {
					0: '',
					1: 'getMyInfo',
					2: 'escortInfo'
				}
				let api1 = {
					0: '',
					1: 'shareImg',
					2: 'shareImgEscort'
				}

				this.$api[api[this.invite_type]]({}).then(res => {
					this.userInfo = res
				})
				console.log(this.userInfo)
				uni.showLoading({
					mask: true
				})
				this.$api[api1[this.invite_type]]({}).then(res => {
					console.log(res)
					this.img = res && res.share_img ? res.share_img.data : this.imageUrl + '/friengBg.png'
					if(this.img) {
						// #ifdef MP-WEIXIN
						uni.getFileSystemManager().readFile({
							filePath: '/static/image/xcx.jpg', //选择图片返回的相对路径
							encoding: 'base64', //编码格式
							success: res => { //成功的回调
								console.log('本地图片',res);
								this.srcs = 'data:image/jpeg;base64,' + res.data //不加上这串字符，在页面无法显示的哦
								this.handleBase64();
							},
							fail: (e) => {
								console.log("图片转换失败");
							}
						})
						// #endif
					}
					uni.hideLoading()
				})
			},
			savePhoto() {
				// let url = this.imageUrl + '/friengBg.png'
				let url = this.sureImg;
				console.log('savePosterPath', url);
				if (url == 'undefined') {
					return
				}
				//先下载图片
				uni.saveImageToPhotosAlbum({
					filePath: url,
					success: () => {
						uni.showToast({
							title: "保存成功！",
						});
					},
					fail: (err) => {
						console.log('savePhoto', err);
						uni.showToast({
							title: "保存失败",
						});
					},
				});
				//
				// uni.downloadFile({
				// 	url,
				// 	success: (res) => {
				// 		// 获取到图片本地地址后再保存图片到相册（因为此方法不支持远程地址）
				// 		uni.saveImageToPhotosAlbum({
				// 			filePath: res.tempFilePath,
				// 			success: () => {
				// 				uni.showToast({
				// 					title: "保存成功！",
				// 				});
				// 			},
				// 			fail: () => {
				// 				uni.showToast({
				// 					title: "保存失败",
				// 				});
				// 			},
				// 		});
				// 	},
				// 	fail: (err) => {
				// 		console.log('savePhoto', err);
				// 	}
				// });
			},
			savePosterPath() {
				// let url = this.imageUrl + '/friengBg.png'
				const ref = this.$refs['qrcode'];
				ref.save({
					success: res => {
						uni.hideLoading();
						uni.showToast({
							icon: 'success',
							title: '保存成功'
						});
					},
					fail: err => {
						uni.showToast({
							icon: 'none',
							title: JSON.stringify(err)
						});
					}
				});
				return;
				uni.downloadFile({
					url,
					success: (resFile) => {
						if (resFile.statusCode === 200) {
							uni.getSetting({
								success: (res) => {
									if (!res.authSetting["scope.writePhotosAlbum"]) {
										uni.authorize({
											scope: "scope.writePhotosAlbum",
											success: () => {
												uni.saveImageToPhotosAlbum({
													filePath: resFile
														.tempFilePath,
													success: (res) => {
														return uni
															.showToast({
																title: "保存成功！",
															});
													},
													fail: (res) => {
														return uni
															.showToast({
																title: res
																	.errMsg,
															});
													},
													complete: (res) => {},
												});
											},
											fail: () => {
												uni.showModal({
													title: "您已拒绝获取相册权限",
													content: "是否进入权限管理，调整授权？",
													success: (res) => {
														if (res.confirm) {
															uni.openSetting({
																success: (
																	res
																) => {
																	console
																		.log(
																			res
																			.authSetting
																		);
																},
															});
														} else if (res
															.cancel) {
															return uni
																.showToast({
																	title: "已取消！",
																});
														}
													},
												});
											},
										});
									} else {
										uni.saveImageToPhotosAlbum({
											filePath: resFile.tempFilePath,
											success: (res) => {
												return uni.showToast({
													title: "保存成功！",
												});
											},
											fail: (res) => {
												return uni.showToast({
													title: res.errMsg,
												});
											},
											complete: (res) => {},
										});
									}
								},
								fail: (res) => {},
							});
						} else {
							return uni.showToast({
								title: resFile.errMsg,
							});
						}
					},
					fail: (res) => {
						return uni.showToast({
							title: res.errMsg,
						});
					},
				});
			},
			toShare(e) {
				this.sharePop = true
			},
			closePop(e) {
				this.sharePop = false
			},
			lookMyfriends() {
				//查看我的好友
				uni.navigateTo({
					url: "/aUserPages/inviteFriends/myFriend"
				})
			},
			shareType(item) {
				let type = item.type
				switch (type) {
					case 1:
						this.scene = 'WXSceneTimeline';
						// #ifdef MP-WEIXIN
						// #endif
						// #ifdef APP-PLUS
						uni.share({
							provider: "weixin",
							scene: "WXSceneTimeline",
							type: 2,
							imageUrl: this.imageUrl + '/friengBg.png',
							success: function(res) {
								console.log("success:" + JSON.stringify(res));
							},
							fail: function(err) {
								console.log("fail:" + JSON.stringify(err));
							}
						});
						// #endif
						break;
					case 2:
						// #ifdef MP-WEIXIN
						// #endif
						// #ifdef APP-PLUS
						uni.share({
							provider: "weixin",
							scene: "WXSceneSession",
							type: 2,
							imageUrl: this.imageUrl + '/friengBg.png',
							success: function(res) {
								console.log("success:" + JSON.stringify(res));
							},
							fail: function(err) {
								console.log("fail:" + JSON.stringify(err));
							}
						});
						// #endif
						// uni.share({
						//     provider: 'weixin',
						//     scene: "WXSceneSession",
						//     type: 5,
						//     imageUrl: this.imageUrl+'/friengBg.png',
						//     title: '欢迎体验uniapp',
						//     miniProgram: {
						//         id: 'gh_abcdefg',
						//         path: 'pages/index/index',
						//         type: 0,
						//         webUrl: 'http://uniapp.dcloud.io'
						//     },
						//     success: ret => {
						//         console.log(JSON.stringify(ret));
						//     }
						// });
						break;
					case 3:
						break;
					case 4:
						break;
					default:
						console(1111);

				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.backcanvas {
		position: relative;
		height: 878rpx;

		.canvasimg {
			padding-top: 550rpx;
			padding-left: 260rpx;
		}
	}

	#sss {
		//canvas要显示出来才能画，所以把它放到看不到的地方，画二维码同理
		position: absolute;
		width: 294px;
		height: 500px;
		top: -99999999rpx;
		left: -99999999rpx;
		z-index: 1;
		/* background-color: #18B566; */
	}

	.immm {
		position: relative;
		width: 100%;
		// height: 1624rpx;
		z-index: 100;

	}

	.qrcode {
		position: absolute;
		top: -999rpx;
		left: -999rpx;
		z-index: 1;
	}

	button::after {
		border: none;
	}

	button {
		border: none;
	}

	.friend_bg {
		position: absolute;
		top: 0;
		width: 690rpx;
		height: 878rpx;
	}

	.share_img {
		width: 110rpx;
		height: 110rpx;
	}

	.invite_close {
		width: 36rpx;
		height: 36rpx;
	}
</style>
