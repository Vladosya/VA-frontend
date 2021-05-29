<template>
  <div class="container">
    <div class="message-header-block">
      <div class="message-header-block__header">
        <div>
          <nuxt-link to="/home">
            <img
              src="../../../assets/Home/Message/logo-va-one.svg"
              alt="step-logo-one"
              class="message-header-block__img-one"
            />
          </nuxt-link>
        </div>
        <div class="message-header-block__line">
          <img
            src="../../../assets/Home/Message/line.svg"
            alt="line-step-one"
          />
        </div>
        <div class="message-header-block__title">Сообщения</div>
        <div class="message-header-block__info">
          <button>
            <nuxt-link to="/personalarea">
              <img
                src="../../../assets/Home/Message/user-page.svg"
                alt="letter-personal-aria-two"
                class="message-header-block__info-two"
              />
            </nuxt-link>
          </button>
          <div class="message-header-block__user">
            <el-dropdown trigger="click">
              <a href="#" class="el-dropdown-link">
                <img
                  src="../../../assets/Home/Message/image-user-two.png"
                  alt="personal-aria-user-two"
                  class="message-header-block__user-two"
                />
              </a>
              <el-dropdown-menu class="message-header-block__dropdown" slot="dropdown">
                <nuxt-link to="/needhelp">
                  <el-dropdown-item icon="el-icon-help">Помощь</el-dropdown-item>
                </nuxt-link>
                <el-dropdown-item icon="el-icon-setting">Настройки</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-close" @click.native="goOut()">Выйти</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </div>
    <div class="message-block">
      <div class="messenger-block">
        <div class="messenger-block-header">
          <div class="messenger-block-header__title">Чат</div>
          <div class="messenger-block-header__name">Иван Иванов</div>
        </div>
        <div class="messenger-block-chat">
          <div class="messenger-chat-participants">
            <div class="messenger-participants-person">
              <div class="messenger-participants-person__img">
                <img
                  src="../../../assets/Home/Message/partnerPhotoTwo.png"
                  alt="dsds"
                  class="messenger-participants-person__img-two"
                />
                <p
                  class="messenger-participants-person__isOnline"
                ></p>
              </div>
              <div class="messenger-participants-person__info">
                <div class="messenger-participants-person__name">
                  Иван Иванов
                </div>
                <div class="messenger-participants-person__letter">
                  Здесь вы можете р....
                </div>
              </div>
              <div class="messenger-participants-person__notReaded">
                <p class="messenger-participants-person__read">1</p>
              </div>
            </div>
            <div class="messenger-participants-person">
              <div class="messenger-participants-person__img">
                <img
                  src="../../../assets/Home/Message/partnerPhotoTwo.png"
                  alt="dsds"
                  class="messenger-participants-person__img-two"
                />
                <p
                  class="messenger-participants-person__isOnline"
                ></p>
              </div>
              <div class="messenger-participants-person__info">
                <div class="messenger-participants-person__name">
                  Иван Иванов
                </div>
                <div class="messenger-participants-person__letter">
                  Здесь вы можете р....
                </div>
              </div>
            </div>
          </div>

          <div class="messenger-chat-line"></div>

          <div class="messenger-chat-correspondence">
            <div class="messenger-chat-dialogs">
              <div class="messenger-correspondence-person">
                <div class="messenger-correspondence-person__img">
                  <img
                    src="../../../assets/Home/Message/partnerPhotoTwo.png"
                    alt="dsds"
                    class="messenger-correspondence-person__img-two"
                  />
                  <p
                    class="messenger-correspondence-person__isOnline"
                  ></p>
                </div>
                <div class="messenger-correspondence-person__info">
                  <div
                    class="messenger-correspondence-person__name"
                  >
                    Иван Иванов
                  </div>
                  <div
                    class="messenger-correspondence-person__letter"
                  >
                    Привет. Здесь вы можете редактировать личные
                    денные в случае ошибки при регистрации или
                    необходимости изменений. Привет. Здесь вы
                    можете редактировать личные денные в случае
                    ошибки при регистрации или необходимости
                    изменений. Привет. Здесь вы можете
                    редактировать личные денные в случае ошибки при
                    регистрации или необходимости изменений.
                  </div>
                </div>
              </div>
              <div class="messenger-correspondence-person">
                <div class="messenger-correspondence-person__img">
                  <img
                    src="../../../assets/Home/Message/partnerPhotoTwo.png"
                    alt="dsds"
                    class="messenger-correspondence-person__img-two"
                  />
                  <p
                    class="messenger-correspondence-person__isOnline"
                  ></p>
                </div>
                <div class="messenger-correspondence-person__info">
                  <div
                    class="messenger-correspondence-person__name"
                  >
                    Иван Иванов
                  </div>
                  <div
                    class="messenger-correspondence-person__letter"
                  >
                    Привет. Как дела?
                  </div>
                </div>
              </div>
            </div>
            <div class="messenger-chat-sendMessage">
              <div class="messenger-chat-sendMessage__clip">
                <button>
                  <img
                    src="../../../assets/Home/Message/file.svg"
                    alt="file"
                    class="messenger-chat-sendMessage__img"
                  />
                  <img
                    src="../../../assets/Home/Message/file-two.svg"
                    alt="file-two"
                    class="messenger-chat-sendMessage__img-one"
                  />
                </button>
              </div>
              <div>
                <label>
                  <textarea
                    class="messenger-chat-sendMessage__input"
                    placeholder="Напишите ваше сообщение..."
                  >
                  </textarea>
                </label>
              </div>
              <div class="messenger-chat-sendMessage__btns">
                <button class="messenger-chat-sendMessage__btn-one">
                  <img
                    src="../../../assets/Home/Message/smile.svg"
                    alt="smile"
                    class="messenger-chat-sendMessage__smile"
                  />
                </button>
                <button class="messenger-chat-sendMessage__btn-two">
                  <img
                    src="../../../assets/Home/Message/image.svg"
                    alt="image"
                    class="messenger-chat-sendMessage__image"
                  />
                </button>
              </div>
              <div class="messenger-chat-sendMessage__send">
                <button>
                  <img
                    src="../../../assets/Home/Message/sendMessage.svg"
                    alt="send"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goOut() {
      this.$confirm('Вы действительно хотите выйти?', 'Выйти', {
        confirmButtonText: 'Выйти',
        cancelButtonText: 'Отмена',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('authorization/goOut')
        this.$message({
          type: 'success',
          message: 'Вы вышли с аккаунта'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Вы остаётесь с нами'
        })
      })
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

.message-header-block {
  padding: 19px 91px;

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
      margin-left: 993px;
    }

    @include breakpoint(dxxl) {
      margin-left: 987px;
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

  &__info-two {
    @include breakpoint(dxxxxl) {
      width: 50px;
      height: 34px;
    }

    @include breakpoint(dxxxl) {
      width: 40px;
      height: 27px;
    }

    @include breakpoint(dxxl) {
      width: 30px;
      height: 20px;
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

  &__user-two {
    @include breakpoint(dxxxxl) {
      width: 78px;
      height: 78px;
    }

    @include breakpoint(dxxxl) {
      width: 58px;
      height: 58px;
    }

    @include breakpoint(dxxl) {
      width: 38px;
      height: 38px;
    }
  }

  &__dropdown {
    li {
      color: #771699;

      &:hover {
        color: #771699;
        background-color: #f8ecff;
      }
    }
  }

  @include breakpoint(dsm) {
    padding: 19px 91px;
  }
}

.message-block {
  padding: 14px 251px;
  background-color: #f6eef9;

  @include breakpoint(dxxxxl) {
    padding: 14px 234px;
  }

  @include breakpoint(dxxxl) {
    padding: 14px 134px;
  }

  @include breakpoint(dxxl) {
    padding: 14px 141px;
  }
}

.messenger-block {
  margin: 0 auto;
  width: 2053px;
  height: 1245px;
  background-color: #fff;

  @include breakpoint(dxxxxl) {
    width: 1453px;
    height: 915px;
  }

  @include breakpoint(dxxxl) {
    width: 1325px;
    height: 770px;
  }

  @include breakpoint(dxxl) {
    width: 1253px;
    height: 663px;
  }

  @include breakpoint(dxl) {
    width: 1158px;
    height: 771px;
  }

  @include breakpoint(dlg) {
    width: 1084px;
    height: 639px;
  }

  @include breakpoint(dmd) {
    width: 997px;
    height: 671px;
  }

  @include breakpoint(dsm) {
    width: 741px;
    height: 653px;
  }
}

.messenger-block-header {
  display: flex;
  align-items: center;
  border: 2px solid #fff;
  border-radius: 5px 5px 0 0;
  padding: 6px;
  box-sizing: border-box;
  background-color: #f6eef9;

  &__title {
    margin-left: 46px;
    font-family: "Manrope", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 28px;
    line-height: 25px;
    color: #771699;

    @include breakpoint(dxxxxl) {
      margin-left: 41px;
      font-size: 21px;
    }

    @include breakpoint(dxxxl) {
      margin-left: 36px;
      font-size: 18px;
    }

    @include breakpoint(dxxl) {
      margin-left: 36px;
      font-size: 18px;
    }

    @include breakpoint(dlg) {
      font-size: 16px;
    }

    @include breakpoint(dmd) {
      font-size: 13px;
    }
  }

  &__name {
    margin-left: 500px;
    font-family: "Manrope", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 28px;
    line-height: 25px;
    color: #771699;

    @include breakpoint(dxxxxl) {
      margin-left: 313px;
      font-size: 21px;
    }

    @include breakpoint(dxxxl) {
      margin-left: 300px;
      font-size: 18px;
    }

    @include breakpoint(dxxl) {
      margin-left: 300px;
      font-size: 18px;
    }

    @include breakpoint(dlg) {
      font-size: 16px;
    }

    @include breakpoint(dmd) {
      font-size: 13px;
    }
  }

  @include breakpoint(dxxxxl) {
    border: 2px solid #fff;
    border-radius: 5px 5px 0 0;
    padding: 1px;
  }

  @include breakpoint(dxxxl) {
    border: 2px solid #fff;
    border-radius: 5px 5px 0 0;
    padding: 1px;
  }

  @include breakpoint(dxxl) {
    border: 2px solid #fff;
    border-radius: 5px 5px 0 0;
    padding: 1px;
  }
}

.messenger-block-chat {
  display: grid;
  grid-template-columns: 492px 2px 1555px;
  padding: 0 1px 1px;

  @include breakpoint(dxxxxl) {
    grid-template-columns: 352px 2px 1095px;
    padding: 0 1px 1px;
  }

  @include breakpoint(dxxxl) {
    grid-template-columns: 332px 2px 987px;
    padding: 0 1px 1px;
  }

  @include breakpoint(dxxl) {
    grid-template-columns: 332px 2px 915px;
    padding: 0 1px 1px;
  }

  @include breakpoint(dxl) {
    grid-template-columns: 332px 2px 820px;
  }

  @include breakpoint(dlg) {
    grid-template-columns: 312px 2px 767px;
  }

  @include breakpoint(dmd) {
    grid-template-columns: 292px 2px 700px;
  }

  @include breakpoint(dsm) {
    grid-template-columns: 222px 2px 515px;
  }
}

.messenger-chat-participants {
  position: relative;
  overflow: auto;
  padding: 34px 0 35px 46px;
  height: 1204px;

  @include breakpoint(dxxxxl) {
    padding: 24px 0 25px 37px;
    height: 885px;
  }

  @include breakpoint(dxxxl) {
    padding: 24px 0 25px 37px;
    height: 740px;
  }

  @include breakpoint(dxxl) {
    padding: 24px 0 25px 37px;
    height: 630px;
  }

  @include breakpoint(dxl) {
    height: 740px;
  }

  @include breakpoint(dlg) {
    height: 608px;
  }

  @include breakpoint(dmd) {
    padding: 24px 0 25px 33px;
  }

  @include breakpoint(dsm) {
    padding: 20px 0 25px 15px;
    height: 622px;
  }
}

::-webkit-scrollbar-button {
  width: 3px;
  height: 0;
  background-image: url("#");
  background-repeat: no-repeat;
}

::-webkit-scrollbar-track {
  background-color: #fff;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  box-shadow: 0 1px 1px #fff inset;
  background-image: url("https://yraaa.ru/_pu/24/59610063.png");
  background-position: center;
  background-repeat: no-repeat;
  background-color: #d38eec;

  @include breakpoint(dxxl) {
    border-radius: 5px;
    box-shadow: 0 1px 1px #fff inset;
  }
}

::-webkit-resizer {
  width: 7px;
  height: 0;
  background-image: url("#");
  background-repeat: no-repeat;
}

::-webkit-scrollbar {
  width: 5px;
}

.messenger-participants-person {
  display: flex;
  margin: 0 10px 23px 0;

  &__img-two {
    @include breakpoint(dxxxxl) {
      width: 53px;
      height: 53px;
    }

    @include breakpoint(dxxxl) {
      width: 43px;
      height: 43px;
    }

    @include breakpoint(dmd) {
      width: 37px;
      height: 37px;
    }
  }

  &__isOnline {
    position: relative;
    top: -15px;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 100%;
    padding: 5px;
    width: 15px;
    height: 15px;
    background-color: #85e276;

    @include breakpoint(dxxxxl) {
      top: -14px;
      padding: 5px;
      width: 10px;
      height: 10px;
    }

    @include breakpoint(dxxxl) {
      top: -11px;
      padding: 5px;
      width: 5px;
      height: 5px;
    }

    @include breakpoint(dxxl) {
      top: -11px;
      padding: 5px;
      width: 5px;
      height: 5px;
    }

    @include breakpoint(dmd) {
      top: -11px;
      padding: 4px;
    }
  }

  &__info {
    margin: 8px 0 0 23px;

    @include breakpoint(dxxxxl) {
      margin: 6px 0 0 17px;
    }

    @include breakpoint(dxxxl) {
      margin: 2px 0 0 13px;
    }

    @include breakpoint(dxxl) {
      margin: 2px 0 0 13px;
    }

    @include breakpoint(dlg) {
      margin: 2px 0 0 10px;
    }

    @include breakpoint(dmd) {
      margin: 1px 0 0 10px;
    }

    @include breakpoint(dsm) {
      margin: 1px 0 0 5px;
    }
  }

  &__name {
    font-family: "Manrope", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 19px;
    line-height: 19px;
    color: #771699;

    @include breakpoint(dxxxxl) {
      font-size: 16px;
      line-height: 19px;
    }

    @include breakpoint(dxxxl) {
      font-size: 14px;
      line-height: 19px;
    }

    @include breakpoint(dxxl) {
      font-size: 14px;
      line-height: 19px;
    }

    @include breakpoint(dlg) {
      font-size: 13px;
    }

    @include breakpoint(dmd) {
      font-size: 12px;
    }

    @include breakpoint(dsm) {
      font-size: 11px;
    }
  }

  &__letter {
    margin-top: 7px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 19px;
    line-height: 19px;
    color: #797979;

    @include breakpoint(dxxxxl) {
      margin-top: 3px;
      font-size: 16px;
      line-height: 19px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 3px;
      font-size: 14px;
      line-height: 19px;
    }

    @include breakpoint(dxxl) {
      margin-top: 3px;
      font-size: 14px;
      line-height: 19px;
    }

    @include breakpoint(dlg) {
      margin-top: 2px;
      font-size: 13px;
    }

    @include breakpoint(dmd) {
      margin-top: 0;
      font-size: 12px;
    }

    @include breakpoint(dsm) {
      font-size: 10px;
    }
  }

  &__notReaded {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0 0 73px;
    border-radius: 100%;
    width: 37px;
    height: 37px;
    background: #771699;

    p {
      font-family: "Manrope", sans-serif;
      font-weight: 700;
      font-style: normal;
      font-size: 18px;
      line-height: 19px;
      color: #fff;

      @include breakpoint(dxxxxl) {
        font-size: 14px;
        line-height: 19px;
      }

      @include breakpoint(dxxxl) {
        font-size: 14px;
        line-height: 19px;
      }

      @include breakpoint(dxxl) {
        font-size: 14px;
        line-height: 19px;
      }

      @include breakpoint(dlg) {
        font-size: 13px;
      }

      @include breakpoint(dmd) {
        font-size: 12px;
      }

      @include breakpoint(dsm) {
        font-size: 11px;
      }
    }

    @include breakpoint(dxxxxl) {
      margin: 11px 0 0 33px;
      width: 27px;
      height: 27px;
    }

    @include breakpoint(dxxxl) {
      margin: 8px 0 0 33px;
      width: 27px;
      height: 27px;
    }

    @include breakpoint(dxxl) {
      margin: 8px 0 0 33px;
      width: 27px;
      height: 27px;
    }

    @include breakpoint(dlg) {
      margin: 10px 0 0 33px;
      width: 25px;
      height: 25px;
    }

    @include breakpoint(dmd) {
      margin: 9px 0 0 33px;
      width: 23px;
      height: 23px;
    }

    @include breakpoint(dsm) {
      margin: 9px 0 0 17px;
      width: 20px;
      height: 20px;
    }
  }

  @include breakpoint(dxxxxl) {
    margin: 0 10px 18px 0;
  }

  @include breakpoint(dxxxl) {
    margin: 0 10px 18px 0;
  }

  @include breakpoint(dxxl) {
    margin: 0 10px 18px 0;
  }

  @include breakpoint(dlg) {
    margin: 0 10px 14px 0;
  }

  @include breakpoint(dmd) {
    margin: 0 10px 15px 0;
  }

  @include breakpoint(dsm) {
    margin: 0 10px 10px 0;
  }
}

.messenger-chat-dialogs {
  position: relative;
  overflow: auto;
  padding: 34px 0 35px 46px;
  height: 1080px;

  @include breakpoint(dxxxxl) {
    padding: 24px 0 25px 37px;
    height: 790px;
  }

  @include breakpoint(dxxxl) {
    padding: 24px 37px 1px;
    height: 656px;
  }

  @include breakpoint(dxxl) {
    padding: 24px 37px 1px;
    height: 560px;
  }

  @include breakpoint(dxl) {
    height: 667px;
  }

  @include breakpoint(dlg) {
    height: 545px;
  }

  @include breakpoint(dmd) {
    padding: 24px 0 25px 33px;
    height: 578px;
  }

  @include breakpoint(dsm) {
    padding: 20px 0 25px 15px;
    height: 561px;
  }
}

.messenger-correspondence-person {
  display: flex;
  margin: 0 10px 23px 0;

  &__img-two {
    @include breakpoint(dxxxxl) {
      width: 53px;
      height: 53px;
    }

    @include breakpoint(dxxxl) {
      width: 43px;
      height: 43px;
    }

    @include breakpoint(dmd) {
      width: 37px;
      height: 37px;
    }
  }

  &__isOnline {
    position: relative;
    top: -15px;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 100%;
    padding: 5px;
    width: 15px;
    height: 15px;
    background-color: #85e276;

    @include breakpoint(dxxxxl) {
      top: -14px;
      padding: 5px;
      width: 10px;
      height: 10px;
    }

    @include breakpoint(dxxxl) {
      top: -11px;
      padding: 5px;
      width: 5px;
      height: 5px;
    }

    @include breakpoint(dxxl) {
      top: -11px;
      padding: 5px;
      width: 5px;
      height: 5px;
    }

    @include breakpoint(dmd) {
      top: -10px;
      padding: 4px;
    }
  }

  &__info {
    margin: 8px 0 0 23px;

    @include breakpoint(dxxxxl) {
      margin: 6px 0 0 17px;
    }

    @include breakpoint(dxxxl) {
      margin: 2px 0 0 13px;
    }

    @include breakpoint(dxxl) {
      margin: 2px 0 0 13px;
    }

    @include breakpoint(dlg) {
      margin: 2px 0 0 10px;
    }

    @include breakpoint(dmd) {
      margin: 1px 0 0 10px;
    }

    @include breakpoint(dsm) {
      margin: 1px 0 0 5px;
    }
  }

  &__name {
    font-family: "Manrope", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 19px;
    line-height: 19px;
    color: #771699;

    @include breakpoint(dxxxxl) {
      font-size: 16px;
      line-height: 19px;
    }

    @include breakpoint(dxxxl) {
      font-size: 14px;
      line-height: 19px;
    }

    @include breakpoint(dxxl) {
      font-size: 14px;
      line-height: 19px;
    }

    @include breakpoint(dlg) {
      font-size: 13px;
    }

    @include breakpoint(dmd) {
      font-size: 12px;
    }

    @include breakpoint(dsm) {
      font-size: 11px;
    }
  }

  &__letter {
    margin-top: 7px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 19px;
    line-height: 19px;
    color: #797979;

    @include breakpoint(dxxxxl) {
      margin-top: 3px;
      font-size: 16px;
      line-height: 19px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 3px;
      font-size: 14px;
      line-height: 19px;
    }

    @include breakpoint(dxxl) {
      margin-top: 3px;
      font-size: 14px;
      line-height: 19px;
    }

    @include breakpoint(dlg) {
      margin-top: 2px;
      font-size: 13px;
    }

    @include breakpoint(dmd) {
      margin-top: 0;
      font-size: 12px;
    }

    @include breakpoint(dsm) {
      font-size: 11px;
    }
  }

  @include breakpoint(dxxxxl) {
    margin: 0 10px 16px 0;
  }

  @include breakpoint(dxxxl) {
    margin: 0 10px 29px 0;
  }

  @include breakpoint(dxxl) {
    margin: 0 10px 29px 0;
  }

  @include breakpoint(dlg) {
    margin: 0 10px 17px 0;
  }

  @include breakpoint(dmd) {
    margin: 0 10px 15px 0;
  }

  @include breakpoint(dsm) {
    margin: 0 10px 10px 0;
  }
}

.messenger-chat-sendMessage {
  display: flex;
  align-items: center;
  margin-left: 3px;
  height: 120px;
  background-color: #f6eef9;

  &__clip {
    margin-left: 42px;

    button {
      background: none;
    }

    @include breakpoint(dxxxxl) {
      margin-left: 32px;
    }

    @include breakpoint(dxxxl) {
      margin-left: 22px;
    }

    @include breakpoint(dxxl) {
      margin-left: 21px;
    }

    @include breakpoint(dlg) {
      margin-left: 18px;
    }
  }

  &__img {
    @include breakpoint(dxxxl) {
      width: 30px;
      height: 32px;
    }

    @include breakpoint(dxxl) {
      display: none;
    }
  }

  &__img-one {
    display: none;

    @include breakpoint(dxxl) {
      display: inline-block;
    }
  }

  &__input {
    margin-left: 42px;
    border-radius: 3px;
    padding: 16px 245px 16px 14px;
    width: 1283px;
    height: 100px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 19px;
    line-height: 19px;
    color: #797979;

    @include breakpoint(dxxxxl) {
      margin-left: 32px;
      padding: 14px 195px 14px 14px;
      width: 870px;
      height: 75px;
      font-size: 16px;
    }

    @include breakpoint(dxxxl) {
      margin-left: 22px;
      padding: 14px 160px 14px 14px;
      width: 815px;
      height: 68px;
      font-size: 14px;
    }

    @include breakpoint(dxxl) {
      margin-left: 22px;
      border-radius: 3px;
      padding: 8px 115px 8px 14px;
      width: 777px;
      height: 54px;
      font-size: 14px;
      line-height: 19px;
    }

    @include breakpoint(dxl) {
      width: 683px;
      height: 58px;
    }

    @include breakpoint(dlg) {
      margin-left: 18px;
      width: 637px;
      height: 50px;
      font-size: 13px;
    }

    @include breakpoint(dmd) {
      width: 570px;
    }

    @include breakpoint(dsm) {
      padding: 8px 85px 8px 14px;
      width: 387px;
      font-size: 11px;
    }
  }

  &__btns {
    display: flex;
    align-items: center;
  }

  &__btn-one {
    position: absolute;
    right: 560px;
    bottom: 58px;
    border: none;
    background: none;

    img {
      @include breakpoint(dxxxxl) {
        height: 42px;
      }

      @include breakpoint(dxxxl) {
        width: 31px;
        height: 31px;
      }

      @include breakpoint(dxxl) {
        width: 30px;
        height: 30px;
      }

      @include breakpoint(dlg) {
        width: 26px;
        height: 26px;
      }

      @include breakpoint(dsm) {
        width: 23px;
        height: 23px;
      }
    }

    @include breakpoint(dxxxxl) {
      right: 472px;
      bottom: 44px;
    }

    @include breakpoint(dxxxl) {
      right: 331px;
      bottom: 43px;
    }

    @include breakpoint(dxxl) {
      right: 278px;
      bottom: 36px;
    }

    @include breakpoint(dlg) {
      right: 270px;
      bottom: 34px;
    }

    @include breakpoint(dsm) {
      right: 255px;
      bottom: 35px;
    }
  }

  &__btn-two {
    position: absolute;
    right: 457px;
    bottom: 61px;
    border: none;
    background: none;

    img {
      @include breakpoint(dxxxxl) {
        width: 45px;
        height: 30px;
      }

      @include breakpoint(dxxxl) {
        width: 38px;
        height: 23px;
      }

      @include breakpoint(dxxl) {
        width: 29px;
        height: 21px;
      }

      @include breakpoint(dlg) {
        width: 27px;
        height: 19px;
      }

      @include breakpoint(dsm) {
        width: 24px;
        height: 18px;
      }
    }

    @include breakpoint(dxxxxl) {
      right: 390px;
      bottom: 49px;
    }

    @include breakpoint(dxxxl) {
      right: 267px;
      bottom: 47px;
    }

    @include breakpoint(dxxl) {
      right: 230px;
      bottom: 41px;
    }

    @include breakpoint(dlg) {
      right: 225px;
      bottom: 38px;
    }

    @include breakpoint(dsm) {
      right: 217px;
      bottom: 37px;
    }
  }

  &__send {
    margin-left: 45px;

    button {
      img {
        @include breakpoint(dxxxxl) {
          width: 50px;
          height: 34px;
        }

        @include breakpoint(dxxxl) {
          width: 43px;
          height: 27px;
        }

        @include breakpoint(dxxl) {
          width: 29px;
          height: 21px;
        }

        @include breakpoint(dsm) {
          width: 26px;
          height: 19px;
        }
      }
    }

    @include breakpoint(dxxxxl) {
      margin-left: 35px;
    }

    @include breakpoint(dxxxl) {
      margin-left: 25px;
    }

    @include breakpoint(dxxl) {
      margin-left: 18px;
    }
  }

  @include breakpoint(dxxxxl) {
    height: 90px;
  }

  @include breakpoint(dxxxl) {
    height: 80px;
  }

  @include breakpoint(dxxl) {
    margin-left: 3px;
    height: 70px;
  }

  @include breakpoint(dlg) {
    height: 60px;
  }
}

.messenger-chat-line {
  width: 3px;
  height: 1190px;
  background: #f6eef9;

  @include breakpoint(dxxxxl) {
    width: 2px;
    height: 880px;
  }

  @include breakpoint(dxxxl) {
    width: 2px;
    height: 735px;
  }

  @include breakpoint(dxxl) {
    width: 2px;
    height: 630px;
  }

  @include breakpoint(dxl) {
    height: 735px;
  }

  @include breakpoint(dlg) {
    height: 605px;
  }

  @include breakpoint(dmd) {
    height: 635px;
  }
}

@media (height: 1024px) {
  .message-block {
    padding: 126px 141px;
  }

  .messenger-chat-sendMessage {
    &__btn-one {
      right: 270px;
      bottom: 145px;
    }

    &__btn-two {
      right: 225px;
      bottom: 149px;
    }
  }
}

@media (height: 864px) {
  .messenger-block {
    width: 1253px;
    height: 734px;
  }

  .messenger-chat-participants {
    height: 703px;
  }

  .messenger-chat-line {
    width: 2px;
    height: 700px;
  }

  .messenger-chat-dialogs {
    height: 630px;
  }

  .messenger-chat-sendMessage {
    &__btn-one {
      right: 278px;
      bottom: 38px;
    }

    &__btn-two {
      right: 230px;
      bottom: 43px;
    }
  }
}
</style>
