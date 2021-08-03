'use strict';
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let config = {
	entry: "./src/index.tsx",
	devtool: process.env.NODE_ENV === "production" ? "hidden-source-map" : "eval-cheap-source-map",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/"
	},
	performance: { hints: false },
	stats: { chunks: true },
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: 'ts-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [ "babel-loader" ]
			},
		]
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
		mainFields: ['jsnext:main', 'browser', 'main']
	},
	devServer: {
		historyApiFallback: true,
	},
	optimization: {
		minimize: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
			filename: 'index.html',
			inject: 'body'
		})
	]
};

module.exports = config;
