export const state = () => ({
  isAuth: false
})

export const mutations = {
  changeIsAuth(state, newIsAuth) {
    state.isAuth = newIsAuth
  }
}

export const actions = {
  async authorization({state, commit}, formData) {
    try {
      const authorization = await this.$axios.$post('http://127.0.0.1:8000/api/token/', formData).then((response) => {
        if (response.access) {
          localStorage.setItem('token', response.access)
          commit('changeIsAuth', true)
        } else {
          commit('changeIsAuth', false)
        }
      })
    } catch (e) {
      console.log('error in authorization action in authorization.js', e)
    }
  }
}

export const getters = {
  isAuth(state) {
    return state.isAuth
  }
}
