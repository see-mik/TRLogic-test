import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./../views/Home.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('./../views/Create.vue')
  },
  {
    path: '/note/:id',
    name: 'note-view',
    component: () => import('./../views/Single.vue')
  }
];

export default new VueRouter({
  mode: 'history',
  routes
});