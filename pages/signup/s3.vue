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
  validate({query, redirect}) {
    if (query.stepTwoIsReg === '1') {
      return true
    } else {
      redirect('/')
    }
  }
}
</script>
