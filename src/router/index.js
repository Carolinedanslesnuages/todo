import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import(/* webpackChunkName: home, webpackPrefetch: true */ '@/views/Home.vue')
const CreateHome = () => import(/* webpackChunkName: home, webpackPrefetch: true */ '@/views/CreateHome.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/CreateHome',
    name: 'create-home',
    component: CreateHome
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
