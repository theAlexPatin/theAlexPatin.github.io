// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueHead from 'vue-head'
import App from './App'
import polyfill from 'babel-polyfill'
import router from './router'
// Include compiled sass file
import './style/main.css'

Vue.config.productionTip = false
Vue.use(VueHead)

/*eslint-disable */
new Vue({
  el: '#thealexpatin',
  router,
  template: '<App/>',
  components: { App }
})
