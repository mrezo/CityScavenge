var webpack = require('webpack');
var ip = require('ip').address();

module.exports = {
  entry: [
    './client/index.js',
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel',
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: __dirname + '/client',
    publicPath: 'http://' + ip + ':8080/',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  // externals: {
  //   "jquery": "$"
  // },
  devServer: {
    contentBase: 'client/',
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
