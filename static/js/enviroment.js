

export default{
	v:'test1',
	envs:{
		'prd':"https://xcx.yaabey.com",
		'test':'https://ybjk.qifudaren.net',
		'test1':"https://ay.jikeyun.net",
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