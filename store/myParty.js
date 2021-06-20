export const state = () => ({
  myAd: [],
  haveAd: false
})

export const mutations = {
  getAd(state, payload) {
    state.myAd = payload
  },
  haveAdvert(state, payload) {
    state.haveAd = payload
  },
  changeEditableByIndex(state, {index, value}) {
    state.myAd[index].editable = value
  },
  changeNeedValue(state, {index, value, needVal}) {
    if (needVal === 'editName') {
      state.myAd[index].editName = value
    } else if (needVal === 'editPlace') {
      state.myAd[index].editPlace = value
    } else if (needVal === 'editDate') {
      state.myAd[index].editDate = value
    } else if (needVal === 'editGirl') {
      state.myAd[index].editGirl = value
    } else if (needVal === 'editBoy') {
      state.myAd[index].editBoy = value
    }
  }
}

export const actions = {
  async getMyAd({commit}) {
    const token = $nuxt.$cookies.get('token')
    try {
      const getMyAd = await this.$axios.$get(`${process.env.BASE_URL}/ad/my_ads/`, {
        headers: {'Authorization': 'Bearer ' + token}
      })

      if (getMyAd.length > 0) {
        const myAdByData = getMyAd.map((ad) => {
          return {
            id: ad.id,
            nameParty: ad.title,
            city: ad.city,
            place: 'Чернышевского 9 / 13 к 2',
            dateParty: ad.party_date,
            girl: ad.number_of_girls,
            boy: ad.number_of_boys,
            geolocation: JSON.parse(ad.geolocation),
            editable: false,
            editName: false,
            editPlace: false,
            editDate: false,
            editGirl: false,
            editBoy: false
          }
        })

        const sortByDateAd = myAdByData.sort((a, b) => {
          return new Date(b.dateParty) - new Date(a.dateParty)
        })

        commit('haveAdvert', true)
        commit('getAd', sortByDateAd)
      } else {
        commit('haveAdvert', false)
      }
    } catch (e) {
      console.log('error in getMyAd action in myParty.js', e)
    }
  },
  async updateMyAd(_, {formData, id}) {
    const token = $nuxt.$cookies.get('token')

    try {
      const updateMyAd = await this.$axios.$put(`${process.env.BASE_URL}/ad/update/${id}/`, formData, {
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      })

      if (updateMyAd.status === 'success') {
        $nuxt.$message({
          message: `${updateMyAd.message}`,
          type: 'success'
        })
        setTimeout(() => {
          $nuxt.$router.go(0)
        }, 2500)
      }
    } catch (e) {
      console.log('error in updateMyAd action in myParty.js', e.response)
    }
  }
}

export const getters = {
  myAd(state) {
    return state.myAd
  },
  haveAd(state) {
    return state.haveAd
  }
}
