export const state = () => ({})

export const mutations = {}

export const actions = {
  async updateMyData(_, formData) {
    console.log('formDataInAction', formData)
    const token = localStorage.getItem('token')

    try {
      const updateData = await this.$axios.put(`http://127.0.0.1:8000/api/users/update/${formData.id}/`, formData, {
        headers: {'Authorization': 'Bearer ' + token}
      })
      console.log('updateData', updateData)
    } catch (e) {
      console.log('error in getMyData action in personalArea.js', e)
    }
  }
}

export const getters = {}

