<template>
  <div>
    <div class="requestMyParty">
      <div v-for="r in requestMyParty" :key="r.author_id">
        <div v-if="haveRequestMyParty">
          <div class="requestMyParty-block">
            <div>
              <div class="request-person">
                <img
                  :src="`http://127.0.0.1:8000/images/${r.photo_user}`"
                  alt="request-person-img"
                  class="request-person__img"
                />
              </div>
              <div class="request-info">
                <h2>
                  <span>{{ r.username }}</span>
                </h2>
                <button
                  class="request-info__btn-accept"
                  :disabled="isClickInfo"
                  @click="acceptToMyAd(r)"
                >
                  Принять
                </button>
                <button
                  class="request-info__btn-inject"
                  @click="refuseToMyAd(r)"
                >
                  Отклонить
                </button>
              </div>
              <button
                class="requestMyParty-block__btn-info"
                @click="clickInfoWindow(r.author_id)"
              >
                <i class="el-icon-camera"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isClickInfo">
      <InfoRequestMyParty
        @clickButtonClose="isClickInfo = false"
        :idPerson="idPerson"
      />
    </div>
    <div class="not-requestMyParty" v-if="!haveRequestMyParty">
      <div>
        <i class="el-icon-magic-stick not-requestMyParty__icon"></i>
      </div>
      <div class="not-requestMyParty__text">
        Список заявок пуст! <br />
        Нажмите на выпадающий список в правом верхнем углу окна. <br />
        Если он пуст, то создайте объявление
      </div>
    </div>
  </div>
</template>

<script>
import InfoRequestMyParty from "./InfoRequestMyParty.vue";

export default {
  data() {
    return {
      isClickInfo: false,
      idPerson: 0,
    };
  },
  computed: {
    haveRequestMyParty() {
      return this.$store.getters["myParty/haveRequestMyParty"];
    },
    requestMyParty() {
      return this.$store.getters["myParty/requestMyParty"];
    },
  },
  methods: {
    clickInfoWindow(idPerson) {
      if (typeof idPerson === "number") {
        this.idPerson = idPerson;
        this.isClickInfo = true;
      }
    },
    acceptToMyAd(r) {
      const adId = this.$store.state.myParty.myAdId;

      const formData = {
        id_user: r.author_id,
        id_ad: adId,
      };

      try {
        this.$store.dispatch("myParty/acceptParticipantOnParty", {
          formData: formData,
          authorId: r.author_id,
        });
      } catch (e) {
        console.log("error in acceptToMyId method from RequestMyParty.vue", e);
      }
    },
    refuseToMyAd(r) {
      try {
        this.$store.dispatch("myParty/refuseParticipantOnParty", {
          idPerson: r.id,
          authorId: r.author_id,
        });
      } catch (error) {
        console.log("error in refuseToMyAd method from RequestMyParty.vue", e);
      }
    },
  },
  components: {
    InfoRequestMyParty,
  },
};
</script>

<style scoped lang="scss">
@import "../../../../../assets/settings";

.requestMyParty {
  display: flex;
  flex-wrap: wrap;
}

.requestMyParty-block {
  position: relative;
  margin: 10px 0 70px 105px;
  width: 302.7px;
  height: 302px;

  &__btn-info {
    position: absolute;
    right: 7px;
    top: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 18px;

    i {
      font-size: 25px;
    }
  }

  @include breakpoint(dxxxxl) {
    margin: 10px 0 70px 90px;
    width: 272.7px;
    height: 272px;
  }

  @include breakpoint(dxxxl) {
    margin: 10px 0 70px 55px;
    width: 202.7px;
    height: 202px;
  }

  @include breakpoint(dxxl) {
    margin: 10px 0 70px 55px;
    width: 202.7px;
    height: 202px;
  }

  @include breakpoint(dsm) {
    margin: 10px 0 45px 55px;
    width: 152.7px;
    height: 152px;
  }
}

.request-person {
  &__img {
    width: 304px;
    height: 304px;

    @include breakpoint(dxxxxl) {
      width: 274px;
      height: 274px;
    }

    @include breakpoint(dxxxl) {
      width: 204px;
      height: 204px;
    }

    @include breakpoint(dxxl) {
      width: 204px;
      height: 204px;
    }

    @include breakpoint(dsm) {
      width: 154px;
      height: 154px;
    }
  }

  &__btn {
    position: absolute;
    right: 16px;
    top: 15px;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid;
    border-radius: 50%;
    width: 53px;
    height: 53px;
    line-height: 44px;
    text-align: center;
    color: #fff;
    background-color: #4a148c;
    cursor: pointer;

    img {
      @include breakpoint(dsm) {
        width: 11px;
        height: 11px;
      }
    }

    &:hover {
      outline-color: rgba(255, 255, 255, 0);
      outline-offset: 15px;
      border: 1px solid #771699;
      text-shadow: 1px 1px 2px #9ebecb;
    }

    @include breakpoint(dxxxxl) {
      width: 43px;
      height: 43px;
    }

    @include breakpoint(dxxxl) {
      width: 33px;
      height: 33px;
    }

    @include breakpoint(dxxl) {
      width: 33px;
      height: 33px;
    }

    @include breakpoint(dsm) {
      border: 3px solid;
      width: 23px;
      height: 23px;
    }
  }
}

