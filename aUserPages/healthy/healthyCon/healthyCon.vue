<template>
	<view>
		<zq-load class="" v-model="info.load">
			<block v-if="info.form">
				<scroll-view scroll-y="true" style="height: 900rpx;">
					<view class="box_690 padding_l margin_left_l">
						<view class="" style="width: 630rpx;height: 750rpx;border:1rpx solid #E6E6E6;	border-radius: 10rpx;padding: 30rpx;box-sizing: border-box;">
							<rich-text :nodes="info.form.content" ></rich-text>
						</view>
					
					</view>
				</scroll-view>
				
				<view class="flex_column operate_box" v-if="false">
					<view class="flex_column">
						<image src="/static/image/health_icon0.png" mode="aspectFill" class="health_icon"
							v-if="health.nice == 0" @click="operate(0,1)"></image>
						<image src="/static/image/health_icon01.png" mode="aspectFill" class="health_icon"
							v-if="health.nice == 1" @click="operate(0,0)"></image>
						<view class="margin_top_s color_black_888 font_size_text_m">
							282
						</view>
					</view>
					<view class="flex_column margin_top_m">
						<image src="/static/image/health_icon1.png" mode="aspectFill" class="health_icon"
							v-if="health.collect == 0" @click="operate(1,1)"></image>
						<image src="/static/image/health_icon11.png" mode="aspectFill" class="health_icon"
							v-if="health.collect == 1" @click="operate(1,0)"></image>
						<view class="margin_top_s color_black_888 font_size_text_m">
							282
						</view>
					</view>
				<!-- 	<view class="flex_column margin_top_m">
						<image src="/static/image/health_icon2.png" mode="aspectFill" class="health_icon"
							v-if="health.comment == 0" @click="operate(2,1)"></image>
						<image src="/static/image/health_icon21.png" mode="aspectFill" class="health_icon"
							v-if="health.comment == 1" @click="operate(2,0)"></image>
						<view class="margin_top_s color_black_888 font_size_text_m">
							282
						</view>
					</view> -->
					<view class="flex_column margin_top_m">
						<image src="/static/image/health_icon3.png" mode="aspectFill" class="health_icon"
							v-if="health.share == 0" @click="operate(3,1)"></image>
						<image src="/static/image/health_icon31.png" mode="aspectFill" class="health_icon"
							v-if="health.share == 1" @click="operate(3,0)"></image>
						<view class="margin_top_s color_black_888 font_size_text_m">
							282
						</view>
					</view>
				</view>
			</block>
		</zq-load>
		
		<u-popup :show="sharePop " mode="bottom" :round="30"  @close="closePop">
			<view class="padding_xl">
				<view class="flex_row">
					<view class="font_weight color_black_333 font_size_text_xl">
						请选择分享方式
					</view>
					<image src="/static/image/health_close.png" mode="aspectFill" class="close_icon margin_left"></image>
				</view>
				
				<view class="flex_row justify_between margin_bottom_l  margin_top_l" style="padding: 0 40rpx;">
					<view class="flex_column" v-for="(item,index) in shareList" :key="index">
						<image :src="item.img" mode="aspectFill" class="share_img"></image>
						<view class="margin_top_s font_size_text_l color_black_888">
							{{item.title}}
						</view>
					</view>
				</view>
			</view>

		</u-popup>
	</view>
</template>

<script>
	import Load from "@/static/utils/load.js"
	export default {
		data() {
			return {
				con: '富文本内容',
				health: {
					collect: 0, //收藏
					nice: 0, //电赞
					share: 0, //分享
					comment: 0 // 评论

				},
				sharePop: false, //分享弹窗
				shareList: [{
					img: '/static/image/friend01.png',
					title: '朋友圈'
				}, {
					img: '/static/image/friend02.png',
					title: '微信'
				}, {
					img: '/static/image/friend03.png',
					title: 'QQ'
				}, {
					img: '/static/image/friend04.png',
					title: '微博'
				}],
				info:'',
				healthId:''
			}
		},
		onLoad(options) {
			this.healthId = options.healthId
			this.info = new Load({
				api:this.$api.getarticleDetail,
				queryParams:{article_id:this.healthId},
				load:{mode:"info"}
			})
			this.info.getInfo()
		},
		onPageScroll(event) {
			this.info.scrollLazy(event.scrollTop)
		},
		methods: {
			operate(type, status) { //操作  type-- 0：电赞 1收藏 2评论 3分享
				if (type == 0) {
					this.health.nice = status
				} else if (type == 1) {
					this.health.collect = status
				} else if (type == 2) {
					uni.navigateTo({
						url: "/aUserPages/healthy/comment/comment"
					})
				} else if (type == 3) {
					this.sharePop = true
				}
			},
			closePop(e) {
				console.log(e)
				this.sharePop = false
			},
		}
	}
</script>

<style lang="scss" scoped>
	.health_icon {
		width: 48rpx;
		height: 48rpx;
	}

	.operate_box {
		position: fixed;
		right: 30rpx;
		bottom: 30rpx;
		z-index: 9999;
	}

	.share_img {
		width: 110rpx;
		height: 110rpx;
	}
</style>
