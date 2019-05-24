import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';
import { mainTheme } from '@/styles/mainTheme.ts'

Vue.config.productionTip = false;
Vue.use(Vuetify, {
    theme: mainTheme
  })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
