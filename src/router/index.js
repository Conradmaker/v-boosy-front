import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Detail from '../views/Detail.vue'
import Category from '../views/Category.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search/:id',
    name: 'Search',
    meta: { title: 'BOOKSY | SEARCH' },
    component: Search
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    meta: { title: 'BOOKSY | DETAIL' },
    component: Detail
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category
  },
  {
    path: '/about',
    name: 'About',
    meta: { title: 'BOOKSY | ABOUT' },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const DEFAULT_TITLE = 'BOOKSY'

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || DEFAULT_TITLE
  next()
})
export default router
