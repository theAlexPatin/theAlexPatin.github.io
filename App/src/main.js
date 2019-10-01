// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueHead from 'vue-head'
import VueProgressBar from 'vue-progressbar'
import App from './App'
import polyfill from 'babel-polyfill'
import router from './router'
// Include compiled sass file
import './style/main.sass'

Vue.config.productionTip = false
Vue.use(VueHead)
Vue.use(VueProgressBar, {
  color: '#ff8080',
  failedColor: '#874b4b',
  thickness: '4px',
  transition: {
    speed: '3s',
    opacity: '0.6s',
    termination: 300,
  },
  autoRevert: true,
  location: 'top',
  inverse: false,
})

Vue.mixin({
  methods: {
    $ga(label, category = 'Navigation') {
      try {
        gtag('event', 'click', {
          'event_category': category,
          'event_label': label
        })
      } catch(err) {
        console.log(err)
      }
    },
  },
})

/*eslint-disable */
new Vue({
  el: '#thealexpatin',
  router,
  template: '<App/>',
  components: { App }
})
