<template>
  <div class="container">
    <div class="personalAria-block">
      <div class="personalAria-block__header">
        <div>
          <nuxt-link to="/home">
            <img
              src="../../../assets/Home/PersonalArea/logo-va.svg"
              alt="step-logo"
              class="personalAria-block__img"
            />
            <img
              src="../../../assets/Home/PersonalArea/logo-va-one.svg"
              alt="step-logo-one"
              class="personalAria-block__img-one"
            />
            <img
              src="../../../assets/Home/PersonalArea/logo-va-two.svg"
              alt="step-logo-two"
              class="personalAria-block__img-two"
            />
            <img
              src="../../../assets/Home/PersonalArea/logo-va-three.svg"
              alt="step-logo-two"
              class="personalAria-block__img-three"
            />
          </nuxt-link>
        </div>
        <div class="personalAria-block__line">
          <img
            src="../../../assets/Home/PersonalArea/line.svg"
            alt="line-step-one"
          />
        </div>
        <div class="personalAria-block__title">Личный кабинет</div>
        <div class="personalAria-block__info">
          <button>
            <img
              src="../../../assets/Home/PersonalArea/letter.svg"
              alt="letter-personal-aria-one"
              class="personalAria-block__info-one"
            />
            <img
              src="../../../assets/Home/PersonalArea/letter-two.png"
              alt="letter-personal-aria-two"
              class="personalAria-block__info-two"
            />
            <img
              src="../../../assets/Home/PersonalArea/letter-three.png"
              alt="letter-personal-aria-three"
              class="personalAria-block__info-three"
            />
            <img
              src="../../../assets/Home/PersonalArea/letter-four.png"
              alt="letter-personal-aria-four"
              class="personalAria-block__info-four"
            />
          </button>
          <div class="personalAria-block__user">
            <a href="#">
              <img
                src="../../../assets/Home/PersonalArea/image-user.png"
                alt="personal-aria-user-one"
                class="personalAria-block__user-one"
              />
              <img
                src="../../../assets/Home/PersonalArea/image-user-two.png"
                alt="personal-aria-user-two"
                class="personalAria-block__user-two"
              />
              <img
                src="../../../assets/Home/PersonalArea/image-user-three.png"
                alt="personal-aria-user-three"
                class="personalAria-block__user-three"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="personal-info-block">
        <div class="personal-info-block__title">Личный кабинет</div>
        <div class="personal-info-block__info">
          Здесь вы можете редактировать личные денные в случае ошибки
          при регистрации или необходимости изменений.
        </div>
      </div>
      <form class="personal-form" @submit.prevent="personalAreaSubmit">
        <div class="personal-aria-form">
          <div class="personal-form-left">
            <input
              @blur="$v.formPersonalArea.file.$touch()"
              :class="status($v.formPersonalArea.file)"
              type="file"
              id="input-file"
              ref="file" @change="handleFileUpload($event)"
              multiple="multiple"
            />
            <label for="input-file">
              <img v-show="photoLoading" class="personal-form-left__img-loading" id="myImage" src="" alt="dsds">
              <span v-if="!photoLoading">
                           <img
                             src="../../../assets/Home/PersonalArea/image-user-big-one.png"
                             alt="img-personal-aria"
                             class="personal-form-left__img"
                           />
                           <img
                             src="../../../assets/Home/PersonalArea/image-user-big.png"
                             alt="img-personal-aria-two"
                             class="personal-form-left__img-one"
                           />
                           <img
                             src="../../../assets/Home/PersonalArea/image-user-big-two.png"
                             alt="img-personal-aria-three"
                             class="personal-form-left__img-two"
                           />
                           <img
                             src="../../../assets/Home/PersonalArea/image-user-big-three.png"
                             alt="img-personal-aria-four"
                             class="personal-form-left__img-three"
                           />
                           <img
                             src="../../../assets/Home/PersonalArea/image-user-big-four.png"
                             alt="img-personal-aria-five"
                             class="personal-form-left__img-four"
                           />
                           <img
                             src="../../../assets/Home/PersonalArea/image-user-big-five.png"
                             alt="img-personal-aria-six"
                             class="personal-form-left__img-five"
                           />
                        </span>
            </label>
          </div>
          <div class="personal-form-right">
            <div class="personal-info-left">
              <div class="personal-info-left__name">Иван Иванов</div>
              <div class="personal-info-left__sex">Мужской</div>
              <div class="personal-info-left__old">15.06.1990</div>
              <div class="personal-info-left__city">Москва</div>
              <div class="personal-info-left__email">
                IvanIvanov@gmail.com
              </div>
              <div class="personal-info-left__password">Пароль</div>
            </div>
            <div class="personal-info-right">
              <button class="personal-info-right__btn-name" @click.prevent="popupChangeName = !popupChangeName">
                Изменить
              </button>
              <button class="personal-info-right__btn-sex" @click.prevent="popupChangeSex = !popupChangeSex">
                Изменить
              </button>
              <button class="personal-info-right__btn-old" @click.prevent="popupChangeOld = !popupChangeOld">
                Изменить
              </button>
              <button class="personal-info-right__btn-city" @click.prevent="popupChangeCity = !popupChangeCity">
                Изменить
              </button>
              <button class="personal-info-right__btn-email" @click.prevent="popupChangeEmail = !popupChangeEmail">
                Изменить
              </button>
              <button class="personal-info-right__btn-password"
                      @click.prevent="popupChangePassword = !popupChangePassword">
                Изменить
              </button>
            </div>
          </div>
        </div>
        <div class="personal-form__buttons">
          <button class="personal-form__btn-one" @click.prevent="$router.go(-1)">Отмена</button>
          <button class="personal-form__btn-two" type="submit" @click.prevent="personalAreaSubmit">
            Сохранить изменения
          </button>
        </div>


        <div class="popup-container" v-if="popupChangeName">
          <div class="popup-name-position" @click.self="popupChangeName = !popupChangeName">
            <div class="popup-name-block">
              <div class="popup-name-block__title">Изменение Имя</div>
              <div class="popup-name-form">
                <div class="popup-name-form__email">
                  <label for="name-personal-area">Заполните поле для изменения
                    имени</label>
                  <input
                    @blur="$v.formPersonalArea.name.$touch()"
                    :class="status($v.formPersonalArea.name)"
                    class="popup-name-form__username-input"
                    v-model.trim="formPersonalArea.name"
                    id="name-personal-area"
                    type="text"
                    placeholder="Введите новое имя"
                  />
                  <div class="invalid-feed" v-if="!$v.formPersonalArea.name.alpha">{{ alphaText }}</div>
                </div>
                <div class="popup-name-form__buttons">
                  <button class="popup-name-form__btn-cancel" @click="popupChangeName = !popupChangeName">Отмена
                  </button>
                  <button class="popup-name-form__btn-create" @click="NextPopupName">Далее</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="popup-container" v-if="popupChangeSex">
          <div class="popup-sex-position" @click.self="popupChangeSex = !popupChangeSex">
            <div class="popup-sex-block">
              <div class="popup-sex-block__title">Изменение Пола</div>
              <div class="popup-sex-form">
                <div class="popup-sex-form__email">
                  <label for="sex-personal-area">Заполните поле для изменения
                    пола</label>
                  <select
                    @blur="$v.formPersonalArea.sex.$touch()"
                    :class="status($v.formPersonalArea.sex)"
                    v-model="formPersonalArea.sex"
                    id="sex-personal-area"
                    class="popup-sex-form__username-input"
                  >
                    <option disabled value="">Выберите пол</option>
                    <option value="1">Мужской</option>
                    <option value="2">Женский</option>
                    <option value="3">Трансгендер</option>
                  </select>
                </div>
                <div class="popup-sex-form__buttons">
                  <button class="popup-sex-form__btn-cancel" @click="popupChangeSex = !popupChangeSex">Отмена</button>
                  <button class="popup-sex-form__btn-create" @click="NextPopupSex">Далее</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="popup-container" v-if="popupChangeOld">
          <div class="popup-date-position" @click.self="popupChangeOld = !popupChangeOld">
            <div class="popup-date-block">
              <div class="popup-date-block__title">Изменение Возраста</div>
              <div class="popup-date-form">
                <div class="popup-date-form__email">
                  <label for="date-personal-area">Выберите дату своего рождения
                  </label>
                  <input
                    @blur="$v.formPersonalArea.old.$touch()"
                    :class="status($v.formPersonalArea.old)"
                    v-model="formPersonalArea.old"
                    class="popup-date-form__username-input"
                    type="date"
                    id="date-personal-area"
                  />
                </div>
                <div class="popup-date-form__buttons">
                  <button class="popup-date-form__btn-cancel" @click="popupChangeOld = !popupChangeOld">Отмена
                  </button>
                  <button class="popup-date-form__btn-create" @click="NextPopupOld">Далее</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="popup-container" v-if="popupChangeCity">
          <div class="popup-city-position" @click.self="popupChangeCity = !popupChangeCity">
            <div class="popup-city-block">
              <div class="popup-city-block__title">Изменение Локации</div>
              <div class="popup-city-form">
                <div class="popup-city-form__email">
                  <label for="city-personal-area">Выберите новый город
                  </label>
                  <select
                    @blur="$v.formPersonalArea.city.$touch()"
                    :class="status($v.formPersonalArea.city)"
                    v-model="formPersonalArea.city"
                    id="city-personal-area"
                    class="popup-city-form__username-input"
                  >
                    <option disabled value="">Выберите город</option>
                    <option value="1">Москва</option>
                    <option value="2">Санкт Петербург</option>
                    <option value="3">Екатеринбург</option>
                    <option value="4">Владивосток</option>
                    <option value="5">Владимир</option>
                  </select>
                </div>
                <div class="popup-city-form__buttons">
                  <button class="popup-city-form__btn-cancel" @click="popupChangeCity = !popupChangeCity">Отмена
                  </button>
                  <button class="popup-city-form__btn-create" @click="NextPopupCity">Далее</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="popup-container" v-if="popupChangeEmail">
          <div class="popup-email-position" @click.self="popupChangeEmail = !popupChangeEmail">
            <div class="popup-email-block">
              <div class="popup-email-block__title">Изменение Email</div>
              <div class="popup-email-form">
                <div class="popup-email-form__email">
                  <label for="email-personal-area">Введите новый Email
                  </label>
                  <input
                    @blur="$v.formPersonalArea.email.$touch()"
                    :class="status($v.formPersonalArea.email)"
                    v-model.trim="formPersonalArea.email"
                    class="popup-email-form__username-input"
                    type="email"
                    id="email-personal-area"
                    placeholder="IvanIvanov@gmail.com"
                  />
                  <div class="invalid-feed" v-if="!$v.formPersonalArea.email.email">Пожалуйста введите Email адрес</div>
                </div>
                <div class="popup-email-form__buttons">
                  <button class="popup-email-form__btn-cancel" @click="popupChangeEmail = !popupChangeEmail">Отмена
                  </button>
                  <button class="popup-email-form__btn-create" @click="NextPopupEmail">Далее</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="popup-container" v-if="popupChangePassword">
          <div class="popup-password-position" @click.self="popupChangePassword = !popupChangePassword">
            <div class="popup-password-block">
              <div class="popup-password-block__title">Изменение Пароля</div>
              <div class="popup-password-block__info">
                Заполните поля для изменения пароля
              </div>
              <div class="popup-password-form">
                <div class="popup-password-form__password-old">
                  <label for="old-password-personal-area">
                    Старый пароль
                  </label>
                  <input
                    class="popup-password-form__username-input"
                    type="password"
                    id="old-password-personal-area"
                    placeholder="**********"
                  />
                </div>
                <div class="popup-password-form__password-new">
                  <label for="new-password-personal-area">
                    Новый пароль
                  </label>
                  <input
                    class="popup-password-form__username-input"
                    type="password"
                    id="new-password-personal-area"
                    placeholder="**********"
                  />
                </div>
                <div class="popup-password-form__password-repeat">
                  <label for="repeat-password-personal-area">
                    Повторите новый пароль
                  </label>
                  <input
                    class="popup-password-form__username-input"
                    type="password"
                    id="repeat-password-personal-area"
                    placeholder="**********"
                  />
                </div>
                <div class="popup-password-form__buttons">
                  <button class="popup-password-form__btn-cancel" @click="popupChangePassword = !popupChangePassword">
                    Отмена
                  </button>
                  <button class="popup-password-form__btn-create">Далее</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {email, helpers} from 'vuelidate/lib/validators'

