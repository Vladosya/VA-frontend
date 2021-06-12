<template>
  <div class="user-menu">
    <div class="user-menu__user">
      <el-dropdown placement="top" trigger="click">
        <a href="#" class="el-dropdown-link">
          <img
            src="../../../assets/Home/PersonalArea/image-user-two.png"
            alt="personal-aria-user-two"
            class="user-menu__user-two"
          />
        </a>
        <el-dropdown-menu class="user-menu__dropdown" slot="dropdown">
          <nuxt-link to="/personalarea">
            <el-dropdown-item icon="el-icon-user">Личный кабинет</el-dropdown-item>
          </nuxt-link>
          <nuxt-link to="/home/menu">
            <el-dropdown-item icon="el-icon-mobile">Меню</el-dropdown-item>
          </nuxt-link>
          <nuxt-link to="/needhelp">
            <el-dropdown-item icon="el-icon-help">Помощь</el-dropdown-item>
          </nuxt-link>
          <el-dropdown-item icon="el-icon-setting">Настройки</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-close">Выйти</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import "assets/settings.scss";

.user-menu {
  &__user {
    border-radius: 90px;
    width: 88px;
    height: 88px;
    background-color: #c4c4c4;

    @include breakpoint(dxxxxl) {
      width: 78px;
      height: 78px;
    }

    @include breakpoint(dxxxl) {
      width: 58px;
      height: 58px;
    }

    @include breakpoint(dxxl) {
      border-radius: 90px;
      width: 48px;
      height: 48px;
      background-color: #c4c4c4;
    }
  }

  &__user-two {
    border-radius: 100%;
    width: 88px;
    height: 88px;

    @include breakpoint(dxxxxl) {
      width: 78px;
      height: 78px;
    }

    @include breakpoint(dxxxl) {
      width: 58px;
      height: 58px;
    }

    @include breakpoint(dxxl) {
      width: 48px;
      height: 48px;
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
}
</style>
