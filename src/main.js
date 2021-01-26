import Vue from 'vue'
// import App from './App.vue'
import App from '@/App' //@是webpack中给src配置的别名

Vue.config.productionTip = false

/* new Vue({
  render: h => h(App),
}).$mount('#app') */
new Vue({
  el:'#app',
  render:h=>h(App),
})