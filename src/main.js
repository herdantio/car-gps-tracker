import Vue from 'vue'
import App from './App.vue'
import store from './store'

// import element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import gmapvue
import * as GmapVue from 'gmap-vue'

// import scss style globally
import './style/global-style.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(GmapVue, {
  load: {
    key: 'AIzaSyAb3tSq4dp9Ww2bhmrcqn_5epAJscBkbWU',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'gmap-vue/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then set installComponents to 'false'.
  //// If you want to automatically install all the components this property must be set to 'true':
  installComponents: true
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
