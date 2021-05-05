<template>
  <div class="register-block-one">
    <div class="register-block-one__title">1 шаг.</div>
    <div class="register-block-one__info">
      Для регистрации заполните поля ниже и нажмите кнопку далее.
    </div>
    <form @submit.prevent="registerStepOne">
      <div class="register-block-form">
        <div class="register-form-left">
          <input
            @blur="$v.formStepOne.file.$touch()"
            :class="status($v.formStepOne.file)"
            type="file"
            id="input-file"
            ref="file" @change="handleFileUpload($event)"
            multiple="multiple"
          />
          <span>Фотография (аватар)</span>
          <label
            for="input-file"
            class="register-form-left__input-photo"
            :class="{'register-form-left__input-photo-loading': photoLoading}"
          >
            <img v-show="photoLoading" class="register-form-left__img-loading" id="myimage" src="" alt="dsds">
            <span v-if="!photoLoading">
            <img
              src="../../../assets/StartPage/Registration/step-one/arrow-down.svg"
              alt="arrow-down"
              class="register-form-left__img"
            />
            <img
              src="../../../assets/StartPage/Registration/step-one/arrow-down-one.svg"
              alt="arrow-down-one"
              class="register-form-left__img-one"
            />
          </span>
            <div v-if="!photoLoading">
              Загрузите вашу <br/>
              фотографию.
            </div>
          </label>
          <div class="invalid-feed"
               v-if="$v.formStepOne.file.$error || $v.formStepOne.file.$dirty && !$v.formStepOne.file.required">
            Необходимо загрузить Фотографию
          </div>
        </div>
        <div class="register-form-center">


          <div class="register-form-center__name">
            <label for="username">Имя Пользователя</label>
            <input
              @blur="$v.formStepOne.username.$touch()"
              :class="status($v.formStepOne.username)"
              class="register-form-center__input-name"
              v-model.trim="formStepOne.username"
              id="username"
              type="text"
              placeholder="Введите имя пользователя"
            />
            <div class="invalid-feed"
                 v-if="$v.formStepOne.username.$error || $v.formStepOne.username.$dirty && !$v.formStepOne.username.required">
              Необходимо указать Имя Пользователя
            </div>
          </div>


          <div class="register-form-center__firstname">
            <label for="name">Имя</label>
            <input
              @blur="$v.formStepOne.name.$touch()"
              :class="status($v.formStepOne.name)"
              class="register-form-center__input-firstname"
              v-model.trim="formStepOne.name"
              type="text"
              id="name"
              placeholder="Введите имя"
            />
            <div class="invalid-feed"
                 v-if="$v.formStepOne.name.$error || $v.formStepOne.name.$dirty && !$v.formStepOne.name.required">
              Необходимо указать Имя
            </div>
            <div class="invalid-feed" v-if="!$v.formStepOne.name.alpha">{{ alphaText }}</div>
          </div>


          <div class="register-form-center__sex">
            <label for="input-sex">Пол</label>
            <select
              @blur="$v.formStepOne.sex.$touch()"
              :class="status($v.formStepOne.sex)"
              v-model="formStepOne.sex"
              id="input-sex"
              class="register-form-center__input-sex"
            >
              <option disabled value="">Выберите пол</option>
              <option value="1">Мужской</option>
              <option value="2">Женский</option>
              <option value="3">Трансгендер</option>
            </select>
            <div class="invalid-feed"
                 v-if="$v.formStepOne.sex.$error || $v.formStepOne.sex.$dirty && !$v.formStepOne.sex.required">
              Необходимо выбрать пол
            </div>
          </div>


          <div class="register-form-center__old">
            <label for="input-old">Возраст</label>
            <input
              @blur="$v.formStepOne.old.$touch()"
              :class="status($v.formStepOne.old)"
              v-model="formStepOne.old"
              class="register-form-center__input-old"
              type="date"
              id="input-old"
            />
            <div class="invalid-feed"
                 v-if="$v.formStepOne.old.$error || $v.formStepOne.old.$dirty && !$v.formStepOne.old.required">
              Необходимо указать дату рождения
            </div>
          </div>


        </div>
        <div class="register-form-right">


          <div class="register-form-right__city">
            <label for="input-city">Город</label>
            <select
              @blur="$v.formStepOne.city.$touch()"
              :class="status($v.formStepOne.city)"
              v-model="formStepOne.city"
              id="input-city"
              class="register-form-right__input-city"
            >
              <option disabled value="">Выберите город</option>
              <option value="1">Москва</option>
              <option value="2">Санкт Петербург</option>
              <option value="3">Екатеринбург</option>
              <option value="4">Владивосток</option>
              <option value="5">Владимир</option>
            </select>
            <div class="invalid-feed"
                 v-if="$v.formStepOne.city.$error || $v.formStepOne.city.$dirty && !$v.formStepOne.city.required">
              Необходимо выбрать город
            </div>
          </div>


          <div class="register-form-right__email">
            <label for="input-email">Эл. почта</label>
            <input
              @blur="$v.formStepOne.email.$touch()"
              :class="status($v.formStepOne.email)"
              v-model.trim="formStepOne.email"
              class="register-form-right__input-email"
              type="email"
              id="input-email"
              placeholder="IvanIvanov@gmail.com"
            />
            <div class="invalid-feed"
                 v-if="$v.formStepOne.email.$error || $v.formStepOne.email.$dirty && !$v.formStepOne.email.required">
              Необходимо указать email
            </div>
            <div class="invalid-feed" v-if="!$v.formStepOne.email.email">Пожалуйста введите Email адрес</div>
          </div>


          <div class="register-form-right__password">
            <label for="input-password">Пароль</label>
            <input
              @blur="$v.formStepOne.password.$touch()"
              :class="status($v.formStepOne.password)"
              v-model.trim="formStepOne.password"
              class="register-form-right__input-password"
              type="password"
              id="input-password"
              placeholder="**********"
              autocomplete="off"
            />
            <div class="invalid-feed"
                 v-if="!$v.formStepOne.password.minLength">{{ minLengthText }}
            </div>
            <div class="invalid-feed"
                 v-if="$v.formStepOne.password.$error || $v.formStepOne.password.$dirty && !$v.formStepOne.password.required">
              Необходимо указать пароль
            </div>


          </div>
          <div class="register-form-right__confirm">
            <label for="input-confirm">Повторите пароль</label>
            <input
              @blur="$v.formStepOne.confirmPassword.$touch()"
              :class="status($v.formStepOne.confirmPassword)"
              v-model.trim="formStepOne.confirmPassword"
              class="register-form-right__input-confirm"
              type="password"
              id="input-confirm"
              placeholder="**********"
              autocomplete="on"
            />
            <div class="invalid-feed"
                 v-if="$v.formStepOne.confirmPassword.$error || $v.formStepOne.confirmPassword.$dirty && !$v.formStepOne.confirmPassword.required">
              Необходимо повторить пароль
            </div>
            <div class="invalid-feed"
                 v-if="!$v.formStepOne.confirmPassword.sameAs">{{ passwordConfirmText }}
            </div>
          </div>

          <button class="register-form-right__btn" type="submit" @click.prevent="registerStepOne">Далее</button>

        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {email, helpers, minLength, required, requiredIf, sameAs} from 'vuelidate/lib/validators'

