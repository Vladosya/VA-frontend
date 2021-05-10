<template>
  <div>
    <gmap-map
      ref="map"
      v-bind:center="center"
      v-bind:zoom="11"
      class="container"
    >
    </gmap-map>
  </div>
</template>

<script>

export default {
  data() {
    return {
      center: {lat: 55.7522200, lng: 37.6155600}
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
}
</style>
