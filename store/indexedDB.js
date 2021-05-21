import api from '@/api/indexedDb.js'

export const state = () => ({
  element: [],
})

export const mutations = {
  SET_ELEMENT(state, element) {
    state.element = element
  }
}

export const actions = {
  addElementToDb({commit}, {element, key}) {
    return api.createElement({element, key})
  },
  async getElementFromDb({commit}, key) {
    let element = await api.getElement(key)
    commit('SET_ELEMENT', element)
  },
  deleteBookFromDb({commit}, key) {
    return api.deleteElement(key)
  }
}
