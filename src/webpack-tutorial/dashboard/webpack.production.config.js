const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { ModuleFederationPlugin } = require("webpack").container

module.exports = {
  entry: {
    'dashboard': './src/dashboard.js'
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "http://localhost:9000/",
    // clean: {
    //   dry: true,
    //   keep: /\.css$/
    // }
  },
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 3000
    },
    runtimeChunk: 'single'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
    new CleanWebpackPlugin({
      // cleanOnceBeforeBuildPatterns: [
      //   '**/*',
      //   path.join(process.cwd(), 'build/**/*')
      // ]
    }),
    new HtmlWebpackPlugin({
      filename: 'dashboard.html',
      title: 'Dashboard',
      // minify: false
    }),
    new ModuleFederationPlugin({
      name: 'DashboardApp',
      remotes: {
        'HelloWorldApp': 'HelloWorldApp@http://localhost:9001/remoteEntry.js',
        'KiwiApp': 'KiwiApp@http://localhost:9003/remoteEntry.js',
      },
    })
  ],
}
