<template>
  <div class="menu-user">
    <div class="menu-user-block">
      <div class="list-menu">
        <nuxt-link to="/home/menu/myParty" exact class="list-menu__item">
          <i class="el-icon-tickets"></i>
          <div>Моя вечеринка</div>
        </nuxt-link>
        <nuxt-link to="/home/menu/createAd" class="list-menu__item">
          <i class="el-icon-edit"></i>
          <div>Создать вечеринку</div>
        </nuxt-link>
        <nuxt-link to="/home/menu/requestParty" class="list-menu__item">
          <i class="el-icon-folder-checked"></i>
          <div>Мои запросы на вечеринку</div>
        </nuxt-link>
        <nuxt-link to="/personalarea" class="list-menu__item">
          <i class="el-icon-user"></i>
          <div>Личный кабинет</div>
        </nuxt-link>
        <nuxt-link to="#" class="list-menu__item">
          <i class="el-icon-s-opportunity"></i>
          <div>Уведомления</div>
        </nuxt-link>
      </div>
      <div class="content-menu">
        <nuxt-child></nuxt-child>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style scoped lang="scss">
@import "../../../assets/settings";

.nuxt-link-active {
  ::after {
    content: "";
    position: absolute;
    left: 100%;
    top: 50%;
    margin-top: -13px;
    border-top: 13px solid transparent;
    border-bottom: 13px solid transparent;
    border-left: 10px solid #771699;
  }
}

.nuxt-link-exact-active {
  ::after {
    content: "";
    position: absolute;
    left: 100%;
    top: 50%;
    margin-top: -13px;
    border-top: 13px solid transparent;
    border-bottom: 13px solid transparent;
    border-left: 10px solid #771699;
  }
}

.menu-user {
  z-index: 10;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0;
  width: 1087.5px;
  height: 800px;
  box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
  background-clip: padding-box;
  background-color: #fff;
  opacity: 0.97;

  @include breakpoint(dxxxxl) {
    width: 987.5px;
    height: 700px;
  }

  @include breakpoint(dxxxl) {
    width: 727.5px;
    height: 550px;
  }

  @include breakpoint(dxxl) {
    width: 727.5px;
    height: 550px;
  }

  @include breakpoint(dlg) {
    width: 727.5px;
    height: 550px;
  }

  @include breakpoint(dsm) {
    width: 627.5px;
    height: 450px;
  }
}

.menu-user-block {
  display: grid;
  grid-template-columns: 141.38px 943.13px;

  @include breakpoint(dxxxxl) {
    grid-template-columns: 141.38px 843.13px;
  }

  @include breakpoint(dxxxl) {
    grid-template-columns: 121.38px 604.13px;
  }

  @include breakpoint(dxxl) {
    grid-template-columns: 121.38px 604.13px;
  }

  @include breakpoint(dsm) {
    grid-template-columns: 121.38px 504.13px;
  }
}

.list-menu {
  display: flex;
  flex-direction: column;
  padding: 0 0 0 1px;

  :focus {
    background-color: #f8ecff;
  }

  &__item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #ddd;
    padding: 5px;
    height: 159.6px;
    text-align: center;
    background-color: #fff;

    i {
      font-size: 22px;
      color: #771699;

      @include breakpoint(dxxxl) {
        font-size: 18px;
      }

      @include breakpoint(dxxl) {
        font-size: 18px;
      }
    }

    div {
      margin-top: 5px;
      font-size: 13px;
      line-height: 1.42857;
      color: #771699;

      @include breakpoint(dxxxl) {
        font-size: 13px;
      }

      @include breakpoint(dxxl) {
        font-size: 12px;
      }

      @include breakpoint(dlg) {
        font-size: 11px;
      }
    }

    @include breakpoint(dxxxxl) {
      height: 139.6px;
    }

    @include breakpoint(dxxxl) {
      height: 109.6px;
    }

    @include breakpoint(dxxl) {
      height: 109.9px;
    }

    @include breakpoint(dlg) {
      height: 109.6px;
    }

    @include breakpoint(dsm) {
      height: 89.6px;
    }
  }
}

.content-menu {
  overflow: auto;
  height: 798px;

  @include breakpoint(dxxxxl) {
    height: 700px;
  }

  @include breakpoint(dxxxl) {
    height: 549px;
  }

  @include breakpoint(dsm) {
    height: 449px;
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
