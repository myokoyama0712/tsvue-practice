<template>
<div style="position:relative">
  <menu-button></menu-button>
</div>
</template>

<script>
// https://qiita.com/huigo/items/a888dcee8f46d62bb9e3
import ListButton from '@/components/ListButton.vue'
import MenuButton from '@/components/menu-button/menu-button.vue'

export default {
  name: 'list-button-vuew',

  components: {
    ListButton,
    MenuButton,
  },
}
</script>

<style scoped>

</style>
