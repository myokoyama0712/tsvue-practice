<template>
<div class="menu" style="position:absolute" v-if="showMenu">
  <div>詳細</div>
  <div>削除</div>
  <div>編集</div>
  <div>コピー</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    }
  },

  methods: {
    listen(target, eventType, callback) {
      if (!this._eventRemovers) {
        this._eventRemovers = []
      }
      target.addEventListener(eventType, callback)
      this._eventRemovers.push({
        remove() {
          target.removeEventListener(eventType, callback)
        },
      })
    },
  },

  created() {
    this.listen(window, 'click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.$emit('close')
      }
    })
  },

  destroyed() {
    if (this._eventRemovers) {
      this._eventRemovers.forEach((eventRemover) => {
        eventRemover.remove()
      })
    }
  },
}
</script>

<style scoped>
.menu {
  background:#fff;
  box-shadow: 0 6px 12px rgba(0,0,0,0.175);
  padding: 5px;
}

.menu div:hover {
  background: #000;
  cursor: pointer;
}
</style>

