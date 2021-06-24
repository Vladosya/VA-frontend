<template>
  <GmapMap
    v-bind:center="center"
    v-bind:zoom="14"
    map-type-id="terrain"
    :options="options"
    class="map"
    :style="cssVars"
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

<script>
export default {
  props: ['coordinates', 'width', 'height'],
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
  },
  computed: {
    cssVars() {
      return {
        '--width': this.width[0],
        '--widthDxxxxl': this.width[1],
        '--widthDxxxl': this.width[2],
        '--widthDxxl': this.width[3],
        '--widthDsm': this.width[4],
        '--height': this.height[0],
        '--heightDxxxxl': this.height[1],
        '--heightDxxxl': this.height[2],
        '--heightDxxl': this.height[3],
        '--heightDsm': this.height[4],
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../../../assets/settings";

.map {
  width: var(--width);
  height: var(--height);

  @include breakpoint(dxxxxl) {
    width: var(--widthDxxxxl);
    height: var(--heightDxxxxl);
  }

  @include breakpoint(dxxxl) {
    width: var(--widthDxxxl);
    height: var(--heightDxxxl);
  }

  @include breakpoint(dxxl) {
    width: var(--widthDxxl);
    height: var(--heightDxxl);
  }

  @include breakpoint(dsm) {
    width: var(--widthDsm);
    height: var(--heightDsm);
  }
}
</style>

