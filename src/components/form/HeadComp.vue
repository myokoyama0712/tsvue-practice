<template>
<h1>{{ title }}</h1>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'headComp',

  // storeのgetterを異なる名前でマッピングさせる
  computed: mapGetters({
    title: 'getTitle',
  }),
}
</script>

<style scoped>

</style>

