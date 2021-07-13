export const state = () => ({
  markers: [],
  adInfo: [],
  countProgressBar: 0
});

export const mutations = {
  getAdForMap(state, payload) {
    state.markers = payload;
  },
  getAdById(state, payload) {
    state.adInfo = payload;
  },
  countProgressBar(state, payload) {
    state.countProgressBar = payload;
  }
};

export const actions = {
  async getAdForMap({ commit }) {
    const token = $nuxt.$cookies.get("token");

    try {
      const adForMap = await this.$axios.$get(
        `${process.env.BASE_URL}/ad/all`,
        {
          headers: { Authorization: "Bearer " + token }
        }
      );

      if (adForMap.length > 0) {
        const coordAdForMap = adForMap.map(a => {
          return {
            id: a.id,
            geolocation: JSON.parse(a.geolocation)
          };
        });

        commit("getAdForMap", coordAdForMap);
      }
    } catch (e) {
      console.log("error in getAdForMap action in map.js", e);
    }
  },
  async getAdById({ commit }, id) {
    const token = $nuxt.$cookies.get("token");

    try {
      const adById = await this.$axios.$get(
        `${process.env.BASE_URL}/ad/ad/${id}/`,
        {
          headers: { Authorization: "Bearer " + token }
        }
      );

      if (adById) {
        const countProgressBar =
          (adById[0].participants.length / adById[0].number_of_person) * 100;

        commit("getAdById", adById);
        commit("countProgressBar", countProgressBar);
      }
    } catch (e) {
      console.log("error in getAdById action in map.js", e);
    }
  }
};

export const getters = {
  markers(state) {
    return state.markers;
  },
  adInfo(state) {
    return state.adInfo;
  },
  countProgressBar(state) {
    return state.countProgressBar;
  }
};
