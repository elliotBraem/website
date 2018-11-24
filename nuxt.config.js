const pkg = require('./package')
const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')

/**
 * Checks if the source is a directory
 * @param {string}: source - file/folder to check
 * @return {boolean} True if directory, else false
 */
const isDirectory = source => lstatSync(source).isDirectory()

/**
 * Return the directories in .../'source'
 * @param {string}: source - folder to check
 * @return {array} The directories in .../'source'
 */
const directories = source =>
  readdirSync(source) // Read this directory
    .map(name => join(source, name)) // For all contents, create path 'source/name'
    .filter(isDirectory) // Check that content is a directory

/**
 * Return the files of type .md in source
 * @param {string}: source - file to check
 * @return {boolean} True if of type .md, else false
 */
const getMarkdown = source => source.filter(file => file.match(/.*\.(md)/gi))

/**
 * Returns the slug for the project
 * @param {string}: post - name of directory
 * @return {string} slug path
 */
const getSlugs = name => '/projects/${' + name + '}'

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
  plugins: [],

  /**
   * Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/markdownit
    '@nuxtjs/markdownit',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],

  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    // preset: 'default',
    linkify: true,
    // breaks: true,
    injected: true
    // use: [['markdown-it-container', containerName], 'markdown-it-attrs']
  },

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
    }
  }
}
