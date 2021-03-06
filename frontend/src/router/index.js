// Pour la configuration des routes //

import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import Home from '../views/Home.vue';
import Post from '../views/Post.vue';
import Profile from '../views/Profile.vue';

Vue.use(VueRouter);
const mode = 'history';
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Post/:id',
    name: 'Post',
    component: Post
  },
  {
    path: '/Profile/:id',
    name: 'Profile',
    component: Profile
  }
];

const router = new VueRouter({
  routes, mode
});

export default router;
