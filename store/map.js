export const state = () => ({
  markers: [],
  saveMarkers: [],
  adInfo: [],
  countProgressBar: 0,
  canIApply: false,
  applyToParty: false
});

export const mutations = {
  getAdForMap(state, payload) {
    state.markers = payload;
    state.saveMarkers = payload;
  },
  addAdInMarkers(state, payload) {
    state.markers.push(payload);
  },
  getAdById(state, payload) {
    state.adInfo = payload;
  },
  countProgressBar(state, payload) {
    state.countProgressBar = payload;
  },
  canIApply(state, payload) {
    state.canIApply = payload;
  },
  applyToParty(state, payload) {
    state.applyToParty = payload;
  },
  sortAdById(state, payload) {
    state.markers = state.saveMarkers;
    state.markers = state.markers.filter(i => {
      return i.partyStart === payload;
    });
  },
  sortAdThrowOff(state, _) {
    state.markers = state.saveMarkers;
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
            geolocation: JSON.parse(a.geolocation),
            partyStart: Number(a.party_date.substr(8, 2))
          };
        });

        console.log("coordAdForMap:", coordAdForMap);
        commit("getAdForMap", coordAdForMap);
      }
    } catch (e) {
      console.log("error in getAdForMap action in map.js", e);
    }
  },
  async getAdById({ commit }, { id, myId }) {
    const token = $nuxt.$cookies.get("token");

    try {
      const adById = await this.$axios.$get(
        `${process.env.BASE_URL}/ad/ad/${id}/`,
        {
          headers: { Authorization: "Bearer " + token }
        }
      );

      if (adById.status === "success") {
        const modernAdById = [];
        const countProgressBar =
          (adById.ad.participants.length / adById.ad.number_of_person) * 100;
        const modernCountProgressBar = Number(countProgressBar).toFixed(0);

        modernAdById.push(adById.ad);
        if (modernAdById[0].author.id === myId) {
          commit("canIApply", false);
        } else {
          commit("canIApply", true);
        }

        commit("getAdById", modernAdById);
        commit("countProgressBar", Number(modernCountProgressBar));
      }
    } catch (e) {
      console.log("error in getAdById action in map.js", e);
    }
  },
  async applyForMembership({ commit }, formData) {
    const token = $nuxt.$cookies.get("token");

    try {
      const applyMembership = await this.$axios.$post(
        `${process.env.BASE_URL}/bid/create`,
        formData,
        {
          headers: { Authorization: "Bearer " + token }
        }
      );

      if (applyMembership.status === "success") {
        await commit("applyToParty", true);
        $nuxt.$message({
          message: `${applyMembership.message}`,
          type: "success"
        });
      }
    } catch (e) {
      console.log("error in applyForMembership action in map.js", e);
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
  },
  applyToParty(state) {
    return state.applyToParty;
  }
};
