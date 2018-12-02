<template>
<div @mouseleave="isShown = false">
  <p @mouseover="isShown = true"><a href="#" class="menu">{{ name }}</a></p>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
    :css="false"
  >
    <ul v-if="isShown">
      <li v-for="item in items" :key="item">
        <a href="#" class="menu-item">{{ item }}</a>
      </li>
    </ul>
  </transition>
</div>
</template>

<script>
// https://jsfiddle.net/kitak/r84y9c1v/
// CSSではなくJavaScriptでトランジションアニメーションを制御する例

import anime from 'animejs'

export default {
  data() {
    return {
      isShown: false,
      name: 'メニュー',
      items: [
        '1-1',
        '1-2',
        '1-3',
      ],
    }
  },

  methods: {
    beforeEnter(el) {
      el.style.height = '0px'
      el.style.opacity = '0'
    },

    enter(el, done) {
      // 3秒かけて、透明度と高さを変更して出現させる
      anime({
        targets: el,
        opacity: 1,
        height: el.scrollHeight + 'px',
        duration: 3000,
        complete: done,
      })
    },

    leave(el, done) {
      anime({
        targets: el,
        opacity: 0,
        height: '0px',
        duration: 300,
        complete: done,
      })
    },
  },
}
</script>

<style scoped>
div, ul, li, a, p {
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 14px;
}

div {
  width: 90px;
}

.menu {
  width: 90px;
  text-decoration: none;
  background-color: #9999FF;
  color: #000;
  border : solid 1px #6666CC;
  display: block;
  height: 30px;
  line-height: 30px;
  text-align: center;
}

.menu-item {
  width: 90px;
  text-decoration: none;
  background-color: #CCCCFF;
  color: #000;
  border : solid 1px #6666CC;
  border-top: none;
  display: block;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
</style>
