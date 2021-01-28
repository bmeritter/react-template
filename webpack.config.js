'use strict';
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let config = {
	entry: "./src/index.tsx",
	devtool: 'inline-source-map',
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/"
	},
	performance: { hints: false},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: 'ts-loader',
			},
			{
				test: /\.(le|c)ss$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: "less-loader" },
					{
						loader: "postcss-loader",
						options: { sourceMap: true }
					},
				]
			}
		]
	},
	resolve: {
		extensions: [ '.ts', '.tsx', '.js' ],
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html"
		})
	]
};

module.exports = config;
