<template>
  <div class="register-block">
    <div class="register-block__header">
      <div>
        <nuxt-link to="/">
          <img
            src="../assets/StartPage/Registration/step-one/logo-va-one.svg"
            alt="step-logo-one"
            class="register-block__img-one"
          />
        </nuxt-link>
      </div>
      <div class="register-block__line">
        <img
          src="../assets/StartPage/Registration/step-one/line.svg"
          alt="line-step-one"
        />
      </div>
      <div class="register-block__title">Регистрация</div>
      <div class="register-block__steps">
        <div class="register-block__step-one">
          <div>
            <p>1</p>
          </div>
          <span></span>
        </div>
        <div class="register-block__step-two">
          <span
            :style="{background: this.$route.path === '/signup/s2' ||
            this.$route.path === '/signup/s3' ||
            this.$route.path === '/signup/s4' ? '#ff006b' : ''}"
          ></span>
          <div
            :style="{background: this.$route.path === '/signup/s2' ||
            this.$route.path === '/signup/s3' ||
            this.$route.path === '/signup/s4' ? '#ff006b' : ''}"
          >
            <p>2</p>
          </div>
          <span
            :style="{background: this.$route.path === '/signup/s2' ||
            this.$route.path === '/signup/s3' ||
            this.$route.path === '/signup/s4' ? '#ff006b' : ''}"
          ></span>
        </div>
        <div class="register-block__step-three">
          <span
            :style="{background: this.$route.path === '/signup/s3' ||
            this.$route.path === '/signup/s4' ? '#ff006b' : ''}"
          ></span>
          <div
            :style="{background: this.$route.path === '/signup/s3' ||
            this.$route.path === '/signup/s4' ? '#ff006b' : ''}"
          >
            <p>3</p>
          </div>
          <span
            :style="{background: this.$route.path === '/signup/s3' ||
            this.$route.path === '/signup/s4' ? '#ff006b' : ''}"
          ></span>
        </div>
        <div class="register-block__step-four">
          <span
            :style="{background: this.$route.path === '/signup/s4' ? '#ff006b' : ''}"
          ></span>
          <div
            :style="{background: this.$route.path === '/signup/s4' ? '#ff006b' : ''}"
          >
            <p>4</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Nuxt/>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import "assets/settings.scss";

