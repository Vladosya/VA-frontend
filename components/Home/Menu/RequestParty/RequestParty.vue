<template>
  <div>
    <div class="requestParty">
      <div class="requestParty-block">
        <div class="requestParty-block__avatar"></div>
        <div class="requestParty-block__info">
          <div class="requestParty-block__item">
            <div class="requestParty-block__title">Название:</div>
            <div class="requestParty-block__value">VA</div>
          </div>
          <div class="requestParty-block__item">
            <div class="requestParty-block__title">Место вечеринки:</div>
            <div class="requestParty-block__value">Чернышевского 9 / 13 к 2</div>
          </div>
          <div class="requestParty-block__item">
            <div class="requestParty-block__title">Дата вечеринки:</div>
            <div class="requestParty-block__value">23-06-2021 вр:21:00</div>
          </div>
          <div class="requestParty-block__person">
            <div class="requestParty-block__person-info">
              <div class="requestParty-block__item">
                <div class="requestParty-block__title">Кол-во девушек:</div>
                <div class="requestParty-block__value">30</div>
              </div>
              <div class="requestParty-block__item">
                <div class="requestParty-block__title">Кол-во парней:</div>
                <div class="requestParty-block__value">5</div>
              </div>
              <div class="requestParty-block__item">
                <div class="requestParty-block__title">Общее кол-во:</div>
                <div class="requestParty-block__value">35</div>
              </div>
            </div>
            <div class="requestParty-block-table">
              <div>
                <div class="requestParty-block-table__col-one" v-if="haveBoysLength > 0">
                  <button
                    class="requestParty-block-table__arrow-left"
                    :disabled="currentPageBoy === 0"
                    @click="prevBoy"
                  >
                    <img src="../../../../assets/Home/Menu/RequestParty/leftArrow.svg" alt="">
                  </button>
                  <div
                    class="requestParty-block-table__user"
                    v-for="boy in paginatedDataBoy"
                    :key="boy.id"
                  >
                    <img :src="boy.img" alt="img-boy">
                  </div>
                  <button
                    class="requestParty-block-table__arrow-right"
                    :disabled="currentPageBoy >= pageCountBoys - 1"
                    @click="nextBoy"
                  >
                    <img src="../../../../assets/Home/Menu/RequestParty/rightArrow.svg" alt="">
                  </button>
                </div>
                <div v-if="haveBoysLength === 0 && haveGirlsLength > 0">
                  <div class="requestParty-block-table__not-boys">Парней пока нет :((</div>
                </div>
              </div>
              <div>
                <div class="requestParty-block-table__col-two" v-if="haveGirlsLength > 0">
                  <button
                    class="requestParty-block-table__arrow-left"
                    :disabled="currentPageGirl === 0"
                    @click="prevGirl"
                  >
                    <img src="../../../../assets/Home/Menu/RequestParty/leftArrow.svg" alt="">
                  </button>
                  <div
                    class="requestParty-block-table__user"
                    v-for="girl in paginatedDataGirl"
                    :key="girl.id"
                  >
                    <img :src="girl.img" alt="img-girl">
                  </div>
                  <button
                    class="requestParty-block-table__arrow-right"
                    :disabled="currentPageGirl >= pageCountGirl - 1"
                    @click="nextGirl"
                  >
                    <img src="../../../../assets/Home/Menu/RequestParty/rightArrow.svg" alt="">
                  </button>
                </div>
                <div v-if="haveGirlsLength === 0 && haveBoysLength > 0">
                  <div class="requestParty-block-table__not-girls">Девушек пока нет :((</div>
                </div>
              </div>
              <div v-if="haveBoysLength === 0 && haveGirlsLength === 0">
                <div class="requestParty-block-table__not-person">Ваша вписка пуста :((</div>
              </div>
            </div>
          </div>
        </div>
        <div class="requestParty-block__map">
          <button>
            <img src="../../../../assets/Home/Menu/RequestParty/map.svg" alt="map-requestParty">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPageBoy: 0,
      currentPageGirl: 0,
      size: 5,
      boys: [
        {
          id: 1,
          img: 'https://virtualgallery1-293846.c.cdn77.org/img_HTML/mr_nobody_new.svg'
        },
        {
          id: 2,
          img: 'https://www.dentalain.ru/local/templates/dentaline/img/no-user-photo.png'
        },
        {
          id: 3,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbgp6zdCRgOIcBhFNJJ_XW6haxrT7Ya1Drww&usqp=CAU'
        },
        {
          id: 4,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7R_43bSfVqYmTXgSJe3vv67pmdcURFAQWZhCeBJrI6fD9HlQ1PikuqsE90tg1n0wuEDE&usqp=CAU'
        },
        {
          id: 5,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj3TdvlnC2T1C8TE121seI8MMxTDRup6Xg8Q&usqp=CAU'
        },
        {
          id: 6,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2YyHYVKVd6Ec8Phw2ZdAFJuthXRaEWlHlQ&usqp=CAU'
        },
        {
          id: 7,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOum8r1wH4vte2O8g9f3RVuFY4h750UDELvzHXPM_67S228-eiTy54Qo4MASiW--w2qg&usqp=CAU'
        },
        {
          id: 8,
          img: 'https://thumbs.dreamstime.com/b/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B2%D0%BE%D0%BF%D0%BB%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-%D1%81%D0%B5%D1%80%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-102846161.jpg'
        },
      ],
      girls: [
        {
          id: 1,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOum8r1wH4vte2O8g9f3RVuFY4h750UDELvzHXPM_67S228-eiTy54Qo4MASiW--w2qg&usqp=CAU'
        },
        {
          id: 2,
          img: 'https://thumbs.dreamstime.com/b/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B2%D0%BE%D0%BF%D0%BB%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-%D1%81%D0%B5%D1%80%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-102846161.jpg'
        },
        {
          id: 3,
          img: 'https://www.dentalain.ru/local/templates/dentaline/img/no-user-photo.png'
        },
        {
          id: 4,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbgp6zdCRgOIcBhFNJJ_XW6haxrT7Ya1Drww&usqp=CAU'
        },
        {
          id: 5,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7R_43bSfVqYmTXgSJe3vv67pmdcURFAQWZhCeBJrI6fD9HlQ1PikuqsE90tg1n0wuEDE&usqp=CAU'
        },
        {
          id: 6,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOum8r1wH4vte2O8g9f3RVuFY4h750UDELvzHXPM_67S228-eiTy54Qo4MASiW--w2qg&usqp=CAU'
        },
        {
          id: 7,
          img: 'https://thumbs.dreamstime.com/b/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B2%D0%BE%D0%BF%D0%BB%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-%D1%81%D0%B5%D1%80%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-102846161.jpg'
        },
        {
          id: 8,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOum8r1wH4vte2O8g9f3RVuFY4h750UDELvzHXPM_67S228-eiTy54Qo4MASiW--w2qg&usqp=CAU'
        },
        {
          id: 9,
          img: 'https://thumbs.dreamstime.com/b/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B2%D0%BE%D0%BF%D0%BB%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-%D1%81%D0%B5%D1%80%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-102846161.jpg'
        },
      ]
    }
  },
  methods: {
    nextBoy() {
      this.currentPageBoy++
    },
    prevBoy() {
      this.currentPageBoy--
    },
    nextGirl() {
      this.currentPageGirl++
    },
    prevGirl() {
      this.currentPageGirl--
    },
  },
  computed: {
    pageCountBoys() {
      let l = this.boys.length,
        s = this.size
      return Math.ceil(l / s)
    },
    paginatedDataBoy() {
      const start = this.currentPageBoy * this.size,
        end = start + this.size
      return this.boys
        .slice(start, end)
    },
    pageCountGirl() {
      let l = this.girls.length,
        s = this.size
      return Math.ceil(l / s)
    },
    paginatedDataGirl() {
      const start = this.currentPageGirl * this.size,
        end = start + this.size
      return this.girls
        .slice(start, end)
    },
    haveBoysLength() {
      return this.boys.length
    },
    haveGirlsLength() {
      return this.girls.length
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../../assets/settings";

.requestParty {
  padding: 23px 22px 0;

  @include breakpoint(dsm) {
    padding: 13px 22px 0;
  }
}

.requestParty-block {
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 178px 582px 87px;
  margin-bottom: 9px;
  border-radius: 29px;
  padding: 12px 15px;
  width: 100%;
  height: 249px;
  background-color: #fef3fc;

  &__avatar {
    border: 1px solid #000;
    border-radius: 100%;
    width: 175px;
    height: 175px;

    @include breakpoint(dxxxxl) {
      width: 165px;
      height: 165px;
    }

    @include breakpoint(dxxxl) {
      width: 125px;
      height: 125px;
    }

    @include breakpoint(dxxl) {
      width: 125px;
      height: 125px;
    }

    @include breakpoint(dsm) {
      width: 95px;
      height: 95px;
    }
  }

  &__info {
    margin-left: 8px;
  }

  &__item {
    display: flex;
    align-items: center;
    padding-bottom: 13px;

    @include breakpoint(dxxxl) {
      padding-bottom: 3px;
    }

    @include breakpoint(dxxl) {
      padding-bottom: 3px;
    }

    @include breakpoint(dsm) {
      padding-bottom: 1px;
    }
  }

  &__item-end {
    display: flex;
    align-items: center;
  }

  &__title {
    align-items: center;
    margin-right: 16px;
    font-weight: 500;
    font-style: normal;
    font-size: 20px;
    line-height: 13px;
    text-transform: uppercase;
    color: #9f5db5;

    @include breakpoint(dxxxxl) {
      margin-right: 11px;
      font-size: 17px;
      line-height: 13px;
    }

    @include breakpoint(dxxxl) {
      margin-right: 6px;
      font-size: 11px;
      line-height: 13px;
    }

    @include breakpoint(dxxl) {
      margin-right: 6px;
      font-size: 11px;
      line-height: 13px;
    }

    @include breakpoint(dsm) {
      margin-right: 6px;
      font-size: 10px;
      line-height: 13px;
    }
  }

  &__value {
    margin-right: 10px;
    font-weight: 500;
    font-style: normal;
    font-size: 18px;
    line-height: 12px;
    color: #f9822c;

    @include breakpoint(dxxxxl) {
      font-size: 16px;
      line-height: 12px;
    }

    @include breakpoint(dxxxl) {
      font-size: 11px;
      line-height: 12px;
    }

    @include breakpoint(dxxl) {
      font-size: 11px;
      line-height: 12px;
    }

    @include breakpoint(dsm) {
      font-size: 10px;
      line-height: 12px;
    }
  }

  &__person {
    display: grid;
    grid-template-columns: 240px 290px;
    margin-top: 10px;

    @include breakpoint(dxxxxl) {
      grid-template-columns: 200px 295px;
    }

    @include breakpoint(dxxxl) {
      grid-template-columns: 130px 200px;
    }

    @include breakpoint(dxxl) {
      grid-template-columns: 130px 200px;
    }

    @include breakpoint(dsm) {
      grid-template-columns: 120px 163px;
    }
  }

  &__person-info {
    padding-top: 15px;
  }

  &__map {
    display: flex;
    align-items: center;
    margin-left: 18px;

    button {
      display: flex;
      justify-content: center;
      margin-left: 25px;
      width: 5px;
      background: none;

      img {
        width: 85px;
        height: 88px;

        @include breakpoint(dxxxxl) {
          width: 80px;
          height: 83px;
        }

        @include breakpoint(dxxxl) {
          width: 45px;
          height: 58px;
        }

        @include breakpoint(dxxl) {
          width: 45px;
          height: 58px;
        }

        @include breakpoint(dsm) {
          width: 40px;
          height: 43px;
        }
      }

      @include breakpoint(dxxl) {
        margin-left: 25px;
        width: 5px;
      }

      @include breakpoint(dsm) {
        margin-left: 14px;
      }
    }

    @include breakpoint(dxxxxl) {
      margin-left: 18px;
    }

    @include breakpoint(dxxxl) {
      margin-left: 3px;
    }

    @include breakpoint(dxxl) {
      margin-left: 3px;
    }
  }

  @include breakpoint(dxxxxl) {
    grid-template-columns: 168px 516px 80px;
    margin-bottom: 12px;
    border-radius: 29px;
    padding: 12px 15px;
    height: 210px;
  }

  @include breakpoint(dxxxl) {
    grid-template-columns: 125px 348px 57px;
    margin-bottom: 26px;
    border-radius: 29px;
    padding: 12px 15px;
    height: 149px;
  }

  @include breakpoint(dxxl) {
    grid-template-columns: 125px 348px 57px;
    margin-bottom: 26px;
    border-radius: 29px;
    padding: 12px 15px;
    height: 149px;
  }

  @include breakpoint(dsm) {
    grid-template-columns: 95px 305px 37px;
    margin-bottom: 9px;
    border-radius: 29px;
    padding: 8px 11px;
    height: 135px;
  }
}

.requestParty-block-table {
  border-radius: 40px;
  padding: 2px 9px;
  width: 294px;
  height: 98px;
  background-color: #efdcf7;

  &__arrow-left {
    margin: 5px 3px 0 0;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    background: none;

    img {
      width: 17px;
      height: 21px;

      &:hover {
        outline-color: rgba(255, 255, 255, 0);
        outline-offset: 15px;
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
        text-shadow: 1px 1px 2px #9ebecb;
      }

      @include breakpoint(dxxxxl) {
        width: 15px;
        height: 19px;
      }

      @include breakpoint(dxxxl) {
        width: 10px;
        height: 14px;
      }

      @include breakpoint(dxxl) {
        width: 10px;
        height: 14px;
      }

      @include breakpoint(dsm) {
        width: 8px;
        height: 12px;
      }
    }

    @include breakpoint(dsm) {
      margin: 5px 2px 0 0;
    }
  }

  &__arrow-right {
    position: fixed;
    margin: 5px 0 0 259px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    background: none;

    img {
      width: 17px;
      height: 21px;

      &:hover {
        outline-color: rgba(255, 255, 255, 0);
        outline-offset: 15px;
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
        text-shadow: 1px 1px 2px #9ebecb;
      }

      @include breakpoint(dxxxxl) {
        width: 15px;
        height: 19px;
      }

      @include breakpoint(dxxxl) {
        width: 10px;
        height: 14px;
      }

      @include breakpoint(dxxl) {
        width: 10px;
        height: 14px;
      }

      @include breakpoint(dsm) {
        width: 8px;
        height: 12px;
      }
    }

    @include breakpoint(dxxxxl) {
      margin: 5px 0 0 260px;
    }

    @include breakpoint(dxxxl) {
      margin: 5px 0 0 178px;
    }

    @include breakpoint(dxxl) {
      margin: 5px 0 0 178px;
    }

    @include breakpoint(dsm) {
      margin: 5px 0 0 137px;
    }
  }

  &__user {
    margin-right: 3px;

    img {
      border-radius: 100%;
      width: 45px;
      height: 45px;

      @include breakpoint(dxxxl) {
        width: 30px;
        height: 30px;
      }

      @include breakpoint(dxxl) {
        width: 30px;
        height: 30px;
      }

      @include breakpoint(dsm) {
        width: 23px;
        height: 23px;
      }
    }

    @include breakpoint(dsm) {
      margin-right: 2px;
    }
  }

  &__col-one {
    display: flex;
    align-items: center;
    overflow: hidden;
    max-width: 253px;

    @include breakpoint(dxxxxl) {
      max-width: 260px;
    }

    @include breakpoint(dxxxl) {
      max-width: 175px;
    }

    @include breakpoint(dxxl) {
      max-width: 175px;
    }

    @include breakpoint(dsm) {
      max-width: 134px;
    }
  }

  &__col-two {
    display: flex;
    align-items: center;
    margin-top: 5px;

    @include breakpoint(dxxxl) {
      margin-top: 5px;
    }

    @include breakpoint(dxxl) {
      margin-top: 5px;
    }
  }

  &__not-boys {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    font-size: 18px;
    color: #9f5db5;

    @include breakpoint(dxxxl) {
      height: 30px;
      font-size: 14px;
    }

    @include breakpoint(dxxl) {
      height: 30px;
      font-size: 14px;
    }

    @include breakpoint(dsm) {
      height: 23px;
      font-size: 12px;
    }
  }

  &__not-girls {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3px;
    width: 100%;
    height: 40px;
    font-size: 18px;
    color: #9f5db5;

    @include breakpoint(dxxxl) {
      margin-top: 3px;
      height: 30px;
      font-size: 14px;
    }

    @include breakpoint(dxxl) {
      margin-top: 3px;
      height: 30px;
      font-size: 14px;
    }

    @include breakpoint(dsm) {
      height: 23px;
      font-size: 12px;
    }
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

  @include breakpoint(dxxxxl) {
    padding: 2px 9px;
    width: 294px;
    height: 98px;
  }

  @include breakpoint(dxxxl) {
    padding: 2px 9px;
    width: 205px;
    height: 70px;
  }

  @include breakpoint(dxxl) {
    padding: 2px 9px;
    width: 205px;
    height: 70px;
  }

  @include breakpoint(dsm) {
    padding: 8px 9px;
    width: 165px;
    height: 68px;
  }
}
</style>
