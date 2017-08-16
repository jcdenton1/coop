var path = require("path");
var webpack = require("webpack");

var DIST_DIR = path.resolve(__dirname, "publicdist");
var SRC_DIR = path.resolve(__dirname, "public");

var setupDomainUrl = function() {
  switch(process.env.NODE_ENV) {
    case 'prod':
      return "";
    case 'dev':
    default:
      return "'http://admin:8080'";
  }
};

var config = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/"
  },
  plugins: [
    new webpack.DefinePlugin({
      DOMAIN_URL: setupDomainUrl()
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-2"]
        }
      }
    ]
  }
};

module.exports = config;