<template>
  <div class="menu" @click.self="closeMenu">
    <Menu/>
  </div>
</template>

<script>
import Menu from '@/components/Home/Menu/Menu'

export default {
  layout: 'home',
  methods: {
    closeMenu() {
      this.$router.push('/home')
    }
  },
  components: {
    Menu
  }
}
</script>

<style scoped lang="scss">
.menu {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
