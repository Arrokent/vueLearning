import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const About = () => import('../views/about/About')
const Profile = () => import('../views/profile/Profile')

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
]

const router = new Router({
  routes,
  mode: 'history',
})

export default router
