

export default{
	v:'prd',
	envs:{
		'prd':"http://pzcs.qifudaren.net/",
		'imgUrl':"http://pzcs.qifudaren.net/uploads/qianduan"
		
	},
	getUrl:function(){
		return this.envs[this.v];
	},
	isTest:function(){
		return this.v === 'test'
	},
	getImgUrl:function(){ //服务器图片链接
		console.log("tu",this.envs['imgUrl'])
		return this.envs['imgUrl'];
	},
}