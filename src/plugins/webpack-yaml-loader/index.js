module.exports = function (context, options) {
  return {
    name: 'webpack-yaml-loader',
    configureWebpack(config, isServer, utils) {
      return {
        module: {
          rules: [
            {
              test: /\.yml$/,
              use: 'yaml-loader',
            },
          ],
        },
      };
    },
  };
};
