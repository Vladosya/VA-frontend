<template>
  <div class="register-block-four">
    <div class="register-block-four__title">Поздравляем!</div>
    <div class="register-block-four__info">
      Вы успешно зарегистрировались! <br/>
      Теперь вы можете начать пользоваться серфисом для поиска
      друзей или вечеринок и общаться в чате.
    </div>
    <div class="register-block-four__btn">
      <button @click="$router.push('/')">На главную</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import "assets/settings.scss";

.register-block-four {
  &__title {
    margin-top: 100px;
    font-family: "Manrope", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 88px;
    line-height: 66px;
    letter-spacing: 0.07em;
    color: #771699;

    @include breakpoint(dxxxxl) {
      margin-top: 52px;
      font-size: 58px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 47px;
      font-size: 51px;
    }

    @include breakpoint(dxxl) {
      margin-top: 42px;
      font-size: 48px;
    }

    @include breakpoint(dxl) {
      margin-top: 50px;
      font-size: 44px;
    }

    @include breakpoint(dlg) {
      margin-top: 40px;
      font-size: 39px;
    }

    @include breakpoint(dmd) {
      margin-top: 30px;
      font-size: 36px;
    }
  }

  &__info {
    margin-top: 53px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 28px;
    line-height: 29px;
    color: #797979;

    @include breakpoint(dxxxxl) {
      margin-top: 33px;
      font-size: 22px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 28px;
      font-size: 20px;
    }

    @include breakpoint(dxxl) {
      margin-top: 23px;
      font-size: 16px;
      line-height: 19px;
    }

    @include breakpoint(dxl) {
      margin-top: 25px;
      font-size: 15px;
    }

    @include breakpoint(dlg) {
      margin-top: 20px;
      font-size: 14px;
    }

    @include breakpoint(dmd) {
      margin-top: 15px;
      font-size: 12px;
    }
  }

  &__btn {
    margin-top: 740px;
    margin-left: 1500px;

    button {
      border: 1px solid #ff006b;
      border-radius: 5px;
      width: 650px;
      height: 86px;
      box-sizing: border-box;
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 28px;
      line-height: 19px;
      color: #fff;
      background: #ff006b;

      @include breakpoint(dxxxxl) {
        width: 450px;
        height: 76px;
        font-size: 22px;
      }

      @include breakpoint(dxxxl) {
        width: 300px;
        height: 56px;
        font-size: 14px;
      }

      @include breakpoint(dxxl) {
        width: 320px;
        height: 46px;
        font-size: 16px;
      }

      @include breakpoint(dlg) {
        width: 250px;
        height: 44px;
        font-size: 12px;
      }

      @include breakpoint(dmd) {
        width: 250px;
        height: 44px;
        font-size: 12px;
      }

      @include breakpoint(dsm) {
        width: 200px;
        height: 41px;
        font-size: 11px;
      }
    }

    @include breakpoint(dxxxxl) {
      margin-top: 595px;
      margin-left: 1042px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 492px;
      margin-left: 885px;
    }

    @include breakpoint(dxxl) {
      margin-top: 407px;
      margin-left: 788px;
    }

    @include breakpoint(dxl) {
      margin-top: 446px;
      margin-left: 708px;
    }

    @include breakpoint(dlg) {
      margin-top: 404px;
      margin-left: 704px;
    }

    @include breakpoint(dmd) {
      margin-top: 403px;
      margin-left: 618px;
    }

    @include breakpoint(dsm) {
      margin-top: 384px;
      margin-left: 511px;
    }
  }
}

@media (height: 1024px) {
  .register-block-four {
    &__title {
      margin-top: 90px;
      font-size: 56px;
    }

    &__info {
      margin-top: 45px;
      font-size: 16px;
    }

    &__btn {
      margin-top: 453px;
      margin-left: 618px;
    }
  }
}

@media (height: 864px) {
  .register-block-four {
    &__title {
      margin-top: 67px;
    }

    &__info {
      margin-top: 43px;
    }

    &__btn {
      margin-top: 417px;
      margin-left: 788px;
    }
  }
}
</style>
