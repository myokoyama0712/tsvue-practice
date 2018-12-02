<template>
<div>
  <button @click="isShown = !isShown">表示の切り替え</button>
  <transition>
    <p v-show="isShown">Hello, world!</p>
  </transition>
</div>
</template>

<script>
export default {
  name: 'fade-example',

  data() {
    return {
      isShown: false,
    }
  },
}
</script>

<style scoped>
.v-enter-active, .v-leave-active {
  /* アニメーションの時間、イージングなどを設定 */
  transition: opacity 500ms ease-out;
}

/* フェードイン */
.v-enter {
  /* フェードインの初期状態 */
  opacity: 0;
}
.v-enter-to {
  /* フェードインの終了状態 */
  opacity: 1;
}

/* フェードアウト */
.v-leave {
  /* フェードアウトの初期状態 */
  opacity: 1;
}
.v-leave-to {
  /* フェードアウトの終了状態 */
  opacity: 0;
}
</style>

