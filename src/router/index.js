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
import AdmProfile from '../views/admin/Profile.vue'

import PsyArticles from '../views/admin/psychologist/Articles.vue'
import PsyDatesAndHours from '../views/admin/psychologist/DatesAndHours.vue'
import PsyEvaluations from '../views/admin/psychologist/Evaluations.vue'
import PsyFinancial from '../views/admin/psychologist/Financial.vue'
import PsyMyPatients from '../views/admin/psychologist/MyPatients.vue'
import PsyProducts from '../views/admin/psychologist/Products.vue'
import PsySchedules from '../views/admin/psychologist/Schedules.vue'
import PsyStatistics from '../views/admin/psychologist/Statistics.vue'
import PsyStopClinic from '../views/admin/psychologist/StopClinic.vue'
import PsyVideos from '../views/admin/psychologist/Videos.vue'
import PsyVisitorFunnel from '../views/admin/psychologist/VisitorFunnel.vue'
import PsyMessages from '../views/admin/psychologist/Messages.vue'
import PsySupport from '../views/admin/psychologist/Support.vue'


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
      { path: '/profile', name: 'admin-profile', component: AdmProfile, props: true },
      
      { path: '/pa-agendamentos', component: Dashboard, props: true },
      { path: '/pa-dependentes', component: Dashboard, props: true },
      { path: '/pa-mensagens', component: Dashboard, props: true },
      { path: '/pa-suporte', component: Dashboard, props: true },

      { path: '/super-artigos', component: Dashboard, props: true },
      { path: '/super-videos', component: Dashboard, props: true },
      { path: '/super-custos', component: Dashboard, props: true },
      { path: '/super-movimentacoes', component: Dashboard, props: true },
      { path: '/super-estatisticas', component: Dashboard, props: true },

      { path: '/psi-datas-horarios', name: 'admin-psi-dates-and-hours', component: PsyDatesAndHours, props: true },
      { path: '/psi-produtos', name: 'admin-psi-products', component: PsyProducts, props: true },
      { path: '/psi-pacientes', name: 'admin-psi-my-patients', component: PsyMyPatients, props: true },
      { path: '/psi-gestao-financeira', name: 'admin-psi-financial', component: PsyFinancial, props: true },
      { path: '/psi-avaliacoes', name: 'admin-psi-evaluations', component: PsyEvaluations, props: true },
      { path: '/psi-agendamentos', name: 'admin-psi-schedules', component: PsySchedules, props: true },
      { path: '/psi-pausar-consultorio', name: 'admin-psi-stop-clinic', component: PsyStopClinic, props: true },
      { path: '/psi-estatisticas', name: 'admin-psi-statistics', component: PsyStatistics, props: true },
      { path: '/psi-funil-visitas', name: 'admin-psi-visitor-funnel', component: PsyVisitorFunnel, props: true },
      { path: '/psi-artigos', name: 'admin-psi-articles', component: PsyArticles, props: true },      
      { 
        path: '/psi-videos',
        name: 'admin-psi-videos', 
        component: PsyVideos, 
        props: true,
        children: [
          { path: ':id', component: PsyVideos, props: true },
        ]
      },
      { path: '/psi-mensagens', name: 'admin-psi-messages', component: PsyMessages, props: true },
      { path: '/psi-suporte', name: 'admin-psi-support', component: PsySupport, props: true },
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
