export const state = () => ({
  myAd: [],
  myAdId: 0,
  myAdByFilter: [],
  myAdById: [],
  haveAd: false,
  haveAdCreateAdMenu: false,
  haveMyParticipants: false,
  haveRequestMyParty: false,
  selectedId: null,
  requestMyParty: [],
  filterByIdRequestMyParty: [],
  myParticipants: []
});

export const mutations = {
  getAd(state, payload) {
    state.myAd = payload;
  },
  myAdId(state, payload) {
    state.myAdId = payload;
  },
  filterAd(state, payload) {
    state.myAdByFilter = payload;
  },
  selectedId(state, payload) {
    state.selectedId = payload;
  },
  getMyAdById(state, payload) {
    state.myAdById = state.myAd.filter(i => {
      return i.id === state.selectedId;
    });
    state.haveAd = payload;
  },
  haveAdCreateAdMenu(state, payload) {
    state.haveAdCreateAdMenu = payload;
  },
  haveMyParticipants(state, payload) {
    state.haveMyParticipants = payload;
  },
  haveRequestMyParty(state, payload) {
    state.haveRequestMyParty = payload;
  },
  changeEditableByIndex(state, { index, value }) {
    state.myAd[index].editable = value;
  },
  changeNeedValue(state, { index, value, needVal }) {
    if (needVal === "editName") {
      state.myAd[index].editName = value;
    } else if (needVal === "editPlace") {
      state.myAd[index].editPlace = value;
    } else if (needVal === "editDate") {
      state.myAd[index].editDate = value;
    } else if (needVal === "editGirl") {
      state.myAd[index].editGirl = value;
    } else if (needVal === "editBoy") {
      state.myAd[index].editBoy = value;
    }
  },
  getRequestMyParty(state, payload) {
    if (state.requestMyParty.length === 0) {
      payload.forEach(u => {
        return state.requestMyParty.push(u);
      });
    } else if (state.requestMyParty.length > 0) {
      payload.forEach(u => {
        return state.requestMyParty.push(u);
      });
    }
  },
  filterByIdRequestMyParty(state, payload) {
    state.filterByIdRequestMyParty = state.requestMyParty.filter(i => {
      return i.author_id === payload;
    });
  },
  filterRequestMyPartyIfAccept(state, payload) {
    state.requestMyParty = state.requestMyParty.filter(p => {
      return p.author_id !== payload;
    });
  },
  filterRequestMyPartyIfRefuse(state, payload) {
    state.requestMyParty = state.requestMyParty.filter(p => {
      return p.author_id !== payload;
    });
  },
  getMyParticipants(state, payload) {
    if (state.myParticipants.length === 0) {
      payload.forEach(u => {
        return state.myParticipants.push(u);
      });
    } else if (state.myParticipants.length > 0) {
      payload.forEach(u => {
        return state.myParticipants.push(u);
      });
    }
  },
  filterGetMyPartipantsIfDelete(state, payload) {
    state.myParticipants = state.myParticipants.filter(p => {
      return p.participant_id !== payload;
    });
  }
};

