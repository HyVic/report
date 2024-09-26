import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import '../public/iconfont/iconfont.css'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import * as echarts from 'echarts';

import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(ElementPlus,{
    locale: zhCn,
  })
// app.config.globalProperties.$echarts = echarts
app.mount('#app')
