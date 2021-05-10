<template>
  <div class="home-block">
    <div class="home-block__map">
      <Map/>
    </div>
    <div class="home-block__left-menu">
      <LeftMenu
        @clickCreateAd="openCreateAd = !openCreateAd"
      />
    </div>
    <div class="home-block__createAd" v-if="openCreateAd">
      <CreateAd
        @closeCreateAd="openCreateAd = !openCreateAd"
      />
    </div>
  </div>
</template>

<script>
import Map from '../../components/Home/Map/Map.vue'
import LeftMenu from '../../components/Home/LeftMenu/LeftMenu.vue'
import CreateAd from '../../components/Home/CreateAd/CreateAd.vue'

export default {
  data() {
    return {
      openCreateAd: false
    }
  },
  components: {
    Map,
    LeftMenu,
    CreateAd
  }
}
</script>

<style scoped lang="scss">
@import "assets/settings.scss";

.home-block {
  &__map {
    position: relative;
    z-index: 900;
  }

  &__left-menu {
    position: fixed;
    left: 5px;
    top: 40%;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__createAd {
    position: fixed;
    left: 12%;
    top: 10%;
    z-index: 1300;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
