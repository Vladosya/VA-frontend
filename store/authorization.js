export const state = () => ({
  isAuth: false
})

export const mutations = {
  changeIsAuth(state, newIsAuth) {
    console.log('newIsAuth', newIsAuth)
    state.isAuth = newIsAuth
  }
}

export const actions = {
  async authorization({state, commit}, formData) {
    console.log('state.isAuth', state.isAuth)
    console.log('formData', formData)
    try {
      const authorization = await this.$axios.$post('http://127.0.0.1:8000/api/token/', formData).then((response) => {
        if (response.refresh) {
          localStorage.setItem('token', response.refresh)
          commit('changeIsAuth', true)
        } else {
          commit('changeIsAuth', false)
        }
      })
    } catch (e) {
      console.log('error in Action authorization', e)
    }
  }
}

export const getters = {
  isAuth(state) {
    return state.isAuth
  }
}
