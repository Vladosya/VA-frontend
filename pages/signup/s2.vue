<template>
  <div>
    <StepTwo/>
  </div>
</template>

<script>
import StepTwo from '../../components/StartPage/Registration/StepTwo.vue'

export default {
  layout: 'registration',
  components: {
    StepTwo
  },
  validate({query, from, redirect}) {
    if (query.stepOneIsReg === '1' && from.path === '/signup/s1') {
      return true
    } else {
      redirect('/')
    }
  }
}
</script>
