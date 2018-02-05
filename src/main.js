import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/main.css'
import axios from './config/axios'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$http = axios

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
