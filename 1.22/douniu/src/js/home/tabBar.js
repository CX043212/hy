import BScroll from 'better-scroll';
// import $ from "zepto";
function TabBar(){
	this.content = $("#mh-tabs>.tabWrapper>.content");
}
TabBar.prototype={
	handleBar(data){
		var div = $("<div class='mh-t'></div>");
		var str = "";
		for(var i = 0;i < data.data.tabs.length;i++){
			str += `
			<li>${i!= 1?data.data.tabs[i].channelname:`<img src=${data.data.tabs[i].channelimg}>`}</li>
			`
		}
		div.append(str);
		this.content.append(div);	
		new BScroll($('.tabWrapper')[0],{
			scrollX:true,
			tap:true
		});
		//console.log(scroll);
		this.handleBarClick($(".mh-t>li"));//调用
	},
	handleBarClick(taba){
	//	console.log(2)
		taba.on("tap",$.proxy(this.handleBarClickSuc,this));
	},
	handleBarClickSuc(){
		alert(1);
	}
}
export default TabBar;