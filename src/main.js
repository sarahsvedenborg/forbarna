import Vue from 'vue'
import App from './App.vue'
import titleMixin from "./mixins/titleMixin"

import VueRouter from "vue-router";
import {routes} from "./routes"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faPlus, faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faPlus)
library.add(faTrash)
library.add(faArrowRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

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
