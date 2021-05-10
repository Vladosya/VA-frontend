<template>
  <div class="home-layout">
    <div>
      <Map/>
    </div>
    <div class="home-layout__nuxt-pos">
      <Nuxt/>
    </div>
  </div>
</template>

<script>
import Map from '../components/Home/Map/Map.vue'

export default {
  components: {
    Map
  }
}
</script>

<style scoped lang="scss">
.home-layout {
  &__nuxt-pos {
    position: fixed;
    left: 12%;
    top: 9%;
    z-index: 1300;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
