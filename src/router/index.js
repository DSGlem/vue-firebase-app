import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("../views/SignIn/SignIn.vue")
    },
    {
      path: "/addCart",
      component: () => import("../views/SignIn/SignIn.vue")
    },
    {
      path: "/SignIn",
      component: () => import("../views/SignIn/SignIn.vue")
    },
    {
      path: "/SignUp",
      component: () => import("../views/SignIn/SignIn.vue")
    }
  ]
});

export default router;
