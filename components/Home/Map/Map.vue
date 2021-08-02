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
  created() {
    if (process.client) {
      this.notificationForAccount();
      this.connectedAdPublish();
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
    notificationForAccount() {
      if (process.client) {
        setTimeout(() => {
          const token = $nuxt.$cookies.get("token");
          const myData = JSON.parse(localStorage.getItem("myData"));

          this.connection = new WebSocket(
            `ws://127.0.0.1:8000/ws/notification/user/${myData[0].id}/?token=${token}`
          );

          this.connection.onopen = () => {
            console.log("connected with address");
          };

          this.connection.onmessage = (event) => {
            const data = JSON.parse(event.data);

            console.log("dataInNotificationForAccount:", data);

            if (data.message_to_room.event === "Success confirm account") {
              this.$notify({
                title: "Подтверждение аккаунта",
                message: `${data.message_to_room.message}`,
                type: "success",
                position: "top-left",
              });
            } else if (data.message_to_room.event === "Error confirm account") {
              this.$notify({
                title: "Подтверждение аккаунта",
                message: `${data.message_to_room.message}`,
                type: "error",
                position: "top-left",
              });
            } else if (
              data.message_to_room.event === "Add in the participants"
            ) {
              this.$store.commit("myParty/getMyParticipants", [
                {
                  id_ad: data.message_to_room.id_ad,
                  participant_id: data.message_to_room.participant_id,
                  user: {
                    id: data.message_to_room.participant.user.id,
                    photo: data.message_to_room.participant.user.photo,
                    username: data.message_to_room.participant.user.username,
                  },
                },
              ]);
              this.$notify({
                title: "Статус заявки",
                message: `${data.message_to_room.message}`,
                type: "success",
                position: "top-left",
              });
            } else if (
              data.message_to_room.event === "Kick Out from the party"
            ) {
              this.$notify({
                title: "Статус на вечеринки",
                message: `${data.message_to_room.message}`,
                type: "warning",
                position: "top-left",
              });
            } else if (data.message_to_room.event === "Reject Bid") {
              this.$notify({
                title: "Статус заявки",
                message: `${data.message_to_room.message}`,
                type: "warning",
                position: "top-left",
              });
            } else if (data.message_to_room.event === "Create bid") {
              this.$store.commit("myParty/getRequestMyParty", [
                {
                  author_id: data.message_to_room.bid.author_bid.id,
                  id: data.message_to_room.bid.bid_id,
                  number_of_boys: data.message_to_room.bid.data.number_of_boys,
                  number_of_girls:
                    data.message_to_room.bid.data.number_of_girls,
                  number_of_person:
                    data.message_to_room.bid.data.number_of_person,
                  photo_user:
                    data.message_to_room.bid.author_bid.photo.substr(8),
                  photos__photo_alcohol:
                    data.message_to_room.bid.data.photos.photo_alcohol ===
                    "/images/"
                      ? ""
                      : data.message_to_room.bid.data.photos.photo_alcohol.substr(
                          8
                        ),
                  photos__photo_participants:
                    data.message_to_room.bid.data.photos.photo_participants ===
                    "/images/"
                      ? ""
                      : data.message_to_room.bid.data.photos.photo_participants.substr(
                          8
                        ),
                  username: data.message_to_room.bid.author_bid.username,
                },
              ]);

              this.$notify({
                title: "Заявка на вашу вечеринку",
                message: `${data.message_to_room.message}`,
                type: "warning",
                position: "top-left",
              });
            }
            console.log(`Данные получены с сервера!`);
          };
        }, 500);
      }
    },
    connectedAdPublish() {
      if (process.client) {
        setTimeout(() => {
          const token = $nuxt.$cookies.get("token");
          const myData = JSON.parse(localStorage.getItem("myData"));

          this.connection = new WebSocket(
            `ws://127.0.0.1:8000/ws/notification/ad/${myData[0].city}/?token=${token}`
          );

          this.connection.onopen = () => {
            console.log("connected with address");
          };

          this.connection.onmessage = (event) => {
            const data = JSON.parse(event.data);

            const modifiedMarker = {
              geolocation: JSON.parse(data.message_to_room.geolocation),
              id: data.message_to_room.id_ad,
            };

            this.$store.commit("map/addAdInMarkers", modifiedMarker);

            if (data.message_to_room.event === "Ad published") {
              if (data.message_to_room.ad.author.id === myData[0].id) {
                this.$store.commit("map/getAdForMap", [
                  {
                    id: data.message_to_room.ad.id_ad,
                    geolocation: JSON.parse(data.message_to_room.geolocation),
                  },
                ]);
                this.$notify({
                  title: "Публикация объявления",
                  message: `${data.message_to_room.message}`,
                  type: "success",
                  position: "top-left",
                });
              } else {
                this.$store.commit("map/getAdForMap", [
                  {
                    id: data.message_to_room.ad.id_ad,
                    geolocation: JSON.parse(data.message_to_room.geolocation),
                  },
                ]);
                this.$notify({
                  title: "Публикация объявления",
                  message: `На карте появилось новое объявление. Посмотрите на него`,
                  type: "success",
                  position: "top-left",
                });
              }
            }
          };
        }, 500);
      }
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
