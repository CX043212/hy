import "../common/css/reset.css";
import "../common/js/flexble.js";
import "../css/home/index.css";
// import "./home/banner.js";
import request from "../api/api";
function Page(){
	this.init();
}
Page.prototype = {
	init(){
		this.handlePage();
	},
	handlePage(){
		//new Banner();
		this.Info = new request.requestInfo();
		this.goods = new request.requestGoods();
	}
}
new Page();