<template>
  <div>
    <StepThree/>
  </div>
</template>

<script>
import StepThree from '../../components/StartPage/Registration/StepThree.vue'

export default {
  layout: 'registration',
  components: {
    StepThree
  },
  validate({query, from, redirect}) {
    if (query.stepTwoIsReg === '1' && from.path === '/signup/s2') {
      return true
    } else {
      redirect('/')
    }
  }
}
</script>
