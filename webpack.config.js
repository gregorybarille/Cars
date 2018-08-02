module.exports = {
	mode: 'development',
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
		filename: 'transformed.js',
		path: __dirname + '/src/build'
}
};
