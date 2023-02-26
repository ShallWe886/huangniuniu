<template>
	<view class=" padding_l_0">
		<view class="flex_row margin_bottom_l">
			<u-switch style="margin-left: 20rpx;" class="margin_left" size="46" v-model="checked" active-color="#FF6437"
				active-value="2" inactive-value="1" @change="changeSwitch"></u-switch>
			<span style="margin-left: 10rpx;" class="font_size_text_xs color_black_333" v-if="checked == 2">您已切换到顾问注册登录</span>
			<view v-if="checked == 2" class="register_box margin_left margin_right_l " @click="register">
				注册
			</view>
		</view>

		<view class="width_all flex_column ">
			<view class="color_black_333 font_weight" style="font-size: 50rpx;">
				欢迎来到麦咚陪诊
			</view>
			<image src="/static/image/logo.png" mode="aspectFill" class="login_logo " style="margin-top: 94rpx;">
			</image>
			<!-- <block v-if="type == 0">
				<view class="font_weight color_black_333" style="font-size:46rpx;margin-top: 94rpx;">
					134****1234
				</view>
				<view class="flex_row" style="margin-top: 28rpx;">
					<image src="/static/image/safe_img.png" mode="aspectFill" class="safe_logo"></image>
					<view class="font_size_text_l color_black_999 margin_left_s">
						账号安全 放心登录
					</view>
				</view>
			</block> -->
			<block>
				<view class="login_input_box" style="margin-top: 100rpx;">
					<input type="number" v-model="login.mobile" placeholder="请输入您的手机号">
				</view>
				<view class="flex_row login_input_box margin_top_xl">
					<input type="number" maxlength="6" v-model="login.code" placeholder="请输入验证码">
					<view class="margin_left color_orange font_size_text_xl" @click="getCode" v-if="!isCode">
						获取验证码
					</view>
					<view class="margin_left color_orange font_size_text_l font_weight" v-if="isCode">
						重新发送（{{seconds}}秒）
					</view>
				</view>
			</block>
			<view class="login_button_self" style="margin-top: 60rpx;" @click="toLogin">
				登录
			</view>
			<!-- <view class="login_button_self" style="margin-top: 20rpx;" @click="register">
				本机号码一键登录
			</view> -->
			<!-- #ifdef MP-WEIXIN -->
			<!-- <button class="login_button_self" style="margin-top: 20rpx;" type='primary' open-type="getPhoneNumber"
				@getphonenumber="getPhoneNumber">本机号码一键登录</button> -->
			<!-- #endif -->
			<!-- #ifdef APP-PLUS -->
			<!-- <button class="login_button_self" style="margin-top: 20rpx;" type='primary'
				@click="getUserInfo">本机号码一键登录</button> -->
			<!-- #endif -->
			<view class="login_button_other" style="margin-top: 50rpx;" v-if="type == 0">
				其他手机登录
			</view>
			<view class="flex_row" style="margin-top: 156rpx;">
				<view class="other_border">
				</view>
				<view class="font_size_text_l color_black_999">
					其他方式登录
				</view>
				<view class="other_border">
				</view>
			</view>
			<view class="flex_row" style="margin-top: 60rpx;">
				<!-- #ifdef MP-WEIXIN -->
				<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
					<image src="/static/image/wx_img.png" mode="aspectFill" class="login_img"></image>
				</button>
				<!-- #endif -->
				<!-- #ifdef APP-PLUS -->
				<image src="/static/image/wx_img.png" mode="aspectFill" class="login_img" @click="getUserInfo"></image>
				<image src="/static/image/zfb_img.png" mode="aspectFill" class="login_img" style="margin-left: 130rpx;"
					@click="aliLogin">
				</image>
				<!-- #endif -->
			</view>
			<view class="font_size_text_m color_black_999 margin_top_xl">
				认证服务由中国移动提供
			</view>
			<view class="flex_row margin_top_xl padding_0_l">
				<label @click="checkedXs" class="font_size_text_m color_black_999">
					<image src="/static/image/select01.png" class="icon_img" v-if="checkedX" style="margin-right: 10rpx;margin-bottom: -6rpx;">
					</image>
					<image src="/static/image/select02.png" class="icon_img" v-if="!checkedX" style="margin-right: 10rpx;margin-bottom: -6rpx;">
					</image>
					<!-- <radio @click="checkedXs" :checked="checkedX.value" value="1" color='#FF6437'
						style="transform:scale(0.5)" /> -->
					登录代表同意<text class="color_orange" @click.stop="openXy(0)">用户协议、</text><text class="color_orange"
						@click.stop="openXy(1)">隐私政策</text>并授权使用您的账号信息（ 如昵称、头像、地址）以便您统一管理。
				</label>
			</view>
		</view>

	</view>