.request-info {
  position: absolute;
  left: -16px;
  right: 0;
  top: 30px;
  margin-bottom: 6.6em;
  padding-bottom: calc(100% - 16px);
  height: 0;

  h2 {
    position: absolute;
    left: 0;
    top: calc(100% - 16px);
    z-index: 10;
    margin: 0;
    padding: 15px 16px;
    width: 320px;
    font-size: 1.7em;
    line-height: 1.6em;
    color: #fff;
    background-color: #9c27b0;
    transition: all 0.3s;

    ::before {
      content: " ";
      position: absolute;
      left: 0;
      top: -16px;
      border: 8px solid;
      border-top-color: transparent;
      border-right-color: #4a148c;
      border-bottom-color: #4a148c;
      width: 0;
      transition: all 0.3s;
    }

    span {
      display: block;
      font-size: 1.2em;
      line-height: 1em;
      color: #fff;

      @include breakpoint(dxxxxl) {
        font-size: 1.1em;
        line-height: 1em;
      }

      @include breakpoint(dxxxl) {
        font-size: 1em;
        line-height: 1em;
      }

      @include breakpoint(dxxl) {
        font-size: 1em;
        line-height: 1em;
      }

      @include breakpoint(dsm) {
        font-size: 1em;
        line-height: 1em;
      }
    }

    strong {
      display: block;
      font-weight: 400;
      font-size: 0.8em;
      line-height: 1.4em;
      color: #fff;
    }

    @include breakpoint(dxxxxl) {
      padding: 15px 16px;
      width: 290px;
      font-size: 1.5em;
      line-height: 1.6em;
    }

    @include breakpoint(dxxxl) {
      padding: 15px 16px;
      width: 220px;
      font-size: 1.4em;
      line-height: 1.6em;
    }

    @include breakpoint(dxxl) {
      padding: 15px 16px;
      width: 220px;
      font-size: 1.4em;
      line-height: 1.6em;
    }

    @include breakpoint(dsm) {
      padding: 10px 16px;
      width: 170px;
      font-size: 1em;
      line-height: 1.6em;
    }
  }

  &__btn-accept {
    position: absolute;
    right: 63px;
    bottom: -26px;
    z-index: 10;
    border: 1px solid #d38eec;
    border-radius: 6px;
    width: 60px;
    height: 34px;
    box-sizing: border-box;
    font-size: 11px;
    color: #d38eec;
    background: #fff;

    &:hover {
      outline-color: rgba(255, 255, 255, 0);
      outline-offset: 15px;
      border: 1px solid #771699;
    }
  }

  &__btn-inject {
    position: absolute;
    right: 0;
    bottom: -26px;
    z-index: 10;
    border: 1px solid #d38eec;
    border-radius: 6px;
    width: 60px;
    height: 34px;
    box-sizing: border-box;
    font-size: 11px;
    color: #d38eec;
    background: #fff;

    &:hover {
      outline-color: rgba(255, 255, 255, 0);
      outline-offset: 15px;
      border: 1px solid #771699;
    }
  }
}

.requestPartyInfo-block {
  position: relative;
  margin: 55px 0 0 60px;
  width: 222.7px;
  height: 223px;
}

.requestInfo-personal-information {
  width: 224px;
  height: 224px;
  background-color: #f3e5f5;

  &__text {
    padding: 30px 20px 81px;
    width: 224px;
    word-wrap: break-word;
  }

  &__btns {
    padding: 0 0 12px;
    background-color: #e1bee7;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 11px;

      button {
        border: none;
        border-radius: 5px;
        width: 80px;
        height: 35px;
        color: #fff;
        background-color: #4a148c;
      }
    }
  }

  &__btns-one {
    margin-right: 20px;
  }

  &__btn {
    position: absolute;
    right: 30px;
    top: -17px;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid;
    border-radius: 50%;
    width: 39px;
    height: 39px;
    line-height: 44px;
    text-align: center;
    color: #fff;
    background-color: #4a148c;
    animation-name: none;
    cursor: pointer;
  }
}

.request-information {
  position: absolute;
  left: -16px;
  right: 0;
  bottom: 160px;
  margin-bottom: 6.6em;
  padding-bottom: calc(100% - 16px);
  height: 0;

  h2 {
    position: absolute;
    left: 0;
    top: calc(100% - 16px);
    z-index: 10;
    margin: 0;
    padding: 15px 16px;
    width: 240px;
    font-size: 1.4em;
    line-height: 1.6em;
    color: #fff;
    background-color: #9c27b0;
    transition: all 0.3s;

    ::before {
      content: " ";
      position: absolute;
      left: 0;
      bottom: -16px;
      border: 8px solid;
      border-top-color: #4a148c;
      border-right-color: #4a148c;
      border-bottom-color: transparent;
      width: 0;
      transition: all 0.3s;
    }

    span {
      display: block;
      font-size: 1em;
      line-height: 1em;
      color: #fff;
    }

    strong {
      display: block;
      font-weight: 400;
      font-size: 0.8em;
      line-height: 1.6em;
      color: #fff;
    }
  }
}

.not-requestMyParty {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 260px;

  &__icon {
    font-size: 95px;
    color: #771699;

    @include breakpoint(dxxxxl) {
      font-size: 85px;
    }

    @include breakpoint(dxxxl) {
      font-size: 75px;
    }

    @include breakpoint(dxxl) {
      font-size: 75px;
    }

    @include breakpoint(dsm) {
      font-size: 55px;
    }
  }

  &__text {
    font-size: 24px;
    text-align: center;
    color: #771699;

    @include breakpoint(dxxxxl) {
      font-size: 20px;
    }

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

  @include breakpoint(dxxxxl) {
    margin-top: 220px;
  }

  @include breakpoint(dxxxl) {
    margin-top: 165px;
  }

  @include breakpoint(dxxl) {
    margin-top: 175px;
  }

  @include breakpoint(dsm) {
    margin-top: 135px;
  }
}
</style>
