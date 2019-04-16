function Ads(){
	this.content = $("#ads");
}
Ads.prototype = {
	handleAds(data){
		var ad = `<div class = "ad"><img src = ${data.data.presets[0].imgurl}></div>`;
		var str = "";
		data.data.others.forEach((item)=>{
				str += `<div class="mh-enters">
				<img src = ${item.bottompic}>
				</div>`
		})
		var mhEnters = `<div class="flex-wrap">
			${str}
		</div>`;
		var ad2 = `<div class="ad2"><img src=${data.data.presets[1].imgurl}></div>`
		//console.log(data.data.presets[0].imgurl);
		this.content.append(ad,mhEnters,ad2);
	}
}
export default Ads;