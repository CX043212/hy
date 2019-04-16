import Banner from "../js/home/banner";
import Ads from "../js/home/ads";
import TabBar from "../js/home/tabBar";
import BScroll from "better-scroll";
import Goods from "../js/home/goods";
var scoll = "";
var page = 0;
function requestInfo() {
	this.init();
}
requestInfo.prototype = {
	init() {
		this.requestInfoSucc();
	},
	requestInfoSucc() {
		$.ajax({
			type: "post",
			url: "/api/capi/product/qiuxie/open/homefirstv3",
			data: JSON.stringify({
				os: 3
			}), //后台接受的数据得是字符串
			// headers:{"content-type":"application/json"},//发送给服务器的信息，json序列化
			headers: {
				"content-type": "application/json"
			},
			success: $.proxy(this.success)
			//error:console.log(3)
		})
	},
	success(data) {
		new Banner().handleBannerSucc(data);
		new Ads().handleAds(data);
		new TabBar().handleBar(data);
		scroll = new BScroll($(".contentWrapper")[0],{
			pullUpLoad:true,
			tap:true
		});
		scroll.on("pullingUp",()=>{
			new requestGoods();
		})
		//console.log(scroll);
	}
}
function requestGoods() {
	this.init();
}
requestGoods.prototype = {
	init() {
		this.handleGoods();
	},
	handleGoods() {
		$.ajax({
			type: "post",
			url: "/api/api/product/guessWhatYouLike",
			data: JSON.stringify({
					deviceid: "h5",
					extend: "/api/product/guessWhatYouLike",
					lang: "zh",
					os: "h5",
					param: JSON.stringify({
						pageindex:page++
						//pageindex:1
					}),
					sign: "17b58bf42695f18941751822cda4da10",
					version: "3.1.0"
				}

			),
			headers: {
				"content-type": "application/json"
			},
			success: $.proxy(this.success)
		})
	},
	success(data) {
		//console.log(data)
		scroll.finishPullUp();
		new Goods().handleGoods(data);
		
	}
}
export default {
	requestInfo,
	requestGoods
}
