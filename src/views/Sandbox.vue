<template>
<div>
  <div>Sandbox</div>
  <hr>
  <fade-example></fade-example>
  <hr>
  <pull-down-menu></pull-down-menu>
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
import FadeExample from '@/components/transition/FadeExample.vue'
import PullDownMenu from '@/components/transition/PullDownMenu.vue'

export default {
  name: 'sandbox',

  components: {
    DraggableExample,
    DraggableDiv,
    DraggableGraph,
    FadeExample,
    PullDownMenu,
  },
}
</script>

<style scoped>

</style>

