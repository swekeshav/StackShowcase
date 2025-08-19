const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "dist/"
  },
  mode: "none",
  module:{
    rules:[
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser:{
          dataUrlCondition:{
            maxSize: 8 * 1024 // 8kb
          }
        }
      },
      {
        test: /\.txt$/,
        type: "asset/source"
      },
      {
        test:/\.css$/,
        use:[
          MiniCssExtractPlugin.loader, 'css-loader'
        ]
      },
      {
        test:/\.scss$/,
        use:[
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
      }
    ]
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles.css"
    })
  ],
};