.register-block {
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

  &__steps {
    display: flex;
    align-items: center;
    margin-left: 1000px;

    @include breakpoint(dxxxxl) {
      margin-left: 511px;
    }

    @include breakpoint(dxxxl) {
      margin-left: 360px;
    }

    @include breakpoint(dxxl) {
      margin-left: 449px;
    }

    @include breakpoint(dxl) {
      margin-left: 388px;
    }

    @include breakpoint(dlg) {
      margin-left: 366px;
    }

    @include breakpoint(dmd) {
      margin-left: 341px;
    }

    @include breakpoint(dsm) {
      margin-left: 241px;
    }
  }

  &__step-one {
    display: flex;
    align-items: center;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      width: 68px;
      height: 68px;
      background: #ff006b;

      p {
        font-family: "Manrope", sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 22px;
        line-height: 25px;
        text-align: center;
        color: #fff;

        @include breakpoint(dxxxxl) {
          font-size: 20px;
        }

        @include breakpoint(dxxxl) {
          font-size: 19px;
        }

        @include breakpoint(dxxl) {
          font-size: 18px;
        }

        @include breakpoint(dxl) {
          font-size: 16px;
        }

        @include breakpoint(dlg) {
          font-size: 15px;
        }

        @include breakpoint(dmd) {
          font-size: 12px;
        }

        @include breakpoint(dsm) {
          font-size: 11px;
        }
      }

      @include breakpoint(dxxxxl) {
        width: 58px;
        height: 58px;
      }

      @include breakpoint(dxxxl) {
        width: 48px;
        height: 48px;
      }

      @include breakpoint(dxxl) {
        width: 38px;
        height: 38px;
      }

      @include breakpoint(dlg) {
        width: 35px;
        height: 35px;
      }

      @include breakpoint(dmd) {
        width: 32px;
        height: 32px;
      }

      @include breakpoint(dsm) {
        width: 30px;
        height: 30px;
      }
    }

    span {
      width: 66px;
      height: 3px;
      background: #ff006b;

      @include breakpoint(dxxxxl) {
        width: 56px;
        height: 3px;
      }

      @include breakpoint(dxxxl) {
        width: 46px;
        height: 3px;
      }

      @include breakpoint(dxxl) {
        width: 36px;
        height: 2px;
      }

      @include breakpoint(dlg) {
        width: 34px;
      }

      @include breakpoint(dmd) {
        width: 30px;
      }

      @include breakpoint(dsm) {
        width: 28px;
      }
    }
  }

  &__step-two {
    display: flex;
    align-items: center;
    margin-left: 10px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      width: 68px;
      height: 68px;
      background: #e5e5e5;

      p {
        font-family: "Manrope", sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 22px;
        line-height: 25px;
        text-align: center;
        color: #fff;

        @include breakpoint(dxxxxl) {
          font-size: 20px;
        }

        @include breakpoint(dxxxl) {
          font-size: 19px;
        }

        @include breakpoint(dxxl) {
          font-size: 18px;
        }

        @include breakpoint(dxl) {
          font-size: 16px;
        }

        @include breakpoint(dlg) {
          font-size: 15px;
        }

        @include breakpoint(dmd) {
          font-size: 12px;
        }

        @include breakpoint(dsm) {
          font-size: 11px;
        }
      }

      @include breakpoint(dxxxxl) {
        width: 58px;
        height: 58px;
      }

      @include breakpoint(dxxxl) {
        width: 48px;
        height: 48px;
      }

      @include breakpoint(dxxl) {
        width: 38px;
        height: 38px;
      }

      @include breakpoint(dlg) {
        width: 35px;
        height: 35px;
      }

      @include breakpoint(dmd) {
        width: 32px;
        height: 32px;
      }

      @include breakpoint(dsm) {
        width: 30px;
        height: 30px;
      }
    }

    span {
      width: 66px;
      height: 3px;
      background: #e5e5e5;

      @include breakpoint(dxxxxl) {
        width: 56px;
        height: 3px;
      }

      @include breakpoint(dxxxl) {
        width: 46px;
        height: 3px;
      }

      @include breakpoint(dxxl) {
        width: 36px;
        height: 2px;
      }

      @include breakpoint(dlg) {
        width: 34px;
      }

      @include breakpoint(dmd) {
        width: 30px;
      }

      @include breakpoint(dsm) {
        width: 28px;
      }
    }

    @include breakpoint(dxxl) {
      margin-left: 5px;
    }
  }

  &__step-three {
    display: flex;
    align-items: center;
    margin-left: 5px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      width: 68px;
      height: 68px;
      background: #e5e5e5;

      p {
        font-family: "Manrope", sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 22px;
        line-height: 25px;
        text-align: center;
        color: #fff;

        @include breakpoint(dxxxxl) {
          font-size: 20px;
        }

        @include breakpoint(dxxxl) {
          font-size: 19px;
        }

        @include breakpoint(dxxl) {
          font-size: 18px;
        }

        @include breakpoint(dxl) {
          font-size: 16px;
        }

        @include breakpoint(dlg) {
          font-size: 15px;
        }

        @include breakpoint(dmd) {
          font-size: 12px;
        }

        @include breakpoint(dsm) {
          font-size: 11px;
        }
      }

      @include breakpoint(dxxxxl) {
        width: 58px;
        height: 58px;
      }

      @include breakpoint(dxxxl) {
        width: 48px;
        height: 48px;
      }

      @include breakpoint(dxxl) {
        width: 38px;
        height: 38px;
      }

      @include breakpoint(dlg) {
        width: 35px;
        height: 35px;
      }

      @include breakpoint(dmd) {
        width: 32px;
        height: 32px;
      }

      @include breakpoint(dsm) {
        width: 30px;
        height: 30px;
      }
    }

    span {
      width: 66px;
      height: 3px;
      background: #e5e5e5;

      @include breakpoint(dxxxxl) {
        width: 56px;
        height: 3px;
      }

      @include breakpoint(dxxxl) {
        width: 46px;
        height: 3px;
      }

      @include breakpoint(dxxl) {
        width: 36px;
        height: 2px;
      }

      @include breakpoint(dlg) {
        width: 34px;
      }

      @include breakpoint(dmd) {
        width: 30px;
      }

      @include breakpoint(dsm) {
        width: 28px;
      }
    }
  }

  &__step-four {
    display: flex;
    align-items: center;
    margin-left: 5px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      width: 68px;
      height: 68px;
      background: #e5e5e5;

      p {
        font-family: "Manrope", sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 22px;
        line-height: 25px;
        text-align: center;
        color: #fff;

        @include breakpoint(dxxxxl) {
          font-size: 20px;
        }

        @include breakpoint(dxxxl) {
          font-size: 19px;
        }

        @include breakpoint(dxxl) {
          font-size: 18px;
        }

        @include breakpoint(dxl) {
          font-size: 16px;
        }

        @include breakpoint(dlg) {
          font-size: 15px;
        }

        @include breakpoint(dmd) {
          font-size: 12px;
        }

        @include breakpoint(dsm) {
          font-size: 11px;
        }
      }

      @include breakpoint(dxxxxl) {
        width: 58px;
        height: 58px;
      }

      @include breakpoint(dxxxl) {
        width: 48px;
        height: 48px;
      }

      @include breakpoint(dxxl) {
        width: 38px;
        height: 38px;
      }

      @include breakpoint(dlg) {
        width: 35px;
        height: 35px;
      }

      @include breakpoint(dmd) {
        width: 32px;
        height: 32px;
      }

      @include breakpoint(dsm) {
        width: 30px;
        height: 30px;
      }
    }

    span {
      width: 66px;
      height: 3px;
      background: #e5e5e5;

      @include breakpoint(dxxxxl) {
        width: 56px;
        height: 3px;
      }

      @include breakpoint(dxxxl) {
        width: 46px;
        height: 3px;
      }

      @include breakpoint(dxxl) {
        width: 36px;
        height: 2px;
      }

      @include breakpoint(dlg) {
        width: 34px;
      }

      @include breakpoint(dmd) {
        width: 30px;
      }

      @include breakpoint(dsm) {
        width: 28px;
      }
    }
  }

  @include breakpoint(dsm) {
    padding: 19px 220px 0 91px;
  }
}
</style>

