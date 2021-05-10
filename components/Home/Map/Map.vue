<template>
  <div>
    <gmap-map
      ref="map"
      v-bind:center="center"
      v-bind:zoom="11"
      class="container"
    >
    </gmap-map>
    <div class="left-menu">
      <LeftMenu/>
    </div>
  </div>
</template>

<script>
import LeftMenu from '../../../components/Home/LeftMenu/LeftMenu.vue'

export default {
  data() {
    return {
      center: {lat: 55.7522200, lng: 37.6155600}
    }
  },
  components: {
    LeftMenu
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
</style>
