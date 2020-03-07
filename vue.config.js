module.exports = {
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
