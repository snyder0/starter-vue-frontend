import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from '@/stores/store';
import Vuetify from 'vuetify';
import { mainTheme } from '@/styles/mainTheme.ts'

Vue.config.productionTip = false;
Vue.use(Vuetify, {
  theme: mainTheme
})

let VueApp: any = Vue;

let Bploc = new VueApp({
  router,
  store,
  render: (h: (arg0: any) => void) => h(App),
}).$mount('#app');
