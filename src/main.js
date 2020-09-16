import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";

import axios from "axios";
import firebase from "firebase/app";

import Vuelidate from "vuelidate";

Vue.prototype.$axios = axios;
Vue.use(Vuelidate);

// import firebase from "./firebase/app";
// import "firebase/auth";
// import "firebase/database";
// import "firebase/messaging";
// import "firebase/storage";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyDmRjyz3Q89RWwERUETZsUCpgtHJIxaIjY",
  authDomain: "fir-vue-app-d6a61.firebaseapp.com",
  databaseURL: "https://fir-vue-app-d6a61.firebaseio.com",
  projectId: "fir-vue-app-d6a61",
  storageBucket: "fir-vue-app-d6a61.appspot.com",
  messagingSenderId: "63256332049",
  appId: "1:63256332049:web:0d2f4ce630f25ce8612eb0",
};
firebase.initializeApp(firebaseConfig);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
