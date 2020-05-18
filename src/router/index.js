import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [{
    name: 'pay',
    path: '/',
    component: (resolve) => require(['@/page/payIndex.vue'], resolve),
    meta: {
      requireLogin: true
    }
  }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireLogin) {
    next();
  } else {
    next();
  }
});

export default router;
