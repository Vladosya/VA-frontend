export const state = () => ({
  rooms: [],
  chooseRoom: [],
  haveMyDialogs: false,
  authorId: null
});

export const mutations = {
  getRooms(state, payload) {
    state.rooms = payload;
  },
  chooseIdAuthor(state, payload) {
    state.authorId = payload;
  },
  getChooseRoom(state, payload) {
    state.chooseRoom = payload;
  },
  createMessage(state, payload) {
    state.chooseRoom.push(payload);
  },
  haveMyDialogs(state, payload) {
    state.haveMyDialogs = payload;
  },
  changeEditableByIdMessage(state, { editableValue, index }) {
    state.chooseRoom[index].editable = editableValue;
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
        const modifiedChooseRoom = chooseRoom.map(r => {
          return {
            date: r.date,
            id: r.id,
            room: r.room,
            text: r.text,
            editable: false,
            freezePeople: false,
            deletePeople: false,
            user: {
              id: r.user.id,
              photo: r.user.photo,
              username: r.user.username
            }
          };
        });

        commit("getChooseRoom", modifiedChooseRoom);
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
