export const state = () => ({})

export const mutations = {}

export const actions = {
  async createStepOne(_, formData) {
    try {
      const createStepOne = await this.$axios.$post('http://127.0.0.1:8000/api/users/auth/signup', formData, {
        headers: {'Content-Type': 'application/json'}
      }).then((response) => {
        if (response.status === 'success') {
          localStorage.setItem('email', response.email)
        }
      })
    } catch (e) {
      console.log('error in createStepOne', e)
    }
  },
  async createStepThree(_, formData) {
    try {
      const createStepThree = await this.$axios.$post('http://127.0.0.1:8000/api/users/auth/verify-code', formData).then((response) => {
        console.log('response:', response)
      })
    } catch (e) {
      console.log('error in createStepThree', e)
    }
  }
}

export const getters = {}
