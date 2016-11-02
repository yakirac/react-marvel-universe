var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry : [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, '/src/index.js')
  ],
  output : {
    filename 	 : 'app.bundle.js',
    path 		   : path.join(__dirname, '/dist'),
    publicPath : '/'
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $     : "jquery",
      jQuery  : "jquery"
    })
  ],
  module : {
  	loaders : [{
  		test 	  : /\.html$/,
  		loader 	: 'file?name=[name].[ext]'
  	},
  	{
  		test 	  : /\.js$/,
      exclude : /node_modules/,
      loaders : ['babel-loader']
  	},
    {
      test    : /\.css$/,
      loader  : 'style-loader!css-loader'
    },
    {
      test    : /\.(otf|eot|svg|ttf|woff|woff2)$/,
      loader  : 'url-loader'
    }]
  }
};