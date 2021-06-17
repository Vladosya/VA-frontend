export const state = () => ({
  myAd: []
})

export const mutations = {
  getAd(state, payload) {
    state.myAd = payload
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
            nameParty: ad.title,
            place: 'Чернышевского 9 / 13 к 2',
            dateParty: ad.party_date.substring(10, 2).split('').reverse().join('').split('').reverse().join(''),
            girl: ad.number_of_girls,
            boy: ad.number_of_boys,
            coordinates: {lat: 55.7522200, lng: 37.7155600},
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

        commit('getAd', sortByDateAd)
      }
    } catch (e) {
      console.log('error in action getMyAd', e.response)
    }
  }
}

export const getters = {
  myAd(state) {
    return state.myAd
  }
}
