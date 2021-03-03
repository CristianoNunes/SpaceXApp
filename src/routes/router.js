import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import FutureLaunches from '../pages/FutureLaunches';
import PastLaunches from '../pages/PastLaunches';

const routes = [
  {
    path: '/',
    component: FutureLaunches
  },
  {
    path: '/pastlaunche',
    component: PastLaunches
  }
];

const router = new VueRouter({
  routes,
  mode:'history'
});

export default router;