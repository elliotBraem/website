import Vuex from 'vuex'
const { directories } = require('~/server/projects')

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      mdFiles: directories('./assets/projects')
    })
  })
}

export default createStore
