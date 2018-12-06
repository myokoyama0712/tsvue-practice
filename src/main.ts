import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index.js';

Vue.config.productionTip = false;

new Vue({
  router,
  store,  // mainで注入することで子テンプレートでstoreが使用できる（参照できる）
  render: (h) => h(App),
}).$mount('#app');
