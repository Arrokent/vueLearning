const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        // npm install --save-dev css-loader
        rules: [
            {
                // 正则表达式, 匹配所有.css文件
                test: /\.css$/,
                // css-loader只负责加载编译css
                // style-loader负责将css渲染到DOM
                use: ['style-loader', 'css-loader']
            },

            // the second module -- less
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },

            {
                test: /.vue$/,
                use: [{
                    loader: "vue-loader"
                }]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('最终版权归Chibiken所有'),
        new HtmlWebpackPlugin({
            template: 'index.html',
        })
    ]
}