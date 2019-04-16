// const path = require("path");
// const htmlWebpackPlugin = require("html-webpack-plugin");
// const PATH = {
//     app:path.join(__dirname,"./src/js/main.js"),
//     build:path.join(__dirname,"./dist")
// }
// module.exports = {
//     entry:{
//         app:PATH.app
//     },
//     output:{
//         filename:"[name].js",
//         path:PATH.build
//     },
//     module:{
//         rules:[
//             {   
//                 test:/\.js$/,
//                 use:{
//                     loader:"babel-loader",
//                     options:{
//                         presets:["@babel/env","@babel/react"]
//                     }
//                 }
//             },
//             {
//                 test:/\.(css|scss)$/,
//                 use:["style-loader","css-loader","sass-loader"]
//             }
// 
//         ]
//     },
//     plugins:[
//         new htmlWebpackPlugin({
//             filename:"index.html",
//             template:"./index.html",
//             title:"斗牛",
//             chunks:["app"]
//         }),
//     ],
//     devServer:{
//         proxy:{
//             "/api":{
//                 target:"https://mapi.eyee.com/",
//                 changeOrigin:true,
//                 pathRewrite:{
//                     "^/api":""
//                 }
//             }
//         }
//     }
// }
// 
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

//定义入库文件和出口文件路径
const PATH = {
    app:path.join(__dirname,"./src/js/main.js"),
    build:path.join(__dirname,"./dist")
}
///https://mapi.eyee.com/api/product/guessWhatYouLike
//以下是webpack的配置项
module.exports = {
    entry:{
        app:PATH.app,
    },
    output:{
        filename:"[name].js",
        path:PATH.build
    },
    module:{
        //loader的配置项
        rules:[
            {   
                //匹配.js文件
                test:/\.js$/,
                use:{
                    //遇到js文件用babell-loader处理
                    loader:"babel-loader",
                    options:{
                        //将ES6的代码转成ES5   遇到jsx语法的解析
                        presets:["@babel/env","@babel/react"]
                    }
                }
            },
            {
                test:/\.(css|scss)$/,
                use:["style-loader","css-loader","sass-loader"]
            },

　　　　　　{
　　　　　　　　test: require.resolve('zepto'),
　　　　　　　　loader: 'exports-loader?window.Zepto!script-loader'
　　　　　　}
        ]
    },
    //插件
    plugins:[
        //html模板
        new htmlWebpackPlugin({
            filename:"index.html",
            template:"./index.html",
            title:"斗牛",
            chunks:["app"]
        })
        
    ],
    devServer:{
        //跨域配置
        proxy:{
            "/api":{
                target:"https://mapi.eyee.com",//目标地址
                changeOrigin:true,
                pathRewrite:{
                    "^/api":""
                }
            }
        }
    }
}