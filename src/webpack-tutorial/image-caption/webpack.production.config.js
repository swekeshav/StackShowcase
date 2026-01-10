const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { ModuleFederationPlugin } = require("webpack").container

module.exports = {
  entry: {
    'image-caption': './src/image-caption.js'
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "http://localhost:9003/",
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
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ]
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
      filename: 'image-caption.html',
      title: 'Image Caption',
      description: 'Image Caption',
      template: 'src/page-template.hbs'
    }),
    new ModuleFederationPlugin({
      name: 'ImageCaptionApp',
      filename: 'remoteEntry.js',
      exposes: {
        './ImageCaption': './src/components/image-caption/image-caption.js',
      },
    })
  ],
}
