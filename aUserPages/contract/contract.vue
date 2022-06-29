<template>
	<view class="padding_l">
		<view class="text_align_center font_weight color_black_333 font_size_title_l">
			用户服务协议
		</view>
		<view class="font_size_title_s font_weight color_black_333 margin_top_m">
			一、总则
		</view>
		<view class="font_size_text_m color_black_666 margin_top_s">
			1.1 用户应当同意本协议的条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中勾选"我已阅读并接受"模块即表示用户与产品名称达成协议，完全接受本协议项下的全部条款。
		</view>
		<view class="font_size_text_m color_black_666 margin_top_s">
			1.2 用户注册成功后，产品名称将给予每个用户一个用户帐号及相应的密码，该用户帐号和密码由用户负责保管；用户应当对以其用户帐号进行的所有活动和事件负法律责任。
		</view>
		<view class="font_size_text_m color_black_666 margin_top_s">
		1.3 用户可以使用产品名称各个频道单项服务，当用户使用产品名称各单项服务时，用户的使用行为视为其对该单项服务的服务条款以及产品名称在该单项服务中发出的各类公告的同意。
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 0 // 0：用户服务协议 1：隐私条款
			}
		},
		onLoad(options) {
			this.type = options.type
			uni.setNavigationBarTitle({
				title: this.type == 0 ? '用户服务协议' : ' 隐私条款'
			})
		},
		methods: {

		}
	}
</script>

<style>

</style>
