<template>
	<view class="zq-load-loading" :style="{'transform':'scale(' + scale + ')'}">
	    <view class="piston">
	        <view class="rotator"></view>
	        <view class="block">
				<view class="text">L</view>
	            <view class="arm"></view>
	        </view>
	    </view>
	    <view class="piston">
	        <view class="rotator"></view>
	        <view class="block">
				<view class="text">O</view>
	            <view class="arm"></view>
	        </view>
	    </view>
	    <view class="piston">
	        <view class="rotator"></view>
	        <view class="block">
	            <view class="text">A</view>
	            <view class="arm"></view>
	        </view>
	    </view>
	    <view class="piston">
	        <view class="rotator"></view>
	        <view class="block">
	            <view class="text">D</view>
	            <view class="arm"></view>
	        </view>
	    </view>
	    <view class="piston">
	        <view class="rotator"></view>
	        <view class="block">
	            <view class="text">I</view>
	            <view class="arm"></view>
	        </view>
	    </view>
		<view class="piston">
		    <view class="rotator"></view>
		    <view class="block">
		        <view class="text">N</view>
		        <view class="arm"></view>
		    </view>
		</view>
		<view class="piston">
		    <view class="rotator"></view>
		    <view class="block">
		        <view class="text">G</view>
		        <view class="arm"></view>
		    </view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			scale:{
				default:0.6,
				type:[Number,String]
			}
		}
	}
</script>

<style>
	@keyframes piston {
	    0% { margin-top: 0; }
	    50% { margin-top: 80rpx; }
	    100% { margin-top: 0; }
	}
	@keyframes arm {
	    0% { transform: rotate(0); }
	    25% { transform: rotate(-18deg); }
	    50% { transform: rotate(0); }
	    75% { transform: rotate(18deg); }
	    100% { transform: rotate(0); }
	}
	
	.zq-load-loading {
	    width: 750rpx;
	    height: 250rpx;
	    font-size: 30rpx;
	    font-weight: 700;
	    color: #444;
	    text-shadow: 0rpx -1rpx 1rpx rgba(0,0,0,.7), 0rpx 1rpx 1rpx rgba(255,255,255,.4);
		text-align: center;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	
	.piston {
	    float: left;
	    margin-right: 10rpx;
	    position: relative;
	    width: 100rpx; 
	    height: 250rpx;
	    background: rgba(255,121,78,0.1);
	    border-radius: 10rpx 10rpx 50rpx 50rpx;
	    box-shadow: 0 -4rpx 0 rgba(0,0,0,.2), 0 4rpx 0 rgba(255,255,255,.2);
	}
	.piston:last-child {
	    margin: 0;
	}
	
	.piston .block {
	    position: relative;
	    width: 100rpx; 
	    height: 60rpx;
	    animation: piston 1.2s cubic-bezier(.5,0,.5,1) infinite;
	}
	
	.piston .block .text{
		position: absolute;
		z-index: 3;
		width: 100rpx;
		height: 60rpx;
		line-height: 60rpx;
		background: #555;
		border-radius: 10rpx;
		box-shadow: inset 0 -4rpx 0 rgba(0,0,0,.2), inset 0 4rpx 0 rgba(255,255,255,.2);
	}
	
	
	.piston:nth-child(1) .block { animation-delay: 0s; }
	.piston:nth-child(2) .block { animation-delay: .1s; }
	.piston:nth-child(3) .block { animation-delay: .2s; }
	.piston:nth-child(4) .block { animation-delay: .3s; }
	.piston:nth-child(5) .block { animation-delay: .4s; }
	.piston:nth-child(6) .block { animation-delay: .5s; }
	.piston:nth-child(7) .block { animation-delay: .6s; }
	
	.piston .arm {
	    position: absolute;
	    top:50%; left:50%;
	    margin: -10rpx 0 0 -10rpx;
	    width: 20rpx;
	    height: 150rpx;
	    background: #555;
	    border-radius: 10rpx;
	    box-shadow: inset 0 -22rpx 0 rgba(0,0,0,.2);
	    z-index: 2;
	    -webkit-transform-origin: center 10rpx;
	    -webkit-animation: arm 1.2s linear infinite;
	    -webkit-animation-delay: inherit;
	    transform-origin: center 10rpx;
	    animation: arm 1.2s linear infinite;
	    animation-delay: inherit;
	}
	.piston .arm:before,
	.piston .arm:after{
	    content: '';
	    position: absolute;
	    right:0; left:0;
	    height: 16rpx;
	    background: #eee;
	    border-radius: 50%;
	    margin: 2rpx;
	}
	.piston .arm:before { top: 0; }
	.piston .arm:after { bottom: 0; }
	
	.piston .rotator {
	    position: absolute;
	    bottom: 0;
	    width: 100rpx;
	    height: 100rpx;
	    border-radius: 10rpx;
	    border-radius: 50%;
	    border: 20rpx solid rgba(0,0,0,.1);
	    box-sizing: border-box;
	    z-index: 1;
	}
</style>
