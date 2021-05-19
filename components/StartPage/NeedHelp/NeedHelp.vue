<template>
  <div class="container">
    <div class="help-block">
      <div class="help-block__header">
        <div>
          <nuxt-link to="/">
            <img
              src="../../../assets/StartPage/Registration/step-one/logo-va-one.svg"
              alt="step-logo-one"
              class="help-block__img-one"
            />
          </nuxt-link>
        </div>
        <div class="help-block__line">
          <img
            src="../../../assets/StartPage/Registration/step-one/line.svg"
            alt="line-step-one"
          />
        </div>
        <div class="help-block__title">Нужна помощь?</div>
      </div>
      <div class="help-info">
        <div class="help-info__title">
          Заполните все поля и расскажите подробно о вашей проблеме.
        </div>
      </div>
      <form @submit.prevent="needHelpSubmit">
        <div class="help-form">
          <div class="help-form-top">


            <div class="help-form-top__name">
              <label for="help-name">Имя</label>
              <input
                @blur="$v.formNeedHelp.name.$touch()"
                class="help-form-top__input-name"
                :class="status($v.formNeedHelp.name)"
                v-model.trim="formNeedHelp.name"
                type="text"
                id="help-name"
                placeholder="Иван"
              />
              <div class="invalid-feed"
                   v-if="$v.formNeedHelp.name.$error || $v.formNeedHelp.name.$dirty && !$v.formNeedHelp.name.required">
                Необходимо указать Имя
              </div>
              <div class="invalid-feed" v-if="!$v.formNeedHelp.name.alpha">{{ alphaText }}</div>
            </div>


            <div class="help-form-top__email">
              <label for="help-email">Эл. почта</label>
              <input
                @blur="$v.formNeedHelp.email.$touch()"
                class="help-form-top__input-email"
                :class="status($v.formNeedHelp.email)"
                v-model.trim="formNeedHelp.email"
                type="email"
                id="help-email"
                placeholder="IvanIvanov@gmail.com"
              />
              <div class="invalid-feed"
                   v-if="$v.formNeedHelp.email.$error || $v.formNeedHelp.email.$dirty && !$v.formNeedHelp.email.required">
                Необходимо указать email
              </div>
              <div class="invalid-feed" v-if="!$v.formNeedHelp.email.email">Пожалуйста введите Email адрес</div>
            </div>


          </div>

          <div class="help-form-center">


            <div class="help-form-center__topic">
              <label for="help-topic">Тема</label>
              <input
                @blur="$v.formNeedHelp.topic.$touch()"
                class="help-form-center__input-topic"
                :class="status($v.formNeedHelp.topic)"
                v-model.trim="formNeedHelp.topic"
                type="text"
                id="help-topic"
                placeholder="Введите тему"
              />
              <div class="invalid-feed"
                   v-if="$v.formNeedHelp.topic.$error || $v.formNeedHelp.topic.$dirty && !$v.formNeedHelp.topic.required">
                Необходимо указать тему обращения
              </div>
            </div>


          </div>

          <div class="help-form-footer">


            <div class="help-form-footer__info">
              <label for="help-info">Текст проблемы</label>
              <textarea
                @blur="$v.formNeedHelp.information.$touch()"
                class="help-form-footer__textarea-information"
                :class="status($v.formNeedHelp.information)"
                v-model.trim="formNeedHelp.information"
                id="help-info"
              ></textarea>
              <div class="invalid-feed"
                   v-if="$v.formNeedHelp.information.$error || $v.formNeedHelp.information.$dirty && !$v.formNeedHelp.information.required">
                Необходимо указать подробное сообщение
              </div>
            </div>


          </div>

          <button class="help-form__btn" type="submit" @click.prevent="needHelpSubmit">Отправить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {email, helpers, required} from 'vuelidate/lib/validators'

const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ]*$/)

