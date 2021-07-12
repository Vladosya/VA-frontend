<template>
  <div class="messenger-chat-content">
    <div class="messenger-chat-dialogs">
      <div
        class="messenger-correspondence-person"
        v-for="m in chooseRoom"
        :key="m.id"
      >
        <div class="messenger-correspondence-person__img">
          <img
            :src="`http://127.0.0.1:8000${m.user.photo}`"
            alt="dsds"
            class="messenger-correspondence-person__img-two"
          />
          <p class="messenger-correspondence-person__isOnline"></p>
        </div>
        <div class="messenger-correspondence-person__info">
          <div class="messenger-correspondence-person__name">
            {{ m.user.username }}
          </div>
          <div class="messenger-correspondence-person__letter">
            {{ m.text }}
          </div>
        </div>
      </div>
    </div>
    <div class="messenger-chat-sendMessage">
      <div class="messenger-chat-sendMessage__clip">
        <button>
          <img
            src="../../../assets/Home/Message/file.svg"
            alt="file"
            class="messenger-chat-sendMessage__img"
          />
          <img
            src="../../../assets/Home/Message/file-two.svg"
            alt="file-two"
            class="messenger-chat-sendMessage__img-one"
          />
        </button>
      </div>
      <div>
        <label>
          <textarea
            v-model="messageText"
            class="messenger-chat-sendMessage__input"
            placeholder="Напишите ваше сообщение..."
            @keydown.enter.prevent.exact="sendMessage"
          >
          </textarea>
        </label>
      </div>
      <div class="messenger-chat-sendMessage__btns">
        <button class="messenger-chat-sendMessage__btn-one">
          <img
            src="../../../assets/Home/Message/smile.svg"
            alt="smile"
            class="messenger-chat-sendMessage__smile"
          />
        </button>
        <button class="messenger-chat-sendMessage__btn-two">
          <img
            src="../../../assets/Home/Message/image.svg"
            alt="image"
            class="messenger-chat-sendMessage__image"
          />
        </button>
      </div>
      <div class="messenger-chat-sendMessage__send" @click="sendMessage">
        <button>
          <img src="../../../assets/Home/Message/sendMessage.svg" alt="send" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    if (!this.$store.getters["message/chooseRoom"].length) {
      this.$store.dispatch("message/getChooseRoom", {
        id: Number(this.$route.query.idRoom),
      });
    }
  },
  data() {
    return {
      messageText: "",
      connection: "",
    };
  },
  created() {
    if (process.client) {
      this.connected();
    }
  },
  computed: {
    chooseRoom() {
      return this.$store.getters["message/chooseRoom"];
    },
  },
  methods: {
    connected() {
      const token = $nuxt.$cookies.get("token");

      this.connection = new WebSocket(
        `ws://127.0.0.1:8000/ws/chat/${this.$route.query.idRoom}/?token=${token}`
      );

      this.connection.onopen = () => {
        console.log("connected with address");
      };

      this.connection.onmessage = (event) => {
        console.log(`Данные получены с сервера!`);

        function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
        }

        const createMessage = {
          date: new Date(),
          id: getRandomInt(1, 999),
          room: this.$route.query.idRoom,
          text: JSON.parse(event.data).message_to_room[0].text,
          user: {
            id: JSON.parse(event.data).message_to_room[0].id,
            photo: JSON.parse(event.data).message_to_room[0].photo,
            username: JSON.parse(event.data).message_to_room[0].username,
          },
        };

        this.$store.commit("message/createMessage", createMessage);
      };
    },
    sendMessage() {
      if (this.messageText.length > 0) {
        this.connection.send(this.messageText);
        this.messageText = "";
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../../assets/settings";

.messenger-chat-dialogs {
  position: relative;
  overflow: auto;
  padding: 34px 0 35px 46px;
  height: 1075px;

  @include breakpoint(dxxxxl) {
    padding: 24px 0 25px 37px;
    height: 790px;
  }

  @include breakpoint(dxxxl) {
    padding: 24px 37px 1px;
    height: 656px;
  }

  @include breakpoint(dxxl) {
    padding: 24px 37px 1px;
    height: 560px;
  }

  @include breakpoint(dxl) {
    height: 667px;
  }

  @include breakpoint(dlg) {
    height: 545px;
  }

  @include breakpoint(dmd) {
    padding: 24px 0 25px 33px;
    height: 578px;
  }

  @include breakpoint(dsm) {
    padding: 20px 0 25px 15px;
    height: 575px;
  }
}

.messenger-correspondence-person {
  display: flex;
  margin: 0 10px 23px 0;

  &__img-two {
    border-radius: 100%;

    @include breakpoint(dxxxxl) {
      width: 53px;
      height: 53px;
    }

    @include breakpoint(dxxxl) {
      width: 43px;
      height: 43px;
    }

    @include breakpoint(dmd) {
      width: 37px;
      height: 37px;
    }
  }

  &__isOnline {
    position: relative;
    top: -15px;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 100%;
    padding: 5px;
    width: 15px;
    height: 15px;
    background-color: #85e276;

    @include breakpoint(dxxxxl) {
      top: -14px;
      padding: 5px;
      width: 10px;
      height: 10px;
    }

    @include breakpoint(dxxxl) {
      top: -11px;
      padding: 5px;
      width: 5px;
      height: 5px;
    }

    @include breakpoint(dxxl) {
      top: -11px;
      padding: 5px;
      width: 5px;
      height: 5px;
    }

    @include breakpoint(dmd) {
      top: -10px;
      padding: 4px;
    }
  }

  &__info {
    margin: 8px 0 0 23px;

    @include breakpoint(dxxxxl) {
      margin: 6px 0 0 17px;
    }

    @include breakpoint(dxxxl) {
      margin: 2px 0 0 13px;
    }

    @include breakpoint(dxxl) {
      margin: 2px 0 0 13px;
    }

    @include breakpoint(dlg) {
      margin: 2px 0 0 10px;
    }

    @include breakpoint(dmd) {
      margin: 1px 0 0 10px;
    }

    @include breakpoint(dsm) {
      margin: 1px 0 0 5px;
    }
  }

  &__name {
    font-family: "Manrope", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 19px;
    line-height: 19px;
    color: #771699;

    @include breakpoint(dxxxxl) {
      font-size: 16px;
      line-height: 19px;
    }

    @include breakpoint(dxxxl) {
      font-size: 14px;
      line-height: 19px;
    }

    @include breakpoint(dxxl) {
      font-size: 14px;
      line-height: 19px;
    }

    @include breakpoint(dlg) {
      font-size: 13px;
    }

    @include breakpoint(dmd) {
      font-size: 12px;
    }

    @include breakpoint(dsm) {
      font-size: 11px;
    }
  }

  &__letter {
    margin-top: 7px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 19px;
    line-height: 19px;
    word-wrap: break-word;
    color: #797979;

    @include breakpoint(dxxxxl) {
      margin-top: 3px;
      font-size: 16px;
      line-height: 19px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 3px;
      font-size: 14px;
      line-height: 19px;
    }

    @include breakpoint(dxxl) {
      margin-top: 3px;
      max-width: 770px;
      font-size: 14px;
      line-height: 19px;
    }

    @include breakpoint(dlg) {
      margin-top: 2px;
      font-size: 13px;
    }

    @include breakpoint(dmd) {
      margin-top: 0;
      font-size: 12px;
    }

    @include breakpoint(dsm) {
      font-size: 11px;
    }
  }

  @include breakpoint(dxxxxl) {
    margin: 0 10px 16px 0;
  }

  @include breakpoint(dxxxl) {
    margin: 0 10px 29px 0;
  }

  @include breakpoint(dxxl) {
    margin: 0 10px 19px 0;
  }

  @include breakpoint(dlg) {
    margin: 0 10px 17px 0;
  }

  @include breakpoint(dmd) {
    margin: 0 10px 15px 0;
  }

  @include breakpoint(dsm) {
    margin: 0 10px 10px 0;
  }
}

.messenger-chat-sendMessage {
  display: flex;
  align-items: center;
  margin-left: 3px;
  height: 120px;
  background-color: #f6eef9;

  &__clip {
    margin-left: 42px;

    button {
      background: none;
    }

    @include breakpoint(dxxxxl) {
      margin-left: 32px;
    }

    @include breakpoint(dxxxl) {
      margin-left: 22px;
    }

    @include breakpoint(dxxl) {
      margin-left: 21px;
    }

    @include breakpoint(dlg) {
      margin-left: 18px;
    }
  }

  &__img {
    @include breakpoint(dxxxl) {
      width: 30px;
      height: 32px;
    }

    @include breakpoint(dxxl) {
      display: none;
    }
  }

  &__img-one {
    display: none;

    @include breakpoint(dxxl) {
      display: inline-block;
    }
  }

  &__input {
    margin-left: 42px;
    border-radius: 3px;
    padding: 16px 245px 16px 14px;
    width: 1283px;
    height: 100px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 19px;
    line-height: 19px;
    color: #797979;
    resize: none;

    @include breakpoint(dxxxxl) {
      margin-left: 32px;
      padding: 14px 195px 14px 14px;
      width: 870px;
      height: 75px;
      font-size: 16px;
    }

    @include breakpoint(dxxxl) {
      margin-left: 22px;
      padding: 14px 160px 14px 14px;
      width: 815px;
      height: 68px;
      font-size: 14px;
    }

    @include breakpoint(dxxl) {
      margin-left: 22px;
      border-radius: 3px;
      padding: 8px 115px 8px 14px;
      width: 777px;
      height: 54px;
      font-size: 14px;
      line-height: 19px;
    }

    @include breakpoint(dxl) {
      width: 683px;
      height: 58px;
    }

    @include breakpoint(dlg) {
      margin-left: 18px;
      width: 637px;
      height: 50px;
      font-size: 13px;
    }

    @include breakpoint(dmd) {
      width: 570px;
    }

    @include breakpoint(dsm) {
      padding: 8px 85px 8px 14px;
      width: 387px;
      font-size: 11px;
    }
  }

  &__btns {
    display: flex;
    align-items: center;
  }

  &__btn-one {
    position: absolute;
    right: 560px;
    bottom: 144px;
    border: none;
    background: none;

    img {
      @include breakpoint(dxxxxl) {
        height: 42px;
      }

      @include breakpoint(dxxxl) {
        width: 31px;
        height: 31px;
      }

      @include breakpoint(dxxl) {
        width: 30px;
        height: 30px;
      }

      @include breakpoint(dlg) {
        width: 26px;
        height: 26px;
      }

      @include breakpoint(dsm) {
        width: 23px;
        height: 23px;
      }
    }

    @include breakpoint(dxxxxl) {
      right: 472px;
      bottom: 111px;
    }

    @include breakpoint(dxxxl) {
      right: 331px;
      bottom: 93px;
    }

    @include breakpoint(dxxl) {
      right: 278px;
      bottom: 71px;
    }

    @include breakpoint(dxl) {
      bottom: 87px;
    }

    @include breakpoint(dlg) {
      right: 270px;
      bottom: 85px;
    }

    @include breakpoint(dmd) {
      bottom: 84px;
    }

    @include breakpoint(dsm) {
      right: 255px;
      bottom: 71.5px;
    }
  }

  &__btn-two {
    position: absolute;
    right: 457px;
    bottom: 146.5px;
    border: none;
    background: none;

    img {
      @include breakpoint(dxxxxl) {
        width: 45px;
        height: 30px;
      }

      @include breakpoint(dxxxl) {
        width: 38px;
        height: 23px;
      }

      @include breakpoint(dxxl) {
        width: 29px;
        height: 21px;
      }

      @include breakpoint(dlg) {
        width: 27px;
        height: 19px;
      }

      @include breakpoint(dsm) {
        width: 24px;
        height: 18px;
      }
    }

    @include breakpoint(dxxxxl) {
      right: 390px;
      bottom: 117px;
    }

    @include breakpoint(dxxxl) {
      right: 267px;
      bottom: 97px;
    }

    @include breakpoint(dxxl) {
      right: 230px;
      bottom: 75.5px;
    }

    @include breakpoint(dxl) {
      bottom: 92px;
    }

    @include breakpoint(dlg) {
      right: 225px;
      bottom: 88px;
    }

    @include breakpoint(dmd) {
      bottom: 87.5px;
    }

    @include breakpoint(dsm) {
      right: 217px;
      bottom: 74.5px;
    }
  }

  &__send {
    margin-left: 45px;

    button {
      img {
        @include breakpoint(dxxxxl) {
          width: 50px;
          height: 34px;
        }

        @include breakpoint(dxxxl) {
          width: 43px;
          height: 27px;
        }

        @include breakpoint(dxxl) {
          width: 29px;
          height: 21px;
        }

        @include breakpoint(dsm) {
          width: 26px;
          height: 19px;
        }
      }
    }

    @include breakpoint(dxxxxl) {
      margin-left: 35px;
    }

    @include breakpoint(dxxxl) {
      margin-left: 25px;
    }

    @include breakpoint(dxxl) {
      margin-left: 18px;
    }
  }

  @include breakpoint(dxxxxl) {
    height: 90px;
  }

  @include breakpoint(dxxxl) {
    height: 80px;
  }

  @include breakpoint(dxxl) {
    margin-left: 3px;
    height: 70px;
  }

  @include breakpoint(dlg) {
    height: 60px;
  }
}

::-webkit-scrollbar-button {
  width: 3px;
  height: 0;
  background-image: url("#");
  background-repeat: no-repeat;
}

::-webkit-scrollbar-track {
  background-color: #fff;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  box-shadow: 0 1px 1px #fff inset;
  background-image: url("https://yraaa.ru/_pu/24/59610063.png");
  background-position: center;
  background-repeat: no-repeat;
  background-color: #d38eec;

  @include breakpoint(dxxl) {
    border-radius: 5px;
    box-shadow: 0 1px 1px #fff inset;
  }
}

::-webkit-resizer {
  width: 7px;
  height: 0;
  background-image: url("#");
  background-repeat: no-repeat;
}

::-webkit-scrollbar {
  width: 5px;
}

@media (height: 1024px) {
  .messenger-chat-sendMessage {
    &__btn-one {
      right: 270px;
      bottom: 197px;
    }

    &__btn-two {
      right: 225px;
      bottom: 199px;
    }
  }
}

@media (height: 864px) {
  .messenger-chat-dialogs {
    height: 630px;
  }

  .messenger-chat-sendMessage {
    &__btn-one {
      right: 278px;
      bottom: 88px;
    }

    &__btn-two {
      right: 230px;
      bottom: 93px;
    }
  }
}
</style>
