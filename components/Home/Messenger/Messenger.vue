<template>
  <div class="messenger-block">
    <div class="messenger-block-header">
      <div class="messenger-block-header__title">Чат</div>
      <div class="messenger-block-header__name" v-if="isOpenDialog">
        Иван Иванов
      </div>
    </div>
    <div class="messenger-block-chat">
      <div class="messenger-chat-participants">
        <div @click="clickToDialog" v-for="room in rooms" :key="room.id">
          <nuxt-link
            :to="`/home/messenger/${room.id}?idRoom=${room.id}`"
            class="messenger-participants-person"
          >
            <div class="messenger-participants-person__img">
              <img
                src="../../../assets/Home/Message/partnerPhotoTwo.png"
                alt="dsds"
                class="messenger-participants-person__img-two"
              />
              <p class="messenger-participants-person__isOnline"></p>
            </div>
            <div class="messenger-participants-person__info">
              <div class="messenger-participants-person__name">
                {{ room.ad.title }}
              </div>
              <div class="messenger-participants-person__letter">
                Здесь вы можете р....
              </div>
            </div>
            <div class="messenger-participants-person__notReaded">
              <p class="messenger-participants-person__read">1</p>
            </div>
          </nuxt-link>
        </div>
        <div class="messenger-not-dialog" v-if="!isOpenDialog">
          <i class="el-icon-notebook-1"></i>
          <p>Список диалогов пуст</p>
        </div>
      </div>

      <div class="messenger-chat-line"></div>

      <div
        class="messenger-chat-correspondence"
        :class="{ 'messenger-not-content': !isOpenDialog }"
      >
        <div v-if="isOpenDialog">
          <nuxt-child></nuxt-child>
        </div>
        <div class="messenger-not-style" v-if="!isOpenDialog">
          <i class="el-icon-folder-opened"></i>
          <p>Диалоги пусты</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    if (process.client) {
      if (!this.$store.getters["message/rooms"].length) {
        this.$store.dispatch("message/getRooms");
      }
    }
  },
  data() {
    return {
      isOpenDialog: false,
      connection: "",
    };
  },
  computed: {
    rooms() {
      return this.$store.getters["message/rooms"];
    },
  },
  methods: {
    clickToDialog() {
      this.isOpenDialog = true;
    },
  },
};
</script>

<style scoped lang="scss">
@import "assets/settings.scss";

.messenger-block {
  margin: 0 auto;
  width: 2053px;
  height: 1245px;
  background-color: #fff;

  @include breakpoint(dxxxxl) {
    width: 1453px;
    height: 915px;
  }

  @include breakpoint(dxxxl) {
    width: 1325px;
    height: 770px;
  }

  @include breakpoint(dxxl) {
    width: 1253px;
    height: 663px;
  }

  @include breakpoint(dxl) {
    width: 1158px;
    height: 771px;
  }

  @include breakpoint(dlg) {
    width: 1084px;
    height: 639px;
  }

  @include breakpoint(dmd) {
    width: 997px;
    height: 671px;
  }

  @include breakpoint(dsm) {
    width: 741px;
    height: 670px;
  }
}

.messenger-block-header {
  display: flex;
  align-items: center;
  border: 2px solid #fff;
  border-radius: 5px 5px 0 0;
  padding: 6px;
  box-sizing: border-box;
  background-color: #f6eef9;

  &__title {
    margin-left: 46px;
    font-family: "Manrope", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 28px;
    line-height: 25px;
    color: #771699;

    @include breakpoint(dxxxxl) {
      margin-left: 41px;
      font-size: 21px;
    }

    @include breakpoint(dxxxl) {
      margin-left: 36px;
      font-size: 18px;
    }

    @include breakpoint(dxxl) {
      margin-left: 36px;
      font-size: 18px;
    }

    @include breakpoint(dlg) {
      font-size: 16px;
    }

    @include breakpoint(dmd) {
      font-size: 13px;
    }
  }

  &__name {
    margin-left: 500px;
    font-family: "Manrope", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 28px;
    line-height: 25px;
    color: #771699;

    @include breakpoint(dxxxxl) {
      margin-left: 313px;
      font-size: 21px;
    }

    @include breakpoint(dxxxl) {
      margin-left: 300px;
      font-size: 18px;
    }

    @include breakpoint(dxxl) {
      margin-left: 300px;
      font-size: 18px;
    }

    @include breakpoint(dlg) {
      font-size: 16px;
    }

    @include breakpoint(dmd) {
      font-size: 13px;
    }
  }

  @include breakpoint(dxxxxl) {
    border: 2px solid #fff;
    border-radius: 5px 5px 0 0;
    padding: 1px;
  }

  @include breakpoint(dxxxl) {
    border: 2px solid #fff;
    border-radius: 5px 5px 0 0;
    padding: 1px;
  }

  @include breakpoint(dxxl) {
    border: 2px solid #fff;
    border-radius: 5px 5px 0 0;
    padding: 1px;
  }
}

