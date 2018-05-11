const path = require('path');
// 快速创建html 模板  可以指定template
const HtmlWebpackPlugin = require('html-webpack-plugin');
//  可以用于清除文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin')
// vue-loader 新增插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 用于合并css文件  
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
var config = {
    entry: {
        app: './src/js/index.js'
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.(png|gif|jpg)$/,
            loader: 'file-loader'
        }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    mode: 'none',
    plugins: [
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({
            template: './src/views/index.html',
            minify: true
        }),
        new VueLoaderPlugin()
    ]
};
// 开发环境
if (process.env.NODE_ENV === 'development') {
    config = merge(config, {
        mode: 'development',
        module: {
            rules: [{
                test: /\.scss$/,
                // vue-loader 15版本关于模块方面的
                // 注意一定要写oneOf参数，不然默认全部都按模块化来处理了，不管style是否有module 属性!!!!!!
                oneOf: [{
                    // 加module 属性按照模块方式打包，
                    resourceQuery: /module/,
                    use: [
                        'vue-style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[path][name]---[local]---[hash:base64:5]'
                            }
                        },
                        'px2rem-loader?remUnit=40&remPrecision=8',
                        'sass-loader'
                    ]
                }, {
                    // 不加module 属性的style 正常打包
                    loader: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader'
                }]
                
            }]
        },
        devServer: {
            contentBase: path.resolve(__dirname, "dist"),
            compress: true,
            port: 9000
        }
    })
} else {
    // 生产环境
    config = merge(config, {
        mode: 'production',
        module: {
            rules: [{
                test: /\.scss$/,
                oneOf: [{
                    resourceQuery: /module/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'vue-style-loader',
                        use: 'css-loader?minimize=true&modules=true&localIdentName=[path][name]---[local]---[hash:base64:5]!px2rem-loader?remUnit=40&remPrecision=8!sass-loader'
                    })
                }, {
                    use: ExtractTextPlugin.extract({
                        fallback: 'vue-style-loader',
                        use: 'css-loader?minimize=true!px2rem-loader?remUnit=40&remPrecision=8!sass-loader'
                    })
                }]
                
            }]
        },
        plugins: [new ExtractTextPlugin('style.css', { ignoreOrder: true })]
    })
}
module.exports = config;