import enviroment from "./enviroment.js"
export default class UploadFile {
	http (request) {
        if(typeof request.data == "string"){
            request.data = [request.data];
        }
        var arr = request.data;
		uni.showLoading({title: '图片上传中',mask:true})
		var upload = true;  //是否上传成功状态
		var imgArr = [];    //上传完成后临时存储数组
        request.header = {}
		// if(uni.getStorageSync("token") )request.data.user_token =  uni.getStorageSync("token");

		var path = enviroment.getUrl();

		return new Promise((resolve,reject) => {
			if (arr.length == 0){
			  resolve(imgArr)
			}else{
			  var timer = setInterval(function () {
			    if (upload && imgArr.length <= arr.length) {
			      upload = false;
			      uni.uploadFile({
			        url: `${path}${request.url}`,
			        filePath: arr[imgArr.length],
                    header:request.header,
			        name: 'image',
					formData:{
						'user_token':uni.getStorageSync("token")
					},
			        success(res) {
                        res.data = JSON.parse(res.data);
                        request.response = res;
                        console.log(request)
			          if (res.data.status == 200) {
			            upload = true;
			            imgArr.push(res.data.data);
			            if (imgArr.length >= arr.length) {
			              clearInterval(timer);
			              uni.hideLoading();
						  uni.showToast({title: '图片上传成功',icon:"none"})
			              resolve(imgArr)
			            }
			          }else{
			            uni.hideLoading();
			            clearInterval(timer);
			            uni.showToast({title: '图片上传失败',icon:"none"})
			          }
			        },fail(err){
						console.log(1,err)
					}
			      })
			    }
			  }, 100)
			}
		})
	}
}
