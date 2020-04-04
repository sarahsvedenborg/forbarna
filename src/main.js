import Vue from 'vue'
import App from './App.vue'
import titleMixin from "./mixins/titleMixin"

import VueRouter from "vue-router";
import {routes} from "./routes"

Vue.use(VueRouter);

const router = new VueRouter(
    {
      routes: routes
    }
);

Vue.mixin(titleMixin);
Vue.config.productionTip = false;

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app');
