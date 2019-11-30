import Vue from 'vue'
import VueResourse from 'vue-resource'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueResourse)
Vue.http.options.root = 'http://localhost:3000/'
Vue.http.interceptors.push(request => {
  request.headers.set('Auth', 'RAND TOKEN ' + Math.random())
})

new Vue({
  render: h => h(App)
}).$mount('#app')
