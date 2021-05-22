<template>
  <div>
    <StepFour/>
  </div>
</template>

<script>
import StepFour from '../../components/StartPage/Registration/StepFour'

export default {
  layout: 'registration',
  components: {
    StepFour
  },
  validate({query, from, redirect}) {
    if (query.stepThreeIsReg === '1' && from.path === '/signup/s3') {
      return true
    } else {
      redirect('/')
    }
  }
}
</script>
