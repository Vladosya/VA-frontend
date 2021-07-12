<template>
  <div>
    <gmap-map
      ref="map"
      v-bind:center="center"
      v-bind:zoom="11"
      :options="options"
      class="container"
      @click.self="closeWindow"
    >
      <gmap-marker
        v-for="(m, index) in markers"
        :key="m.id"
        :position="m.geolocation"
        icon="https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|ff006b"
        :options="gmapMarkerOptions"
        @click="toggleInfoWindow(m, index)"
      >
      </gmap-marker>

      <gmap-info-window
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="closeWindow"
      >
        <div v-if="openInfoPerson">
          <UserMarkerInfo
            :id-person="idPerson"
            @closeInfoPerson="closeWindow"
          />
        </div>
      </gmap-info-window>
    </gmap-map>
    <div class="sortAd-menu">
      <SortMenu />
    </div>
    <div class="left-menu">
      <NavMenu />
    </div>
    <div class="user-menu">
      <UserMenu />
    </div>
  </div>
</template>

<script>
import NavMenu from "@/components/Home/NavMenu/NavMenu.vue";
import UserMenu from "@/components/Home/UserMenu/UserMenu";
import SortMenu from "@/components/Home/SortMenu/SortMenu";
import UserMarkerInfo from "@/components/Home/Map/UserMarkerInfo/UserMarkerInfo";

export default {
  beforeCreate() {
    if (process.client) {
      this.$store.dispatch("map/getAdForMap");
    }
  },
  data() {
    return {
      center: { lat: 55.75222, lng: 37.61556 },
      options: {
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUI: false,
      },
      infoWinOpen: false,
      currentMidx: null,
      infoWindowPos: {
        lat: 0,
        lng: 0,
      },
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
      idPerson: 0,
      openInfoPerson: false,
      gmapMarkerOptions: {
        clickable: true,
      },
    };
  },
  computed: {
    markers() {
      return this.$store.getters["map/markers"];
    },
  },
  methods: {
    toggleInfoWindow(marker, idx) {
      if (marker !== undefined) {
        this.idPerson = marker.id;
        this.openInfoPerson = !this.openInfoPerson;
        this.gmapMarkerOptions.clickable = false;
      }
      this.infoWindowPos = marker.geolocation;

      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen;
      } else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
    closeWindow() {
      this.infoWinOpen = false;
      this.openInfoPerson = false;
      this.gmapMarkerOptions.clickable = true;
    },
  },
  components: {
    NavMenu,
    UserMenu,
    SortMenu,
    UserMarkerInfo,
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
}

.sortAd-menu {
  position: fixed;
  right: 5px;
  bottom: 5px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-menu {
  position: fixed;
  right: 5px;
  top: 5px;
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
