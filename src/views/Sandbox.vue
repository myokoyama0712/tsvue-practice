<template>
<div>
  <div>Sandbox</div>
  <hr>
  <draggable-example></draggable-example>
  <hr>
  <draggable-div></draggable-div>
  <hr>
  <draggable-graph></draggable-graph>
</div>
</template>

<script>
import DraggableExample from '@/components/draggable/DraggableExample.vue'
import DraggableDiv from '@/components/draggable/DraggableDiv.vue'
import DraggableGraph from '@/components/draggable/DraggableGraph.vue'

export default {
  name: 'sandbox',

  components: {
    DraggableExample,
    DraggableDiv,
    DraggableGraph,
  },
}
</script>

<style scoped>

</style>

