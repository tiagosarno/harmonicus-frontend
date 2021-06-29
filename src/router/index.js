import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/website/Home.vue'
import SignUp from '../views/website/SignUp.vue'
import WhoIs from '../views/website/WhoIs.vue'
import Videos from '../views/website/Videos.vue'
import Articles from '../views/website/Articles.vue'
import Ethics from '../views/website/Ethics.vue'
import Questions from '../views/website/Questions.vue'
import Support from '../views/website/Support.vue'
import Search from '../views/website/Search.vue'
import PsyPage from '../views/website/PsyPage.vue'

import Index from '../views/admin/Index.vue'
import Dashboard from '../views/admin/Dashboard.vue'

import PsyVideos from '../views/admin/psychologist/Videos.vue'

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
  },
  {
    path: '/admin',    
    component: Index,
    props: true,
    children: [
      { path: '', component: Dashboard, name: 'admin-dashboard', props: true },
      { path: '/super-artigos', component: Dashboard, props: true },
      { path: '/super-videos', component: Dashboard, props: true },
      { path: '/super-custos', component: Dashboard, props: true },
      { path: '/super-movimentacoes', component: Dashboard, props: true },
      { path: '/super-estatisticas', component: Dashboard, props: true },
      { path: '/psi-datas-horarios', component: Dashboard, props: true },
      { path: '/psi-produtos', component: Dashboard, props: true },
      { path: '/psi-pacientes', component: Dashboard, props: true },
      { path: '/psi-gestao-financeira', component: Dashboard, props: true },
      { path: '/psi-avaliacoes', component: Dashboard, props: true },
      { path: '/psi-agendamentos', component: Dashboard, props: true },
      { path: '/psi-pausar-consulas', component: Dashboard, props: true },
      { path: '/psi-estatisticas', component: Dashboard, props: true },
      { path: '/psi-funil-visitas', component: Dashboard, props: true },
      { path: '/psi-artigos', component: Dashboard, props: true },
      { 
        path: '/psi-videos',
        name: 'admin-psi-videos', 
        component: PsyVideos, 
        props: true,
        children: [
          { path: ':id', component: PsyVideos, props: true },
        ]
      },
      { path: '/psi-mensagens', component: Dashboard, props: true },
      { path: '/psi-suporte', component: Dashboard, props: true },
      { path: '/pa-agendamentos', component: Dashboard, props: true },
      { path: '/pa-dependentes', component: Dashboard, props: true },
      { path: '/pa-mensagens', component: Dashboard, props: true },
      { path: '/pa-suporte', component: Dashboard, props: true },
    ]
  },
  {
    path: '/:page',
    name: 'psyPage',
    component: PsyPage,
    props: true
  },
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
