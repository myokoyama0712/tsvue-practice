<template>
<li class="collapse expand">
  <img src="./img/open.png" @click="openAndClose" class="marker">
  <span @click="selectNode($event, node)" :class="{ 'selected': node.isSelected }">{{ node.id }}</span>
  <ul>
    <tree v-for="(node, index) in node.children"
          :key="index" :node="node"></tree>
  </ul>
</li>
</template>

<script lang="ts">
import Vue from 'vue'
import Bus from '@/components/tree/bus.ts'
import Regex from '@/components/tree/regex.ts'

export default Vue.extend({
  name: 'tree',

  props: {
    node: Object,
  },

  data() {
    return {
    }
  },

  methods: {
    openAndClose(event: any) {
      const target = event.target
      const parent = event.target.parentNode
      if (target.nodeName === 'IMG' && parent.nodeName === 'LI') {
        // サブツリーの展開
        const clist = parent.classList
        if (clist.contains('collapse')) {
            clist.toggle('expand')
        }

        // マーカーのトグル
        const array = target.src.split('/')
        const fileName: string = array[array.length - 1]
        // 参照: http://tk2000ex.blogspot.com/2017/11/vue.html
        fileName.match(Regex) ? target.src = require('./img/open.png') : target.src = require('./img/close.png')
      }
    },

    selectNode(event: any, selectedNode: any) {
        Bus.$emit('node-select-event', selectedNode)
    },
  },
})
</script>

<style scoped>
/* リスト全体のマージン、パディングは基本的になくす */
ul {
  margin: 0;
  margin-left: 0.5em;
  padding: 0 0 0 0;
}

/* リストのマーカーはnoneにする */
li {
  margin-left: 0.5em;
  list-style-position: outside;
  list-style-type: none;
  font-size: 13pt;
}

/* collapseクラスのリスト項目の、子要素であるul要素は表示する */
li.collapse > ul {
  display: none;
}

/* expandクラスのリスト項目の、子要素であるul要素は表示する */
li.expand > ul {
  display: block;
}

img.marker {
  width: 9pt;
  height: 9pt;
  margin-right: 3pt;
  cursor: pointer;
}

.root-node span {
  cursor: pointer;
}

.root-node span.selected {
    background-color: chartreuse;
    padding: 3px;
}
</style>
