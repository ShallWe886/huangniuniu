<template>
	<view>
		<!-- 详情轮播图 -->
		<swiper :style="{height:height+'px',width:width+'rpx'}" indicator-active-color='#FF6437' indicator-color="#FBCCBF" :indicator-dots="true" @change="change">
			<block v-for="(item,index) in list">
				<swiper-item :style="{height:height+'px',width:width+'rpx'}"  >
					<view >
						<image :src="item.url" mode="aspectFill" :style="{height:height+'px',width:width+'rpx'}" @click="lookImg(item,index)"></image>
					</view>
					<view :style="{height:height+'px',width:width+'rpx'}" else>
						<video :src="item.url" controls  :loop="true"  :style="{height:height+'px',width:width+'rpx'}" :show-mute-btn="true"  :enable-play-gesture="true" :id="MyVideo"></video>
					</view>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	export default {
		name:"swiper",
		props:{
			swiperList: {
				type: Array,
				default: []
			},
			height:{
				type:String,
				default:'180'
			},
			width:{
				type:String,
				default:'750'
			}
		},
		data() {
			return {
				swiper_box:{
					height:"100px",
					width:"650rpx",
				},
				list:[],
				preview:[],
				videwPlay:0
			};
		},
		created:function() {
			
			this.swiperList.map(res=>{
				var status;
				var index= res.lastIndexOf("."); //（考虑严谨用lastIndexOf(".")得到）得到"."在第几位
				console.log(res.substring(index))
				if(res.substring(index) == '.mp4'){
					 status = 1
				}else{
					 status = 0
					 this.preview.push(res)
				}
				this.list.push({'url':res,"status":status})
			})
			// console.log(this.preview,"lirb")
		
		
		},
		onReady() {
			// this.videoContext = uni.createVideoContext('MyVideo')
		},

		onLoad() {
			
		},
		methods:{
			lookImg(item,index){
				console.log(this.preview)
				uni.previewImage({
					urls:this.preview, //需要预览的图片http链接列表，多张的时候，url直接写在后面就行了
					current: index, // 当前显示图片的http链接，默认是第一个
					success: function(res) {},
					fail: function(res) {
						console.error(res)
					},
					complete: function(res) {},
				})
				
			},
			handel(e){
				console.log(e,xianshi)
			},
			change(e) {
				// console.log(this.videoplay,1)
				// this.videoplay.pause()
			},
		}
		
	}
</script>

<style>

</style>
