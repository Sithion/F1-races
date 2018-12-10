/* eslint-disable no-useless-computed-key */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
    mode: 'development',
    entry: [
        '@babel/polyfill',
        path.join(__dirname, 'src/index.js'),
    ],
    devtool: 'eval-source-map',
    target: 'web',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: 'body',
            filename: 'index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.dev': JSON.stringify(env && env.dev),
        }),
    ],
    module: {
        rules: [
            {
                test: /^(?!.*test\.js).*\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css|\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/,
                loader: 'file-loader',
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                }],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/',
    },
    devServer: {
        contentBase: path.join(__dirname, '/public'),
        historyApiFallback: true,
        hot: true,
        https: false,
        port: 3000,
        noInfo: true,
        stats: 'errors-only',
    },
});
