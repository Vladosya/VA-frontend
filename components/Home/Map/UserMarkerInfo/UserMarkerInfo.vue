<template>
  <div>
    <div class="marker-info" v-for="ad in adInfo" :key="ad.id">
      <div class="marker-header">
        <div class="marker-header__comments">
          <button>
            <img
              src="@/assets/Home/markerInfo/openComments.svg"
              alt="open-comments"
            />
          </button>
        </div>
        <div class="marker-header__title">
          {{ ad.author.id === myData[0].id ? "Ваше объявление" : ad.title }}
        </div>
        <div class="marker-header__close">
          <button @click="$emit('closeInfoPerson')">
            <img
              src="@/assets/Home/markerInfo/closeWindow.svg"
              alt="close-window"
            />
          </button>
        </div>
      </div>
      <div class="marker-content">
        <div class="marker-requirements">
          <div class="marker-requirements__title">Требование</div>
          <div class="marker-requirements__boy">
            <img src="@/assets/Home/markerInfo/boy.svg" alt="boy-img" />
            <p>{{ ad.number_of_boys }}</p>
          </div>
          <div class="marker-requirements__girl">
            <img src="@/assets/Home/markerInfo/girl.svg" alt="girl-img" />
            <p>{{ ad.number_of_girls }}</p>
          </div>
        </div>
        <div class="marker-progress">
          <div class="marker-progress__start">
            {{ calculateDate(ad.party_date) }}
          </div>
          <div class="marker-progress__count">
            {{ ad.participants.length }}/{{ ad.number_of_person }}
          </div>
          <div class="marker-progress__person" v-if="havePersonLength > 0">
            <button
              class="marker-progress__left-arrow"
              :disabled="currentPagePeople === 0"
              @click="prevPerson"
            >
              <i class="el-icon-d-arrow-left"></i>
            </button>
            <div class="marker-progress__img">
              <img
                v-for="p in paginatedDataPerson"
                :key="p.id"
                :src="`http://127.0.0.1:8000${p.photo}`"
                alt="onePerson-img"
              />
            </div>
            <button
              class="marker-progress__right-arrow"
              :disabled="currentPagePeople >= pageCountPerson - 1"
              @click="nextPerson"
            >
              <i class="el-icon-d-arrow-right"></i>
            </button>
          </div>
          <div class="marker-progress__progress">
            <div class="marker-progress__title">Прогресс:</div>
            <div class="marker-progress__bar">
              <el-progress
                :percentage="countProgressBar"
                :color="'#ff006b'"
              ></el-progress>
            </div>
          </div>
          <div
            class="marker-progress__btn"
            v-if="ad.participants.length !== ad.number_of_person"
          >
            <button
              @click="openWindowStepOne = !openWindowStepOne"
              v-if="myData[0].id !== ad.author.id"
            >
              Подать заявку
            </button>
          </div>
        </div>
        <div class="marker-author">
          <div class="marker-author__title">Автор</div>
          <div class="marker-author__img">
            <img
              :src="`http://127.0.0.1:8000${ad.author.photo}`"
              alt="author-img"
            />
          </div>
        </div>
      </div>
      <div v-if="openWindowStepOne">
        <div class="apply-window-one" v-if="myData[0].id !== ad.author.id">
          <div class="apply-window-one__header">
            <div>Шаг 1</div>
            <p>Заявка на вписку</p>
            <button>
              <i @click="openWindowStepOne = false" class="el-icon-close"></i>
            </button>
          </div>

          <div class="apply-window-one__boy">
            <img src="@/assets/Home/markerInfo/boy.svg" alt="boy-assert" />
            <p>Количество парней:</p>
            <el-tooltip
              class="item"
              effect="dark"
              content="Необходимо указать кол-во парней с вами"
              placement="right"
            >
              <el-input-number
                @blur="$v.assertInAd.boy.$touch()"
                v-model.trim="assertInAd.boy"
                controls-position="right"
                size="mini"
                :min="0"
              ></el-input-number>
            </el-tooltip>
          </div>
          <div class="apply-window-one__girl">
            <img src="@/assets/Home/markerInfo/girl.svg" alt="girl-assert" />
            <p>Количество девушек:</p>
            <el-tooltip
              class="item"
              effect="dark"
              content="Необходимо указать кол-во девушек с вами"
              placement="right"
            >
              <el-input-number
                @blur="$v.assertInAd.girl.$touch()"
                v-model.trim="assertInAd.girl"
                controls-position="right"
                size="mini"
                :min="0"
              ></el-input-number>
            </el-tooltip>
          </div>
          <div class="apply-window-one__people">
            <img
              src="@/assets/Home/markerInfo/people.svg"
              alt="people-assert"
            />
            <p>Общее количество:</p>
            <el-input-number
              @blur="$v.assertInAd.people.$touch()"
              :value="assertInAd.girl + assertInAd.boy"
              controls-position="right"
              size="mini"
              :disabled="true"
            ></el-input-number>
          </div>
          <div class="apply-window-one__btn">
            <button @click="passedStepOne">Подтвердить</button>
          </div>
        </div>
      </div>
      <div v-if="openWindowStepTwo">
        <ApplyStepTwo
          :openWindowStepTwo="openWindowStepTwo"
          @openWindowStepTwo="openWindowStepTwo = false"
          @applyForMembership="applyForMembership"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import ApplyStepTwo from "./ApplyStepTwo.vue";

