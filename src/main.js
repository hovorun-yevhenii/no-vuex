import Vue from 'vue'
import App from './App.vue'

Vue.prototype.$baseUrl = 'https://rickandmortyapi.com/api/';

new Vue({
  el: '#app',
  render: h => h(App)
})
