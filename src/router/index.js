import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/website/Home.vue'
import SignUp from '../views/website/SignUp.vue'
import WhoIs from '../views/website/WhoIs.vue'
import Videos from '../components/videos/Videos.vue'
import Articles from '../components/articles/Articles.vue'
import Ethics from '../views/website/Ethics.vue'
import Questions from '../views/website/Questions.vue'
import Support from '../views/website/Support.vue'
import Search from '../views/website/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/cadastrar/:component',
    name: 'signUp',
    component: SignUp,
    props: true
  },
  {
    path: '/pesquisa',
    name: 'search',
    component: Search,
    props: true
  },
  {
    path: '/quemsomos',
    name: 'whoIs',
    component: WhoIs
  },
  {
    path: '/videos',
    name: 'videos',
    component: Videos
  },
  {
    path: '/artigos',
    name: 'articles',
    component: Articles
  },
  {
    path: '/codigo-de-etica',
    name: 'ethics',
    component: Ethics
  },
  {
    path: '/perguntas-respostas',
    name: 'questions',
    component: Questions
  },
  {
    path: '/suporte',
    name: 'support',
    component: Support
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    }
    else if(to.hash) {
      return { selector: to.hash }
    }
    else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes
})

export default router
