const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


let config = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_module/,
				use: 'babel-loader'
			},
			{
				test: /\.(le|c)ss$/,
				use: [
					{ loader: 'style-loader' },
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
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
}

module.exports = config;
