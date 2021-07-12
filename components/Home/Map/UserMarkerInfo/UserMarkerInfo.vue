<template>
  <div>
    <div class="marker-info" v-for="ad in adInfo" :key="ad.id">
      <div class="marker-header">
        <div class="marker-header__comments">
          <button>
            <i class="el-icon-message"></i>
          </button>
        </div>
        <div class="marker-header__title">{{ ad.title }}</div>
        <div class="marker-header__close">
          <button @click="$emit('closeInfoPerson')">
            <i class="el-icon-circle-close"></i>
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
            {{ ad.participants }}/{{ ad.number_of_person }}
          </div>
          <div class="marker-progress__person">
            <button class="marker-progress__left-arrow">
              <i class="el-icon-d-arrow-left"></i>
            </button>
            <div>
              <img
                src="@/assets/Home/markerInfo/onePerson.svg"
                alt="onePerson-img"
              />
              <img
                src="@/assets/Home/markerInfo/twoPerson.svg"
                alt="twoPerson-img"
              />
              <img
                src="@/assets/Home/markerInfo/threePerson.svg"
                alt="threePerson-img"
              />
              <img
                src="@/assets/Home/markerInfo/fourPerson.svg"
                alt="fourPerson-img"
              />
              <img
                src="@/assets/Home/markerInfo/fivePerson.svg"
                alt="fivePerson-img"
              />
            </div>
            <button class="marker-progress__right-arrow">
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
          <div class="marker-progress__btn">
            <button>Подать заявку</button>
          </div>
        </div>
        <div class="marker-author">
          <div class="marker-author__title">Автор</div>
          <div class="marker-author__img">
            <img :src="ad.author.photo" alt="author-img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    };
  },
  created() {
    this.$store.dispatch("map/getAdById", this.idPerson);
  },
  computed: {
    adInfo() {
      return this.$store.getters["map/adInfo"];
    },
    countProgressBar() {
      return this.$store.getters["map/countProgressBar"];
    },
  },
  methods: {
    calculateDate(value) {
      return (
        value.substr(8, 2) +
        ` ${
          value.charAt(5) === "0"
            ? `${this.month[value.charAt(6)]} `
            : ` ${this.month[value.substr(5, 2)]} `
        }` +
        value.substr(0, 4)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.marker-info {
  width: 450px;
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
}

.marker-content {
  display: grid;
  grid-template-columns: 130px 188px 130px;
  padding-bottom: 5px;
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
  }

  &__boy {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;

    img {
      margin-right: 25px;
    }

    p {
      font-weight: 500;
      font-style: normal;
      font-size: 15px;
      line-height: 23px;
      color: #ff006b;
    }
  }

  &__girl {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;

    img {
      margin-right: 25px;
    }

    p {
      font-weight: 500;
      font-style: normal;
      font-size: 15px;
      line-height: 23px;
      color: #ff006b;
    }
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
  }

  &__person {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 10px;
      height: 10px;
      background: none;
    }
  }

  &__left-arrow {
    margin-right: 2px;
  }

  &__right-arrow {
    margin-left: 2px;
  }

  &__progress {
    margin-top: 27px;
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
  }
}
</style>