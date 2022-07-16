<template>
	<view class="padding_left_l padding_bottom_xl">
		<view class="flex_row">
			<view class="add_bg"></view>
			<view class="font_size_title_l color_black_333 font_weight margin_left_s">
				患者信息
			</view>
		</view>
		<view class="box_690 padding_left_l padding_right_l">
			<block v-for="(value,key) in inputinfo" :key="key">
				<view class="flex_row padding_l_0 border_bottom">
					<view class="font_size_text_xl color_black_333 font_weight">
						{{value.label}}
					</view>
					<view class="margin_left flex_row">
						<input type="text" class="text_align_right margin_right_s width_all" v-model="value.content"
							:placeholder="value.placeholderText" placeholder-class="font_size_text_l">
					</view>

				</view>
				<view class="flex_row padding_l_0 border_bottom" v-if="key == 'name'">
					<view class="font_size_text_xl color_black_333 font_weight">
						性别
					</view>
					<view class="margin_left flex_row">
						<view class="flex_row font_size_text_l color_black_333 margin_right_l">
							<image src="/static/image/select01.png" class="icon_img" v-if="sexValue == '男'"></image>
							<image src="/static/image/select02.png" class="icon_img" v-else></image>
							<view class="margin_left_s">
								男
							</view>
						</view>
						<view class="flex_row font_size_text_l color_black_333 margin_left_xl">
							<image src="/static/image/select01.png" class="icon_img" v-if="sexValue == '女'"></image>
							<image src="/static/image/select02.png" class="icon_img" v-else></image>
							<view class="margin_left_s">
								女
							</view>
						</view>
					</view>
				</view>
				<view class="flex_row padding_l_0 border_bottom" v-if="key == 'phone'">
					<view class="font_size_text_xl color_black_333 font_weight">
						与就诊人关系
					</view>
					<view class="margin_left flex_row font_size_text_l " style="color: #BEBEBE;">
						本人
						<u-icon name="arrow-right" color="#BEBEBE" size="30"></u-icon>
					</view>
				
				</view>
				<block v-if="key == 'idCard'">
					<view class=" padding_l_0 " >
						<view class="font_size_text_xl color_black_333 font_weight">
							个人情况
						</view>
						<textarea v-model="personInfo" cols="30" rows="8" class="area_box margin_top_m"></textarea>
					
					</view>
					<view class=" padding_l_0 border_bottom">
						<view class="flex_row">
							<view class="font_size_text_xl color_black_333 font_weight">
								图片
							</view>
							<view class="color_black_888 font_size_text_xs margin_left">
								<text class="color_red">*</text>病例，体检报告，检查报告之类
							</view>
						</view>
						<view class="justify_center flex_row ">
							<view class="flex_column justify_center update_img_box">
								<image src="/static/image/update_img.png" mode="aspectFill" class="update_img"></image>
								<view class="font_size_text_m color_black_888 margin_top_s">
									上传照片
								</view>
							</view>
						</view>
					</view>
				</block>
				
			</block>
			<view class="flex_row padding_l_0 ">
				<view class="font_size_text_xl color_black_333 font_weight">
					医院诊疗卡号
				</view>
				<view class="margin_left font_size_text_xl color_orange" @click="toRelation">
					关联
				</view>

			</view>

		</view>
		<view class="sure_buttton_letter margin_top_xl ">
			确定
		</view>
		<u-popup :show="relationPopShow" :closeable="true" mode="center" :round="20" @close="closeRelationPop">
			<view class="flex_column padding_l">
				<view class="font_size_title_l color_black_333 font_weight border_bottom padding_bottom_l"
					style="width: 600rpx;text-align: center;">
					治疗卡
				</view>
				<scroll-view scroll-y="true" style="height: 510rpx;">
					<view class="flex_row relatin_item_box border_bottom padding_m_0" v-for="(item,index) in cardList"
						:key="index">
						<view class="flex_row">
							<radio value="1" color='#FF6437' style="transform:scale(0.7)" />
							<view class="">
								<view class="font_size_text_xl color_black_333 font_weight text_overflow_1">
									华夏军区第一医院
								</view>
								<view class="text_overflow_1 font_size_text_l color_black_666 margin_top_s">
									卡号：1234****789
								</view>
							</view>
						</view>
						<view class="flex_row margin_left">
							<view class="relationMan_box" @click="updateCard(0)">
								编辑
							</view>
							<view class="relationMan_box margin_left_m" @click="updateCard(1)">
								删除
							</view>
						</view>
					</view>
				</scroll-view>

				<view class=" relation_add_box flex_row margin_top_xl  font_size_title_s color_black_666 justify_center" @click="addCard">
					<u-icon name="plus" size="30" color="#666666"></u-icon>
					新增
				</view>
			</view>
		</u-popup>
		<u-popup :show="addCardShow" :closeable="true" mode="center" :round="20" @close="closeAddPop">
			<view class=" padding_l">
				<view class="font_size_title_l color_black_333 font_weight  padding_bottom_l"
					style="width: 600rpx;text-align: center;">
					新增
				</view>
				<view class="flex_row relatin_item_box border_bottom padding_m_0 border_top ">
					<view class="font_size_text_xl color_black_333 font_weight">
						医院
					</view>
					<input type="text" style="text-align: end;margin-left: auto;" placeholder="请输入医院名称"
						placeholder-style="font-size:28rpx;color:#BEBEBE;" v-model="cardInfo.name">
				</view>
				<view class="flex_row relatin_item_box border_bottom padding_m_0 ">
					<view class="font_size_text_xl color_black_333 font_weight">
						就诊卡号
					</view>
					<input type="text" style="text-align: end;margin-left: auto;" placeholder="请输入就诊卡号"
						placeholder-style="font-size:28rpx;color:#BEBEBE;" v-model="cardInfo.num">
				</view>
				<view class="flex_row font_size_text_l color_black_666 margin_top_xl">
					<radio value="1" color='#FF6437' :checked="cardInfo.default == 1" style="transform:scale(0.7)" />
					默认
				</view>
				<view class=" addCard_box font_size_title_s color_white margin_top_l" @click="sureAdd" style="letter-spacing:10rpx;">
					提交
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputinfo:{
					name:{
						label:'姓名',
						placeholderText: '请输入姓名',
						content: ''
					},
					idCard:{
						label: '身份证号码',
						placeholderText: '请输入身份证号码',
						content: ''
					},
					age:{
						label: '年龄',
						placeholderText: '请输入年龄',
						content: ''
					},
					phone:{
						label: '联系方式',
						placeholderText: '请输入联系方式',
						content: ''
					},
					emerge:{
						label: '紧急联系人',
						placeholderText: '请输入紧急联系人',
						content: ''
					},
					emergePhone:{
						label: '联系电话',
						placeholderText: '请输入紧急联系人电话号码',
						content: ''
					}
				},
				sexValue: '男', //性别
				personInfo: '', //个人情况
				relationPopShow: false,
				cardList: [{}, {}, {}, {}], //医疗卡
				addCardShow: false, //新增pop
				cardInfo: { //新增卡信息
					name: '', //医院名称
					num: '', //卡号
					default: 0 //默认
				}
			}
		},
		methods: {
			toRelation(){//关联
				this.relationPopShow = true
			},
			closeRelationPop(){
				//关闭关联弹窗
				this.relationPopShow = false
			},
			updateCard(type){//更改卡片信息
				if(type == 0){//修改卡片信息
					
				}else if(type == 1){//删除卡片
					
				}
				
			},
			addCard(e){ //新增卡片
				this.relationPopShow = false
				this.addCardShow = true
			},
			sureAdd(e){ //提交添加
				this.addCardShow = false
			},
			closeAddPop(e){//关闭添加卡片
				this.addCardShow = false
				
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.add_bg {
		width: 10rpx;
		height: 30rpx;
		border-radius: 4rpx;
		background: linear-gradient(to bottom, #FF6437, #FF9B51);
	}

	.icon_img {
		width: 32rpx;
		height: 32rpx;
	}

	.area_box {
		border: 1rpx #E6E6E6 solid;
		border-radius: 10rpx;
		height: 190rpx;
	}

	.sure_buttton {
		margin-left: 35rpx;
	}

	.relatin_item_box {
		width: 600rpx;

		.relationMan_box {
			width: 100rpx;
			height: 50rpx;
			text-align: center;
			line-height: 50rpx;
			border-radius: 10rpx;
			font-size: 28rpx;

			&:nth-child(1) {
				color: #638CFF;
				border: 2rpx #638CFF solid;
			}

			&:nth-child(2) {
				color: #FF3900;
				border: 2rpx #FF3900 solid;
			}
		}

	}

	.relation_add_box {
		width: 500rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border-radius: 16rpx;
		border: 2rpx #D2D2D2 solid;
	}

	.addCard_box {
		width: 500rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border-radius: 70rpx;
		background: linear-gradient(to right, #FF6437, #FF9B51);
		margin-left: 45rpx;
	}
	
	.update_img_box {
		width: 322rpx;
		height: 192rpx;
		border-radius: 16rpx;
		border: 2rpx dashed #FFB644;
		margin-top: 20rpx;
	}
	
	.update_img {
		width: 90rpx;
		height: 90rpx;
	}
</style>
