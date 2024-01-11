const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    playingcards: [path.join(__dirname, "/src/main")],
    style: [path.join(__dirname, "/sass/main.scss")],
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/i,
        exclude: /node_modules/,
        type: "asset/resource",
        use: [
          {
            loader: "sass-loader",
          },
        ],
        generator: {
          filename: "style.css"
        }
      },
    ]
  },
  output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./html/cards.html",
      inject: "head",
      filename: "cards.html",
    }),
  ],
  resolve: {
      extensions: ['.ts']
  },
};
