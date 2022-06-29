import App from './App'
import tabbar from "@/components/tabbar.vue"
import uFoot from "@/components/u-foot/u-foot.vue"
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.component('tabbar', tabbar); 
 Vue.component('uFoot', uFoot);  
App.mpType = 'app'
const app = new Vue({
    ...App
})
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
uni.$u.config.unit = 'rpx'
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
