<template>
  <GmapMap
    v-bind:center="center"
    v-bind:zoom="14"
    map-type-id="terrain"
    :options="options"
    class="map"
  >
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      icon="https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|ff006b"
      :clickable="true"
    />
  </GmapMap>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['coordinates'],
  data() {
    return {
      center: JSON.parse(JSON.stringify(this.coordinates)),
      markers: [
        {
          position: JSON.parse(JSON.stringify(this.coordinates))
        }
      ],
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
  }
})
</script>

<style scoped lang="scss">
@import "../../../../assets/settings";

.map {
  width: 350px;
  height: 350px;

  @include breakpoint(dxxxxl) {
    width: 300px;
    height: 300px;
  }

  @include breakpoint(dxxxl) {
    width: 235px;
    height: 235px;
  }

  @include breakpoint(dxxl) {
    width: 235px;
    height: 235px;
  }

  @include breakpoint(dsm) {
    width: 180px;
    height: 180px;
  }
}
</style>

