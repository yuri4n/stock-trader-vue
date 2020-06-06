import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

import { routes } from "./routes";
import store from "./store/store";

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.http.options.root = "https://vuestocktrader-6172e.firebaseio.com/";

Vue.use(VueRouter);
const router = new VueRouter({ mode: "history", routes });

Vue.filter("currency", value => {
  return `$${value.toLocaleString()}`;
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