export const actions = {
  async getMyAd({ commit }) {
    const token = $nuxt.$cookies.get("token");
    try {
      const getMyAd = await this.$axios.$get(
        `${process.env.BASE_URL}/ad/my_ads/`,
        {
          headers: { Authorization: "Bearer " + token }
        }
      );

      if (getMyAd.length > 0) {
        const myAdId = getMyAd[0].id;

        const myAdByData = getMyAd.map(ad => {
          return {
            id: ad.id,
            nameParty: ad.title,
            city: ad.city,
            place: "Чернышевского 9 / 13 к 2",
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
          };
        });

        const sortByDateAd = myAdByData.sort((a, b) => {
          return new Date(b.dateParty) - new Date(a.dateParty);
        });

        const myAdByFilter = getMyAd.map(adf => {
          return {
            id: adf.id,
            nameParty: adf.title,
            dateParty: adf.party_date
          };
        });

        const sortByDateAdFilter = myAdByFilter.sort((a, b) => {
          return new Date(b.dateParty) - new Date(a.dateParty);
        });

        commit("getAd", sortByDateAd);
        commit("myAdId", myAdId);
        commit("filterAd", sortByDateAdFilter);
        commit("haveAdCreateAdMenu", true);
      }
    } catch (e) {
      console.log("error in getMyAd action in myParty.js", e);
    }
  },
  async updateMyAd(_, { formData, id }) {
    const token = $nuxt.$cookies.get("token");

    try {
      const updateMyAd = await this.$axios.$put(
        `${process.env.BASE_URL}/ad/update/${id}/`,
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json"
          }
        }
      );

      if (updateMyAd.status === "success") {
        $nuxt.$message({
          message: `${updateMyAd.message}`,
          type: "success"
        });
        setTimeout(() => {
          $nuxt.$router.go(0);
        }, 2500);
      }
    } catch (e) {
      console.log("error in updateMyAd action in myParty.js", e.response);
    }
  },
  async getMyParticipants({ state, commit }) {
    const token = $nuxt.$cookies.get("token");

    try {
      const getMyParticipants = await this.$axios.$get(
        `${process.env.BASE_URL}/participant/my_participants/${state.selectedId}/`,
        {
          headers: { Authorization: "Bearer " + token }
        }
      );

      if (getMyParticipants.status === "success") {
        if (state.myParticipants.length > 0) {
          const updateData = getMyParticipants.data.filter(u => {
            return u.user.id !== state.myParticipants[0].user.id;
          });
          commit("getMyParticipants", updateData);
        } else {
          commit("getMyParticipants", getMyParticipants.data);
        }
        commit("haveMyParticipants", true);
      } else {
        commit("haveMyParticipants", false);
      }
    } catch (e) {
      console.log("error in getMyParticipants action in myParty.js", e);
    }
  },
  async deleteParticipant({ state, commit }, { ad_pk, participant_pk }) {
    const token = $nuxt.$cookies.get("token");

    try {
      const deleteParticipant = await this.$axios.$delete(
        `${process.env.BASE_URL}/participant/remove/${ad_pk}/${participant_pk}/`,
        {
          headers: { Authorization: "Bearer " + token }
        }
      );

      if (deleteParticipant.status === "success") {
        await commit("filterGetMyPartipantsIfDelete", participant_pk);
        $nuxt.$message({
          message: `${deleteParticipant.message}`,
          type: "success"
        });

        if (state.myParticipants.length === 0) {
          commit("haveMyParticipants", false);
        }
      }
    } catch (e) {
      console.log("error in deleteParticipant action in myParty.js", e);
    }
  },
  async getRequestMyParty({ state, commit }) {
    const token = $nuxt.$cookies.get("token");

    try {
      const getRequestMyParty = await this.$axios.$get(
        `${process.env.BASE_URL}/bid/my_bids/${state.selectedId}/`,
        {
          headers: { Authorization: "Bearer " + token }
        }
      );

      if (getRequestMyParty.status === "success") {
        if (state.requestMyParty.length > 0) {
          const updateData = getRequestMyParty.data.filter(u => {
            return u.author_id !== state.requestMyParty[0].author_id;
          });
          commit("getRequestMyParty", updateData);
        } else {
          commit("getRequestMyParty", getRequestMyParty.data);
        }
        commit("haveRequestMyParty", true);
      } else {
        commit("haveRequestMyParty", false);
      }
    } catch (e) {
      console.log("error in getRequestMyParty action in myParty.js", e);
    }
  },
  async acceptParticipantOnParty({ state, commit }, { formData, authorId }) {
    const token = $nuxt.$cookies.get("token");

    try {
      const acceptParticipant = await this.$axios.$post(
        `${process.env.BASE_URL}/participant/create`,
        formData,
        {
          headers: { Authorization: "Bearer " + token }
        }
      );

      if (acceptParticipant.status === "success") {
        await commit("filterRequestMyPartyIfAccept", authorId);
        $nuxt.$message({
          message: `${acceptParticipant.message}`,
          type: "success"
        });

        if (state.requestMyParty.length === 0) {
          commit("haveRequestMyParty", false);
        }
      }
    } catch (e) {
      console.log(
        "error in acceptParticipantOnParty action in myParty.js",
        e.response
      );
    }
  },
  async refuseParticipantOnParty({ state, commit }, { idPerson, authorId }) {
    const token = $nuxt.$cookies.get("token");

    try {
      const refuseParticipant = await this.$axios.$delete(
        `${process.env.BASE_URL}/bid/remove/${idPerson}/`,
        {
          headers: { Authorization: "Bearer " + token }
        }
      );

      if (refuseParticipant.status === "success") {
        await commit("filterRequestMyPartyIfRefuse", authorId);
        $nuxt.$message({
          message: `${refuseParticipant.message}`,
          type: "success"
        });

        if (state.requestMyParty.length === 0) {
          commit("haveRequestMyParty", false);
        }
      }
    } catch (e) {
      console.log("error in refuseParticipantOnParty action in myParty.js", e);
    }
  }
};

export const getters = {
  myAd(state) {
    return state.myAd;
  },
  haveAd(state) {
    return state.haveAd;
  },
  haveAdCreateAdMenu(state) {
    return state.haveAdCreateAdMenu;
  },
  haveMyParticipants(state) {
    return state.haveMyParticipants;
  },
  haveRequestMyParty(state) {
    return state.haveRequestMyParty;
  },
  myAdByFilter(state) {
    return state.myAdByFilter;
  },
  myAdById(state) {
    return state.myAdById;
  },
  requestMyParty(state) {
    return state.requestMyParty;
  },
  filterByIdRequestMyParty(state) {
    return state.filterByIdRequestMyParty;
  },
  myParticipants(state) {
    return state.myParticipants;
  }
};
