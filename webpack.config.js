const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        { loader: "style-loader" }, // creates style nodes from JS strings
        { loader: "css-loader"  }, // translates CSS into CommonJS
        { loader: "sass-loader" } // compiles Sass to CSS
      ]
    }, {
      test: /\.jsx?$/,
      exclude: [ /node_modules/ ],
      loader: 'babel-loader'
    }]
  },
  plugins: [HtmlWebpackPluginConfig]
};
