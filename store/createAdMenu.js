export const state = () => ({})

export const mutations = {}

export const actions = {
  async deleteAd(_, idAd) {
    const token = $nuxt.$cookies.get('token')

    try {
      const deleteAd = await this.$axios.$delete(`${process.env.BASE_URL}/ad/remove/${idAd}`, {
        headers: {'Authorization': 'Bearer ' + token}
      })
      if (deleteAd.status === 'success') {
        $nuxt.$message({
          message: `${deleteAd.message}`,
          type: 'success'
        })
        setTimeout(() => {
          $nuxt.$router.go(0)
        }, 1000)
      }
      console.log('deleteAd:', deleteAd)
    } catch (e) {
      console.log('error in deleteAd action in createAdMenu.js', e)
    }
  }
}

export const getters = {}
