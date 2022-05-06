const outputConfig = {
  destPath: './dist',
};

/*
 * Entry points
 * https://webpack.js.org/concepts/entry-points/
 */
const entryConfig = ['./src/App.ts', './src/assets/stylesheets/app.scss'];

/*
 * Copy files from src to dist
 * https://webpack.js.org/plugins/copy-webpack-plugin/
 */

const copyPluginPatterns = {
  patterns: [
    { from: './src/assets/images', to: 'images' },
    { from: './src/assets/fonts', to: 'fonts' },
    { from: './src/assets/vendor', to: 'js' },
  ],
};

/*
 * Dev server setup
 * https://webpack.js.org/configuration/dev-server/
 */
const devServer = {
  // contentBase: outputConfig.destPath,
  port: 3000,
  open: true,
  hot: true,
  compress: true,
};

// SCSS compile
const scssConfig = {
  destFileName: 'css/app.min.css',
};

/*
 * Production terser config options
 * https://webpack.js.org/plugins/terser-webpack-plugin/#terseroptions
 */
const terserPluginConfig = {
  extractComments: false,
  terserOptions: {
    compress: {
      drop_console: true,
    },
  },
};

module.exports.copyPluginPatterns = copyPluginPatterns;
module.exports.entryConfig = entryConfig;
module.exports.scssConfig = scssConfig;
module.exports.devServer = devServer;
module.exports.terserPluginConfig = terserPluginConfig;
module.exports.outputConfig = outputConfig;