const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ]*$/)
export default {
  data() {
    return {
      formStepOne: {
        file: [],
        username: '',
        name: '',
        sex: '',
        old: '',
        city: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      alphaText: 'Запрещены цифры, пробелы и другие символы',
      minLengthText: 'Минимальная длина 8 символов!',
      passwordConfirmText: 'Пароли не совпадают',
      formatPhoto: ['image/jpeg', 'image/png', 'image/gif'],
      photoLoading: false,
      stepOneIsReg: 0
    }
  },
  methods: {
    registerStepOne() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        console.log('Error')
      } else {
        const formData = new FormData()
        formData.append('photo', this.formStepOne.file)
        formData.append('username', this.formStepOne.username)
        formData.append('first_name', this.formStepOne.name)
        formData.append('last_name', '')
        formData.append('sex', this.formStepOne.sex)
        formData.append('birth_day', this.formStepOne.old)
        formData.append('city', this.formStepOne.city)
        formData.append('email', this.formStepOne.email)
        formData.append('password', this.formStepOne.password)
        formData.append('confirm_password', this.formStepOne.confirmPassword)

        try {
          this.$store.dispatch('register/createStepOne', formData)
          this.stepOneIsReg = 1
          console.log('Success')
          console.log('dispatch true')
          this.$router.push(`/signup/s2?stepOneIsReg=${this.stepOneIsReg}`)
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
    handleFileUpload(e) {
      if (this.$refs.file.files.length > 0) {
        const file = this.$refs.file.files[0]

        if (this.formatPhoto.includes(file.type)) {

          const selectedFile = e.target.files[0]
          const reader = new FileReader()
          const imgtag = document.getElementById('myimage')
          imgtag.title = selectedFile.name
          this.photoLoading = true
          reader.onload = function (event) {
            imgtag.src = event.target.result
          }

          reader.readAsDataURL(selectedFile)
          this.formStepOne.file = file

          this.$message({
            message: 'Фотография успешно загружена.',
            type: 'success'
          })
          setTimeout(() => {
            this.$message({
              message: 'Если хотите поменять фото, то кликните по значку "Загрузить вашу фотографию"',
              type: 'message'
            })
          }, 2000)
        } else {
          this.$message.error('Данный формат для загрузки фото недоступен. Доступные форматы для загрузки: png, jpeg, gif')
          this.formStepOne.file = []
        }
      } else {
        this.$message({
          message: 'Изображение не было загружено',
          type: 'warning'
        })
      }
    }
  },
  validations: {
    formStepOne: {
      file: {
        required: requiredIf(function (nestedModel) {
          console.log('nestedModel', nestedModel)
          return !this.photoLoading
        })
      },
      username: {
        required
      },
      name: {
        required,
        alpha
      },
      sex: {
        required
      },
      old: {
        required
      },
      city: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      },
      confirmPassword: {
        required,
        sameAs: sameAs('password')
      },
    }
  },
}
</script>

<style scoped lang="scss">
@import "assets/settings.scss";

.register-block-one {
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

    @include breakpoint(dxxl) {
      margin-top: 23px;
      font-size: 16px;
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
}

.register-block-form {
  display: grid;
  grid-column-gap: 174px;
  grid-template-columns: 500px 650px 650px;
  margin-top: 100px;

  @include breakpoint(dxxxxl) {
    grid-column-gap: 146px;
    grid-template-columns: 300px 450px 450px;
    margin-top: 42px;
  }

  @include breakpoint(dxxxl) {
    grid-column-gap: 168px;
    grid-template-columns: 250px 300px 300px;
    margin-top: 43px;
  }

  @include breakpoint(dxxl) {
    grid-column-gap: 169px;
    grid-template-columns: 200px 250px 250px;
    margin-top: 45px;
  }

  @include breakpoint(dxl) {
    grid-column-gap: 129px;
    grid-template-columns: 200px 250px 250px;
    margin-top: 65px;
  }

  @include breakpoint(dlg) {
    grid-column-gap: 137px;
    grid-template-columns: 180px 250px 250px;
    margin-top: 55px;
  }

  @include breakpoint(dmd) {
    grid-column-gap: 94px;
  }

  @include breakpoint(dsm) {
    grid-column-gap: 81px;
    grid-template-columns: 150px 200px 200px;
  }
}

.register-form-left {
  display: flex;
  flex-direction: column;

  span {
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

  input {
    display: none;
    opacity: 0;
  }

  &__input-photo {
    display: flex;
    flex-direction: column;
    margin-top: 33px;
    border: 1px solid #d38eec;
    border-radius: 5px;
    width: 500px;
    height: 500px;
    box-sizing: border-box;
    background: #fff;

    span {
      margin-top: 150px;
      text-align: center;

      @include breakpoint(dxxxxl) {
        margin-top: 61px;
      }

      @include breakpoint(dxxxl) {
        margin-top: 58px;
      }

      @include breakpoint(dxxl) {
        margin-top: 51px;
      }

      @include breakpoint(dlg) {
        margin-top: 40px;
      }

      @include breakpoint(dsm) {
        margin-top: 30px;
      }
    }

    div {
      margin-top: 30px;
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 28px;
      line-height: 39px;
      text-align: center;
      text-decoration-line: underline;
      color: #797979;

      @include breakpoint(dxxxxl) {
        font-size: 22px;
      }

      @include breakpoint(dxxxl) {
        font-size: 17px;
      }

      @include breakpoint(dxxl) {
        margin-top: 30px;
        font-size: 16px;
        line-height: 19px;
      }

      @include breakpoint(dlg) {
        font-size: 14px;
      }

      @include breakpoint(dsm) {
        margin-top: 14px;
      }
    }

    @include breakpoint(dxxxxl) {
      margin-top: 23px;
      width: 300px;
      height: 300px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 17px;
      width: 250px;
      height: 250px;
    }

    @include breakpoint(dxxl) {
      margin-top: 13px;
      width: 230px;
      height: 230px;
    }

    @include breakpoint(dlg) {
      margin-top: 9px;
      width: 180px;
      height: 180px;
    }

    @include breakpoint(dsm) {
      margin-top: 7px;
      width: 150px;
      height: 150px;
    }
  }

  &__input-photo-loading {
    align-items: center;
    justify-content: center;
  }

  &__img {
    display: none;

    @include breakpoint(dxxxl) {
      display: inline-block;
    }
  }

  &__img-one {
    @include breakpoint(dxxxl) {
      display: none;
    }
  }

  &__img-show {
    display: none;
  }

  &__img-loading {
    border-radius: 5px;
    width: 480px;
    height: 480px;

    @include breakpoint(dxxxxl) {
      width: 290px;
      height: 290px;
    }

    @include breakpoint(dxxxl) {
      width: 240px;
      height: 240px;
    }

    @include breakpoint(dxxl) {
      width: 220px;
      height: 220px;
    }

    @include breakpoint(dlg) {
      width: 170px;
      height: 170px;
    }

    @include breakpoint(dsm) {
      width: 140px;
      height: 140px;
    }
  }
}

.register-form-center {
  &__name {
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

  &__firstname {
    margin-top: 44px;

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
      margin-top: 24px;
    }

    @include breakpoint(dxxxl) {
      font-size: 19px;
    }

    @include breakpoint(dxxl) {
      margin-top: 14px;
    }

    @include breakpoint(dxl) {
      margin-top: 17px;
    }

    @include breakpoint(dlg) {
      margin-top: 14px;
    }
  }

  &__input-firstname {
    margin-top: 13px;
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

  &__sex {
    margin-top: 44px;

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
      margin-top: 24px;
    }

    @include breakpoint(dxxxl) {
      font-size: 19px;
    }

    @include breakpoint(dxxl) {
      margin-top: 14px;
    }

    @include breakpoint(dxl) {
      margin-top: 17px;
    }

    @include breakpoint(dlg) {
      margin-top: 14px;
    }
  }

  &__input-sex {
    margin-top: 13px;
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

    option {
      color: #525151;
    }

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

  &__old {
    margin-top: 44px;

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
      margin-top: 24px;
    }

    @include breakpoint(dxxxl) {
      font-size: 19px;
    }

    @include breakpoint(dxxl) {
      margin-top: 14px;
    }

    @include breakpoint(dxl) {
      margin-top: 17px;
    }

    @include breakpoint(dlg) {
      margin-top: 14px;
    }
  }

  &__input-old {
    margin-top: 13px;
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

.register-form-right {
  &__city {
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

  &__input-city {
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

    option {
      color: #797979;
    }

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
    margin-top: 44px;

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
      margin-top: 24px;
    }

    @include breakpoint(dxxxl) {
      font-size: 19px;
    }

    @include breakpoint(dxxl) {
      margin-top: 14px;
    }

    @include breakpoint(dxl) {
      margin-top: 17px;
    }

    @include breakpoint(dlg) {
      font-size: 14px;
    }
  }

  &__input-email {
    margin-top: 13px;
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

  &__password {
    margin-top: 44px;

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
      margin-top: 24px;
    }

    @include breakpoint(dxxxl) {
      font-size: 19px;
    }

    @include breakpoint(dxxl) {
      margin-top: 14px;
    }

    @include breakpoint(dxl) {
      margin-top: 17px;
    }

    @include breakpoint(dlg) {
      font-size: 14px;
    }
  }

  &__input-password {
    margin-top: 13px;
    border: 1px solid #d38eec;
    border-radius: 5px;
    padding-left: 16px;
    width: 650px;
    height: 86px;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 13px;
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

  &__confirm {
    margin-top: 44px;

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
      margin-top: 24px;
    }

    @include breakpoint(dxxxl) {
      font-size: 19px;
    }

    @include breakpoint(dxxl) {
      margin-top: 14px;
    }

    @include breakpoint(dxl) {
      margin-top: 17px;
    }

    @include breakpoint(dlg) {
      font-size: 14px;
    }
  }

  &__input-confirm {
    margin-top: 13px;
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

    @include breakpoint(dxxl) {
      margin-top: 26px;
      width: 320px;
      height: 46px;
      font-size: 16px;
    }

    @include breakpoint(dxl) {
      margin-top: 36px;
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
  .register-block-one {
    &__title {
      margin-top: 90px;
      font-size: 56px;
    }

    &__info {
      margin-top: 45px;
      font-size: 16px;
    }
  }

  .register-block-form {
    margin-top: 105px;
  }

  .register-form-left {
    label {
      margin-top: 19px;
    }
  }
}

@media (height: 864px) {
  .register-block-one {
    &__title {
      margin-top: 67px;
    }

    &__info {
      margin-top: 43px;
    }
  }

  .register-block-form {
    margin-top: 55px;
  }
}
</style>

