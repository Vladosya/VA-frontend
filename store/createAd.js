export const state = () => ({})

export const mutations = {}

export const actions = {
  async createAd(_, formData) {
    const token = $nuxt.$cookies.get('token')
    try {
      const getMyAd = await this.$axios.$get('http://127.0.0.1:8000/api/ad/my_ads/', {
        headers: {'Authorization': 'Bearer ' + token}
      })
      if (!getMyAd.length) {
        const createAd = await this.$axios.$post('http://127.0.0.1:8000/api/ad/create', formData, {
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
