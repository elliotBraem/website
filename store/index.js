import Vuex from 'vuex'
const { directories, getMarkdown } = require('~/server/projects')

const mdFiles = {}

const importAll = resolve => {
  resolve.keys().forEach(key => {
    mdFiles[key] = resolve(key)
  })
}
importAll(require.context('~/assets/projects', true, /\.md$/))

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      projects: mdFiles
    })
  })
}

export default createStore
