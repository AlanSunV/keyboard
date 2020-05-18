import Vue from 'vue';
import Mint from 'mint-ui';
import vueTap from 'vue-js-tap';
import App from './App.vue';
import router from './router';
import 'mint-ui/lib/style.css';
import './assets/css/basic.scss';

Vue.use(Mint);
Vue.use(vueTap);
Vue.prototype.$g = g;

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app');