</template>

<script>
	import Load from '@/static/utils/load.js'
	export default {
		data() {
			return {
				unionid: '',
				checkedX: false,
				checked: 1,
				seconds: 60,
				isCode: false,
				type: 1,
				login: {
					mobile: '', //手机号
					code: '', //验证码
					key: ''

				},
				code: '',
				is_first: 0,
				info: {},
				invite_type: 0,
				pid: '',
			}
		},
		watch: {
			checkedX: {
				handler(newName, oldName) {
				}
			}
		},

		onLoad() {
			uni.login({
				provider: 'weixin',
				success: (loginRes) => {
					this.code = loginRes.code // 获得的code
				}
			})
			let invite = uni.getStorageSync('invite')
			if (invite) {
				this.invite_type = invite.invite_type
				this.pid = invite.pid
			}
		},
		onShow() {
			// #ifdef APP-PLUS
			let args = plus.runtime.arguments;
			console.log('plus', plus.runtime);
			console.log('args', args); //这里可以看到从后端拿过来的urlscheme
			//注意：if里面还需要加一个自定义条件，因为修改不了鸿蒙系统的plus.runtime.arguments 会导致每次进入后都会拿到授权码（之前的那个），所以需要自行加一个限定条件（否则可能会导致鸿蒙系统设备上异常登录）
			if (args) {
				plus.runtime.arguments = null; //进入之后就把urlscheme清空要不然下一次oushow时还会执行
				// 处理args参数，如直达到某新页面等
				//通过code请求获取user_id
			}
			// #endif
		},
		methods: {
			aliLogin() {
				//***********************
				//***url授权地址由后端拼接也可以前端写死***
				//***以下是一个拼接示例，仅需修改app_id的值和redirect_uri的值***
				//***app_id是商户的APPID 2021003150611344，redirect_uri是页面跳回地址（授权成功之后会在支付宝中打开这个地址）***
				//***********************
				let urls =
					'https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2021003150611344&scope=auth_userinfo&redirect_uri=https://pzcs.qifudaren.net/zfb.html';
				urls = encodeURIComponent(urls); //将地址编码成浏览器访问的格式
				// 判断平台
				if (plus.os.name == 'Android') {
					plus.runtime.openURL(
						'alipays://platformapi/startapp?appId=20000067&url=' + urls,
						res => {
							//这里写打开URL地址失败后的处理
							uni.showModal({
								content: '本机未检测到对应客户端，是否打开浏览器访问页面？',
								success: function(res) {
									if (res.confirm) {
										//plus.runtime.openURL();
									}
								}
							});
						},
						'com.eg.android.AlipayGphone'
					);
				} else if (plus.os.name == 'iOS') {
					plus.runtime.openURL(
						'alipay://platformapi/startapp?appId=20000067&url=' + urls,
						res => {
							uni.showModal({
								content: '本机未检测到对应客户端，是否打开浏览器访问页面？',
								success: function(res) {
									if (res.confirm) {
										//plus.runtime.openURL(url);
									}
								}
							});
						},
						'com.eg.android.AlipayGphone'
					);
				}
			},
			getParams() {
				return {
					unionid: this.unionid,
					mobile: this.login.mobile,
					vertify: this.login.code,
					openid: this.info.openid,
					nickname: this.info.nickname,
					headimgurl: this.info.headimgurl,
					sex: this.info.sex,
					province: this.info.province,
					city: this.info.city,
					language: this.info.language
				}
			},
			openXy(status) {
				uni.navigateTo({
					url: '/aUserPages/contract/contract?type=' + status
				})
			},
			//勾选用户协议
			checkedXs() {
				this.checkedX = !this.checkedX
				if (this.checkedX) {
				}
			},
			//处理app登录
			hanleAppLogin() {
				let firstLogin = this.checked == 2 ? 'isFirstLoginEscort' : 'isFirstLogin';
				this.$api[firstLogin]({
					unionid: this.unionid
				}).then(res => {
					if (res.is_first == 1) {
						uni.showToast({
							title: '您第一次授权登录，需要绑定手机号',
							icon: 'none',
							duration: 3000
						})
						this.is_first = 1;
						return
					} else {
						let weixinLogin = this.checked == 2 ? 'weixinLoginEscort' : 'weixinLogin';
						this.$api[weixinLogin]({
							unionid: this.unionid
						}).then(res => {
							if (this.checked == 2) {
								// uni.setStorageSync("token", res.token)
								uni.setStorageSync("userInfoEscort", res)
								uni.reLaunch({
									url: '/accompanyPages/acceptOrder/acceptOrder'
								})
							} else {
								// uni.setStorageSync("token", res.token)
								uni.setStorageSync("userInfo", res.data)
								uni.navigateBack({}) //返回上一页
							}
						})
					}
				})
			},
			//请求登录接口方法
			getApploginData(data) {
				let that = this
				//这边是前端自己去调微信用户信息的接口，根据接口需要请求，如果不需要前端去获取的话就交给后端，可省去次操作
				uni.request({
					url: "https://api.weixin.qq.com/sns/userinfo?access_token=" + data.authResult.access_token +
						"&openid=" + data.authResult.openid,
					method: 'GET',
					dataType: 'json',
					header: {
						'content-type': 'application/x-www-form-urlencoded' // 默认值
					},
					success(res) {
						that.info = res.data;
						console.log('@@@that.info@@@',that.info)
						that.hanleAppLogin()

					},
					fail() {

					}

				})

			},
			//微信登录
			getUserInfo() {
				// #ifdef APP-PLUS
				var that = this

				uni.getProvider({

					service: 'oauth',

					success: function(res) {


						//支持微信、qq和微博等

						if (res.provider.indexOf('weixin')) {

							uni.login({

								provider: 'weixin',

								success: function(loginRes) {

									console.log("App微信获取用户信息成功", loginRes);

									that.getApploginData(loginRes) //请求登录接口方法
									that.unionid = loginRes.authResult.unionid

								},

								fail: function(res) {
								}

							})

						}

					}

				});
				// #endif
			},
			getMobileInfo(params) {
				let getMember = this.checked == 2 ? 'getMobileInfoEscort' : 'getMobileInfo';
				this.$api[getMember](params).then(res => {
					if (this.checked == 2) {
						uni.setStorageSync("token", res.token)
						uni.setStorageSync("userInfoEscort", res)
						uni.reLaunch({
							url: '/accompanyPages/acceptOrder/acceptOrder'
						})
					} else {
						uni.setStorageSync("token", res.token)
						uni.setStorageSync("userInfo", res.data)
						uni.navigateBack({}) //返回上一页
					}
					// uni.navigateTo({
					// 	url: '/pages/index/index'
					// })
				})
			},
			getPhoneNumber(e) {
				if (!this.checkedX) {
					uni.showToast({
						title: '请勾选用户隐私协议',
						icon: 'none'
					})
					return
				}
				if ("getPhoneNumber:ok" != e.detail.errMsg) {
					wx.showToast({
						icon: 'none',
						title: '快捷登陆失败'
					})
					return;
				}
				let iv = e.detail.iv;
				let encryptedData = e.detail.encryptedData;
				let _this = this;
				let login = this.checked == 2 ? 'miniLoginEscort' : 'miniLogin';
				this.$api[login]({
					code: this.code
				}).then(res => {
					uni.setStorageSync('keyword_token', res
						.keyword_token);
					uni.setStorageSync("userInfo", res.data)
					_this.getMobileInfo({
						keyword_token: res
							.keyword_token,
						code: this.code,
						encryptedData: encryptedData,
						iv: iv,
						invite_type: this.invite_type,
						pid: this.pid
					})
				})
			},
			changeSwitch(status) {
				this.isCode = false;
			},
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				var phoneReg = /^1[3|4|5|7|8|9][0-9]{9}$/;
				// console.log("验证手机号",phoneReg.test(this.phone))
				if (phoneReg.test(this.login.mobile)) {
					uni.showLoading({
						title: '正在获取验证码'
					})
					let send = '';
					if (this.is_first == 1) {
						send = this.checked == 2 ? 'getWechatVertifyEscort' : 'getWechatVertify';
					} else {
						send = this.checked == 2 ? 'smsSendEscort' : 'smsSend';
					}
					this.$api[send]({
						mobile: this.login.mobile
					}).then(res => {
						if (res.status) {
							uni.showToast({
								title: res.msg + ',请稍后重新发送'
							})
							return;
						}
						this.login.key = res.key
						this.isCode = true
						setInterval(() => {
							if (this.seconds == 0) {
								this.isCode = false
								clearInterval()
							} else {
								this.seconds--
							}

						}, 1000)


					}).catch(error => {
						uni.showToast({
							title: error.msg,
							icon: 'error'
						})
					})

				} else {
					uni.showToast({
						title: "请输入正确的手机号码",
						icon: "none"
					})
				}


			},
			toLogin(e) { //登录
				if (!this.checkedX) {
					uni.showToast({
						title: '请勾选用户隐私协议',
						icon: 'none'
					})
					return
				}
				let login = '';
				let params = {}
				if (this.is_first == 1) {
					let checkLogin = this.checked == 2 ? 'checkWechatVertifyEscort' : 'checkWechatVertify'
					this.$api[checkLogin]({
						vertify: this.login.code,
						invite_type: this.invite_type,
						pid: this.pid
					}).then(res => {
						login = this.checked == 2 ? 'updateWechatByMobileEscort' : 'updateWechatByMobile';
						params = this.getParams()
						this.getLogin(login, params)
					}).catch(error => {
						uni.showToast({
							title: error.msg,
							icon: 'none',
							duration: 3000
						})
						return;
					})
				} else {
					login = this.checked == 2 ? 'smsLoginEscort' : 'smsLogin';
					params = {
						mobile: this.login.mobile,
						verify_id: this.login.key,
						verify: this.login.code,
						invite_type: this.invite_type,
						pid: this.pid
					}
					this.getLogin(login, params)
				}

			},
			getLogin(name, params) {
				this.$api[name](params).then(res => {
					if (res.status && res.status == 201) {
						uni.showToast({
							title: error.msg,
							icon: 'error'
						})
						return;
					}
					if (this.checked == 2) {
						uni.setStorageSync("userInfoEscort", res)
						uni.reLaunch({
							url: '/accompanyPages/acceptOrder/acceptOrder'
						})
					} else {
						uni.setStorageSync("userInfo", res)
						uni.navigateBack({}) //返回上一页
					}
				}).catch(error => {
					uni.showToast({
						title: error.msg,
						icon: 'error'
					})
				})
			},
			register(e) {
				if (this.checked == 1) {
					this.type = 0
				} else {
					uni.navigateTo({
						url: '/aUserPages/login/register/register'
					})
				}

			}
		}
	}
