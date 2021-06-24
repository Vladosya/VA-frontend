<template>
  <div class="navbar">
    <ul class="navbar__link">
      <li>
        <el-tooltip class="item" effect="dark" content="Карта" placement="bottom">
          <nuxt-link exact to="/home">
            <i class="el-icon-map-location"></i>
          </nuxt-link>
        </el-tooltip>
      </li>
      <li>
        <el-tooltip class="item" effect="dark" content="Создать объявление" placement="bottom">
          <nuxt-link to="/home/createAd">
            <i class="el-icon-user"></i>
          </nuxt-link>
        </el-tooltip>
      </li>
      <li>
        <el-tooltip class="item" effect="dark" content="Сообщения" placement="bottom">
          <nuxt-link to="/home/messenger">
            <i class="el-icon-message"></i>
          </nuxt-link>
        </el-tooltip>
      </li>
      <li>
        <el-tooltip class="item" effect="dark" content="Новости" placement="bottom">
          <nuxt-link to="#">
            <i class="el-icon-news"></i>
          </nuxt-link>
        </el-tooltip>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeMenu'
}
</script>

<style scoped lang="scss">
@import "assets/settings.scss";

.navbar {
  overflow: hidden;
  border-radius: 5px 5px 11px 21px;
  width: 300px;
  box-shadow: 0 1px 4px -1px rgba(18, 22, 33, 0.24);
  background: #fff;

  &__link {
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    list-style: none;
    overflow: hidden;
    margin: 0;
    padding: 0 12px;
    text-align: center;

    li {
      position: relative;

      :focus {
        color: #771699;
      }

      i {
        margin: 0 auto 4px;
        font-size: 22px;

        :focus {
          color: #771699;
        }
      }

      a {
        position: relative;
        z-index: 1;
        display: block;
        padding: 15px 0;
        text-decoration: none;
        color: #99a3ba;
        transition: transform 0.2s ease;

        :focus {
          color: #771699;
        }
      }
    }
  }
}
</style>
