import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/styles/global.css";
import i18n from './i18n'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  i18n
}).$mount('#app')
