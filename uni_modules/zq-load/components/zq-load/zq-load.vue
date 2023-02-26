<template>
	<view :style="{'background':zqLoadSettings.background}">
		<!--加载首次全屏中-->
		<view class="zq-load-body" 
			v-if="!load.loadError && !load.requestEnd && load.total == 0 && load.scope == 'body'" @touchmove.stop.prevent="">
			<slot name="loadCustom">
				<view class="zq-load-body-center">
					<Candle></Candle>
				</view>
			</slot>
		</view>
		<!-- 全屏加载报错/无数据-->
		<view class="zq-load-body" 
			v-if="(load.loadEnd && !load.loadMore || load.loadError) && load.total == 0 && zqLoadSettings.showNonePrompt && load.scope == 'body'">
			<view class="zq-load-body-center">
				<slot name="noneCustom">
					<view class="zq-load-none-text"
						:style="{'color':color}"
						@click="reset()">
						{{load.loadError ? zqLoadSettings.loadErrorPrompt : zqLoadSettings.loadNonePrompt}}
					</view>
				</slot>
			</view>
		</view>
		<!--内容展示区域-->
		<view class="zq-load-content"
			:style="{'height':zqLoadSettings.bodyHeight != 0 ? zqLoadSettings.bodyHeight + 'rpx' : ''}"
			v-if="load.total > 0 && load.mode == 'list' || !load.loadError && load.loadEnd && load.mode == 'info'">
			<slot></slot>
		</view>
		<!-- 加载首次区域中 -->
		<view class="zq-load-box"
			:style="{
				'height':zqLoadSettings.loadHeight - zqLoadSettings.subtractHeight + 'rpx'
			}" 
			v-if="!load.loadError && !load.requestEnd && load.total == 0 && load.scope == 'box'">
			<slot name="loadCustom">
				<Candle></Candle>
			</slot>
		</view>
		
		<!-- 更多/错误提示 -->
		<view class="zq-load-box"
			:style="{
				'height':zqLoadSettings.loadMoreHeight + 'rpx'
			}" 
			v-if="(load.loadEnd && load.loadMore && load.lazyEnd || load.loadError) && load.total > 0 && load.mode == 'list' && zqLoadSettings.loadMoreType != 0">
			<slot name="moreCustom">
				<view class="zq-load-more-none-text"
					@click.stop="loadMore()"
					:style="{'color':color}">
					{{load.loadError ? zqLoadSettings.loadErrorPrompt : zqLoadSettings.loadMorePrompt}}
				</view>
			</slot>
		</view>
		<!-- 加载更多中 -->
		<view class="zq-load-box zq-load-toBig" 
			:style="{'height':zqLoadSettings.loadMoreHeight + 'rpx'}" 
			v-if="!load.loadEnd && load.lazyEnd && load.total > 0 && load.mode == 'list' && !load.loadError">
			<slot name="loadMoreCustom">
				<Candle :scale="0.2"></Candle>
			</slot>
		</view>
		<!-- 区域加载报错/无数据-->
		<view class="zq-load-box" 
			:style="{'height':zqLoadSettings.loadHeight - zqLoadSettings.subtractHeight + 'rpx'}" 
			v-if="(load.loadEnd && !load.loadMore || load.loadError) && load.total == 0 && zqLoadSettings.showNonePrompt && load.scope == 'box'">
			<slot name="noneCustom">
				<view class="zq-load-none-text"
					:style="{'color':color}"
					@click="reset()">
					{{load.loadError ? zqLoadSettings.loadErrorPrompt : zqLoadSettings.loadNonePrompt}}
				</view>
			</slot>
		</view>
		<!-- 无更多数据-->
		<view class="zq-load-box zq-load-toBig" 
			:style="{'height':zqLoadSettings.loadMoreHeight + 'rpx'}" 
			v-if="load.loadEnd && load.lazyEnd && load.total > 0 && !load.loadMore && zqLoadSettings.showLoadMoreNonePrompt && load.mode == 'list'">
			<slot name="moreNoneCustom">
				<view class="zq-load-more-none-text" :style="{'color':color}">{{zqLoadSettings.loadMoreNonePrompt}}</view>
			</slot>
		</view>
		<!-- 全屏加载报错 -->
		<view class="zq-load-body" @touchmove.stop.prevent="" v-if="load.loadError && (load.total == 0 && load.mode == 'list' || load.requestEnd && load.mode == 'info') && load.scope == 'body'">
			<view class="zq-load-body-center">
				<!-- <Candle></Candle> -->
				<view class="zq-load-none-text" @click="reset()" :style="{'color':color}">{{zqLoadSettings.loadErrorPrompt}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Candle from "./animation/bee";
	import Loading from "./animation/loading";
	export default{
		name:"zqLoad",
		components:{
			Candle,
			Loading
		},
		props:{
			value:{
				type:Object
			},
			color:{//字体颜色
				default:'#999999',
				type:String
			},
			props:{//配置项
				default:null,
				type:Object
			}
		},
		data(){
			return{
				load:{//加载控制参数
					loadEnd:false,//加载结束
					requestEnd:true,//请求结束
					loadMore:true,//可加载更多
					loadError:false,//加载错误
					lazyEnd:true,//懒加载结束
					total:0,
					scope:'body',//加载动画范围 box body
					mode:"list",//加载动画模式 info list
					loadErrorPrompt:"加载失败",//加载失败提示语
				},
				zqLoadSettings:{//加载设置
					loadIcon:"candle",
					loadMoreIcon:"candle",
					loadErrorIcon:"error",
					background:'',//加载动画背景
					duration:50,//单条数据加载时长
					subtractHeight:700,//减少的高度
					loadHeight:0,//首次加载高度
					loadMoreHeight:80,//加载更多的高度
					bodyHeight:0,//内容高度
					showNonePrompt:true,//显示首次加载无数据提示语
					showLoadMorePrompt:true,//显示可加载更多提示语
					showLoadMoreNonePrompt:true,//显示加载更多没有数据提示语
					loadNonePrompt:'暂无数据',//没有数据的提示语
					loadMorePrompt:'上拉加载',//加载更多提示语
					loadMoreNonePrompt:'暂无更多',//没有更多加载数据的提示语
					loadErrorPrompt:"加载失败",//加载失败提示语
					loadMoreType:2//上拉加载更多的方式 0上拉 1点击 2上拉和点击
				},
				timer:null,
				windowHeight:0//内容高度
			}
		},
		created(){
			uni.getSystemInfo({
				success: (event) => {
					if(this.zqLoadSettings.loadHeight == 0)this.zqLoadSettings.loadHeight = event.screenHeight * 750 / event.screenWidth;
					if(this.value)this.load = Object.assign(this.load,this.value);
					
					if(this.props){
						this.zqLoadSettings = Object.assign(this.zqLoadSettings,this.props);
					}
				}
			})
		},
		watch:{
			value:{
				handler(nVal,oVal) {
				    this.load = Object.assign(this.load,nVal);
					if(nVal.loadErrorPrompt)this.zqLoadSettings.loadErrorPrompt = nVal.loadErrorPrompt
					if(nVal.loadNonePrompt)this.zqLoadSettings.loadNonePrompt = nVal.loadNonePrompt
					if(nVal.showLoadMoreNonePrompt)this.zqLoadSettings.showLoadMoreNonePrompt = nVal.showLoadMoreNonePrompt
					if(nVal.showLoadMorePrompt)this.zqLoadSettings.showLoadMorePrompt = nVal.showLoadMorePrompt
					if(nVal.showNonePrompt)this.zqLoadSettings.showNonePrompt = nVal.showNonePrompt
				},
				deep: true
			},
			props(nVal){
				this.zqLoadSettings = Object.assign(this.zqLoadSettings,nVal);
			}
		},
		methods:{
			loadMore(){//加载更多
				if(this.zqLoadSettings.loadMoreType > 0)this.$emit('loadMore');
			},
			reset(){//重新加载
				this.$emit('reset');
			}
		}
	}
</script>

<style scoped>
	.zq-load-body{width: 750rpx;height:100vh;top: 0;left: 0;position: fixed;z-index: 100;box-sizing: border-box;}
	.zq-load-body-center{width: 750rpx;height: 100vh;display: flex;flex-direction: row;align-items: center;justify-content: center;}
	.zq-load-animation-box{position:relative;width: 750rpx;height: 80rpx;}
	.zq-load-error-box{position: relative;width: 750rpx;height: 100vh;transform: scale(0.5);}
	.zq-load-body .zq-load-animation-box{position:absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);}
	
	.zq-load-box{width: 750rpx;box-sizing: border-box;display: flex;flex-direction: row;align-items: center;justify-content: center;overflow: hidden;}
	
	.zq-load-content{width: 750rpx;}
	.zq-load-none-text{font-size: 24rpx;}
	.zq-load-more-none-text{position: relative;font-size: 24rpx;}
	
	.zq-load-toBig{animation: moveShow 0.6s;}
	@keyframes moveShow{
		from{transform: translateY(100%);}
		to{transform: translateY(0);}
	}
</style>