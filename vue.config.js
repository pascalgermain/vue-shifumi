const productionMode = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: productionMode ? '/vue-shifumi' : '/',
  productionSourceMap: false,

  css: {
    requireModuleExtension: true,
    loaderOptions: {
      css: {
        modules: productionMode ? { localIdentName: '[hash:base64:5]' } : {},
      },
    },
  },

  chainWebpack: config => {
    ;['vue-modules', 'vue', 'normal-modules', 'normal'].forEach(type =>
      config.module
        .rule('scss')
        .oneOf(type)
        .use('style-resource')
        .loader('style-resources-loader')
        .options({ patterns: ['src/styles/variables.scss'] }),
    )

    config.plugin('html').tap(args => {
      args[0].title = 'Vue Shifumi'
      return args
    })
  },
}
