<template>
  <div class="myParty-block">
    <div class="myParty-block__flex">
      <div class="myParty-item-block">
        <nuxt-link class="myParty-item-block__item-one" to="/home/menu/myParty/myAd">
          <button>
            <i class="el-icon-postcard"></i>
            <div>Мое объявление</div>
          </button>
        </nuxt-link>
        <nuxt-link class="myParty-item-block__item-two" exact to="/home/menu/myParty/myParticipants">
          <button>
            <i class="el-icon-connection"></i>
            <div>Участники</div>
          </button>
        </nuxt-link>
        <nuxt-link class="myParty-item-block__item-three" to="/home/menu/myParty/requestMyParty">
          <button>
            <i class="el-icon-postcard"></i>
            <div>Заявки на вечеринку</div>
          </button>
        </nuxt-link>
      </div>
      <div class="myParty-filter">
        <el-tooltip
          class="item" effect="dark" content="Выбрать вечеринку" placement="top"
        >
          <el-select size="mini" no-data-text="объявлений нет" v-model="value" placeholder="Выбрать"
                     class="myParty-filter__input">
            <el-option
              v-for="item in myAdByFilter"
              :key="item.id"
              :label="item.nameParty"
              :value="item.nameParty"
            >
              <div @click='selectedId(item.id)'>
                <span>{{ item.nameParty }}</span>
                <span>{{
                    item.dateParty.substr(8, 2)
                    + item.dateParty.substr(4, 3)
                    + '-'
                    + item.dateParty.substr(0, 4)
                  }}</span>
              </div>
            </el-option>
          </el-select>
        </el-tooltip>
      </div>
    </div>
    <div class="myParty-content-menu">
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    if (process.browser) {
      if (this.$store.getters['myParty/myAd'].length === 0) {
        this.$store.dispatch('myParty/getMyAd')
      }
    }
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    selectedId(id) {
      if (this.$store.state.myParty.selectedId !== id) {
        this.$store.commit('myParty/selectedId', id)

        if (typeof this.$store.state.myParty.selectedId === 'number') {
          this.$store.commit('myParty/getMyAdById', true)
          this.$store.dispatch('myParty/getMyParticipants')
          this.$store.dispatch('myParty/getRequestMyParty')
        }
      }
    }
  },
  computed: {
    myAdByFilter() {
      return this.$store.getters['myParty/myAdByFilter']
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../../assets/settings";

.nuxt-link-active {
  ::after {
    content: "";
    position: absolute;
    left: 100%;
    top: 50%;
    margin-top: -7px;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 7px solid #771699;
  }
}

.nuxt-link-exact-active {
  ::after {
    content: "";
    position: absolute;
    left: 100%;
    top: 50%;
    margin-top: -7px;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 7px solid #771699;
  }
}

.myParty-block {
  padding: 4px 15px;

  &__flex {
    display: flex;
    align-items: center;
  }

  @include breakpoint(dxxl) {
    padding: 4px 15px;
  }
}

.myParty-item-block {
  display: inline-flex;

  :focus {
    background-color: #f8ecff;
  }

  &__item-one {
    button {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 5px;
      width: 166px;
      height: 46.6px;
      font-size: 13px;
      line-height: 1.42857;
      text-align: center;
      color: #771699;
      background-color: #fff;

      i {
        margin-right: 5px;
        font-size: 14px;

        @include breakpoint(dxxl) {
          margin-right: 5px;
          font-size: 14px;
        }
      }

      @include breakpoint(dxxxxl) {
        margin-right: 17px;
        width: 156px;
        height: 42.6px;
      }

      @include breakpoint(dxxxl) {
        margin-right: 15px;
        padding: 5px;
        width: 136px;
        height: 36.6px;
        font-size: 12px;
      }

      @include breakpoint(dxxl) {
        margin-right: 15px;
        padding: 5px;
        width: 136px;
        height: 36.6px;
        font-size: 12px;
      }

      @include breakpoint(dsm) {
        margin-right: 12px;
        padding: 5px;
        width: 128px;
        height: 33.6px;
        font-size: 11px;
      }
    }
  }

  &__item-two {
    button {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 5px;
      width: 166px;
      height: 46.6px;
      font-size: 13px;
      line-height: 1.42857;
      text-align: center;
      color: #771699;
      background-color: #fff;

      i {
        margin-right: 5px;
        font-size: 14px;

        @include breakpoint(dxxl) {
          margin-right: 5px;
          font-size: 14px;
        }
      }

      @include breakpoint(dxxxxl) {
        margin-right: 17px;
        width: 156px;
        height: 42.6px;
      }

      @include breakpoint(dxxxl) {
        margin-right: 15px;
        padding: 5px;
        width: 136px;
        height: 36.6px;
        font-size: 12px;
      }

      @include breakpoint(dxxl) {
        margin-right: 15px;
        padding: 5px;
        width: 136px;
        height: 36.6px;
        font-size: 12px;
      }

      @include breakpoint(dsm) {
        margin-right: 12px;
        padding: 5px;
        width: 128px;
        height: 33.6px;
        font-size: 11px;
      }
    }
  }

  &__item-three {
    button {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 5px;
      width: 166px;
      height: 46.6px;
      font-size: 13px;
      line-height: 1.42857;
      text-align: center;
      color: #771699;
      background-color: #fff;

      i {
        margin-right: 5px;
        font-size: 14px;

        @include breakpoint(dxxl) {
          margin-right: 5px;
          font-size: 14px;
        }
      }

      @include breakpoint(dxxxxl) {
        margin-right: 17px;
        width: 156px;
        height: 42.6px;
      }

      @include breakpoint(dxxxl) {
        margin-right: 15px;
        padding: 5px;
        width: 136px;
        height: 36.6px;
        font-size: 12px;
      }

      @include breakpoint(dxxl) {
        padding: 5px;
        width: 136px;
        height: 36.6px;
        font-size: 12px;
      }

      @include breakpoint(dsm) {
        margin-right: 12px;
        padding: 5px;
        width: 128px;
        height: 33.6px;
        font-size: 11px;
      }
    }
  }
}

.myParty-filter {
  margin-left: 175px;

  &__input {
    width: 203px;

    @include breakpoint(dxxxxl) {
      width: 173px;
    }

    @include breakpoint(dxxxl) {
      width: 113px;
    }

    @include breakpoint(dxxl) {
      width: 123px;
    }

    @include breakpoint(dsm) {
      width: 58px;
    }
  }

  @include breakpoint(dxxxxl) {
    margin-left: 120px;
  }

  @include breakpoint(dxxxl) {
    margin-left: 4px;
  }

  @include breakpoint(dxxl) {
    margin-left: 0;
  }
}
</style>
