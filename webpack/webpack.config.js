var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: './index.js',
    output: {
        filename :'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            //템플릿을 기반으로 빌드 결과물을 추가
            template: 'index.html',
        }),
    ],
}