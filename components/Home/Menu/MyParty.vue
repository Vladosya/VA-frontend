<template>
  <div class="myParty-block">
    <div class="myParty-item-block">
      <nuxt-link class="myParty-item-block__item-one" to="/home/menu/myParty/myAd">
        <button>
          <i class="el-icon-postcard"></i>
          <div>Мое объявление</div>
        </button>
      </nuxt-link>
      <nuxt-link class="myParty-item-block__item-two" exact to="/home/menu/myParty/myParticipants">
        <button>
          <i class="el-icon-connection"></i>
          <div>Участники</div>
        </button>
      </nuxt-link>
      <nuxt-link class="myParty-item-block__item-three" to="/home/menu/myParty/requestMyParty">
        <button>
          <i class="el-icon-postcard"></i>
          <div>Заявки на вечеринку</div>
        </button>
      </nuxt-link>
    </div>
    <div class="myParty-content-menu">
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import "../../../assets/settings";

.nuxt-link-active {
  ::after {
    content: "";
    position: absolute;
    left: 100%;
    top: 50%;
    margin-top: -7px;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 7px solid #771699;
  }
}

.nuxt-link-exact-active {
  ::after {
    content: "";
    position: absolute;
    left: 100%;
    top: 50%;
    margin-top: -7px;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 7px solid #771699;
  }
}

.myParty-block {
  padding: 4px 15px;

  @include breakpoint(dxxl) {
    padding: 4px 15px;
  }
}

.myParty-item-block {
  display: inline-flex;

  :focus {
    background-color: #f8ecff;
  }

  &__item-one {
    button {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 5px;
      width: 166px;
      height: 46.6px;
      font-size: 13px;
      line-height: 1.42857;
      text-align: center;
      color: #771699;
      background-color: #fff;

      i {
        margin-right: 5px;
        font-size: 14px;

        @include breakpoint(dxxl) {
          margin-right: 5px;
          font-size: 14px;
        }
      }

      @include breakpoint(dxxxxl) {
        margin-right: 17px;
        width: 156px;
        height: 42.6px;
      }

      @include breakpoint(dxxxl) {
        margin-right: 15px;
        padding: 5px;
        width: 136px;
        height: 36.6px;
        font-size: 12px;
      }

      @include breakpoint(dxxl) {
        margin-right: 15px;
        padding: 5px;
        width: 136px;
        height: 36.6px;
        font-size: 12px;
      }

      @include breakpoint(dsm) {
        margin-right: 12px;
        padding: 5px;
        width: 128px;
        height: 33.6px;
        font-size: 11px;
      }
    }
  }

  &__item-two {
    button {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 5px;
      width: 166px;
      height: 46.6px;
      font-size: 13px;
      line-height: 1.42857;
      text-align: center;
      color: #771699;
      background-color: #fff;

      i {
        margin-right: 5px;
        font-size: 14px;

        @include breakpoint(dxxl) {
          margin-right: 5px;
          font-size: 14px;
        }
      }

      @include breakpoint(dxxxxl) {
        margin-right: 17px;
        width: 156px;
        height: 42.6px;
      }

      @include breakpoint(dxxxl) {
        margin-right: 15px;
        padding: 5px;
        width: 136px;
        height: 36.6px;
        font-size: 12px;
      }

      @include breakpoint(dxxl) {
        margin-right: 15px;
        padding: 5px;
        width: 136px;
        height: 36.6px;
        font-size: 12px;
      }

      @include breakpoint(dsm) {
        margin-right: 12px;
        padding: 5px;
        width: 128px;
        height: 33.6px;
        font-size: 11px;
      }
    }
  }

  &__item-three {
    button {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 5px;
      width: 166px;
      height: 46.6px;
      font-size: 13px;
      line-height: 1.42857;
      text-align: center;
      color: #771699;
      background-color: #fff;

      i {
        margin-right: 5px;
        font-size: 14px;

        @include breakpoint(dxxl) {
          margin-right: 5px;
          font-size: 14px;
        }
      }

      @include breakpoint(dxxxxl) {
        margin-right: 17px;
        width: 156px;
        height: 42.6px;
      }

      @include breakpoint(dxxxl) {
        margin-right: 15px;
        padding: 5px;
        width: 136px;
        height: 36.6px;
        font-size: 12px;
      }

      @include breakpoint(dxxl) {
        padding: 5px;
        width: 136px;
        height: 36.6px;
        font-size: 12px;
      }

      @include breakpoint(dsm) {
        margin-right: 12px;
        padding: 5px;
        width: 128px;
        height: 33.6px;
        font-size: 11px;
      }
    }
  }
}
</style>
