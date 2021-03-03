import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import FutureLaunches from '../pages/FutureLaunches';
import PastLaunches from '../pages/PastLaunches';
import HistoricalEvents from '../pages/HistoricalEvents';
import Rockets from '../pages/Rockets';

const routes = [
  {
    path: '/',
    component: FutureLaunches
  },
  {
    path: '/pastlaunche',
    component: PastLaunches
  },
  {
    path: '/HistoricalEvents',
    component: HistoricalEvents
  },
  {
    path: '/Rockets',
    component: Rockets
  }
];

const router = new VueRouter({
  routes,
  mode:'history'
});

export default router;