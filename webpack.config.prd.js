var webpack=require('webpack');
var path=require('path');

var BUILD_PATH = path.resolve(__dirname + '/build');
var APP_PATH = path.resolve(__dirname + '/src');

var config = {
	entry : APP_PATH + '/app.js',
	output:{
		path : BUILD_PATH,
		filename : 'bundle.js',
		publicPath : '/'
	}
	,module:{
		loaders:[
			{
				test: /\.jsx?/
				,include: APP_PATH
				,loader : 'babel'
				,query:{
					presets:["es2015","react"]
				}
			}
		]
	}
	,plugins:[
		new webpack.optimize.UglifyJsPlugin({minimize:true})
	]
}

module.exports = config