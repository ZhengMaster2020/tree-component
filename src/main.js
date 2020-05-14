import Vue from 'vue'
import App from './App.vue'

import axios from './api/api'
import Tree from './packages/Tree'

Vue.use(Tree)

Vue.config.productionTip = false

Vue.prototype.$http = axios


new Vue({
  render: h => h(App),
}).$mount('#app')
