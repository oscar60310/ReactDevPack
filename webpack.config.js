var debug = process.env.NODE_ENV != "production";
var webpack = require('webpack');
var HotMiddleWareConfig = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'
console.log('dubug', debug);
module.exports = {
  context: __dirname,
  entry: (!debug) ? ['./client/client.js'] : [
    HotMiddleWareConfig,
    './client/client.js'
  ],
  output: {
    path: __dirname + '/server/public',
    publicPath: 'http://127.0.0.1:1337/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: [],
        }
      },
      {
        test: /\.(html)$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  devtool: '#source-map',
  plugins: (debug) ? [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ] : [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      })
    ],
};