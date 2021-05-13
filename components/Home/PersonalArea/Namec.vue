<template>
  <form>
    <div class="popup-password-position">
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
            <button class="popup-password-form__btn-cancel">Отмена</button>
            <button class="popup-password-form__btn-create">Далее</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped lang="scss">
@import "assets/settings.scss";

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
</style>
