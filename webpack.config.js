const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: './src/index.js',

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /fake.txt$/,
				use: [
					'html-loader',
					{
						loader: 'twing-loader',
						options: {
							environmentModulePath: 'twingEnv.js',
							renderContext: {
								foo: 'bar'
							}
						}
					},
					'./fake-loader',
				]

			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/fake.txt'
		})
	]
};
