import './styles/main.scss'

import Vue from 'vue'

import letDirective from './directives/letDirective'

import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('let', letDirective)

new Vue({
  render: h => h(App),
}).$mount('#app')
