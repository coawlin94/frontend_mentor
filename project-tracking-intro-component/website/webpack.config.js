const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist')
    },
    module:{
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.scss$/,
                use:[
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader'}, 
                    {loader: 'postcss-loader'},
                    {loader: 'resolve-url-loader'}, 
                    {loader: 'sass-loader'}
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            meta: {
                "charset": "UTF-8",
                "viewport": "width=device-width, initial-scale=1.0",
                "author": "Coaw Lin"
            }
        }),

        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
  
}