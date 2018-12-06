<template>
<div>
  Thanksページ
  <head-comp></head-comp>
  送信ありがとうございました！
</div>
</template>

<script>
import HeadComp from '@/components/form/HeadComp'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'thanks',

  components: {
    HeadComp,
  },
}
</script>

<style scoped>

</style>

