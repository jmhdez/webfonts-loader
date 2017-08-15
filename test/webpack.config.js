const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/app.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(svg|woff|eot|ttf|woff2)/,
        use: 'file-loader?name=app.[name].[hash].[ext]'
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract({
          use: [
            'css-loader'
          ]
        })
      },
      {
        test: /\.font\.js/,
        loader: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            require.resolve('../')
          ]
        })
      },
    ]
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    https: true,
    inline: true,
    port: '8080'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new ExtractTextPlugin({
      filename: 'app.bundle.[contenthash].css',
      allChunks: true
    })
  ]
};
