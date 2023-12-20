import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/TexturePage.vue") },
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
