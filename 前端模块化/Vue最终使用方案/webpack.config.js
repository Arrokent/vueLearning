const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // 所有url都会拼接这个字符串
        publicPath: 'dist/'
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
}