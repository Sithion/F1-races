/* eslint-disable no-useless-computed-key */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = env => ({
	mode: 'development',
	entry: [
		'babel-polyfill',
		path.join(__dirname, 'src/index.js'),
	],
	resolve: {
		alias: {
			['@actions']: path.resolve(__dirname, 'src/actions/'),
			['@sagas']: path.resolve(__dirname, 'src/sagas/'),
			['@reducers']: path.resolve(__dirname, 'src/reducers/'),
			['@components']: path.resolve(__dirname, 'src/components/'),
		},
	},
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
			'process.env.dev': JSON.stringify(env && env.dev)
		})
	],
	module: {
		rules: [
			{
				test: /\.js?$/,
				include: [
					path.resolve(__dirname, 'src'),
				],
				loader: 'babel-loader',
				options: {
					presets: [
						'stage-2',
						'react',
					],
					cacheDirectory: true,
					plugins: ['react-hot-loader/babel'],
				},
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
