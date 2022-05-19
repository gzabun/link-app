import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "List",
    component: () => import(/* webpackChunkName: "List" */ "../views/List.vue"),
  },
  {
    path: "/new",
    name: "New",
    component: () => import(/* webpackChunkName: "New" */ "../views/New.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
