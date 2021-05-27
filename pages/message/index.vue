<template>
  <div>
    <Message/>
  </div>
</template>

<script>
import Message from '@/components/Home/Message/Message'

export default {
  middleware: ['auth'],
  components: {
    Message
  }
}
</script>
