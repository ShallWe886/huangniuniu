<template>
	<view class=" padding_l_0">
		<view class="flex_row margin_bottom_l">
			<view class="register_box margin_left margin_right_l ">
				注册
			</view>
		</view>
		
		<view class="width_all flex_column ">
			<view class="color_black_333 font_weight" style="font-size: 50rpx;">
				欢迎来到麦咚陪诊
			</view>
			<image src="/static/image/logo.png" mode="aspectFill" class="login_logo " style="margin-top: 94rpx;"></image>
			<block v-if="type == 0">
				<view class="font_weight color_black_333" style="font-size:46rpx;margin-top: 94rpx;">
					134****1234
				</view>
				<view class="flex_row" style="margin-top: 28rpx;">
					<image src="/static/image/safe_img.png" mode="aspectFill" class="safe_logo"></image>
					<view class="font_size_text_l color_black_999 margin_left_s">
						账号安全 放心登录
					</view>
				</view>
			</block>
			<block v-if="type == 1">
				<view class="login_input_box" style="margin-top: 100rpx;">
					<input type="text" v-model="login.mobile" placeholder="请输入您的手机号">
				</view>
				<view class="flex_row login_input_box margin_top_xl">
					<input type="text" v-model="login.code" placeholder="请输入验证码">
					<view class="margin_left color_orange font_size_text_xl" @click="getCode" v-if="!isCode">
						获取验证码
					</view>
					<view class="margin_left color_orange font_size_text_l font_weight"  v-if="isCode">
						重新发送（{{seconds}}秒）
					</view>
				</view>
			</block>
			<view class="login_button_self" style="margin-top: 60rpx;" @click="toLogin">
				登录
			</view>
			<view class="login_button_self" style="margin-top: 20rpx;" @click="register">
				本机号码一键登录
			</view>
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
				<image src="/static/image/wx_img.png" mode="aspectFill" class="login_img"></image>
				<image src="/static/image/zfb_img.png" mode="aspectFill" class="login_img" style="margin-left: 130rpx;"></image>
			</view>
			<view class="font_size_text_m color_black_999 margin_top_xl">
				认证服务由中国移动提供
			</view>
			<view class="flex_row margin_top_xl padding_0_l">
				<label class="font_size_text_m color_black_999">
					<radio value="1" color='#FF6437' style="transform:scale(0.5)" />
					登录代表同意<text class="color_orange">用户协议、隐私政策</text>并授权使用您的账号信息（ 如昵称、头像、地址）以便您统一管理。
				</label>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 1,
				seconds:60,
				isCode:false,
				login:{
					mobile:'',//手机号
					code:'',//验证码
					key:''
					
				}
			}
		},
		methods: {
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				var phoneReg = /^1[3|4|5|7|8][0-9]{9}$/;
				// console.log("验证手机号",phoneReg.test(this.phone))
				if(phoneReg.test(this.login.mobile)){
					uni.showLoading({
						title: '正在获取验证码'
					})
					this.$api.smsSend({mobile:this.login.mobile}).then(res=>{
						console.log("结果",res)
						this.login.key = res.key
						this.isCode = true
						setInterval(()=>{
							if(this.seconds == 0){
								this.isCode = false
								clearInterval()
							}else{
								this.seconds --
							}
							
						},1000)
						
						
					})
				}else{
					uni.showToast({
						title:"请输入正确的手机号码",
						icon:"none"
					})
				}
				
			
			},
			toLogin(e){//登录
				this.$api.smsLogin({mobile:this.login.mobile,verify_id:this.login.key,verify:this.login.code}).then(res=>{
					console.log('登录',res)
					uni.setStorageSync("userInfo",res)
					uni.navigateBack({}) //返回上一页
				})
				
			},
			register(e){
				if(this.type == 1){
					this.type = 0
				}else{
					uni.navigateTo({
						url:'/aUserPages/login/register/register'
					})
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
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
	.login_input_box{
		width: 650rpx;
		height: 100rpx;
		border-radius: 20rpx;
		background: #ffffff;
		box-shadow: 0px 5px 10px 0px rgba(224,133,133,0.1);
		box-sizing: border-box;
		padding: 30rpx;
	}
	.register_box{
		width: 130rpx;
		height: 56rpx;
		line-height: 56rpx;
		background:#FAE6DE;
		border-radius: 26rpx;
		text-align: center;
		font-size: 30rpx;
        color: #FF6437;
	}
</style>
