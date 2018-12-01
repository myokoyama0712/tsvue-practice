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
</style>
