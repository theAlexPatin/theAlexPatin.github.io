// vue.config.js

module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "src/style/abstracts/_index.sass"`,
      },
    },
  },
  runtimeCompiler: true,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    overlay: true,
    watchOptions: {
      // aggregateTimeout: 300,
      // poll: true,
    },
  },
}
