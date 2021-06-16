export const state = () => ({})

export const mutations = {}

export const actions = {
  async createStepOne(_, {formData, stepOneIsReg}) {
    try {
      const createStepOne = await this.$axios.$post(`${process.env.BASE_URL}/users/auth/signup`, formData, {
        headers: {'Content-Type': 'application/json'}
      })

      if (createStepOne.status === 'success') {
        await $nuxt.$router.push(`/signup/s2?stepOneIsReg=${stepOneIsReg}`)
        $nuxt.$message({
          message: 'Первый шаг регистрации пройден',
          type: 'success'
        })
      }

    } catch (error) {
      $nuxt.$message({
        message: `${error.response.data.message}`,
        type: 'error'
      })
    }
  },
  async createStepThree(_, {formData, stepThreeIsReg}) {
    try {
      const createStepThree = await this.$axios.$post(`${process.env.BASE_URL}/users/auth/verify-code`, formData)
      if (createStepThree.status === 'success') {
        await $nuxt.$router.push(`/signup/s4?stepThreeIsReg=${stepThreeIsReg}`)
        $nuxt.$message({
          message: `${createStepThree.message}`,
          type: 'success'
        })
        setTimeout(() => {
          $nuxt.$message({
            message: 'Третий шаг регистрации пройден',
            type: 'success'
          })
        }, 1500)
      }
    } catch (error) {
      if (error.response.data.message !== undefined) {
        console.log('error', error.response)
        $nuxt.$message({
          message: `${error.response.data.message}`,
          type: 'error'
        })
      } else {
        $nuxt.$message({
          message: 'Код должен состоять только из цифр',
          type: 'error'
        })
      }
    }
  },

}

export const getters = {}