.messenger-block-chat {
  display: grid;
  grid-template-columns: 492px 2px 1555px;
  padding: 0 1px 1px;

  @include breakpoint(dxxxxl) {
    grid-template-columns: 352px 2px 1095px;
    padding: 0 1px 1px;
  }

  @include breakpoint(dxxxl) {
    grid-template-columns: 332px 2px 987px;
    padding: 0 1px 1px;
  }

  @include breakpoint(dxxl) {
    grid-template-columns: 332px 2px 915px;
    padding: 0 1px 1px;
  }

  @include breakpoint(dxl) {
    grid-template-columns: 332px 2px 820px;
  }

  @include breakpoint(dlg) {
    grid-template-columns: 312px 2px 767px;
  }

  @include breakpoint(dmd) {
    grid-template-columns: 292px 2px 700px;
  }

  @include breakpoint(dsm) {
    grid-template-columns: 222px 2px 515px;
  }
}

.messenger-chat-participants {
  position: relative;
  overflow: auto;
  padding: 34px 0 35px 46px;
  height: 1204px;

  @include breakpoint(dxxxxl) {
    padding: 24px 0 25px 37px;
    height: 885px;
  }

  @include breakpoint(dxxxl) {
    padding: 24px 0 25px 37px;
    height: 740px;
  }

  @include breakpoint(dxxl) {
    padding: 24px 0 25px 27px;
    height: 630px;
  }

  @include breakpoint(dxl) {
    height: 740px;
  }

  @include breakpoint(dlg) {
    height: 608px;
  }

  @include breakpoint(dmd) {
    padding: 24px 0 25px 33px;
  }

  @include breakpoint(dsm) {
    padding: 20px 0 25px 15px;
    height: 622px;
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

.messenger-participants-person {
  display: flex;
  margin: 0 10px 10px 0;
  padding: 10px 0 0 10px;

  &__img-two {
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
      top: -11px;
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
    color: #797979;

    @include breakpoint(dxxxxl) {
      margin-top: 3px;
      font-size: 15px;
      line-height: 19px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 3px;
      font-size: 14px;
      line-height: 19px;
    }

    @include breakpoint(dxxl) {
      margin-top: 3px;
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
      font-size: 10px;
    }
  }

  &__notReaded {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0 0 73px;
    border-radius: 100%;
    width: 37px;
    height: 37px;
    background: #771699;

    p {
      font-family: "Manrope", sans-serif;
      font-weight: 700;
      font-style: normal;
      font-size: 18px;
      line-height: 19px;
      color: #fff;

      @include breakpoint(dxxxxl) {
        font-size: 14px;
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

    @include breakpoint(dxxxxl) {
      margin: 11px 0 0 33px;
      width: 27px;
      height: 27px;
    }

    @include breakpoint(dxxxl) {
      margin: 8px 0 0 33px;
      width: 27px;
      height: 27px;
    }

    @include breakpoint(dxxl) {
      margin: 8px 0 0 33px;
      width: 27px;
      height: 27px;
    }

    @include breakpoint(dlg) {
      margin: 10px 0 0 33px;
      width: 25px;
      height: 25px;
    }

    @include breakpoint(dmd) {
      margin: 9px 0 0 33px;
      width: 23px;
      height: 23px;
    }

    @include breakpoint(dsm) {
      margin: 9px 0 0 17px;
      width: 20px;
      height: 20px;
    }
  }

  &:hover {
    border-radius: 10px;
    color: #771699;
    background-color: #f8ecff;
  }

  @include breakpoint(dxxxxl) {
    margin: 0 10px 10px 0;
    padding: 13px 0 0 2px;
  }

  @include breakpoint(dxxxl) {
    margin: 0 10px 10px 0;
    padding: 10px 0 0 10px;
  }

  @include breakpoint(dxxl) {
    margin: 0 10px 10px 0;
    padding: 10px 0 0 10px;
  }

  @include breakpoint(dlg) {
    margin: 0 10px 10px 0;
  }

  @include breakpoint(dmd) {
    margin: 0 10px 10px 0;
  }

  @include breakpoint(dsm) {
    margin: 0 10px 5px 0;
    padding: 10px 0 0 3px;
  }
}

.messenger-chat-line {
  width: 3px;
  height: 1196px;
  background: #f6eef9;

  @include breakpoint(dxxxxl) {
    width: 2px;
    height: 880px;
  }

  @include breakpoint(dxxxl) {
    width: 2px;
    height: 735px;
  }

  @include breakpoint(dxxl) {
    width: 2px;
    height: 630px;
  }

  @include breakpoint(dxl) {
    height: 735px;
  }

  @include breakpoint(dlg) {
    height: 605px;
  }

  @include breakpoint(dmd) {
    height: 635px;
  }
}

.el-icon-folder-opened {
  font-size: 120px;
  color: #771699;

  @include breakpoint(dxxxxl) {
    font-size: 100px;
  }

  @include breakpoint(dxxxl) {
    font-size: 70px;
  }

  @include breakpoint(dxxl) {
    font-size: 55px;
  }

  @include breakpoint(dlg) {
    font-size: 50px;
  }

  @include breakpoint(dmd) {
    font-size: 45px;
  }

  @include breakpoint(dsm) {
    font-size: 38px;
  }
}

.messenger-not-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.messenger-not-dialog {
  i {
    margin: 480px 0 0 140px;
    font-size: 110px;
    color: #771699;

    @include breakpoint(dxxxxl) {
      margin: 360px 0 0 100px;
      font-size: 80px;
    }

    @include breakpoint(dxxxl) {
      margin: 290px 0 0 100px;
      font-size: 70px;
    }

    @include breakpoint(dxxl) {
      margin: 245px 0 0 110px;
      font-size: 55px;
    }

    @include breakpoint(dxl) {
      margin: 305px 0 0 110px;
    }

    @include breakpoint(dlg) {
      margin: 240px 0 0 100px;
    }

    @include breakpoint(dmd) {
      margin: 255px 0 0 90px;
    }

    @include breakpoint(dsm) {
      margin: 270px 0 0 80px;
      font-size: 38px;
    }
  }

  p {
    margin-left: 40px;
    font-size: 33px;
    color: #771699;

    @include breakpoint(dxxxxl) {
      margin-left: 28px;
      font-size: 23px;
    }

    @include breakpoint(dxxxl) {
      margin-left: 37px;
      font-size: 20px;
    }

    @include breakpoint(dxxl) {
      margin-left: 50px;
      font-size: 17px;
    }

    @include breakpoint(dlg) {
      margin-left: 45px;
    }

    @include breakpoint(dmd) {
      font-size: 14px;
    }

    @include breakpoint(dsm) {
      margin-left: 35px;
      font-size: 13px;
    }
  }
}

.messenger-not-style {
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    font-size: 110px;

    @include breakpoint(dxxxxl) {
      font-size: 80px;
    }

    @include breakpoint(dxxxl) {
      font-size: 70px;
    }

    @include breakpoint(dxxl) {
      font-size: 55px;
    }

    @include breakpoint(dsm) {
      font-size: 38px;
    }
  }

  p {
    font-size: 33px;
    color: #771699;

    @include breakpoint(dxxxxl) {
      font-size: 25px;
    }

    @include breakpoint(dxxxl) {
      font-size: 20px;
    }

    @include breakpoint(dxxl) {
      font-size: 17px;
    }

    @include breakpoint(dlg) {
      font-size: 15px;
    }

    @include breakpoint(dmd) {
      font-size: 14px;
    }

    @include breakpoint(dsm) {
      font-size: 13px;
    }
  }
}

@media (height: 864px) {
  .messenger-block {
    width: 1253px;
    height: 734px;
  }

  .messenger-chat-participants {
    height: 703px;
  }

  .messenger-chat-line {
    width: 2px;
    height: 700px;
  }

  .messenger-not-dialog {
    i {
      margin: 280px 0 0 110px;
    }
  }

  .messenger-not-style {
    i {
      font-size: 55px;
    }
  }
}
</style>
