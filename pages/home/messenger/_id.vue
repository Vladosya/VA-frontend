<template>
  <div class="messenger-chat-content">
    <div class="messenger-chat-dialogs" @click.self="clickForLimit">
      <div
        class="messenger-correspondence-person"
        v-for="(m, index) in chooseRoom"
        :key="m.id"
        @click.self="clickForLimit"
      >
        <div class="messenger-correspondence-person__img">
          <button
            class="messenger-correspondence-person__btnImg"
            :disabled="isOpenDialog"
            @click.right.prevent="openInfoPerson(m, index, true)"
          >
            <img
              :src="`http://127.0.0.1:8000${m.user.photo}`"
              alt="dsds"
              class="messenger-correspondence-person__img-two"
            />
          </button>
          <p class="messenger-correspondence-person__isOnline"></p>
        </div>
        <div class="messenger-correspondence-person__info">
          <div class="messenger-correspondence-person__name">
            {{ m.user.username }}
          </div>
          <div class="messenger-correspondence-person__letter">
            {{ m.text }}
          </div>
          <div
            class="messenger-correspondence-person__letter-img"
            v-if="m.haveImg > 0"
          >
            <img
              src="https://er.ru/media/news/May2021/OVlQJ0oPBDR1PKOFWWJw.jpg"
              alt="upload-img-one"
            />
            <img v-if="m.haveImg > 1" src="" alt="upload-img-two" />
          </div>
        </div>
        <div class="info-person" v-if="m.editable">
          <div class="info-person__title">
            <p class="info-person__title-one">Пользователь:</p>
            <b class="info-person__title-two">{{
              myData[0].id === m.user.id ? "Ваше соощение" : m.user.username
            }}</b>
          </div>
          <div class="info-person__account">
            <button
              class="info-person__account-btn"
              @click="lookProfile(m, index, true)"
            >
              <i class="el-icon-user"></i>
            </button>
            <div class="info-person__account-text">Посмотреть профиль</div>
          </div>
          <div
            class="info-person__freeze"
            v-if="
              myData[0].id !== m.user.id &&
              m.user.id !== $store.state.message.authorId
            "
          >
            <button class="info-person__freeze-btn" @click="freezePerson(m)">
              <img
                src="../../../assets/Home/Message/sendOff.svg"
                alt="sendOff-icon"
              />
            </button>
            <div class="info-person__freeze-text">Заглушить пользователя</div>
          </div>
          <div
            class="info-person__delete"
            v-if="
              myData[0].id !== m.user.id &&
              m.user.id !== $store.state.message.authorId
            "
          >
            <button class="info-person__delete-btn" @click="deletePerson(m)">
              <i class="el-icon-delete"></i>
            </button>
            <div class="info-person__delete-text">Удалить пользователя</div>
          </div>
          <div
            class="info-person__deleteMessage"
            v-if="myData[0].id === m.user.id"
          >
            <button
              class="info-person__deleteMessage-btn"
              @click="deleteMessage(m)"
            >
              <i class="el-icon-delete"></i>
            </button>
            <div class="info-person__deleteMessage-text">Удалить сообщение</div>
          </div>
        </div>
        <InfoPersonProfile :m="m" />
      </div>
      <div v-show="isOpenUploadWindow" class="upload-img">
        <div class="upload-img__block">
          <div class="upload-img__photo">
            <img
              v-show="haveImg > 0"
              id="uploadImageOne"
              src=""
              alt="photo-upl-one"
            />

            <img
              v-show="haveImg > 1"
              id="uploadImageTwo"
              src="https://er.ru/media/news/May2021/OVlQJ0oPBDR1PKOFWWJw.jpg"
              alt="photo-upl-two"
            />
          </div>
          <div class="upload-img__input">
            <label for="textarea-letter">
              <p>Сообщение:</p>
              <el-input
                id="textarea-letter"
                rows="3"
                resize="none"
                maxlength="300"
                type="textarea"
                placeholder="Введите сообщение"
                v-model.trim="textareaText"
              >
              </el-input>
            </label>
          </div>
          <div class="upload-img__btns">
            <input
              type="file"
              id="img-upload-two"
              class="upload-img__btns-input"
              ref="filePhotoImgTwo"
              @change="handleImgUploadTwo($event)"
            />
            <button class="upload-img__btns-added">
              <label for="img-upload-two">
                <p>Добавить</p>
              </label>
            </button>
            <button class="upload-img__btns-cancel" @click="clickForLimit">
              Отмена
            </button>
            <button class="upload-img__btns-add">Отправить</button>
          </div>
        </div>
      </div>
    </div>
    <div class="messenger-chat-sendMessage" @click="isOpenDialog = false">
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
            v-model.trim="messageText"
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

        <input
          type="file"
          id="img-upload"
          class="messenger-chat-sendMessage__image-input"
          ref="filePhotoImg"
          @change="handleImgUploadOne($event)"
        />
        <div class="messenger-chat-sendMessage__btn-two">
          <label for="img-upload">
            <img
              src="../../../assets/Home/Message/image.svg"
              alt="image"
              class="messenger-chat-sendMessage__image"
            />
          </label>
        </div>
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
import InfoPersonProfile from "@/components/Home/Messenger/InfoPersonProfile.vue";

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
      isOpenDialog: false,
      isOpenProfile: false,
      isOpenUploadWindow: false,
      indexPerson: null,
      myData: process.client ? JSON.parse(localStorage.getItem("myData")) : [],
      sendImgs: {
        imgOne: {},
        imgTwo: {},
      },
      textareaText: "",
      haveImg: 0,
      formatPhoto: ["image/jpeg", "image/png", "image/gif"],
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
          editable: false,
          openProfile: false,
          freezePeople: false,
          deletePeople: false,
          haveImg: 0,
          user: {
            id: JSON.parse(event.data).message_to_room[0].id,
            photo: JSON.parse(event.data).message_to_room[0].photo,
            username: JSON.parse(event.data).message_to_room[0].username,
          },
        };

        this.$store.commit("message/createMessage", createMessage);
      };
    },
    handler: function (e) {
      //do stuff
      e.preventDefault();
    },
    clickForLimit() {
      this.isOpenDialog = false;
      this.isOpenProfile = false;
      this.isOpenUploadWindow = false;
    },
    openInfoPerson(m, index, value) {
      this.$store.commit("message/changeEditable", {
        editableValue: value,
        index,
      });

      this.indexPerson = index;
      this.isOpenDialog = true;
    },
    lookProfile(m, index, value) {
      if (this.isOpenProfile === false) {
        this.$store.commit("message/changeOpenProfile", {
          openProfileValue: value,
          index,
        });

        this.indexPerson = index;
        this.isOpenProfile = !this.isOpenProfile;
      }
    },
    freezePerson(m) {
      console.log("mInFreezePerson:", m);
    },
    deletePerson(m) {
      console.log("mInDeletePerson", m);
    },
    deleteMessage(m) {
      console.log("mInDeleteMessage:", m);
    },
    sendMessage() {
      if (this.messageText.length > 0) {
        this.connection.send(this.messageText);
        this.messageText = "";
      }
    },
    handleImgUploadOne(e) {
      if (this.$refs.filePhotoImg.files.length > 0) {
        const file = this.$refs.filePhotoImg.files[0];

        if (this.formatPhoto.includes(file.type)) {
          const selectedFile = e.target.files[0];
          const reader = new FileReader();
          const imgtag = document.getElementById("uploadImageOne");
          imgtag.title = selectedFile.name;
          this.haveImg = true;
          reader.onload = function (event) {
            imgtag.src = event.target.result;
          };

          this.haveImg = 1;

          reader.readAsDataURL(selectedFile);
          this.sendImgs.imgOne = file;
          this.isOpenUploadWindow = true;

          this.$message({
            message: "Фотография успешно загружена.",
            type: "success",
          });
          setTimeout(() => {
            this.$message({
              message:
                'Если хотите поменять фото, то кликните по значку "Загрузить вашу фотографию"',
              type: "message",
            });
          }, 2000);
        } else {
          this.$message.error(
            "Данный формат для загрузки фото недоступен. Доступные форматы для загрузки: png, jpeg, gif"
          );
          this.formStepOne.file = [];
        }
      } else {
        this.$message({
          message: "Изображение не было загружено",
          type: "warning",
        });
      }
    },
    handleImgUploadTwo(e) {
      if (this.$refs.filePhotoImgTwo.files.length > 0) {
        const file = this.$refs.filePhotoImgTwo.files[0];

        if (this.formatPhoto.includes(file.type)) {
          const selectedFile = e.target.files[0];
          const reader = new FileReader();
          const imgtag = document.getElementById("uploadImageTwo");
          imgtag.title = selectedFile.name;
          this.haveImg = true;
          reader.onload = function (event) {
            imgtag.src = event.target.result;
          };

          this.haveImg = 2;

          reader.readAsDataURL(selectedFile);
          this.sendImgs.imgTwo = file;
          this.isOpenUploadWindow = true;

          this.$message({
            message: "Фотография успешно загружена.",
            type: "success",
          });
          setTimeout(() => {
            this.$message({
              message:
                'Если хотите поменять фото, то кликните по значку "Загрузить вашу фотографию"',
              type: "message",
            });
          }, 2000);
        } else {
          this.$message.error(
            "Данный формат для загрузки фото недоступен. Доступные форматы для загрузки: png, jpeg, gif"
          );
          this.formStepOne.file = [];
        }
      }
    },
  },
  watch: {
    isOpenDialog() {
      if (this.isOpenDialog === false) {
        this.$store.commit("message/changeEditable", {
          editableValue: false,
          index: this.indexPerson,
        });

        this.isOpenDialog = false;
      }
    },
    isOpenProfile() {
      if (this.isOpenProfile === false) {
        this.$store.commit("message/changeOpenProfile", {
          openProfileValue: false,
          index: this.indexPerson,
        });

        this.isOpenProfile = false;
        this.indexPerson = null;
      }
    },
  },
  components: {
    InfoPersonProfile,
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
  position: relative;
  display: flex;
  margin: 0 10px 23px 0;

  &__btnImg {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    width: 43px;
    height: 43px;
  }

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

  &__letter-img {
    display: flex;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
    }

    img + img {
      margin-left: 5px;
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

  &__image-input {
    display: none;
    opacity: 0;
  }

  &__btn-two {
    position: absolute;
    right: 457px;
    bottom: 146.5px;
    display: flex;
    border: none;
    background: none;

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #000;
      width: 28px;
      height: 21px;
    }

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

.info-person {
  position: absolute;
  left: 35px;
  top: 43px;
  z-index: 5;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 4px 4px 7px;
  width: 250px;
  background-color: #fff;

  &__title {
    display: flex;
    align-items: center;
    margin-left: 5px;
  }

  &__title-one {
    font-weight: 500;
    font-size: 15px;
  }

  &__title-two {
    margin-left: 10px;
    font-size: 14px;
    color: #771699;
  }

  &__account {
    display: flex;
    align-items: center;
    margin-top: 12px;
  }

  &__account-btn {
    margin-left: 17.5px;
    border-radius: 100%;
    width: 34px;
    height: 34px;
    background: none;

    i {
      font-size: 24px;
    }

    &:hover {
      background-color: #e2e0e0;
    }
  }

  &__account-text {
    margin-left: 16px;
    font-weight: 500;
    font-size: 15px;
  }

  &__freeze {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
  }

  &__freeze-btn {
    border-radius: 100%;
    width: 34px;
    height: 34px;
    background: none;

    &:hover {
      background-color: #e2e0e0;
    }
  }

  &__freeze-text {
    margin-left: 15px;
    font-weight: 500;
    font-size: 15px;
  }

  &__delete {
    display: flex;
    align-items: center;
    margin-top: 12px;
  }

  &__delete-btn {
    margin-left: 17.5px;
    border-radius: 100%;
    width: 34px;
    height: 34px;
    background: none;

    i {
      font-size: 24px;
    }

    &:hover {
      background-color: #e2e0e0;
    }
  }

  &__delete-text {
    margin-left: 16px;
    font-weight: 500;
    font-size: 15px;
  }

  &__deleteMessage {
    display: flex;
    align-items: center;
    margin-top: 12px;
  }

  &__deleteMessage-btn {
    margin-left: 17.5px;
    border-radius: 100%;
    width: 34px;
    height: 34px;
    background: none;

    i {
      font-size: 24px;
    }

    &:hover {
      background-color: #e2e0e0;
    }
  }

  &__deleteMessage-text {
    margin-left: 16px;
    font-weight: 500;
    font-size: 15px;
  }
}

.participants-person-card {
  position: fixed;
  left: 810px;
  top: 220px;
  border-radius: 10px;
  padding: 2em;
  width: 300px;
  box-shadow: 0 2px 5px rgb(0 0 0 / 50%), 0 1px 5px rgb(0 0 0 / 9%);
  text-align: center;
  background-color: #fff;

  img {
    border-radius: 50%;
    width: 230px;
    height: 230px;

    @include breakpoint(dxxxl) {
      width: 200px;
      height: 200px;
    }

    @include breakpoint(dxxl) {
      width: 200px;
      height: 200px;
    }

    @include breakpoint(dsm) {
      width: 130px;
      height: 130px;
    }
  }

  &__name {
    margin-top: 5px;

    strong {
      font-size: 20px;

      @include breakpoint(dxxxl) {
        font-size: 14px;
      }

      @include breakpoint(dxxl) {
        font-size: 14px;
      }

      @include breakpoint(dsm) {
        font-size: 13px;
      }
    }

    @include breakpoint(dxxxl) {
      margin-top: 3px;
    }

    @include breakpoint(dxxl) {
      margin-top: 3px;
    }
  }

  &__info {
    margin-top: 6px;
    font-size: 18px;

    @include breakpoint(dxxxl) {
      margin-top: 5px;
      font-size: 14px;
    }

    @include breakpoint(dxxl) {
      margin-top: 5px;
      font-size: 14px;
    }

    @include breakpoint(dsm) {
      font-size: 11px;
    }
  }

  @include breakpoint(dxxxxl) {
    left: 880px;
    top: 365px;
  }

  @include breakpoint(dxxxl) {
    left: 726px;
    top: 299px;
    padding: 2em;
    width: 250px;
  }

  @include breakpoint(dxxl) {
    left: 810px;
    top: 220px;
    padding: 2em;
    width: 250px;
  }

  @include breakpoint(dxl) {
    left: 650px;
    top: 300px;
  }

  @include breakpoint(dlg) {
    left: 611px;
    top: 235px;
  }

  @include breakpoint(dmd) {
    left: 568px;
    top: 255px;
  }

  @include breakpoint(dsm) {
    left: 474px;
    top: 270px;
    width: 190px;
  }
}

.upload-img {
  position: fixed;
  left: 790px;
  top: 170px;
  border: 1px solid #000;
  border-radius: 10px;
  width: 300px;
  background-color: #fff;

  &__block {
    padding: 25px;
  }

  &__photo {
    img {
      width: 248px;
      height: 130px;
    }

    img + img {
      margin-top: 3px;
    }
  }

  &__input {
    margin-top: 7px;

    p {
      margin-bottom: 3px;
    }
  }

  &__btns {
    margin-top: 15px;
  }

  &__btns-input {
    display: none;
    opacity: 0;
  }

  &__btns-added {
    border-radius: 5px;
    width: 75px;
    height: 35px;
    font-size: 14px;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      width: 75px;
      height: 35px;
      font-size: 14px;
    }
  }

  &__btns-cancel {
    margin-left: 16px;
    border-radius: 5px;
    width: 70px;
    height: 35px;
    font-size: 14px;
  }

  &__btns-add {
    margin-left: 5px;
    border-radius: 5px;
    width: 75px;
    height: 35px;
    font-size: 14px;
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
