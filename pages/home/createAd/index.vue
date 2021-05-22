<template>
  <div class="create-ad-block" @click.self="closeCreateAd">
    <CreateAd/>
  </div>
</template>

<script>
import CreateAd from '../../../components/Home/CreateAd/CreateAd.vue'

export default {
  layout: 'home',
  middleware: ['auth'],
  methods: {
    closeCreateAd() {
      this.$router.push('/home')
    }
  },
  components: {
    CreateAd
  }
}
</script>

<style scoped lang="scss">
.create-ad-block {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
