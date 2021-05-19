<template>
  <div class="main-container">
    <div class="main-block">
      <div class="main-block__logo">
        <a href="#">
          <img
            src="../../assets/StartPage/logo-va-one.png"
            alt="logo-main"
            class="main-block__img-one"
          />
        </a>
      </div>
      <div class="main-block__quantity-people">
        <div>82 471 723</div>
        <p>людей уже с нами. Присоединяйтесь!</p>
      </div>
      <div class="main-block__information">
        Найди свою вторую половинку <br/>
        или веселую вечеринку.
      </div>
      <div class="main-block__buttons">
        <nuxt-link no-prefetch to="/signup/s1">
          <button class="main-block__btn-one">
            Зарегистрироваться
          </button>
        </nuxt-link>
        <button
          class="main-block__btn-two"
          @click="popup = !popup"
        >Войти
        </button>
      </div>
    </div>
    <div class="popup-container" v-if="popup" @click.self="popup = !popup">
      <Authorization/>
    </div>
  </div>
</template>

<script>
import Authorization from './Authorization/Authorization.vue'

export default {
  data() {
    return {
      popup: false
    }
  },
  components: {
    Authorization
  }
}
</script>

<style scoped lang="scss">
@import "assets/settings.scss";

.popup-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
}

.main-container {
  width: 100%;
  height: 100vh;
  background-image: url("assets/StartPage/background-img.png");
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-color: #fff;
}

.main-block {
  padding-top: 204px;
  max-width: 1018px;
  text-align: center;

  &__img-one {
    @include breakpoint(dxxxxl) {
      width: 170px;
      height: 238px;
    }

    @include breakpoint(dxxxl) {
      width: 134px;
      height: 179px;
    }

    @include breakpoint(dxxl) {
      width: 114px;
      height: 159px;
    }

    @include breakpoint(dsm) {
      width: 103px;
      height: 144px;
    }
  }

  &__quantity-people {
    div {
      margin-top: 142px;
      font-family: "Manrope", sans-serif;
      font-weight: 700;
      font-style: normal;
      font-size: 78px;
      line-height: 66px;
      letter-spacing: 0.07em;
      color: #ff006b;

      @include breakpoint(dxxxxl) {
        margin-top: 102px;
        font-size: 68px;
      }

      @include breakpoint(dxxxl) {
        margin-top: 82px;
        font-size: 58px;
      }

      @include breakpoint(dxxl) {
        margin-top: 62px;
        font-size: 48px;
        line-height: 66px;
      }

      @include breakpoint(dxl) {
        margin-top: 72px;
      }

      @include breakpoint(dmd) {
        margin-top: 82px;
      }

      @include breakpoint(dsm) {
        margin-top: 72px;
      }
    }

    p {
      margin-top: 25px;
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 25px;
      line-height: 19px;
      color: #d38eec;

      @include breakpoint(dxxxxl) {
        margin-top: 16px;
        font-size: 21px;
      }

      @include breakpoint(dxxxl) {
        margin-top: 11px;
      }

      @include breakpoint(dxxl) {
        margin-top: 0;
        font-size: 14px;
      }
    }
  }

  &__information {
    margin-top: 162px;
    font-family: "Manrope", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 28px;
    line-height: 32px;
    text-align: center;
    color: #771699;

    @include breakpoint(dxxxxl) {
      margin-top: 122px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 72px;
      font-size: 26px;
      line-height: 30px;
    }

    @include breakpoint(dxxl) {
      margin-top: 62px;
      font-size: 18px;
      line-height: 25px;
    }

    @include breakpoint(dxl) {
      margin-top: 72px;
      font-size: 19px;
    }

    @include breakpoint(dmd) {
      margin-top: 82px;
    }

    @include breakpoint(dsm) {
      margin-top: 72px;
    }
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 128px;

    button {
      width: 345px;
      height: 65px;

      @include breakpoint(dxxxxl) {
        width: 325px;
        height: 60px;
      }

      @include breakpoint(dxxxl) {
        width: 300px;
        height: 60px;
      }

      @include breakpoint(dxxl) {
        width: 200px;
        height: 40px;
      }

      @include breakpoint(dsm) {
        height: 42px;
      }
    }

    @include breakpoint(dxxxxl) {
      margin-top: 98px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 78px;
    }

    @include breakpoint(dxxl) {
      margin-top: 48px;
    }

    @include breakpoint(dxl) {
      margin-top: 58px;
    }

    @include breakpoint(dmd) {
      margin-top: 68px;
    }
  }

  &__btn-one {
    border: 1px solid #ff006b;
    border-radius: 5px;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 24px;
    line-height: 19px;
    color: #fff;
    background: #ff006b;

    &:hover {
      outline-color: rgba(255, 255, 255, 0);
      outline-offset: 15px;
      border: 1px solid;
      box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
      text-shadow: 1px 1px 2px #427388;
    }

    @include breakpoint(dxxxxl) {
      font-size: 21px;
    }

    @include breakpoint(dxxxl) {
      font-size: 20px;
    }

    @include breakpoint(dxxl) {
      font-size: 14px;
      line-height: 19px;
    }
  }

  &__btn-two {
    margin-top: 18px;
    border: 1px solid #d38eec;
    border-radius: 5px;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 24px;
    line-height: 19px;
    color: #771699;
    background: #fff;

    &:hover {
      outline-color: rgba(255, 255, 255, 0);
      outline-offset: 15px;
      border: 1px solid #771699;
      box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
      text-shadow: 1px 1px 2px #9ebecb;
    }

    @include breakpoint(dxxxxl) {
      font-size: 21px;
    }

    @include breakpoint(dxxxl) {
      font-size: 20px;
    }

    @include breakpoint(dxxl) {
      font-size: 14px;
      line-height: 19px;
    }
  }

  @include breakpoint(dxxxxl) {
    padding-top: 104px;
    max-width: 756px;
  }

  @include breakpoint(dxxxl) {
    padding-top: 74px;
    max-width: 629px;
  }

  @include breakpoint(dxxl) {
    padding-top: 94px;
    max-width: 604px;
  }

  @include breakpoint(dxl) {
    padding-top: 134px;
    max-width: 573px;
  }

  @include breakpoint(dlg) {
    padding-top: 84px;
    max-width: 544px;
  }

  @include breakpoint(dmd) {
    padding-top: 133px;
    max-width: 509px;
  }

  @include breakpoint(dsm) {
    padding-top: 96px;
    max-width: 408px;
  }
}
</style>
