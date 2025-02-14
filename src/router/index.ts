import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "IndexPage",
      component: () => import("../views/IndexPage.vue"),
      meta: { title: "首页" },
    },
  ],
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 };
  },
});
export default router;
