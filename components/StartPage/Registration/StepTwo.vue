<template>
  <div class="register-block-two">
    <div class="register-block-two__title">2 шаг.</div>
    <div class="register-block-two__info">
      Загрузите фотографию (как на примере ниже) для инициализации
      вашего аккаунта. <br/>
      После успешной загрузки нажмите кнопу далее.
    </div>
    <form @submit.prevent="registerStepTwo">
      <div class="register-block-verification">
        <div class="register-verification-left">
          <span>Пример фотографии</span>
          <div>
            <img
              src="../../../assets/StartPage/Registration/step-two/img-example.png"
              alt="img-example"
              class="register-verification-left__img"
            />
            <img
              src="../../../assets/StartPage/Registration/step-two/img-example-one.png"
              alt="img-example-one"
              class="register-verification-left__img-one"
            />
            <img
              src="../../../assets/StartPage/Registration/step-two/img-example-three.png"
              alt="img-example-three"
              class="register-verification-left__img-three"
            />
            <img
              src="../../../assets/StartPage/Registration/step-two/img-example-two.png"
              alt="img-example-two"
              class="register-verification-left__img-two"
            />
            <img
              src="../../../assets/StartPage/Registration/step-two/img-example-four.png"
              alt="img-example-four"
              class="register-verification-left__img-four"
            />
            <img
              src="../../../assets/StartPage/Registration/step-two/img-example-five.png"
              alt="img-example-five"
              class="register-verification-left__img-five"
            />
            <img
              src="../../../assets/StartPage/Registration/step-two/img-example-six.png"
              alt="img-example-six"
              class="register-verification-left__img-six"
            />
          </div>
        </div>
        <div class="register-verification-right">
          <input
            @blur="$v.formStepTwo.photoVerification.$touch()"
            :class="status($v.formStepTwo.photoVerification)"
            type="file"
            id="input-file"
            ref="fileVerification" @change="handleFileUpload($event)"
          />
          <span>Ваша фотография</span>
          <label for="input-file"
                 :class="{'register-verification-right__input-photo-loading': photoVerificationLoading}"
          >
            <img v-show="photoVerificationLoading" class="register-verification-right__img-loading" id="myImageTwo"
                 src="" alt="dsds">
            <span v-if="!photoVerificationLoading">
            <img
              src="../../../assets/StartPage/Registration/step-two/arrow-down.svg"
              alt="arrow-down-two"
              class="register-verification-right__img"
            />
            <img
              src="../../../assets/StartPage/Registration/step-two/arrow-down-one.svg"
              alt="arrow-down-three"
              class="register-verification-right__img-one"
            />
            <img
              src="../../../assets/StartPage/Registration/step-two/arrow-down-two.svg"
              alt="arrow-down-four"
              class="register-verification-right__img-two"
            />
          </span>
            <div v-if="!photoVerificationLoading">
              Загрузите вашу фотографию <br/>
              с паспортом (как в примере).
            </div>
          </label>
          <div class="invalid-feed"
               v-if="$v.formStepTwo.photoVerification.$error || $v.formStepTwo.photoVerification.$dirty && !$v.formStepTwo.photoVerification.required">
            Необходимо загрузить Фотографию
          </div>
          <div class="register-verification-right__btn">
            <button type="submit" @click.prevent="registerStepTwo">Далее</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {requiredIf} from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      formStepTwo: {
        photoVerification: []
      },
      formatPhoto: ['image/jpeg', 'image/png', 'image/gif'],
      photoVerificationLoading: false,
      stepTwoIsReg: 0
    }
  },
  methods: {
    registerStepTwo() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        console.log('Error')
      } else {
        const formData = new FormData()
        formData.append('photoVerification', this.formStepTwo.photoVerification)

        try {
          // сделать диспатч action для варификации фото
          this.stepTwoIsReg = 1
          console.log('Success')
          console.log('dispatch true')
          this.$router.push(`/signup/s3?stepTwoIsReg=${this.stepTwoIsReg}`)
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
      if (this.$refs.fileVerification.files.length > 0) {
        const file = this.$refs.fileVerification.files[0]

        if (this.formatPhoto.includes(file.type)) {
          const selectedFile = e.target.files[0]
          const reader = new FileReader()
          const imgtag = document.getElementById('myImageTwo')
          imgtag.title = selectedFile.name
          this.photoVerificationLoading = true
          reader.onload = function (event) {
            imgtag.src = event.target.result
          }

          reader.readAsDataURL(selectedFile)
          this.formStepTwo.photoVerification = file

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
    formStepTwo: {
      photoVerification: {
        required: requiredIf(function (nestedModel) {
          return !this.photoVerificationLoading
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "assets/settings.scss";

.register-block-two {
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
}

.register-block-verification {
  display: grid;
  grid-column-gap: 347px;
  grid-template-columns: 900px 900px;
  margin-top: 100px;

  @include breakpoint(dxxxxl) {
    grid-column-gap: 192px;
    grid-template-columns: 650px 650px;
    margin-top: 75px;
  }

  @include breakpoint(dxxxl) {
    grid-column-gap: 87px;
    grid-template-columns: 550px 550px;
    margin-top: 55px;
  }

  @include breakpoint(dxxl) {
    grid-column-gap: 207px;
    grid-template-columns: 450px 450px;
    margin-top: 30px;
  }

  @include breakpoint(dxl) {
    grid-column-gap: 124px;
    grid-template-columns: 450px 450px;
    margin-top: 55px;
  }

  @include breakpoint(dlg) {
    grid-column-gap: 155px;
    grid-template-columns: 400px 400px;
    margin-top: 55px;
  }

  @include breakpoint(dmd) {
    grid-column-gap: 168px;
    grid-template-columns: 350px 350px;
  }

  @include breakpoint(dsm) {
    grid-column-gap: 112px;
    grid-template-columns: 300px 300px;
  }
}

.register-verification-left {
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

  &__img {
    display: none;

    @include breakpoint(dxxl) {
      display: inline-block;
    }

    @include breakpoint(dlg) {
      display: none;
    }
  }

  &__img-one {
    @include breakpoint(dxxxxl) {
      display: none;
    }
  }

  &__img-two {
    display: none;

    @include breakpoint(dxxxl) {
      display: inline-block;
    }

    @include breakpoint(dxxl) {
      display: none;
    }
  }

  &__img-three {
    display: none;

    @include breakpoint(dxxxxl) {
      display: inline-block;
    }

    @include breakpoint(dxxxl) {
      display: none;
    }
  }

  &__img-four {
    display: none;

    @include breakpoint(dlg) {
      display: inline-block;
    }

    @include breakpoint(dmd) {
      display: none;
    }
  }

  &__img-five {
    display: none;

    @include breakpoint(dmd) {
      display: inline-block;
    }

    @include breakpoint(dsm) {
      display: none;
    }
  }

  &__img-six {
    display: none;

    @include breakpoint(dsm) {
      display: inline-block;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 33px;
    border: 1px solid #d38eec;
    border-radius: 5px;
    width: 900px;
    height: 520px;
    box-sizing: border-box;
    background: #fff;

    @include breakpoint(dxxxxl) {
      margin-top: 20px;
      width: 650px;
      height: 420px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 16px;
      width: 550px;
      height: 360px;
    }

    @include breakpoint(dxxl) {
      margin-top: 13px;
      width: 450px;
      height: 280px;
    }

    @include breakpoint(dlg) {
      margin-top: 10px;
      width: 400px;
      height: 280px;
    }

    @include breakpoint(dmd) {
      width: 350px;
      height: 250px;
    }

    @include breakpoint(dsm) {
      width: 300px;
      height: 220px;
    }
  }
}

.register-verification-right {
  input {
    display: none;
    opacity: 0;
  }

  &__input-photo-loading {
    align-items: center;
    justify-content: center;
  }

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

  &__img {
    display: none;

    @include breakpoint(dxxl) {
      display: inline-block;
    }
  }

  &__img-one {
    @include breakpoint(dxxxxl) {
      display: none;
    }
  }

  &__img-two {
    display: none;

    @include breakpoint(dxxxxl) {
      display: inline-block;
    }

    @include breakpoint(dxxl) {
      display: none;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    margin-top: 33px;
    border: 1px solid #d38eec;
    border-radius: 5px;
    width: 900px;
    height: 520px;
    box-sizing: border-box;
    background: #fff;

    span {
      margin-top: 160px;
      text-align: center;

      @include breakpoint(dxxxxl) {
        margin-top: 150px;
      }

      @include breakpoint(dxxxl) {
        margin-top: 113px;
      }

      @include breakpoint(dxxl) {
        margin-top: 77px;
      }

      @include breakpoint(dsm) {
        margin-top: 65px;
      }
    }

    div {
      margin-top: 46px;
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 28px;
      line-height: 32px;
      text-align: center;
      text-decoration-line: underline;
      color: #797979;

      @include breakpoint(dxxxxl) {
        font-size: 22px;
      }

      @include breakpoint(dxxxl) {
        margin-top: 18px;
        font-size: 19px;
      }

      @include breakpoint(dxxl) {
        margin-top: 30px;
        font-size: 16px;
        line-height: 19px;
      }

      @include breakpoint(dlg) {
        font-size: 14px;
      }
    }

    @include breakpoint(dxxxxl) {
      margin-top: 20px;
      width: 650px;
      height: 420px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 16px;
      width: 550px;
      height: 360px;
    }

    @include breakpoint(dxxl) {
      margin-top: 13px;
      width: 450px;
      height: 280px;
    }

    @include breakpoint(dlg) {
      margin-top: 10px;
      width: 400px;
      height: 280px;
    }

    @include breakpoint(dmd) {
      width: 350px;
      height: 250px;
    }

    @include breakpoint(dsm) {
      width: 300px;
      height: 220px;
    }
  }

  &__img-loading {
    border-radius: 5px;
    width: 880px;
    height: 500px;

    @include breakpoint(dxxxxl) {
      width: 630px;
      height: 400px;
    }

    @include breakpoint(dxxxl) {
      width: 530px;
      height: 340px;
    }

    @include breakpoint(dxxl) {
      width: 440px;
      height: 270px;
    }

    @include breakpoint(dlg) {
      width: 385px;
      height: 265px;
    }

    @include breakpoint(dmd) {
      width: 340px;
      height: 240px;
    }

    @include breakpoint(dsm) {
      width: 290px;
      height: 210px;
    }
  }

  &__btn {
    margin-top: 70px;
    text-align: right;

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
      margin-top: 62px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 42px;
    }

    @include breakpoint(dxxl) {
      margin-top: 65px;
    }

    @include breakpoint(dxl) {
      margin-top: 80px;
    }

    @include breakpoint(dlg) {
      margin-top: 40px;
    }

    @include breakpoint(dmd) {
      margin-top: 70px;
    }

    @include breakpoint(dsm) {
      margin-top: 80px;
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
  .register-block-two {
    &__title {
      margin-top: 90px;
      font-size: 56px;
    }

    &__info {
      margin-top: 45px;
      font-size: 16px;
    }
  }

  .register-block-verification {
    margin-top: 105px;
  }
}

@media (height: 864px) {
  .register-block-two {
    &__title {
      margin-top: 67px;
    }

    &__info {
      margin-top: 43px;
    }
  }

  .register-block-verification {
    margin-top: 55px;
  }
}
</style>

