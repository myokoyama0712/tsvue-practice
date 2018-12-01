<template>
<div>
  <div>{{ graphs }}</div>
  <draggable element="div" v-model="graphs">
    <div class="draggable-item" v-for="(g, idx) in graphs" :key="idx">{{ g }}</div>
  </draggable>
</div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'draggable-div',

  components: {
    draggable,
  },

  data() {
    return {
      graphs: ['グラフ1', 'グラフ2', 'グラフ3'],
    }
  },
}
</script>

<style scoped>
div.draggable-item {
  background-color: gray;
  cursor: all-scroll;
}
</style>

