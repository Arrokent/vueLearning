// use npm init use build the package.json first

// 通过commonjs语法, 导入了node全局的一个包-path
const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        // path包的一个函数，拼接当前文件的路径和目标文件名-dist
        // 生成符合要求的绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}

// and then, use command -- webpack

// in package.json
// the script is the 脚本
// for examples: use command -- npm run test
// the script 'test' in package.json will run
// and the build script will use local webpack(maybe different version) first

// use this command to install local webpack
// npm install webpack@3.6.0 --save-dev