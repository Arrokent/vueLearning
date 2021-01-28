import Vue from 'vue'
import App from './App'
// 挂载后所有Vue组件都有一个$store属性
import store from "./store";

Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
