<template>
<div style="position:relative">
  <button @click.stop="">・・・</button>
  <list-button></list-button>
</div>
</template>

<script>
// https://qiita.com/huigo/items/a888dcee8f46d62bb9e3
import ListButton from '@/components/ListButton.vue'

export default {
  components: {
    ListButton,
  },
}
</script>

<style scoped>

</style>
