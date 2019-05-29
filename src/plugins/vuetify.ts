import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

// Main theme file
import { mainTheme } from '@/styles/mainTheme.ts'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: mainTheme,
  customProperties: true
})
