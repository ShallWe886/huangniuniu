<template>
	<view class="padding_left_l padding_bottom_xl">
		<view class="flex_row">
			<view class="add_bg"></view>
			<view class="font_size_title_l color_black_333 font_weight margin_left_s">
				个人信息
			</view>
		</view>
		<view class="box_690 padding_left_l padding_right_l">
			<block v-for="(item,index) in inputList">
				<view class="flex_row padding_l_0 border_bottom" >
					<view class="font_size_text_xl color_black_333 font_weight">
						{{item.label}}
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_end margin_right_s" v-model="item.content" :placeholder="item.placeholderText" placeholder-class="font_size_text_l">
					</view>
					
				</view>
				<view class="flex_row padding_l_0 border_bottom" v-if="index == 0">
					<view class="font_size_text_xl color_black_333 font_weight">
						性别
					</view>
					<view class="margin_left flex_row">
						<view class="flex_row font_size_text_l color_black_333">
							<image src="/static/image/select01.png" class="icon_img" v-if="sexValue == '男'"></image>
							<image src="/static/image/select02.png" class="icon_img" v-else></image>
							<view class="margin_left_s">
								男
							</view>
						</view>
						<view class="flex_row font_size_text_l color_black_333 margin_left_m">
							<image src="/static/image/select01.png" class="icon_img" v-if="sexValue == '女'"></image>
							<image src="/static/image/select02.png" class="icon_img" v-else></image>
							<view class="margin_left_s">
								女
							</view>
						</view>
					</view>
					
				</view>
				<view class=" padding_l_0 " v-if="index == 3">
					<view class="font_size_text_xl color_black_333 font_weight">
						个人情况
					</view>
					<textarea v-model="personInfo"  cols="30" rows="8" class="area_box margin_top_m"></textarea>
					
				</view>
			</block>
			<view class="flex_row padding_l_0 " >
				<view class="font_size_text_xl color_black_333 font_weight">
					医院治疗卡
				</view>
				<view class="margin_left font_size_text_xl color_orange">
					关联
				</view>
				
			</view>
			
		</view>
		<view class="sure_buttton margin_top_xl " >
			确定
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputList:[{label:'姓名',placeholderText:'请输入姓名',content:''},
				{label:'年龄',placeholderText:'请输入年龄',content:''},
				{label:'联系方式',placeholderText:'请输入联系方式',content:''},
				{label:'身份证号码',placeholderText:'请输入身份证号码',content:''},
				{label:'紧急联系人',placeholderText:'请输入紧急联系人',content:''},
				
				],
				sexValue:'男',//性别
				personInfo:'',//个人情况
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.add_bg{width: 10rpx;height: 30rpx;border-radius: 4rpx;background: linear-gradient(to bottom, #FF6437, #FF9B51);}
.icon_img {
		width: 32rpx;
		height: 32rpx;
	}
	.area_box{
		border: 1rpx #E6E6E6 solid;
		border-radius: 10rpx;
		height: 190rpx;
	}
	.sure_buttton{
		margin-left: 35rpx;
	}
</style>
