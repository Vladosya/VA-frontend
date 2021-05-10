<template>
  <div class="left-menu-block">
    <button @click="clickMap">
      <img src="../../../assets/Home/left-menu/map.svg" alt="map-left-menu"/>
    </button>
    <button @click="openCreateAd">
      <img
        src="../../../assets/Home/left-menu/createdAd.svg"
        alt="createdAd-left-menu"
      />
    </button>
    <button>
      <img
        src="../../../assets/Home/left-menu/message.svg"
        alt="message-left-menu"
      />
    </button>
    <button>
      <img src="../../../assets/Home/left-menu/news.svg" alt="news-left-menu"/>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    clickMap() {
      if (this.$route.path === '/home') {
        console.log('dsds')
        this.$router.push('/home')
      }
    },
    openCreateAd() {
      this.$emit('clickCreateAd')
    }
  }
}
</script>

<style scoped lang="scss">
@import "assets/settings.scss";

.left-menu-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 46px;
  width: 42px;
  height: 141px;
  background-color: #3e0a4b;

  button {
    border: none;
    background: none;
  }
}
</style>
