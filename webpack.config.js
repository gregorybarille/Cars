module.exports = {
	mode: 'development',
	devtool: "source-map",
	entry: __dirname + '/src/components/index.jsx',
	module: {
		rules: [
		{
			test: [/\.(js|jsx)$/],
		exclude: /node_modules/,
		use:[ {loader: 'babel-loader'}]
		}
		]
	},
	output:{
		filename: 'build.js',
		path: __dirname + '/src/build'
}
};
