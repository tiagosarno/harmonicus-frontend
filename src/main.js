import './style.css'
import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import global from './global'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  global,
  render: h => h(App)
}).$mount('#app')
