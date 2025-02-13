import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
/*     {
      path: "/",
      name: "LoginPage",
      component: () => import("../views/LoginPage.vue"),
      meta: { title: "登录" },
    }, */
    {
      path: "/",
      name: "IndexPage",
      component: () => import("../views/IndexPage.vue"),
      meta: { title: "首页" },
      redirect: {
        name: "CarouselPage",
      },
      children: [
        {
          path: "/index-page",
          name: "SamplePage",
          meta: { title: "首页" },
          redirect: {
            name: "CarouselPage",
          },
          children: [
            {
              path: "/index-page/carousel",
              name: "CarouselPage",
              component: () =>
                import("../components/index-page/CarouselPage.vue"),
              meta: { title: "首页顶部幻灯" },
            },
            {
              path: "/index-page/service-page",
              name: "ServicePage",
              component: () =>
                import("../components/index-page/ServicePage.vue"),
              meta: { title: "首页技术服务" },
            },
            {
              path: "/index-page/product-page",
              name: "ProductPage",
              component: () =>
                import("../components/index-page/ProductPage.vue"),
              meta: { title: "首页产品类别" },
            },
            {
              path: "/index-page/about-us",
              name: "AboutUs",
              component: () => import("../components/index-page/AboutUs.vue"),
              meta: { title: "首页关于我们" },
            },
            {
              path: "/index-page/customer-page",
              name: "CustomerPage",
              component: () =>
                import("../components/index-page/CustomerPage.vue"),
              meta: { title: "首页客户" },
            },
          ],
        },
        {
          path: "/technical-service",
          name: "ServiceIntroduce",
          meta: { title: "技术服务" },
          redirect: {
            name: "ServiceIntroduce",
          },
          children: [
            {
              path: "/technical-service/service-introduce",
              name: "ServiceIntroduce",
              component: () =>
                import("../components/technical-service/ServiceIntroduce.vue"),
            },
            {
              path: "/technical-service/capture-sequencing",
              name: "CaptureSequencing",
              component: () =>
                import("../components/technical-service/CaptureSequencing.vue"),
            },
            {
              path: "/technical-service/resequencing-page",
              name: "ResequencingPage",
              component: () =>
                import("../components/technical-service/ResequencingPage.vue"),
            },
            {
              path: "/technical-service/transcriptome-sequencing",
              name: "TranscriptomeSequencing",
              component: () =>
                import(
                  "../components/technical-service/TranscriptomeSequencing.vue"
                ),
            },
            {
              path: "/technical-service/data-service",
              name: "DataService",
              component: () =>
                import(
                  "../components/technical-service/DataService.vue"
                ),
            },
          ],
        },
        {
          path: "/product-center",
          name: "ProductSort",
          meta: { title: "产品中心" },
          redirect: {
            name: "ProductSort",
          },
          children: [
            {
              path: "/product-center/product-sort",
              name: "ProductSort",
              meta: { title: "类别管理" },
              component: () => import("../components/product-center/ProductSort.vue"),
            },
            {
              path: "/product-center/product-info",
              name: "ProductInfo",
              meta: { title: "信息管理" },
              component: () => import("../components/product-center/ProductInfo.vue"),
            }
          ]
        },
        {
          path: "/customer-answer",
          name: "AnimalRequirements",
          meta: { title: "客户解答" },
          redirect: {
            name: "AnimalRequirements",
          },
          children: [
            {
              path: "/customer-answer/animal-requirements",
              name: "AnimalRequirements",
              component: () =>
                import("../components/customer-answer/AnimalRequirements.vue"),
            },
          ]
        } 
      ],
    },
  ],
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 };
  },
});
export default router;
