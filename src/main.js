import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";

// import firebase from "./firebase/app";
// import "firebase/auth";
// import "firebase/database";
// import "firebase/messaging";
// import "firebase/storage";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
