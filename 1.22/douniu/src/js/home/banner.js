import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import $ from "zepto";
//console.log($)
function Banner(){
	this.content = $(".banner-container>.swiper-wrapper");
	//this.init();
}
Banner.prototype = {
// 	init(){
// 		// this.getBannerAjax();
// 	},
// 	getBannerAjax(){
// 		requestInfo(this.handleBannerSucc,this)
// 	},
	handleBannerSucc(data){
		console.log(this);
 		//console.log(data);
		var str = "";
		for(var i = 0;i < data.data.banners.length;i++){
			str += `
			<div class="swiper-slide"><img src=${data.data.banners[i].url}></div>
			`
		 }
 		 this.content.html(str);
		var mySwiper = new Swiper ('.banner-container', {
			autoplay: {
				disableOnInteraction: false,
			},
		  loop: true, // 循环模式选项
		  pagination: {
		    el: '.banner-pagination',
		  },
		  
		})        
	}
}
export default Banner;









    