// import Request from '../static/js/request.js';
// let request = new Request().http;

// import UploadFile from '../static/js/upload.js';
// let uploadFile = new UploadFile().http;

export default{
	area:function(upJson){//获取区
		return request({url:"/api/v1.data/area",data:upJson,methods:"GET",type:0})
	},
}