<template>
  <div>
    <div class="createAd" v-for="crAd in myAd" :key="crAd.id" v-if="haveAdCreateAdMenu">
      <div class="createAd-menu">
        <div class="createAd-menu-map">
          <MapForMyAd
            :width="['300px', '270px', '200px', '200px', '160px']"
            :height="['300px', '270px', '204px', '204px', '160px']"
            :coordinates="crAd.geolocation"
          />
        </div>
        <div class="createAd-menu-info">
          <div class="createAd-menu-info__item">
            <div class="createAd-menu-info__title">Название:</div>
            <div class="createAd-menu-info__value">{{ crAd.nameParty }}</div>
          </div>
          <div class="createAd-menu-info__item">
            <div class="createAd-menu-info__title">Место вечеринки:</div>
            <div class="createAd-menu-info__value">{{ crAd.place }}</div>
          </div>
          <div class="createAd-menu-info__item">
            <div class="createAd-menu-info__title">Дата вечеринки:</div>
            <div class="createAd-menu-info__value">{{ calculateDate(crAd.dateParty) }}</div>
          </div>
          <div class="createAd-menu-info__item">
            <div class="createAd-menu-info__title">Кол-во девушек:</div>
            <div class="createAd-menu-info__value">{{ crAd.girl }}</div>
          </div>
          <div class="createAd-menu-info__item-end">
            <div class="createAd-menu-info__title">Кол-во парней:</div>
            <div class="createAd-menu-info__value">{{ crAd.boy }}</div>
          </div>
        </div>
        <div class="createAd-menu-choose">
          <div class="createAd-menu-choose__btn">
            <el-tooltip
              class="item" effect="dark" content="Подробная информация" placement="right"
            >
              <button class="createAd-menu-choose__btn-one">
                <i class="el-icon-info"></i>
              </button>
            </el-tooltip>
            <el-tooltip
              class="item" effect="dark" content="Удалить объявление" placement="right"
            >
              <button class="createAd-menu-choose__btn-two" @click="deleteAd(crAd.id)">
                <i class="el-icon-delete"></i>
              </button>
            </el-tooltip>
          </div>
          <div class="createAd-menu-choose__moderation">{{ crAd.editable ? 'Готово' : 'На модерации' }}</div>
        </div>
      </div>
    </div>
    <div class="not-advert" v-if="!haveAdCreateAdMenu">
      <div>
        <i class="el-icon-tickets not-advert__icon-one"></i>
      </div>
      <div class="not-advert__text">У вас нет созданных объявлений.</div>
      <nuxt-link to="/home/createAd">
        <button class="not-advert__btn">Создать объявление</button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import MapForMyAd from '@/components/Home/Menu/MyParty/MyAd/MapForMyAd'

export default {
  beforeCreate() {
    if (process.browser) {
      if (this.$store.getters['myParty/myAd'].length === 0) {
        this.$store.dispatch('myParty/getMyAd')
      }
    }
  },
  methods: {
    calculateDate(value) {
      return value.substr(8, 2) + value.substr(4, 3) + value.substr(4, 1) + value.substr(0, 4) + ' вр:' + value.substr(11, 5)
    },
    deleteAd(id) {
      const idAd = Number(id)
      if (idAd) {
        this.$confirm('Вы действительно хотите удалить объявление?', 'Предупреждение', {
          confirmButtonText: 'Да',
          cancelButtonText: 'Отмена',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch('createAdMenu/deleteAd', idAd)
        })
      }
    }
  },
  computed: {
    myAd() {
      return this.$store.getters['myParty/myAd']
    },
    haveAdCreateAdMenu() {
      return this.$store.getters['myParty/haveAdCreateAdMenu']
    }
  },
  components: {
    MapForMyAd
  }
}
</script>

<style scoped lang="scss">
@import "../../../../assets/settings";

.createAd {
  padding: 15px 10px 10px;

  @include breakpoint(dxxxl) {
    padding: 15px 10px 10px;
  }

  @include breakpoint(dxxl) {
    padding: 15px 10px 10px;
  }
}

