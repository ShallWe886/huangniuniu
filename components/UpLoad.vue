<template>
	<view class="UpLoad_box">
		<view class="UpLoad_title" v-if="showTitle">{{title}}<text class="font_size_text_s color_gray margin_left_s" v-if="showTotal && !disabled">(已上传 {{imgList.length}}/12张)</text><text class="font_size_text_s color_black_999 margin_left_s" v-if="disabled">(共{{imgList.length}}张)</text></view>
		<block v-for="(item,index) in imgList" :key="index">
			<view class="UpLoad_item">
				<image :src="item" mode="aspectFill" @click="preview(item)" class="UpLoad_item_image"></image>
				<view class="UpLoad_Del" @click="del(index)" v-if="!disabled">x</view>
			</view>
		</block>
		<view class="UpLoad_item" @click="add()" v-if="imgList.length < ShowNum && !disabled">
			<view class="flex_grow text_center">
				<view class="font_size_title_xl color_black margin_top_m">+</view>
				<view class="font_size_text_m color_black">点击上传</view>
			</view>

		</view>
		<!-- <canvas style="border: 1px solid green;position: absolute;left: -5000px;" :style="{'width':w,'height': h}" canvas-id="firstCanvas" ref="mycanvas"></canvas> -->
	</view>
</template>

<script>
	// import {pathToBase64} from "@/utils/image-tools.js";
	export default{
		name:'UpLoad',
		props:{
			value:{
				default:undefined,
				type:[Array,null]
			},
			title:{
				default:"请选择图片上传",
				type:String
			},
			list:{
				default:null,
				type:Object
			},
			showTitle:{
				default:false,
				type:Boolean
			},
			showTotal:{
				default:false,
				type:Boolean
			},
			disabled:{
				default:false,
				type:Boolean
			},
			hasLogo:{
				default:false,
				type:Boolean
			},
			imgLogo:{
				default:null,//{title:"水印头部",text:[{title:"内容标题",content:"内容内容"}]}
				type:Object
			},
			ShowNum: {
				default: 12,
				type: Number
			}
		},
		created() {
			this.imgList = this.list || this.value || [];
		},
		watch:{
			list(v){
				this.imgList = v
			},
			imgLogo(v){
				this.logo = v
			},
			value(nVal){
				this.imgList = nVal;
			}
		},
		data(){
			return{
				imgList:[],
				logo:{},
				w:0,
				h:0
			}
		},
		methods:{
			del(index){
				this.imgList.splice(index,1)
				uni.showToast({
					title:"删除成功",icon:"none"
				})
				this.$emit("input",this.imgList);
				console.log('删除', this.imgList);
				this.$emit('change',this.imgList)
			},
			preview(item){
				uni.previewImage({
					current:item,
					urls:this.imgList
				})
			},
			add(){
				console.log('img', this.imgList);
				uni.chooseImage({
					count:this.ShowNum - this.imgList.length,
					sizeType:['compressed'],
					success: (res) => {
						console.log('###',res.tempFilePaths, this.imgList);
						this.$api.upLoad(res.tempFilePaths).then(res =>{
                            this.imgList = this.imgList.concat(res);
							console.log('res', res, this.imgList);
							this.$emit("input",this.imgList);
							this.$emit('change',res);
						})
					}
				})
			}
		}
	}
</script>

<style>
	.UpLoad_box{width: 100%;display: flex;flex-direction: row;align-items: center;box-sizing: border-box;flex-wrap: wrap;background-color: #FFFFFF;}
	.UpLoad_title{width:  100%;line-height: 80rpx;border-bottom: 1px solid #dddddd;font-size: 28rpx;color: #333333;margin-left: 10px;}
	.UpLoad_item{width: 190rpx;height: 190rpx;margin: 10rpx;border-radius: 15rpx; box-sizing: border-box;text-align: center;font-size: 100rpx;color: #aaaaaa;position:relative;display: flex;flex-direction: row;align-items: center;justify-content: center;border: 1px solid #DDDDDD;box-sizing: border-box;}
	.UpLoad_item_image{width: 180rpx;height: 180rpx;border-radius: 10rpx;}
	.UpLoad_add{width: 200rpx;height: 200rpx;border: 1px solid #DDDDDD;margin: 18rpx;box-sizing: border-box;background-color: #EEEEEE;}
	.UpLoad_Del{position: absolute;right: -20rpx;top: -20rpx;width: 40rpx;height: 40rpx;font-size: 30rpx;text-align: center;line-height: 34rpx;color: #FFFFFF;background-color: #DD524D;border-radius: 50%;}
</style>
