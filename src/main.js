import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.prototype.$baseUrl = 'https://rickandmortyapi.com/api/';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
