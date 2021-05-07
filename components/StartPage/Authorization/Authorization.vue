<template>
  <form>
    <div class="login-position">
      <div class="login-block">
        <div class="login-block__title">Вход</div>
        <div class="login-block__reg">
          Введите ваши данные или <br/>
          <nuxt-link to="/signup/s1">зарегистрируйтесь</nuxt-link>
        </div>
        <div class="login-block-form">
          <div class="login-block-form__email">
            <label for="mail">Эл. почта</label>
            <input
              id="mail"
              type="text"
              placeholder="IvanIvanov@gmail.com"
            />
          </div>
          <div class="login-block-form__password">
            <label for="password">Пароль</label>
            <input
              id="password"
              type="password"
              placeholder="**********"
            />
          </div>
          <div class="login-block-form__btn">
            <button>Войти</button>
          </div>
          <div class="login-block-form__forget">
            <nuxt-link to="#">Забыли пароль?</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import "assets/settings.scss";

.container {
  width: 100%;
  height: 100vh;
}

.login-position {
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.login-block {
  border: 1px solid #000;
  border-radius: 5px;
  padding: 104px 74px;
  width: 550px;
  height: 650px;
  background: #fff;

  &__title {
    font-family: "Manrope", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 28px;
    line-height: 25px;
    color: #771699;

    @include breakpoint(dxxxl) {
      font-size: 18px;
    }
  }

  &__reg {
    margin-top: 23px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 18px;
    line-height: 19px;
    color: #797979;

    a {
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 18px;
      line-height: 19px;
      text-decoration-line: underline;
      color: #797979;

      @include breakpoint(dxxxl) {
        font-size: 12px;
        line-height: 16px;
      }
    }

    @include breakpoint(dxxxl) {
      margin-top: 13px;
      font-size: 14px;
    }
  }

  @include breakpoint(dxxxl) {
    padding: 50px;
    width: 350px;
    height: 450px;
  }
}

.login-block-form {
  margin-top: 47px;

  &__email {
    display: flex;
    flex-direction: column;

    label {
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 16px;
      line-height: 19px;
      color: #797979;

      @include breakpoint(dxxxl) {
        font-size: 14px;
      }
    }

    input {
      margin-top: 20px;
      border: 1px solid #d38eec;
      border-radius: 5px;
      padding-left: 16px;
      width: 400px;
      height: 50px;
      box-sizing: border-box;
      background: #fff;

      @include breakpoint(dxxxl) {
        margin-top: 10px;
        width: 250px;
        height: 40px;
      }
    }
  }

  &__password {
    display: flex;
    flex-direction: column;
    margin-top: 23px;

    label {
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 16px;
      line-height: 19px;
      color: #797979;

      @include breakpoint(dxxxl) {
        font-size: 14px;
        line-height: 19px;
        color: #797979;
      }
    }

    input {
      margin-top: 20px;
      border: 1px solid #d38eec;
      border-radius: 5px;
      padding-left: 16px;
      width: 400px;
      height: 50px;
      box-sizing: border-box;
      background: #fff;

      @include breakpoint(dxxxl) {
        margin-top: 10px;
        width: 250px;
        height: 40px;
      }
    }

    @include breakpoint(dxxxl) {
      margin-top: 13px;
    }
  }

  &__btn {
    margin-top: 36px;

    button {
      border: 1px solid #ff006b;
      border-radius: 5px;
      width: 400px;
      height: 50px;
      box-sizing: border-box;
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 16px;
      line-height: 19px;
      color: #fff;
      background: #ff006b;

      @include breakpoint(dxxxl) {
        width: 250px;
        height: 40px;
        font-size: 14px;
      }
    }

    @include breakpoint(dxxxl) {
      margin-top: 26px;
    }
  }

  &__forget {
    margin-top: 23px;
    text-align: center;

    a {
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 15px;
      line-height: 16px;
      text-decoration-line: underline;
      color: #771699;

      @include breakpoint(dxxxl) {
        font-size: 12px;
      }
    }

    @include breakpoint(dxxxl) {
      margin-top: 13px;
    }
  }

  @include breakpoint(dxxxl) {
    margin-top: 27px;
  }
}
</style>
