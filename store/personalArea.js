export const state = () => ({})

export const mutations = {}

export const actions = {
  async updateMyData(_, {formData, id}) {
    const token = $nuxt.$cookies.get('token')

    try {
      const updateData = await this.$axios.$put(`${process.env.BASE_URL}/users/update/${id}/`, formData, {
        headers: {'Authorization': 'Bearer ' + token}
      })

      if (updateData.status === 'success') {
        await localStorage.setItem('myData', JSON.stringify([{
          id: updateData.data.id,
          old: updateData.data.birth_day,
          city: updateData.data.city,
          name: updateData.data.first_name,
          photo: updateData.data.photo,
          sex: updateData.data.sex
        }]))
        await $nuxt.$router.go(0)
        $nuxt.$message({
          message: `${updateData.message}`,
          type: 'success'
        })
      }
    } catch (e) {
      console.log('error in getMyData action in personalArea.js', e)
    }
  },
  async updateMyPassword(_, formDataPassword) {
    const token = $nuxt.$cookies.get('token')

    try {
      const updatePassword = await this.$axios.$put(`${process.env.BASE_URL}/users/auth/change-password`, formDataPassword, {
        headers: {'Authorization': 'Bearer ' + token}
      })

      if (updatePassword.status === 'success') {
        await $nuxt.$router.go(0)
        $nuxt.$message({
          message: `${updatePassword.message}`,
          type: 'success'
        })
      }
    } catch (error) {
      $nuxt.$message({
        message: `${error.response.data.message}`,
        type: 'error'
      })
    }
  }
}

export const getters = {}

