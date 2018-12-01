<template>
<div>
  <p>graph</p>
  <e-charts class="widget-graph" v-for="(param, idx) in params" :key="idx" :options="param"/>
</div>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts'

import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/toolbox/'

import optionGenerator from '@/components/graph/option.js'

export default {
  data() {
    const options = []
    for (let i = 0; i < 7; i++) {
      options.push(optionGenerator())
    }

    return {
      params: options,
    }
  },

  components: {
    'e-charts': ECharts,
  },
}
</script>

<style scoped>
.widget-graph {
  width: 300px;
  height: 300px;
  float: left;
  margin: 10px;
}
</style>

