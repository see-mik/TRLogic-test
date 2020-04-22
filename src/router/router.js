import Vue from 'vue';
import VueRouter from 'vue-router';

import nHome from './../views/n-home.vue';
import nCreate from './../views/n-create.vue';
import nSingle from './../views/n-single.vue';



Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => nHome
  },
  {
    path: '/create',
    name: 'create',
    component: () => nCreate
  },
  {
    path: '/note/:id',
    name: 'note-view',
    component: () => nSingle
  }
];

export default new VueRouter({
  mode: 'history',
  routes
});