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
      meta: { title: 'Front Row Foundation' },
    },
    /*
    {
      path: '/whitepaper',
      component: WhitepaperRedirect,
    },
    */
    {
      path: '/:pathMatch(.*)*',
      name: 'Home',
      component: Home,
      meta: { title: 'Front Row Foundation' },
    },
  ],
});

router.afterEach((to, _from) => {
  const parentTitle = to.matched.some((record) => record.meta.title);
  document.title = to.meta.title || parentTitle || 'Front Row Foundation';
});

export default router;
