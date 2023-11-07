
module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/home/'
    : '/',
  indexPath: 'index.html',
  assetsDir: '',
  transpileDependencies: true,


  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [],
    },
  },
};