export default {
  props: {
    idPerson: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      month: [
        "zero",
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря",
      ],
      currentPagePeople: 0,
      size: 5,
      myData: process.client ? JSON.parse(localStorage.getItem("myData")) : [],
      openWindowStepOne: false,
      openWindowStepTwo: false,
      assertInAd: {
        girl: 0,
        boy: 0,
        people: undefined,
      },
    };
  },
  created() {
    this.$store.dispatch("map/getAdById", {
      id: this.idPerson,
      canIApply: this.canIApply,
      myId: this.myData[0].id,
    });
  },
  computed: {
    adInfo() {
      return this.$store.getters["map/adInfo"];
    },
    countProgressBar() {
      return this.$store.getters["map/countProgressBar"];
    },
    applyToParty() {
      return this.$store.getters["map/applyToParty"];
    },
    pageCountPerson() {
      let l = this.adInfo[0].participants.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedDataPerson() {
      const start = this.currentPagePeople * this.size,
        end = start + this.size;
      return this.adInfo[0].participants.slice(start, end);
    },
    havePersonLength() {
      return this.adInfo[0].participants.length;
    },
  },
  methods: {
    calculateDate(value) {
      return (
        value.substr(9, 2) +
        ` ${
          value.charAt(6, 1) === "0"
            ? `${this.month[value.charAt(7, 1)]} `
            : ` ${this.month[value.substr(6, 2)]} `
        }` +
        value.substr(1, 4)
      );
    },
    nextPerson() {
      this.currentPagePeople++;
    },
    prevPerson() {
      this.currentPagePeople--;
    },
    passedStepOne() {
      this.openWindowStepOne = false;
      this.openWindowStepTwo = true;
    },
    applyForMembership(data) {
      if (this.adInfo.length > 0) {
        const formData = new FormData();
        formData.append("id_ad", this.adInfo[0].id);
        formData.append(
          "number_of_person",
          this.assertInAd.girl + this.assertInAd.boy
        );
        formData.append("number_of_girls", this.assertInAd.girl);
        formData.append("number_of_boys", this.assertInAd.boy);
        formData.append("photo_participants", data.photoPeople);
        formData.append("photo_alcohol", data.photoAlcohol);

        try {
          this.$store.dispatch("map/applyForMembership", formData);
          setTimeout(() => {
            if (this.applyToParty === true) {
              this.openWindowApply = false;
              this.openWindowStepTwo = false;
            }
          }, 100);
        } catch (e) {
          console.log(
            "error in applyForMembership method from UserMarkerInfo.vue",
            e
          );
        }
      }
    },
  },
  components: {
    ApplyStepTwo,
  },
  validations: {
    assertInAd: {
      people: {
        required,
      },
      girl: {
        required,
      },
      boy: {
        required,
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/settings";

.marker-info {
  width: 450px;

  @include breakpoint(dxxxl) {
    width: 400px;
  }
}

.apply-window-one {
  position: absolute;
  top: 80px;
  border: 1px solid #c4c4c4;
  border-radius: 9px;
  width: 454px;
  height: 239px;
  background: #fff;

  &__header {
    display: flex;
    align-items: center;

    div {
      margin-left: 12px;
      font-weight: 400;
      font-style: normal;
      font-size: 12px;
      line-height: 19px;
      text-align: center;

      @include breakpoint(dxxxl) {
        margin-left: 10px;
        font-size: 10px;
      }
    }

    p {
      margin-left: 125px;
      font-weight: 400;
      font-style: normal;
      font-size: 13px;
      line-height: 19px;
      text-align: center;

      @include breakpoint(dxxxl) {
        margin-left: 118px;
        font-size: 11px;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 152px;
      width: 12px;
      height: 12px;
      background: none;

      i {
        font-size: 17px;
      }

      @include breakpoint(dxxxl) {
        margin-left: 136px;
      }
    }
  }

  &__boy {
    display: flex;
    align-items: center;
    margin: 20px 0 0 65px;

    img {
      margin-right: 20px;

      @include breakpoint(dxxxl) {
        margin-right: 15px;
      }
    }

    p {
      margin-right: 28px;

      @include breakpoint(dxxxl) {
        margin-right: 31px;
      }
    }

    @include breakpoint(dxxxl) {
      margin: 15px 0 0 45px;
    }
  }

  &__girl {
    display: flex;
    align-items: center;
    margin: 25px 0 0 65px;

    img {
      margin-right: 20px;

      @include breakpoint(dxxxl) {
        margin-right: 15px;
      }
    }

    p {
      margin-right: 20px;

      @include breakpoint(dxxxl) {
        margin-right: 23px;
      }
    }

    @include breakpoint(dxxxl) {
      margin: 15px 0 0 45px;
    }
  }

  &__people {
    display: flex;
    align-items: center;
    margin: 25px 0 0 65px;

    img {
      margin-right: 20px;

      @include breakpoint(dxxxl) {
        margin-right: 15px;
      }
    }

    p {
      margin-right: 32px;

      @include breakpoint(dxxxl) {
        margin-right: 35px;
      }
    }

    @include breakpoint(dxxxl) {
      margin: 15px 0 0 45px;
    }
  }

  &__btn {
    margin: 18px 15px 0 0;
    text-align: right;

    button {
      border-radius: 4px;
      width: 96px;
      height: 30px;
      font-weight: 400;
      font-style: normal;
      font-size: 10px;
      line-height: 12px;
      color: #fff;
      background: #623ce6;

      @include breakpoint(dxxxl) {
        width: 86px;
        height: 27px;
      }
    }

    @include breakpoint(dxxxl) {
      margin: 22px 12px 0 0;
    }
  }

  @include breakpoint(dxxxl) {
    top: 60px;
    width: 405px;
    height: 218px;
  }
}

.marker-header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #c4c4c4;
  padding: 21px 0;

  &__comments {
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      width: 19px;
      height: 15px;
      background: none;

      i {
        font-size: 22px;
        color: #a79d9d;
      }
    }
  }

  &__title {
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    line-height: 21px;
    color: #1c2a38;

    @include breakpoint(dxxxl) {
      font-size: 15px;
    }
  }

  &__close {
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      width: 19px;
      height: 18px;
      background: none;

      i {
        font-size: 22px;
        color: #a79d9d;
      }
    }
  }

  @include breakpoint(dxxxl) {
    padding: 11px 0;
  }
}

.marker-content {
  display: grid;
  grid-template-columns: 130px 188px 130px;
  padding-bottom: 5px;

  @include breakpoint(dxxxl) {
    grid-template-columns: 110px 178px 110px;
    padding-bottom: 2px;
  }
}

.marker-requirements {
  margin-top: 37px;

  &__title {
    display: flex;
    justify-content: center;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 19px;

    @include breakpoint(dxxxl) {
      font-size: 14px;
    }
  }

  &__boy {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;

    img {
      margin-right: 25px;

      @include breakpoint(dxxxl) {
        margin-right: 15px;
      }
    }

    p {
      font-weight: 500;
      font-style: normal;
      font-size: 15px;
      line-height: 23px;
      color: #ff006b;

      @include breakpoint(dxxxl) {
        font-size: 13px;
      }
    }

    @include breakpoint(dxxxl) {
      margin-top: 12px;
    }
  }

  &__girl {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;

    img {
      margin-right: 25px;

      @include breakpoint(dxxxl) {
        margin-right: 15px;
      }
    }

    p {
      font-weight: 500;
      font-style: normal;
      font-size: 15px;
      line-height: 23px;
      color: #ff006b;

      @include breakpoint(dxxxl) {
        font-size: 13px;
      }
    }

    @include breakpoint(dxxxl) {
      margin-top: 12px;
    }
  }

  @include breakpoint(dxxxl) {
    margin-top: 30px;
  }
}

.marker-progress {
  margin-top: 15px;

  &__start {
    display: flex;
    justify-content: center;
    font-weight: 400;
    font-style: normal;
    font-size: 13px;
    line-height: 15px;

    @include breakpoint(dxxxl) {
      font-size: 11px;
    }
  }

  &__count {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    font-weight: 300;
    font-style: normal;
    font-size: 27px;
    line-height: 35px;
    color: #000;

    @include breakpoint(dxxxl) {
      font-size: 22px;
    }
  }

  &__person {
    display: flex;
    align-items: center;
    overflow: hidden;
    margin: 15px 0 0 9px;
    width: 157px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 10px;
      height: 10px;
      background: none;
    }

    @include breakpoint(dxxxl) {
      margin: 12px 0 0 5px;
    }
  }

  &__left-arrow {
    margin-right: 2px;
  }

  &__img {
    display: flex;
    align-items: center;
    max-width: 145px;

    img {
      border-radius: 100%;
      width: 30px;
      height: 29px;
    }
  }

  &__right-arrow {
    position: fixed;
    margin-left: 159px;
  }

  &__not-person {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3px;
    width: 100%;
    height: 84px;
    font-size: 20px;
    color: #9f5db5;

    @include breakpoint(dxxxxl) {
      height: 84px;
      font-size: 18px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 3px;
      height: 60px;
      font-size: 14px;
    }

    @include breakpoint(dxxl) {
      margin-top: 3px;
      height: 60px;
      font-size: 14px;
    }

    @include breakpoint(dxxxl) {
      height: 60px;
      font-size: 13px;
    }
  }

  &__progress {
    margin-top: 27px;

    @include breakpoint(dxxxl) {
      margin-top: 20px;
    }
  }

  &__title {
    margin-left: 10px;
    font-weight: 700;
    font-style: normal;
    font-size: 11px;
    line-height: 16px;
  }

  &__bar {
    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__btn {
    display: flex;
    justify-content: center;
    margin-top: 15px;

    button {
      border: 1px solid #f3f5f9;
      border-radius: 4px;
      width: 145px;
      height: 34px;
      box-sizing: border-box;
      font-weight: 300;
      font-style: normal;
      font-size: 13px;
      line-height: 15px;
      color: #fff;
      background: #623ce6;

      @include breakpoint(dxxxl) {
        width: 115px;
        height: 30px;
        font-size: 11px;
      }
    }

    @include breakpoint(dxxxl) {
      margin-top: 12px;
    }
  }
}

.marker-author {
  margin-top: 37px;

  &__title {
    display: flex;
    justify-content: center;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 19px;

    @include breakpoint(dxxxl) {
      font-size: 14px;
    }
  }

  &__img {
    display: flex;
    justify-content: center;
    margin-top: 16px;

    img {
      border-radius: 100%;
      width: 65px;
      height: 65px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 12px;
    }
  }

  @include breakpoint(dxxxl) {
    margin-top: 30px;
  }
}
</style>