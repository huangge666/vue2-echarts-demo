import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/home/Home.vue"),
  },
  {
    path: "/",
    name: "Layout",
    component: () => import("@/views/home/Layout.vue"),
    redirect: "/page1",
    children: [
      {
        path: "/homeTable",
        name: "HomeTable",
        component: () => import("@/views/home/HomeTable.vue"),
      },
      {
        path: "/page1",
        name: "Page1",
        component: () => import("@/views/others/pageOne.vue"),
      },
      {
        path: "/page2",
        name: "Page2",
        component: () => import("@/views/others/pageTwo.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

export default router;
