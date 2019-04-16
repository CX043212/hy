function Goods(){
	this.el = $("#goods");
}
Goods.prototype = {
	handleGoods(data){
		var str = "";
		for(var i = 0;i < data.data.list.length;i++){
			str += `
				<div class = "goodsItems">
					<div class = "goodsImg"><img src=${data.data.list[i].mainpic}></div>
					<div class = "goodsName">${data.data.list[i].name}</div>
					<div class = "goodsPrice">¥${data.data.list[i].saleprice}</div>
					<div class = "goodsPay">${data.data.list[i].sumcount}<span>人付款</span></div>
				</div>
			`
			}
			str+="<h2>加载更多</h2>"
		this.el.append(str);
	}
	
}
export default Goods;