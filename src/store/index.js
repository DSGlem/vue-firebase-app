import Vue from "vue";
import Vuex from "vuex";

import user from "./modules/user.js";
import auth from "./modules/auth.js";

Vue.use(Vuex);

console.log(auth);

export default new Vuex.Store({
  state: () => ({
    data: "1"
  }),
  modules: { user, auth }
});
