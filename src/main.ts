import Vue from 'vue'
import App from './App.vue'
import 'lightgallery/css/lightgallery-bundle.css'

const app = new Vue({
  render: (h) => h(App)
})

app.$mount('#app')
