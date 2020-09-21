import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/auth.js";
import user from "./modules/user.js";

Vue.use(Vuex);

console.log(auth);

export default new Vuex.Store({
  state: () => ({
    data: "1",
  }),
  modules: { user, auth },
});