</script>

<style lang="scss" scoped>
	.icon_img {
		width: 32rpx;
		height: 32rpx;
	}
	button::after {
		border: none;
	}

	button {
		background-color: #fafafa;
		border-radius: 0;
		height: 90rpx;
	}

	.margin_bottom_l:first-child {
		margin-left: 20rpx;
	}

	.u-switch {
		margin-left: 20rpx;
	}

	.login_logo {
		width: 206rpx;
		height: 132rpx;
	}

	.safe_logo {
		width: 28rpx;
		height: 32rpx;
	}

	.login_img {
		width: 90rpx;
		height: 90rpx;
	}

	.login_button_self {
		width: 610rpx;
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
		border-radius: 40rpx;
		background: linear-gradient(to right, #FF6437, #FF9B51);
		font-size: 32rpx;
		color: #ffffff;
	}

	.login_button_other {
		width: 610rpx;
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
		border-radius: 40rpx;
		background: #FAEAE0;
		font-size: 32rpx;
		color: #FF6437;
	}

	.other_border {
		width: 180rpx;
		height: 1rpx;
		background: #D7D7D7;
	}

	.login_input_box {
		width: 650rpx;
		height: 100rpx;
		border-radius: 20rpx;
		background: #ffffff;
		box-shadow: 0px 5px 10px 0px rgba(224, 133, 133, 0.1);
		box-sizing: border-box;
		padding: 30rpx;
	}

	.register_box {
		width: 130rpx;
		height: 56rpx;
		line-height: 56rpx;
		background: #FAE6DE;
		border-radius: 26rpx;
		text-align: center;
		font-size: 30rpx;
		color: #FF6437;
	}
</style>
