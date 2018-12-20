const path = require('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
              test: /\.scss$/,
              use: [
                  // fallback to style-loader in development
                  process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                  "css-loader",
                  "sass-loader"
              ]
          },
          {
              test: /\.(pug|jade)$/, 
              loader: 'pug-loader'
          },
          {
            test: /\.(png|ttf)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]'
                }
              }
            ]
          },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './app/index.pug',
          inject: false
      }),
    ]
  };