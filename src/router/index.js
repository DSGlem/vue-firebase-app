import Vue from "vue";
import VueRouter from "vue-router";

import Test from "../Test";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/v3",
      component: Test
    }
  ]
});

export default router;
