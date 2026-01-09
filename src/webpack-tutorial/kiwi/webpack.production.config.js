const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { ModuleFederationPlugin } = require("webpack").container

module.exports = {
  entry: {
    'kiwi': './src/kiwi.js'
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "http://localhost:9002/",
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
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024 // 8kb
          }
        }
      },
      {
        test: /\.txt$/,
        type: "asset/source"
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ]
      },
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
      {
        test: /\.hbs$/,
        use: {
          loader: 'handlebars-loader'
        }
      }
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
      filename: 'kiwi.html',
      chunks: ['kiwi'],
      title: 'Kiwi',
      template: './src/page-template.hbs',
      description: 'Kiwi',
      // minify: false
    }),
    new ModuleFederationPlugin({
      name: 'KiwiApp',
      filename: 'remoteEntry.js',
      // remotes: {
      //   'HelloWorldApp': 'HelloWorldApp@http://localhost:9001/remoteEntry.js'
      // },
      exposes: {
        './KiwiPage': './src/components/kiwi-page/kiwi-page.js'
      }
    })
  ],
}
