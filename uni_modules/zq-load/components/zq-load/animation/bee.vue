<template>
	<view class="wrapper" :style="{'transform':'scale(' + scale + ')'}">  
	  <view class="bee">
	    <view class="bee-body">
	      <view class="blink"></view>
	      <view class="mouth"></view>
	      <view class="antenae"></view>
	      <view class="bee-left"></view>
	      <view class="bee-right"></view>
	    </view>
	  </view>
	  <view class="shadow">加载中</view>
	</view>
</template>

<script>
	export default{
		props:{
			scale:{
				default:0.5,
				type:Number
			}
		}
	}
</script>

<style>
	.bee {
	  animation: hover 2s ease-in-out infinite;
	}
	
	.bee-body {
	  position: relative;
	  margin: 136rpx 130rpx 38rpx 130rpx;
	  min-width: 130rpx;
	  background: #ffca31;
	  height: 130rpx;
	  width: 130rpx;
	  border-radius: 50%;
	  background-size: 130rpx 65rpx, cover, cover, cover;
	  background-image: linear-gradient(to bottom, transparent 50%, #292929 50%), radial-gradient(circle at 51% 36%, #ffd764 47%, rgba(0, 0, 0, 0) 47%), radial-gradient(circle at 51% 53%, #ffd764 55%, rgba(0, 0, 0, 0) 55%), radial-gradient(circle at 60% 53%, #ffebb1 60%, rgba(0, 0, 0, 0) 60%);
	  box-shadow: 35rpx -105rpx 0 -44rpx #FFD764, -35rpx -105rpx 0 -44rpx #FFD764, 38rpx -107rpx 0 -41rpx #ffebb1, -32rpx -107rpx 0 -41rpx #ffebb1, 35rpx -105rpx 0 -38rpx #ffca31, -35rpx -105rpx 0 -38rpx #ffca31, 3rpx -95rpx 0 -18rpx #FFD764, 5rpx -100rpx 0 -15rpx #ffebb1, 0px -95rpx 0 -10rpx #ffca31, -35rpx -183rpx 0 -57rpx #363636, 35rpx -183rpx 0 -57rpx #363636, -33rpx -185rpx 0 -56rpx #505050, 37rpx -185rpx 0 -56rpx #505050, -35rpx -184rpx 0 -54rpx #292929, 35rpx -184rpx 0 -54rpx #292929;
	}
	.bee-body:after {
	  position: absolute;
	  content: '';
	  background: linear-gradient(to bottom, transparent 50%, #363636 50%);
	  height: 130rpx;
	  width: 130rpx;
	  right: 0rpx;
	  bottom: 0rpx;
	  background-size: 130rpx 65rpx;
	  border-radius: 50%;
	  clip-path: ellipse(41% at 51% 48%);
	}
	.bee-body:before {
	  position: absolute;
	  content: '';
	  background: linear-gradient(to bottom, transparent 50%, #434343 50%);
	  height: 130rpx;
	  width: 130rpx;
	  right: 0rpx;
	  bottom: 0rpx;
	  background-size: 130rpx 65rpx;
	  border-radius: 50%;
	  clip-path: ellipse(41% at 61% 48%);
	}
	
	.mouth {
	  content: '';
	  position: absolute;
	  width: 20rpx;
	  height: 20rpx;
	  left: 55rpx;
	  bottom: 128rpx;
	  border-radius: 50%;
	  box-sizing: border-box;
	  border-bottom: 5rpx solid #363636;
	}
	
	.antenae {
	  position: relative;
	  z-index: -2;
	  width: 60rpx;
	  height: 60rpx;
	  border-radius: 50%;
	  right: -75rpx;
	  bottom: 130rpx;
	  border: 8rpx solid #363636;
	  box-sizing: border-box;
	  border-style: hidden hidden hidden solid;
	  transform: skewY(-20deg);
	}
	.antenae:before {
	  content: '';
	  position: absolute;
	  width: 60rpx;
	  height: 60rpx;
	  border-radius: 50%;
	  left: -87rpx;
	  bottom: 30rpx;
	  border: 8rpx solid #363636;
	  box-sizing: border-box;
	  border-style: hidden solid hidden hidden;
	  transform: skewY(40deg);
	}
	.antenae:after {
	  transform: skewY(20deg);
	  position: absolute;
	  content: '';
	  bottom: -213rpx;
	  left: -33rpx;
	  width: 30rpx;
	  height: 30rpx;
	  background: linear-gradient(to right, #292929 50%, #363636 50%);
	  clip-path: polygon(0 0, 50% 100%, 100% 0);
	}
	
	.bee-left {
	  animation: flight-left .5s ease-out infinite;
	  content: '';
	  position: absolute;
	  background-color: #F8F8FF;
	  /*large wing left*/
	  height: 100rpx;
	  width: 150rpx;
	  bottom: 110rpx;
	  right: 100rpx;
	  border-radius: 30rpx 130rpx 0 130rpx;
	  transform: skewY(20deg);
	  z-index: -1;
	  box-shadow: inset 30rpx 105rpx 0 -70rpx #FFF;
	}
	.bee-left:after {
	  animation: flight-little .5s ease-in-out infinite;
	  content: '';
	  position: absolute;
	  width: 100rpx;
	  height: 110rpx;
	  top: 70rpx;
	  left: 48rpx;
	  background-color: #F0F0F0;
	  border-radius: 50% / 50% 0 100% 50%;
	  box-shadow: inset 10rpx 1rpx 0rpx 0rpx #FFF, inset 30rpx 7rpx 0rpx 0rpx #f6f6f6;
	}
	
	.bee-right {
	  animation: flight-right .5s ease-in-out infinite;
	  content: '';
	  position: absolute;
	  background-color: #F8F8FF;
	  /*large wing right*/
	  height: 100rpx;
	  width: 150rpx;
	  bottom: 110rpx;
	  left: 100rpx;
	  border-radius: 30rpx 130rpx 0 130rpx;
	  border-radius: 130rpx 30rpx 130rpx 0rpx;
	  transform: skewY(-20deg);
	  z-index: -1;
	  box-shadow: inset 30rpx 105rpx 0 -70rpx #FFF;
	}
	.bee-right:after {
	  animation: flight-little .5s ease-in-out infinite;
	  content: '';
	  position: absolute;
	  width: 100rpx;
	  height: 110rpx;
	  top: 70rpx;
	  right: 48rpx;
	  background-color: #F0F0F0;
	  border-radius: 50% / 0 50% 50% 100%;
	  box-shadow: inset -10rpx 1rpx 0rpx 0rpx #FFF, inset -30rpx 7rpx 0rpx 0rpx #f6f6f6;
	}
	
	.blink {
	  position: relative;
	}
	.blink:before {
	  background-image: radial-gradient(circle at 71% 38%, #ffffff 8%, rgba(0, 0, 0, 0) 8%), radial-gradient(circle at 65% 50%, #363636 16%, rgba(0, 0, 0, 0) 16%), radial-gradient(circle at 69% 47%, #434343 19%, rgba(0, 0, 0, 0) 19%), radial-gradient(circle at 65% 50%, #292929 25%, rgba(0, 0, 0, 0) 25%), radial-gradient(ellipse at 50% 55%, #f8f8ff 50%, rgba(0, 0, 0, 0) 50%), radial-gradient(circle at 70% 50%, #ffffff 65%, rgba(0, 0, 0, 0) 65%);
	  left: 2rpx;
	}
	.blink:before, .blink:after {
	  clip-path: ellipse(50% 20% at 50% 50%);
	  content: '';
	  position: absolute;
	  height: 55rpx;
	  width: 55rpx;
	  border-radius: 50%;
	  background-color: #F0F0F0;
	  top: -67rpx;
	  animation: blink 10s linear infinite;
	}
	.blink:after {
	  background-image: radial-gradient(circle at 41% 38%, #ffffff 8%, rgba(0, 0, 0, 0) 8%), radial-gradient(circle at 35% 50%, #363636 16%, rgba(0, 0, 0, 0) 16%), radial-gradient(circle at 39% 47%, #434343 19%, rgba(0, 0, 0, 0) 19%), radial-gradient(circle at 35% 50%, #292929 25%, rgba(0, 0, 0, 0) 25%), radial-gradient(ellipse at 50% 55%, #f8f8ff 50%, rgba(0, 0, 0, 0) 50%), radial-gradient(circle at 70% 50%, #ffffff 65%, rgba(0, 0, 0, 0) 65%);
	  left: 73rpx;
	}
	
	.wrapper {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	}
	
	.shadow {
	  height: 45rpx;
	  width: 170rpx;
	  border-radius: 50%;
	  background-color: #65a6d4;
	  text-align: center;
	  font-size: 24rpx;
	  line-height: 45rpx;
	  color: #FFFFFF;
	  animation: shadow 2s ease-in-out infinite;
	}
	.shadow::after{
		content: "";
		animation: dot 3s linear infinite;
	}
	
	@keyframes blink {
	  0% {
	    clip-path: ellipse(50% 50% at 50% 50%);
	  }
	  9% {
	    clip-path: ellipse(50% 50% at 50% 50%);
	  }
	  10% {
	    clip-path: ellipse(50% 5% at 50% 50%);
	  }
	  11% {
	    clip-path: ellipse(50% 50% at 50% 50%);
	  }
	  30% {
	    clip-path: ellipse(50% 50% at 50% 50%);
	  }
	  31% {
	    clip-path: ellipse(50% 5% at 50% 50%);
	  }
	  32% {
	    clip-path: ellipse(50% 50% at 50% 50%);
	  }
	  33% {
	    clip-path: ellipse(50% 50% at 50% 50%);
	  }
	  34% {
	    clip-path: ellipse(50% 5% at 50% 50%);
	  }
	  35% {
	    clip-path: ellipse(50% 50% at 50% 50%);
	  }
	  50% {
	    clip-path: ellipse(50% 50% at 50% 50%);
	  }
	  60% {
	    clip-path: ellipse(50% 20% at 50% 50%);
	  }
	  61% {
	    clip-path: ellipse(50% 20% at 50% 50%);
	  }
	  69% {
	    clip-path: ellipse(50% 20% at 50% 50%);
	  }
	  70% {
	    clip-path: ellipse(50% 50% at 50% 50%);
	  }
	  79% {
	    clip-path: ellipse(50% 50% at 50% 50%);
	  }
	  80% {
	    clip-path: ellipse(50% 5% at 50% 50%);
	  }
	  81% {
	    clip-path: ellipse(50% 50% at 50% 50%);
	  }
	  100% {
	    clip-path: ellipse(50% 50% at 50% 50%);
	  }
	}
	@keyframes hover {
	  0% {
	    transform: translateY(0rpx);
	  }
	  50% {
	    transform: translateY(-15rpx);
	  }
	  100% {
	    transform: translateY(0rpx);
	  }
	}
	@keyframes shadow {
	  0% {
	    width: 170rpx;
	  }
	  50% {
	    width: 180rpx;
	  }
	  100% {
	    width: 170rpx;
	  }
	}
	@keyframes dot {
	  0% {
	    content: "";
	  }
	  25% {
	    content: ".";
	  }
	  50% {
	    content: "..";
	  }
	  75% {
	    content: "...";
	  }
	}
	@keyframes flight-left {
	  0% {
	    width: 150rpx;
	    transform: skewY(20deg);
	  }
	  50% {
	    width: 125rpx;
	    transform: skewY(25deg);
	  }
	  100% {
	    width: 150rpx;
	    transform: skewY(20deg);
	  }
	}
	@keyframes flight-right {
	  0% {
	    width: 150rpx;
	    transform: skewY(-20deg);
	  }
	  50% {
	    width: 125rpx;
	    transform: skewY(-25deg);
	  }
	  100% {
	    width: 150rpx;
	    transform: skewY(-20deg);
	  }
	}
	@keyframes flight-little {
	  0% {
	    height: 110rpx;
	  }
	  50% {
	    height: 100rpx;
	  }
	  100% {
	    height: 110rpx;
	  }
	}
</style>
