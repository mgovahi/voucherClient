const path = require(`path`);
const alias = require(`./aliases`);
const { aliasWebpack } = require("react-app-alias");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const SRC = `./src`;
const aliases = alias(SRC);

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [
    key,
    path.resolve(__dirname, value),
  ])
);

const options = {
  alias: resolvedAliases,
};

module.exports = function override(config) {
  config.ignoreWarnings = [{ message: /Failed to parse source map/ }];
  //const appName = process.argv[2] || "generic";

  config.plugins = [
    ...config.plugins,
    // new webpack.DefinePlugin({
    //   APP_NAME: JSON.stringify(appName),

    // }),
    // new CopyPlugin({
    //   patterns: [
    //     { from: "public/assets/images/" + appName + "/favicon.ico", to: "./favicon.ico" },
    //     { from: "public/assets/images/" + appName, to: "assets/images/logo" },
    //   ],
    // }),
  ];
  config.cache = {
    type: "filesystem",
    buildDependencies: {
      // This makes all dependencies of this file - build dependencies
      config: ["useGridVirtualScroller.js"],

      // By default webpack and loaders are build dependencies
    },
  };
  return aliasWebpack(options)(config);
};
