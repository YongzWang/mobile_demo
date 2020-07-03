import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/common.css'
import Bus from './utils/bus';
import 'lib-flexible';

Vue.config.productionTip = false
Vue.prototype.bus = Bus
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
