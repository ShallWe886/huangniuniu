<template>
	<canvas style="position: fixed;" :style="{'width':canvasWidth + 'px','height':canvasHeight + 'px','left':canvasLeft + 'px','top':canvasTop + 'px'}" canvas-id="canvas"></canvas>
</template>

<script>
	export default{
		props:{
			left:{
				default:() => null,
				type:[String,Number]
			},
			top:{
				default:0,
				type:[String,Number]
			},
			width:{
				default:0,
				type:[String,Number]
			},
			height:{
				default:0,
				type:[String,Number]
			},
			direction:{//horizontal水平 vertical垂直
				default:"vertical",
				type:String
			},
			showPrompt:{//显示提示
				default:true,
				type:Boolean
			},
			type:{//image图片 game游戏
				default:"image",
				type:String
			},
			isConvert:{//是否生成图片
				default:true,
				type:Boolean
			},
			isSave:{//是否保存在本地
				default:true,
				type:Boolean
			},
			images:{
				default:()=>[],
				type:Array
			}
		},
		mounted() {
			uni.getSystemInfo({
				success: (event) => {
					// #ifdef APP-PLUS
						if(event.platform === "ios"){
							this.canvasScale = 0.6;
						}
					//#endif
					this.canvasWidth = this.width == 0 ? event.screenWidth : this.width;
					this.canvasHeight = this.height == 0 ? event.screenHeight : this.height;
					this.canvasLeft = this.left || this.type == "game" ? 0 : -this.canvasWidth;
					this.canvasTop = this.top;
					if(this.type == "game"){
						this.canvasScale = this.canvasWidth / event.screenWidth > this.canvasHeight / event.screenHeight ? event.screenWidth / this.canvasWidth : event.screenHeight / this.canvasHeight
					}
				}
			})
			this.loadImages();
		},
		watch:{
			images(nVal){
				this.loadImages();
			}
		},
		data(){
			return{
				canvasScale:1,//缩放比例
				canvasWidth:0,//画布宽度
				canvasHeight:0,//画布高度
				canvasLeft:0,//画布左边距
				canvasTop:0,//画布右边距
				cacheImages:{},//缓存图片
				cacheLenght:0,//缓存长度
				uploadTask:null,
				progress:0,//当前进度
				ctx:null,
				errorList:[],//报错信息
				zqCanvasSettings:{
					color:"#333",//字体颜色
					background:"transparent",//背景颜色
					fontStyle:"normal",//字体样式
					fontSize:15,//字号大小
					fontFamily:"sans-serif",//字体
					fontWeight:"300",//字重
					lineInterval:20,//行距
					textAlign:"left",//文字水平排列方式
					textBaseline:"normal",//文字垂直排列方式
					textOverflow:"scale"//缩小字号
				}
			}
		},
		methods:{
			/**
			 * @param {Array} draws
			 * type       		string			irregular,rect,circle,oval,sector,text,image,line	
			 * url				string			图片链接
			 * background		string			背景颜色
			 * alpha			number			透明度
			 * font				object			字体对象
			 * 	 color			string			颜色					#333
			 * 	 text			string			文字内容				""
			 * 	 width			number			文字盒子宽度			auto
			 * 	 style       	string			字体样式				normal
			 * 	 size   		number			字号大小				15
			 * 	 family			string			字体样式				normal
			 * 	 weight			string			字重					300
			 * 	 align			string			文字水平排列方式		left
			 * 	 baseline		string			文字垂直排列方式		normal
			 * 	 overflow		string			文字溢出处理			scale/ellipsis/wrap
			 * 	 through		string			文字穿越线			center/top/bottom
			 * 	 throughColor	string			文字穿越线颜色		同color
			 * shadow			object			阴影
			 * 	 x    			number			阴影水平方向位移		0
			 * 	 y    			number			阴影垂直方向位移		0
			 * 	 color			string			阴影颜色				#eeeeee
			 * 	 blur 			number			阴影模糊程度			0.8
			 * rduis			array/number	圆角					0
			 * radian			number			弧度					0
			 * border			object			边框					
			 * 	 width			number			边框					0
			 * 	 color			string			颜色					transparent
			 * 	 style			string			样式					solid
			 * 	 image			string			图片					""
			 * coord      		array			坐标
			 * 	 irregular		array			不规则图形		[[x1,y1],[x2,y2],[x3,y3],...]
			 * 	 rect			array			矩形				[[x,y],[width,height]]
			 * 	 circle			array			圆形				[[startX,startY]]
			 * 	 oval			array			椭圆				[[tlx,tly],[trx,try],[blx,bly],[brx,bty]]
			 * 	 sector			array			扇形				[[radianX,radianY],[circleX,circleY]]
			 * 	 text			array			文字				[[startX,startY]]
			 * 	 image			array			图片				[[x,y],[width,height]]
			 * 	 line			array			线				[[x1,y1],...]
			 */
			draw(draws){
				if(this.showPrompt && this.type == "image")uni.showLoading({title:"正在生成图片",mask:true});
				this.loadDrawImages(draws).then(()=>{
					if(!this.ctx)this.ctx = uni.createCanvasContext("canvas",this);
					this.ctx.clearRect(0,0,this.canvasWidth * this.canvasScale,this.canvasHeight * this.canvasScale);
					for(let index in draws){
						if(!draws[index].unDraw){
							this.ctx.setGlobalAlpha(draws[index].alpha || 1);//设置透明度
							if(!draws[index].shadow)this.ctx.setShadow(0,0,0,"transparent");
							if(draws[index].shadow)this.ctx.setShadow(draws[index].shadow.x || 0,draws[index].shadow.y || 0,(1 - draws[index].shadow.blur || 0) * 100,"#000000");
							if(draws[index].type == "rect"){
								this.drawRect(draws[index]);
							}else if(draws[index].type == "image"){
								this.drawImage(draws[index]);
							}else if(draws[index].type == "text"){
								this.drawText(draws[index]);
							}
						}
					}
					
					//绘制到画布
					this.ctx.draw(true,(ret) =>{
						this.$emit("drawSuccess");
						if(this.isConvert && this.type == "image"){
							this.canvasToTempFilePath();
						}else if(this.type == "image"){
							uni.hideLoading();
							if(this.showPrompt)uni.showToast({title:"绘制成功",icon:"none"})
						}
						this.errorList.forEach(item =>{console.error(item + "---绘制失败")});
					})
				})
			},
			drawText(draw){//绘制文字
				if(!draw.font)return
				if(draw.coord.length >= 1){
					let fonts = draw.font;
					if(typeof fonts == "object" && !fonts.length){
						fonts = [fonts];
					}
					let left = draw.coord[0][0] * this.canvasScale;
					let top = draw.coord[0][1] * this.canvasScale;
					fonts.forEach(item =>{
						let fontSize = Math.floor((item.size || this.zqCanvasSettings.fontSize) * this.canvasScale);
						this.ctx.font = `${item.style || this.zqCanvasSettings.fontStyle} ${item.weight || this.zqCanvasSettings.fontWeight} ${fontSize}px ${item.family + this.zqCanvasSettings.fontFamily}`;
						this.ctx.setFontSize(fontSize);
						this.ctx.setFillStyle(item.color || this.zqCanvasSettings.color);
						this.ctx.setTextAlign(item.align || this.zqCanvasSettings.textAlign);
						this.ctx.setTextBaseline(item.baseline || this.zqCanvasSettings.textBaseline);
						this.ctx.fillText(item.text || '',left,top);
						let textWidth = this.ctx.measureText(item.text).width;
						if(item.through){//绘制划线
							let baseline = item.baseline || this.zqCanvasSettings.textBaseline;
							let throughTop = top;
							if(baseline == "normal"){
								throughTop += item.through == "center" ? -fontSize * 0.35 : item.through == "bottom" ? fontSize * 0.25 : -fontSize;
							}else if(baseline == "top"){
								throughTop += item.through == "center" ? fontSize * 0.5 : item.through == "bottom" ? fontSize * 1 : -fontSize * 0.2;
							}else if(baseline == "middle"){
								throughTop += item.through == "center" ? 0 : item.through == "bottom" ? fontSize * 0.55 : -fontSize * 0.7;
							}else if(baseline == "bottom"){
								throughTop += item.through == "center" ? -fontSize * 0.5 : item.through == "bottom" ? 0 : -fontSize * 1.2;
							}
							let throughLeft = left + (item.align == "center" ? -textWidth / 2 : 0);
							if(item.throughColor)this.ctx.setFillStyle(item.throughColor);
							this.ctx.fillRect(throughLeft,throughTop,textWidth,1);
						}
						left += textWidth;//计算宽度
					})
				}
			},
			drawRect(draw){//绘制矩形
				if(draw.coord.length >= 2 && draw.coord[0].length >= 2 && draw.coord[1].length >= 2){
					let x = draw.coord[0][0] * this.canvasScale;
					let y = draw.coord[0][1] * this.canvasScale;
					let w = draw.coord[1][0] * this.canvasScale;
					let h = draw.coord[1][1] * this.canvasScale;
					if(draw.radius){
						this.drawAngleRounded(x,y,w,h,draw.radius);
					}else{
						this.ctx.beginPath();
					}
					this.ctx.setFillStyle(draw.background || this.zqCanvasSettings.background);
					this.ctx.fillRect(x,y,w,h);
					if(draw.radius)this.ctx.restore();
				}else{
					this.errorList.push(JSON.stringify(draw));
				}
			},
			drawImage(draw){//绘制图片
				if(draw.coord.length >= 2 && draw.coord[0].length >= 2 && draw.coord[1].length >= 2 && draw.url && this.cacheImages[draw.url] && this.cacheImages[draw.url] != 'fail'){
					let x = draw.coord[0][0] * this.canvasScale;
					let y = draw.coord[0][1] * this.canvasScale;
					let w = draw.coord[1][0] * this.canvasScale;
					let h = draw.coord[1][1] * this.canvasScale;
					if(draw.radius)this.drawAngleRounded(x,y,w,h,draw.radius);
					if(draw.border)this.drawBorder(x,y,w,h,draw.border);
					this.ctx.drawImage(this.cacheImages[draw.url],x,y,w,h);
					if(draw.radius)this.ctx.restore();
				}else{
					this.errorList.push(JSON.stringify(draw));
				}
			},
			drawAngleRounded(x,y,w,h,radius){//绘制圆角
				let drawRadius = radius || 0;
				if(typeof drawRadius == "number"){
					drawRadius = [drawRadius,drawRadius,drawRadius,drawRadius];
				}
				for(let index in drawRadius){//处理圆角
					drawRadius[index] = drawRadius[index] * this.canvasScale;
					if(w > h){//控制最大圆角
						if(drawRadius[index] > h / 2)drawRadius[index] = h / 2;
					}else{
						if(drawRadius[index] > w / 2)drawRadius[index] = w / 2;
					}
				}
				if(drawRadius.length == 4){
					this.ctx.save();
					this.ctx.beginPath();
					this.ctx.setFillStyle('transparent');
					// 左上角
					this.ctx.arc(x + drawRadius[0], y + drawRadius[0], drawRadius[0], Math.PI, Math.PI * 1.5)
					//右上角
					this.ctx.arc(x + w - drawRadius[1], y + drawRadius[1], drawRadius[1], Math.PI * 1.5, Math.PI * 2);
					//右下角
					this.ctx.arc(x + w - drawRadius[2], y + h - drawRadius[2], drawRadius[2], 0, Math.PI * 0.5);
					//左下角
					this.ctx.arc(x + drawRadius[3], y + h - drawRadius[3], drawRadius[3], Math.PI * 0.5, Math.PI);
					//起点
					this.ctx.moveTo(x + drawRadius[0], y);
					//top
					this.ctx.lineTo(x + w - drawRadius[1], y);
					this.ctx.lineTo(x + w, y + drawRadius[1]);
					//right
					this.ctx.lineTo(x + w, y + h - drawRadius[2]);
					this.ctx.lineTo(x + w - drawRadius[2], y + h);
					//bottom
					this.ctx.lineTo(x + drawRadius[3], y + h);
					this.ctx.lineTo(x, y + h - drawRadius[3]);
					//left
					this.ctx.lineTo(x, y + drawRadius[0]);
					this.ctx.lineTo(x + drawRadius[0], y);
					this.ctx.fill();
					this.ctx.closePath();
					this.ctx.clip();
				}
			},
			drawBorder(x,y,w,h,radius){//绘制边框
			return;
				if(!radius)radius = [0,0,0,0];
				if(typeof radius == "number")radius = [radius,radius,radius,radius];
				
			},
			canvasToTempFilePath(){//绘制成图片
				uni.canvasToTempFilePath({
					canvasId:"canvas",
					x:0,
					y:0,
					width:this.canvasWidth * this.canvasScale,
					height:this.canvasHeight * this.canvasScale,
					destWidth:this.canvasWidth * this.canvasScale,
					destHeight:this.canvasHeight * this.canvasScale,
					quality:1,
					success: (res) => {
						let canvasImage = res.tempFilePath.replace(/[\r\n]/g,'');
						this.$emit("convertSuccess",canvasImage);
						if(this.isSave){
							this.saveImage(canvasImage);
						}else{
							uni.hideLoading();
							if(this.showPrompt)uni.showToast({title:"绘制成功",icon:"none"})
						}
					},
					fail: (err) => {
						uni.hideLoading();
						if(this.showPrompt)uni.showToast({title:"绘制失败",icon:"none"})
					}
				},this)
			},
			saveImage(canvasImage){//保存图片
				uni.saveImageToPhotosAlbum({
					filePath:canvasImage,
					success: (res) => {
						this.$emit("saveSuccess",canvasImage);
						uni.hideLoading();
						if(this.showPrompt)uni.showToast({title:"保存成功",icon:"none"})
					},
					fail: (err) => {
						uni.hideLoading();
						if(this.showPrompt)uni.showToast({title:"保存失败",icon:"none"})
					}
				})
			},
			loadDrawImages(draws){//加载数组中的图片
				return new Promise((resolve,reject)=>{
					this.timer = setInterval(()=>{
						let len = 0;
						for(let index in draws){
							if(draws[index].type == "image" && draws[index].url && !this.cacheImages[draws[index].url]){
								this.downImages(draws[index].url);
							}else{
								len ++;
							}
						}
						if(len >= draws.length){
							clearInterval(this.timer);
							resolve(true);
						}
					},100)
				})
			},
			loadImages(){//缓存图片
				for(let key in this.images){
					if(!this.cacheImages[this.images[key]]){
						this.progress = 0;
						this.downImages(this.images[key],true);
						break;
					}
				}
			},
			downImages(url,init){//下载图片
				if(this.uploadTask) return false;
				if(url.indexOf('http') != 0){
					this.cacheImages[url] = url;
				}else{
					this.uploadTask = uni.downloadFile({
						url:url,
						success: (res) => {
							this.cacheImages[url] = res.tempFilePath;
							this.uploadTask = null;
							if(init){
								this.cacheLenght ++;
								this.loadImages();
							}
						},
						fail: (err) => {
							this.cacheImages[url] =	"fail";
							this.uploadTask = null;
							if(init){
								this.cacheLenght ++;
								this.loadImages();
							}
						}
					})
					if(this.uploadTask){
						this.uploadTask.onProgressUpdate((res) => {
							this.progress = res.progress;
						});
					}
				}
			}
		},
		destroyed() {
			if(this.timer)clearInterval(this.timer);
		}
	}
</script>
