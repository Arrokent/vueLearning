const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    // first install css loader
    // npm install --save-dev css-loader

    // then copy this config module
    module: {
        rules: [
            {
                // 正则表达式, 匹配所有.css文件
                test: /\.css$/,
                // css-loader只负责加载编译css
                // style-loader负责将css渲染到DOM
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
}
