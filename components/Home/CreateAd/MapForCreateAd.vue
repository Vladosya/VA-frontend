<template>
  <div class="map-for-createAd">
    <div class="map-for-createAd__title">Выберите место вписки</div>
    <gmap-map
      ref="map"
      v-bind:center="center"
      v-bind:zoom="10"
      class="container"
      @click="onMapClick"
    >
      <gmap-marker
        v-for="m in markers"
        :key="m.id"
        :position="m.position"
        icon="https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|ff006b"
        :clickable="true"
        :draggable="true"
        @click="infoMarker"
        @dblclick="onMarkerDblClick"
        @drag="updateCoordinates"
      ></gmap-marker>
    </gmap-map>
    <div class="map-for-createAd__btn" v-if="isCreateMarker">
      <button @click="$emit('createMarker', markers)">Подтвердить</button>
    </div>
  </div>
</template>

<script>
import LeftMenu from "../../../components/Home/LeftMenu/LeftMenu.vue";

export default {
  data() {
    return {
      center: { lat: 55.75222, lng: 37.61556 },
      markers: [],
      isCreateMarker: false,
      place: null
    };
  },
  methods: {
    onMapClick(e) {
      console.log("einOnMapClick", e);
      if (!this.markers.length) {
        this.isCreateMarker = true;
        this.markers.push({
          id: 1 + Math.max(0, ...this.markers.map(n => n.id)),
          position: {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
          }
        });
      }
    },
    setPlace(place) {
      this.place = place;
    },
    infoMarker() {
      console.log("this.markers", this.markers);
    },
    onMarkerDblClick() {
      this.markers = [];
      this.isCreateMarker = false;
    },
    updateCoordinates(location) {
      this.markers[0].position = {};
      this.markers[0].position = {
        lat: location.latLng.lat(),
        lng: location.latLng.lng()
      };
    }
  },
  components: {
    LeftMenu
  }
};
</script>

<style scoped lang="scss">
@import "assets/settings.scss";

.map-for-createAd {
  &__title {
    position: fixed;
    left: 40.5%;
    top: 29%;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 21px;
    color: #fff;

    @include breakpoint(dxxxxl) {
      left: 37.5%;
      top: 26%;
    }

    @include breakpoint(dxxxl) {
      left: 34.5%;
      top: 22%;
    }

    @include breakpoint(dxxl) {
      left: 34%;
      top: 18%;
    }

    @include breakpoint(dxl) {
      left: 32.5%;
      top: 20%;
    }

    @include breakpoint(dlg) {
      left: 32.5%;
      top: 23%;
      font-size: 18px;
    }

    @include breakpoint(dsm) {
      left: 27.5%;
      top: 21%;
      font-size: 17px;
    }
  }

  &__btn {
    button {
      position: fixed;
      left: 41.9%;
      top: 71%;
      border: 1px solid #771699;
      border-radius: 5px;
      width: 130px;
      height: 40px;
      box-sizing: border-box;
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 13px;
      line-height: 18px;
      color: #771699;
      background: #fff;

      @include breakpoint(dxxxxl) {
        left: 39.3%;
        top: 73%;
      }

      @include breakpoint(dxxxl) {
        left: 37.1%;
        top: 77%;
        font-size: 12px;
      }

      @include breakpoint(dxxl) {
        left: 36.6%;
        top: 81%;
      }

      @include breakpoint(dxl) {
        left: 35.3%;
        top: 78%;
      }

      @include breakpoint(dlg) {
        left: 35.7%;
        top: 77%;
        width: 110px;
        height: 35px;
      }

      @include breakpoint(dmd) {
        left: 34.7%;
        top: 75.5%;
      }

      @include breakpoint(dsm) {
        left: 31%;
        top: 76.6%;
      }
    }
  }
}

.container {
  width: 1038px;
  height: 690px;

  @include breakpoint(dxxxxl) {
    width: 838px;
    height: 590px;
  }

  @include breakpoint(dlg) {
    width: 638px;
    height: 490px;
  }
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

@media (height: 1024px) {
  .map-for-createAd {
    &__title {
      left: 31.5%;
      top: 29%;
    }

    &__btn {
      button {
        left: 34.7%;
        top: 70%;
      }
    }
  }
}

@media (height: 864px) {
  .map-for-createAd {
    &__title {
      left: 33.5%;
      top: 20%;
    }

    &__btn {
      button {
        left: 36.6%;
        top: 79%;
      }
    }
  }
}
</style>
