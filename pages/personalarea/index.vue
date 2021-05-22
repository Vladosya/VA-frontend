<template>
  <div>
    <PersonalArea/>
  </div>
</template>

<script>
import PersonalArea from '@/components/Home/PersonalArea/PersonalArea'

export default {
  middleware: ['auth'],
  components: {
    PersonalArea
  }
}
</script>
