import Vue from 'vue'
import Index from './IndexPage.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Index),
}).$mount('#app')
