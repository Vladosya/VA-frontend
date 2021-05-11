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
@import "assets/settings.scss";

.home-layout {
  &__nuxt-pos {
    position: fixed;
    left: 24%;
    top: 24%;
    z-index: 1300;
    display: flex;
    align-items: center;
    justify-content: center;

    @include breakpoint(dxxxxl) {
      left: 20%;
      top: 20%;
    }

    @include breakpoint(dxxxl) {
      left: 14%;
      top: 14%;
    }

    @include breakpoint(dxxl) {
      left: 12%;
      top: 9%;
    }

    @include breakpoint(dxl) {
      left: 10%;
      top: 13%;
    }

    @include breakpoint(dlg) {
      left: 15%;
      top: 14%;
    }

    @include breakpoint(dmd) {
      left: 13%;
      top: 15%;
    }

    @include breakpoint(dsm) {
      left: 4%;
      top: 12%;
    }
  }
}

@media (height: 1024px) {
  .home-layout {
    &__nuxt-pos {
      left: 12%;
      top: 22%;
    }
  }
}

@media (height: 864px) {
  .home-layout {
    &__nuxt-pos {
      left: 12%;
      top: 12%;
    }
  }
}
</style>
