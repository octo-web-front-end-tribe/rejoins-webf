module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/rejoins-webf/' : '/',
  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
        wrapper: 'article'
      })
  }
}
