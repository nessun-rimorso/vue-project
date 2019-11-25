import Vue from 'vue'
import App from './App.vue'
import List from './List'

Vue.filter('uppercase', value => value.toUpperCase())
Vue.component('app-list', List)
Vue.mixin({
  beforeCreate () {
    console.log('beforeCreate')
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
