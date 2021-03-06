import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import alert from './core/alert'
import loading from './core/loading'
import colorPicker from './core/vue-color-picker'

Vue.use(colorPicker);
// require('./node/app');

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.config.productionTip = false;
Vue.prototype.$alert = alert;
Vue.prototype.$loading = loading;

new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app');
