const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
// const webpack = require("webpack");

module.exports = {
  // activate development for quicker compile time stuff
  // mode: "development",
  mode: "production",
  // NOTE: entry always defaults to './src'
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    // NOTE: this might need to change for production build
    // and is needed for routing to work properly
    publicPath: "/",
  },
  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          // put your main libs to be cached in the testy thingy
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  devServer: {
    publicPath: "/",
    // content base was fuking up hot realoading
    // it was './src' before and now its 'src'
    // which i think fixed the issue
    contentBase: "src",
    hot: true,
    // needed for routing to work properly
    historyApiFallback: true,
    // NOTE: for some reason clientLogLevel=silent does not work here
    // but works with the command call lol
    // proxy
    proxy: {
      "/api/*": {
        target: "http://localhost:4000/",
        secure: "false",
      },
    },
  },
  // TODO: remove this and all unnecesary things from production webpack build
  // devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      pages: path.resolve(__dirname, "src/pages/"),
      utils: path.resolve(__dirname, "src/utils/"),
      redux_store: path.resolve(__dirname, "src/redux_store/"),
      styles: path.resolve(__dirname, "src/styles/"),
      icons: path.resolve(__dirname, "src/icons/"),
      mock: path.resolve(__dirname, "src/mock/"),
    },
    extensions: [".js", ".jsx"],
  },
  target: "web",
  plugins: [
    new CleanWebpackPlugin(),
    // new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
