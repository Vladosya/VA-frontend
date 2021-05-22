<template>
  <form @submit.prevent="registerStepThree">
    <div class="register-block-three">
      <div class="register-block-three__title">3 шаг.</div>
      <div class="register-block-three__info">
        Подтвердите ваш акаунт паролем из электронной почты.
      </div>
      <div class="register-confirm-email">
        <label for="confirm-email">Пароль</label>
        <input
          @blur="$v.formStepThree.passwordEmail.$touch()"
          :class="status($v.formStepThree.passwordEmail)"
          v-model.trim="formStepThree.passwordEmail"
          class="register-confirm-email__input-password"
          type="text"
          id="confirm-email"
          placeholder="**********"
        />
        <div class="invalid-feed"
             v-if="$v.formStepThree.passwordEmail.$error || $v.formStepThree.passwordEmail.$dirty && !$v.formStepThree.passwordEmail.required">
          Необходимо указать пароль из Email
        </div>
      </div>
      <button class="register-block-three__btn" type="submit" @click.prevent="registerStepThree">Далее</button>
      <div class="register-block-three__again">
        Отправить пароль еще раз!
      </div>
    </div>
  </form>
</template>

<script>
import {required} from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      formStepThree: {
        passwordEmail: '',
      },
      stepThreeIsReg: 0
    }
  },
  methods: {
    registerStepThree() {
      this.$v.$touch()

      if (this.$v.$invalid) {
        console.log('Error')
      } else {
        const formData = {
          code: this.formStepThree.passwordEmail
        }
        try {
          this.stepThreeIsReg = 1
          this.$store.dispatch('register/createStepThree', {formData, stepThreeIsReg: this.stepThreeIsReg})
          console.log('Success')
        } catch (e) {
          console.log('error', e)
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
    formStepThree: {
      passwordEmail: {
        required
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "assets/settings.scss";

.register-block-three {
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
    line-height: 19px;
    color: #797979;

    @include breakpoint(dxxxxl) {
      margin-top: 33px;
      font-size: 25px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 28px;
      font-size: 20px;
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
    margin-top: 46px;
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

    &:hover {
      outline-color: rgba(255, 255, 255, 0);
      outline-offset: 15px;
      border: 1px solid;
      box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
      text-shadow: 1px 1px 2px #427388;
    }

    @include breakpoint(dxxxxl) {
      width: 450px;
      height: 76px;
      font-size: 16px;
    }

    @include breakpoint(dxxxl) {
      width: 300px;
      height: 56px;
      font-size: 14px;
    }

    @include breakpoint(dxl) {
      margin-top: 36px;
      width: 320px;
      height: 46px;
      font-size: 16px;
    }

    @include breakpoint(dlg) {
      margin-top: 30px;
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

  &__again {
    margin-top: 25px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 22px;
    line-height: 16px;
    text-decoration-line: underline;
    color: #ff006b;

    @include breakpoint(dxxxxl) {
      margin-top: 20px;
      font-size: 19px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 18px;
      font-size: 15px;
    }

    @include breakpoint(dlg) {
      margin-top: 15px;
      font-size: 12px;
    }
  }
}

.register-confirm-email {
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  label {
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 28px;
    line-height: 19px;
    color: #797979;

    @include breakpoint(dxxxxl) {
      font-size: 22px;
    }

    @include breakpoint(dxxxl) {
      font-size: 19px;
    }

    @include breakpoint(dlg) {
      font-size: 14px;
    }
  }

  &__input-password {
    margin-top: 33px;
    border: 1px solid #d38eec;
    border-radius: 5px;
    padding-left: 16px;
    width: 650px;
    height: 86px;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 18px;
    line-height: 16px;
    color: #525151;
    background: #fff;

    @include breakpoint(dxxxxl) {
      margin-top: 23px;
      width: 450px;
      height: 76px;
      font-size: 16px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 17px;
      width: 300px;
      height: 56px;
      font-size: 14px;
    }

    @include breakpoint(dxl) {
      margin-top: 13px;
      width: 320px;
      height: 46px;
      font-size: 13px;
    }

    @include breakpoint(dlg) {
      margin-top: 9px;
      width: 250px;
      height: 44px;
      font-size: 12px;
    }

    @include breakpoint(dsm) {
      margin-top: 7px;
      width: 200px;
      height: 41px;
      font-size: 11px;
    }
  }

  @include breakpoint(dxxxxl) {
    margin-top: 75px;
  }

  @include breakpoint(dxxxl) {
    margin-top: 55px;
  }

  @include breakpoint(dlg) {
    margin-top: 55px;
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

@media (height: 1024px) {
  .register-block-three {
    &__title {
      margin-top: 90px;
      font-size: 56px;
    }

    &__info {
      margin-top: 45px;
      font-size: 16px;
    }
  }
}

@media (height: 864px) {
  .register-block-three {
    &__title {
      margin-top: 67px;
    }

    &__info {
      margin-top: 43px;
    }
  }
}
</style>
