import Vue from 'vue';
import VueRouter from 'vue-router';

const nHome = () => import('./../views/n-home.vue');
const nCreate = () => import('./../views/n-create.vue');
const nSingle = () => import('./../views/n-single.vue');
const nLogin = () => import('./../views/n-login.vue');
const nRegistration = () => import('./../views/n-registration.vue');



Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: nHome
  },
  {
    path: '/create',
    name: 'create',
    component: nCreate
  },
  {
    path: '/note/:id',
    name: 'note-view',
    component: nSingle
  },
  {
    path: '/login',
    name: 'login-form',
    component: nLogin
  },
  {
    path: '/registration',
    name: 'registration-form',
    component: nRegistration
  }
];

export default new VueRouter({
  mode: 'history',
  routes
});