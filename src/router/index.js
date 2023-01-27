import { createRouter } from "vue-router";

const routes = [
  {
    path: "/home",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/about",
    component: () => import("../views/about.vue"),
  },
];

export default function (history) {
  return createRouter({
    // history: createWebHistory(),
    history,
    routes,
  });
}
