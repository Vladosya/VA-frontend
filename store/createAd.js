export const state = () => ({})

export const mutations = {}

export const actions = {
  async createAd(_, formData) {
    const token = $nuxt.$cookies.get('token')
    try {
      const getMyAd = await this.$axios.$get(`${process.env.BASE_URL}/ad/my_ads/`, {
        headers: {'Authorization': 'Bearer ' + token}
      })
      if (!getMyAd.length) {
        const createAd = await this.$axios.$post(`${process.env.BASE_URL}/ad/create`, formData, {
          headers: {'Authorization': 'Bearer ' + token}
        })
        if (createAd.status === 'success') {
          await $nuxt.$router.push('/home')
          $nuxt.$message({
            message: `${createAd.message}`,
            type: 'success'
          })
          setTimeout(() => {
            $nuxt.$message('Для того, чтобы создать новое объявление удалите предыдущее')
          }, 1500)
        }
      } else {
        $nuxt.$message({
          message: 'У вас уже есть созданное объявление.',
          type: 'warning'
        })
      }

    } catch (e) {
      console.log('error in createAd action in createAd.js', e)
    }
  }
}

export const getters = {}
