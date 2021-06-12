<template>
  <div>
    <div class="requestPartyInfo-block" v-if="clickInfoPerson">
      <div class="request-information">
        <h2>
          <img
            src="../../../../../assets/Home/Menu/userPage.jpg"
            alt="s"
            class="request-information__img"
          />
          <span>Влад Новиков</span>
        </h2>
      </div>
      <div class="requestInfo-personal-information">
        <p class="requestInfo-personal-information__text">
          He rose to international fame with his role as the Man with No
          Name in Sergio Leone's Dollars trilogy of spaghetti Westerns.
          He rose to international fame with his role as the Man with No
          Name in Sergio Leone's Dollars trilogy of spaghetti Westerns.
          He rose to international fame with his role as the Man with No
          Name in Sergio Leone's Dollars trilogy of spaghetti Westerns.
          He rose to international fame with his role as the Man with No
          Name in Sergio Leone's Dollars trilogy of spaghetti Westerns.
          He rose to international fame with his role as the Man with No
          Name in Sergio Leone's Dollars trilogy of spaghetti Westerns.
          He rose to international fame with his role as the Man with No
          Name in Sergio Leone's Dollars trilogy of spaghetti Westerns.
          He rose to international fame with his role as the Man with No
          Name in Sergio Leone's Dollars trilogy of spaghetti Westerns.
          He rose to international fame with his role as the Man with No
          Name in Sergio Leone's Dollars trilogy of spaghetti Westerns.
          He rose to international fame with his role as the Man with No
          Name in Sergio Leone's Dollars trilogy of spaghetti Westerns.
          He rose to international fame with his role as the Man with No
          Name in Sergio Leone's Dollars trilogy of spaghetti Westerns.
          He rose to international fame with his role as the Man with No
          Name in Sergio Leone's Dollars trilogy of spaghetti Westerns.
          He rose to international fame with his role as the Man with No
          Name in Sergio Leone's Dollars trilogy of spaghetti Westerns.
        </p>
        <div class="requestInfo-personal-information__btns">
          <div>
            <button class="requestInfo-personal-information__btns-one">
              Принять
            </button>
            <button class="requestInfo-personal-information__btns-two">
              Отклонить
            </button>
          </div>
        </div>
        <button class="requestInfo-personal-information__btn" @click="closeInfoPerson">
          <i class="el-icon-back"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['clickInfoPerson'],
  methods: {
    async closeInfoPerson() {
      await this.$router.push('/home/menu/myParty/requestMyParty')
      this.$emit('closeInformationPerson')
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../../../assets/settings";

.requestPartyInfo-block {
  position: relative;
  margin: 0 0 70px 15px;
  width: 222.7px;
  height: 223px;

  @include breakpoint(dxxxxl) {
    margin: 2px 0 70px 15px;
    width: 222.7px;
    height: 223px;
  }

  @include breakpoint(dxxxl) {
    margin: 10px 0 70px 15px;
    width: 222.7px;
    height: 223px;
  }

  @include breakpoint(dxxl) {
    margin: 10px 0 70px 15px;
    width: 222.7px;
    height: 223px;
  }

  @include breakpoint(dsm) {
    margin: 11px 0 70px 15px;
    width: 222.7px;
    height: 223px;
  }
}

.requestInfo-personal-information {
  width: 900px;
  height: 643px;
  background-color: #f3e5f5;

  &__text {
    overflow: auto;
    padding: 100px 20px 40px;
    width: 899px;
    height: 643px;
    font-size: 26px;
    word-wrap: break-word;

    @include breakpoint(dxxxxl) {
      padding: 80px 20px 40px;
      width: 801px;
      height: 552px;
      font-size: 23px;
    }

    @include breakpoint(dxxxl) {
      padding: 80px 20px 40px;
      width: 561px;
      height: 404px;
      font-size: 18px;
    }

    @include breakpoint(dxxl) {
      padding: 80px 20px 40px;
      width: 561px;
      height: 404px;
      font-size: 18px;
    }

    @include breakpoint(dsm) {
      padding: 60px 20px 20px;
      width: 461px;
      height: 334px;
      font-size: 18px;
    }
  }

  &__btns {
    padding: 0 0 24px;
    background-color: #e1bee7;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 28px;

      button {
        border: none;
        border-radius: 5px;
        width: 120px;
        height: 45px;
        font-size: 14px;
        color: #fff;
        background-color: #4a148c;

        @include breakpoint(dxxxxl) {
          border-radius: 5px;
          width: 110px;
          height: 45px;
          font-size: 14px;
        }

        @include breakpoint(dxxxl) {
          border-radius: 5px;
          width: 100px;
          height: 40px;
          font-size: 12px;
        }

        @include breakpoint(dxxl) {
          border-radius: 5px;
          width: 100px;
          height: 40px;
          font-size: 12px;
        }

        @include breakpoint(dsm) {
          width: 80px;
          height: 35px;
          font-size: 10px;
        }
      }

      @include breakpoint(dsm) {
        padding-top: 13px;
      }
    }

    @include breakpoint(dxxxxl) {
      padding: 0 0 22px;
    }

    @include breakpoint(dxxxl) {
      padding: 0 0 22px;
    }

    @include breakpoint(dxxl) {
      padding: 0 0 21px;
    }

    @include breakpoint(dxl) {
      padding: 0 0 21px;
    }

    @include breakpoint(dxxl) {
      padding: 0 0 14px;
    }
  }

  &__btns-one {
    margin-right: 20px;

    &:hover {
      outline-color: rgba(255, 255, 255, 0);
      outline-offset: 15px;
      border: 1px solid #771699;
      box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
      text-shadow: 1px 1px 2px #9ebecb;
    }
  }

  &__btns-two {
    &:hover {
      outline-color: rgba(255, 255, 255, 0);
      outline-offset: 15px;
      border: 1px solid #771699;
      box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
      text-shadow: 1px 1px 2px #9ebecb;
    }
  }

  &__btn {
    position: absolute;
    right: -500px;
    top: 0;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid;
    border-radius: 50%;
    width: 89px;
    height: 89px;
    line-height: 44px;
    text-align: center;
    color: #fff;
    background-color: #4a148c;
    animation-name: none;
    cursor: pointer;

    i {
      font-size: 35px;

      @include breakpoint(dxxxxl) {
        font-size: 30px;
      }

      @include breakpoint(dxxxl) {
        font-size: 20px;
      }

      @include breakpoint(dxxl) {
        font-size: 20px;
      }

      @include breakpoint(dsm) {
        font-size: 17px;
      }
    }

    &:hover {
      outline-color: rgba(255, 255, 255, 0);
      outline-offset: 15px;
      border: 1px solid #771699;
      box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
      text-shadow: 1px 1px 2px #9ebecb;
    }

    @include breakpoint(dxxxxl) {
      right: -450px;
      width: 79px;
      height: 79px;
    }

    @include breakpoint(dxxxl) {
      right: -250px;
      top: 0;
      border: 5px solid;
      border-radius: 50%;
      width: 59px;
      height: 59px;
      line-height: 44px;
    }

    @include breakpoint(dxxl) {
      right: -250px;
      top: 0;
      border: 5px solid;
      border-radius: 50%;
      width: 59px;
      height: 59px;
      line-height: 44px;
    }

    @include breakpoint(dsm) {
      right: -150px;
      width: 49px;
      height: 49px;
    }
  }

  @include breakpoint(dxxxxl) {
    width: 801px;
    height: 636px;
  }

  @include breakpoint(dxxxl) {
    width: 561px;
    height: 494px;
  }

  @include breakpoint(dxxl) {
    width: 561px;
    height: 494px;
  }

  @include breakpoint(dsm) {
    width: 461px;
    height: 335px;
  }
}

.request-information {
  position: absolute;
  left: -16px;
  right: 0;
  bottom: 160px;
  margin-bottom: 6.6em;
  padding-bottom: calc(100% - 16px);
  height: 0;

  h2 {
    position: absolute;
    left: 0;
    top: calc(100% - 16px);
    z-index: 10;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 15px 16px;
    width: 917px;
    font-size: 1.8em;
    line-height: 1.6em;
    color: #fff;
    background-color: #9c27b0;
    transition: all 0.3s;

    ::before {
      content: " ";
      position: absolute;
      left: 0;
      bottom: -16px;
      border: 8px solid;
      border-top-color: #4a148c;
      border-right-color: #4a148c;
      border-bottom-color: transparent;
      width: 0;
      transition: all 0.3s;
    }

    span {
      display: block;
      font-size: 1.5em;
      line-height: 1.3em;
      color: #fff;

      @include breakpoint(dxxxxl) {
        font-size: 1.4em;
        line-height: 1.4em;
      }

      @include breakpoint(dxxxl) {
        font-size: 1.3em;
        line-height: 1.3em;
      }

      @include breakpoint(dxxl) {
        font-size: 1.3em;
        line-height: 1.3em;
      }

      @include breakpoint(dsm) {
        font-size: 1.1em;
        line-height: 1.1em;
      }
    }

    strong {
      display: block;
      font-weight: 400;
      font-size: 0.8em;
      line-height: 1.6em;
      color: #fff;
    }

    @include breakpoint(dxxxxl) {
      margin: 0;
      padding: 15px 16px;
      width: 817px;
      font-size: 1.5em;
      line-height: 1.6em;
    }

    @include breakpoint(dxxxl) {
      margin: 0;
      padding: 15px 16px;
      width: 577px;
      font-size: 1.4em;
      line-height: 1.6em;
    }

    @include breakpoint(dxxl) {
      margin: 0;
      padding: 15px 16px;
      width: 577px;
      font-size: 1.4em;
      line-height: 1.6em;
    }

    @include breakpoint(dsm) {
      margin: 0;
      padding: 15px 16px;
      width: 477px;
      font-size: 1.4em;
      line-height: 1.6em;
    }
  }

  &__img {
    margin-right: 20px;
    border-radius: 100%;
    width: 70px;
    height: 70px;

    @include breakpoint(dxxxxl) {
      margin-right: 15px;
      width: 60px;
      height: 60px;
    }

    @include breakpoint(dxxxl) {
      margin-right: 15px;
      width: 50px;
      height: 50px;
    }

    @include breakpoint(dxxl) {
      margin-right: 15px;
      width: 50px;
      height: 50px;
    }

    @include breakpoint(dsm) {
      margin-right: 12px;
      width: 40px;
      height: 40px;
    }
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
</style>
