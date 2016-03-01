// webpack.config.js
var path = require('path');

module.exports = {
    entry: {
        "index"  : "./src/js/index",
    },
    output: {
        //打包文件存放的绝对路径
        path: __dirname + '/dist/',
        //网站运行时的访问路径
        publicPath: "/src/",
        //打包后的文件名
        filename: '[name].js'
    },

    externals: {
        'react': 'React'
    },


    module: {
        loaders: [
            //.js 文件使用 es6处理
            { test: /\.js$/, loader: 'babel-loader',exclude: /(node_modules|bower_components)/,query: {
                presets: ['es2015','react']
            }},
            //.css 文件使用 style-loader 和 css-loader 来处理
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },

    //开发模式
    devtool: '#source-map',
    //devtool: '#inline-source-map',

    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.scss']
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        //alias: alias
    }
};