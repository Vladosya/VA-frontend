<template>
  <div class="left-menu-block">
    <nuxt-link to="/home">
      <button>
        <img src="../../../assets/Home/left-menu/map.svg" alt="map-left-menu"/>
      </button>
    </nuxt-link>
    <nuxt-link to="/home/createAd">
      <button>
        <img
          src="../../../assets/Home/left-menu/createdAd.svg"
          alt="createdAd-left-menu"
        />
      </button>
    </nuxt-link>
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

    &:hover {
      outline-color: rgba(255, 255, 255, 0);
      outline-offset: 15px;
      border: 1px solid #771699;
      box-shadow: inset 0 0 20px rgba(132, 55, 186, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
      text-shadow: 1px 1px 2px #9ebecb;
    }
  }
}
</style>
