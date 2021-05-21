export const state = () => ({
  isAuth: false
})

export const mutations = {
  changeIsAuth(state, newIsAuth) {
    state.isAuth = newIsAuth
  }
}

export const actions = {
  async authorization({state, commit, dispatch}, formData) {
    try {
      const authorization = await this.$axios.$post('http://127.0.0.1:8000/api/token/', formData)
      if (authorization.access) {
        localStorage.setItem('token', authorization.access)
        commit('changeIsAuth', true)
      }

      if (state.isAuth === true) {
        dispatch('getMyData')
        $nuxt.$notify({
          title: 'Успех Авторизации',
          message: 'Авторизация прошла успешно',
          type: 'success'
        })
        await $nuxt.$router.push('/home')
      } else {
        $nuxt.$notify.error({
          title: 'Ошибка авторизации',
          message: 'Неправильный логин или пароль'
        })
      }
    } catch (e) {
      $nuxt.$notify.error({
        title: 'Ошибка авторизации',
        message: 'Неправильный логин или пароль'
      })
      console.log('error in authorization action in authorization.js', e.response)
    }
  },
  async goOut({commit}) {
    commit('changeIsAuth', false)
    localStorage.removeItem('token')
    localStorage.removeItem('myData')
  },
  async getMyData() {
    const token = localStorage.getItem('token')
    try {
      const data = await this.$axios.$get('http://127.0.0.1:8000/api/users/me/', {
        headers: {'Authorization': 'Bearer ' + token}
      })

      if (data.length) {
        const myData = data.map((d) => {
          return {
            id: d.id,
            old: d.birth_day,
            city: d.city,
            name: d.first_name,
            password: d.password,
            photo: d.photo,
            sex: d.sex
          }
        })

        localStorage.setItem('myData', JSON.stringify(myData))
      }
    } catch (e) {
      console.log('error in getMyData action in authorization.js', e)
    }
  }
}

export const getters = {
  isAuth(state) {
    return state.isAuth
  }
}
