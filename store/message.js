export const state = () => ({
  rooms: [],
  chooseRoom: []
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
  }
};

export const actions = {
  async getRooms({ commit }) {
    const token = $nuxt.$cookies.get("token");

    try {
      const rooms = await this.$axios.$get(`${process.env.BASE_URL}/chat/`, {
        headers: { Authorization: "Bearer " + token }
      });

      console.log("room:", room);

      if (rooms.data.length > 0) {
        commit("getRooms", rooms.data);
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
  }
};
