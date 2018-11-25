<template>
<div>
  <div>Tree Example</div>
  <button @click="addNewNode">選択中のノードに子ノードを追加</button>
  <button @click="deleteNode">選択中のノードの子ノードをすべて削除</button>
  <div>選択中のノード: {{ selectedNode | nodeStringer }}</div>

  <!-- the demo root element -->
  <ul class="root-node">
    <tree :node="treeNode"></tree>
  </ul>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Tree from '@/components/tree/Tree.vue'
import TreeNode from '@/components/tree/nodes.ts'
import Bus from '@/components/tree/bus.ts'

export default Vue.extend({
  data() {
    const initNodes = TreeNode()
    return {
      treeNode: initNodes,
      selectedNode: null,
      maxId: initNodes.maxId,
    }
  },

  components: {
    Tree,
  },

  methods: {
    addNewNode(event: any) {
      if (this.selectedNode === null) {
        alert('SELECT SOME NODE!')
        return
      }
      this.maxId++
      this.selectedNode.children.push({ id: this.maxId, isSelected: false, children: [] })
    },

    deleteNode(event: any) {
      if (confirm('CHILD NODES WILL BE DELETED, IS IT OK?')) { this.selectedNode.children = [] }
    },
  },

  created() {
    Bus.$on('node-select-event', (selectedNode: any) => {
      Bus.count++
      if (this.selectedNode) {
          this.selectedNode.isSelected = false
      }
      selectedNode.isSelected = true
      this.selectedNode = selectedNode
    })
  },

  filters: {
    nodeStringer(node: any) {
      return node ? node.id : 'NOT SELECTED'
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
