import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "LoginPage",
      component: () => import("../views/LoginPage.vue"),
      meta: { title: "登录" },
    },
    {
      path: "/index",
      name: "IndexPage",
      component: () => import("../views/IndexPage.vue"),
      meta: { keepAlive: true },
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
          path: "/fingerprint",
          name: "FingerprintSearch",
          meta: { title: "指纹识别" },
          component: () =>
            import("../components/information-search/FingerprintSearch.vue"),
        },
        {
          path: "/snpmarker",
          name: "SNPMarkerSearch",
          meta: { title: "SNP标记" },
          component: () =>
            import("../components/information-search/SNPMarkerSearch.vue"),
        },
        {
          path: "/varietysimilarityanalysis",
          name: "VarietySimilarityAnalysis",
          meta: { title: "品种相似度分析" },
          component: () =>
            import(
              "../components/information-search/VarietySimilarityAnalysis.vue"
            ),
        },
        {
          path: "/varietydifferenceanalysis",
          name: "VarietyDifferenceAnalysis",
          meta: { title: "品种差异分析" },
          component: () =>
            import(
              "../components/information-search/VarietyDifferenceAnalysis.vue"
            ),
        },
        {
          path: "/predictionofhybridparents",
          name: "PredictionOfHybridParents",
          meta: { title: "杂交亲本预测" },
          component: () =>
            import(
              "../components/information-search/PredictionOfHybridParents.vue"
            ),
        },
        /*         {
          path: "/information-management",
          name: "AccountInformationManagement",
          meta: { title: "企业账户管理" },
          component: () =>
            import(
              "../components/information-management/AccountInformationManagement.vue"
            ),
        }, */
      ],
    },
  ],
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 };
  },
});
export default router;
