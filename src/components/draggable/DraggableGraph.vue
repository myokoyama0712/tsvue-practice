<template>
<div>
  <div v-for="(param, idx) in params" :key="idx">{{ param.id }}</div>
  <draggable element="div" v-model="params" :options="{ handle: '.handle-header' }">
    <transition-group name="list-complete">
      <div v-for="(param, idx) in params" :key="idx" class="list-complete-item">
        <div slot="header" class="handle-header"><img src="@/assets/ArrowCross.svg.png" class="draggable-handle"></div>
        <e-charts class="widget-graph" :options="param"></e-charts>
      </div>
    </transition-group>
  </draggable>
</div>
</template>

<script>
import draggable from 'vuedraggable'
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/toolbox/'
import optionGenerator from '@/components/graph/option.js'

export default {
  name: 'draggable-graph',

  components: {
    draggable,
    'e-charts': ECharts,
  },

  data() {
    const options = []
    for (let i = 0; i < 7; i++) {
      options.push(optionGenerator())
    }

    return {
      params: options,
    }
  },
}
</script>

<style scoped>
.widget-graph {
  cursor: all-scroll;
  width: 250px;
  height: 300px;
}

.list-complete-item {
  float: left;
  margin: 10px;
  width: 300px;
  height: 300px;
  padding: 4px;
  margin-top: 4px;
  border: solid 1px;
  transition: all 1s;
}

.list-complete-enter, .list-complete-leave-active {
  opacity: 0;
}

img.draggable-handle {
  width: 10%;
  height: 10%;
  cursor: pointer;
}
</style>
