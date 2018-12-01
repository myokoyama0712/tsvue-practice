<template>
<draggable element="ul">
  <li v-for="(task, idx) in tasks" :key="idx">{{ task }}</li>
</draggable>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'draggable-example',

  components: {
    draggable,
  },

  data() {
    return {
      tasks: ['task1', 'task2', 'task3', 'task4'],
    }
  },
}
</script>

<style scoped>

</style>

