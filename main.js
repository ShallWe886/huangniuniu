import App from './App'
import uView from '@/uni_modules/uview-ui'
import tabbar from "@/components/tabbar.vue"
import uFoot from "@/components/u-foot/u-foot.vue"
import enviroment from "@/static/js/enviroment.js"
import api from "./api/api.js"
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.use(uView)
uni.$u.config.unit = 'rpx'
Vue.component('tabbar', tabbar);
Vue.component('uFoot', uFoot);
Vue.prototype.$api = api
Vue.prototype.$image = enviroment.getImgUrl()

Vue.mixin({
	data() {
		return {
			imageUrl: this.$image
		}
	}
})
App.mpType = 'app'
const app = new Vue({
	...App
})

app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
