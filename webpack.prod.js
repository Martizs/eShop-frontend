const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  // activate development for quicker compile time stuff
  // NOTE: there are source map errors for some node modules
  // when running/serving in development mode
  mode: "development",
  // mode: "production",
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
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // TODO: still getting uncaught style errors from
        // vendor js so gonna try to comment this again
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
    new Dotenv({
      path: "./.env",
      safe: true,
    }),
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
