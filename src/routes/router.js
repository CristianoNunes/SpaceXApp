import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import FutureLaunches from '../pages/FutureLaunches';

const routes = [
  {
    path: '/',
    component: FutureLaunches
  }
];

const router = new VueRouter({
  routes,
  mode:'history'
});

export default router;