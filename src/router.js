import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/views/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { title: 'TPA Holdings' },
    },
  ],
});

router.afterEach((to, _from) => {
  const parentTitle = to.matched.some(record => record.meta.title);
  document.title = to.meta.title || parentTitle || 'TPA Holdings';
});

export default router;
