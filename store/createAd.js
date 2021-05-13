export const state = () => ({
  isCreateAd: false
})

export const mutations = {
  changeIsCreateAd(state, newIsCreateAd) {
    state.isCreateAd = newIsCreateAd
  }
}

export const actions = {
  async createAd({commit}, formData) {
    const token = localStorage.getItem('token')
    try {
      const getMyAd = await this.$axios.$get('http://127.0.0.1:8000/api/ad/my_ads/', {
        headers: {'Authorization': 'Bearer ' + token}
      })
      if (!getMyAd.length) {
        const createAd = await this.$axios.$post('http://127.0.0.1:8000/api/ad/create', formData, {
          headers: {'Authorization': 'Bearer ' + token}
        })
        if (createAd.status === 'success') {
          commit('changeIsCreateAd', true)
        }
      } else {
        commit('changeIsCreateAd', false)
      }

    } catch (e) {
      console.log('error in createAd action in createAd.js', e)
    }
  }
}

export const getters = {
  isCreateAd(state) {
    return state.isCreateAd
  }
}
