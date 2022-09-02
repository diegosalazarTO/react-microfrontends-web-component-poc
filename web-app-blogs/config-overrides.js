const webpack = require("webpack");
const getClientEnvironment = require("./config/env");

const paths = require("./config/paths");
const publicPath = paths.servedPath;
const publicUrl = publicPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);

module.exports = {
  webpack: (config) => {
    config.optimization.runtimeChunk = false;
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    };

    config.output.filename = "static/js/[name].js";

    config.plugins[5].options.filename = "static/css/[name].css";
    config.plugins[5].options.moduleFilename = () => "static/css/main.css";

    config.plugins.push(new webpack.DefinePlugin(env.stringified));

    return config;
  },
};
