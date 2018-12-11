/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: './src/index.js',

  mode: 'production',

  output: {
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].js'
  },

  optimization: {
    runtimeChunk: true,
    moduleIds: 'hashed',
    splitChunks: {
        chunks: "all",
        minSize: 30000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "initial" // 只打包初始时依赖的第三方
        },
        commons: {
          minSize: 0,
          test: require.resolve("./src/common/index.js"), // 可自定义拓展你的规则
          minChunks: 1, // 最小共用次数
          enforce: true,
          reuseExistingChunk: true
      },
         module1: {
             test: require.resolve("./src/module-1/index.js"), // 可自定义拓展你的规则
             minChunks: 1, // 最小共用次数
             minSize: 0,
             enforce: true,
             reuseExistingChunk: true
         },
         module2: {
             test: require.resolve("./src/module-2/index.js"), // 可自定义拓展你的规则
             minChunks: 1, // 最小共用次数
             minSize: 0,
             enforce: true,
             reuseExistingChunk: true
         },
      }
    }
  },
}
