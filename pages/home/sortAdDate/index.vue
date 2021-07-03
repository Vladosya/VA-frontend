<template>
  <div class="sort-ad-block" @click.self="closeSortAdDate">
    <SortAdDate/>
  </div>
</template>

<script>
import SortAdDate from '@/components/Home/SortAdDate/SortAdDate'

export default {
  layout: 'home',
  methods: {
    closeSortAdDate() {
      this.$router.push('/home')
    }
  },
  components: {
    SortAdDate
  }
}
</script>

<style scoped lang="scss">
.sort-ad-block {
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
