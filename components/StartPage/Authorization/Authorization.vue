<template>
  <form @submit.prevent="loginSubmit">
    <div class="login-position">
      <div class="login-block">
        <div class="login-block__title">Вход</div>
        <div class="login-block__reg">
          Введите ваши данные или <br/>
          <nuxt-link to="/signup/s1">зарегистрируйтесь</nuxt-link>
        </div>
        <div class="login-block-form">


          <div class="login-block-form__email">
            <label for="username">Имя Пользователя</label>
            <input
              @blur="$v.formLogin.username.$touch()"
              :class="status($v.formLogin.username)"
              v-model.trim="formLogin.username"
              class="login-block-form__username-input"
              id="username"
              type="text"
              placeholder="Введите имя пользователя"
            />
            <div class="invalid-feed"
                 v-if="$v.formLogin.username.$error || $v.formLogin.username.$dirty && !$v.formLogin.username.required">
              Необходимо указать Имя Пользователя
            </div>
          </div>


          <div class="login-block-form__password">
            <label for="password">Пароль</label>
            <input
              @blur="$v.formLogin.password.$touch()"
              :class="status($v.formLogin.password)"
              v-model.trim="formLogin.password"
              class="login-block-form__password-input"
              id="password"
              type="password"
              placeholder="**********"
            />
            <div class="invalid-feed"
                 v-if="!$v.formLogin.password.minLength">{{ minLengthText }}
            </div>
            <div class="invalid-feed"
                 v-if="$v.formLogin.password.$error || $v.formLogin.password.$dirty && !$v.formLogin.password.required">
              Необходимо указать пароль
            </div>
          </div>


          <div class="login-block-form__btn">
            <button type="submit" @click.prevent="loginSubmit">Войти</button>
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
import {minLength, required} from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      formLogin: {
        username: '',
        password: ''
      },
      minLengthText: 'Минимальная длина 8 символов!'
    }
  },
  methods: {
    loginSubmit() {
      this.$v.$touch()

      if (this.$v.$invalid) {
        console.log('Error')
      } else {
        console.log('Success')
        const formData = {
          username: this.formLogin.username,
          password: this.formLogin.password
        }

        try {
          this.$store.dispatch('authorization/authorization', formData)
        } catch (e) {
          console.log('error in Authorization.vue methods loginSubmit', e)
        }
      }
    },
    status(validation) {
      return {
        'is-invalid': validation.$error,
      }
    },
  },
  validations: {
    formLogin: {
      username: {
        required
      },
      password: {
        required,
        minLength: minLength(8)
      },
    }
  }
}
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
  }

  &__username-input {
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

    @include breakpoint(dxxxl) {
      margin-top: 13px;
    }
  }

  &__password-input {
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

      &:hover {
        outline-color: rgba(255, 255, 255, 0);
        outline-offset: 15px;
        border: 1px solid;
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
        text-shadow: 1px 1px 2px #427388;
      }

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

.is-invalid {
  border: 1px solid #dc3545;
}

.invalid-feed {
  margin-top: 10px;
  width: 100%;
  font-size: 20px;
  color: #dc3545;

  @include breakpoint(dxxxxl) {
    margin-top: 0.25rem;
    font-size: 16px;
  }

  @include breakpoint(dxxxl) {
    font-size: 13px;
  }

  @include breakpoint(dlg) {
    font-size: 11px;
  }

  @include breakpoint(dxxl) {
    margin-top: 0.25rem;
    font-size: 12px;
  }

  @include breakpoint(dmd) {
    font-size: 10px;
  }
}
</style>
