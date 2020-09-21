import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("../views/Challenge/Challenge.vue"),
    },
    {
      path: "/challenge",
      meta: { auth: true },
      component: () => import("../views/Challenge/Challenge.vue"),
    },
    {
      path: "/SignIn",
      component: () => import("../views/SignIn/SignIn.vue"),
    },
    {
      path: "/SignUp",
      component: () => import("../views/SignUp/SignUp.vue"),
    },
  ],
});

router.beforeEach((to, form, next) => {
  const currentUser = firebase.auth().currentUser;
  console.log(currentUser);
  const requireAuth = to.matched.some((route) => route.meta.auth);
  console.log(requireAuth);
  if (requireAuth && !currentUser) {
    next("/SignIn");
  } else {
    next();
  }
});

export default router;
