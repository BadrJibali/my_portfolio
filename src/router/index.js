import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Portfolio from '../views/Portfolio.vue'
import Contact from '../views/Contact.vue'
import Blogs from '../views/Blogs.vue'
import SingleBlog from '../views/SingleBlog.vue'
import NotFound from '../views/NotFound.vue'
import NProgress from 'nprogress'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: Blogs
  },
  {
    path: '/blogs/blog/:id',
    name: 'blog',
    component: SingleBlog,
    props: true
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
  {
    path: '*',
    name: '404',
    redirect: { name: '404'}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((routeTo, routeFrom, next) => {
//     NProgress.start()
//   next()
// });

// router.afterEach(() => {
//   NProgress.done()
// });

export default router