.createAd-menu {
  display: grid;
  grid-template-columns: 300px 440px 144px;
  margin-bottom: 30px;
  border-radius: 20px;
  padding: 10px 10px 10px 20px;
  width: 100%;
  height: 324px;
  background-color: #fef3fc;

  @include breakpoint(dxxxxl) {
    grid-template-columns: 270px 393px 124px;
    height: 292px;
  }

  @include breakpoint(dxxxl) {
    grid-template-columns: 200px 260px 114px;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 10px 5px 10px 10px;
    height: 224px;
  }

  @include breakpoint(dxxl) {
    grid-template-columns: 200px 260px 114px;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 10px 5px 10px 10px;
    height: 224px;
  }

  @include breakpoint(dsm) {
    grid-template-columns: 160px 240px 65px;
    margin-bottom: 3px;
    padding: 15px 5px 10px 10px;
    height: 190px;
  }
}

.createAd-menu-info {
  padding: 10px 0 10px 10px;

  &__item {
    display: flex;
    align-items: center;
    padding-bottom: 52px;

    @include breakpoint(dxxxxl) {
      padding-bottom: 46px;
    }

    @include breakpoint(dxxxl) {
      padding-bottom: 30px;
    }

    @include breakpoint(dxxl) {
      padding-bottom: 30px;
    }

    @include breakpoint(dsm) {
      padding-bottom: 19px;
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

  @include breakpoint(dxxxl) {
    padding: 10px 0 10px 10px;
  }

  @include breakpoint(dxxl) {
    padding: 10px 0 10px 10px;
  }
}

.createAd-menu-choose {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__btn-one {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 42px;
    border-radius: 100%;
    width: 43px;
    height: 43px;
    background: none;

    i {
      font-size: 65px;

      @include breakpoint(dxxxxl) {
        font-size: 58px;
      }

      @include breakpoint(dxxxl) {
        font-size: 48px;
      }

      @include breakpoint(dxxl) {
        font-size: 48px;
      }

      @include breakpoint(dsm) {
        font-size: 38px;
      }
    }

    @include breakpoint(dxxxl) {
      margin-top: 20px;
      width: 43px;
      height: 43px;
    }

    @include breakpoint(dxxl) {
      margin-top: 20px;
      width: 43px;
      height: 43px;
    }

    @include breakpoint(dsm) {
      margin-top: 15px;
      width: 43px;
      height: 43px;
    }
  }

  &__btn-two {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 63px;
    width: 48px;
    height: 46px;
    background: none;

    i {
      font-size: 65px;

      @include breakpoint(dxxxxl) {
        font-size: 58px;
      }

      @include breakpoint(dxxxl) {
        font-size: 48px;
      }

      @include breakpoint(dxxl) {
        font-size: 48px;
      }

      @include breakpoint(dsm) {
        font-size: 38px;
      }
    }

    @include breakpoint(dxxxl) {
      margin-top: 35px;
      width: 48px;
      height: 46px;
    }

    @include breakpoint(dxxl) {
      margin-top: 35px;
      width: 48px;
      height: 46px;
    }

    @include breakpoint(dsm) {
      margin-top: 16px;
      width: 43px;
      height: 43px;
    }
  }

  &__moderation {
    margin-top: 71px;
    font-size: 19px;
    color: #9f5db5;

    @include breakpoint(dxxxxl) {
      margin-top: 49px;
      font-size: 17px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 37px;
      font-size: 11px;
    }

    @include breakpoint(dxxl) {
      margin-top: 37px;
      font-size: 11px;
    }

    @include breakpoint(dsm) {
      margin-top: 23px;
      font-size: 10px;
    }
  }
}

.not-advert {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 315px;

  &__icon-one {
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

  &__btn {
    margin-top: 10px;
    border: 1px solid #d38eec;
    border-radius: 5px;
    width: 150px;
    height: 40px;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 13px;
    line-height: 18px;
    color: #771699;
    background: #fff;

    &:hover {
      outline-color: rgba(255, 255, 255, 0);
      outline-offset: 15px;
      border: 1px solid #771699;
      box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
      text-shadow: 1px 1px 2px #9ebecb;
    }

    @include breakpoint(dxxxl) {
      width: 145px;
    }

    @include breakpoint(dsm) {
      margin-top: 8px;
      width: 130px;
      height: 34px;
      font-size: 12px;
    }
  }

  @include breakpoint(dxxxxl) {
    margin-top: 271px;
  }

  @include breakpoint(dxxxl) {
    margin-top: 203px;
  }

  @include breakpoint(dxxl) {
    margin-top: 200px;
  }

  @include breakpoint(dxl) {
    margin-top: 205px;
  }

  @include breakpoint(dsm) {
    margin-top: 169px;
  }
}
</style>
