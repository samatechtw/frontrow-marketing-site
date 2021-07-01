import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/views/Home.vue';
import WhitepaperRedirect from '/src/views/WhitepaperRedirect.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { title: 'TPA Holdings' },
    },
    {
      path: '/whitepaper',
      component: WhitepaperRedirect,
    },
  ],
});

router.afterEach((to, _from) => {
  const parentTitle = to.matched.some(record => record.meta.title);
  document.title = to.meta.title || parentTitle || 'TPA Holdings';
});

export default router;
