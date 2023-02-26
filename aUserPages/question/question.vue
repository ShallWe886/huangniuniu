<template>
	<view class="padding_bottom_m">
		<view class="box_690 padding_l margin_left_l" v-for="(item,index) in question" :key="index">
			<view class="flex_row" @click="lookAnswer(item, index)">
				<view class="font_size_title_s color_black_333 font_weight" >
					{{index+1}}、{{item.title}}
				</view>
				<view class="margin_left">
					<u-icon name="arrow-right" size="30" color="#999999" v-if="!item.isShow"></u-icon>
					<u-icon name="arrow-down" size="30" color="#999999" v-if="item.isShow"></u-icon>
				</view>
			</view>
			<view class="answer_box font_size_text_m color_black_999 margin_top_l"  v-if="item.isShow">
				<p v-html="item.content"></p>
			</view>
		</view>
		<view class="font_size_text_l color_black_999 text_align_center margin_top_l" style="margin-top: 200rpx;" v-if="question.length == 0">
			暂无数据
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				question: [],
				pageSize: 8,
				page: 1,
				channel_id: '',
				type: 0,
			}
		},
		onLoad(options) {
			this.type = options.type  ? options.type : 0
		},
		onShow() {
			// if(getApp().globalData.upDate.isUpdateOrder){
			// 	this.getfresh();
			// 	getApp().globalData.upDate.isUpdateOrder = false
			// }
			if(this.type == 1) {
				this.channel_id = 7
			}
			this.getfresh();
			
		},
		onPullDownRefresh: function() {
			this.fresh();
		},
		onReachBottom() {
			if (this.loading) {
				this.getList()
			}
		},
		methods: {
			lookAnswer(item, index){
				console.log('item', item, typeof item.isShow);
				// this.question[index].isShow = !this.question[index].isShow
				item.isShow = !item.isShow 
				this.$forceUpdate();
			},
			fresh(e) {
				uni.showNavigationBarLoading();
				this.getfresh()
				uni.hideNavigationBarLoading();
				uni.stopPullDownRefresh();
			},
			getfresh(e) {
				this.question = []
				this.page = 1
				this.loading = true;
				this.getList()
			},
			getList(){
				let api = {0: 'escortArticle', 1: 'articleList'}
				this.$api[api[this.type]]({
					pageSize: 8,
					page: this.page,
					channel_id: this.channel_id
				}).then(res => {
					this.loading = res.list.length == 8
					this.question = this.question.concat(res.list)
					this.question.map(res=>{
						res.isShow = !res.status;
					})
					// for(let i in this.question) {
					// 	this.question[i].isShow = !this.question[i].isShow;
					// 	if(i == 0) {
					// 		this.question[i].isShow = true;
					// 	}
					// }
					this.page += 1
					console.log('orderList', this.question);
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.answer_box {
		width: 610rpx;
		height: 150rpx;
		border-radius: 10rpx;
		background: #F8F8F8;
		box-sizing: border-box;
		padding: 20rpx;
	}
</style>
