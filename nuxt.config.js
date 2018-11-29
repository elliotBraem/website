const pkg = require('./package')
const { directories, getSlugs } = require('./server/projects')
// const routerBase =
//   process.env.DEPLOY_ENV === 'GH_PAGES'
//     ? {
//         router: {
//           base: '/website/'
//         }
//       }
//     : {}
// const md = require('markdown-it')()

module.exports = {
  mode: 'universal',

  /**
   * Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /**
   * Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /**
   * Global CSS
   */
  css: [],

  /**
   * Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/font-awesome', ssr: false }],

  /**
   * Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/markdownit
    // '@nuxtjs/markdownit',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://github.com/vanhoofmaarten/nuxt-mq
    'nuxt-mq'
  ],
  mq: {
    defaultBreakpoint: 'default',
    breakpoints: {
      sm: 450,
      md: 1250,
      lg: Infinity
    }
  },

  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  // markdownit: {
  //   // preset: 'default',
  //   linkify: true,
  //   // breaks: true,
  //   injected: true
  //   // use: [['markdown-it-container', containerName], 'markdown-it-attrs']
  // },
  /**
   * Generate configuration
   * Creates routes for project files
   */
  generate: {
    /**
     * Routes set to slugs for each directory in /project's markdown file
     */
    routes: directories('./assets/projects').map(getSlugs)
  },

  /**
   * Build configuration
   */
  build: {
    /**
     * You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.node = {
        fs: 'empty'
      }
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader'
        // options: {
        //   markdown: body => {
        //     return md.render(body)
        //   }
        // }
      })
    }
  }
}
