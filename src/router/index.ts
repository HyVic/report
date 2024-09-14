import { createRouter, createWebHistory  } from 'vue-router'
// import HomeIndex from '../views/IndexPage.vue'
const router = createRouter({
    history: createWebHistory (),
    routes: [
        {
            path: '/',
            name: 'IndexPage',
            component: () => import('../views/IndexPage.vue'),
            meta:{keepAlive: true},
            redirect: {
                name: 'HomePage'
            },
            children:[
                {
                    path: '/home',
                    name: 'HomePage',
                    meta:{title:"首页"},
                    component: () => import('../views/HomePage.vue')
                },
                {
                    path: '/search',
                    name: 'SearchPage',
                    meta:{title:"搜索"},
                    component: () => import('../views/SearchPage.vue')
                },
                {
                    path: '/tools',
                    name: 'ToolsPage',
                    meta:{title:"工具"},
                    component: () => import('../views/ToolsPage.vue')
                },
                {
                    path: '/project',
                    name: 'ProjectPage',
                    meta:{title:"项目"},
                    component: () => import('../views/ProjectPage.vue')
                },
                {
                    path: '/help',
                    name: 'HelpPage',
                    meta:{title:"帮助"},
                    component: () => import('../views/HelpPage.vue')
                }

            ]
        },
    ],
    scrollBehavior() {
        // 始终滚动到顶部
        return { top: 0 };
    }
})
export default router