import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
