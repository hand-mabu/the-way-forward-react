const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // 入口文件
  entry: {
    vendor: [
      "react",
      "react-dom",
      "antd",
    ],
    app: [
      path.resolve(__dirname, "./src/index.js")
    ]
  },
  // webpack 打包后出口文件
  output: {
    filename: 'app.js', // 打包后js文件名
    path: path.resolve(__dirname, 'dist') // 打包后自动输出目录
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:
        {
          presets: ["env", "react"],
          plugins: [
            ["import", { libraryName: "antd", style: 'css' }] // antd按需加载
          ]
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['url-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['url-loader']
      },

    ]
  },
  plugins: [
    // 配置plugin
    new HtmlWebpackPlugin({
      title: 'production',
      template: './index.html'
    }),
    // hot 检测文件改动替换plugin
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  // webpack-dev-server 配置
  devServer: {
    contentBase: './dist',
    hot: true
  },
};