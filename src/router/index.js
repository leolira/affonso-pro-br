import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import AcervoPage from '@/components/AcervoPage.vue'
import DownloadsPage from '@/views/DownloadsPage.vue'
import ContactPage from '@/views/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path:'/Acervo',
      name: 'Acervo', 
      component: AcervoPage
    },
    {
      path:'/Downloads',
      name: 'Downloads',
      component: DownloadsPage
    },
    {
      path:'/Contato',
      name: 'Contato',
      component: ContactPage
    }
  ]
})

export default router