const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ]*$/)
export default {
  data() {
    return {
      formPersonalArea: {
        file: [],
        name: '',
        sex: '',
        old: '',
        city: '',
        email: ''
      },
      alphaText: 'Запрещены цифры, пробелы и другие символы',
      formatPhoto: ['image/jpeg', 'image/png', 'image/gif'],
      photoLoading: false,
      popupChangeName: false,
      popupChangeSex: false,
      popupChangeOld: false,
      popupChangeCity: false,
      popupChangeEmail: false,
      popupChangePassword: false,
    }
  },
  methods: {
    personalAreaSubmit() {
      this.$v.$touch()

      if (this.photoLoading || this.formPersonalArea.name.length ||
        this.formPersonalArea.sex.length || this.formPersonalArea.old.length ||
        this.formPersonalArea.city.length || this.formPersonalArea.email.length) {
        console.log('Success')
      } else {
        console.log('Error')
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
          const imgtag = document.getElementById('myImage')
          imgtag.title = selectedFile.name
          this.photoLoading = true
          reader.onload = function (event) {
            imgtag.src = event.target.result
          }

          reader.readAsDataURL(selectedFile)
          this.formPersonalArea.file = file
          console.log('this.formPersonalArea.fileinhandle', this.formPersonalArea.file)

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
    },
    NextPopupName() {
      if (this.formPersonalArea.name.length && this.$v.formPersonalArea.name.alpha) {
        this.popupChangeName = !this.popupChangeName
        this.$message({
          message: 'Ваше новое имя уже почти готово к изменению',
          type: 'success'
        })
        setTimeout(() => {
          this.$message('Чтобы все изменения вступили в силу нажмите на кнопку "Сохранить изменения".')
        }, 1500)
      } else {
        this.$message({
          showClose: true,
          message: 'Необходимо ввести имя.',
          type: 'warning'
        })
      }
    },
    NextPopupSex() {
      if (this.formPersonalArea.sex.length) {
        this.popupChangeSex = !this.popupChangeSex
        this.$message({
          message: 'Ваш новый пол уже почти готово к изменению',
          type: 'success'
        })
        setTimeout(() => {
          this.$message('Чтобы все изменения вступили в силу нажмите на кнопку "Сохранить изменения".')
        }, 1500)
      } else {
        this.$message({
          showClose: true,
          message: 'Необходимо выбрать пол.',
          type: 'warning'
        })
      }
    },
    NextPopupOld() {
      if (this.formPersonalArea.old.length) {
        this.popupChangeOld = !this.popupChangeOld
        this.$message({
          message: 'Ваш новый возраст уже почти готово к изменению',
          type: 'success'
        })
        setTimeout(() => {
          this.$message('Чтобы все изменения вступили в силу нажмите на кнопку "Сохранить изменения".')
        }, 1500)
      } else {
        this.$message({
          showClose: true,
          message: 'Необходимо указать возраст.',
          type: 'warning'
        })
      }
    },
    NextPopupCity() {
      if (this.formPersonalArea.city.length) {
        this.popupChangeCity = !this.popupChangeCity
        this.$message({
          message: 'Ваш новый выбранный город уже почти готово к изменению',
          type: 'success'
        })
        setTimeout(() => {
          this.$message('Чтобы все изменения вступили в силу нажмите на кнопку "Сохранить изменения".')
        }, 1500)
      } else {
        this.$message({
          showClose: true,
          message: 'Необходимо выбрать город.',
          type: 'warning'
        })
      }
    },
    NextPopupEmail() {
      if (this.formPersonalArea.email.length && this.$v.formPersonalArea.email.email) {
        this.popupChangeEmail = !this.popupChangeEmail
        this.$message({
          message: 'Ваш новый email уже почти готово к изменению',
          type: 'success'
        })
        setTimeout(() => {
          this.$message('Чтобы все изменения вступили в силу нажмите на кнопку "Сохранить изменения".')
        }, 1500)
      } else {
        this.$message({
          showClose: true,
          message: 'Необходимо ввести Email.',
          type: 'warning'
        })
      }
    }
  },
  validations: {
    formPersonalArea: {
      file: {},
      name: {
        alpha
      },
      sex: {},
      old: {},
      city: {},
      email: {
        email
      },
    }
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

.container {
  width: 100%;
  height: 100vh;
}

.personalAria-block {
  padding: 19px 91px 0;

  &__header {
    display: flex;
    align-items: center;
  }

  &__img {
    display: none;

    @include breakpoint(dxxxl) {
      display: inline-block;
    }

    @include breakpoint(dsm) {
      display: none;
    }
  }

  &__img-one {
    @include breakpoint(dxxl) {
      display: none;
    }

    @include breakpoint(dxxxxl) {
      display: none;
    }
  }

  &__img-two {
    display: none;

    @include breakpoint(dxxxxl) {
      display: inline-block;
    }

    @include breakpoint(dxxxl) {
      display: none;
    }
  }

  &__img-three {
    display: none;

    @include breakpoint(dsm) {
      display: inline-block;
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
    font-size: 21px;
    line-height: 25px;
    text-align: center;
    color: #771699;

    @include breakpoint(dxxxxl) {
      margin-left: 77px;
      font-size: 22px;
    }

    @include breakpoint(dxxxl) {
      margin-left: 67px;
      font-size: 13px;
    }

    @include breakpoint(dxxl) {
      margin-left: 57px;
      font-size: 16px;
    }

    @include breakpoint(dxl) {
      margin-left: 47px;
      font-size: 14px;
    }

    @include breakpoint(dlg) {
      margin-left: 37px;
      font-size: 13px;
    }

    @include breakpoint(dmd) {
      margin-left: 27px;
      font-size: 12px;
    }

    @include breakpoint(dsm) {
      margin-left: 17px;
      font-size: 12px;
    }
  }

  &__info {
    display: flex;
    align-items: center;
    margin-left: 1690px;

    button {
      border: none;
      background: none;
    }

    @include breakpoint(dxxxxl) {
      margin-left: 1118px;
    }

    @include breakpoint(dxxxl) {
      margin-left: 966px;
    }

    @include breakpoint(dxxl) {
      margin-left: 948px;
    }

    @include breakpoint(dxl) {
      margin-left: 888px;
    }

    @include breakpoint(dlg) {
      margin-left: 863px;
    }

    @include breakpoint(dmd) {
      margin-left: 784px;
    }

    @include breakpoint(dsm) {
      margin-left: 558px;
    }
  }

  &__info-one {
    display: none;

    @include breakpoint(dxxl) {
      display: inline-block;
    }
  }

  &__info-two {
    @include breakpoint(dxxxxl) {
      display: none;
    }
  }

  &__info-three {
    display: none;

    @include breakpoint(dxxxxl) {
      display: inline-block;
    }

    @include breakpoint(dxxxl) {
      display: none;
    }
  }

  &__info-four {
    display: none;

    @include breakpoint(dxxxl) {
      display: inline-block;
    }

    @include breakpoint(dxxl) {
      display: none;
    }
  }

  &__user {
    margin-left: 97px;
    border-radius: 90px;
    width: 88px;
    height: 88px;
    background-color: #c4c4c4;

    @include breakpoint(dxxxxl) {
      margin-left: 87px;
      width: 78px;
      height: 78px;
    }

    @include breakpoint(dxxxl) {
      margin-left: 67px;
      width: 58px;
      height: 58px;
    }

    @include breakpoint(dxxl) {
      margin-left: 47px;
      border-radius: 90px;
      width: 38px;
      height: 38px;
      background-color: #c4c4c4;
    }
  }

  &__user-one {
    display: none;

    @include breakpoint(dxxl) {
      display: inline-block;
    }
  }

  &__user-two {
    @include breakpoint(dxxxxl) {
      width: 78px;
      height: 78px;
    }

    @include breakpoint(dxxxl) {
      display: none;
    }
  }

  &__user-three {
    display: none;

    @include breakpoint(dxxxl) {
      display: inline-block;
    }

    @include breakpoint(dxxl) {
      display: none;
    }
  }

  @include breakpoint(dsm) {
    padding: 19px 91px 0;
  }
}

.personal-info-block {
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

.personal-form {
  &__buttons {
    margin: 286px 0 0 400px;

    @include breakpoint(dxxxxl) {
      margin: 230px 0 0 360px;
    }

    @include breakpoint(dxxxl) {
      margin: 205px 0 0 360px;
    }

    @include breakpoint(dxxl) {
      margin: 160px 0 0 250px;
    }

    @include breakpoint(dxl) {
      margin: 200px 0 0 230px;
    }

    @include breakpoint(dlg) {
      margin: 186px 0 0 250px;
    }

    @include breakpoint(dmd) {
      margin: 166px 0 0 200px;
    }

    @include breakpoint(dsm) {
      margin: 196px 0 0 150px;
    }
  }

  &__btn-one {
    border: 1px solid #d38eec;
    border-radius: 5px;
    width: 650px;
    height: 86px;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 28px;
    line-height: 19px;
    color: #771699;
    background: #fff;

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

    @include breakpoint(dsm) {
      width: 200px;
      height: 41px;
      font-size: 11px;
    }
  }

  &__btn-two {
    margin-left: 101px;
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
      margin-left: 71px;
      width: 320px;
      height: 46px;
      font-size: 16px;
    }

    @include breakpoint(dlg) {
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

.personal-aria-form {
  display: grid;
  grid-column-gap: 174px;
  grid-template-columns: 400px 650px;
  margin-top: 130px;

  @include breakpoint(dxxxxl) {
    grid-column-gap: 146px;
    grid-template-columns: 350px 450px;
    margin-top: 75px;
  }

  @include breakpoint(dxxxl) {
    grid-column-gap: 168px;
    grid-template-columns: 250px 300px;
    margin-top: 55px;
  }

  @include breakpoint(dxxl) {
    grid-column-gap: 69px;
    grid-template-columns: 230px 400px;
    margin-top: 45px;
  }

  @include breakpoint(dxl) {
    grid-column-gap: 79px;
    grid-template-columns: 229px 250px;
    margin-top: 65px;
  }

  @include breakpoint(dlg) {
    grid-column-gap: 67px;
    grid-template-columns: 200px 250px;
    margin-top: 35px;
  }

  @include breakpoint(dmd) {
    grid-column-gap: 94px;
    margin-top: 65px;
  }

  @include breakpoint(dsm) {
    grid-column-gap: 81px;
    grid-template-columns: 150px 200px;
    margin-top: 45px;
  }
}

.personal-form-left {
  display: flex;
  flex-direction: column;

  input {
    display: none;
    opacity: 0;
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

  label {
    margin-top: 33px;
    border-radius: 5px;
    width: 400px;
    height: 400px;
    box-sizing: border-box;
    background: #fff;

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

  &__img {
    @include breakpoint(dxxxxl) {
      display: none;
    }
  }

  &__img-one {
    display: none;

    @include breakpoint(dxxl) {
      display: inline-block;
    }

    @include breakpoint(dlg) {
      display: none;
    }
  }

  &__img-two {
    display: none;

    @include breakpoint(dxxxxl) {
      display: inline-block;
    }

    @include breakpoint(dxxxl) {
      display: none;
    }
  }

  &__img-three {
    display: none;

    @include breakpoint(dxxxl) {
      display: inline-block;
    }

    @include breakpoint(dxxl) {
      display: none;
    }
  }

  &__img-four {
    display: none;

    @include breakpoint(dlg) {
      display: inline-block;
    }

    @include breakpoint(dsm) {
      display: none;
    }
  }

  &__img-five {
    display: none;

    @include breakpoint(dsm) {
      display: inline-block;
    }
  }

  &__btn {
    margin-top: 13px;
    text-align: center;

    button {
      border: none;
      width: 217px;
      height: 17px;
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 15px;
      line-height: 16px;
      text-decoration-line: underline;
      color: #d38eec;
      background: none;
    }
  }
}

.personal-form-right {
  display: grid;
  grid-column-gap: 69px;
  grid-template-columns: 450px 150px;
  margin-top: 33px;

  @include breakpoint(dxxxxl) {
    margin-top: 23px;
  }

  @include breakpoint(dxxxl) {
    margin-top: 17px;
  }

  @include breakpoint(dxxl) {
    grid-template-columns: 200px 80px;
    margin-top: 13px;
  }

  @include breakpoint(dlg) {
    margin-top: 9px;
  }

  @include breakpoint(dsm) {
    margin-top: 7px;
  }
}

.personal-info-left {
  &__name {
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 26px;
    line-height: 19px;
    color: #771699;

    @include breakpoint(dxxxxl) {
      font-size: 25px;
    }

    @include breakpoint(dxxxl) {
      font-size: 19px;
    }

    @include breakpoint(dxxl) {
      font-size: 15px;
    }

    @include breakpoint(dlg) {
      font-size: 13px;
    }

    @include breakpoint(dsm) {
      font-size: 11px;
    }
  }

  &__sex {
    margin-top: 52px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 26px;
    line-height: 19px;
    color: #771699;

    @include breakpoint(dxxxxl) {
      margin-top: 42px;
      font-size: 25px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 27px;
      font-size: 19px;
    }

    @include breakpoint(dxxl) {
      margin-top: 22px;
      font-size: 15px;
    }

    @include breakpoint(dlg) {
      margin-top: 18px;
      font-size: 13px;
    }

    @include breakpoint(dsm) {
      margin-top: 7px;
      font-size: 11px;
    }
  }

  &__old {
    margin-top: 52px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 26px;
    line-height: 19px;
    color: #771699;

    @include breakpoint(dxxxxl) {
      margin-top: 42px;
      font-size: 25px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 27px;
      font-size: 19px;
    }

    @include breakpoint(dxxl) {
      margin-top: 22px;
      font-size: 15px;
    }

    @include breakpoint(dlg) {
      margin-top: 18px;
      font-size: 13px;
    }

    @include breakpoint(dsm) {
      margin-top: 7px;
      font-size: 11px;
    }
  }

  &__city {
    margin-top: 52px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 26px;
    line-height: 19px;
    color: #771699;

    @include breakpoint(dxxxxl) {
      margin-top: 42px;
      font-size: 25px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 27px;
      font-size: 19px;
    }

    @include breakpoint(dxxl) {
      margin-top: 22px;
      font-size: 15px;
    }

    @include breakpoint(dlg) {
      margin-top: 18px;
      font-size: 13px;
    }

    @include breakpoint(dsm) {
      margin-top: 7px;
      font-size: 11px;
    }
  }

  &__email {
    margin-top: 52px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 26px;
    line-height: 19px;
    color: #771699;

    @include breakpoint(dxxxxl) {
      margin-top: 42px;
      font-size: 25px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 27px;
      font-size: 19px;
    }

    @include breakpoint(dxxl) {
      margin-top: 22px;
      font-size: 15px;
    }

    @include breakpoint(dlg) {
      margin-top: 18px;
      font-size: 13px;
    }

    @include breakpoint(dsm) {
      margin-top: 7px;
      font-size: 11px;
    }
  }

  &__password {
    margin-top: 52px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 26px;
    line-height: 19px;
    color: #771699;

    @include breakpoint(dxxxxl) {
      margin-top: 42px;
      font-size: 25px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 27px;
      font-size: 19px;
    }

    @include breakpoint(dxxl) {
      margin-top: 22px;
      font-size: 15px;
    }

    @include breakpoint(dlg) {
      margin-top: 18px;
      font-size: 13px;
    }

    @include breakpoint(dsm) {
      margin-top: 7px;
      font-size: 11px;
    }
  }
}

.personal-info-right {
  text-align: center;

  &__btn-name {
    margin-top: -8px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 26px;
    text-decoration-line: underline;
    color: #d38eec;
    background: none;

    @include breakpoint(dxxxxl) {
      font-size: 25px;
    }

    @include breakpoint(dxxxl) {
      margin-top: -1px;
      font-size: 19px;
    }

    @include breakpoint(dxxl) {
      margin-top: 0;
      font-size: 15px;
    }

    @include breakpoint(dlg) {
      margin-top: -2px;
      font-size: 13px;
    }

    @include breakpoint(dsm) {
      font-size: 11px;
    }
  }

  &__btn-sex {
    margin-top: 52px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 26px;
    line-height: 16px;
    text-decoration-line: underline;
    color: #d38eec;
    background: none;

    @include breakpoint(dxxxxl) {
      margin-top: 44px;
      font-size: 25px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 30px;
      font-size: 19px;
    }

    @include breakpoint(dxxl) {
      margin-top: 25px;
      font-size: 15px;
    }

    @include breakpoint(dlg) {
      margin-top: 21px;
      font-size: 13px;
    }

    @include breakpoint(dsm) {
      margin-top: 10px;
      font-size: 11px;
    }
  }

  &__btn-old {
    margin-top: 52px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 26px;
    line-height: 16px;
    text-decoration-line: underline;
    color: #d38eec;
    background: none;

    @include breakpoint(dxxxxl) {
      margin-top: 44px;
      font-size: 25px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 30px;
      font-size: 19px;
    }

    @include breakpoint(dxxl) {
      margin-top: 25px;
      font-size: 15px;
    }

    @include breakpoint(dlg) {
      margin-top: 21px;
      font-size: 13px;
    }

    @include breakpoint(dsm) {
      margin-top: 10px;
      font-size: 11px;
    }
  }

  &__btn-city {
    margin-top: 52px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 26px;
    line-height: 16px;
    text-decoration-line: underline;
    color: #d38eec;
    background: none;

    @include breakpoint(dxxxxl) {
      margin-top: 44px;
      font-size: 25px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 30px;
      font-size: 19px;
    }

    @include breakpoint(dxxl) {
      margin-top: 25px;
      font-size: 15px;
    }

    @include breakpoint(dlg) {
      margin-top: 21px;
      font-size: 13px;
    }

    @include breakpoint(dsm) {
      margin-top: 10px;
      font-size: 11px;
    }
  }

  &__btn-email {
    margin-top: 52px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 26px;
    line-height: 16px;
    text-decoration-line: underline;
    color: #d38eec;
    background: none;

    @include breakpoint(dxxxxl) {
      margin-top: 44px;
      font-size: 25px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 30px;
      font-size: 19px;
    }

    @include breakpoint(dxxl) {
      margin-top: 25px;
      font-size: 15px;
    }

    @include breakpoint(dlg) {
      margin-top: 21px;
      font-size: 13px;
    }

    @include breakpoint(dsm) {
      margin-top: 10px;
      font-size: 11px;
    }
  }

  &__btn-password {
    margin-top: 52px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 26px;
    line-height: 16px;
    text-decoration-line: underline;
    color: #d38eec;
    background: none;

    @include breakpoint(dxxxxl) {
      margin-top: 44px;
      font-size: 25px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 30px;
      font-size: 19px;
    }

    @include breakpoint(dxxl) {
      margin-top: 25px;
      font-size: 15px;
    }

    @include breakpoint(dlg) {
      margin-top: 21px;
      font-size: 13px;
    }

    @include breakpoint(dsm) {
      margin-top: 10px;
      font-size: 11px;
    }
  }
}

.popup-name-position {
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.popup-name-block {
  border: 1px solid #000;
  border-radius: 5px;
  padding: 104px 74px;
  width: 550px;
  height: 475px;
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

  @include breakpoint(dxxxxl) {
    width: 530px;
    height: 488px;
  }

  @include breakpoint(dxxxl) {
    padding: 50px;
    width: 350px;
    height: 301px;
  }
}

.popup-name-form {
  margin-top: 47px;

  &__email {
    display: flex;
    flex-direction: column;

    label {
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 26px;
      line-height: 28px;
      color: #797979;

      @include breakpoint(dxxxxl) {
        font-size: 25px;
      }

      @include breakpoint(dxxxl) {
        font-size: 16px;
        line-height: 19px;
      }

      @include breakpoint(dxxl) {
        font-size: 16px;
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

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;

    @include breakpoint(dxxxxl) {
      margin-top: 35px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 20px;
    }

    @include breakpoint(dxxl) {
      margin-top: 20px;
    }

    @include breakpoint(dlg) {
      margin-top: 20px;
    }
  }

  &__btn-cancel {
    border: 1px solid #d38eec;
    border-radius: 5px;
    width: 150px;
    height: 45px;
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
      width: 100px;
      height: 40px;
    }

    @include breakpoint(dxxl) {
      width: 100px;
      height: 40px;
    }
  }

  &__btn-create {
    border: 1px solid #ff006b;
    border-radius: 5px;
    width: 150px;
    height: 45px;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 13px;
    line-height: 18px;
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
      width: 100px;
      height: 40px;
    }

    @include breakpoint(dxxl) {
      width: 100px;
      height: 40px;
    }
  }

  @include breakpoint(dxxxl) {
    margin-top: 20px;
  }
}

.popup-sex-position {
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.popup-sex-block {
  border: 1px solid #000;
  border-radius: 5px;
  padding: 104px 74px;
  width: 550px;
  height: 475px;
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

  @include breakpoint(dxxxxl) {
    width: 530px;
    height: 488px;
  }

  @include breakpoint(dxxxl) {
    padding: 50px;
    width: 350px;
    height: 301px;
  }
}

.popup-sex-form {
  margin-top: 47px;

  &__email {
    display: flex;
    flex-direction: column;

    label {
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 26px;
      line-height: 28px;
      color: #797979;

      @include breakpoint(dxxxxl) {
        font-size: 25px;
      }

      @include breakpoint(dxxxl) {
        font-size: 16px;
        line-height: 19px;
      }

      @include breakpoint(dxxl) {
        font-size: 16px;
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

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;

    @include breakpoint(dxxxxl) {
      margin-top: 35px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 20px;
    }

    @include breakpoint(dxxl) {
      margin-top: 20px;
    }

    @include breakpoint(dlg) {
      margin-top: 20px;
    }
  }

  &__btn-cancel {
    border: 1px solid #d38eec;
    border-radius: 5px;
    width: 150px;
    height: 45px;
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
      width: 100px;
      height: 40px;
    }

    @include breakpoint(dxxl) {
      width: 100px;
      height: 40px;
    }
  }

  &__btn-create {
    border: 1px solid #ff006b;
    border-radius: 5px;
    width: 150px;
    height: 45px;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 13px;
    line-height: 18px;
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
      width: 100px;
      height: 40px;
    }

    @include breakpoint(dxxl) {
      width: 100px;
      height: 40px;
    }
  }

  @include breakpoint(dxxxl) {
    margin-top: 20px;
  }
}

.popup-date-position {
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.popup-date-block {
  border: 1px solid #000;
  border-radius: 5px;
  padding: 104px 74px;
  width: 550px;
  height: 475px;
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

  @include breakpoint(dxxxxl) {
    width: 530px;
    height: 488px;
  }

  @include breakpoint(dxxxl) {
    padding: 50px;
    width: 350px;
    height: 301px;
  }
}

.popup-date-form {
  margin-top: 47px;

  &__email {
    display: flex;
    flex-direction: column;

    label {
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 26px;
      line-height: 28px;
      color: #797979;

      @include breakpoint(dxxxxl) {
        font-size: 25px;
      }

      @include breakpoint(dxxxl) {
        font-size: 16px;
        line-height: 19px;
      }

      @include breakpoint(dxxl) {
        font-size: 16px;
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

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;

    @include breakpoint(dxxxxl) {
      margin-top: 35px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 20px;
    }

    @include breakpoint(dxxl) {
      margin-top: 20px;
    }

    @include breakpoint(dlg) {
      margin-top: 20px;
    }
  }

  &__btn-cancel {
    border: 1px solid #d38eec;
    border-radius: 5px;
    width: 150px;
    height: 45px;
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
      width: 100px;
      height: 40px;
    }

    @include breakpoint(dxxl) {
      width: 100px;
      height: 40px;
    }
  }

  &__btn-create {
    border: 1px solid #ff006b;
    border-radius: 5px;
    width: 150px;
    height: 45px;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 13px;
    line-height: 18px;
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
      width: 100px;
      height: 40px;
    }

    @include breakpoint(dxxl) {
      width: 100px;
      height: 40px;
    }
  }

  @include breakpoint(dxxxl) {
    margin-top: 20px;
  }
}

.popup-city-position {
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.popup-city-block {
  border: 1px solid #000;
  border-radius: 5px;
  padding: 104px 74px;
  width: 550px;
  height: 475px;
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

  @include breakpoint(dxxxxl) {
    width: 530px;
    height: 488px;
  }

  @include breakpoint(dxxxl) {
    padding: 50px;
    width: 350px;
    height: 301px;
  }
}

.popup-city-form {
  margin-top: 47px;

  &__email {
    display: flex;
    flex-direction: column;

    label {
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 26px;
      line-height: 28px;
      color: #797979;

      @include breakpoint(dxxxxl) {
        font-size: 25px;
      }

      @include breakpoint(dxxxl) {
        font-size: 16px;
        line-height: 19px;
      }

      @include breakpoint(dxxl) {
        font-size: 16px;
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

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;

    @include breakpoint(dxxxxl) {
      margin-top: 35px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 20px;
    }

    @include breakpoint(dxxl) {
      margin-top: 20px;
    }

    @include breakpoint(dlg) {
      margin-top: 20px;
    }
  }

  &__btn-cancel {
    border: 1px solid #d38eec;
    border-radius: 5px;
    width: 150px;
    height: 45px;
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
      width: 100px;
      height: 40px;
    }

    @include breakpoint(dxxl) {
      width: 100px;
      height: 40px;
    }
  }

  &__btn-create {
    border: 1px solid #ff006b;
    border-radius: 5px;
    width: 150px;
    height: 45px;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 13px;
    line-height: 18px;
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
      width: 100px;
      height: 40px;
    }

    @include breakpoint(dxxl) {
      width: 100px;
      height: 40px;
    }
  }

  @include breakpoint(dxxxl) {
    margin-top: 20px;
  }
}

.popup-email-position {
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.popup-email-block {
  border: 1px solid #000;
  border-radius: 5px;
  padding: 104px 74px;
  width: 550px;
  height: 475px;
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

  @include breakpoint(dxxxxl) {
    width: 530px;
    height: 488px;
  }

  @include breakpoint(dxxxl) {
    padding: 50px;
    width: 350px;
    height: 301px;
  }
}

.popup-email-form {
  margin-top: 47px;

  &__email {
    display: flex;
    flex-direction: column;

    label {
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 26px;
      line-height: 28px;
      color: #797979;

      @include breakpoint(dxxxxl) {
        font-size: 25px;
      }

      @include breakpoint(dxxxl) {
        font-size: 16px;
        line-height: 19px;
      }

      @include breakpoint(dxxl) {
        font-size: 16px;
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

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;

    @include breakpoint(dxxxxl) {
      margin-top: 35px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 20px;
    }

    @include breakpoint(dxxl) {
      margin-top: 20px;
    }

    @include breakpoint(dlg) {
      margin-top: 20px;
    }
  }

  &__btn-cancel {
    border: 1px solid #d38eec;
    border-radius: 5px;
    width: 150px;
    height: 45px;
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
      width: 100px;
      height: 40px;
    }

    @include breakpoint(dxxl) {
      width: 100px;
      height: 40px;
    }
  }

  &__btn-create {
    border: 1px solid #ff006b;
    border-radius: 5px;
    width: 150px;
    height: 45px;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 13px;
    line-height: 18px;
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
      width: 100px;
      height: 40px;
    }

    @include breakpoint(dxxl) {
      width: 100px;
      height: 40px;
    }
  }

  @include breakpoint(dxxxl) {
    margin-top: 20px;
  }
}

.popup-password-position {
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.popup-password-block {
  border: 1px solid #000;
  border-radius: 5px;
  padding: 104px 74px;
  width: 550px;
  height: 775px;
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

  &__info {
    margin-top: 23px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 21px;
    line-height: 19px;
    color: #797979;

    @include breakpoint(dxxxxl) {
      font-size: 20px;
    }

    @include breakpoint(dxxxl) {
      font-size: 14px;
    }

    @include breakpoint(dxxl) {
      margin-top: 13px;
      font-size: 14px;
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

  @include breakpoint(dxxxxl) {
    width: 530px;
    height: 788px;
  }

  @include breakpoint(dxxxl) {
    padding: 50px;
    width: 350px;
    height: 540px;
  }

  @include breakpoint(dxxl) {
    padding: 50px;
    width: 350px;
    height: 520px;
  }
}

.popup-password-form {
  margin-top: 47px;

  &__password-old {
    display: flex;
    flex-direction: column;

    label {
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 26px;
      line-height: 28px;
      color: #797979;

      @include breakpoint(dxxxxl) {
        font-size: 21px;
      }

      @include breakpoint(dxxxl) {
        font-size: 14px;
        line-height: 19px;
      }

      @include breakpoint(dxxl) {
        font-size: 14px;
      }
    }
  }

  &__password-new {
    display: flex;
    flex-direction: column;
    margin-top: 24px;

    label {
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 26px;
      line-height: 28px;
      color: #797979;

      @include breakpoint(dxxxxl) {
        font-size: 21px;
      }

      @include breakpoint(dxxxl) {
        font-size: 14px;
        line-height: 19px;
      }

      @include breakpoint(dxxl) {
        font-size: 14px;
      }
    }
  }

  &__password-repeat {
    display: flex;
    flex-direction: column;
    margin-top: 24px;

    label {
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 26px;
      line-height: 28px;
      color: #797979;

      @include breakpoint(dxxxxl) {
        font-size: 21px;
      }

      @include breakpoint(dxxxl) {
        font-size: 14px;
        line-height: 19px;
      }

      @include breakpoint(dxxl) {
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

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;

    @include breakpoint(dxxxxl) {
      margin-top: 35px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 30px;
    }

    @include breakpoint(dxxl) {
      margin-top: 20px;
    }

    @include breakpoint(dlg) {
      margin-top: 20px;
    }
  }

  &__btn-cancel {
    border: 1px solid #d38eec;
    border-radius: 5px;
    width: 150px;
    height: 45px;
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
      width: 100px;
      height: 40px;
    }

    @include breakpoint(dxxl) {
      width: 100px;
      height: 40px;
    }
  }

  &__btn-create {
    border: 1px solid #ff006b;
    border-radius: 5px;
    width: 150px;
    height: 45px;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 13px;
    line-height: 18px;
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
      width: 100px;
      height: 40px;
    }

    @include breakpoint(dxxl) {
      width: 100px;
      height: 40px;
    }
  }

  @include breakpoint(dxxxl) {
    margin-top: 20px;
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
