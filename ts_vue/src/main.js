import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './axios'
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
Vue.component("my-header",MyHeader);
Vue.component("my-footer",MyFooter);

Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
