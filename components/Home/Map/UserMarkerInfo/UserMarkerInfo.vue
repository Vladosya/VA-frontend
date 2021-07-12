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
                :src="p.img"
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
      currentPagePeople: 0,
      size: 5,
      person: [
        {
          id: 1,
          img: "https://virtualgallery1-293846.c.cdn77.org/img_HTML/mr_nobody_new.svg",
        },
        {
          id: 2,
          img: "https://www.dentalain.ru/local/templates/dentaline/img/no-user-photo.png",
        },
        {
          id: 3,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbgp6zdCRgOIcBhFNJJ_XW6haxrT7Ya1Drww&usqp=CAU",
        },
        {
          id: 4,
          img: "https://virtualgallery1-293846.c.cdn77.org/img_HTML/mr_nobody_new.svg",
        },
        {
          id: 5,
          img: "https://www.dentalain.ru/local/templates/dentaline/img/no-user-photo.png",
        },
        {
          id: 6,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbgp6zdCRgOIcBhFNJJ_XW6haxrT7Ya1Drww&usqp=CAU",
        },
        {
          id: 4,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbgp6zdCRgOIcBhFNJJ_XW6haxrT7Ya1Drww&usqp=CAU",
        },
        {
          id: 5,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7R_43bSfVqYmTXgSJe3vv67pmdcURFAQWZhCeBJrI6fD9HlQ1PikuqsE90tg1n0wuEDE&usqp=CAU",
        },
        {
          id: 6,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOum8r1wH4vte2O8g9f3RVuFY4h750UDELvzHXPM_67S228-eiTy54Qo4MASiW--w2qg&usqp=CAU",
        },
        {
          id: 7,
          img: "https://thumbs.dreamstime.com/b/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B2%D0%BE%D0%BF%D0%BB%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-%D1%81%D0%B5%D1%80%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-102846161.jpg",
        },
        {
          id: 8,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOum8r1wH4vte2O8g9f3RVuFY4h750UDELvzHXPM_67S228-eiTy54Qo4MASiW--w2qg&usqp=CAU",
        },
        {
          id: 9,
          img: "https://thumbs.dreamstime.com/b/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B2%D0%BE%D0%BF%D0%BB%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-%D1%81%D0%B5%D1%80%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-102846161.jpg",
        },
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
    pageCountPerson() {
      let l = this.person.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedDataPerson() {
      const start = this.currentPagePeople * this.size,
        end = start + this.size;
      return this.person.slice(start, end);
    },
    havePersonLength() {
      return this.person.length;
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
    nextPerson() {
      this.currentPagePeople++;
    },
    prevPerson() {
      this.currentPagePeople--;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/settings";

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
  }

  &__left-arrow {
    margin-right: 2px;
  }

  &__img {
    display: flex;
    align-items: center;
    max-width: 145px;

    img {
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

    @include breakpoint(dsm) {
      height: 60px;
      font-size: 13px;
    }
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