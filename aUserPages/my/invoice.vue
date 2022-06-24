<template>
	<view class="flex_column padding_bottom_l">
		<view class="box_690 padding_0_l">
			<view class="flex_row border_bottom padding_l_0">
				<image src="/static/image/hospitalImg.png" mode="aspectFill" class="invoice_img"></image>
				<view class="margin_left_l">
					<view class="font_size_text_xl color_black_333 ">
						华夏第一军区医院
					</view>
					<view class="font_size_text_m color_black_888 invoice_label margin_top_m">
						专业陪诊
					</view>
					<view class="font_size_text_l color_black_888 margin_top_m">
						开票金额：<text class="font_size_title_s color_orange">¥599.00</text>
					</view>
				</view>
			</view>
			<view class="flex_row border_bottom padding_l_0">
				<view class="font_size_text_xl color_black_333 font_weight">
					发票类型 <text class="color_orange"> *</text>
				</view>
				<view class="flex_row margin_left">
					<view class="font_size_text_l color_black_333">
						<radio value="1" :checked="invoiceInfo.invoiceType == 0" color='#FF6437' style="transform:scale(0.5)" />普通发票
					</view>
					<view class="font_size_text_l color_black_333">
						<radio value="2" :checked="invoiceInfo.invoiceType == 1" color='#FF6437' style="transform:scale(0.5)" />增值税电子发票
					</view>
				</view>
			</view>
			<view class="flex_row border_bottom padding_l_0">
				<view class="font_size_text_xl color_black_333 font_weight">
					抬头类型 <text class="color_orange"> *</text>
				</view>
				<view class="flex_row margin_left">
					<view class="font_size_text_l color_black_333">
						<radio value="1" :checked="invoiceInfo.topType == 0" color='#FF6437' style="transform:scale(0.5)" />个人或事业单位
					</view>
					<view class="font_size_text_l color_black_333">
						<radio value="2" :checked="invoiceInfo.topType == 1" color='#FF6437' style="transform:scale(0.5)" />企业
					</view>
				</view>
			</view>
			<view class="flex_row border_bottom padding_l_0" v-if="invoiceInfo.topType == 1">
				<view class="font_size_text_xl color_black_333 font_weight">
					发票抬头 <text class="color_orange"> *</text>
				</view>
				<view class="flex_row margin_left font_size_text_l color_black_888">
					调用微信发票抬头
					<u-icon name="arrow-right" size="30"></u-icon>
				</view>
			</view>
			<view class="flex_row border_bottom padding_l_0" v-for="(item,index) in invoiceList" :key="index" v-if="invoiceInfo.topType == 1">
				<view class="font_size_text_xl color_black_333 font_weight">
					{{item.title}}<text class="color_orange" v-if="index == 0"> *</text>
				</view>
				<view class="margin_left color_black_333 font_size_text_l">
					<input type="text" style="text-align: end;" :placeholder="item.tip" v-model="item.value">
				</view>
			</view>
			<view class="flex_row  padding_l_0" >
				<view class="font_size_text_xl color_black_333 font_weight">
					邮箱
				</view>
				<view class="margin_left color_black_333 font_size_text_l">
					<input type="text" style="text-align: end;" placeholder="请填写邮箱" v-model="invoiceInfo.email">
				</view>
			</view>
		</view>
		<view class="sure_buttton margin_top_xxl">
			提交
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				invoiceList:[{title:'税 号',tip:'请填写税号',value:''},
				{title:'开户银行',tip:'请填写开户银行',value:''},
				{title:'银行账号',tip:'请填写银行账号',value:''},
				{title:'企业地址',tip:'请填写企业地址',value:''},
				{title:'企业电话',tip:'请填写企业电话',value:''}],
				invoiceInfo:{
					invoiceType:0,
					topType:1,
					toptitle:'',
					email:''
					
				}
				
				
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.invoice_img {
		width: 180rpx;
		height: 160rpx;
	}

	.invoice_label {
		line-height: 26rpx;
		width: 165rpx;
		height: 40rpx;
		text-align: center;
		line-height: 40rpx;
		border-radius: 20rpx;
		background-color: #F5F5F5;
	}
</style>
