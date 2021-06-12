<template>
  <div>
    <gmap-map
      ref="map"
      v-bind:center="center"
      v-bind:zoom="11"
      :options="options"
      class="container"
    >
    </gmap-map>
    <div class="left-menu">
      <LeftMenu/>
    </div>
    <div class="user-menu">
      <UserMenu/>
    </div>
  </div>
</template>

<script>
import LeftMenu from '@/components/Home/LeftMenu/LeftMenu.vue'
import UserMenu from '@/components/Home/UserMenu/UserMenu'

export default {
  data() {
    return {
      center: {lat: 55.7522200, lng: 37.6155600},
      options: {
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUI: false
      }
    }
  },
  components: {
    LeftMenu,
    UserMenu
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
}

.left-menu {
  position: fixed;
  left: 5px;
  top: 40%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-menu {
  position: fixed;
  left: 5px;
  bottom: 5px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
