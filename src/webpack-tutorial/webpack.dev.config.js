const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
    // clean: {
    //   dry: true,
    //   keep: /\.css$/
    // }
  },
  mode: "development",
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
          'style-loader', 'css-loader'
        ]
      },
      {
        test:/\.scss$/,
        use:[
          'style-loader', 'css-loader', 'sass-loader'
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
    new CleanWebpackPlugin({
      // cleanOnceBeforeBuildPatterns: [
      //   '**/*',
      //   path.join(process.cwd(), 'build/**/*')
      // ]
    }),
    new HtmlWebpackPlugin({
      title: 'Hello World',
      description: 'Some description',
      template: './src/index.hbs'
    })
  ],
};