export default {
  data() {
    return {
      formNeedHelp: {
        name: '',
        email: '',
        topic: '',
        information: ''
      },
      alphaText: 'Запрещены цифры, пробелы и другие символы',
    }
  },
  methods: {
    needHelpSubmit() {
      this.$v.$touch()

      if (this.$v.$invalid) {
        console.log('Error')
      } else {
        console.log('Success')
      }
    },
    status(validation) {
      return {
        'is-invalid': validation.$error,
      }
    },
  },
  validations: {
    formNeedHelp: {
      name: {
        required,
        alpha
      },
      email: {
        required,
        email
      },
      topic: {
        required
      },
      information: {
        required
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "assets/settings.scss";

.help-block {
  padding: 19px 320px 0 91px;

  &__header {
    display: flex;
    align-items: center;
  }

  &__img-one {
    @include breakpoint(dxxxxl) {
      width: 70px;
      height: 98px;
    }

    @include breakpoint(dxxxl) {
      width: 45px;
      height: 63px;
    }

    @include breakpoint(dsm) {
      width: 35px;
      height: 49px;
    }
  }

  &__line {
    margin-left: 87px;

    @include breakpoint(dxxxxl) {
      margin-left: 77px;
    }

    @include breakpoint(dxxxl) {
      margin-left: 67px;
    }

    @include breakpoint(dxxl) {
      margin-left: 57px;
    }

    @include breakpoint(dxl) {
      margin-left: 47px;
    }

    @include breakpoint(dlg) {
      margin-left: 37px;
    }

    @include breakpoint(dmd) {
      margin-left: 27px;
    }

    @include breakpoint(dsm) {
      margin-left: 17px;
    }
  }

  &__title {
    margin-left: 87px;
    font-family: "Manrope", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 30px;
    line-height: 25px;
    text-align: center;
    color: #771699;

    @include breakpoint(dxxxxl) {
      margin-left: 77px;
      font-size: 26px;
    }

    @include breakpoint(dxxxl) {
      margin-left: 67px;
      font-size: 22px;
    }

    @include breakpoint(dxxl) {
      margin-left: 57px;
      font-size: 18px;
    }

    @include breakpoint(dxl) {
      margin-left: 47px;
    }

    @include breakpoint(dlg) {
      margin-left: 37px;
      font-size: 17px;
    }

    @include breakpoint(dmd) {
      margin-left: 27px;
      font-size: 16px;
    }

    @include breakpoint(dsm) {
      margin-left: 17px;
      font-size: 15px;
    }
  }

  @include breakpoint(dsm) {
    padding: 19px 220px 0 91px;
  }
}

.help-info {
  &__title {
    margin-top: 100px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 28px;
    line-height: 19px;
    color: #797979;

    @include breakpoint(dxxxxl) {
      margin-top: 52px;
      font-size: 25px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 47px;
      font-size: 20px;
    }

    @include breakpoint(dxxl) {
      margin-top: 42px;
      font-size: 16px;
    }

    @include breakpoint(dxl) {
      margin-top: 50px;
      font-size: 15px;
    }

    @include breakpoint(dlg) {
      margin-top: 40px;
      font-size: 14px;
    }

    @include breakpoint(dmd) {
      margin-top: 30px;
      font-size: 12px;
    }
  }
}

.help-form {
  margin-top: 100px;

  &__btn {
    margin-top: 76px;
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
      margin-top: 36px;
      width: 450px;
      height: 76px;
      font-size: 16px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 36px;
      width: 300px;
      height: 56px;
      font-size: 14px;
    }

    @include breakpoint(dxxl) {
      margin-top: 46px;
      width: 320px;
      height: 46px;
      font-size: 16px;
    }

    @include breakpoint(dxl) {
      margin-top: 56px;
    }

    @include breakpoint(dlg) {
      margin-top: 40px;
      width: 250px;
      height: 44px;
      font-size: 12px;
    }

    @include breakpoint(dmd) {
      margin-top: 50px;
    }

    @include breakpoint(dsm) {
      margin-top: 36px;
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

  @include breakpoint(dxxl) {
    margin-top: 45px;
  }

  @include breakpoint(dxl) {
    margin-top: 65px;
  }

  @include breakpoint(dlg) {
    margin-top: 55px;
  }
}

.help-form-top {
  display: flex;

  &__name {
    display: flex;
    flex-direction: column;

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

      @include breakpoint(dxxl) {
        font-size: 16px;
      }

      @include breakpoint(dlg) {
        font-size: 14px;
      }
    }
  }

  &__input-name {
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

    @include breakpoint(dxxl) {
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

  &__email {
    display: flex;
    flex-direction: column;
    margin-left: 71px;

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

      @include breakpoint(dxxl) {
        font-size: 16px;
      }

      @include breakpoint(dlg) {
        font-size: 14px;
      }
    }

    @include breakpoint(dxxxxl) {
      margin-left: 61px;
    }

    @include breakpoint(dxxxl) {
      margin-left: 51px;
    }

    @include breakpoint(dlg) {
      margin-left: 41px;
    }
  }

  &__input-email {
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

    @include breakpoint(dxxl) {
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
}

.help-form-center {
  &__topic {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

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

      @include breakpoint(dxxl) {
        font-size: 16px;
      }

      @include breakpoint(dlg) {
        font-size: 14px;
      }
    }

    @include breakpoint(dxxxl) {
      margin-top: 30px;
    }

    @include breakpoint(dxl) {
      margin-top: 25px;
    }

    @include breakpoint(dmd) {
      margin-top: 20px;
    }
  }

  &__input-topic {
    margin-top: 33px;
    border: 1px solid #d38eec;
    border-radius: 5px;
    padding-left: 16px;
    width: 1371px;
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
      width: 961px;
      height: 76px;
      font-size: 16px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 17px;
      width: 651px;
      height: 56px;
      font-size: 14px;
    }

    @include breakpoint(dxxl) {
      margin-top: 13px;
      width: 691px;
      height: 46px;
      font-size: 13px;
    }

    @include breakpoint(dlg) {
      margin-top: 9px;
      width: 541px;
      height: 44px;
      font-size: 12px;
    }

    @include breakpoint(dsm) {
      margin-top: 7px;
      width: 441px;
      height: 41px;
      font-size: 11px;
    }
  }
}

.help-form-footer {
  &__info {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

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

      @include breakpoint(dxxl) {
        font-size: 16px;
      }

      @include breakpoint(dlg) {
        font-size: 14px;
      }
    }

    @include breakpoint(dxxxl) {
      margin-top: 30px;
    }

    @include breakpoint(dxl) {
      margin-top: 25px;
    }

    @include breakpoint(dmd) {
      margin-top: 20px;
    }
  }

  &__textarea-information {
    margin-top: 33px;
    border: 1px solid #d38eec;
    border-radius: 5px;
    padding: 10px;
    width: 1371px;
    height: 386px;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 18px;
    line-height: 16px;
    color: #525151;
    background: #fff;
    resize: none;

    @include breakpoint(dxxxxl) {
      margin-top: 23px;
      width: 961px;
      height: 276px;
      font-size: 16px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 17px;
      width: 651px;
      height: 256px;
      font-size: 14px;
    }

    @include breakpoint(dxxl) {
      margin-top: 13px;
      width: 691px;
      height: 200px;
      font-size: 13px;
    }

    @include breakpoint(dxl) {
      height: 250px;
    }

    @include breakpoint(dlg) {
      margin-top: 9px;
      width: 541px;
      height: 200px;
      font-size: 12px;
    }

    @include breakpoint(dsm) {
      margin-top: 7px;
      width: 441px;
      height: 220px;
      font-size: 11px;
    }
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
  .help-info {
    &__title {
      margin-top: 50px;
    }
  }

  .help-form {
    margin-top: 75px;
  }

  .help-form-center {
    &__topic {
      margin-top: 40px;
    }
  }

  .help-form-footer {
    &__info {
      margin-top: 40px;
    }
  }
}

@media (height: 864px) {
  .help-form {
    margin-top: 65px;
  }

  .help-form-center {
    &__topic {
      margin-top: 40px;
    }
  }

  .help-form-footer {
    &__info {
      margin-top: 40px;
    }
  }
}
</style>
