import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./../views/n-home.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('./../views/n-create.vue')
  },
  {
    path: '/note/:id',
    name: 'note-view',
    component: () => import('./../views/n-single.vue')
  }
];

export default new VueRouter({
  mode: 'history',
  routes
});