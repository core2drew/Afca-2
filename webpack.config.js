var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('../css/style.css');

const SRC = path.resolve(__dirname, './src');
const DIST = path.resolve(__dirname, './dist');

module.exports = {
    entry: SRC + '/js/index.js',
    output: {
        filename: 'bundle.js',
        path: DIST + '/js',
    },
    devServer: {
        port: 8000,
        contentBase: DIST,
        historyApiFallback: true
    },
    resolve: {
        alias:{
            less: SRC + '/less'
        }
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets:['es2015','react','stage-2']
                }
            }]
        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract(['css-loader','less-loader'])
        },{
            test: /\.css$/,
            use: ExtractTextPlugin.extract(['css-loader'])
        }, {
            test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader?name=../font/[name].[ext]'
        }]
    },
    plugins: [
        extractCSS
    ]
}