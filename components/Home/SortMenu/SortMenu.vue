<template>
  <div class="navbar">
    <el-tooltip class="item" effect="dark" content="Отсортировать Объявления" placement="left">
      <ul class="navbar__link">
        <li>
          <nuxt-link exact to="/home/sortAdDate">
            <i class="el-icon-sort"></i>
          </nuxt-link>
        </li>
      </ul>
    </el-tooltip>
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
  border-radius: 21px 5px 11px 1px;
  width: 50px;
  box-shadow: 0 1px 4px -1px rgba(18, 22, 33, 0.24);
  background: #fff;

  &__link {
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    list-style: none;
    overflow: hidden;
    margin: 0;
    padding: 4px 0 0 14px;
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
