export const state = () => ({
  rooms: [],
  chooseRoom: [],
  haveMyDialogs: false
});

export const mutations = {
  getRooms(state, payload) {
    state.rooms = payload;
  },
  getChooseRoom(state, payload) {
    state.chooseRoom = payload;
  },
  createMessage(state, payload) {
    state.chooseRoom.push(payload);
  },
  haveMyDialogs(state, payload) {
    state.haveMyDialogs = payload;
  }
};

export const actions = {
  async getRooms({ commit }) {
    const token = $nuxt.$cookies.get("token");

    try {
      const rooms = await this.$axios.$get(`${process.env.BASE_URL}/chat/`, {
        headers: { Authorization: "Bearer " + token }
      });

      if (rooms.status === "success") {
        commit("getRooms", rooms.data);
        commit("haveMyDialogs", true);
      } else {
        commit("haveMyDialogs", false);
      }
    } catch (e) {
      console.log("error in getRooms action in message.js", e);
    }
  },
  async getChooseRoom({ commit }, { id }) {
    const token = $nuxt.$cookies.get("token");

    try {
      const chooseRoom = await this.$axios.$get(
        `${process.env.BASE_URL}/chat/messages/${id}/`,
        {
          headers: {
            Authorization: "Bearer " + token
          }
        }
      );

      if (chooseRoom.length > 0) {
        commit("getChooseRoom", chooseRoom);
      }
    } catch (e) {
      console.log("error in getChooseRoom action in message.js", e.response);
    }
  }
};

export const getters = {
  rooms(state) {
    return state.rooms;
  },
  chooseRoom(state) {
    return state.chooseRoom;
  },
  haveMyDialogs(state) {
    return state.haveMyDialogs;
  }
};
