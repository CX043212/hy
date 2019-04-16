const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
//自动通过模板生成文件
//定义入口文件和出口文件
const PATH = {
	app:path.join(__dirname,"./src/js/main.js"),
	list:path.join(__dirname,"./src/js/list.js"),//多页面开发，配置多个入口文件
	order:path.join(__dirname,"./src/js/order.js"),
	common:path.join(__dirname,"./src/js/common.js"),
	utils:path.join(__dirname,"./src/js/utils.js"),
	build:path.join(__dirname,"./dist"),
		}
//下面是webpack的配置项
module.exports = {
	entry:{
		app:PATH.app,//与定义入口时一致
		list:PATH.list,
		order:PATH.order,
		common:PATH.common,
		utils:PATH.utils
	},
	output:{
		filename:"[name].js",//这样写的目的是使出口文件的名字与入口文件的名字一致
		path:PATH.build//与定义出口时一致
	},
	module:{
		//loader的配置项
		rules:[
			{
			test:/\.js$/,//匹配的是js文件
			use:{
				loader:"babel-loader",
				options:{
					presets:["@babel/env","@babel/react"],
					//将ES6的代码转化为ES5，遇到jsx语法的解析
				}
			}
		},
		{
			test:/\.(css|scss)$/,
			use:["style-loader","css-loader","sass-loader"]
		}
			]
	},
	plugins:[//在这个插件里大多都是构造函数
		new htmlWebpackPlugin({//生成html模板
			filename:"index.html",//这个文件必须传，生成的文件叫什么名字
		//	filename:"[hash].html",//可以这样写
			template:"./index.html",//这个文件必须传，用的模板文件
			title:"千峰教育",//参数配置
			chunks:["app","utils","common"]//当前页面所需要的js文件
		}),
		new htmlWebpackPlugin({
			filename:"list.html",
			template:"./list.html",
			title:"列表页",
			chunks:["list","utils","common"]
		}),
		new htmlWebpackPlugin({
			filename:"order.html",
			template:"./order.html",
			title:"订单页",
			chunks:["order","utils","common"]
		})
	],
// 	devServer:{
// 		proxy:{//跨域配置
// 			"/api":{//设置请求的路径//以api开头的地址都代理到target
// 				target:"http://www.shenduzhekou.com",//目标地址
// 				changeOrigin:true,//是否开启虚拟代理
// 				pathRewrite:{//配置页
// 					"^/api":""//连接起来将/api去除
// 				}
// 			}
// 		}
// 	},
	 devServer:{
	    //跨域配置
	    proxy:{
	        "/api":{
	            target:"http://www.shenduzhekou.com",//目标地址
	            changeOrigin:true,
	            pathRewrite:{
	                "^/api":""
	            }
	        }
	    }
	}
}
