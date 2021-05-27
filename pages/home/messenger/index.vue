<template>
  <div class="messenger-open-block" @click.self="closeMessenger">
    <Messenger/>
  </div>
</template>

<script>
import Messenger from '@/components/Home/Messenger/Messenger'

export default {
  layout: 'home',
  middleware: ['auth'],
  methods: {
    closeMessenger() {
      this.$router.push('/home')
    }
  },
  components: {
    Messenger
  }
}
</script>

<style scoped lang="scss">
.messenger-open-block {
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
