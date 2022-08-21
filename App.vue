<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData:{
			upDate:{//是否更新
				isUpdatePtient:false ,//是否更新患者列表
				isUpdateAddress:false,
				address:false,//选择地址后更新
				isUpdateOrder:false
			},
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-ui/index.scss";
	
	/*每个页面公共css */
	@import "@/static/style/index.scss"
	// @import url("@/static/css/all.css");
	// @import url("@/static/style/index.scss");
</style>
