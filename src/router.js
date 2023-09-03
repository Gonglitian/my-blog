// router.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue'; // 导入你的组件

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // 在这里添加其他路由配置
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
